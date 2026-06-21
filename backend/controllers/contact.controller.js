import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactMessage(req, res) {
  try {
    const { name, email, phone, destination, tourType, travelers, date, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email and message are required." });
    }

    const reference = `AUR-CT-${Date.now().toString().slice(-6)}`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#FFFDF8;border:1px solid #e8d9b0;border-radius:14px;overflow:hidden;">
        <div style="background:#2C1A06;padding:24px 28px;">
          <div style="color:#C9A84C;font-size:20px;font-weight:bold;letter-spacing:2px;">AUREVIAN TOURS</div>
          <div style="color:#C9A84C;opacity:.7;font-size:11px;letter-spacing:3px;margin-top:4px;">NEW CONTACT INQUIRY</div>
        </div>
        <div style="padding:26px 28px;color:#2C1A06;">
          <p style="font-size:13px;color:#6B4E1A;">Reference: <strong>${reference}</strong></p>
          <table style="width:100%;font-size:13px;margin-top:14px;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#9C7A3C;width:120px;">Name</td><td style="padding:6px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Phone</td><td style="padding:6px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Destination</td><td style="padding:6px 0;">${destination || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Tour Type</td><td style="padding:6px 0;">${tourType || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Travelers</td><td style="padding:6px 0;">${travelers || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#9C7A3C;">Travel Date</td><td style="padding:6px 0;">${date || "—"}</td></tr>
          </table>
          <div style="margin-top:18px;padding:14px;background:#F3ECD8;border-radius:10px;">
            <div style="font-size:11px;color:#A07828;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Message</div>
            <div style="font-size:13px;white-space:pre-wrap;">${message}</div>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Aurevian Tours Website" <${process.env.EMAIL_USER}>`,
      to:   process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact Inquiry from ${name} — Ref: ${reference}`,
      html,
    });

    // Confirmation email back to the visitor
    try {
      await transporter.sendMail({
        from: `"Aurevian Tours" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `✦ We received your message — Aurevian Tours`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:30px;color:#2C1A06;">
            <h2 style="color:#A07828;">Thank you, ${name}!</h2>
            <p>We've received your message and our travel specialists will get back to you within <strong>2 hours</strong>.</p>
            <p style="color:#9C7A3C;font-size:13px;">Reference: ${reference}</p>
            <p style="margin-top:20px;">Need an immediate answer? <a href="https://wa.me/201068257754">Chat with us on WhatsApp</a>.</p>
          </div>
        `,
      });
    } catch (e) {
      console.warn("Contact confirmation email failed:", e.message);
    }

    res.json({ success: true, message: "Message sent successfully", reference });
  } catch (err) {
    console.error("sendContactMessage error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again or contact us on WhatsApp." });
  }
}