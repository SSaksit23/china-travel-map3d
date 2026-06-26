import type { PlaceDetail } from "../types";

/**
 * Rich, manually-authored content for selected stops (cities + attractions),
 * keyed by stop id. Everything here is optional and keyless: the detail card
 * only renders the sections that have data, so stops can be filled in over time.
 *
 * To add content:
 *   - description: a fuller bilingual paragraph (overrides stop.blurb)
 *   - recommendedSeasons: any of "spring" | "summer" | "autumn" | "winter"
 *   - audiences: see AudienceId in src/types.ts (family, couple, solo, ...)
 *   - whatToExpect: bullet lines, each { th, en }
 *   - video: { type: "youtube", url } or { type: "mp4", url: "/media/<id>.mp4" }
 *   - gallery: extra image paths
 */
export const places: Record<string, PlaceDetail> = {
  urumqi: {
    description: {
      th: "เมืองเอกของซินเจียงและประตูสู่ทุ่งหญ้า ทะเลทราย และเทือกเขาเทียนซาน เป็นจุดเริ่มต้นของทริปซินเจียงเหนือ มีตลาดใหญ่ (Grand Bazaar) อาหารหลากวัฒนธรรม และเป็นชุมทางการบินหลักของภูมิภาค",
      en: "Xinjiang's capital and the gateway to its grasslands, deserts, and the Tianshan range — the launch point for most North Xinjiang trips, with a famous Grand Bazaar, multicultural food, and the region's main air hub.",
    },
    recommendedSeasons: ["summer", "autumn"],
    audiences: ["family", "culture", "cuisine"],
    whatToExpect: [
      { th: "เดินตลาดใหญ่ซินเจียง ชิมของกินและของฝากเส้นทางสายไหม", en: "Browse the Grand Bazaar for Silk Road snacks and souvenirs." },
      { th: "ใช้เป็นฐานพักก่อนต่อไปคานาสือ/อี้หนิง", en: "Use it as a base before continuing to Kanas or Yining." },
      { th: "อากาศแห้ง กลางวัน-กลางคืนต่างกันมาก เตรียมเสื้อกันหนาวบางๆ", en: "Dry air with big day-night temperature swings — bring a light layer." },
    ],
  },

  kanas: {
    description: {
      th: "ทะเลสาบคานาสือในเขตอัลไต น้ำเปลี่ยนสีตามฤดูกาล ล้อมรอบด้วยป่าสนและภูเขาหิมะ ไฮไลต์คือใบไม้เปลี่ยนสีช่วงปลายกันยายน และหมู่บ้านตูวา/เหอมู่",
      en: "Kanas Lake in the Altai — colour-shifting water ringed by taiga forest and snow peaks. The late-September golden foliage and the Tuvan village of Hemu are the headline sights.",
    },
    recommendedSeasons: ["summer", "autumn"],
    audiences: ["photography", "adventure", "couple", "family"],
    whatToExpect: [
      { th: "วิวทะเลสาบสีเทอร์คอยซ์และจุดชมวิวเขามังกร (Reflection)", en: "Turquoise lake views and the Reflection/观鱼台 viewpoints." },
      { th: "ใบไม้เปลี่ยนสีทองช่วงปลาย ก.ย.–ต้น ต.ค.", en: "Golden autumn foliage from late September to early October." },
      { th: "เดินป่าระดับเบา-ปานกลาง อากาศเย็นแม้หน้าร้อน", en: "Easy-to-moderate walking; cool even in summer." },
    ],
    video: { type: "youtube", url: "https://www.youtube.com/watch?v=2Iy0jPzfV9Q" },
  },

  kashgar: {
    description: {
      th: "เมืองโอเอซิสเก่าแก่ปลายเส้นทางสายไหม หัวใจวัฒนธรรมอุยกูร์ มีเมืองเก่าคาชการ์ มัสยิดอิดกาห์ และตลาดนัดอาทิตย์ที่คึกคักที่สุดในเอเชียกลาง",
      en: "An ancient Silk Road oasis and the heart of Uyghur culture — the Kashgar Old City, Id Kah Mosque, and one of Central Asia's liveliest Sunday bazaars.",
    },
    recommendedSeasons: ["spring", "autumn"],
    audiences: ["culture", "photography", "cuisine"],
    whatToExpect: [
      { th: "เดินเมืองเก่าดินเหนียว ช่างฝีมือ และร้านน้ำชา", en: "Wander the mud-brick old town, artisans, and tea houses." },
      { th: "ประตูสู่ทางหลวงคาราโครัม–ทะเลสาบไป๋ชา–ปามีร์", en: "Gateway to the Karakoram Highway, Karakul Lake and the Pamirs." },
    ],
  },

  jiuzhaigou: {
    description: {
      th: "อุทยานมรดกโลก ทะเลสาบหลากสีฟ้า-เขียว น้ำตกเป็นชั้น และป่าฤดูใบไม้ร่วงที่ขึ้นชื่อที่สุดของจีน ทางเดินไม้พาชมวิวได้สะดวก",
      en: "A UNESCO World Heritage valley of multi-coloured lakes, terraced waterfalls, and China's most celebrated autumn forests, with easy boardwalk trails.",
    },
    recommendedSeasons: ["autumn", "spring"],
    audiences: ["family", "photography", "couple", "retiree"],
    whatToExpect: [
      { th: "ทะเลสาบน้ำใสห้าสี (Five Flower Lake) และน้ำตกธารไข่มุก", en: "The Five-Flower Lake and Pearl Shoal waterfalls." },
      { th: "ใบไม้เปลี่ยนสีกลาง-ปลาย ต.ค. (ช่วงพีค)", en: "Peak foliage in mid-to-late October." },
      { th: "อยู่ที่สูง ~2,000–3,000 ม. เดินช้าๆ", en: "High altitude (~2,000–3,000 m) — pace yourself." },
    ],
  },

  lhasa: {
    description: {
      th: "เมืองศักดิ์สิทธิ์บนหลังคาโลก ที่ตั้งพระราชวังโปตาลาและวัดโจคัง หัวใจของพุทธศาสนาแบบทิเบต ต้องเผื่อเวลาปรับตัวกับความสูง",
      en: "The sacred city on the roof of the world — home to the Potala Palace and Jokhang Temple, the heart of Tibetan Buddhism. Allow time to acclimatise to the altitude.",
    },
    recommendedSeasons: ["spring", "summer", "autumn"],
    audiences: ["culture", "photography"],
    whatToExpect: [
      { th: "ชมพระราชวังโปตาลาและวัดโจคัง เดินตลาดบาร์คอร์", en: "Visit the Potala Palace and Jokhang Temple; walk the Barkhor." },
      { th: "อยู่สูง ~3,650 ม. วันแรกพักผ่อนปรับตัว", en: "At ~3,650 m — rest on day one to acclimatise." },
    ],
  },

  dunhuang: {
    description: {
      th: "เมืองโอเอซิสกลางทะเลทราย ที่ตั้งถ้ำม่อเกา (Mogao) ศิลปะพุทธพันปี เนินทรายหมิงซาและบ่อน้ำพระจันทร์เสี้ยว",
      en: "A desert oasis famed for the millennium-old Buddhist art of the Mogao Caves, the Singing Sand Dunes, and Crescent Moon Lake.",
    },
    recommendedSeasons: ["spring", "autumn"],
    audiences: ["culture", "photography", "family"],
    whatToExpect: [
      { th: "ชมจิตรกรรมฝาผนังถ้ำม่อเกา และขี่อูฐบนเนินทราย", en: "Mogao Cave murals and a camel ride over the dunes." },
      { th: "กลางวันร้อน กลางคืนเย็น เตรียมกันแดดและน้ำ", en: "Hot days, cool nights — bring sun protection and water." },
    ],
  },

  harbin: {
    description: {
      th: "เมืองหลวงน้ำแข็งของจีน ขึ้นชื่อเทศกาลแกะสลักน้ำแข็งระดับโลก สถาปัตยกรรมรัสเซียบนถนนจงหยาง และประตูสู่หมู่บ้านหิมะ",
      en: "China's ice capital — home to the world-class Ice & Snow Festival, Russian-era architecture on Central Street, and the gateway to Snow Town.",
    },
    recommendedSeasons: ["winter"],
    audiences: ["family", "couple", "photography"],
    whatToExpect: [
      { th: "เทศกาลน้ำแข็งกลางคืน (ธ.ค.–ก.พ.) หนาวจัด -20°C", en: "The illuminated Ice Festival (Dec–Feb); expect deep cold to -20°C." },
      { th: "เดินถนนจงหยางสไตล์ยุโรป ชิมไอศกรีมหน้าหนาว", en: "Stroll European-style Central Street; try the winter ice cream." },
    ],
  },

  qingdao: {
    description: {
      th: "เมืองชายทะเลซานตง บ้านเกิดเบียร์ชิงเต่า สถาปัตยกรรมเยอรมัน ชายหาด และอาหารทะเลสด เหมาะกับทริปชิลล์ริมทะเล",
      en: "A breezy Shandong seaside city — birthplace of Tsingtao beer, with German colonial architecture, beaches, and fresh seafood for a relaxed coastal trip.",
    },
    recommendedSeasons: ["summer", "autumn"],
    audiences: ["family", "couple", "cuisine"],
    whatToExpect: [
      { th: "เดินย่านเก่าเยอรมัน ชิมเบียร์สดและอาหารทะเล", en: "Explore the old German quarter; fresh beer and seafood." },
      { th: "ชายหาดและสะพานจ้านเฉียว เหมาะหน้าร้อน", en: "Beaches and Zhanqiao Pier — best in summer." },
    ],
  },
};

export const getPlace = (id: string): PlaceDetail | undefined => places[id];
