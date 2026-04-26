const cairoTours = [

/* =========================
1 - GIZA PYRAMIDS
========================= */
{
id: "giza-pyramids-ultimate",

hero: {
title: "Giza Pyramids Ultimate Experience",
images: ["https://images.unsplash.com/photo-1608032077018-cd2a8c2f5c9c"]
},

description: {
full: `
The Giza Plateau represents one of the most iconic archaeological landscapes in the world. Standing in front of the pyramids gives a direct sense of ancient engineering and human ambition.

Your guide explains how the pyramids were built, their purpose, and the astronomical precision behind their alignment.
`
},

itinerary: [
{ time: "08:00", title: "Pickup", description: "Hotel pickup in Cairo." },
{ time: "09:00", title: "Giza Plateau", description: "Panoramic view of pyramids." },
{ time: "10:00", title: "Great Pyramid", description: "Historical explanation and structure." },
{ time: "11:30", title: "Sphinx", description: "Mythology and symbolism." }
],

details: {
duration: "6 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide", "Transport", "Tickets"],
notIncluded: ["Camel ride", "Personal expenses"]
},

policies: {
cancellation: {
en: "Free cancellation up to 24 hours before.",
ar: "إلغاء مجاني قبل 24 ساعة"
},
children: {
en: "Children allowed.",
ar: "مسموح للأطفال"
}
},

booking: {
price: { single: 90, double: 80, group: 70 },
offers: [{ minPeople: 2, discount: "10%" }]
},

faq: [
{
q: { en: "Is pyramid entry included?", ar: "هل دخول الهرم شامل؟" },
a: { en: "No, it is optional ticket.", ar: "لا، بتذكرة إضافية." }
}
],

reviews: [{ name: "John", rating: 5, text: "Amazing experience." }],

filters: { type: "day", duration: "full-day", category: "history" }
},

/* =========================
2 - EGYPTIAN MUSEUM
========================= */
{
id: "egyptian-museum",

hero: {
title: "Egyptian Museum Cultural Tour",
images: ["https://images.unsplash.com/photo-1590053404184-ce4b6f4e0b1f"]
},

description: {
full: `
The Egyptian Museum holds one of the richest collections of ancient artifacts in the world. It offers a direct journey through thousands of years of history.

The experience focuses on understanding daily life, royal dynasties, and burial traditions of ancient Egypt.
`
},

itinerary: [
{ time: "09:00", title: "Entrance", description: "Introduction to museum history." },
{ time: "09:30", title: "Royal Section", description: "Kings and dynasties." },
{ time: "10:30", title: "Artifacts Hall", description: "Daily life objects." },
{ time: "11:30", title: "Tutankhamun", description: "Treasures of the boy king." }
],

details: {
duration: "5 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide", "Tickets"],
notIncluded: []
},

policies: {
cancellation: {
en: "Free cancellation 24h before.",
ar: "إلغاء مجاني قبل 24 ساعة"
},
children: {
en: "Allowed for all ages.",
ar: "مسموح لجميع الأعمار"
}
},

booking: {
price: { single: 50, double: 45, group: 40 },
offers: [{ minPeople: 2, discount: "10%" }]
},

faq: [
{
q: { en: "Is it crowded?", ar: "هل المكان مزدحم؟" },
a: { en: "Yes during peak hours.", ar: "نعم في أوقات الذروة." }
}
],

reviews: [],
filters: { type: "experience", duration: "half-day", category: "culture" }
},

/* =========================
3 - ISLAMIC CAIRO
========================= */
{
id: "islamic-cairo",

hero: {
title: "Islamic Cairo Heritage Walk",
images: ["https://images.unsplash.com/photo-1597754865557-3a8b7b6d6b36"]
},

description: {
full: `
Islamic Cairo reflects centuries of architectural and cultural evolution. It showcases mosques, fortresses, and historic streets that shaped the city.

The tour highlights the Citadel of Saladin and key Islamic monuments.
`
},

itinerary: [
{ time: "08:30", title: "Citadel", description: "Historical fortress overview." },
{ time: "10:00", title: "Mosque Visit", description: "Islamic architecture." },
{ time: "11:30", title: "Old Streets", description: "Traditional Cairo life." }
],

details: {
duration: "6 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: {
en: "Free cancellation 24h before.",
ar: "إلغاء مجاني قبل 24 ساعة"
},
children: {
en: "Allowed.",
ar: "مسموح"
}
},

