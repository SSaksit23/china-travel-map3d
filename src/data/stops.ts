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
];

const stopMap = new Map(stops.map((s) => [s.id, s]));
export const getStop = (id: string) => stopMap.get(id);
