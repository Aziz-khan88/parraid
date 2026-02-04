import { NextResponse } from "next/server"
import { google } from "googleapis"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const data = await req.json()

    const name = data.name?.toString().trim() || ""
    const email = data.email?.toString().trim() || ""
    const phone = data.phone?.toString().trim() || ""
    const message = data.message?.toString().trim() || ""
    const company = data.company?.toString().trim() || ""
    const pageurl = data.pageurl?.toString().trim() || ""

    /* ===== IP + LOCATION (SAFE) ===== */
    let ip = "",
      city = "",
      state = "",
      country = ""

    try {
      const geoRes = await fetch(
        "https://ipinfo.io/json?token=229b1c3fa2e54c",
        {
          cache: "no-store",
        },
      )
      const geo = await geoRes.json()

      ip = geo.ip || ""
      city = geo.city || ""
      state = geo.region || ""
      country = geo.country || ""
    } catch (geoErr) {
      console.error("Geo lookup failed:", geoErr)
    }

    /* ===== GOOGLE SHEET ===== */
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:J", // ✅ 10 columns
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            name,
            email,
            phone,
            company,
            message,
            ip,
            city,
            state,
            country,
            pageurl,
          ],
        ],
      },
    })

    /* ===== SMTP ===== */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // USER EMAIL
    await transporter.sendMail({
      from: `"Parraid" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting Parraid",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting <b>Parraid</b>.</p>
        <p>Our team will contact you shortly.</p>
      `,
    })

    // OWNER EMAIL
    await transporter.sendMail({
      from: `"Parraid Lead" <${process.env.SMTP_EMAIL}>`,
      to: "developer@inhousedept.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>IP:</b> ${ip}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>State:</b> ${state}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Page URL:</b> ${pageurl}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("❌ API ERROR:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    )
  }
}
