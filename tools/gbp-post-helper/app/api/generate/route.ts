import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { clientConfig } from "@/client.config"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { serviceType, city, notes } = await req.json()

    if (!serviceType || !city) {
      return NextResponse.json({ error: "serviceType and city are required" }, { status: 400 })
    }

    const prompt = `You are a local SEO expert writing a Google Business Profile post for a ${clientConfig.niche} business called "${clientConfig.businessName}" based in ${clientConfig.primaryCity}, ${clientConfig.state}.

Write a short, engaging post (2–3 sentences, max 250 characters) about a completed job. The post should:
- Mention the service type: ${serviceType}
- Mention the city/area: ${city}, ${clientConfig.state}
- Sound natural and professional, not robotic
- Include the business phone number: ${clientConfig.phone}
- End with a subtle call to action
${notes ? `- Additional context from the tech: ${notes}` : ""}

Return ONLY the post text. No hashtags, no emojis, no quotes around it.`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    })

    const text = completion.choices[0]?.message?.content?.trim()

    if (!text) {
      return NextResponse.json({ error: "No text generated" }, { status: 500 })
    }

    return NextResponse.json({ text })
  } catch (error) {
    console.error("Generate error:", error)
    return NextResponse.json({ error: "Generation failed" }, { status: 500 })
  }
}
