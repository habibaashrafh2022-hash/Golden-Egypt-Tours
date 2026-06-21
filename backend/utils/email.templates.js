// ─── EMAIL TEMPLATES — Aurevian Tours ─────────────────────────
// Two templates:
//   buildGuestEmail   → sent to the customer confirming their booking
//   buildAdminEmail   → sent to the Aurevian team with full booking details

const BRAND = {
  name:    "Aurevian Tours",
  tagline: "Luxury Egypt Journeys",
  color:   "#C9A84C",
  dark:    "#2C1A06",
  phone:   "+20 106 825 7754",
  email:   "aureviantours@gmail.com",
  wa:      "https://wa.me/201068257754",
  site:    "https://aureviantours.com",
};

const base = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${BRAND.name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
    *{margin:0;padding:0;box-sizing:border-box;}
    body{background:#F5EFE0;font-family:'Lato',Arial,sans-serif;color:#2C1A06;}
    a{color:#A07828;text-decoration:none;}
  </style>
</head>
<body style="background:#F5EFE0;padding:32px 16px;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#1E1206,#2C1A06);border-radius:18px 18px 0 0;padding:32px 40px;text-align:center;">
            <div style="font-family:'Cinzel',serif;font-size:26px;font-weight:700;letter-spacing:0.18em;color:#C9A84C;">
              ${BRAND.name.toUpperCase()}
            </div>
            <div style="font-family:'Cinzel',serif;font-size:11px;letter-spacing:0.32em;color:rgba(201,168,76,.6);margin-top:4px;">
              ${BRAND.tagline.toUpperCase()}
            </div>
            <div style="width:48px;height:1px;background:rgba(201,168,76,.4);margin:16px auto 0;"></div>
          </td>
        </tr>

        <!-- GOLD STRIP -->
        <tr>
          <td style="height:4px;background:linear-gradient(90deg,#8B6010,#C9A84C,#E8C96D,#C9A84C,#8B6010);"></td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="background:#FFFDF8;padding:40px;border-radius:0 0 18px 18px;border:1px solid rgba(193,156,60,.2);border-top:none;">
            ${content}
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="padding:28px 0 8px;text-align:center;">
            <div style="font-size:11px;color:#9C7A3C;line-height:1.8;">
              <strong style="color:#A07828;">${BRAND.name}</strong> · ${BRAND.tagline}<br/>
              📞 ${BRAND.phone} &nbsp;·&nbsp; ✉️ <a href="mailto:${BRAND.email}">${BRAND.email}</a><br/>
              <a href="${BRAND.wa}" style="color:#25D366;font-weight:700;">💬 WhatsApp Us</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="${BRAND.site}" style="color:#A07828;">Visit our website</a>
            </div>
            <div style="margin-top:16px;font-size:9px;color:#BDA870;letter-spacing:0.08em;">
              © ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.
            </div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

// ── Section helpers ──────────────────────────────────────────
const section = (title, rows) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid rgba(193,156,60,.2);border-radius:12px;overflow:hidden;">
    <tr>
      <td colspan="2" style="background:rgba(201,168,76,.08);padding:10px 16px;border-bottom:1px solid rgba(193,156,60,.15);">
        <span style="font-family:'Cinzel',serif;font-size:11px;font-weight:700;color:#A07828;letter-spacing:0.16em;text-transform:uppercase;">${title}</span>
      </td>
    </tr>
    ${rows.map(([label, value]) => `
    <tr>
      <td style="padding:9px 16px;font-size:12px;color:#9C7A3C;font-weight:700;width:42%;border-bottom:1px solid rgba(193,156,60,.08);vertical-align:top;">${label}</td>
      <td style="padding:9px 16px;font-size:13px;color:#2C1A06;border-bottom:1px solid rgba(193,156,60,.08);vertical-align:top;">${value || "—"}</td>
    </tr>`).join("")}
  </table>
`;

const btn = (label, href, bg = "#C9A84C") => `
  <a href="${href}" style="display:inline-block;background:${bg};color:${bg==='#25D366'?'#fff':'#2C1A06'};font-family:'Cinzel',serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 28px;border-radius:9px;text-decoration:none;margin:5px;">${label}</a>
`;

// ── Guest confirmation email ─────────────────────────────────
export function buildGuestEmail(booking) {
  const dateStr = new Date(booking.bookingDetails.date).toLocaleDateString("en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  const content = `
    <p style="font-family:'Cinzel',serif;font-size:22px;font-weight:700;color:#2C1A06;margin-bottom:6px;">
      Thank you, ${booking.user.name}!
    </p>
    <p style="font-size:14px;color:#6B4E1A;line-height:1.7;margin-bottom:28px;">
      Your booking with <strong>${BRAND.name}</strong> has been received and is <strong style="color:#A07828;">pending confirmation</strong>.
      Our team will reach out within <strong>2 hours</strong> to confirm all details and answer any questions.
    </p>

    <div style="background:linear-gradient(135deg,rgba(201,168,76,.12),rgba(232,201,109,.08));border:1.5px solid rgba(193,156,60,.35);border-radius:12px;padding:16px 24px;text-align:center;margin-bottom:28px;">
      <div style="font-size:10px;color:#9C7A3C;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:4px;">Booking Reference</div>
      <div style="font-family:'Cinzel',serif;font-size:22px;font-weight:700;color:#A07828;letter-spacing:0.1em;">${booking.reference}</div>
      <div style="font-size:11px;color:#9C7A3C;margin-top:4px;">Keep this reference for your records</div>
    </div>

    ${section("Your Tour", [
      ["Tour",     booking.tour.tourName],
      ["City",     booking.tour.city],
      ["Date",     dateStr],
      ["Guests",   `${booking.bookingDetails.numberOfGuests} person${booking.bookingDetails.numberOfGuests > 1 ? "s" : ""}`],
      ["Language", booking.bookingDetails.tourLanguage],
    ])}

    ${section("Pickup & Drop-off", [
      ["Pickup",   booking.locations.pickupLocation === "Other"
                     ? booking.locations.pickupSpecific
                     : booking.locations.pickupLocation],
      ["Drop-off", booking.locations.dropoffLocation === "Hotel"
                     ? `${booking.locations.hotelName} — ${booking.locations.hotelAddress}`
                     : booking.locations.dropoffLocation === "Other"
                     ? booking.locations.dropoffSpecific
                     : booking.locations.dropoffLocation],
    ])}

    ${section("Pricing", [
      ["Total",   `<strong style="color:#A07828;font-size:16px;">$${booking.totalPrice} ${booking.currency}</strong>`],
      ["Payment", `<span style="background:rgba(255,190,0,.12);color:#A07828;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:700;">Pending</span>`],
    ])}

    ${booking.specialRequests ? section("Special Requests", [["Your request", booking.specialRequests]]) : ""}

    <div style="text-align:center;padding:24px 0 8px;">
      <p style="font-size:13px;color:#6B4E1A;margin-bottom:16px;">Have questions? Reach out to us anytime — we're available 24/7.</p>
      ${btn("💬 Chat on WhatsApp", BRAND.wa, "#25D366")}
      ${btn("✉️ Email Us", `mailto:${BRAND.email}`)}
    </div>

    <div style="margin-top:28px;padding:16px;background:rgba(82,183,136,.07);border-radius:10px;border:1px solid rgba(82,183,136,.2);font-size:12px;color:#2F8F63;text-align:center;">
      ✓ Free cancellation up to 24 hours before the tour date &nbsp;·&nbsp; ✓ No charge until confirmed
    </div>
  `;

  return {
    subject: `✦ Booking Received — ${booking.tour.tourName} · Ref: ${booking.reference}`,
    html:    base(content),
  };
}

// ── Admin notification email ─────────────────────────────────
export function buildAdminEmail(booking) {
  const dateStr = new Date(booking.bookingDetails.date).toLocaleDateString("en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  const waLink = `https://wa.me/${booking.user.whatsapp.replace(/[^0-9]/g, "")}`;
  const waText = encodeURIComponent(
    `✦ Hi ${booking.user.name},\n\nThis is ${BRAND.name} confirming your booking for *${booking.tour.tourName}* on *${dateStr}*.\n\nRef: ${booking.reference}\n\nWe're looking forward to welcoming you! 🏛️`
  );

  const content = `
    <p style="font-family:'Cinzel',serif;font-size:18px;font-weight:700;color:#2C1A06;margin-bottom:4px;">
      🔔 New Booking — Action Required
    </p>
    <p style="font-size:13px;color:#6B4E1A;margin-bottom:24px;">
      A new booking has been submitted. Please confirm or follow up with the guest within 2 hours.
    </p>

    <div style="text-align:center;margin-bottom:28px;">
      ${btn("💬 WhatsApp Guest", `${waLink}?text=${waText}`, "#25D366")}
      ${btn("✉️ Email Guest", `mailto:${booking.user.email}`)}
    </div>

    ${section("Reference", [
      ["Booking Ref", `<strong style="color:#A07828;">${booking.reference}</strong>`],
      ["Submitted",   new Date().toLocaleString("en-GB")],
      ["Status",      "🟡 Pending Confirmation"],
    ])}

    ${section("Guest Details", [
      ["Full Name",   booking.user.name],
      ["Email",       `<a href="mailto:${booking.user.email}">${booking.user.email}</a>`],
      ["WhatsApp",    `<a href="${waLink}">${booking.user.whatsapp}</a>`],
      ["Age",         booking.user.age],
      ["Nationality", booking.user.nationality],
    ])}

    ${section("Tour Details", [
      ["Tour",     booking.tour.tourName],
      ["Tour ID",  booking.tour.tourId],
      ["City",     booking.tour.city],
      ["Date",     dateStr],
      ["Guests",   booking.bookingDetails.numberOfGuests],
      ["Language", booking.bookingDetails.tourLanguage],
    ])}

    ${section("Pickup & Drop-off", [
      ["Pickup",   booking.locations.pickupLocation === "Other"
                     ? `Other: ${booking.locations.pickupSpecific}`
                     : booking.locations.pickupLocation],
      ["Drop-off", booking.locations.dropoffLocation === "Hotel"
                     ? `Hotel: ${booking.locations.hotelName} — ${booking.locations.hotelAddress}`
                     : booking.locations.dropoffLocation === "Other"
                     ? `Other: ${booking.locations.dropoffSpecific}`
                     : booking.locations.dropoffLocation],
    ])}

    ${section("Payment", [
      ["Total", `<strong style="color:#A07828;">$${booking.totalPrice} ${booking.currency}</strong>`],
    ])}

    ${booking.specialRequests ? section("Special Requests", [["Guest note", booking.specialRequests]]) : ""}
  `;

  return {
    subject: `🔔 New Booking — ${booking.tour.tourName} · ${booking.user.name} · Ref: ${booking.reference}`,
    html:    base(content),
  };
}