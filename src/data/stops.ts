import type { Stop } from "../types";

/**
 * All stops referenced by the programs, geocoded as [longitude, latitude]
 * in WGS-84 (MapLibre coordinate order). Positions are approximate, chosen
 * to sit on the correct town/landmark for OSM / OpenFreeMap basemaps.
 *
 * `wiki` is the English Wikipedia article title used by scripts/build-images.ts
 * to fetch a photo + extract. `blurb` is a curated bilingual description that
 * takes priority over the Wikipedia extract in the UI.
 */
export const stops: Stop[] = [
  // North Xinjiang
  {
    id: "urumqi",
    name: { th: "อูลู่มู่ฉี", en: "Urumqi", zh: "乌鲁木齐" },
    coords: [87.616, 43.825],
    category: "city",
    wiki: "Ürümqi",
    blurb: {
      th: "เมืองเอกของซินเจียง ประตูสู่ทุ่งหญ้าและทะเลทราย จุดเริ่มต้นของทริปซินเจียงเหนือ",
      en: "Xinjiang's capital and the gateway city to the grasslands and deserts — the start of most North Xinjiang trips.",
    },
  },
  {
    id: "tianchi",
    name: { th: "ทะเลสาบเทียนฉือ", en: "Tianchi Lake", zh: "天池" },
    coords: [88.12, 43.88],
    category: "nature",
    wiki: "Heavenly Lake of Tianshan",
    blurb: {
      th: "‘ทะเลสาบสวรรค์’ น้ำสีมรกตกลางเทือกเขาเทียนซาน มียอดเขาโป๋เก๋อต๋าปกคลุมหิมะเป็นฉากหลัง",
      en: "The emerald 'Heavenly Lake' set in the Tianshan range, backed by snow-capped Bogda Peak.",
    },
  },
  {
    id: "sayram",
    name: { th: "ทะเลสาบไซ่หลี่มู่", en: "Sayram Lake", zh: "赛里木湖" },
    coords: [81.2, 44.6],
    category: "nature",
    wiki: "Sayram Lake",
    blurb: {
      th: "ทะเลสาบบนที่สูงที่ใหญ่ที่สุดของซินเจียง น้ำสีฟ้าครามล้อมรอบด้วยทุ่งหญ้าและภูเขาหิมะ",
      en: "Xinjiang's largest alpine lake — deep-blue water ringed by grassland and snow peaks.",
    },
  },
  {
    id: "yining",
    name: { th: "อี้หนิง", en: "Yining", zh: "伊宁" },
    coords: [81.328, 43.913],
    category: "city",
    wiki: "Yining",
    blurb: {
      th: "เมืองหลวงของเขตอี้ลี่ มีถนนหกดาวสีสันสดใสและทุ่งลาเวนเดอร์ชื่อดัง",
      en: "Capital of the Ili Valley, famous for its colourful 'Six Star Street' and lavender fields.",
    },
  },
  {
    id: "kalajun",
    name: { th: "ทุ่งหญ้าคาลาจุ้น", en: "Kalajun Grassland", zh: "喀拉峻" },
    coords: [81.6, 43.05],
    category: "nature",
    wiki: "Kalajun",
    blurb: {
      th: "ทุ่งหญ้าบนสันเขาที่ทอดตัวเป็นลอนคลื่น มรดกโลกทางธรรมชาติของเทียนซาน",
      en: "Rolling ridge-top grassland, part of the Tianshan natural World Heritage area.",
    },
  },
  {
    id: "nalati",
    name: { th: "ทุ่งหญ้านาลาถี", en: "Nalati Grassland", zh: "那拉提" },
    coords: [84.02, 43.32],
    category: "nature",
    wiki: "Nalati",
    blurb: {
      th: "หนึ่งในทุ่งหญ้าที่สวยที่สุดของจีน ทุ่งกว้างสุดลูกหูลูกตากับวิถีเลี้ยงสัตว์ของชาวคาซัค",
      en: "One of China's most beautiful grasslands — vast meadows and Kazakh herding life.",
    },
  },
  {
    id: "kuytun",
    name: { th: "ขุยถุน", en: "Kuytun", zh: "奎屯" },
    coords: [84.9, 44.43],
    category: "city",
    wiki: "Kuytun",
    blurb: {
      th: "เมืองทางผ่านสำคัญของซินเจียงเหนือ ใกล้แกรนด์แคนยอนตูซ๋านจื่อ",
      en: "A key transit town in northern Xinjiang, near the Dushanzi Grand Canyon.",
    },
  },
  {
    id: "dushanzi-canyon",
    name: { th: "แกรนด์แคนยอนตูซ๋านจื่อ", en: "Dushanzi Grand Canyon", zh: "独山子大峡谷" },
    coords: [84.4, 43.47],
    category: "nature",
    wiki: "Dushanzi District",
    blurb: {
      th: "หุบเหวลึกที่ถูกน้ำกัดเซาะเป็นริ้วหินหลากสี ฉากธรรมชาติสุดอลังการริมถนนตูคู่",
      en: "A deep, water-carved canyon of multicoloured rock strata beside the Duku Highway.",
    },
  },
  {
    id: "guozigou-bridge",
    name: { th: "สะพานกั่วจื่อโกว", en: "Guozigou Bridge", zh: "果子沟大桥" },
    coords: [81.14028, 44.47075],
    category: "heritage",
    wiki: "Guozigou Bridge",
    blurb: {
      th: "สะพานขึงข้ามหุบเขากั่วจื่อโกวสูงเหนือพื้น ~200 ม. หนึ่งในสะพานทางหลวงที่สวยที่สุดของจีน",
      en: "A cable-stayed bridge soaring ~200 m over the Guozigou valley — one of China's most scenic highway bridges.",
    },
  },
  {
    id: "tekes",
    name: { th: "เมืองเทอเค่อซือ (นคร 8 แฉก)", en: "Tekes Eight-Trigram City", zh: "特克斯八卦城" },
    coords: [81.8371, 43.2137],
    category: "city",
    wiki: "Tekes County",
    blurb: {
      th: "เมืองผังแปดทิศ (ปากั้ว) ถนนวงแหวนแผ่รัศมีจากใจกลาง เมืองไร้ไฟจราจรที่ใหญ่และสมบูรณ์ที่สุดในโลก",
      en: "A radial 'bagua' (eight-trigram) town whose ring roads fan out from the centre — the world's largest, best-preserved traffic-light-free city.",
    },
  },
  {
    id: "tianshan-flower-sea",
    // APPROX — verify: Kashi Township, Yining County, along G218; no exact GPS found.
    name: { th: "อุทยานทะเลดอกไม้เทียนซาน", en: "Tianshan Flower Sea", zh: "天山花海" },
    coords: [81.65, 43.8],
    category: "nature",
    blurb: {
      th: "ทุ่งดอกไม้กว้างสุดลูกหูลูกตาเชิงเขาเทียนซานในอำเภออี้หนิง บานสะพรั่งช่วงต้นฤดูร้อน",
      en: "A vast sea of wildflowers at the foot of the Tianshan in Yining County, in full bloom in early summer.",
    },
  },
  {
    id: "urumqi-bazaar",
    name: { th: "ตลาดแกรนด์บาซาร์ (ต้าปาจา)", en: "Xinjiang Grand Bazaar", zh: "新疆国际大巴扎" },
    coords: [87.61583, 43.77917],
    category: "heritage",
    wiki: "Grand Bazaar (Ürümqi)",
    blurb: {
      th: "ตลาดใหญ่ที่สุดในโลกด้านขนาด ศูนย์รวมของฝาก อาหาร และวัฒนธรรมอุยกูร์กลางเมืองอูลู่มู่ฉี",
      en: "The world's largest bazaar by scale — a hub of Silk Road souvenirs, food and Uyghur culture in central Urumqi.",
    },
  },
  {
    id: "chengdu",
    name: { th: "เฉิงตู", en: "Chengdu", zh: "成都" },
    coords: [104.066, 30.572],
    category: "city",
    wiki: "Chengdu",
    blurb: {
      th: "เมืองหลวงของเสฉวน บ้านของแพนด้ายักษ์ และจุดต่อเครื่องเข้าซินเจียง/ทิเบต",
      en: "Sichuan's capital, home of giant pandas and a common transit hub into Xinjiang/Tibet.",
    },
  },
  {
    id: "fuyun",
    name: { th: "ฝูหยุน", en: "Fuyun", zh: "富蕴" },
    coords: [89.52, 46.99],
    category: "city",
    wiki: "Fuyun County",
    blurb: {
      th: "เมืองประตูสู่อุทยานธรณีเคอเคอทัวไห่ ทางตอนเหนือสุดของซินเจียง",
      en: "Gateway town to the Koktokay geopark in Xinjiang's far north.",
    },
  },
  {
    id: "koktokay",
    name: { th: "เคอเคอทัวไห่", en: "Koktokay", zh: "可可托海" },
    coords: [89.74, 47.18],
    category: "nature",
    wiki: "Koktokay National Geopark",
    blurb: {
      th: "อุทยานธรณีที่มีหน้าผาหินแกรนิตยักษ์และแม่น้ำเอ่อร์ฉีซือใสสะอาด",
      en: "A geopark of giant granite cliffs along the clear Irtysh River.",
    },
  },
  {
    id: "burqin",
    name: { th: "เบอร์จิ้น", en: "Burqin", zh: "布尔津" },
    coords: [86.87, 47.7],
    category: "city",
    wiki: "Burqin County",
    blurb: {
      th: "เมืองริมแม่น้ำที่เป็นประตูสู่คานาสือ มีตลาดกลางคืนและปลาน้ำจืดขึ้นชื่อ",
      en: "A riverside gateway town to Kanas, known for its night market and freshwater fish.",
    },
  },
  {
    id: "kanas",
    name: { th: "คานาสือ", en: "Kanas", zh: "喀纳斯" },
    coords: [87.02, 48.69],
    category: "nature",
    wiki: "Kanas Lake",
    blurb: {
      th: "ทะเลสาบรูปพระจันทร์เสี้ยวสีเปลี่ยนได้กลางป่าไซบีเรีย จุดชมใบไม้เปลี่ยนสีระดับตำนาน",
      en: "A colour-shifting crescent lake amid Siberian forest — a legendary autumn-foliage spot.",
    },
  },
  {
    id: "hemu",
    name: { th: "เหอมู่", en: "Hemu", zh: "禾木" },
    coords: [87.3, 48.59],
    category: "nature",
    wiki: "Hemu, Xinjiang",
    blurb: {
      th: "หมู่บ้านไม้ซุงของชาวถูหว่า ยามเช้าปกคลุมด้วยสายหมอก ภาพถ่ายในฝันของช่างภาพ",
      en: "A Tuvan log-cabin village wrapped in morning mist — a photographer's dream.",
    },
  },
  {
    id: "wucaitan",
    name: { th: "หาดห้าสี", en: "Five Color Beach (Wucaitan)", zh: "五彩滩" },
    coords: [86.99, 47.86],
    category: "nature",
    wiki: "Burqin County",
    blurb: {
      th: "เนินดินหลากสีริมแม่น้ำเออร์ทีชใกล้เบอร์จิ้น ภูมิทัศน์แบบ ‘ย่าตาน’ ที่ลมและฝนกัดเซาะจนเป็นริ้วสีแดง–ม่วง–เขียว งดงามที่สุดยามอาทิตย์อัสดง",
      en: "Multicoloured 'yardang' badlands on the Irtysh River near Burqin — wind-carved ridges of red, purple and green, at their best at sunset.",
    },
  },
  {
    id: "wuerhe",
    name: { th: "นครปีศาจอูเหอ", en: "Wuerhe Ghost City", zh: "乌尔禾魔鬼城" },
    coords: [85.69, 46.09],
    category: "nature",
    wiki: "Wuerhe District",
    blurb: {
      th: "‘เมืองแห่งสายลม’ กลางทะเลทรายโกบี เนินหินทรายที่ถูกลมกัดกร่อนเป็นรูปทรงพิศวง มีรถไฟชมวิวพาชมทั่วอุทยาน",
      en: "The wind-sculpted 'city of winds' in the Gobi — eroded sandstone formations toured by a sightseeing train.",
    },
  },
  {
    id: "shihezi",
    name: { th: "สือเหอจื่อ", en: "Shihezi", zh: "石河子" },
    coords: [86.041, 44.305],
    category: "city",
    wiki: "Shihezi",
    blurb: {
      th: "เมืองโอเอซิสที่กองกำลังบุกเบิกซินเจียงสร้างขึ้นกลางทะเลทรายโกบี สัญลักษณ์ของจิตวิญญาณ ‘จวินเคิ่น’",
      en: "An oasis city built from scratch in the Gobi by Xinjiang's pioneer corps — an emblem of the 'juntun' frontier spirit.",
    },
  },

  // South Xinjiang
  {
    id: "kashgar",
    name: { th: "คาชการ์", en: "Kashgar", zh: "喀什" },
    coords: [75.99, 39.47],
    category: "heritage",
    wiki: "Kashgar",
    blurb: {
      th: "หัวใจของเส้นทางสายไหมและวัฒนธรรมอุยกูร์ เมืองเก่ามีตรอกซอยและตลาดนัดเก่าแก่",
      en: "The heart of the Silk Road and Uyghur culture, with an ancient old town and bazaars.",
    },
  },
  {
    id: "karakul",
    name: { th: "ทะเลสาบคาราคูล", en: "Karakul Lake", zh: "卡拉库勒湖" },
    coords: [75.05, 38.43],
    category: "nature",
    wiki: "Karakul Lake (Xinjiang)",
    blurb: {
      th: "ทะเลสาบสะท้อนเงายอดเขามุซตักอาต้า (7,509 ม.) บนที่ราบสูงปามีร์",
      en: "A high-Pamir lake mirroring the 7,509 m Muztagh Ata peak.",
    },
  },
  {
    id: "tashkurgan",
    name: { th: "ทาชคอร์กัน", en: "Tashkurgan", zh: "塔什库尔干" },
    coords: [75.23, 37.77],
    category: "border",
    wiki: "Tashkurgan Town",
    blurb: {
      th: "เมืองชายแดนของชาวทาจิกบนที่ราบสูงปามีร์ มีป้อมหินโบราณและทุ่งหญ้าโกลเด้น",
      en: "A Tajik border town on the Pamir plateau, with an ancient stone fort and golden meadows.",
    },
  },
  {
    id: "khunjerab",
    name: { th: "คุนจีราบพาส", en: "Khunjerab Pass", zh: "红其拉甫口岸" },
    coords: [75.42, 36.85],
    category: "border",
    wiki: "Khunjerab Pass",
    blurb: {
      th: "ด่านชายแดนจีน-ปากีสถานที่สูงราว 4,700 ม. จุดสูงสุดของถนนคาราโครัม",
      en: "The China–Pakistan border crossing at ~4,700 m — the highpoint of the Karakoram Highway.",
    },
  },
  {
    id: "yarkand",
    name: { th: "ซาเช่อ", en: "Yarkand", zh: "莎车" },
    coords: [77.24, 38.42],
    category: "heritage",
    wiki: "Yarkant County",
    blurb: {
      th: "เมืองโอเอซิสเก่าแก่บนเส้นทางสายไหม เคยเป็นราชธานีของข่านาเตะยาร์คันด์",
      en: "An ancient Silk Road oasis, once the seat of the Yarkand Khanate.",
    },
  },
  {
    id: "bachu",
    name: { th: "ปาฉู่", en: "Bachu", zh: "巴楚" },
    coords: [78.549, 39.785],
    category: "nature",
    wiki: "Bachu County",
    blurb: {
      th: "เมืองโอเอซิสริมทะเลทรายตากลามากัน ที่ตั้งอุทยานทะเลแดงและป่าต้นหูหยาง ‘วีรบุรุษแห่งทะเลทราย’",
      en: "A Taklamakan-edge oasis town, home to the Red Sea park and forests of Euphrates poplar, the 'hero of the desert'.",
    },
  },

  // Gansu–Sichuan
  {
    id: "lanzhou",
    name: { th: "หลานโจว", en: "Lanzhou", zh: "兰州" },
    coords: [103.83, 36.06],
    category: "city",
    wiki: "Lanzhou",
    blurb: {
      th: "เมืองริมแม่น้ำเหลืองและประตูสู่กานหนาน ขึ้นชื่อเรื่องบะหมี่เนื้อหลานโจว",
      en: "A Yellow River city and gateway to Gannan, famous for Lanzhou beef noodles.",
    },
  },
  {
    id: "bingling",
    name: { th: "ถ้ำปิงหลิง", en: "Bingling Temple", zh: "炳灵寺" },
    coords: [103.05, 35.8],
    category: "heritage",
    wiki: "Bingling Temple",
    blurb: {
      th: "ถ้ำพระพุทธรูปแกะสลักริมอ่างเก็บน้ำหลิวเจียเสีย รวมพระใหญ่สูงกว่า 27 เมตร",
      en: "Cliffside Buddhist grottoes by the Liujiaxia reservoir, including a 27 m carved Buddha.",
    },
  },
  {
    id: "xiahe",
    name: { th: "เซี่ยเหอ (ลาบรัง)", en: "Xiahe (Labrang)", zh: "夏河-拉卜楞寺" },
    coords: [102.51, 35.2],
    category: "temple",
    wiki: "Labrang Monastery",
    blurb: {
      th: "ที่ตั้งวัดลาบรัง หนึ่งในวัดทิเบตนิกายเกลุกที่ใหญ่ที่สุดนอกเขตทิเบต มีกงล้อมนตราที่ยาวที่สุด",
      en: "Home to Labrang, one of the largest Gelug Tibetan monasteries outside Tibet, with the longest prayer-wheel corridor.",
    },
  },
  {
    id: "songpan",
    name: { th: "ซงพาน", en: "Songpan", zh: "松潘" },
    coords: [103.6, 32.65],
    category: "heritage",
    wiki: "Songpan County",
    blurb: {
      th: "เมืองโบราณมีกำแพงสมัยราชวงศ์หมิง จุดพักก่อนเข้าจิ่วไจ้โกว–หวงหลง",
      en: "An ancient walled town from the Ming era, a base before Jiuzhaigou and Huanglong.",
    },
  },
  {
    id: "jiuzhaigou",
    name: { th: "จิ่วไจ้โกว", en: "Jiuzhaigou", zh: "九寨沟" },
    coords: [104.24, 33.26],
    category: "nature",
    wiki: "Jiuzhaigou",
    blurb: {
      th: "อุทยานมรดกโลก ทะเลสาบหลากสีเทอร์ควอยซ์ น้ำตกธารไข่มุก และป่าใบไม้เปลี่ยนสี",
      en: "A World Heritage park of multicoloured turquoise lakes, Pearl Shoal falls and autumn forest.",
    },
  },
  {
    id: "zhagana",
    name: { th: "จากาน่า", en: "Zhagana", zh: "扎尕那" },
    coords: [103.18, 34.2],
    category: "nature",
    wiki: "Zhagana",
    blurb: {
      th: "หมู่บ้านทิเบตในหุบเขาหินปูนรูปปราสาท ทุ่งนาขั้นบันไดและบ้านไม้ดั้งเดิม",
      en: "A Tibetan village in a castle-like limestone valley, with terraced fields and timber houses.",
    },
  },
  {
    id: "hezuo",
    name: { th: "เหอจั้ว", en: "Hezuo", zh: "合作" },
    coords: [102.91, 35.0],
    category: "temple",
    wiki: "Hezuo",
    blurb: {
      th: "เมืองศูนย์กลางของกานหนาน มีเจดีย์มิหลาเร่อปาเก้าชั้นที่โดดเด่น",
      en: "The hub of Gannan, marked by the striking nine-storey Milarepa pagoda.",
    },
  },

  // Qinghai–Tibet
  {
    id: "xining",
    name: { th: "ซีหนิง", en: "Xining", zh: "西宁" },
    coords: [101.78, 36.62],
    category: "city",
    wiki: "Xining",
    blurb: {
      th: "เมืองเอกของชิงไห่ จุดบินตรงและจุดเริ่มของรถไฟสายหลังคาโลกสู่ลาซา",
      en: "Qinghai's capital — the direct-flight entry and start of the roof-of-the-world railway to Lhasa.",
    },
  },
  {
    id: "kumbum",
    name: { th: "วัดถาเอ่อร์", en: "Kumbum Monastery", zh: "塔尔寺" },
    coords: [101.57, 36.5],
    category: "temple",
    wiki: "Kumbum Monastery",
    blurb: {
      th: "วัดสำคัญนิกายเกลุก บ้านเกิดของท่านจงคาปา ขึ้นชื่อเรื่องศิลปะเนยจามรีแกะสลัก",
      en: "A major Gelug monastery at Tsongkhapa's birthplace, famed for its yak-butter sculptures.",
    },
  },
  {
    id: "lhasa",
    name: { th: "ลาซา", en: "Lhasa", zh: "拉萨" },
    coords: [91.14, 29.65],
    category: "heritage",
    wiki: "Lhasa",
    blurb: {
      th: "เมืองศักดิ์สิทธิ์ของทิเบตที่ 3,650 ม. ที่ตั้งพระราชวังโปตาลาและวัดโจคัง",
      en: "Tibet's holy city at 3,650 m, home to the Potala Palace and Jokhang Temple.",
    },
  },
  {
    id: "nyingchi",
    name: { th: "หลินจือ", en: "Nyingchi", zh: "林芝" },
    coords: [94.36, 29.65],
    category: "nature",
    wiki: "Nyingchi",
    blurb: {
      th: "‘สวิตเซอร์แลนด์แห่งทิเบต’ ระดับความสูงต่ำกว่าลาซา ป่าเขียวและวิวเทือกเขาหิมาลัย",
      en: "The 'Switzerland of Tibet' — lower than Lhasa, with green forests and Himalayan views.",
    },
  },
  {
    id: "basum-tso",
    name: { th: "ทะเลสาบปาซง", en: "Basum Tso", zh: "巴松措" },
    coords: [93.95, 30.0],
    category: "nature",
    wiki: "Basum Lake",
    blurb: {
      th: "ทะเลสาบศักดิ์สิทธิ์สีเขียวมรกตกลางป่า มีเกาะวัดเล็ก ๆ อยู่ตรงกลาง",
      en: "A sacred emerald lake in the forest, with a tiny temple island at its centre.",
    },
  },
  {
    id: "lulang",
    name: { th: "หลู่ล่าง", en: "Lulang", zh: "鲁朗" },
    coords: [94.72, 29.76],
    category: "nature",
    wiki: "Lulang",
    blurb: {
      th: "‘ป่าทะเล’ หลู่ล่าง ทุ่งหญ้าและหมู่บ้านทิเบตท่ามกลางวิวยอดเขาหนานเจียปาหว่า",
      en: "The Lulang 'forest sea' — meadows and Tibetan hamlets beneath Namcha Barwa.",
    },
  },

  // Shandong / East coast
  {
    id: "qingdao",
    name: { th: "ชิงเต่า", en: "Qingdao", zh: "青岛" },
    coords: [120.382, 36.067],
    category: "city",
    wiki: "Qingdao",
    blurb: {
      th: "‘ทวีปยุโรปแห่งทิศบูรพา’ เมืองท่าริมทะเลเหลือง ย่านเก่าเยอรมัน โบสถ์เซนต์ไมเคิล และเบียร์ชิงเต่า",
      en: "The 'European riviera of the East' — a Yellow Sea port with a German old town, St Michael's Cathedral and Tsingtao beer.",
    },
  },
  {
    id: "penglai",
    name: { th: "เผิงไหล", en: "Penglai", zh: "蓬莱" },
    coords: [120.76, 37.83],
    category: "heritage",
    wiki: "Penglai Pavilion",
    blurb: {
      th: "‘แดนเซียนบนโลกมนุษย์’ ศาลาเผิงไหลริมอ่าวป๋อไห่ จุดกำเนิดตำนานแปดเซียนข้ามทะเล",
      en: "The 'fairyland on earth' — Penglai Pavilion over the Bohai Sea, birthplace of the Eight Immortals legend.",
    },
  },
  {
    id: "yantai",
    name: { th: "เยียนไถ", en: "Yantai", zh: "烟台" },
    coords: [121.391, 37.539],
    category: "city",
    wiki: "Yantai",
    blurb: {
      th: "เมืองชายทะเลซานตง บ้านของไร่ไวน์จางยู่ ท่าเรือประมงสไตล์ยุโรป และถนนเฉาหยาง",
      en: "A Shandong seaside city — home to Changyu's wine château, a European-style fishing harbour and Chaoyang Street.",
    },
  },
  {
    id: "weihai",
    name: { th: "เว่ยไห่", en: "Weihai", zh: "威海" },
    coords: [122.116, 37.51],
    category: "city",
    wiki: "Weihai",
    blurb: {
      th: "เมืองสุดขอบตะวันออกของซานตง ถนนคบเพลิงสายที่ 8 เรือบลูเวยส์เกยตื้น และประตูแห่งโชคลาภ",
      en: "Shandong's easternmost city — 'Torch Road No.8', the beached Blue Whales ship and the Gate of Happiness.",
    },
  },

  // Northeast China (Dongbei)
  {
    id: "shenyang",
    name: { th: "เสิ่นหยาง", en: "Shenyang", zh: "沈阳" },
    coords: [123.431, 41.796],
    category: "heritage",
    wiki: "Shenyang",
    blurb: {
      th: "บ้านเกิดราชวงศ์ชิง ที่ตั้งพระราชวังเสิ่นหยางกู้กง ศูนย์กลางความเจริญของแมนจูเรีย",
      en: "The cradle of the Qing dynasty and site of the Mukden (Shenyang) Imperial Palace — the heart of Manchuria.",
    },
  },
  {
    id: "benxi",
    name: { th: "ถ้ำน้ำเปิ่นซี", en: "Benxi Water Cave", zh: "本溪水洞" },
    coords: [124.123, 41.394],
    category: "nature",
    wiki: "Benxi Water Cave",
    blurb: {
      th: "ถ้ำหินปูนที่มีแม่น้ำใต้ดินให้ล่องเรือเข้าไปชมหินงอกหินย้อยยาวหลายกิโลเมตร",
      en: "A limestone cave with an underground river you boat through, past kilometres of stalactites.",
    },
  },
  {
    id: "dandong",
    name: { th: "ตานตง", en: "Dandong", zh: "丹东" },
    coords: [124.383, 40.124],
    category: "border",
    wiki: "Dandong",
    blurb: {
      th: "เมืองชายแดนที่ใหญ่ที่สุดของจีน ริมแม่น้ำยาลู มองข้ามไปยังเกาหลีเหนือ มีสะพานหักต้วนเฉียว",
      en: "China's largest border city on the Yalu River, facing North Korea, with the broken Yalu River Bridge.",
    },
  },
  {
    id: "dalian",
    name: { th: "ต้าเหลียน", en: "Dalian", zh: "大连" },
    coords: [121.618, 38.914],
    category: "city",
    wiki: "Dalian",
    blurb: {
      th: "‘ไข่มุกแห่งแดนเหนือ’ เมืองท่าน้ำลึก จัตุรัสซิงไห่ รถรางร้อยปี และ ‘เวนิสตะวันออก’",
      en: "The 'Pearl of the North' — a deep-water port with Xinghai Square, century-old trams and an 'Eastern Venice'.",
    },
  },
  {
    id: "lvshun",
    name: { th: "หลี่ซุ่น (พอร์ต อาร์เธอร์)", en: "Lüshun (Port Arthur)", zh: "旅顺" },
    coords: [121.268, 38.811],
    category: "heritage",
    wiki: "Lüshunkou, Dalian",
    blurb: {
      th: "อดีตเมืองท่ายุทธศาสตร์ ‘พอร์ต อาร์เธอร์’ สถานีรถไฟไม้สไตล์รัสเซีย และพิพิธภัณฑ์ประวัติศาสตร์",
      en: "The former strategic port of 'Port Arthur', with a Russian-style wooden railway station and history museum.",
    },
  },
  {
    id: "panjin",
    name: { th: "ผานจิ่น (หาดแดง)", en: "Panjin (Red Beach)", zh: "盘锦红海滩" },
    coords: [121.95, 40.91],
    category: "nature",
    wiki: "Red Beach (Panjin)",
    blurb: {
      th: "พื้นที่ชุ่มน้ำปากแม่น้ำเหลียวเหอ ทุ่งต้นชะครามเปลี่ยนเป็น ‘หาดแดง’ สุดลูกหูลูกตาในฤดูใบไม้ร่วง",
      en: "Wetlands at the Liao River mouth where seepweed turns the marsh into a vast crimson 'Red Beach' in autumn.",
    },
  },
  {
    id: "harbin",
    name: { th: "ฮาร์บิน", en: "Harbin", zh: "哈尔滨" },
    coords: [126.642, 45.756],
    category: "city",
    wiki: "Harbin",
    blurb: {
      th: "‘มอสโกแห่งตะวันออก’ เมืองหิมะ มหาวิหารเซนต์โซเฟีย ถนนจงยาง และเทศกาลแกะสลักน้ำแข็งที่ใหญ่ที่สุดในโลก",
      en: "The 'Moscow of the East' — a snow city of St Sophia Cathedral, Central Street and the world's biggest ice festival.",
    },
  },
  {
    id: "hengdaohezi",
    name: { th: "เหิงเต้าเหอจื่อ", en: "Hengdaohezi", zh: "横道河子" },
    coords: [128.95, 44.916],
    category: "heritage",
    wiki: "Hengdaohezi",
    blurb: {
      th: "เมืองรถไฟสายตะวันออกของจีน โรงเก็บหัวรถจักรทรงพัด โบสถ์ไม้ออร์โธดอกซ์ และหมู่บ้านภาพเขียนสีน้ำมัน",
      en: "A Chinese Eastern Railway town with a fan-shaped locomotive shed, a wooden Orthodox church and an oil-painting village.",
    },
  },
  {
    id: "mudanjiang",
    name: { th: "มู่ตานเจียง", en: "Mudanjiang", zh: "牡丹江" },
    coords: [129.633, 44.551],
    category: "city",
    wiki: "Mudanjiang",
    blurb: {
      th: "เมืองริมแม่น้ำมู่ตานในเฮยหลงเจียง จุดพักก่อนเข้าสู่หมู่บ้านหิมะ",
      en: "A Heilongjiang city on the Mudan River, the base before heading into Snow Town.",
    },
  },
  {
    id: "snowtown",
    name: { th: "หมู่บ้านหิมะ (เสวี่ยเซียง)", en: "Snow Town (Xuexiang)", zh: "雪乡" },
    coords: [128.86, 44.3],
    category: "nature",
    wiki: "China Snow Town",
    blurb: {
      th: "ดินแดนหิมะตกหนักที่สุดในจีน บ้านไม้ตงเป่ยปกคลุมด้วย ‘เห็ดหิมะ’ และโคมแดงยามค่ำคืน",
      en: "China's snowiest village — Dongbei timber houses capped with fluffy 'snow mushrooms' and red lanterns at night.",
    },
  },
  {
    id: "yanji",
    name: { th: "เหยียนจี๋", en: "Yanji", zh: "延吉" },
    coords: [129.508, 42.906],
    category: "city",
    wiki: "Yanji",
    blurb: {
      th: "เมืองเอกของเขตปกครองตนเองชนชาติเกาหลีเหยียนเปียน วัฒนธรรมเกาหลีเข้มข้น อาหารและตลาดสีสันจัด",
      en: "Capital of the Yanbian Korean Autonomous Prefecture — strong Korean culture, food and vivid markets.",
    },
  },
  {
    id: "dunhua",
    name: { th: "ตุนฮว่า", en: "Dunhua", zh: "敦化" },
    coords: [128.232, 43.366],
    category: "temple",
    wiki: "Dunhua",
    blurb: {
      th: "เมืองพุทธแห่งจี๋หลิน ที่ตั้งภูเขาลิ่วติ่งซานและพระศากยมุนีสำริดกลางแจ้งที่สูงที่สุดในโลก",
      en: "A Buddhist town in Jilin, home to Liudingshan and the world's tallest outdoor bronze Sakyamuni Buddha.",
    },
  },
  {
    id: "jilin-city",
    name: { th: "เมืองจี๋หลิน", en: "Jilin City", zh: "吉林市" },
    coords: [126.553, 43.843],
    category: "nature",
    wiki: "Jilin City",
    blurb: {
      th: "เมืองริมแม่น้ำซงฮัว ขึ้นชื่อเรื่อง ‘อู้ซง’ น้ำค้างแข็งเกาะกิ่งไม้เป็นปุยขาวในยามเช้าฤดูหนาว",
      en: "A Songhua River city famous for 'wusong' — winter rime frost that coats the willows in white each morning.",
    },
  },
  {
    id: "changchun",
    name: { th: "ฉางชุน", en: "Changchun", zh: "长春" },
    coords: [125.323, 43.817],
    category: "city",
    wiki: "Changchun",
    blurb: {
      th: "เมืองเอกของจี๋หลิน อดีตเมืองหลวงแมนจูกัว ศูนย์กลางอุตสาหกรรมรถยนต์และภาพยนตร์ของจีน",
      en: "Jilin's capital and former Manchukuo capital — a hub of China's auto and film industries.",
    },
  },

  // Shanxi
  {
    id: "yuncheng",
    name: { th: "หยุนเฉิง", en: "Yuncheng", zh: "运城" },
    coords: [111.004, 35.026],
    category: "city",
    wiki: "Yuncheng",
    blurb: {
      th: "เมืองริมทะเลสาบเกลือทางใต้ของซานซี บ้านเกิดของเทพเจ้ากวนอู ประตูสู่ใจกลางประวัติศาสตร์จีนโบราณ",
      en: "A salt-lake city in southern Shanxi, birthplace of the war-god Guan Yu and a gateway into ancient Chinese history.",
    },
  },
  {
    id: "pingyao",
    name: { th: "เมืองโบราณผิงเหยา", en: "Pingyao Ancient City", zh: "平遥古城" },
    coords: [112.176, 37.189],
    category: "heritage",
    wiki: "Pingyao",
    blurb: {
      th: "เมืองโบราณมรดกโลก กำแพงเมืองสมัยหมิง–ชิงที่สมบูรณ์ที่สุด ‘วอลล์สตรีทแห่งราชวงศ์ชิง’ และโรงแลกเงินยื่อเซิงชาง",
      en: "A World Heritage walled town with intact Ming–Qing ramparts — the 'Wall Street of the Qing' and the Rishengchang exchange house.",
    },
  },
  {
    id: "wutaishan",
    name: { th: "อู่ไถซาน", en: "Mount Wutai", zh: "五台山" },
    coords: [113.593, 38.999],
    category: "temple",
    wiki: "Mount Wutai",
    blurb: {
      th: "พุทธคีรีมรดกโลก หนึ่งในสี่ภูเขาศักดิ์สิทธิ์ของจีน ที่ประทับพระโพธิสัตว์เหวินซู (มัญชุศรี) วัดเสียนทง–ถ่าหยวน–หอหมื่นพุทธะ",
      en: "A World Heritage Buddhist mountain — one of China's four sacred peaks, seat of Mañjuśrī, with the Xiantong, Tayuan and Wanfo temples.",
    },
  },
  {
    id: "datong",
    name: { th: "ต้าถง", en: "Datong", zh: "大同" },
    coords: [113.300, 40.076],
    category: "heritage",
    wiki: "Datong",
    blurb: {
      th: "อดีตนครหลวงโบราณ ที่ตั้งผาแกะสลักหยุนกัง (มรดกโลก) วัดเสวียนคงริมผา กำแพงเก้ามังกร และกำแพงเมืองโบราณ",
      en: "An ancient capital, home to the Yungang Grottoes (World Heritage), the cliff-clinging Hanging Temple, the Nine-Dragon Wall and old city walls.",
    },
  },
  {
    id: "taiyuan",
    name: { th: "ไท่หยวน", en: "Taiyuan", zh: "太原" },
    coords: [112.549, 37.857],
    category: "city",
    wiki: "Taiyuan",
    blurb: {
      th: "เมืองเอกของซานซีริมแม่น้ำเฝิน ที่ตั้งวัดจิ้นฉือโบราณและถนนคนเดินจงโหลว ประตูบินตรงสู่มรดกโลกแดนมังกร",
      en: "Shanxi's capital on the Fen River — home to the ancient Jinci Temple and Zhonglou street, the direct-flight gateway to its World Heritage sites.",
    },
  },
  {
    id: "hukou",
    name: { th: "น้ำตกหูโข่ว", en: "Hukou Waterfall", zh: "壶口瀑布" },
    coords: [110.448, 36.143],
    category: "nature",
    wiki: "Hukou Waterfall",
    blurb: {
      th: "น้ำตกที่ใหญ่ที่สุดบนแม่น้ำเหลือง สายน้ำสีอำพันถาโถมลงคอขวดหินกว้างกว่า 30 เมตร สัญลักษณ์พลังแห่งชนชาติจีน",
      en: "The largest waterfall on the Yellow River — amber torrents funnelling through a 30 m rock gorge, an icon of the Chinese nation's power.",
    },
  },
  {
    id: "jixian",
    name: { th: "จี๋เซี่ยน", en: "Ji County (Jixian)", zh: "吉县" },
    coords: [110.682, 36.099],
    category: "city",
    wiki: "Ji County, Shanxi",
    blurb: {
      th: "เมืองริมแม่น้ำเหลืองทางตะวันตกของซานซี จุดพักใกล้น้ำตกหูโข่วและคฤหาสน์ตระกูลหวัง",
      en: "A Yellow River town in western Shanxi — the base near Hukou Waterfall and the Wang Family Compound.",
    },
  },

  // Inner Mongolia
  {
    id: "ordos",
    name: { th: "เออร์ดอส", en: "Ordos", zh: "鄂尔多斯" },
    coords: [109.781, 39.608],
    category: "city",
    wiki: "Ordos City",
    blurb: {
      th: "‘หมู่พระราชวังอันมากมาย’ เมืองใหม่คังปาสือกลางที่ราบสูงมองโกเลียใน ที่ตั้งสุสานเจงกิสข่านและประตูสู่ทุ่งหญ้า–ทะเลทราย",
      en: "'The many palaces' — the Kangbashi new city on the Inner Mongolian plateau, site of the Genghis Khan Mausoleum and gateway to grassland and desert.",
    },
  },
  {
    id: "hohhot",
    name: { th: "โฮฮอต", en: "Hohhot", zh: "呼和浩特" },
    coords: [111.749, 40.842],
    category: "city",
    wiki: "Hohhot",
    blurb: {
      th: "เมืองเอกของมองโกเลียใน ที่ตั้งสุสานหวังเจาจวิน อารามต้าเจา และศูนย์ผลิตภัณฑ์โคนมเหมิงเลี่ยง",
      en: "Capital of Inner Mongolia — home to the Wang Zhaojun tomb, the Dazhao Monastery and the Mengniu dairy centre.",
    },
  },
  {
    id: "dalad",
    name: { th: "เมืองต้าลาฉี (ดาลัตแบนเนอร์)", en: "Dalad Banner", zh: "达拉特旗" },
    coords: [110.043, 40.398],
    category: "city",
    wiki: "Dalad Banner",
    blurb: {
      th: "เขตปกครองริมแม่น้ำเหลืองทางเหนือของเออร์ดอส ประตูสู่เนินทรายเสี่ยงซาวานในทะเลทรายคูปูฉี",
      en: "A Yellow River banner north of Ordos, the gateway to the Xiangshawan dunes in the Kubuqi Desert.",
    },
  },
  {
    id: "xiangshawan",
    name: { th: "เนินทรายเสี่ยงซาวาน", en: "Xiangshawan (Resonant Sand Bay)", zh: "响沙湾" },
    coords: [109.331, 40.396],
    category: "nature",
    wiki: "Kubuqi Desert",
    blurb: {
      th: "‘อ่าวทรายร้องเพลง’ ในทะเลทรายคูปูฉี เล่นกระเช้า ขี่อูฐ และฟังเสียงทรายดังก้องเมื่อไถลลงเนิน",
      en: "The 'singing sand bay' in the Kubuqi Desert — cable cars, camel rides and dunes that boom when you slide down them.",
    },
  },

  // Central China (Shaanxi–Henan)
  {
    id: "xian",
    name: { th: "ซีอาน", en: "Xi'an", zh: "西安" },
    coords: [108.940, 34.341],
    category: "heritage",
    wiki: "Xi'an",
    blurb: {
      th: "อดีตราชธานี ‘ฉางอาน’ จุดเริ่มเส้นทางสายไหม ที่ตั้งกองทัพทหารดินเผาจิ๋นซี เจดีย์ห่านป่าใหญ่ และกำแพงเมืองโบราณ",
      en: "The ancient capital 'Chang'an' and start of the Silk Road — home to the Terracotta Army, the Big Wild Goose Pagoda and the city walls.",
    },
  },
  {
    id: "sanmenxia",
    name: { th: "ซานเหมินเสีย", en: "Sanmenxia", zh: "三门峡" },
    coords: [111.194, 34.777],
    category: "heritage",
    wiki: "Sanmenxia",
    blurb: {
      th: "เมืองริมแม่น้ำเหลืองในเหอหนานตะวันตก ขึ้นชื่อเรื่อง ‘หมู่บ้านใต้ดินส่านโจว’ บ้านถ้ำดินโบราณกว่า 4,000 ปี",
      en: "A Yellow River city in western Henan, famed for the Shanzhou 'underground villages' of pit-cave dwellings over 4,000 years old.",
    },
  },
  {
    id: "luoyang",
    name: { th: "ลั่วหยาง", en: "Luoyang", zh: "洛阳" },
    coords: [112.454, 34.619],
    category: "heritage",
    wiki: "Luoyang",
    blurb: {
      th: "หนึ่งในเมืองหลวงเก่าแก่ที่สุดของจีน ที่ตั้งถ้ำแกะสลักหลงเหมิน (มรดกโลก) ศาลกวนอู และประตูอิ้งเทียนเหมิน",
      en: "One of China's oldest capitals — site of the Longmen Grottoes (World Heritage), the Guanlin temple and the Yingtianmen gate.",
    },
  },
  {
    id: "dengfeng",
    name: { th: "เติงเฟิง (เส้าหลิน)", en: "Dengfeng (Shaolin)", zh: "登封" },
    coords: [113.050, 34.453],
    category: "temple",
    wiki: "Mount Song",
    blurb: {
      th: "เมืองเชิงเขาซงซาน ที่ตั้งวัดเส้าหลินต้นกำเนิดกังฟู และป่าเจดีย์ (ถ่าหลิน) มรดกโลก",
      en: "A town below Mount Song, home to the Shaolin Temple — birthplace of kung fu — and the World Heritage Pagoda Forest.",
    },
  },
  {
    id: "jiaozuo",
    name: { th: "อุทยานหยุนไถซาน (เจียวจั่ว)", en: "Yuntaishan (Jiaozuo)", zh: "云台山" },
    coords: [113.238, 35.216],
    category: "nature",
    wiki: "Yuntai Mountain (Henan)",
    blurb: {
      th: "อุทยานธรณีมรดกโลกหยุนไถซาน หุบเขาแดงหงสือเสีย น้ำตกสูงที่สุดของจีน และลำธารใสกลางหุบผา",
      en: "The Yuntaishan UNESCO geopark — the Red Stone Gorge, China's tallest waterfall and clear streams through dramatic canyons.",
    },
  },
  {
    id: "zhengzhou",
    name: { th: "เจิ้งโจว", en: "Zhengzhou", zh: "郑州" },
    coords: [113.625, 34.747],
    category: "city",
    wiki: "Zhengzhou",
    blurb: {
      th: "เมืองเอกของเหอหนานริมแม่น้ำเหลือง ทะเลสาบหรูอี้ ‘ตึกข้าวโพด’ และจัตุรัส 27 ประตูสู่จงหยวน",
      en: "Henan's capital on the Yellow River — Ruyi Lake, the 'Corn Tower' and February 27 Square, the gateway to the Central Plains.",
    },
  },

  // Gansu–Qinghai Silk Road
  {
    id: "zhangye",
    name: { th: "จางเย่ (เขาสายรุ้ง)", en: "Zhangye (Rainbow Mountains)", zh: "张掖" },
    coords: [100.450, 38.926],
    category: "nature",
    wiki: "Zhangye",
    blurb: {
      th: "เมืองโอเอซิสบนเส้นทางสายไหม ที่ตั้งหุบเขาสายรุ้งจางเย่ตันเซี่ย (มรดกโลก) และถ้ำพุทธศิลป์หม่าถีซาน",
      en: "A Silk Road oasis city — home to the Zhangye Danxia rainbow mountains (World Heritage) and the Mati Temple grottoes.",
    },
  },
  {
    id: "jiayuguan",
    name: { th: "เจียยี่กวน", en: "Jiayuguan", zh: "嘉峪关" },
    coords: [98.290, 39.772],
    category: "heritage",
    wiki: "Jiayuguan City",
    blurb: {
      th: "‘ด่านแรกใต้หล้า’ ปลายตะวันตกของกำแพงเมืองจีน ป้อมปราการทะเลทรายสมัยราชวงศ์หมิงท่ามกลางเทือกเขาฉีเหลียน",
      en: "The 'First Pass under Heaven' — the western terminus of the Great Wall, a Ming desert fortress beneath the Qilian range.",
    },
  },
  {
    id: "dunhuang",
    name: { th: "ตุนหวง", en: "Dunhuang", zh: "敦煌" },
    coords: [94.662, 40.142],
    category: "heritage",
    wiki: "Dunhuang",
    blurb: {
      th: "โอเอซิสสายไหม ที่ตั้งถ้ำพุทธศิลป์ม่อเกาคู (มรดกโลก) เนินทรายครวญหมิงซาซาน และสระน้ำวงพระจันทร์",
      en: "A Silk Road oasis — home to the Mogao Caves (World Heritage), the Singing-Sand Dunes and Crescent Moon Lake.",
    },
  },
  {
    id: "qinghai-lake",
    name: { th: "ทะเลสาบชิงไห่", en: "Qinghai Lake", zh: "青海湖" },
    coords: [100.50, 36.70],
    category: "nature",
    wiki: "Qinghai Lake",
    blurb: {
      th: "ทะเลสาบน้ำเค็มที่ใหญ่ที่สุดของจีนบนที่ราบสูงชิงไห่–ทิเบต น้ำสีฟ้าครามล้อมด้วยทุ่งดอกเรพซีดสีทอง",
      en: "China's largest saltwater lake on the Qinghai–Tibet plateau — deep-blue water ringed by golden rapeseed fields in summer.",
    },
  },
  {
    id: "chaka",
    name: { th: "ทะเลสาบเกลือฉาข่า", en: "Chaka Salt Lake", zh: "茶卡盐湖" },
    coords: [99.085, 36.776],
    category: "nature",
    wiki: "Chaka Salt Lake",
    blurb: {
      th: "‘กระจกส่องฟ้า’ ทะเลสาบเกลือที่สะท้อนท้องฟ้าและเมฆราวกับกระจกเงา มีรถไฟเล็กชมวิวกลางผืนเกลือ",
      en: "The 'Mirror of the Sky' — a salt lake that reflects sky and clouds like glass, with a sightseeing mini-train across the salt flats.",
    },
  },
  // Fujian–Chaoshan coast
  {
    id: "xiamen",
    name: { th: "เซียะเหมิน", en: "Xiamen", zh: "厦门" },
    coords: [118.0798, 24.458],
    category: "city",
    wiki: "Xiamen",
    blurb: {
      th: "‘สวนสวรรค์กลางทะเล’ เมืองท่าฝูเจี้ยน ตึกแถวฉีโหลวสไตล์หนานหยางบนถนนจงซาน อาหารหมินหนาน และประตูสู่เกาะกู่ล่างอวี่",
      en: "Fujian's 'garden on the sea' — a breezy port of qilou arcades on Zhongshan Road, Minnan food, and the gateway to Gulangyu.",
    },
  },
  {
    id: "gulangyu",
    name: { th: "เกาะกู่ล่างอวี่ (เกาะเปียโน)", en: "Gulangyu (Piano Island)", zh: "鼓浪屿" },
    coords: [118.0625, 24.4475],
    category: "heritage",
    wiki: "Gulangyu",
    blurb: {
      th: "เกาะมรดกโลก UNESCO ปลอดรถยนต์ คฤหาสน์โคโลเนียล สวนซูจวง และพิพิธภัณฑ์เปียโน",
      en: "A car-free UNESCO island of colonial villas, the seaside Shuzhuang Garden and a museum of antique pianos.",
    },
  },
  {
    id: "nanputuo",
    name: { th: "วัดหนานผู่โถว", en: "Nanputuo Temple", zh: "南普陀寺" },
    coords: [118.0916, 24.4431],
    category: "temple",
    wiki: "Nanputuo Temple",
    blurb: {
      th: "วัดพันปีสมัยราชวงศ์ถังที่ชาวจีนโพ้นทะเลมาไหว้เจ้าแม่กวนอิมก่อนล่องเรือ มีอักษร ‘佛’ ยักษ์บนหน้าผา",
      en: "A Tang-era temple where emigrants prayed to Guanyin before sailing south, with a giant '佛' carved on the cliff above.",
    },
  },
  {
    id: "shantou",
    name: { th: "ซัวเถา", en: "Shantou", zh: "汕头" },
    coords: [116.6695, 23.3578],
    category: "city",
    wiki: "Shantou",
    blurb: {
      th: "เมืองท่าแต้จิ๋ว รากเหง้าของชาวไทยเชื้อสายจีน ย่านเมืองเก่าเสี่ยวกงหยวนผังรูปพัดและตึกแถวสไตล์หนานหยาง",
      en: "The Teochew port many Thai-Chinese families trace their roots to — its fan-shaped Xiaogongyuan old town of Nanyang-style arcades.",
    },
  },
  {
    id: "mayu-island",
    name: { th: "เกาะหม่าอวี่ (ไฮตังม่า)", en: "Mayu Island", zh: "妈屿岛" },
    coords: [116.7475, 23.3372],
    category: "heritage",
    blurb: {
      th: "เกาะปากอ่าวซัวเถา จุดลาจากของชาวแต้จิ๋วก่อนลงเรือสำเภาหัวแดงสู่สยาม มีศาลเจ้าแม่ทับทิมเก่าแก่",
      en: "An islet at the mouth of Shantou harbour — the Teochew emigrants' last stop to pray to Mazu before sailing to Siam.",
    },
  },
  {
    // APPROX — verify: Huafu village, Shanghua town, Chenghai; placed at the town centre.
    id: "taksin-tomb",
    name: { th: "สุสานพระเจ้าตากสินมหาราช", en: "King Taksin Memorial Tomb", zh: "郑信衣冠墓" },
    coords: [116.7135, 23.5228],
    category: "heritage",
    blurb: {
      th: "สุสานฉลองพระองค์และพระมาลาของสมเด็จพระเจ้าตากสินมหาราช ณ บ้านเกิดพระราชบิดาในเขตเฉิงไห่",
      en: "The memorial tomb holding King Taksin's robes and hat, in his father's home village in Chenghai.",
    },
  },
  {
    id: "chaozhou",
    name: { th: "เมืองโบราณแต้จิ๋ว", en: "Chaozhou Ancient City", zh: "潮州古城" },
    coords: [116.6379, 23.6651],
    category: "city",
    wiki: "Chaozhou",
    blurb: {
      th: "เมืองเก่า 1,600 ปีริมแม่น้ำหานเจียง ถนนผายฝ่างที่มีซุ้มประตูหิน 23 ซุ้ม วัดไคหยวน และชากังฟู",
      en: "A 1,600-year-old city on the Han River — Paifang Street's 23 stone arches, Kaiyuan Temple and gongfu tea.",
    },
  },
  {
    id: "guangji-bridge",
    name: { th: "สะพานเซียงจื่อ (กว่างจี้)", en: "Guangji (Xiangzi) Bridge", zh: "广济桥" },
    coords: [116.6505, 23.6632],
    category: "heritage",
    wiki: "Guangji Bridge",
    blurb: {
      th: "สะพานโบราณ 800 ปี หนึ่งในสี่มหาสะพานของจีน กลางสะพานเป็นเรือไม้ 18 ลำเปิด-ปิดได้",
      en: "An 800-year-old bridge, one of China's four great ancient bridges, with a middle of 18 moored boats that open and close.",
    },
  },
  {
    id: "xuanwushan",
    name: { th: "เอียงบู๊ซัว (เขาเสวียนอู่)", en: "Xuanwu Mountain (Jieshi)", zh: "玄武山" },
    coords: [115.8291, 22.8206],
    category: "temple",
    blurb: {
      th: "ภูเขาศักดิ์สิทธิ์ริมทะเลลู่เฟิง ที่ตั้งวัดหยวนซานสมัยซ่งใต้ ประดิษฐานองค์ตั่วเล่าเอี้ย (เจ้าพ่อเสือ)",
      en: "A sacred seaside hill at Jieshi, Lufeng, home to the Southern Song Yuanshan Temple of Xuantian Shangdi.",
    },
  },
  {
    // APPROX — verify: Heping town, Chaoyang district; placed at the district centre.
    id: "daifeng-temple",
    name: { th: "ศาลเจ้าไต่ฮงกง (เหอผิง)", en: "Tai Hong Kong Shrine (Heping)", zh: "大峰祖师庙" },
    coords: [116.596, 23.266],
    category: "temple",
    blurb: {
      th: "ศาลเจ้าหลวงปู่ไต้ฮงกง พระภิกษุสมัยซ่งผู้เป็นแรงบันดาลใจของมูลนิธิป่อเต็กตึ๊งในไทย",
      en: "The shrine of the Song-dynasty monk Tai Hong Kong, the inspiration behind Thailand's Poh Teck Tung Foundation.",
    },
  },
  {
    id: "yongding-tulou",
    name: { th: "บ้านดินหย่งติ้ง (ราชาบ้านดิน)", en: "Yongding Tulou (Chengqi Lou)", zh: "永定土楼 · 承启楼" },
    coords: [117.004, 24.6635],
    category: "heritage",
    wiki: "Fujian tulou",
    blurb: {
      th: "บ้านดินฮากกามรดกโลก ‘ราชาบ้านดิน’ เฉิงฉี่โหลว วงกลมซ้อน 4 ชั้น กว่า 400 ห้อง",
      en: "UNESCO Hakka earthen roundhouses — Chengqi Lou, the 'King of Tulou', has four concentric rings and some 400 rooms.",
    },
  },
  {
    id: "tianluokeng",
    name: { th: "กลุ่มบ้านดินเถียนหลัวเคิง", en: "Tianluokeng Tulou Cluster", zh: "田螺坑土楼群" },
    coords: [117.0553, 24.5872],
    category: "heritage",
    wiki: "Tianluokeng Tulou cluster",
    blurb: {
      th: "‘สี่กับข้าวหนึ่งชามซุป’ บ้านดินทรงกลม 3 หลัง ทรงรี 1 หลัง ล้อมบ้านดินทรงสี่เหลี่ยมกลางหุบเขาหนานจิ้ง",
      en: "The 'four dishes and a soup' — three round, one oval and one square earthen house in a Nanjing County valley.",
    },
  },
  {
    id: "zhangzhou",
    name: { th: "เมืองโบราณจางโจว", en: "Zhangzhou Ancient City", zh: "漳州古城" },
    coords: [117.6482, 24.5095],
    category: "city",
    wiki: "Zhangzhou",
    blurb: {
      th: "หัวใจวัฒนธรรมหมินหนานอายุกว่า 1,300 ปี ตึกแถวอิฐแดง ซุ้มประตูหินหมิง–ชิง และโชว์ ‘หวนคืนถิ่นหมินหนาน’",
      en: "A 1,300-year-old heart of Minnan culture — red-brick arcades, Ming–Qing stone arches and the 'Return to Minnan' show.",
    },
  },
  // Chongqing & surrounds
  {
    id: "chongqing",
    name: { th: "ฉงชิ่ง", en: "Chongqing", zh: "重庆" },
    coords: [106.5734, 29.5601],
    category: "city",
    wiki: "Chongqing",
    blurb: {
      th: "‘มหานคร 8 มิติ’ บนขุนเขาริมแม่น้ำแยงซีและเจียหลิง ตึกขุยซิง ตรอกบันได 18 ขั้น และหม้อไฟหม่าล่า",
      en: "The '8D mountain city' at the Yangtze–Jialing confluence — the Kuixing building, the Shibati stairways and mala hotpot.",
    },
  },
  {
    id: "hongyadong",
    name: { th: "หงหยาต้ง", en: "Hongyadong", zh: "洪崖洞" },
    coords: [106.5753, 29.5651],
    category: "heritage",
    wiki: "Hongya Cave",
    blurb: {
      th: "หมู่ตึกไม้แบบเตี้ยวเจี่ยวโหลซ้อนชั้นบนหน้าผาริมแม่น้ำเจียหลิง เปิดไฟสีทองยามค่ำดั่งเมืองในแอนิเมชัน",
      en: "Stilted diaojiaolou buildings stacked up a Jialing River cliff, glowing gold at night like a scene from an animated film.",
    },
  },
  {
    id: "ciqikou",
    name: { th: "เมืองโบราณฉือชี่โข่ว", en: "Ciqikou Ancient Town", zh: "磁器口古镇" },
    coords: [106.4497, 29.5812],
    category: "heritage",
    wiki: "Ciqikou, Chongqing",
    blurb: {
      th: "‘เมืองท่าเครื่องเคลือบ’ สมัยหมิง–ชิงริมแม่น้ำเจียหลิง ถนนหินโบราณ โรงน้ำชา และขนมเกลียวเฉินหมาฮวา",
      en: "A Ming–Qing 'porcelain port' on the Jialing — old stone lanes, teahouses and Chen Mahua's fried dough twists.",
    },
  },
  {
    id: "liziba",
    name: { th: "สถานีรถไฟทะลุตึกหลี่จื่อป้า", en: "Liziba (train-through-building)", zh: "李子坝站" },
    coords: [106.5353, 29.5508],
    category: "city",
    wiki: "Liziba station",
    blurb: {
      th: "โมโนเรลสาย 2 แล่นทะลุอาคารสูง 19 ชั้น ภาพจำสุดแปลกของเมืองบนภูเขา มีจุดชมวิวถ่ายรูปด้านล่าง",
      en: "Line 2 monorail runs straight through a 19-storey apartment block — Chongqing's most surreal photo stop.",
    },
  },
  {
    // APPROX — city centre; the bullet-train arrival point before Tenglong Cave.
    id: "lichuan",
    name: { th: "หลี่ชวน", en: "Lichuan", zh: "利川" },
    coords: [108.935, 30.293],
    category: "city",
    wiki: "Lichuan, Hubei",
    blurb: {
      th: "‘เมืองแห่งความเย็นสบาย’ บนที่สูงทางตะวันตกของหูเป่ย์ ประตูสู่ถ้ำเถิงหลงต้ง",
      en: "Western Hubei's cool upland 'city of fresh air' and the gateway to Tenglong Cave.",
    },
  },
  {
    id: "tenglong-cave",
    name: { th: "ถ้ำเถิงหลงต้ง (ถ้ำมังกรทะยาน)", en: "Tenglong Cave", zh: "腾龙洞" },
    coords: [108.9828, 30.3364],
    category: "nature",
    wiki: "Tenglong Cave",
    blurb: {
      th: "หนึ่งในระบบถ้ำหินปูนที่ใหญ่ที่สุดของเอเชีย ปากถ้ำสูง 74 ม. น้ำตกไหลลงอุโมงค์ใต้ดิน",
      en: "One of Asia's largest karst cave systems — a 74 m-high mouth swallowing a roaring underground waterfall.",
    },
  },
  {
    id: "xuanen",
    name: { th: "ซวนเอิน", en: "Xuan'en", zh: "宣恩" },
    coords: [109.491, 29.987],
    category: "city",
    wiki: "Xuan'en County",
    blurb: {
      th: "เมืองริมแม่น้ำก้งสุ่ยแห่งวัฒนธรรมถู่เจียและเหมียว ยามค่ำมีแพไม้ไผ่มังกรประดับไฟยาวกว่า 250 ม.",
      en: "A Tujia and Miao riverside town on the Gongshui, where a 250 m illuminated bamboo 'dragon raft' glides by night.",
    },
  },
  {
    // APPROX — verify: Pingshan village, Hefeng County; placed ~10 km NE of the county seat.
    id: "pingshan-canyon",
    name: { th: "แกรนด์แคนยอนผิงซาน (เรือลอยฟ้า)", en: "Pingshan Canyon ('floating boats')", zh: "屏山峡谷" },
    coords: [110.088, 29.974],
    category: "nature",
    blurb: {
      th: "หุบผาหินปูนที่น้ำใสจนเรือไม้ดูเหมือนลอยกลางอากาศ ล่องผ่านช่องเขา ‘ท้องฟ้าเส้นเดียว’",
      en: "A limestone gorge whose water is so clear the wooden boats seem to float in mid-air through its 'one-thread sky' narrows.",
    },
  },
  {
    id: "enshi",
    name: { th: "เอินซือ", en: "Enshi", zh: "恩施" },
    coords: [109.4746, 30.2975],
    category: "city",
    wiki: "Enshi City",
    blurb: {
      th: "เมืองหลวงเขตปกครองตนเองถู่เจียและม้ง ขุนเขาหินปูนลำธารมรกต และ ‘เมืองลูกสาว’ ถู่เจีย",
      en: "Capital of the Tujia–Miao autonomous prefecture — karst peaks, emerald streams and the Tujia 'Girls' City'.",
    },
  },
  {
    id: "xingwen",
    name: { th: "ซิ่งเหวิน", en: "Xingwen", zh: "兴文" },
    coords: [105.2331, 28.3072],
    category: "city",
    wiki: "Xingwen County",
    blurb: {
      th: "อำเภอทางใต้ของเสฉวนบนรอยต่อที่ราบสูงยูนนาน–กุ้ยโจว ดินแดนอุทยานธรณีโลกและวัฒนธรรมชาวเหมียว",
      en: "A southern Sichuan county on the edge of the Yunnan–Guizhou plateau — UNESCO geopark country with Miao heritage.",
    },
  },
  {
    id: "xingwen-stone-sea",
    name: { th: "ทะเลหินซิงเหวิน & ถ้ำเทียนฉวนต้ง", en: "Xingwen Stone Sea & Tianquan Cave", zh: "兴文石海 · 天泉洞" },
    coords: [105.1429, 28.1832],
    category: "nature",
    blurb: {
      th: "อุทยานธรณีโลก UNESCO คลื่นหินดำ หลุมยุบยักษ์ และถ้ำเทียนฉวนต้งที่มีปล่องแสงและแม่น้ำใต้ดินให้ล่องเรือ",
      en: "A UNESCO geopark of black stone waves, giant sinkholes and Tianquan Cave, with a light shaft and an underground river boat ride.",
    },
  },
  {
    id: "bowangshan",
    name: { th: "เขาป้อหวัง (ถ้ำหมอกบิน)", en: "Bowang Mountain", zh: "僰王山" },
    coords: [105.062, 28.3202],
    category: "nature",
    blurb: {
      th: "ทะเลไผ่และหุบเขาคาสต์ถิ่นชาวป้อผู้ลึกลับเจ้าของโลงศพแขวน มีถ้ำหมอกบินปล่องคู่และน้ำตก",
      en: "Bamboo-sea karst country of the vanished Bo people of hanging-coffin fame, with the twin-shaft Flying Mist Cave and its falls.",
    },
  },
  {
    id: "suining",
    name: { th: "ซุ่ยหนิง (บ้านเกิดเจ้าแม่กวนอิม)", en: "Suining", zh: "遂宁" },
    coords: [105.5733, 30.508],
    category: "temple",
    wiki: "Suining",
    blurb: {
      th: "‘บ้านเกิดแห่งวัฒนธรรมเจ้าแม่กวนอิม’ ริมแม่น้ำฝูเจียง วัดหลิงเฉวียน วัดกว่างเต๋อ และเมืองโบราณหลงเฟิ่ง",
      en: "The legendary 'hometown of Guanyin' on the Fu River — Lingquan Temple, Guangde Temple and Longfeng ancient town.",
    },
  },
  {
    id: "bazhong",
    name: { th: "ปาจง", en: "Bazhong", zh: "巴中" },
    coords: [106.7478, 31.8691],
    category: "city",
    wiki: "Bazhong",
    blurb: {
      th: "เมืองขุนเขาตะวันออกเฉียงเหนือของเสฉวน บนเส้นทางโบราณส่านซี–เสฉวน ฐานพักก่อนขึ้นหลงโถวซาน",
      en: "A mountain city in north-east Sichuan on the old Shaanxi–Sichuan road — the base for Longtoushan.",
    },
  },
  {
    id: "longtoushan",
    name: { th: "ภูเขาหิมะหลงโถวซาน", en: "Longtoushan Snow Mountain", zh: "龙头山" },
    coords: [106.9849, 32.7623],
    category: "nature",
    blurb: {
      th: "ยอดเขา 2,336 ม. บนรอยต่อเสฉวน–ส่านซี ขึ้นกระเช้าและบันไดเลื่อนกลางแจ้ง 180 ม. เดินระเบียงกระจกเลียบผา 3.5 กม.",
      en: "A 2,336 m peak on the Sichuan–Shaanxi border, reached by cable car and a 180 m open-air escalator, with a 3.5 km cliff walkway.",
    },
  },
  {
    id: "langzhong",
    name: { th: "เมืองโบราณล่างจง", en: "Langzhong Ancient City", zh: "阆中古城" },
    coords: [105.9651, 31.5774],
    category: "heritage",
    wiki: "Langzhong",
    blurb: {
      th: "หนึ่งในสี่เมืองโบราณที่สมบูรณ์ที่สุดของจีน อายุกว่า 2,300 ปี ผังฮวงจุ้ยอันดับหนึ่ง หอจงเทียนโหลว",
      en: "One of China's four best-preserved ancient cities — 2,300 years old, laid out on textbook feng shui around the Zhongtian Tower.",
    },
  },
  // Changsha & Hunan–Jiangxi
  {
    id: "changsha",
    name: { th: "ฉางซา", en: "Changsha", zh: "长沙" },
    coords: [113.2384, 28.1451],
    category: "city",
    wiki: "Changsha",
    blurb: {
      th: "เมืองเอกหูหนาน ถนนคนเดินหวงซิงลู่ ทะเลสาบซงย่า วัดไคฝู และศูนย์การค้า IFS ประตูสู่ภาคกลางตอนใต้ของจีน",
      en: "Hunan's capital — Huangxing Road, Songya Lake, Kaifu Temple and the IFS tower; the gateway to central-south China.",
    },
  },
  {
    id: "nanchang",
    name: { th: "หนานชาง (หอเถิงหวัง)", en: "Nanchang (Tengwang Pavilion)", zh: "南昌 · 滕王阁" },
    coords: [115.8729, 28.6767],
    category: "heritage",
    wiki: "Pavilion of Prince Teng",
    blurb: {
      th: "เมืองเอกเจียงซีริมแม่น้ำก้านเจียง ที่ตั้งหอเถิงหวังเก๋อ หนึ่งในสามหอโบราณแห่งเจียงหนาน",
      en: "Jiangxi's capital on the Gan River, home of the Tengwang Pavilion, one of the three great towers of Jiangnan.",
    },
  },
  {
    id: "wuyuan",
    name: { th: "อู้หยวน", en: "Wuyuan", zh: "婺源" },
    coords: [117.7543, 29.3234],
    category: "city",
    wiki: "Wuyuan County, Jiangxi",
    blurb: {
      th: "‘ชนบทที่งดงามที่สุดของจีน’ บ้านสไตล์ฮุยโจวผนังขาวหลังคาเทา และโชว์แสงสีอู้หนี่โจว",
      en: "'China's most beautiful countryside' — white-walled Huizhou villages and the Wunüzhou light show.",
    },
  },
  {
    id: "huangling",
    name: { th: "หมู่บ้านหวงหลิง", en: "Huangling Village", zh: "篁岭" },
    coords: [118.1133, 29.3236],
    category: "heritage",
    blurb: {
      th: "หมู่บ้านลอยฟ้าบนไหล่เขา ขึ้นกระเช้า ชมประเพณีตากผลผลิตสีสด และสะพานแขวนกระจกเหล่ยซิน",
      en: "A cliffside village reached by cable car, famous for its colourful harvest-drying roofs and the Leixin glass bridge.",
    },
  },
  {
    id: "shangrao",
    name: { th: "ซ่างเหยา", en: "Shangrao", zh: "上饶" },
    coords: [117.4054, 28.7436],
    category: "city",
    wiki: "Shangrao",
    blurb: {
      th: "เมืองโบราณทางตะวันออกเฉียงเหนือของเจียงซี ฐานเที่ยวเขาหลิงซานและหุบเขาวั่งเซียนกู่",
      en: "An old city in north-east Jiangxi and the base for Lingshan and Wangxian Valley.",
    },
  },
  {
    id: "lingshan",
    name: { th: "เขาหลิงซาน", en: "Lingshan Mountain", zh: "灵山" },
    coords: [117.7534, 28.5785],
    category: "nature",
    blurb: {
      th: "ขุนเขาแกรนิตศักดิ์สิทธิ์ลัทธิเต๋า ขึ้นกระเช้าและบันไดเลื่อน ‘บันไดสวรรค์หยุนติ่ง’ จุดชมวิวกระจกแห่งท้องฟ้า",
      en: "A sacred Daoist granite range climbed by cable car and the Yunding 'sky ladder' escalator, with a sky-mirror viewpoint.",
    },
  },
  {
    // APPROX — verify: Wangxian township, Guangxin District; placed at the township centre.
    id: "wangxian-valley",
    name: { th: "หุบเขาเทวดาวั่งเซียนกู่", en: "Wangxian Valley", zh: "望仙谷" },
    coords: [117.8097, 28.6573],
    category: "nature",
    blurb: {
      th: "หมู่บ้านไม้เกาะหน้าผาในหุบเขา ‘แดนเซียน’ เปิดไฟสวยยามค่ำ",
      en: "A 'fairyland' valley of wooden houses clinging to the cliffs, lit up spectacularly after dark.",
    },
  },
  {
    id: "langshan",
    name: { th: "เขาล่างซาน", en: "Langshan", zh: "崀山" },
    coords: [110.7879, 26.333],
    category: "nature",
    blurb: {
      th: "มรดกโลกภูมิทัศน์หินทรายแดงตันเซีย ยอดเขาพริก ยอดเขาโหนกอูฐ ยอดเขาปาเจี่ยวจ้าย และล่องแพแม่น้ำฟูอี้",
      en: "A UNESCO danxia landscape — Chilli Peak, Camel Peak, Bajiaozhai's 'whales in a sea of cloud' and rafting on the Fuyi River.",
    },
  },
  {
    id: "fenghuang",
    name: { th: "เมืองโบราณเฟิ่งหวง", en: "Fenghuang Ancient Town", zh: "凤凰古城" },
    coords: [109.5992, 28.0205],
    category: "heritage",
    wiki: "Fenghuang County",
    blurb: {
      th: "เมืองโบราณริมแม่น้ำถัวเจียง บ้านเสาสูงเตี้ยวเจี่ยวโหลว และสะพานสายรุ้งเปิดไฟยามค่ำ",
      en: "An old riverside town on the Tuo River — stilted houses and the Rainbow Bridge lit at night.",
    },
  },
  {
    id: "shiziguan",
    name: { th: "อุทยานซือจื่อกวน", en: "Shiziguan", zh: "狮子关" },
    coords: [109.5432, 29.9785],
    category: "nature",
    blurb: {
      th: "หุบผาและผืนน้ำในอำเภอซวนเอิน นั่งรถเปิดประทุนข้าม ‘สะพานล้อคลื่น’ ที่ลอยเรี่ยน้ำ",
      en: "A gorge-and-lake park in Xuan'en County, crossed by open-top car over a floating 'wave bridge'.",
    },
  },
  {
    id: "longshan",
    name: { th: "หลงซาน", en: "Longshan", zh: "龙山" },
    coords: [109.4966, 29.2312],
    category: "city",
    wiki: "Longshan County",
    blurb: {
      th: "อำเภอบนเทือกเขาอู่หลิงในเซียงซี สถานีรถไฟความเร็วสูงกลับฉางซา",
      en: "A Wuling-mountain county in western Hunan with a bullet-train station back to Changsha.",
    },
  },
  {
    id: "changde",
    name: { th: "ฉางเต๋อ (วัดเฉียนหมิง)", en: "Changde", zh: "常德" },
    coords: [111.6929, 29.0346],
    category: "city",
    wiki: "Changde",
    blurb: {
      th: "เมืองโบราณ ‘อู๋หลิง’ ดินแดนต้นกำเนิดนิทานท้อพันลี้ วัดเซนเฉียนหมิง",
      en: "The ancient 'Wuling' city of the Peach Blossom Spring legend, with the Zen Qianming Temple.",
    },
  },
  {
    id: "furong-town",
    name: { th: "เมืองโบราณฝูหรงเจิ้น", en: "Furong Ancient Town", zh: "芙蓉镇" },
    coords: [109.9561, 28.7621],
    category: "heritage",
    blurb: {
      th: "เมืองเก่าสองพันปีบนหน้าผาริมน้ำตก ‘เมืองแขวนบนน้ำตก’",
      en: "A 2,000-year-old town perched on a cliff beside a waterfall — the 'town hanging on a waterfall'.",
    },
  },
  {
    id: "biancheng",
    name: { th: "เมืองโบราณเปียนเฉิง", en: "Biancheng (Chadong)", zh: "边城 · 茶峒" },
    coords: [109.2747, 28.5048],
    category: "heritage",
    blurb: {
      th: "เมืองชายแดนสามมณฑลจากนวนิยาย ‘เปียนเฉิง’ เกาะฉุ้ยฉุ้ย และเรือลากเชือกลาลาตู้",
      en: "The three-province border town of the novel 'Border Town' — Cuicui Island and the rope-pulled Lalatu ferry.",
    },
  },
  {
    id: "yunshe",
    name: { th: "หมู่บ้านม้งหยุนซือ", en: "Yunshe Village", zh: "云舍" },
    coords: [108.8153, 27.7476],
    category: "heritage",
    blurb: {
      th: "หมู่บ้านถู่เจียโบราณริมลำธารใสเชิงเขาฟานจิ้งซาน",
      en: "An old Tujia village by a clear stream at the foot of Fanjingshan.",
    },
  },
  {
    id: "fanjingshan",
    name: { th: "ภูเขาฟานจิ้งซาน", en: "Fanjingshan", zh: "梵净山" },
    coords: [108.6921, 27.9194],
    category: "nature",
    wiki: "Fanjingshan",
    blurb: {
      th: "มรดกโลกทางธรรมชาติ ยอดเขาจินติ่ง 2,336 ม. วิหารบนยอดหิน และ ‘หินเห็ด’ อายุพันล้านปี",
      en: "A UNESCO natural site — the 2,336 m Red Clouds Golden Summit with temples on top and the billion-year-old Mushroom Rock.",
    },
  },
  {
    id: "tongren",
    name: { th: "ถงเหริน", en: "Tongren", zh: "铜仁" },
    coords: [108.584, 27.9529],
    category: "city",
    wiki: "Tongren",
    blurb: {
      th: "เมืองเอกตะวันออกเฉียงเหนือของกุ้ยโจว ประตูสู่ฟานจิ้งซาน และแกรนด์แคนยอนถงเหริน",
      en: "North-east Guizhou's main city — gateway to Fanjingshan and the Tongren Grand Canyon.",
    },
  },
  // North Xinjiang (via Chengdu)
  {
    id: "luodai",
    name: { th: "เมืองโบราณลั่วไต้", en: "Luodai Ancient Town", zh: "洛带古镇" },
    coords: [104.326, 30.6391],
    category: "heritage",
    wiki: "Luodai",
    blurb: {
      th: "ชุมชนฮากกา (จีนแคะ) ที่ใหญ่ที่สุดของจีนตะวันตก ชานเมืองเฉิงตู",
      en: "The largest Hakka community in western China, on the edge of Chengdu.",
    },
  },
  // Yunnan
  {
    id: "kunming",
    name: { th: "คุนหมิง", en: "Kunming", zh: "昆明" },
    coords: [102.7169, 25.0399],
    category: "city",
    wiki: "Kunming",
    blurb: {
      th: "‘เมืองแห่งฤดูใบไม้ผลิ’ เมืองเอกยูนนาน ถนนหนานผิง และวัดหยวนทง",
      en: "Yunnan's 'city of eternal spring' — Nanping Street and Yuantong Temple.",
    },
  },
  {
    id: "dali",
    name: { th: "เมืองโบราณต้าหลี่", en: "Dali Old Town", zh: "大理古城" },
    coords: [100.1625, 25.6983],
    category: "heritage",
    wiki: "Dali Old Town",
    blurb: {
      th: "เมืองหลวงเก่าอาณาจักรน่านเจ้าริมทะเลสาบเอ๋อร์ไห่ เจดีย์สามองค์ และโค้ง S",
      en: "The old Nanzhao capital by Erhai Lake — the Three Pagodas and Erhai's S-bend.",
    },
  },
  {
    id: "shangrila",
    name: { th: "แชงกรีล่า (เมืองโบราณ)", en: "Shangri-La Old Town", zh: "独克宗古城" },
    coords: [99.7076, 27.8105],
    category: "city",
    wiki: "Dukezong",
    blurb: {
      th: "เมืองโบราณทิเบตจงเตี้ยน กงล้อมนตร์ยักษ์วัดต้าฝอ บนที่สูง ~3,300 ม.",
      en: "The Tibetan old town of Zhongdian with the giant prayer wheel at Dafo Temple, ~3,300 m up.",
    },
  },
  {
    id: "songzanlin",
    name: { th: "วัดลามะซงจ้านหลิน", en: "Songzanlin Monastery", zh: "松赞林寺" },
    coords: [99.7042, 27.8636],
    category: "temple",
    wiki: "Songzanlin Monastery",
    blurb: {
      th: "วัดลามะใหญ่ที่สุดในยูนนาน ‘โปตาลาน้อย’ สร้างปี ค.ศ. 1679",
      en: "Yunnan's largest Tibetan monastery, the 'little Potala', founded in 1679.",
    },
  },
  {
    id: "tiger-leaping-gorge",
    name: { th: "ช่องแคบเสือกระโจน", en: "Tiger Leaping Gorge", zh: "虎跳峡" },
    coords: [100.1206, 27.2044],
    category: "nature",
    wiki: "Tiger Leaping Gorge",
    blurb: {
      th: "หุบเหวลึกของแม่น้ำจินซา (แยงซีตอนบน) มีบันไดเลื่อนลงจุดชมวิว",
      en: "A deep gorge of the upper Yangtze (Jinsha), with escalators down to the viewpoint.",
    },
  },
  {
    id: "lijiang",
    name: { th: "เมืองโบราณลี่เจียง", en: "Lijiang Old Town", zh: "丽江古城" },
    coords: [100.2353, 26.8739],
    category: "heritage",
    wiki: "Old Town of Lijiang",
    blurb: {
      th: "เมืองมรดกโลกของชาวน่าซี สระน้ำมังกรดำ และหมู่บ้านไป๋ซา",
      en: "The UNESCO Naxi old town, Black Dragon Pool and Baisha village.",
    },
  },
  {
    id: "jade-dragon",
    name: { th: "ภูเขาหิมะมังกรหยก", en: "Jade Dragon Snow Mountain", zh: "玉龙雪山" },
    coords: [100.1767, 27.0984],
    category: "nature",
    wiki: "Jade Dragon Snow Mountain",
    blurb: {
      th: "ภูเขาหิมะตลอดปี ขึ้นกระเช้าใหญ่ ชมโชว์ Impression Lijiang และหุบเขาสีน้ำเงิน",
      en: "Year-round snow peaks by cable car, the Impression Lijiang show and Blue Moon Valley.",
    },
  },
  {
    // APPROX — verify: Yiliang county seat; the cherry-blossom valley itself is not pinned exactly.
    id: "yiliang",
    name: { th: "หยีเหลียง (หุบเขาซากุระ)", en: "Yiliang (cherry valley)", zh: "宜良" },
    coords: [103.2016, 24.9765],
    category: "nature",
    blurb: {
      th: "หุบเขาซากุระบานสะพรั่งช่วง ก.พ.–มี.ค. ห่างคุนหมิง ~70 กม.",
      en: "A valley of cherry blossom in Feb–Mar, about 70 km from Kunming.",
    },
  },
  // Sichuan
  {
    id: "dujiangyan",
    name: { th: "ตูเจียงเอี้ยน", en: "Dujiangyan", zh: "都江堰" },
    coords: [103.6143, 30.9965],
    category: "heritage",
    wiki: "Dujiangyan",
    blurb: {
      th: "ระบบชลประทานโบราณมรดกโลก เมืองโบราณกวนเสี้ยน และสะพานหนานเฉียวเปิดไฟยามค่ำ",
      en: "The UNESCO ancient irrigation system, Guanxian old town and the illuminated Nanqiao Bridge.",
    },
  },
  {
    id: "siguniang",
    name: { th: "ภูเขาสี่ดรุณี (ซวงเฉียวโกว)", en: "Mount Siguniang (Shuangqiao)", zh: "四姑娘山 · 双桥沟" },
    coords: [102.7678, 30.9817],
    category: "nature",
    wiki: "Mount Siguniang",
    blurb: {
      th: "ยอดเขาหิมะสี่ยอด หุบเขาซวงเฉียวโกวยาว 35 กม. ป่าใบไม้เปลี่ยนสี",
      en: "Four snow peaks above the 35 km Shuangqiao Valley and its autumn forests.",
    },
  },
  {
    id: "maoxian",
    name: { th: "เม่าเสี้ยน", en: "Maoxian", zh: "茂县" },
    coords: [103.6446, 31.8567],
    category: "city",
    wiki: "Mao County",
    blurb: {
      th: "อำเภอชาวเชียงริมแม่น้ำหมิน ทางผ่านสู่หวงหลงและจิ่วจ้ายโกว",
      en: "A Qiang-people county on the Min River, on the road to Huanglong and Jiuzhaigou.",
    },
  },
  {
    id: "huanglong",
    name: { th: "อุทยานหวงหลง", en: "Huanglong", zh: "黄龙" },
    coords: [103.9282, 32.7806],
    category: "nature",
    wiki: "Huanglong Scenic and Historic Interest Area",
    blurb: {
      th: "มรดกโลก แอ่งหินปูนสีทองไล่ระดับเป็นขั้นบันได บนที่สูง ~3,500 ม.",
      en: "A UNESCO valley of golden travertine terraces and pools, at ~3,500 m.",
    },
  },
  // Beijing–Shanghai
  {
    id: "beijing",
    name: { th: "ปักกิ่ง", en: "Beijing", zh: "北京" },
    coords: [116.4053, 39.9069],
    category: "city",
    wiki: "Beijing",
    blurb: {
      th: "เมืองหลวงจีน ถนนหวังฝูจิ่ง วัดลามะ ถนนเฉียนเหมิน และสนามกีฬารังนก",
      en: "China's capital — Wangfujing, the Lama Temple, Qianmen Street and the Bird's Nest.",
    },
  },
  {
    id: "forbidden-city",
    name: { th: "จัตุรัสเทียนอันเหมิน & พระราชวังต้องห้าม", en: "Tiananmen & the Forbidden City", zh: "天安门 · 故宫" },
    coords: [116.3908, 39.9174],
    category: "heritage",
    wiki: "Forbidden City",
    blurb: {
      th: "จัตุรัสใหญ่ที่สุดในโลกและพระราชวังของจักรพรรดิหมิง–ชิง มรดกโลก",
      en: "The world's largest square and the UNESCO palace of the Ming and Qing emperors.",
    },
  },
  {
    id: "summer-palace",
    name: { th: "พระราชวังฤดูร้อนอี้เหอหยวน", en: "Summer Palace", zh: "颐和园" },
    coords: [116.2647, 39.9901],
    category: "heritage",
    wiki: "Summer Palace",
    blurb: {
      th: "อุทยานหลวงริมทะเลสาบคุนหมิง มรดกโลก",
      en: "The UNESCO imperial garden on Kunming Lake.",
    },
  },
  {
    id: "juyongguan",
    name: { th: "กำแพงเมืองจีนด่านจวียงกวน", en: "Great Wall at Juyongguan", zh: "居庸关长城" },
    coords: [116.0604, 40.2994],
    category: "heritage",
    wiki: "Juyong Pass",
    blurb: {
      th: "ด่านกำแพงเมืองจีนใกล้ปักกิ่ง ปีนป้อมบนสันเขา",
      en: "A Great Wall pass near Beijing with forts climbing the ridges.",
    },
  },
  {
    id: "temple-of-heaven",
    name: { th: "หอฟ้าเทียนถาน", en: "Temple of Heaven", zh: "天坛" },
    coords: [116.4029, 39.8799],
    category: "heritage",
    wiki: "Temple of Heaven",
    blurb: {
      th: "ศาสนสถานที่จักรพรรดิบวงสรวงขอพรการเก็บเกี่ยว มรดกโลก",
      en: "Where emperors prayed for good harvests — a UNESCO site.",
    },
  },
  {
    id: "shanghai",
    name: { th: "เซี่ยงไฮ้", en: "Shanghai", zh: "上海" },
    coords: [121.471, 31.2339],
    category: "city",
    wiki: "Shanghai",
    blurb: {
      th: "มหานครใหญ่ที่สุดของจีน ถนนนานกิง Starbucks Reserve อาคารพันต้นไม้ และตลาดเฉิงหวังเมี่ยว",
      en: "China's biggest city — Nanjing Road, the Starbucks Reserve Roastery, 1000 Trees and the City God Temple bazaar.",
    },
  },
  {
    id: "the-bund",
    name: { th: "หาดไว่ทาน (เดอะบันด์)", en: "The Bund", zh: "外滩" },
    coords: [121.4876, 31.2353],
    category: "heritage",
    wiki: "The Bund",
    blurb: {
      th: "ริมแม่น้ำหวงผู่ ตึกยุคอาณานิคมฝั่งหนึ่ง วิวหอไข่มุกและผู่ตงอีกฝั่ง",
      en: "The Huangpu riverfront — colonial buildings on one side, the Pearl Tower and Pudong skyline on the other.",
    },
  },
  {
    id: "zhujiajiao",
    name: { th: "เมืองโบราณจูเจียเจี่ยว", en: "Zhujiajiao Water Town", zh: "朱家角" },
    coords: [121.0439, 31.1025],
    category: "heritage",
    wiki: "Zhujiajiao",
    blurb: {
      th: "‘เวนิสตะวันออก’ เมืองน้ำโบราณของเซี่ยงไฮ้ ล่องเรือลอดสะพานหิน",
      en: "Shanghai's 'Venice of the East' — a canal town explored by boat under stone bridges.",
    },
  },
  // Hangzhou & Jiangnan
  {
    id: "hangzhou",
    name: { th: "หังโจว", en: "Hangzhou", zh: "杭州" },
    coords: [120.2052, 30.249],
    category: "city",
    wiki: "Hangzhou",
    blurb: {
      th: "‘สวรรค์บนดิน’ เมืองหลวงซ่งใต้ ถนนเหอฝางเจีย และย่านช้อปปิ้งทันสมัย",
      en: "'Heaven on earth' — the Southern Song capital, Hefang Street and modern shopping.",
    },
  },
  {
    id: "west-lake",
    name: { th: "ทะเลสาบซีหู", en: "West Lake", zh: "西湖" },
    coords: [120.1431, 30.246],
    category: "nature",
    wiki: "West Lake",
    blurb: {
      th: "มรดกโลก สะพานต้วนเฉียว เขากูซาน และถนนเป่ยซานลู่ช่วงใบไม้เปลี่ยนสี",
      en: "The UNESCO lake — Broken Bridge, Gushan Island and Beishan Road in autumn colour.",
    },
  },
  {
    id: "zhoushan",
    name: { th: "โจวซาน", en: "Zhoushan", zh: "舟山" },
    coords: [122.203, 29.9873],
    category: "city",
    wiki: "Zhoushan",
    blurb: {
      th: "เมืองหมู่เกาะริมทะเลจีนตะวันออก ท่าเรือสู่เกาะผู่โถวซาน",
      en: "An East China Sea island city and the ferry port for Putuoshan.",
    },
  },
  {
    id: "putuoshan",
    name: { th: "เกาะผู่โถวซาน", en: "Mount Putuo", zh: "普陀山" },
    coords: [122.3863, 30.0113],
    category: "temple",
    wiki: "Mount Putuo",
    blurb: {
      th: "หนึ่งในสี่พุทธคีรี ดินแดนเจ้าแม่กวนอิม วัดผู่จี้ เจ้าแม่กวนอิมหนานไห่ และวัดไผ่ม่วง",
      en: "One of China's four sacred Buddhist mountains — Guanyin's island, with Puji Temple and the Nanhai Guanyin.",
    },
  },
  {
    id: "xuedou-temple",
    name: { th: "วัดเสวี่ยโต้ว", en: "Xuedou Temple", zh: "雪窦寺" },
    coords: [121.2176, 29.6875],
    category: "temple",
    blurb: {
      th: "วัดโบราณในหุบเขาเสวี่ยโต้วซาน หนิงปอ ประดิษฐานพระศรีอาริย์องค์ใหญ่",
      en: "An ancient temple in the Xuedou hills of Ningbo, home to a giant Maitreya Buddha.",
    },
  },
  {
    id: "ningbo",
    name: { th: "หนิงปอ", en: "Ningbo", zh: "宁波" },
    coords: [121.5565, 29.8792],
    category: "city",
    wiki: "Ningbo",
    blurb: {
      th: "เมืองท่าเก่า หอกลองสมัยถัง ถนนหนานถัง และย่านเหล่าไว่ทานริมสามแม่น้ำ",
      en: "An old port — the Tang-era Drum Tower, Nantang Street and the Laowaitan riverside quarter.",
    },
  },
  {
    id: "hengdian",
    name: { th: "เหิงเตี้ยน เวิลด์สตูดิโอ", en: "Hengdian World Studios", zh: "横店影视城" },
    coords: [120.3104, 29.1454],
    category: "heritage",
    wiki: "Hengdian World Studios",
    blurb: {
      th: "โรงถ่ายภาพยนตร์ใหญ่ที่สุดในโลก ฉากพระราชวังและเมืองจำลอง ‘ฮอลลีวูดเมืองจีน’",
      en: "The world's largest film studio — palace and city sets of 'China's Hollywood'.",
    },
  },
  {
    id: "yiwu",
    name: { th: "อี้อู", en: "Yiwu", zh: "义乌" },
    coords: [120.0704, 29.3093],
    category: "city",
    wiki: "Yiwu",
    blurb: {
      th: "‘ซูเปอร์มาร์เก็ตของโลก’ ศูนย์ค้าส่งสินค้าเล็กที่ใหญ่ที่สุดในโลก",
      en: "'The world's supermarket' — the planet's biggest small-goods wholesale market.",
    },
  },
  {
    id: "shaoxing",
    name: { th: "เส้าซิง", en: "Shaoxing", zh: "绍兴" },
    coords: [120.5875, 30.0024],
    category: "heritage",
    wiki: "Shaoxing",
    blurb: {
      th: "เมืองน้ำเจียงหนาน สะพานป้าจื้อมรดกโลก และถนนคนเดินชางเฉียว",
      en: "A Jiangnan water city — the UNESCO-listed Bazi Bridge and Cangqiao Street.",
    },
  },
  {
    id: "anchang",
    name: { th: "เมืองโบราณอันชาง", en: "Anchang Ancient Town", zh: "安昌古镇" },
    coords: [120.487, 30.1402],
    category: "heritage",
    blurb: {
      th: "เมืองน้ำที่ยังมีชีวิตจริง ไส้กรอกตากแห้งและตลาดริมคลอง",
      en: "A still-lived-in water town of canal-side markets and air-dried sausages.",
    },
  },
  {
    id: "tunxi",
    name: { th: "ถนนโบราณถุนซี (เมืองหวงซาน)", en: "Tunxi Old Street (Huangshan city)", zh: "屯溪老街" },
    coords: [118.3009, 29.7106],
    category: "city",
    wiki: "Tunxi District",
    blurb: {
      th: "ถนนคนเดินสถาปัตยกรรมฮุยโจว และการแสดง ‘ฮุ่ยซิ่ว’",
      en: "A Huizhou-style old street and the 'Huixiu' cultural show.",
    },
  },
  {
    id: "huangshan",
    name: { th: "อุทยานเขาหวงซาน", en: "Huangshan (Yellow Mountain)", zh: "黄山" },
    coords: [118.1868, 30.0845],
    category: "nature",
    wiki: "Huangshan",
    blurb: {
      th: "มรดกโลก ทะเลเมฆ สนรูปทรงแปลก ยอดเขาซื่อซิ่น และกระเช้าไท่ผิง (ที่พักเมืองถังโข่ว)",
      en: "UNESCO's Yellow Mountain — seas of cloud, sculpted pines, Shixin Peak and the Taiping cable car (stay in Tangkou).",
    },
  },
  {
    id: "jiuhuashan",
    name: { th: "เขาจิ่วหัวซาน", en: "Mount Jiuhua", zh: "九华山" },
    coords: [117.8182, 30.4634],
    category: "temple",
    wiki: "Mount Jiuhua",
    blurb: {
      th: "หนึ่งในสี่พุทธคีรี ดินแดนพระกษิติครรภ์ วัดเทียนไถ วัดไป่ซุ่ยกง และวัดฮว่าเฉิง",
      en: "One of the four sacred Buddhist mountains, devoted to Ksitigarbha — Tiantai, Baisui Gong and Huacheng temples.",
    },
  },
  {
    id: "taiping-lake",
    name: { th: "ทะเลสาบไท่ผิง", en: "Taiping Lake", zh: "太平湖" },
    coords: [117.9996, 30.328],
    category: "nature",
    blurb: {
      th: "ทะเลสาบน้ำเขียวใสกลางขุนเขาอันฮุย ล่องเรือชมวิว",
      en: "A clear green lake among the Anhui hills, seen by boat.",
    },
  },
  {
    id: "hongcun",
    name: { th: "หมู่บ้านโบราณหงชุน", en: "Hongcun Village", zh: "宏村" },
    coords: [117.9847, 30.0048],
    category: "heritage",
    wiki: "Hongcun",
    blurb: {
      th: "หมู่บ้านมรดกโลกอายุ 900 ปี ‘หมู่บ้านในภาพวาด’ บ้านฮุยโจวสะท้อนบ่อน้ำ",
      en: "A 900-year-old UNESCO village — 'the village in a painting', its Huizhou houses mirrored in ponds.",
    },
  },
  {
    id: "qingshan-lake",
    name: { th: "ป่าในน้ำทะเลสาบชิงซาน", en: "Qingshan Lake Water Forest", zh: "青山湖水上森林" },
    coords: [119.7506, 30.2583],
    category: "nature",
    blurb: {
      th: "ป่าต้นไม้ที่ขึ้นกลางน้ำในหลินอัน ใบเปลี่ยนสีแดงส้มช่วงปลายปี",
      en: "A forest growing out of the water in Lin'an, turning red-orange late in the year.",
    },
  },
];

const stopMap = new Map(stops.map((s) => [s.id, s]));
export const getStop = (id: string) => stopMap.get(id);
