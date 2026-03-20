import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message } = await req.json();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"GoHyperLocal Website" <${process.env.SMTP_USER}>`,
      to: "hello@delhidigital.co",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${company}`,
      html: `
        <h2>New Contact Enquiry — GoHyperLocal</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:600;color:#333;">Name</td><td style="padding:8px 12px;color:#555;">${name}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:600;color:#333;">Email</td><td style="padding:8px 12px;color:#555;">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#333;">Company</td><td style="padding:8px 12px;color:#555;">${company}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:600;color:#333;">Phone</td><td style="padding:8px 12px;color:#555;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#333;vertical-align:top;">Message</td><td style="padding:8px 12px;color:#555;">${message || "No message"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
