import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm({ tourData, onSubmit }) {
  const [formData, setFormData] = useState({
    user: {
      name: "",
      email: "",
      age: "",
      nationality: "",
      whatsapp: ""
    },
    bookingDetails: {
      date: "",
      numberOfGuests: 1,
      tourLanguage: "English"
    },
    locations: {
      pickupLocation: "Cairo",
      pickupSpecific: "",
      dropoffLocation: "Cairo",
      dropoffSpecific: "",
      hotelName: "",
      hotelAddress: ""
    },
    specialRequests: ""
  });

  const languages = [
    "English", "Spanish", "French", "Italian", 
    "German", "Portuguese", "Chinese", "Dutch", 
    "Japanese", "Arabic"
  ];

  const pickupOptions = [
    "Cairo", "Giza", "Luxor", "Aswan", "Hurghada", 
    "Sharm El Sheikh", "Alexandria", "New Cairo", 
    "Heliopolis", "6th of October City", "Other - Specify"
  ];

  const dropoffOptions = [
    "Cairo", "Giza", "Luxor", "Aswan", "Hurghada", 
    "Sharm El Sheikh", "Alexandria", "New Cairo", 
    "Heliopolis", "6th of October City", "Hotel", 
    "Other - Specify"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData(prev => {
      if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: value
          }
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <h2>📝 حجز الجولة السياحية</h2>
      
      <form onSubmit={handleSubmit}>
        
        {/* ===== معلومات العميل ===== */}
        <fieldset>
          <legend>👤 معلومات العميل</legend>
          
          <div className="form-group">
            <label>الاسم الكامل *</label>
            <input
              type="text"
              name="user.name"
              value={formData.user.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div className="form-group">
            <label>البريد الإلكتروني *</label>
            <input
              type="email"
              name="user.email"
              value={formData.user.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>السن *</label>
              <input
                type="number"
                name="user.age"
                value={formData.user.age}
                onChange={handleChange}
                required
                min="1"
                max="150"
              />
            </div>

            <div className="form-group">
              <label>الجنسية *</label>
              <input
                type="text"
                name="user.nationality"
                value={formData.user.nationality}
                onChange={handleChange}
                required
                placeholder="مثال: مصري"
              />
            </div>
          </div>

          <div className="form-group">
            <label>رقم الواتساب *</label>
            <input
              type="tel"
              name="user.whatsapp"
              value={formData.user.whatsapp}
              onChange={handleChange}
              required
              placeholder="+20 XXX XXX XXXX"
            />
          </div>
        </fieldset>

        {/* ===== تفاصيل الجولة ===== */}
        <fieldset>
          <legend>🎫 تفاصيل الجولة</legend>

          <div className="form-group">
            <label>التاريخ *</label>
            <input
              type="date"
              name="bookingDetails.date"
              value={formData.bookingDetails.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>عدد الأشخاص *</label>
              <input
                type="number"
                name="bookingDetails.numberOfGuests"
                value={formData.bookingDetails.numberOfGuests}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group">
              <label>لغة الجولة *</label>
              <select
                name="bookingDetails.tourLanguage"
                value={formData.bookingDetails.tourLanguage}
                onChange={handleChange}
                required
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* ===== أماكن البيك أب والدروب أوف ===== */}
        <fieldset>
          <legend>📍 أماكن البيك أب والدروب أوف</legend>

          <div className="form-group">
            <label>مكان البيك أب *</label>
            <select
              name="locations.pickupLocation"
              value={formData.locations.pickupLocation}
              onChange={handleChange}
              required
            >
              {pickupOptions.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {formData.locations.pickupLocation === "Other - Specify" && (
            <div className="form-group">
              <label>حدد مكان البيك أب *</label>
              <input
                type="text"
                name="locations.pickupSpecific"
                value={formData.locations.pickupSpecific}
                onChange={handleChange}
                required
                placeholder="أدخل المكان بالتفصيل"
              />
            </div>
          )}

          <div className="form-group">
            <label>مكان الدروب أوف *</label>
            <select
              name="locations.dropoffLocation"
              value={formData.locations.dropoffLocation}
              onChange={handleChange}
              required
            >
              {dropoffOptions.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {formData.locations.dropoffLocation === "Other - Specify" && (
            <div className="form-group">
              <label>حدد مكان الدروب أوف *</label>
              <input
                type="text"
                name="locations.dropoffSpecific"
                value={formData.locations.dropoffSpecific}
                onChange={handleChange}
                required
                placeholder="أدخل المكان بالتفصيل"
              />
            </div>
          )}

          {formData.locations.dropoffLocation === "Hotel" && (
            <>
              <div className="form-group">
                <label>اسم الفندق *</label>
                <input
                  type="text"
                  name="locations.hotelName"
                  value={formData.locations.hotelName}
                  onChange={handleChange}
                  required
                  placeholder="اسم الفندق"
                />
              </div>
              <div className="form-group">
                <label>عنوان الفندق *</label>
                <input
                  type="text"
                  name="locations.hotelAddress"
                  value={formData.locations.hotelAddress}
                  onChange={handleChange}
                  required
                  placeholder="عنوان الفندق"
                />
              </div>
            </>
          )}
        </fieldset>

        {/* ===== طلبات خاصة ===== */}
        <fieldset>
          <legend>💬 طلبات خاصة</legend>
          <div className="form-group">
            <label>هل لديك أي طلبات خاصة؟</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="مثال: عندي حساسية من الألبان، أريد أطفالاً أصغر من 5 سنوات..."
              rows="4"
            />
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">✅ تأكيد الحجز</button>
      </form>
    </div>
  );
}
