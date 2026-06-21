// ─── BookingForm.jsx — Aurevian Tours ──────────────────────────
// A real inline FORM (not a popup) embedded inside pages/Booking.jsx.
// Collects guest + trip + pickup/dropoff details, validates them,
// then hands the data up to Booking.jsx via onSubmit(data).
// Booking.jsx is the ONLY place that talks to the backend API —
// this component's single job is to collect clean, valid data.

import { useState } from "react";
import "./BookingForm.css";

const TOUR_LANGUAGES = [
  "English", "Spanish", "French", "Italian", "German",
  "Portuguese", "Chinese", "Dutch", "Japanese", "Arabic",
];

const PICKUP_LOCATIONS = [
  "Cairo", "Giza", "Luxor", "Aswan", "Hurghada",
  "Sharm El Sheikh", "Alexandria", "New Cairo",
  "Heliopolis", "6th of October City", "Other",
];

const DROPOFF_LOCATIONS = [
  "Cairo", "Giza", "Luxor", "Aswan", "Hurghada",
  "Sharm El Sheikh", "Alexandria", "New Cairo",
  "Heliopolis", "6th of October City", "Hotel", "Other",
];

export default function BookingForm({ tourId, onSubmit, onGuestsChange }) {
  const [f, setF] = useState({
    name: "", email: "", age: "", nationality: "", whatsapp: "",
    date: "", numberOfGuests: "1", tourLanguage: "English",
    pickupLocation: "Cairo", pickupSpecific: "",
    dropoffLocation: "Hotel", dropoffSpecific: "",
    hotelName: "", hotelAddress: "",
    specialRequests: "",
  });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const upd = (key) => (e) => {
    const value = e.target.value;
    setF((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: "" }));

    if (key === "numberOfGuests" && onGuestsChange) {
      onGuestsChange(Number(value) || 1);
    }
  };

  function validate() {
    const e = {};
    if (!f.name.trim())              e.name = "Required";
    if (!f.email.includes("@"))      e.email = "Valid email required";
    if (!f.age || f.age < 1)         e.age = "Required";
    if (!f.nationality.trim())       e.nationality = "Required";
    if (!f.whatsapp.trim())          e.whatsapp = "Required (include country code)";
    if (!f.date)                     e.date = "Required";
    if (!f.numberOfGuests || f.numberOfGuests < 1) e.numberOfGuests = "At least 1";
    if (f.pickupLocation === "Other" && !f.pickupSpecific.trim())   e.pickupSpecific = "Please specify";
    if (f.dropoffLocation === "Other" && !f.dropoffSpecific.trim()) e.dropoffSpecific = "Please specify";
    if (f.dropoffLocation === "Hotel" && !f.hotelName.trim())       e.hotelName = "Hotel name required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      user: {
        name:        f.name.trim(),
        email:       f.email.trim(),
        age:         Number(f.age),
        nationality: f.nationality.trim(),
        whatsapp:    f.whatsapp.trim(),
      },
      bookingDetails: {
        date:           f.date,
        numberOfGuests: Number(f.numberOfGuests),
        tourLanguage:   f.tourLanguage,
      },
      locations: {
        pickupLocation:  f.pickupLocation,
        pickupSpecific:  f.pickupSpecific,
        dropoffLocation: f.dropoffLocation,
        dropoffSpecific: f.dropoffSpecific,
        hotelName:       f.hotelName,
        hotelAddress:    f.hotelAddress,
      },
      specialRequests: f.specialRequests,
    };

    setSubmitted(true);
    onSubmit && onSubmit(data);
  }

  return (
    <div className="booking-form-container">
      <h2>Your Booking Details</h2>

      <form onSubmit={handleSubmit}>

        <fieldset>
          <legend>Personal Information</legend>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input value={f.name} onChange={upd("name")} placeholder="As on your passport" />
              {errors.name && <span className="field-error">⚠ {errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" value={f.email} onChange={upd("email")} placeholder="you@email.com" />
              {errors.email && <span className="field-error">⚠ {errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>WhatsApp Number *</label>
              <input type="tel" value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" />
              {errors.whatsapp && <span className="field-error">⚠ {errors.whatsapp}</span>}
            </div>
            <div className="form-group">
              <label>Age *</label>
              <input type="number" min="1" max="120" value={f.age} onChange={upd("age")} placeholder="e.g. 35" />
              {errors.age && <span className="field-error">⚠ {errors.age}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Nationality *</label>
            <input value={f.nationality} onChange={upd("nationality")} placeholder="e.g. American, British, French…" />
            {errors.nationality && <span className="field-error">⚠ {errors.nationality}</span>}
          </div>
        </fieldset>

        <fieldset>
          <legend>Trip Details</legend>

          <div className="form-row">
            <div className="form-group">
              <label>Tour Date *</label>
              <input type="date" value={f.date} min={new Date().toISOString().split("T")[0]} onChange={upd("date")} />
              {errors.date && <span className="field-error">⚠ {errors.date}</span>}
            </div>
            <div className="form-group">
              <label>Number of Guests *</label>
              <input type="number" min="1" value={f.numberOfGuests} onChange={upd("numberOfGuests")} />
              {errors.numberOfGuests && <span className="field-error">⚠ {errors.numberOfGuests}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Tour Language *</label>
            <select value={f.tourLanguage} onChange={upd("tourLanguage")}>
              {TOUR_LANGUAGES.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Pickup &amp; Drop-off</legend>

          <div className="form-group">
            <label>Pickup Location *</label>
            <select value={f.pickupLocation} onChange={upd("pickupLocation")}>
              {PICKUP_LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          {f.pickupLocation === "Other" && (
            <div className="form-group">
              <label>Specify Pickup *</label>
              <input value={f.pickupSpecific} onChange={upd("pickupSpecific")} placeholder="Full address" />
              {errors.pickupSpecific && <span className="field-error">⚠ {errors.pickupSpecific}</span>}
            </div>
          )}

          <div className="form-group">
            <label>Drop-off Location *</label>
            <select value={f.dropoffLocation} onChange={upd("dropoffLocation")}>
              {DROPOFF_LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          {f.dropoffLocation === "Hotel" && (
            <div className="form-row">
              <div className="form-group">
                <label>Hotel Name *</label>
                <input value={f.hotelName} onChange={upd("hotelName")} placeholder="e.g. Four Seasons Cairo" />
                {errors.hotelName && <span className="field-error">⚠ {errors.hotelName}</span>}
              </div>
              <div className="form-group">
                <label>Hotel Address</label>
                <input value={f.hotelAddress} onChange={upd("hotelAddress")} placeholder="Street / area" />
              </div>
            </div>
          )}
          {f.dropoffLocation === "Other" && (
            <div className="form-group">
              <label>Specify Drop-off *</label>
              <input value={f.dropoffSpecific} onChange={upd("dropoffSpecific")} placeholder="Full address" />
              {errors.dropoffSpecific && <span className="field-error">⚠ {errors.dropoffSpecific}</span>}
            </div>
          )}

          <div className="form-group">
            <label>Special Requests</label>
            <textarea rows={3} value={f.specialRequests} onChange={upd("specialRequests")} placeholder="Dietary needs, accessibility, preferences…" />
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">
          {submitted ? "✓ Details Saved — Update" : "Continue to Confirmation →"}
        </button>

        {submitted && (
          <div className="booking-saved-note">
            ✓ Your details are saved. Choose how you'd like to confirm below.
          </div>
        )}
      </form>
    </div>
  );
}