import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  // 🔥 ترجمة عامة للكلمات الثابتة في الموقع
  const t = (key) => {
    const translations = {
      en: {
        book: "Book Now",
        total: "Total",
        name: "Name",
        phone: "Phone",
        email: "Email",
        people: "People",
        date: "Date",
        overview: "Overview",
        itinerary: "Itinerary",
        faq: "FAQ",
        policies: "Policies",
        offers: "Offers",
        loading: "Loading...",
        notAvailable: "Date not available",
        success: "Booking completed",
      },
      ar: {
        book: "احجز الآن",
        total: "الإجمالي",
        name: "الاسم",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        people: "عدد الأشخاص",
        date: "التاريخ",
        overview: "نظرة عامة",
        itinerary: "البرنامج",
        faq: "الأسئلة",
        policies: "السياسات",
        offers: "العروض",
        loading: "جاري التحميل...",
        notAvailable: "التاريخ غير متاح",
        success: "تم الحجز بنجاح",
      }
    };

    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

// 🔥 Hook جاهز للاستخدام
export function useLang() {
  return useContext(LangContext);
}