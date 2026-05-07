// seeds/index.js
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import City from "../models/City.js";
import Tour from "../models/Tour.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/your-db-name";

const seedCity = async (cityData, toursData) => {
  const city = await City.findOneAndUpdate(
    { slug: cityData.slug },
    cityData,
    { upsert: true, new: true }
  );
  console.log(`✅ City seeded: ${city.name}`);

  await Tour.deleteMany({ city: city._id });

  const toursWithCity = toursData.map((tour) => ({
    ...tour,
    city: city._id,
  }));

  await Tour.insertMany(toursWithCity);
  console.log(`✅ ${toursData.length} tours seeded for ${city.name}`);
};

const seedAll = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🔌 Connected to MongoDB");

   const citiesDir = path.join(__dirname);
  const files = fs.readdirSync(citiesDir).filter(f => f.endsWith(".js") && f !== "index.js");

    for (const file of files) {
  console.log(`📂 Reading file: ${file}`);
  const mod = await import(pathToFileURL(path.join(citiesDir, file)).href);
  console.log(`📦 Module keys:`, Object.keys(mod));
  const { cityData, toursData } = mod;
  console.log(`🏙️ cityData:`, cityData?.name);
  console.log(`🗺️ toursData length:`, toursData?.length);
  await seedCity(cityData, toursData);
}
    console.log("🎉 All seeds completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedAll();