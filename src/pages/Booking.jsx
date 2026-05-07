import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "./Booking.css";

export default function Booking() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBookingSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      // حساب السعر (يمكنك تعديله حسب الجولة)
      const pricePerPerson = 150; // مثال
      const totalPrice = formData.bookingDetails.numberOfGuests * pricePerPerson;

      const bookingPayload = {
        user: formData.user,
        tour: {
          tourId: tourId || "tour_123",
          tourName: "Golden Egypt Tour",
          price: pricePerPerson
        },
        bookingDetails: formData.bookingDetails,
        locations: formData.locations,
        specialRequests: formData.specialRequests,
        totalPrice: totalPrice
      };

      // إرسال الطلب للـ Backend
      const response = await fetch("http://localhost:5000/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingPayload)
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ تم الحجز بنجاح! سيتم التواصل معك قريباً.");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage("❌ حدث خطأ في الحجز. حاولي مرة أخرى.");
      }
    } catch (error) {
      setMessage(`❌ خطأ: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>🎫 حجز الجولة السياحية</h1>
        <p>استمتعي برحلة لا تُنسى عبر أرض الفراعنة</p>
      </div>

      {message && (
        <div className={`message ${message.includes("✅") ? "success" : "error"}`}>
          {message}
        </div>
      )}

      <BookingForm 
        tourId={tourId} 
        onSubmit={handleBookingSubmit}
      />

      {loading && <div className="loading">⏳ جاري معالجة الحجز...</div>}
    </div>
  );
}