booking: {
price: { single: 60, double: 50, group: 45 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "day", duration: "full-day", category: "history" }
},

/* =========================
4 - OLD CAIRO
========================= */
{
id: "old-cairo",

hero: {
title: "Old Cairo Spiritual Experience",
images: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020"]
},

description: {
full: `
Old Cairo is one of the oldest inhabited parts of the city, where different religions and cultures intersect.

The experience focuses on Coptic history and ancient churches.
`
},

itinerary: [
{ time: "09:00", title: "Coptic Cairo", description: "Ancient churches visit." },
{ time: "10:30", title: "Roman Ruins", description: "Historical remains." },
{ time: "12:00", title: "Walking Tour", description: "Old city exploration." }
],

details: {
duration: "5 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 55, double: 45, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "culture" }
},

/* =========================
5 - NILE DINNER CRUISE
========================= */
{
id: "nile-dinner-cruise",

hero: {
title: "Nile Dinner Cruise Experience",
images: ["https://images.unsplash.com/photo-1500375592092-40eb2168fd21"]
},

description: {
full: `
A relaxing evening sailing on the Nile with dinner and live entertainment including traditional dance shows.

The experience combines food, culture, and Cairo night views.
`
},

itinerary: [
{ time: "18:00", title: "Boarding", description: "Start cruise on Nile." },
{ time: "19:00", title: "Dinner", description: "Buffet dinner onboard." },
{ time: "20:00", title: "Show", description: "Live entertainment." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Dinner", "Show"],
notIncluded: []
},

policies: {
cancellation: { en: "No refund within 24h", ar: "لا يوجد استرجاع" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 60, double: 55, group: 50 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "entertainment" }
},

/* =========================
6 - SOUND & LIGHT SHOW
========================= */
{
id: "sound-light-pyramids",

hero: {
title: "Sound & Light Show at Pyramids",
images: ["https://images.unsplash.com/photo-1582571352032-448f7928eca3"]
},

description: {
full: `
A nighttime storytelling experience projected on the pyramids, narrating the history of ancient Egypt in a cinematic format.
`
},

itinerary: [
{ time: "19:00", title: "Arrival", description: "Entry to show area." },
{ time: "19:30", title: "Show Begins", description: "Historical narration." }
],

details: {
duration: "2 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Ticket"],
notIncluded: []
},

policies: {
cancellation: { en: "No refund", ar: "لا يوجد استرجاع" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 30, double: 25, group: 20 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "show" }
},

/* =========================
7 - MEMPHIS & SAKKARA
========================= */
{
id: "memphis-sakkara",

hero: {
title: "Memphis & Sakkara Ancient Tour",
images: ["https://images.unsplash.com/photo-1582719471384-894fbb16e074"]
},

description: {
full: `
A journey into the earliest capital of ancient Egypt and the first pyramid ever built in history.
`
},

itinerary: [
{ time: "08:00", title: "Memphis", description: "Ancient capital visit." },
{ time: "10:00", title: "Sakkara", description: "Step Pyramid exploration." }
],

details: {
duration: "7 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide", "Transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 70, double: 60, group: 50 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "day", duration: "full-day", category: "history" }
},

/* =========================
8 - CAIRO NIGHT WALK
========================= */
{
id: "cairo-night-walk",

hero: {
title: "Cairo Night Cultural Walk",
images: ["https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb"]
},

description: {
full: `
Cairo transforms at night into a living city of lights, food, and street culture.

The walk explores downtown energy and local lifestyle.
`
},

itinerary: [
{ time: "18:00", title: "Downtown", description: "Start night walk." },
{ time: "19:00", title: "Food Stops", description: "Local street food." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 40, double: 35, group: 30 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "culture" }
},

/* =========================
9 - GRAND MUSEUM
========================= */
{
id: "grand-museum",

hero: {
title: "Grand Egyptian Museum Experience",
images: ["https://images.unsplash.com/photo-1581090700227-1e37b190418e"]
},

description: {
full: `
One of the largest archaeological museums in the world showcasing Egypt’s ancient heritage in a modern architectural space.
`
},

itinerary: [
{ time: "09:00", title: "Entrance", description: "Museum overview." },
{ time: "10:00", title: "Main Halls", description: "Artifacts exploration." }
],

details: {
duration: "5 hours",
languages: ["English", "Arabic"],
pickup: "Hotel in Cairo",
dropoff: "Hotel in Cairo",
included: ["Guide", "Ticket"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 50, double: 45, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "culture" }
},

/* =========================
10 - LUXURY CAIRO
========================= */
{
id: "luxury-cairo",

hero: {
title: "Luxury Private Cairo Experience",
images: ["https://images.unsplash.com/photo-1526498460520-4c246339dccb"]
},

description: {
full: `
A fully private luxury experience covering pyramids, museum, and Nile with personalized service and VIP transport.
`
},

itinerary: [
{ time: "08:00", title: "Pickup", description: "Luxury transport pickup." },
{ time: "09:00", title: "Pyramids", description: "Private guided visit." },
{ time: "12:00", title: "Museum", description: "VIP access experience." }
],

details: {
duration: "Full Day",
languages: ["English", "Arabic"],
pickup: "VIP pickup",
dropoff: "VIP dropoff",
included: ["Private guide", "Luxury transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Flexible cancellation", ar: "إلغاء مرن" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 150, double: 130, group: 110 },
offers: [{ minPeople: 2, discount: "10%" }]
},

faq: [],
reviews: [],
filters: { type: "package", duration: "full-day", category: "luxury" }

},

/* =========================
11 - KHAN EL KHALILI
========================= */
{
id: "khan-el-khalili-walk",

hero: {
title: "Khan El Khalili Bazaar Experience",
images: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da"]
},

description: {
full: `
Khan El Khalili is one of the oldest bazaars in the Middle East, where trade, culture, and daily life intersect.

The experience is not only shopping, but understanding how Cairo's commercial heart evolved over centuries.
`
},

itinerary: [
{ time: "10:00", title: "Bazaar Entry", description: "Introduction to market history." },
{ time: "10:30", title: "Main Streets", description: "Traditional crafts and shops." },
{ time: "12:00", title: "Coffee Stop", description: "Local café experience." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: ["Purchases"]
},

policies: {
cancellation: { en: "Free cancellation 24h before", ar: "إلغاء مجاني قبل 24 ساعة" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 40, double: 35, group: 30 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "culture" }
},

/* =========================
12 - NILE BOAT SUNSET
========================= */
{
id: "nile-sunset-boat",

hero: {
title: "Nile Sunset Boat Experience",
images: ["https://images.unsplash.com/photo-1500375592092-40eb2168fd21"]
},

description: {
full: `
A peaceful boat ride on the Nile during sunset showing Cairo from a completely different perspective.

The experience focuses on relaxation and scenery rather than historical narration.
`
},

itinerary: [
{ time: "17:00", title: "Boarding", description: "Start boat trip." },
{ time: "17:30", title: "Sunset Cruise", description: "Nile views at golden hour." }
],

details: {
duration: "2 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Boat ride"],
notIncluded: []
},

policies: {
cancellation: { en: "No refund within 24h", ar: "لا استرجاع خلال 24 ساعة" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 30, double: 25, group: 20 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "relax" }
},

/* =========================
13 - COPTIC CAIRO
========================= */
{
id: "coptic-cairo",

hero: {
title: "Coptic Cairo Historical Tour",
images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"]
},

description: {
full: `
Coptic Cairo represents one of the oldest Christian communities in the world, with churches dating back centuries.

The tour explores religious history and architectural heritage.
`
},

itinerary: [
{ time: "09:00", title: "Hanging Church", description: "Historic church visit." },
{ time: "10:00", title: "Coptic Museum", description: "Religious artifacts." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 45, double: 40, group: 35 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "culture" }
},

/* =========================
14 - PYRAMIDS SOUND NIGHT
========================= */
{
id: "pyramids-night-show",

hero: {
title: "Pyramids Sound & Light Show",
images: ["https://images.unsplash.com/photo-1582571352032-448f7928eca3"]
},

description: {
full: `
A cinematic nighttime storytelling projected on the pyramids explaining ancient Egyptian history through sound and light.
`
},

itinerary: [
{ time: "19:00", title: "Arrival", description: "Entry to show area." },
{ time: "19:30", title: "Show", description: "Historical narration begins." }
],

details: {
duration: "2 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Ticket"],
notIncluded: []
},

policies: {
cancellation: { en: "No refund", ar: "لا استرجاع" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 25, double: 20, group: 15 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "show" }
},

/* =========================
15 - MEMPHIS TOUR
========================= */
{
id: "memphis-tour",

hero: {
title: "Memphis Ancient Capital Tour",
images: ["https://images.unsplash.com/photo-1582719471384-894fbb16e074"]
},

description: {
full: `
Memphis was the first capital of ancient Egypt, representing the origin of organized civilization in the region.
`
},

itinerary: [
{ time: "09:00", title: "Memphis Site", description: "Ancient ruins exploration." },
{ time: "10:30", title: "Colossal Statue", description: "Historical monument." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 35, double: 30, group: 25 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "history" }
},

/* =========================
16 - SAKKARA STEP PYRAMID
========================= */
{
id: "sakkara-step-pyramid",

hero: {
title: "Sakkara Step Pyramid Tour",
images: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"]
},

description: {
full: `
Sakkara contains the oldest pyramid structure in Egypt, marking the beginning of pyramid evolution.
`
},

itinerary: [
{ time: "08:30", title: "Sakkara Entry", description: "Introduction to site." },
{ time: "09:30", title: "Step Pyramid", description: "Architectural explanation." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide", "Transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 50, double: 45, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "day", duration: "half-day", category: "history" }
},

/* =========================
17 - CAIRO CITY TOUR
========================= */
{
id: "cairo-city-tour",

hero: {
title: "Cairo City Overview Tour",
images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c"]
},

description: {
full: `
A full overview of Cairo's modern and historic districts showing how the city evolved into a mega-capital.
`
},

itinerary: [
{ time: "09:00", title: "Downtown", description: "Modern Cairo overview." },
{ time: "10:30", title: "Old Cairo", description: "Historical districts." }
],

details: {
duration: "5 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 40, double: 35, group: 30 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "city" }
},

/* =========================
18 - CAIRO FOOD TOUR
========================= */
{
id: "cairo-food-tour",

hero: {
title: "Cairo Street Food Experience",
images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836"]
},

description: {
full: `
A culinary journey through Cairo’s street food culture exploring authentic Egyptian dishes and local flavors.
`
},

itinerary: [
{ time: "18:00", title: "Food Start", description: "Introduction to cuisine." },
{ time: "19:00", title: "Street Stops", description: "Local food tasting." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Food tasting"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 30, double: 25, group: 20 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "food" }
},

/* =========================
19 - DESERT SAFARI
========================= */
{
id: "cairo-desert-safari",

hero: {
title: "Cairo Desert Safari Adventure",
images: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"]
},

description: {
full: `
A desert adventure near Cairo combining off-road experience with panoramic desert landscapes.
`
},

itinerary: [
{ time: "15:00", title: "Departure", description: "Transfer to desert." },
{ time: "16:00", title: "Safari Ride", description: "Off-road experience." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 60, double: 50, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "adventure", duration: "half-day", category: "desert" }
},

/* =========================
20 - VIP CAIRO PACKAGE
========================= */
{
id: "vip-cairo-package",

hero: {
title: "VIP Cairo Full Experience Package",
images: ["https://images.unsplash.com/photo-1526498460520-4c246339dccb"]
},

description: {
full: `
A fully customized luxury experience combining pyramids, museum, and private Nile access with premium service.
`
},

itinerary: [
{ time: "08:00", title: "Pickup", description: "VIP transport." },
{ time: "09:00", title: "Pyramids", description: "Private guided tour." },
{ time: "12:00", title: "Museum", description: "VIP visit." }
],

details: {
duration: "Full Day",
languages: ["English", "Arabic"],
pickup: "VIP pickup",
dropoff: "VIP dropoff",
included: ["Private guide", "Luxury transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Flexible cancellation", ar: "إلغاء مرن" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 150, double: 130, group: 110 },
offers: [{ minPeople: 2, discount: "10%" }]
},

faq: [],
reviews: [],
filters: { type: "package", duration: "full-day", category: "luxury" }
},

/* =========================
21 - AL AZHAR MOSQUE TOUR
========================= */
{
id: "al-azhar-mosque-tour",

hero: {
title: "Al-Azhar Mosque Cultural Tour",
images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"]
},

description: {
full: `
Al-Azhar Mosque is one of the oldest Islamic institutions in the world, representing centuries of religious education and architectural evolution.

The tour explores its role in shaping Islamic scholarship and Cairo’s spiritual identity.
`
},

itinerary: [
{ time: "09:00", title: "Mosque Entry", description: "Historical introduction." },
{ time: "09:30", title: "Courtyard", description: "Architecture overview." },
{ time: "10:30", title: "Prayer Hall", description: "Spiritual significance." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation 24h before", ar: "إلغاء مجاني قبل 24 ساعة" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 35, double: 30, group: 25 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "culture" }
},

/* =========================
22 - NATIONAL MUSEUM OF CIVILIZATION
========================= */
{
id: "nmec-tour",

hero: {
title: "National Museum of Egyptian Civilization",
images: ["https://images.unsplash.com/photo-1581090700227-1e37b190418e"]
},

description: {
full: `
The National Museum of Civilization showcases the full timeline of Egyptian history from prehistoric times to modern Egypt in a single narrative.
`
},

itinerary: [
{ time: "09:00", title: "Entrance", description: "Museum overview." },
{ time: "10:00", title: "Mummies Hall", description: "Royal mummies exhibition." },
{ time: "11:30", title: "Civilization Timeline", description: "Historical evolution." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide", "Ticket"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 45, double: 40, group: 35 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "culture" }
},

/* =========================
23 - CAIRO BALLOON EXPERIENCE (EDGE)
========================= */
{
id: "cairo-balloon-edge",

hero: {
title: "Cairo Sky Balloon Experience",
images: ["https://images.unsplash.com/photo-1508610048659-a06b669e3321"]
},

description: {
full: `
A rare aerial experience over Cairo outskirts offering panoramic views of desert landscapes and Nile surroundings.
`
},

itinerary: [
{ time: "05:30", title: "Pickup", description: "Early transfer to launch site." },
{ time: "06:30", title: "Flight", description: "Hot air balloon experience." }
],

details: {
duration: "2 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Flight", "Transport"],
notIncluded: []
},

policies: {
cancellation: { en: "Weather dependent cancellation", ar: "حسب الطقس" },
children: { en: "Allowed with supervision", ar: "مسموح بإشراف" }
},

booking: {
price: { single: 120, double: 110, group: 100 },
offers: [{ minPeople: 2, discount: "10%" }]
},

faq: [],
reviews: [],
filters: { type: "adventure", duration: "short", category: "sky" }
},

/* =========================
24 - CAIRO PHOTOGRAPHY TOUR
========================= */
{
id: "cairo-photo-tour",

hero: {
title: "Professional Cairo Photography Tour",
images: ["https://images.unsplash.com/photo-1520975928316-3b7d3a3f2b0c"]
},

description: {
full: `
A guided photography experience across Cairo’s most iconic and hidden locations designed for capturing cinematic shots.
`
},

itinerary: [
{ time: "08:00", title: "Old Cairo", description: "Street photography." },
{ time: "10:00", title: "Pyramids Area", description: "Landscape shots." }
],

details: {
duration: "5 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 60, double: 50, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "creative" }
},

/* =========================
25 - ALEXANDRIA DAY TOUR
========================= */
{
id: "alexandria-day-tour",

hero: {
title: "Day Trip to Alexandria",
images: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020"]
},

description: {
full: `
A full-day journey from Cairo to Alexandria exploring the Mediterranean coast and Greco-Roman heritage.
`
},

itinerary: [
{ time: "07:00", title: "Departure", description: "Drive to Alexandria." },
{ time: "10:00", title: "Library Site", description: "Modern Bibliotheca Alexandrina." },
{ time: "12:00", title: "Citadel", description: "Coastal fortress visit." }
],

details: {
duration: "10 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Transport", "Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 80, double: 70, group: 60 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "day", duration: "full-day", category: "city" }
},

/* =========================
26 - FELUCCA RIDE
========================= */
{
id: "felucca-ride",

hero: {
title: "Traditional Felucca Sailing Experience",
images: ["https://images.unsplash.com/photo-1500375592092-40eb2168fd21"]
},

description: {
full: `
A traditional sailing boat experience on the Nile offering peaceful views and authentic Egyptian river culture.
`
},

itinerary: [
{ time: "16:00", title: "Boarding", description: "Start sailing." },
{ time: "17:00", title: "Sunset", description: "Relaxing Nile views." }
],

details: {
duration: "2 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Boat ride"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 25, double: 20, group: 15 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "relax" }
},

/* =========================
27 - DOWNTOWN HISTORICAL WALK
========================= */
{
id: "downtown-cairo-walk",

hero: {
title: "Downtown Cairo Historical Walk",
images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c"]
},

description: {
full: `
Downtown Cairo reflects the European-inspired architecture of the 19th century blended with modern Egyptian life.
`
},

itinerary: [
{ time: "09:00", title: "Tahrir Area", description: "Modern history overview." },
{ time: "10:30", title: "Old Streets", description: "Architecture walk." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: []
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 30, double: 25, group: 20 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "city" }
},

/* =========================
28 - CAIRO SHOPPING EXPERIENCE
========================= */
{
id: "cairo-shopping-tour",

hero: {
title: "Cairo Shopping Experience",
images: ["https://images.unsplash.com/photo-1521337706264-a414f153a5d6"]
},

description: {
full: `
A guided shopping experience through Cairo’s traditional and modern markets focusing on authentic Egyptian crafts.
`
},

itinerary: [
{ time: "10:00", title: "Bazaar Visit", description: "Traditional shopping." },
{ time: "11:30", title: "Modern Mall", description: "Contemporary shopping." }
],

details: {
duration: "4 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide"],
notIncluded: ["Purchases"]
},

policies: {
cancellation: { en: "Free cancellation", ar: "إلغاء مجاني" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 35, double: 30, group: 25 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "half-day", category: "shopping" }
},

/* =========================
29 - NIGHT CAIRO ROOFTOP EXPERIENCE
========================= */
{
id: "cairo-rooftop-night",

hero: {
title: "Cairo Rooftop Night Experience",
images: ["https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb"]
},

description: {
full: `
A relaxing rooftop experience overlooking Cairo skyline combining dining, music, and city lights.
`
},

itinerary: [
{ time: "19:00", title: "Arrival", description: "Rooftop entry." },
{ time: "20:00", title: "Dinner", description: "City view dining." }
],

details: {
duration: "3 hours",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Dinner"],
notIncluded: []
},

policies: {
cancellation: { en: "No refund 24h before", ar: "لا استرجاع قبل 24 ساعة" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 50, double: 45, group: 40 },
offers: []
},

faq: [],
reviews: [],
filters: { type: "experience", duration: "short", category: "night" }
},

/* =========================
30 - CAIRO COMPLETE MASTER PACKAGE
========================= */
{
id: "cairo-master-package",

hero: {
title: "Cairo Complete Master Experience",
images: ["https://images.unsplash.com/photo-1526498460520-4c246339dccb"]
},

description: {
full: `
The ultimate Cairo experience combining pyramids, museums, Nile, and cultural districts in one fully curated journey.

Designed for travelers who want the full essence of Cairo in one structured experience.
`
},

itinerary: [
{ time: "08:00", title: "Pyramids", description: "Full guided tour." },
{ time: "12:00", title: "Museum", description: "Cultural immersion." },
{ time: "17:00", title: "Nile", description: "Evening experience." }
],

details: {
duration: "Full Day",
languages: ["English", "Arabic"],
pickup: "Hotel",
dropoff: "Hotel",
included: ["Guide", "Transport", "Tickets"],
notIncluded: []
},

policies: {
cancellation: { en: "Flexible cancellation", ar: "إلغاء مرن" },
children: { en: "Allowed", ar: "مسموح" }
},

booking: {
price: { single: 140, double: 120, group: 100 },
offers: [{ minPeople: 2, discount: "15%" }]
},

faq: [],
reviews: [],
filters: { type: "package", duration: "full-day", category: "master" }
}
];
export default cairoTours;
console.log("DATA INSIDE FILE =", cairoTours.length);