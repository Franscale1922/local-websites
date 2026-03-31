"use client"
import { useState, useRef, useCallback, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { clientConfig } from "@/client.config"

type Tab = "post" | "review"
type PostState = "idle" | "uploading" | "generating" | "posting" | "success" | "error"

interface GBPAccount { name: string; accountName: string; locations: { name: string; locationName: string }[] }

export default function Home() {
  const { data: session, status } = useSession()

  // ─── GBP Account state ─────────────────────────────────────────
  const [accounts, setAccounts] = useState<GBPAccount[]>([])
  const [selectedAccount, setSelectedAccount] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  // ─── Post form state ────────────────────────────────────────────
  const [tab, setTab] = useState<Tab>("post")
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [serviceType, setServiceType] = useState("")
  const [city, setCity] = useState("")
  const [notes, setNotes] = useState("")
  const [postText, setPostText] = useState("")
  const [postState, setPostState] = useState<PostState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [isDragOver, setIsDragOver] = useState(false)

  // ─── Review request state ───────────────────────────────────────
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [reviewPlatform, setReviewPlatform] = useState<"google" | "yelp">("google")
  const [copied, setCopied] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Fetch GBP accounts after auth
  useEffect(() => {
    if (session?.accessToken) {
      fetch("/api/post")
        .then(r => r.json())
        .then(data => {
          if (data.accounts?.length) {
            setAccounts(data.accounts)
            // Auto-select first account/location
            const firstAcc = data.accounts[0]
            setSelectedAccount(firstAcc.name)
            if (firstAcc.locations?.length) setSelectedLocation(firstAcc.locations[0].name)
          }
        })
        .catch(console.error)
    }
  }, [session])

  // ─── Photo selection ────────────────────────────────────────────
  const handlePhoto = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return
    setPhotoFile(file)
    const reader = new FileReader()
    reader.onload = e => setPhotoPreview(e.target?.result as string)
    reader.readAsDataURL(file)
  }, [])

  const clearPhoto = () => {
    setPhotoFile(null)
    setPhotoPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  // ─── Generate post text ─────────────────────────────────────────
  const generateText = async () => {
    if (!serviceType || !city) return
    setPostState("generating")
    setPostText("")
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceType, city, notes }),
      })
      const data = await res.json()
      if (data.text) setPostText(data.text)
      else throw new Error("No text returned")
    } catch {
      setErrorMsg("Couldn't generate text. Try writing it manually.")
    } finally {
      setPostState("idle")
    }
  }

  // ─── Submit post to GBP ─────────────────────────────────────────
  const handlePost = async () => {
    if (!photoFile || !postText || !selectedAccount || !selectedLocation) return
    setPostState("uploading")
    setErrorMsg("")

    try {
      // 1. Upload photo to Vercel Blob
      const form = new FormData()
      form.append("photo", photoFile)
      const uploadRes = await fetch("/api/upload", { method: "POST", body: form })
      const { url, error: uploadErr } = await uploadRes.json()
      if (uploadErr || !url) throw new Error(uploadErr || "Upload failed")

      // 2. Create GBP post
      setPostState("posting")
      const accountId = selectedAccount.split("/")[1]
      const locationId = selectedLocation.split("/locations/")[1]

      const postRes = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ photoUrl: url, postText, accountId, locationId }),
      })
      const postData = await postRes.json()
      if (!postData.success) throw new Error(postData.error || "Post failed")

      setPostState("success")
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
      setPostState("error")
    }
  }

  const resetForm = () => {
    clearPhoto()
    setServiceType("")
    setCity("")
    setNotes("")
    setPostText("")
    setPostState("idle")
    setErrorMsg("")
  }

  // ─── Review message generator ────────────────────────────────────
  const reviewUrl = reviewPlatform === "google" ? clientConfig.googleReviewUrl : clientConfig.yelpUrl
  const reviewMsg = customerName
    ? `Hi ${customerName}! Thanks for choosing ${clientConfig.businessName} — it was a pleasure working with you. If you have a moment, we'd really appreciate a quick review:\n\n${reviewUrl}\n\nIt only takes 60 seconds and helps us a ton. Thank you! 🙏`
    : ""

  const copyReview = () => {
    navigator.clipboard.writeText(reviewMsg)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const smsHref = `sms:${customerPhone}?body=${encodeURIComponent(reviewMsg)}`

  // ─── Signed-out screen ───────────────────────────────────────────
  if (status === "unauthenticated") {
    return (
      <div className="signin">
        <div className="signin-logo">⚡</div>
        <h1 className="signin-title">GBP <span>Post Helper</span></h1>
        <p className="signin-sub">Post job photos to your Google Business Profile in 30 seconds.</p>
        <button className="btn-signin" onClick={() => signIn("google")}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Sign in with Google
        </button>
        <div className="signin-features">
          <div className="signin-feature"><span>📸</span><span>Upload job photos from your camera roll</span></div>
          <div className="signin-feature"><span>✍️</span><span>AI writes the post description for you</span></div>
          <div className="signin-feature"><span>🚀</span><span>One tap to publish to Google Business Profile</span></div>
          <div className="signin-feature"><span>⭐</span><span>Send review requests via text</span></div>
        </div>
      </div>
    )
  }

  if (status === "loading") {
    return (
      <div className="signin">
        <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3 }} />
      </div>
    )
  }

  // ─── Success screen ──────────────────────────────────────────────
  if (postState === "success") {
    return (
      <div className="app">
        <header className="header">
          <div className="header-logo">⚡ GBP <span>Post Helper</span></div>
        </header>
        <main className="main">
          <div className="success">
            <span className="success-icon">🎉</span>
            <h2 className="success-title"><span>Live</span> on Google!</h2>
            <p className="success-sub">Your post is now visible on Google Maps and Search. It may take a few minutes to appear.</p>
            <button className="btn-again" onClick={resetForm}>Post Another Job</button>
          </div>
        </main>
      </div>
    )
  }

  const locations = accounts.find(a => a.name === selectedAccount)?.locations || []
  const isPosting = postState === "uploading" || postState === "posting"
  const canPost = !!photoFile && !!postText && !!selectedLocation && !isPosting

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-logo">⚡ GBP <span>Post Helper</span></div>
        <div className="user-row">
          {session?.user?.image && <img src={session.user.image} alt="" />}
          <button className="btn-signout" onClick={() => signOut()}>Sign out</button>
        </div>
      </header>

      <main className="main">
        {/* Tabs */}
        <div className="tabs">
          <button className={`tab ${tab === "post" ? "active" : ""}`} onClick={() => setTab("post")}>📸 Post Job</button>
          <button className={`tab ${tab === "review" ? "active" : ""}`} onClick={() => setTab("review")}>⭐ Get Review</button>
        </div>

        {/* ── POST TAB ─────────────────────────────────────────────── */}
        {tab === "post" && (
          <>
            {/* Photo upload */}
            <div className="card">
              <div className="card-title">📷 Job Photo</div>
              <div
                className={`photo-zone ${isDragOver ? "drag-over" : ""}`}
                onDragOver={e => { e.preventDefault(); setIsDragOver(true) }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={e => { e.preventDefault(); setIsDragOver(false); const f = e.dataTransfer.files[0]; if (f) handlePhoto(f) }}
                onClick={() => !photoPreview && fileInputRef.current?.click()}
                style={{ cursor: photoPreview ? "default" : "pointer" }}
              >
                <input
                  ref={fileInputRef}
                  type="file" accept="image/*" capture="environment"
                  onChange={e => { const f = e.target.files?.[0]; if (f) handlePhoto(f) }}
                  style={{ display: "none" }}
                />
                {photoPreview ? (
                  <>
                    <img src={photoPreview} alt="Preview" className="photo-preview" />
                    <button className="photo-clear" onClick={e => { e.stopPropagation(); clearPhoto() }}>✕</button>
                  </>
                ) : (
                  <>
                    <span className="photo-zone-icon">📸</span>
                    <div className="photo-zone-text"><strong>Tap to take or choose a photo</strong><br />Drag & drop also works</div>
                  </>
                )}
                {postState === "uploading" && (
                  <div className="uploading-overlay"><span className="spinner" />Uploading...</div>
                )}
              </div>
            </div>

            {/* Job details */}
            <div className="card">
              <div className="card-title">🔧 Job Details</div>

              {/* Account selector (if multiple) */}
              {accounts.length > 1 && (
                <div className="field">
                  <label>Business Account</label>
                  <select value={selectedAccount} onChange={e => setSelectedAccount(e.target.value)}>
                    {accounts.map(a => <option key={a.name} value={a.name}>{a.accountName}</option>)}
                  </select>
                </div>
              )}

              {/* Location selector */}
              {locations.length > 1 && (
                <div className="field">
                  <label>Location</label>
                  <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
                    {locations.map(l => <option key={l.name} value={l.name}>{l.locationName}</option>)}
                  </select>
                </div>
              )}

              <div className="field">
                <label>Service Type</label>
                <select value={serviceType} onChange={e => setServiceType(e.target.value)}>
                  <option value="">— Select service —</option>
                  {clientConfig.serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="field">
                <label>City / Area</label>
                <select value={city} onChange={e => setCity(e.target.value)}>
                  <option value="">— Select area —</option>
                  {clientConfig.serviceAreas.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className="field">
                <label>Notes (optional)</label>
                <textarea
                  placeholder="E.g. 200A panel upgrade, 1960s home, added EV circuit..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  style={{ minHeight: 72 }}
                />
              </div>

              <button
                className="btn-generate"
                onClick={generateText}
                disabled={!serviceType || !city || postState === "generating"}
              >
                {postState === "generating" ? <><span className="spinner" />Writing post...</> : "✨ Auto-Write Post Description"}
              </button>
            </div>

            {/* Post text editor */}
            <div className="card">
              <div className="card-title">📝 Post Description</div>
              <div className="field">
                <textarea
                  placeholder="Your post description will appear here — or write your own..."
                  value={postText}
                  onChange={e => setPostText(e.target.value)}
                  style={{ minHeight: 120 }}
                />
                <div className={`char-count ${postText.length > 1500 ? "warn" : ""}`}>
                  {postText.length} / 1500 chars
                </div>
              </div>
            </div>

            {/* Error */}
            {postState === "error" && (
              <div className="card" style={{ borderColor: "var(--error)", marginBottom: 16 }}>
                <span className="text-muted" style={{ color: "var(--error)" }}>⚠️ {errorMsg}</span>
              </div>
            )}

            {/* Submit */}
            <button className="btn-post" onClick={handlePost} disabled={!canPost}>
              {isPosting
                ? <><span className="spinner" />{postState === "uploading" ? "Uploading photo..." : "Publishing to Google..."}</>
                : "🚀 Post to Google Business Profile"
              }
            </button>

            {!canPost && !isPosting && (
              <p className="text-muted mt-8" style={{ textAlign: "center" }}>
                {!photoFile ? "Add a photo to get started" : !postText ? "Write or generate a post description" : "Select a GBP location above"}
              </p>
            )}
          </>
        )}

        {/* ── REVIEW TAB ───────────────────────────────────────────── */}
        {tab === "review" && (
          <div className="card">
            <div className="card-title">⭐ Review Request</div>

            <div className="field">
              <label>Platform</label>
              <select value={reviewPlatform} onChange={e => setReviewPlatform(e.target.value as "google" | "yelp")}>
                <option value="google">Google</option>
                <option value="yelp">Yelp</option>
              </select>
            </div>

            <div className="field">
              <label>Customer first name</label>
              <input
                type="text" placeholder="e.g. Mike"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Customer phone (for SMS)</label>
              <input
                type="tel" placeholder="(360) 555-0100"
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
              />
            </div>

            {reviewMsg && (
              <>
                <div className="review-msg">{reviewMsg}</div>
                <div className="review-actions">
                  <button className={`btn-copy ${copied ? "copied" : ""}`} onClick={copyReview}>
                    {copied ? "✓ Copied!" : "📋 Copy"}
                  </button>
                  {customerPhone && (
                    <a className="btn-sms" href={smsHref}>💬 Send Text</a>
                  )}
                </div>
              </>
            )}

            {!customerName && (
              <p className="text-muted mt-8">Enter the customer's name to generate a personalized message.</p>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
