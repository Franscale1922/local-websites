import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// Google Business Profile API endpoint
const GBP_BASE = "https://mybusiness.googleapis.com/v4"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const { photoUrl, postText, accountId, locationId } = await req.json()

    if (!photoUrl || !postText || !accountId || !locationId) {
      return NextResponse.json({ error: "photoUrl, postText, accountId, and locationId are required" }, { status: 400 })
    }

    // Build the GBP local post payload
    const localPost = {
      languageCode: "en-US",
      summary: postText,
      media: [
        {
          mediaFormat: "PHOTO",
          sourceUrl: photoUrl,
        },
      ],
      topicType: "STANDARD",
    }

    // POST to the GBP API
    const gbpRes = await fetch(
      `${GBP_BASE}/accounts/${accountId}/locations/${locationId}/localPosts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(localPost),
      }
    )

    if (!gbpRes.ok) {
      const errorBody = await gbpRes.text()
      console.error("GBP API error:", errorBody)
      return NextResponse.json(
        { error: "GBP API call failed", details: errorBody },
        { status: gbpRes.status }
      )
    }

    const result = await gbpRes.json()
    return NextResponse.json({ success: true, post: result })
  } catch (error) {
    console.error("Post error:", error)
    return NextResponse.json({ error: "Post failed" }, { status: 500 })
  }
}

// ─── Helper: fetch the business owner's accounts and locations ───────────────
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // Get accounts list
    const accountsRes = await fetch(`${GBP_BASE}/accounts`, {
      headers: { Authorization: `Bearer ${session.accessToken}` },
    })

    if (!accountsRes.ok) {
      return NextResponse.json({ error: "Failed to fetch accounts" }, { status: accountsRes.status })
    }

    const accountsData = await accountsRes.json()
    const accounts = accountsData.accounts || []

    // For each account, fetch its locations
    const accountsWithLocations = await Promise.all(
      accounts.map(async (account: { name: string; accountName: string }) => {
        const locRes = await fetch(`${GBP_BASE}/${account.name}/locations`, {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        })
        const locData = locRes.ok ? await locRes.json() : { locations: [] }
        return { ...account, locations: locData.locations || [] }
      })
    )

    return NextResponse.json({ accounts: accountsWithLocations })
  } catch (error) {
    console.error("Accounts fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch accounts" }, { status: 500 })
  }
}
