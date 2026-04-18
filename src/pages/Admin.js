import { useState } from "react";
import { getTours, saveTours } from "../utils/toursDB";

export default function Admin() {
  const [city, setCity] = useState("cairo");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    const db = getTours();

    const newTour = {
      id: Date.now().toString(),
      title,
      description,
      short: description.slice(0, 60),
      images: [],
      highlights: [],
      places: [],
      itinerary: [],
      includes: [],
      excludes: [],
      pricing: { base: 0 },
      discounts: { 2: 0.1, 3: 0.15, 4: 0.25 },
      childrenPolicy: { under6: 0, under12: 0.5 },
      addons: [],
      policies: {},
      languages: [
        "English",
        "Spanish",
        "Italian",
        "French",
        "Portuguese"
      ]
    };

    if (!db[city]) db[city] = [];

    db[city].push(newTour);
    saveTours(db);

    alert("Tour added successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1>Admin Panel</h1>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>cairo</option>
        <option>giza</option>
        <option>luxor</option>
        <option>aswan</option>
        <option>alexandria</option>
        <option>hurghada</option>
        <option>sharm</option>
        <option>siwa</option>
        <option>dahab</option>
      </select>

      <input
        placeholder="Tour Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: 10 }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", margin: 10 }}
      />

      <button onClick={handleAdd}>
        Add Tour
      </button>
    </div>
  );
}