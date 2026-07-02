import type { Program } from "../types";

/**
 * Chinese Travel Map China sales catalogue — programs across 9 regions
 * (West China: North/South Xinjiang, Gansu–Sichuan, Qinghai–Tibet;
 * Northeast China / Dongbei; Shandong / East coast; Shanxi; Inner Mongolia;
 * and Central China / Shaanxi–Henan).
 * Content adapted from the program cards (route, character, highlights,
 * season, altitude, who-for, selling script, cross-sell).
 */
export const programs: Program[] = [
  {
    id: "GO1URC-CZ004",
    regionId: "north",
    flights: [
      {
        airports: ["BKK", "CAN", "URC"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
        hops: [
          { from: "BKK", to: "CAN", flightNo: "CZ362", dep: "08:20", arr: "12:10" },
          { from: "CAN", to: "URC", flightNo: "CZ6892", dep: "15:15", arr: "20:50" },
        ],
      },
      {
        airports: ["URC", "CAN", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
        hops: [
          { from: "URC", to: "CAN", flightNo: "CZ6883", dep: "12:45", arr: "17:50" },
          { from: "CAN", to: "BKK", flightNo: "CZ361", dep: "20:20", arr: "22:30" },
        ],
      },
    ],
    title: {
      th: "ซินเจียงเหนือ อูลู่มู่ฉี–อี้หนิง ทุ่งหญ้านาลาถี & มนต์เสน่ห์ลาเวนเดอร์",
      en: "North Xinjiang: Urumqi–Yining, Nalati Grassland & Lavender",
    },
    oneLiner: {
      th: "ซินเจียงเหนือคลาสสิก — ทุ่งหญ้า ทะเลสาบ ลาเวนเดอร์ ครบในทริปเดียว สวยง่าย ขายง่าย",
      en: "Classic North Xinjiang — grasslands, lakes and lavender in one easy, easy-to-sell trip.",
    },
    days: 8,
    nights: 7,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านกว่างโจว", en: "via Guangzhou" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง", en: "Easy • no high altitude" },
    bestMonths: {
      th: "มิ.ย.–ก.ย. • ลาเวนเดอร์ ปลายมิ.ย.–ก.ค. • ทุ่งหญ้าเขียวสุด ก.ค.",
      en: "Jun–Sep • lavender late Jun–Jul • greenest grass in Jul",
    },
    months: [6, 7, 8, 9],
    highlights: [
      { th: "ทุ่งหญ้านาลาถี หนึ่งในทุ่งหญ้าที่สวยที่สุดของจีน", en: "Nalati Grassland, one of China's most beautiful" },
      { th: "ทุ่งหญ้าคาลาจุ้น ลานชมบุปผา แท่นล่าเหยี่ยว", en: "Kalajun Grassland, flower terraces and falcon viewpoint" },
      { th: "ทะเลสาบไซ่หลี่มู่ น้ำสีฟ้าคราม", en: "Sayram Lake, deep-blue alpine water" },
      { th: "ทุ่งลาเวนเดอร์เมืองอี้หนิง", en: "Lavender fields of Yining" },
    ],
    whoFor: {
      th: "ครอบครัว • คู่รัก/ฮันนีมูน • สายธรรมชาติ-ถ่ายรูป • ผู้สูงอายุที่เดินไหว • First-timer",
      en: "Families • couples/honeymoon • nature & photography • active seniors • first-timers",
    },
    prep: [
      { text: { th: "เสื้อกันหนาว (กลางวัน-คืนต่าง 10–20°C)", en: "Warm layers (day-night gap 10–20°C)" } },
      { text: { th: "นั่งรถนานต่อวัน บรีฟลูกค้าล่วงหน้า", en: "Long daily drives — brief clients in advance" } },
      { text: { th: "อาหารฮาลาล/อุยกูร์ เนื้อแกะเด่น (ขายเป็นเสน่ห์ได้)", en: "Halal/Uyghur food, lamb-forward (sell it as charm)" } },
      { text: { th: "ครีม/แว่นกันแดด แดดแรง", en: "Sunscreen/sunglasses, strong sun" } },
    ],
    sellingScript: {
      th: "“อยากเห็นซินเจียงครั้งแรกแบบครบรส ทุ่งหญ้า ทะเลสาบ ลาเวนเดอร์ ไม่ต้องขึ้นที่สูง เที่ยวสบาย — เส้นทางนี้คือคำตอบ”",
      en: "\"Want a first taste of Xinjiang with everything — grassland, lakes, lavender, no altitude, easy pace? This is the one.\"",
    },
    crossSell: {
      th: "ตัวมาตรฐานของซินเจียงเหนือ — เสนอคู่กับ CA001 (เวอร์ชันเจาะลึก 9 วัน)",
      en: "The standard North Xinjiang trip — pair with CA001 (the deeper 9-day version).",
    },
    customerSegments: ["family", "honeymoon", "photography", "firsttimer"],
    routeSegments: [
      { from: "urumqi", to: "tianchi", mode: "drive" },
      { from: "tianchi", to: "sayram", mode: "drive" },
      { from: "sayram", to: "yining", mode: "drive" },
      { from: "yining", to: "kalajun", mode: "drive" },
      { from: "kalajun", to: "nalati", mode: "drive" },
      { from: "nalati", to: "kuytun", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – กว่างโจว – อูลู่มู่ฉี", en: "Bangkok – Guangzhou – Urumqi" },
        stops: ["urumqi"],
        along: [
          { th: "บินสุวรรณภูมิ–กว่างโจว (CZ362) ต่อเครื่องสู่อูลู่มู่ฉี (CZ6892)", en: "Fly Suvarnabhumi–Guangzhou (CZ362), connect to Urumqi (CZ6892)" },
          { th: "ถึงอูลู่มู่ฉี เมืองเอกซินเจียง ประตูสู่เส้นทางสายไหม เข้าที่พัก", en: "Arrive Urumqi, Xinjiang's capital and Silk Road gateway, and check in", stopId: "urumqi" },
        ],
        hotel: { name: "URUMQI HILTON GARDEN INN", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "เขาเทียนซาน – ทะเลสาบเทียนฉือ – ขุยถุน", en: "Tianshan – Tianchi Lake – Kuytun" },
        stops: ["tianchi"],
        along: [
          { th: "ทะเลสาบเทียนฉือ ‘ทะเลสาบสวรรค์’ น้ำมรกตใต้ยอดเขาโป๋เก๋อต๋า", en: "Tianchi 'Heavenly Lake', emerald water below snow-capped Bogda Peak", stopId: "tianchi" },
        ],
        drive: { th: "เทียนฉือ → ขุยถุน", en: "Tianchi → Kuytun" },
        hotel: { name: "KUYTUN WANDA JINHUA HOTEL", star: 4, cityId: "kuytun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "ทะเลสาบไซ่หลี่มู่ – ทุ่งหญ้าไห่ซี – อี้หนิง", en: "Sayram Lake – Haixi grassland – Yining" },
        stops: ["sayram", "yining"],
        along: [
          { th: "ทะเลสาบไซ่หลี่มู่ น้ำสีฟ้าคราม + จุดประกาศศึกเจงกิสข่าน", en: "Sayram Lake, deep-blue water & the Genghis Khan proclamation site", stopId: "sayram" },
          { th: "ผ่านชมทุ่งหญ้าไห่ซี", en: "Pass the Haixi grassland" },
          { th: "สะพานกั่วจื่อโกว สะพานขึงข้ามหุบเขากลางเทียนซาน", en: "Guozigou Bridge, a cable-stayed span across the Tianshan valley", stopId: "guozigou-bridge" },
          { th: "เมืองอี้หนิง เดินถนนหกดาวสีสันสดใส", en: "Yining — the colourful Six Star Street", stopId: "yining" },
        ],
        drive: { th: "ไซ่หลี่มู่ → อี้หนิง", en: "Sayram → Yining" },
        hotel: { name: "YINING ADEN CLOUD HOTEL", star: 4, cityId: "yining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ทุ่งหญ้าคาลาจุ้น – เมืองเทอเค่อซือ (นคร 8 แฉก)", en: "Kalajun Grassland – Tekes (8-trigram city)" },
        stops: ["kalajun"],
        along: [
          { th: "ทุ่งหญ้าคาลาจุ้น (รวมรถอุทยาน) ลานชมบุปผา + แท่นล่าเหยี่ยว", en: "Kalajun Grassland (park bus) — flower terrace + falcon viewpoint", stopId: "kalajun" },
          { th: "เมืองเทอเค่อซือ ผ่านชมวิวผังเมืองรูปแปดทิศ 8 แฉก", en: "Tekes, the eight-trigram (bagua) city with its radial street plan", stopId: "tekes" },
        ],
        drive: { th: "อี้หนิง → คาลาจุ้น", en: "Yining → Kalajun" },
        hotel: { name: "TURKS FENGHUANG INTER HOTEL", star: 4, cityId: "kalajun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "อุทยานทะเลดอกไม้เทียนซาน – ทุ่งหญ้านาลาถี", en: "Tianshan flower-sea park – Nalati Grassland" },
        stops: ["nalati"],
        along: [
          { th: "อุทยานทะเลดอกไม้เทียนซาน ทุ่งดอกไม้สุดลูกหูลูกตา", en: "The Tianshan flower-sea park, endless wildflower meadows", stopId: "tianshan-flower-sea" },
          { th: "ทุ่งหญ้านาลาถี (รวมรถอุทยาน) หนึ่งในทุ่งหญ้าที่สวยที่สุดของจีน", en: "Nalati Grassland (park bus), one of China's most beautiful", stopId: "nalati" },
        ],
        drive: { th: "คาลาจุ้น → นาลาถี", en: "Kalajun → Nalati" },
        hotel: { name: "NALATI YIMEI GRAND HOTEL", star: 4, cityId: "nalati", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ถนนตู๋คู่ – ขุยถุน – แกรนด์แคนยอนตูซ๋านจื่อ", en: "Duku Highway – Kuytun – Dushanzi Grand Canyon" },
        stops: ["dushanzi-canyon"],
        along: [
          { th: "ล่องถนนตู๋คู่ (นั่งรถเล็ก 7 ที่นั่ง) เส้นทางภูเขาที่สวยที่สุดสายหนึ่ง", en: "The Duku Highway (7-seat vans), one of the most scenic mountain roads" },
          { th: "แกรนด์แคนยอนตูซ๋านจื่อ หุบเหวหินหลากสีริมถนน", en: "Dushanzi Grand Canyon, multicoloured rock chasms beside the road", stopId: "dushanzi-canyon" },
        ],
        drive: { th: "นาลาถี → ขุยถุน → ตูซ๋านจื่อ", en: "Nalati → Kuytun → Dushanzi" },
        hotel: { name: "KUYTUN WANDA JINHUA HOTEL", star: 4, cityId: "kuytun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ขุยถุน – อูลู่มู่ฉี – ตลาดแกรนด์บาซาร์", en: "Kuytun – Urumqi – Grand Bazaar" },
        stops: ["urumqi"],
        along: [
          { th: "เดินทางกลับอูลู่มู่ฉี", en: "Return to Urumqi", stopId: "urumqi" },
          { th: "ตลาดแกรนด์บาซาร์ (ต้าปาจา) ช้อปของฝากและสัมผัสวัฒนธรรมอุยกูร์", en: "The Grand Bazaar (Da Bazaar) — souvenirs and Uyghur culture", stopId: "urumqi-bazaar" },
        ],
        drive: { th: "ขุยถุน → อูลู่มู่ฉี", en: "Kuytun → Urumqi" },
        hotel: { name: "URUMQI HILTON GARDEN INN", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "อูลู่มู่ฉี – กว่างโจว – กรุงเทพฯ", en: "Urumqi – Guangzhou – Bangkok" },
        stops: ["urumqi"],
        along: [
          { th: "บินอูลู่มู่ฉี–กว่างโจว (CZ6883) ต่อเครื่องกลับสุวรรณภูมิ (CZ361)", en: "Fly Urumqi–Guangzhou (CZ6883), connect home to Suvarnabhumi (CZ361)" },
        ],
      },
    ],
  },
  {
    id: "2UURC-CA001",
    regionId: "north",
    flights: [
      {
        airports: ["BKK", "CTU", "URC"],
        airline: "Air China (CA)",
        direction: "outbound",
        duration: { th: "≈ 8.5 ชม. รวมต่อเครื่องเฉิงตู (ค้างคืนเฉิงตู)", en: "≈ 8.5h incl. Chengdu connection (overnight in Chengdu)" },
        hops: [
          { from: "BKK", to: "CTU", flightNo: "CA472", dep: "18:20", arr: "22:35" },
          { from: "CTU", to: "URC", flightNo: "CA2505", dep: "12:55", arr: "17:10" },
        ],
      },
      {
        airports: ["URC", "CTU", "BKK"],
        airline: "Air China (CA)",
        direction: "return",
        duration: { th: "≈ 8.5 ชม. รวมต่อเครื่องเฉิงตู", en: "≈ 8.5h incl. Chengdu connection" },
        hops: [
          { from: "URC", to: "CTU", flightNo: "CA2506", dep: "06:50", arr: "11:00" },
          { from: "CTU", to: "BKK", flightNo: "CA471", dep: "14:50", arr: "17:05" },
        ],
      },
    ],
    title: {
      th: "ซินเจียงตะวันตก “ลูกคุณหนู” อูลูมู่ฉี–อี้ลี่ (เวอร์ชันเจาะลึก)",
      en: "West Xinjiang Deep-Dive: Urumqi–Ili (premium)",
    },
    oneLiner: {
      th: "เวอร์ชันยาวขึ้น เจาะลึกเขตอี้ลี่ + พักกลางทุ่งหญ้า — pace สบาย สำหรับคนมีเวลาและงบมากขึ้น",
      en: "A longer, deeper Ili itinerary with a grassland overnight — relaxed pace for those with more time and budget.",
    },
    days: 9,
    nights: 8,
    airline: "Air China (CA)",
    via: { th: "ผ่านเฉิงตู", en: "via Chengdu" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง", en: "Easy • no high altitude" },
    bestMonths: { th: "ปลายมิ.ย.–ก.ย. (ยาวกว่า CZ004 หนึ่งวัน)", en: "Late Jun–Sep (one day longer than CZ004)" },
    months: [6, 7, 8, 9],
    highlights: [
      { th: "เจาะลึกอี้ลี่ ได้ทั้งคาลาจุ้น + นาลาถี สองทุ่งหญ้าใหญ่", en: "Deep Ili — both Kalajun and Nalati grasslands" },
      { th: "ค้างคืนในเขตทุ่งหญ้า (โฮมสเตย์/แคมป์)", en: "Overnight in the grassland (homestay/camp)" },
      { th: "แกรนด์แคนยอนตูซ๋านจื่อ ภูมิทัศน์หินหลากสี", en: "Dushanzi Grand Canyon, multicolour rock landscape" },
      { th: "ทุ่งลาเวนเดอร์ + ถนนหกดาวเมืองอี้หนิง", en: "Lavender fields + Yining's Six Star Street" },
    ],
    whoFor: {
      th: "คนอยากเที่ยวไม่รีบ • คู่รัก • สายธรรมชาติตัวจริง • กลุ่มชอบ pace สบาย (พรีเมียม)",
      en: "Slow travellers • couples • true nature lovers • relaxed-pace premium groups",
    },
    prep: [
      { text: { th: "เข้าผ่านเฉิงตู มีพัก 1 คืน (ต่างจากเส้น CZ)", en: "Enters via Chengdu with a 1-night stop (unlike the CZ route)" } },
      { text: { th: "ที่พักเขตทุ่งหญ้าเรียบง่าย ตั้งความคาดหวังให้ถูก", en: "Grassland lodging is simple — set expectations" } },
      { text: { th: "เสื้อกันหนาว + กันแดด", en: "Warm layers + sun protection" } },
      { text: { th: "นั่งรถนาน เส้นทางไกล", en: "Long drives, long distances" } },
    ],
    sellingScript: {
      th: "“ถ้า 8 วันยังไม่จุใจ 9 วันนี้พาเจาะลึกอี้ลี่ ได้นอนกลางทุ่งหญ้า เก็บคาลาจุ้นและนาลาถีเต็มอิ่ม”",
      en: "\"If 8 days isn't enough, these 9 days go deep into Ili — sleep in the grassland and savour both Kalajun and Nalati.\"",
    },
    crossSell: {
      th: "ตัวพรีเมียมของซินเจียงเหนือ — คู่กับ CZ004 (ตัวมาตรฐาน)",
      en: "The premium North Xinjiang option — pair with CZ004 (the standard).",
    },
    customerSegments: ["honeymoon", "photography", "repeater"],
    routeSegments: [
      { from: "chengdu", to: "urumqi", mode: "flight" },
      { from: "urumqi", to: "dushanzi-canyon", mode: "drive" },
      { from: "dushanzi-canyon", to: "sayram", mode: "drive" },
      { from: "sayram", to: "yining", mode: "drive" },
      { from: "yining", to: "kalajun", mode: "drive" },
      { from: "kalajun", to: "nalati", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – เฉิงตู", en: "Bangkok – Chengdu" },
        stops: ["chengdu"],
        along: [
          { th: "บินสุวรรณภูมิ–เฉิงตูเทียนฝู่ (CA472) ค้างคืนเฉิงตู", en: "Fly Suvarnabhumi–Chengdu Tianfu (CA472), overnight in Chengdu" },
        ],
        hotel: { name: "CHENGDU TIANFU AIRPORT HOTEL", star: 4, cityId: "chengdu", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "เฉิงตู – อูลู่มู่ฉี", en: "Chengdu – Urumqi" },
        stops: ["urumqi"],
        along: [
          { th: "บินเฉิงตู–อูลู่มู่ฉี (CA2505) ถึงช่วงบ่าย เข้าที่พัก", en: "Fly Chengdu–Urumqi (CA2505), arrive afternoon and check in" },
        ],
        hotel: { name: "MERCURE URUMQI HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "นิคมเกษตรปิงถวน – แกรนด์แคนยอนตูซ๋านจื่อ – ขุยถุน", en: "Bingtuan farm – Dushanzi Grand Canyon – Kuytun" },
        stops: ["dushanzi-canyon"],
        along: [
          { th: "นิคมเกษตรปิงถวน (Xinjiang Production & Construction Corps)", en: "A Bingtuan (Production & Construction Corps) farm settlement" },
          { th: "แกรนด์แคนยอนตูซ๋านจื่อ หุบเหวหินหลากสี", en: "Dushanzi Grand Canyon, multicoloured rock chasms", stopId: "dushanzi-canyon" },
        ],
        drive: { th: "อูลู่มู่ฉี → ตูซ๋านจื่อ → ขุยถุน", en: "Urumqi → Dushanzi → Kuytun" },
        hotel: { name: "MEIHAO YIZHI HOTEL KUYTUN", star: 4, cityId: "kuytun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ทะเลสาบไซ่หลี่มู่ – ทุ่งลาเวนเดอร์ – อี้หนิง", en: "Sayram Lake – lavender fields – Yining" },
        stops: ["sayram", "yining"],
        along: [
          { th: "ทะเลสาบไซ่หลี่มู่ น้ำสีฟ้าคราม", en: "Sayram Lake, deep-blue alpine water", stopId: "sayram" },
          { th: "ผ่านชมทุ่งลาเวนเดอร์เมืองฮั่วเฉิง", en: "Pass the Huocheng lavender fields" },
          { th: "สะพานกั่วจื่อโกว สะพานขึงข้ามหุบเขากลางเทียนซาน", en: "Guozigou Bridge, a cable-stayed span across the Tianshan valley", stopId: "guozigou-bridge" },
          { th: "เมืองอี้หนิง เดินถนนหกดาวสีสันสดใส", en: "Yining — the colourful Six Star Street", stopId: "yining" },
        ],
        drive: { th: "ขุยถุน → ไซ่หลี่มู่ → อี้หนิง", en: "Kuytun → Sayram → Yining" },
        hotel: { name: "HOME2 SUITES BY HILTON XINJIANG YINING", star: 4, cityId: "yining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ทุ่งหญ้าคาลาจุ้น – พักกลางทุ่งหญ้า", en: "Kalajun Grassland – grassland overnight" },
        stops: ["kalajun"],
        along: [
          { th: "ทุ่งหญ้าคาลาจุ้น (รวมรถอุทยาน) ลานชมบุปผา + แท่นล่าเหยี่ยว", en: "Kalajun Grassland (park bus) — flower terrace + falcon viewpoint", stopId: "kalajun" },
          { th: "พักโฮมสเตย์/แคมป์กลางทุ่งหญ้า สัมผัสวิถีคาซัค", en: "Stay in a grassland homestay/camp, Kazakh herding life" },
        ],
        drive: { th: "อี้หนิง → คาลาจุ้น", en: "Yining → Kalajun" },
        hotel: { name: "KALAJUN HOMESTAY CAMPING", star: 3, cityId: "kalajun", note: { th: "ที่พักในเขตทุ่งหญ้า (ระดับ 3 ดาว)", en: "grassland-zone lodging (3-star level)" } },
      },
      {
        day: 6,
        title: { th: "ซินหยวน – ทุ่งหญ้านาลาถี – เมืองนาลาถี", en: "Xinyuan – Nalati Grassland – Nalati town" },
        stops: ["nalati"],
        along: [
          { th: "ทุ่งหญ้านาลาถี (รวมรถอุทยาน) และทุ่งหญ้าลอยฟ้า", en: "Nalati Grassland (park bus) and the 'floating' sky meadow", stopId: "nalati" },
        ],
        drive: { th: "คาลาจุ้น → ซินหยวน → นาลาถี", en: "Kalajun → Xinyuan → Nalati" },
        hotel: { name: "XINJIANG CULTURAL TOURISM NALATI HOTEL", star: 4, cityId: "nalati", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ล่องถนนตู๋คู่ – สือเหอจื่อ", en: "Duku Highway – Shihezi" },
        stops: ["kuytun"],
        along: [
          { th: "ล่องถนนตู๋คู่ (นั่งรถเล็ก 7 ที่นั่ง) เส้นทางภูเขาสุดอลังการ", en: "The Duku Highway (7-seat vans), a spectacular mountain road" },
          { th: "เดินทางสู่เมืองสือเหอจื่อ เมืองปิงถวนผังเป็นระเบียบ", en: "Continue to Shihezi, the tidy Bingtuan-built city", stopId: "shihezi" },
        ],
        drive: { th: "นาลาถี → สือเหอจื่อ", en: "Nalati → Shihezi" },
        hotel: { name: "SHIHEZI HAOZHOU HOTEL", star: 4, cityId: "kuytun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "ขุยถุน – อูลู่มู่ฉี – ตลาดแกรนด์บาซาร์", en: "Kuytun – Urumqi – Grand Bazaar" },
        stops: ["urumqi"],
        along: [
          { th: "เดินทางกลับอูลู่มู่ฉี", en: "Return to Urumqi", stopId: "urumqi" },
          { th: "เดินตลาดแกรนด์บาซาร์ (ต้าปาจา) ช้อปของฝากและวัฒนธรรมอุยกูร์", en: "Stroll the Grand Bazaar (Da Bazaar) for souvenirs and Uyghur culture", stopId: "urumqi-bazaar" },
        ],
        drive: { th: "สือเหอจื่อ → อูลู่มู่ฉี", en: "Shihezi → Urumqi" },
        hotel: { name: "MERCURE URUMQI HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 9,
        title: { th: "อูลู่มู่ฉี – เฉิงตู – กรุงเทพฯ", en: "Urumqi – Chengdu – Bangkok" },
        stops: ["urumqi"],
        along: [
          { th: "บินอูลู่มู่ฉี–เฉิงตู (CA2506) ต่อเครื่องกลับสุวรรณภูมิ (CA471)", en: "Fly Urumqi–Chengdu (CA2506), connect home to Suvarnabhumi (CA471)" },
        ],
      },
    ],
  },
  {
    id: "2UURC-MU001",
    regionId: "north",
    flights: [
      {
        airports: ["BKK", "NKG", "URC"],
        airline: "China Eastern (MU)",
        direction: "outbound",
        duration: { th: "≈ 13.5 ชม. รวมต่อเครื่องนานกิง (ออกดึก/เช้ามืด)", en: "≈ 13.5h incl. Nanjing connection (red-eye departure)" },
        hops: [
          { from: "BKK", to: "NKG", flightNo: "MU2804", dep: "02:10", arr: "07:10" },
          { from: "NKG", to: "URC", flightNo: "MU2959", dep: "10:45", arr: "15:55" },
        ],
      },
      {
        airports: ["URC", "PVG", "BKK"],
        airline: "Shanghai Airlines (FM)",
        direction: "return",
        duration: { th: "≈ 11.5 ชม. รวมต่อเครื่องเซี่ยงไฮ้", en: "≈ 11.5h incl. Shanghai connection" },
        hops: [
          { from: "URC", to: "PVG", flightNo: "FM9222", dep: "09:05", arr: "13:50" },
          { from: "PVG", to: "BKK", flightNo: "FM839", dep: "17:20", arr: "20:55" },
        ],
      },
    ],
    title: {
      th: "หลานท่านทูต แดนหิมะซินเจียงเหนือ อูลูมู่ฉี–คานาสือ–เหอมู่",
      en: "North Xinjiang Snowland: Urumqi–Kanas–Hemu",
    },
    oneLiner: {
      th: "เจาะลึกซินเจียงเหนือ อุทยานคานาสือ หมู่บ้านเหอมู่ หาดห้าสี และนครปีศาจอูเหอ — บินเข้าอูลูมู่ฉีผ่านนานกิง",
      en: "A deep North Xinjiang loop — Kanas, Hemu village, Five Color Beach and the Wuerhe Ghost City, flying into Urumqi via Nanjing.",
    },
    days: 8,
    nights: 6,
    airline: "China Eastern (MU)",
    via: { th: "ขาไปผ่านนานกิง / ขากลับผ่านเซี่ยงไฮ้", en: "out via Nanjing / back via Shanghai" },
    difficulty: "moderate",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง • แต่นั่งรถนานและเส้นทางไกล", en: "Easy on altitude • no high passes • but long drives and big distances" },
    bestMonths: {
      th: "ปลายมิ.ย.–ต.ค. • คานาสือ–เหอมู่ใบไม้เปลี่ยนสีช่วงก.ย.–ต.ค.",
      en: "Late Jun–Oct • Kanas–Hemu autumn foliage in Sep–Oct",
    },
    months: [6, 7, 8, 9, 10],
    highlights: [
      { th: "อุทยานคานาสือ ทะเลสาบสีเทอร์ควอยซ์ + ศาลาชมปลา 1,068 ขั้น", en: "Kanas park — the turquoise lake + the Fish-Watching Pavilion (1,068 steps)" },
      { th: "สามอ่าวคานาสือ: อ่าวเทพเทวดา–อ่าวเสี้ยวจันทรา–อ่าวซ่อนมังกร", en: "Kanas's three bays: Divine Lake, Moon Bay and Sleeping Dragon Bay" },
      { th: "หมู่บ้านเหอมู่ บ้านไม้ซุงชาวตูวา พักค้างคืนในหมู่บ้าน", en: "Hemu village — Tuvan log cabins, with an overnight stay in the village" },
      { th: "หาดห้าสี ภูมิทัศน์หินหลากสี + นครปีศาจอูเหอ (รวมรถไฟชมวิว)", en: "Five Color Beach badlands + the Wuerhe Ghost City (sightseeing train included)" },
    ],
    whoFor: {
      th: "สายธรรมชาติ/ถ่ายภาพ • นักเดินทางเก็บลิสต์คานาสือ • คนรับการนั่งรถนานได้",
      en: "Nature & photography lovers • Kanas bucket-listers • travellers comfortable with long drives",
    },
    prep: [
      { text: { th: "ขาไปเป็นไฟลท์ดึก/เช้ามืด ต่อเครื่องที่นานกิง", en: "The outbound is a red-eye with a connection in Nanjing" } },
      { text: { th: "วันคานาสือ–เหอมู่ ต้องเปลี่ยนเป็นรถตู้เล็ก 4–7 ที่นั่ง เตรียมกระเป๋าใบเล็ก 1 คืน", en: "On the Kanas–Hemu day you switch to 4–7 seat vans — pack a small 1-night bag" }, warn: true },
      { text: { th: "ที่พักในหมู่บ้านเหอมู่เป็นกระท่อมไม้เรียบง่าย ไม่มีพนักงานยกกระเป๋า สิ่งอำนวยความสะดวกจำกัด", en: "Hemu lodging is a simple log cabin — no porters and limited amenities" }, warn: true },
      { text: { th: "เสื้อกันหนาว + กันแดด แม้หน้าร้อนกลางคืนก็เย็น", en: "Warm layers + sun protection — nights are cold even in summer" } },
      { text: { th: "ไม่รับจอยแลนด์ เนื่องจากมีไฟลท์บินภายใน", en: "No land-only joining — the package includes a domestic flight" } },
    ],
    sellingScript: {
      th: "“อยากเห็นคานาสือสีเทอร์ควอยซ์กับหมู่บ้านเหอมู่ในสายหมอกไหม? 8 วันนี้พาเก็บสามอ่าวคานาสือ นอนกลางหมู่บ้านตูวา แล้วปิดท้ายด้วยนครปีศาจอูเหอ”",
      en: "\"Want turquoise Kanas and misty Hemu village? These 8 days capture all three Kanas bays, an overnight in a Tuvan village, and finish at the Wuerhe Ghost City.\"",
    },
    crossSell: {
      th: "เส้นซินเจียงเหนือสายคานาสือ — คู่กับ CZ004/CA001 (สายอี้ลี่) สำหรับคนอยากครบทั้งภูมิภาค",
      en: "The Kanas-focused North Xinjiang route — pair with CZ004/CA001 (the Ili routes) to cover the whole region.",
    },
    customerSegments: ["photography", "bucketlist", "repeater"],
    routeSegments: [
      { from: "urumqi", to: "burqin", mode: "drive" },
      { from: "burqin", to: "kanas", mode: "drive" },
      { from: "kanas", to: "hemu", mode: "drive" },
      { from: "hemu", to: "burqin", mode: "drive" },
      { from: "burqin", to: "wuerhe", mode: "drive" },
      { from: "wuerhe", to: "shihezi", mode: "drive" },
      { from: "shihezi", to: "urumqi", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (สุวรรณภูมิ)", en: "Bangkok (Suvarnabhumi)" },
        along: [
          { th: "22.30 น. พร้อมกันที่สนามบินสุวรรณภูมิ เคาน์เตอร์ไชน่าอีสเทิร์น (MU)", en: "22:30 gather at Suvarnabhumi, China Eastern (MU) check-in counter" },
        ],
      },
      {
        day: 2,
        title: { th: "กรุงเทพฯ – นานกิง – อูลู่มู่ฉี", en: "Bangkok – Nanjing – Urumqi" },
        stops: ["urumqi"],
        along: [
          { th: "บินสุวรรณภูมิ–นานกิง (MU2804) ต่อเครื่องนานกิง–อูลู่มู่ฉี (MU2959)", en: "Fly Suvarnabhumi–Nanjing (MU2804), connect Nanjing–Urumqi (MU2959)" },
          { th: "ถึงอูลู่มู่ฉี ประตูสู่เส้นทางสายไหม รับประทานอาหารค่ำ เข้าที่พัก", en: "Arrive Urumqi, the Silk Road gateway — dinner and check in", stopId: "urumqi" },
        ],
        hotel: { name: "URUMQI TINGRAN YUNJU HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "อูลู่มู่ฉี – ถนนสายทะเลทราย S21 – เบอร์จิ้น – หาดห้าสี", en: "Urumqi – S21 desert road – Burqin – Five Color Beach" },
        stops: ["burqin", "wucaitan"],
        along: [
          { th: "ผ่านชมทะเลทรายกูร์บันทุงกูต ‘โอเอซิสกลางทะเลทราย’ บนถนนสาย S21", en: "Pass the Gurbantünggüt Desert, a 'desert oasis' along the S21 road" },
          { th: "เบอร์จิ้น ‘เมืองเทพนิยาย’ ริมแม่น้ำเออร์ทีช และหาดห้าสี (อู่ไฉ่ทาน)", en: "Burqin, the 'fairytale town' on the Irtysh, and Five Color Beach (Wucaitan)", stopId: "wucaitan" },
        ],
        drive: { th: "อูลู่มู่ฉี → เบอร์จิ้น (524 ก.ม. ~7 ชม.)", en: "Urumqi → Burqin (524 km, ~7h)" },
        hotel: { name: "LANTING HOLIDAY INN BURQIN HOTEL", star: 4, cityId: "burqin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "เบอร์จิ้น – อุทยานคานาสือ – สามอ่าว – หมู่บ้านเหอมู่", en: "Burqin – Kanas park – the three bays – Hemu village" },
        stops: ["kanas", "hemu"],
        along: [
          { th: "เปลี่ยนนั่งรถตู้เล็ก 7 ที่นั่ง สู่อุทยานคานาสือ ‘จานสีของพระเจ้า’", en: "Switch to 7-seat vans to Kanas park, 'the palette of God'", stopId: "kanas" },
          { th: "ศาลาชมปลาบนยอดเขาฮาราไคต์ (เดิน 1,068 ขั้น) ชมทะเลสาบคานาสแบบพาโนรามา", en: "The Fish-Watching Pavilion atop Haraket (1,068 steps), a panorama of Kanas Lake", stopId: "kanas" },
          { th: "อ่าวเทพเทวดา – อ่าวเสี้ยวจันทรา – อ่าวซ่อนมังกร และบ้านชาวเผ่าตูวา", en: "Divine Lake Bay – Moon Bay – Sleeping Dragon Bay, and a Tuvan home visit", stopId: "kanas" },
        ],
        drive: { th: "เบอร์จิ้น → คานาสือ (121 ก.ม. ~2 ชม.) → เหอมู่ (69 ก.ม. ~1 ชม.)", en: "Burqin → Kanas (121 km, ~2h) → Hemu (69 km, ~1h)" },
        hotel: { name: "HEMU FOLK GUEST HOUSE", star: 3, cityId: "hemu", note: { th: "กระท่อมไม้ภายในหมู่บ้านเหอมู่ (ระดับ 3 ดาว)", en: "log cabin inside Hemu village (3-star level)" } },
      },
      {
        day: 5,
        title: { th: "หมู่บ้านเหอมู่ – จุดชมวิวฮาเติน – ธารน้ำห้าสี – เบอร์จิ้น", en: "Hemu village – Hatten viewpoint – Five Color River – Burqin" },
        stops: ["hemu", "burqin"],
        along: [
          { th: "จุดชมวิวฮาเติน ชมหมู่บ้านเหอมู่ในสายหมอกยามเช้าแบบพาโนรามา", en: "The Hatten viewpoint — a misty-morning panorama of Hemu village", stopId: "hemu" },
          { th: "ธารน้ำห้าสี เนินดินริมแม่น้ำเออร์ทีชหลากสีแบบ ‘ย่าตาน’", en: "The Five Color River, multicoloured 'yardang' banks along the Irtysh", stopId: "burqin" },
        ],
        drive: { th: "เหอมู่ → เบอร์จิ้น (121 ก.ม. ~2 ชม.)", en: "Hemu → Burqin (121 km, ~2h)" },
        hotel: { name: "LANTING HOLIDAY INN BURQIN HOTEL", star: 4, cityId: "burqin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "เบอร์จิ้น – นครปีศาจอูเหอ – สือเหอจื่อ", en: "Burqin – Wuerhe Ghost City – Shihezi" },
        stops: ["wuerhe", "shihezi"],
        along: [
          { th: "นครปีศาจอูเหอ ‘เมืองแห่งสายลม’ กลางทะเลทรายโกบี (รวมรถไฟชมวิว)", en: "The Wuerhe Ghost City, the 'city of winds' in the Gobi (sightseeing train included)", stopId: "wuerhe" },
          { th: "ผ่านชมทุ่งน้ำมันร้อยลี้ ทะเลปั๊มน้ำมัน ‘โค่วโถวจี’ แห่งเมืองคาราไม", en: "Pass the 'hundred-li oilfield' — a sea of nodding pumpjacks near Karamay" },
        ],
        drive: { th: "เบอร์จิ้น → อูเหอ (229 ก.ม. ~3 ชม.) → สือเหอจื่อ (307 ก.ม. ~4 ชม.)", en: "Burqin → Wuerhe (229 km, ~3h) → Shihezi (307 km, ~4h)" },
        hotel: { name: "MADISON HOTEL SHIHEZI TIANFU", star: 4, cityId: "shihezi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "สือเหอจื่อ – อูลู่มู่ฉี – สวนนิเวศโบราณ – ตลาดแกรนด์บาซาร์", en: "Shihezi – Urumqi – ancient ecology park – Grand Bazaar" },
        stops: ["urumqi"],
        along: [
          { th: "สวนนิเวศโบราณซินเจียง ศูนย์เพาะพันธุ์ม้าเซ็กเทา และไม้ฟอสซิลล้านปี", en: "The Xinjiang ancient ecology park — the Akhal-Teke horse centre and million-year fossil wood" },
          { th: "อิสระช็อปปิ้งตลาดแกรนด์บาซาร์ (ต้าปาจา) บาซาร์ที่ใหญ่ที่สุดในโลก", en: "Free time at the Grand Bazaar (Da Bazaar), the world's largest bazaar", stopId: "urumqi-bazaar" },
        ],
        drive: { th: "สือเหอจื่อ → อูลู่มู่ฉี (292 ก.ม. ~4.5 ชม.)", en: "Shihezi → Urumqi (292 km, ~4.5h)" },
        hotel: { name: "URUMQI TINGRAN YUNJU HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "อูลู่มู่ฉี – เซี่ยงไฮ้ – กรุงเทพฯ", en: "Urumqi – Shanghai – Bangkok" },
        stops: ["urumqi"],
        along: [
          { th: "รับอาหารเช้าแบบ BOX SET บินอูลู่มู่ฉี–เซี่ยงไฮ้ผู่ตง (FM9222)", en: "Box-set breakfast, then fly Urumqi–Shanghai Pudong (FM9222)" },
          { th: "ต่อเครื่องเซี่ยงไฮ้–สุวรรณภูมิ (FM839) ถึงกรุงเทพฯ โดยสวัสดิภาพ", en: "Connect Shanghai–Suvarnabhumi (FM839), arriving safely in Bangkok" },
        ],
      },
    ],
  },
  {
    id: "GO1URC-CZ006",
    regionId: "north",
    flights: [
      {
        airports: ["BKK", "CAN", "URC"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
        hops: [
          { from: "BKK", to: "CAN", flightNo: "CZ362", dep: "08:20", arr: "12:10" },
          { from: "CAN", to: "URC", flightNo: "CZ6892", dep: "15:15", arr: "20:50" },
        ],
      },
      {
        airports: ["URC", "CAN", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
        hops: [
          { from: "URC", to: "CAN", flightNo: "CZ6883", dep: "12:45", arr: "17:50" },
          { from: "CAN", to: "BKK", flightNo: "CZ361", dep: "20:20", arr: "22:30" },
        ],
      },
    ],
    title: {
      th: "ซินเจียงเหนือ อูลูมู่ฉี คานาสือ เทพนิยายสุดขอบฟ้า (ใบไม้เปลี่ยนสี)",
      en: "North Xinjiang: Urumqi–Kanas Fairyland (autumn colours)",
    },
    oneLiner: {
      th: "เส้นทางเหนือสุด คานาสือ–เหอมู่ จุดขายคือใบไม้เปลี่ยนสี — สวรรค์ของช่างภาพและ repeater",
      en: "Far-north Kanas–Hemu route; the hook is autumn foliage — a paradise for photographers and repeaters.",
    },
    days: 8,
    nights: 7,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านกว่างโจว", en: "via Guangzhou" },
    difficulty: "moderate",
    altitudeNote: { th: "ปานกลาง • เตรียมตัวเล็กน้อย", en: "Moderate • a little preparation" },
    bestMonths: {
      th: "กลางก.ย.–ต.ค. • ใบไม้เปลี่ยนสีพีคปลายก.ย.–ต้นต.ค. (หน้าต่างสั้น!)",
      en: "Mid-Sep–Oct • foliage peaks late Sep–early Oct (short window!)",
    },
    months: [9, 10],
    highlights: [
      { th: "อุทยานคานาสือ ทะเลสาบมรกตกลางหุบเขา", en: "Kanas park, an emerald lake in the valley" },
      { th: "หมู่บ้านเหอมู่ หมู่บ้านในสายหมอก", en: "Hemu village wrapped in morning mist" },
      { th: "อุทยานธรณีเคอเคอทัวไห่ ภูผาหินอัศจรรย์", en: "Koktokay geopark, dramatic rock peaks" },
      { th: "ใบไม้เปลี่ยนสีทองทั้งหุบเขา (จุดขายหลัก)", en: "Golden autumn foliage filling the valley (the main hook)" },
    ],
    whoFor: {
      th: "สายถ่ายรูป/ใบไม้เปลี่ยนสี • repeater ที่เคยไปอี้ลี่ • สายธรรมชาติพรีเมียม • ช่างภาพ",
      en: "Photography/foliage lovers • Ili repeaters • premium nature travellers • photographers",
    },
    prep: [
      { text: { th: "หน้าต่างใบไม้เปลี่ยนสีสั้น ปิดการขาย/คอนเฟิร์มเร็ว", en: "Foliage window is short — close/confirm sales early" }, warn: true },
      { text: { th: "ระยะทางขับรถยาว ไม่เหมาะคนเมื่อยง่าย", en: "Long drives, not for those who tire easily" } },
      { text: { th: "อากาศเย็นกว่าซัมเมอร์ เตรียมเสื้อหนาว", en: "Colder than summer — pack warm clothing" } },
      { text: { th: "กันแดด/แว่นกันแดด", en: "Sun protection/sunglasses" } },
    ],
    sellingScript: {
      th: "“เคยไปอี้ลี่แล้วใช่ไหม? คานาสือคือซินเจียงอีกระดับ ใบไม้ทองทั้งหุบเขา หมู่บ้านในสายหมอก เส้นทางที่คนไทยยังไปไม่เยอะ”",
      en: "\"Been to Ili already? Kanas is the next level — golden valleys and misty villages, a route few Thai travellers have done.\"",
    },
    crossSell: {
      th: "เสนอกับ repeater — ต่อยอดจาก CZ004/CA001 ที่เคยขายไปแล้ว",
      en: "Offer to repeaters — a step up from CZ004/CA001 you've already sold.",
    },
    customerSegments: ["photography", "repeater"],
    routeSegments: [
      { from: "urumqi", to: "fuyun", mode: "drive" },
      { from: "fuyun", to: "koktokay", mode: "drive" },
      { from: "koktokay", to: "burqin", mode: "drive" },
      { from: "burqin", to: "kanas", mode: "drive" },
      { from: "kanas", to: "hemu", mode: "drive" },
      { from: "hemu", to: "kuytun", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – กว่างโจว – อูลู่มู่ฉี", en: "Bangkok – Guangzhou – Urumqi" },
        stops: ["urumqi"],
        along: [
          { th: "บินสุวรรณภูมิ–กว่างโจว (CZ362) ต่อเครื่องสู่อูลู่มู่ฉี (CZ6892)", en: "Fly Suvarnabhumi–Guangzhou (CZ362), connect to Urumqi (CZ6892)" },
          { th: "ถึงอูลู่มู่ฉี เข้าที่พัก", en: "Arrive Urumqi and check in", stopId: "urumqi" },
        ],
        hotel: { name: "HILTON GARDEN INN HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "เขาเทียนซาน – ทะเลสาบเทียนฉือ – ฝูหยุน", en: "Tianshan – Tianchi Lake – Fuyun" },
        stops: ["fuyun"],
        along: [
          { th: "ทะเลสาบเทียนฉือ ‘ทะเลสาบสวรรค์’ ใต้ยอดเขาโป๋เก๋อต๋า", en: "Tianchi 'Heavenly Lake' below Bogda Peak", stopId: "tianchi" },
          { th: "ผ่านชมทะเลทรายกู่เอ๋อปานทง สู่เมืองฝูหยุน", en: "Pass the Gurbantünggüt Desert on the way to Fuyun", stopId: "fuyun" },
        ],
        drive: { th: "อูลู่มู่ฉี → ฝูหยุน", en: "Urumqi → Fuyun" },
        hotel: { name: "FUYUN VIENNA INTER HOTEL", star: 4, cityId: "fuyun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "อุทยานธรณีเคอเคอทัวไห่ – หุบเขาเออร์ทีช – เบอร์จิ้น", en: "Koktokay geopark – Irtysh canyon – Burqin" },
        stops: ["koktokay"],
        along: [
          { th: "ผ่านชมทะเลสาบโคโคสุริ และอุทยานธรณีเคอเคอทัวไห่ ภูผาหินแกรนิตยักษ์", en: "Pass Kekesuli Lake and the Koktokay geopark's giant granite peaks", stopId: "koktokay" },
          { th: "หุบเขาเออร์ทีช และเขาเสินจง สู่เมืองเบอร์จิ้น", en: "The Irtysh canyon and Shenzhong Mountain, on to Burqin", stopId: "burqin" },
        ],
        drive: { th: "ฝูหยุน → เคอเคอทัวไห่ → เบอร์จิ้น", en: "Fuyun → Koktokay → Burqin" },
        hotel: { name: "BURQIN SUTONG HOLIDAY HOTEL", star: 4, cityId: "burqin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "อุทยานคานาสือ – ศาลาชมปลา – หมู่บ้านตูวา", en: "Kanas park – fish-viewing pavilion – Tuva village" },
        stops: ["kanas"],
        along: [
          { th: "อุทยานคานาสือ ศาลาชมปลา และบ้านชาวเผ่าตูวา", en: "Kanas park, the fish-viewing pavilion and a Tuva village", stopId: "kanas" },
          { th: "ทะเลสาบเทวดา ทะเลสาบวงพระจันทร์ และทะเลสาบมังกรหลับ", en: "Heavenly Lake, Crescent Moon Lake and Sleeping-Dragon Bay", stopId: "tianchi" },
        ],
        drive: { th: "เบอร์จิ้น → คานาสือ", en: "Burqin → Kanas" },
        hotel: { name: "KANAS HONGFU ECO RESORT HOTEL", star: 4, cityId: "kanas", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "หมู่บ้านเหอมู่ – จุดชมวิวฮาเติน – ธารน้ำห้าสี", en: "Hemu village – Hadeng viewpoint – Five-Colour River" },
        stops: ["hemu"],
        along: [
          { th: "หมู่บ้านเหอมู่ หมู่บ้านไม้ซุงในสายหมอกยามเช้า + จุดชมวิวฮาเติน", en: "Hemu, the misty log-cabin village + the Hadeng viewpoint", stopId: "hemu" },
          { th: "เดินทางกลับเบอร์จิ้น ชมธารน้ำห้าสี (Five-Colour River)", en: "Back to Burqin for the Five-Colour River", stopId: "burqin" },
        ],
        drive: { th: "คานาสือ → เหอมู่ → เบอร์จิ้น", en: "Kanas → Hemu → Burqin" },
        hotel: { name: "BURQIN SUTONG HOLIDAY HOTEL", star: 4, cityId: "burqin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "เมืองปีศาจอูเหอ – ขุยถุน", en: "Wuerhe Ghost City – Kuytun" },
        stops: ["kuytun"],
        along: [
          { th: "เมืองปีศาจอูเหอ ภูมิประเทศหินแกะสลักโดยลม (yardang)", en: "The Wuerhe 'Ghost City', wind-carved yardang rock formations", stopId: "wuerhe" },
          { th: "ผ่านชมบ่อน้ำมันร้อยลี้ สู่เมืองขุยถุน", en: "Pass the 'hundred-li' oil field on the way to Kuytun", stopId: "kuytun" },
        ],
        drive: { th: "เบอร์จิ้น → ขุยถุน", en: "Burqin → Kuytun" },
        hotel: { name: "KUYTUN HAMPTON BY HILTON HOTEL", star: 4, cityId: "kuytun", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "อูลู่มู่ฉี – สวนนิเวศโบราณซินเจียง – ตลาดต้าปาจา", en: "Urumqi – Xinjiang ancient ecology garden – Da Bazaar" },
        stops: ["urumqi"],
        along: [
          { th: "สวนนิเวศโบราณซินเจียง", en: "The Xinjiang ancient ecology garden" },
          { th: "ตลาดต้าปาจา (แกรนด์บาซาร์) ช้อปของฝากและวัฒนธรรมอุยกูร์", en: "The Da Bazaar (Grand Bazaar) for souvenirs and Uyghur culture", stopId: "urumqi-bazaar" },
        ],
        drive: { th: "ขุยถุน → อูลู่มู่ฉี", en: "Kuytun → Urumqi" },
        hotel: { name: "HILTON GARDEN INN HOTEL", star: 4, cityId: "urumqi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "อูลู่มู่ฉี – กว่างโจว – กรุงเทพฯ", en: "Urumqi – Guangzhou – Bangkok" },
        stops: ["urumqi"],
        along: [
          { th: "บินอูลู่มู่ฉี–กว่างโจว (CZ6883) ต่อเครื่องกลับสุวรรณภูมิ (CZ361)", en: "Fly Urumqi–Guangzhou (CZ6883), connect home to Suvarnabhumi (CZ361)" },
        ],
      },
    ],
  },
  {
    id: "GO1KHG-CZ002",
    regionId: "south",
    flights: [
      {
        airports: ["BKK", "CAN", "KHG"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 12 ชม. ต่อเครื่องกว่างโจว", en: "≈ 12h via Guangzhou" },
        hops: [
          { from: "BKK", to: "CAN", flightNo: "CZ362", dep: "08:20", arr: "12:10" },
          { from: "CAN", to: "KHG", flightNo: "CZ6836", dep: "15:10", arr: "21:45" },
        ],
      },
      {
        airports: ["KHG", "CAN", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 12 ชม. ต่อเครื่องกว่างโจว", en: "≈ 12h via Guangzhou" },
        hops: [
          { from: "KHG", to: "CAN", flightNo: "CZ6835", dep: "08:00", arr: "13:50" },
          { from: "CAN", to: "BKK", flightNo: "CZ363", dep: "16:00", arr: "17:55" },
        ],
      },
    ],
    title: {
      th: "ซินเจียงใต้ คาชการ์ เส้นทางสายไหม–ปามีร์–ชายแดนปากีสถาน",
      en: "South Xinjiang: Kashgar Silk Road–Pamir–Pakistan border",
    },
    oneLiner: {
      th: "เส้นทาง exotic/ผจญภัย — หัวใจอารยธรรมอุยกูร์ ปามีร์ และชายแดนจีน-ปากีสถานที่ 4,700 ม.",
      en: "An exotic, adventurous route — Uyghur heartland, the Pamir, and the China–Pakistan border at 4,700 m.",
    },
    days: 8,
    nights: 7,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านกว่างโจว", en: "via Guangzhou" },
    difficulty: "high",
    altitudeNote: { th: "สูงมาก • คัดกรองสุขภาพ", en: "Very high • health screening" },
    bestMonths: { th: "ก.ค.–ก.ย.", en: "Jul–Sep" },
    months: [7, 8, 9],
    highlights: [
      { th: "คุนจีราบพาส ชายแดนจีน-ปากีสถาน ~4,700 ม.", en: "Khunjerab Pass, China–Pakistan border ~4,700 m" },
      { th: "ทะเลสาบคาราคูล + ที่ราบสูงปามีร์", en: "Karakul Lake + the Pamir plateau" },
      { th: "เมืองโบราณคาชการ์ หัวใจสายไหม-อุยกูร์", en: "Kashgar Old City, the Silk Road–Uyghur heart" },
      { th: "ถนนสันหลังมังกร (Karakoram Highway)", en: "The Karakoram Highway" },
    ],
    whoFor: {
      th: "สายผจญภัย • สายประวัติศาสตร์/สายไหม • repeater • ช่างภาพ • ลูกค้าแข็งแรงไม่มีโรคประจำตัว",
      en: "Adventurers • history/Silk Road fans • repeaters • photographers • fit clients with no chronic illness",
    },
    prep: [
      { text: { th: "คัดกรองสุขภาพ — เลี่ยงผู้มีโรคหัวใจ/ความดัน/ปอด ผู้สูงอายุเปราะบาง เด็กเล็ก", en: "Health screening — avoid heart/blood-pressure/lung conditions, frail seniors, small children" }, warn: true },
      { text: { th: "ทำประกันครอบคลุมพื้นที่สูง + เคลื่อนย้ายฉุกเฉิน", en: "Insurance covering high altitude + emergency evacuation" } },
      { text: { th: "บรีฟเรื่องนั่งรถนาน + ถนนภูเขา", en: "Brief on long drives + mountain roads" } },
      { text: { th: "พาสปอร์ตเขตชายแดน เตรียมเอกสารล่วงหน้า", en: "Border-zone permits — prepare documents early" } },
    ],
    sellingScript: {
      th: "“ไม่ใช่ทัวร์จีนทั่วไป — เส้นทางสายไหมแท้ ยืนชายแดนปากีสถานที่ 4,700 ม. ประสบการณ์ once-in-a-lifetime สำหรับคนที่เบื่อทัวร์ตลาด”",
      en: "\"Not your usual China tour — the real Silk Road, standing at the Pakistan border at 4,700 m. A once-in-a-lifetime trip for those bored of mass tours.\"",
    },
    crossSell: {
      th: "เสนอกับ repeater/สายผจญภัย — แตกต่างจากซินเจียงเหนือโดยสิ้นเชิง",
      en: "Offer to repeaters/adventurers — completely different from North Xinjiang.",
    },
    customerSegments: ["adventure", "culture", "photography", "repeater"],
    routeSegments: [
      { from: "kashgar", to: "tashkurgan", mode: "drive" },
      { from: "tashkurgan", to: "khunjerab", mode: "drive" },
      { from: "khunjerab", to: "kashgar", mode: "drive" },
      { from: "kashgar", to: "bachu", mode: "drive" },
      { from: "bachu", to: "yarkand", mode: "drive" },
      { from: "yarkand", to: "kashgar", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – กว่างโจว – คัชการ์", en: "Bangkok – Guangzhou – Kashgar" },
        stops: ["kashgar"],
        along: [
          { th: "บินสุวรรณภูมิ–กว่างโจว (CZ362) ต่อเครื่องสู่คัชการ์ (CZ6836)", en: "Fly Suvarnabhumi–Guangzhou (CZ362), connect to Kashgar (CZ6836)" },
          { th: "ถึงสนามบินคัชการ์ไหลหนิงช่วงค่ำ เข้าที่พัก", en: "Arrive Kashgar (Laining) airport in the evening, transfer to hotel", stopId: "kashgar" },
        ],
        hotel: { name: "HYATT PLACE KASHGAR", star: 4, cityId: "kashgar", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "เมืองโบราณคัชการ์ – พิธีเปิดเมือง – สวนเซียงเฟย", en: "Kashgar Old City – opening ceremony – Xiangfei Garden" },
        stops: ["kashgar"],
        along: [
          { th: "พิธีเปิดประตูเมืองโบราณคัชการ์ + ถนนช่างฝีมือ ตรอกสายรุ้ง", en: "Old City gate-opening ceremony + artisans' street and 'rainbow alley'", stopId: "kashgar" },
          { th: "โรงน้ำชาโบราณร้อยปี และจัตุรัสมัสยิดอิดกาห์ (ชมภายนอก)", en: "Century-old teahouse and Id Kah Mosque square (exterior)", stopId: "kashgar" },
          { th: "สวนพระสนมเซียงเฟย อนุสรณ์รักแห่งราชวงศ์ชิง", en: "Xiangfei (Fragrant Concubine) Garden, a Qing-era love memorial", stopId: "kashgar" },
        ],
        hotel: { name: "HYATT PLACE KASHGAR", star: 4, cityId: "kashgar", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "คัชการ์ – หุบเขาไก้จื่อ – คาราคูล – ทาชคอร์กัน", en: "Kashgar – Ghez Canyon – Karakul – Tashkurgan" },
        stops: ["tashkurgan"],
        along: [
          { th: "ถนนมิตรภาพจีน-ปากีสถาน (คาราโครัม) ผ่านชมแกรนด์แคนยอนไก้จื่อ", en: "China–Pakistan Friendship (Karakoram) Hwy past Ghez Canyon" },
          { th: "ทะเลสาบคาราคูลสะท้อนยอดเขามุซทังก์อาต้า", en: "Karakul Lake mirroring Muztagh Ata peak", stopId: "karakul" },
          { th: "อุทยานทุ่งหญ้าสีทอง และนครศิลา (Stone City) เมืองทาชคอร์กัน", en: "Golden grassland wetland park and the Stone City of Tashkurgan", stopId: "tashkurgan" },
        ],
        drive: { th: "ไก้จื่อ 54 กม. · คาราคูล 163 กม. · ทาชคอร์กัน 99 กม.", en: "Ghez 54 km · Karakul 163 km · Tashkurgan 99 km" },
        hotel: { name: "PANORAMA STARRY SKY HOTEL", star: 4, cityId: "tashkurgan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ถนนสันหลังมังกร – คุนจีราบพาส – ทะเลสาบไป๋ซาหู – คัชการ์", en: "Panlong Road – Khunjerab Pass – Baisha Lake – Kashgar" },
        stops: ["kashgar"],
        along: [
          { th: "ถนนโบราณผานหลง ‘สันหลังมังกร’ กว่า 600 โค้ง ที่ 4,100 ม.", en: "Panlong 'dragon-back' road, 600+ switchbacks at 4,100 m" },
          { th: "ชายแดนจีน-ปากีสถาน ด่านคุนจีราบพาส ~4,600 ม. (ขึ้นกับสภาพอากาศ/ราชการ)", en: "China–Pakistan Khunjerab Pass ~4,600 m (weather/authority permitting)", stopId: "khunjerab" },
          { th: "ผ่านชมทะเลสาบสีฟ้าปันเดียร์ และทะเลสาบไป๋ซาหูริมทะเลทราย", en: "Bulunkou blue lake and the desert-side Baisha (White Sand) Lake" },
        ],
        drive: { th: "ผานหลง 106 กม. · ปันเดียร์ 64 กม. · ไป๋ซาหู 146 กม. · คัชการ์ 151 กม.", en: "Panlong 106 km · Bulunkou 64 km · Baisha 146 km · Kashgar 151 km" },
        hotel: { name: "HYATT PLACE KASHGAR", star: 4, cityId: "kashgar", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "คัชการ์ – ปาฉู่ – อุทยานทะเลแดง", en: "Kashgar – Bachu – Red Sea Park" },
        stops: ["bachu"],
        along: [
          { th: "เดินทางเลียบขอบทะเลทรายตากลามากันสู่เมืองปาฉู่", en: "Drive along the edge of the Taklamakan Desert to Bachu", stopId: "bachu" },
          { th: "อุทยานทะเลแดง ป่าต้นหูหยาง ‘วีรบุรุษแห่งทะเลทราย’ นั่งรถชมอุทยาน", en: "Red Sea park — Euphrates poplar forest, the 'desert hero', by park shuttle", stopId: "bachu" },
        ],
        drive: { th: "คัชการ์–ปาฉู่ 273 กม. · ~3.5 ชม.", en: "Kashgar–Bachu 273 km · ~3.5h" },
        hotel: { name: "BACHU LAVENDER HOTEL", star: 4, cityId: "bachu", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ทะเลทรายต๋าหว่าคุน – ขี่อูฐ/ตะลุยทราย – ซาเช่อ", en: "Dawakun Desert – camel ride / dune drive – Yarkand" },
        stops: ["yarkand"],
        along: [
          { th: "ทะเลทรายต๋าหว่าคุน โอเอซิสกลางทราย ขับรถตะลุยทรายหรือขี่อูฐ", en: "Dawakun Desert oasis — dune driving or camel riding", stopId: "bachu" },
          { th: "เดินทางสู่เมืองซาเช่อ (ยาร์คันด์) อดีตราชธานีข่านาเตะ", en: "Continue to Yarkand (Shache), former khanate capital", stopId: "yarkand" },
        ],
        drive: { th: "ต๋าหว่าคุน 178 กม. · ซาเช่อ 136 กม.", en: "Dawakun 178 km · Yarkand 136 km" },
        hotel: { name: "VIENNA HOTEL SHACHE", star: 4, cityId: "yarkand", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ซาเช่อ – ตลาดคาจ้านฉี – สุสานข่าน/อามานนิซา – เกาไถ – คัชการ์", en: "Yarkand – Kazanqi market – royal tombs – Gaotai – Kashgar" },
        stops: ["kashgar"],
        along: [
          { th: "ย่านเมืองเก่าคาจ้านฉี และสุสานหลวงข่านแห่งซาเช่อ", en: "Kazanqi old quarter and the royal Yarkand Khan tombs", stopId: "yarkand" },
          { th: "สุสานอนุสรณ์พระนางอามานนิซาคาน กวีเอกแห่งอุยกูร์", en: "Tomb of Amannisa Khan, the great Uyghur poet-queen", stopId: "yarkand" },
          { th: "ชุมชนโบราณเกาไถริมแม่น้ำทูหมัน หมู่บ้านช่างปั้นกว่า 600 ปี", en: "Gaotai ancient riverside community, a 600-year potters' village" },
        ],
        drive: { th: "ซาเช่อ–คัชการ์ 191 กม. · ~3 ชม.", en: "Yarkand–Kashgar 191 km · ~3h" },
        hotel: { name: "HYATT PLACE KASHGAR", star: 4, cityId: "kashgar", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "คัชการ์ – กว่างโจว – กรุงเทพฯ", en: "Kashgar – Guangzhou – Bangkok" },
        stops: ["kashgar"],
        along: [
          { th: "บินคัชการ์–กว่างโจว (CZ6835) ต่อเครื่องกลับกรุงเทพฯ (CZ363)", en: "Fly Kashgar–Guangzhou (CZ6835), connect home to Bangkok (CZ363)" },
        ],
      },
    ],
  },
  {
    id: "2ULHW-MU001",
    regionId: "gansu",
    flights: [
      {
        airports: ["BKK", "KMG", "LHW"],
        airline: "China Eastern (MU)",
        direction: "outbound",
        duration: { th: "≈ 8 ชม. รวมต่อเครื่องคุนหมิง", en: "≈ 8h incl. Kunming connection" },
      },
      {
        airports: ["LHW", "KMG", "BKK"],
        airline: "China Eastern (MU)",
        direction: "return",
        duration: { th: "≈ 8 ชม. รวมต่อเครื่องคุนหมิง", en: "≈ 8h incl. Kunming connection" },
      },
    ],
    title: {
      th: "กานหนาน & จิ่วไจ้โกว เสน่ห์ทิเบตแห่งศรัทธาและสายน้ำสีคราม",
      en: "Gannan & Jiuzhaigou: Tibetan faith and turquoise waters",
    },
    oneLiner: {
      th: "วัฒนธรรมทิเบต (อัมโด) + ธรรมชาติมรดกโลกจิ่วไจ้โกว โดยไม่ต้องขึ้นที่สูงแบบทิเบตแท้",
      en: "Amdo-Tibetan culture + World Heritage Jiuzhaigou, without true Tibet's extreme altitude.",
    },
    days: 8,
    nights: 6,
    airline: "China Eastern (MU)",
    via: { th: "ผ่านคุนหมิง/หลานโจว", en: "via Kunming/Lanzhou" },
    difficulty: "moderate",
    altitudeNote: { th: "ปานกลาง • เตรียมตัวเล็กน้อย", en: "Moderate • a little preparation" },
    bestMonths: {
      th: "พ.ค.–ก.ย. (เขียว) • ต.ค. (จิ่วไจ้โกวใบไม้เปลี่ยนสี — สวยที่สุด)",
      en: "May–Sep (green) • Oct (Jiuzhaigou autumn — most beautiful)",
    },
    months: [5, 6, 7, 8, 9, 10],
    highlights: [
      { th: "จิ่วไจ้โกว มรดกโลก ทะเลสาบสีเทอร์ควอยซ์–น้ำตกธารไข่มุก", en: "Jiuzhaigou World Heritage — turquoise lakes and Pearl Shoal falls" },
      { th: "วัดลาบรัง หนึ่งในวัดทิเบตใหญ่ที่สุดนอกทิเบต", en: "Labrang, one of the largest Tibetan monasteries outside Tibet" },
      { th: "หมู่บ้านจากาน่า หมู่บ้านหินกลางหุบเขา", en: "Zhagana, a stone village in the valley" },
      { th: "ถ้ำปิงหลิง พระพุทธรูปแกะสลักริมน้ำ", en: "Bingling grottoes, riverside carved Buddhas" },
    ],
    whoFor: {
      th: "สายวัฒนธรรม+ธรรมชาติ • ครอบครัว • First-timer • คนอยาก ‘ทิเบตแบบเข้าถึงง่าย’",
      en: "Culture + nature • families • first-timers • those wanting 'easy-access Tibet'",
    },
    prep: [
      { text: { th: "ที่สูงปานกลาง 2–3 พันม. ผู้สูงอายุที่แข็งแรงไปได้ แต่แจ้งล่วงหน้า", en: "Moderate altitude 2–3,000 m; fit seniors okay but notify in advance" } },
      { text: { th: "จิ่วไจ้โกวคนเยอะไฮซีซัน จองล่วงหน้า", en: "Jiuzhaigou is crowded in high season — book ahead" } },
      { text: { th: "อธิบายว่าเป็นวัฒนธรรมทิเบต ไม่ใช่เขตปกครองทิเบต", en: "Explain it's Tibetan culture, not the Tibet Autonomous Region" } },
      { text: { th: "เสื้อกันหนาว + กันแดด", en: "Warm layers + sun protection" } },
    ],
    sellingScript: {
      th: "“อยากสัมผัสทิเบตและเห็นจิ่วไจ้โกวมรดกโลก แต่กลัวที่สูง? กานหนานคือทางสายกลาง — วัฒนธรรมทิเบต วัดลาบรัง ทะเลสาบสีเทอร์ควอยซ์ โดยไม่ต้องขึ้นลาซา”",
      en: "\"Want a taste of Tibet and World Heritage Jiuzhaigou but worried about altitude? Gannan is the middle path — Tibetan culture, Labrang, turquoise lakes, no Lhasa required.\"",
    },
    crossSell: {
      th: "แม่เหล็กขายง่ายเพราะมีจิ่วไจ้โกว — เหมาะ first-timer และครอบครัว",
      en: "An easy sell thanks to Jiuzhaigou — great for first-timers and families.",
    },
    customerSegments: ["culture", "family", "firsttimer", "photography"],
    routeSegments: [
      { from: "lanzhou", to: "bingling", mode: "drive" },
      { from: "bingling", to: "xiahe", mode: "drive" },
      { from: "xiahe", to: "songpan", mode: "drive" },
      { from: "songpan", to: "jiuzhaigou", mode: "drive" },
      { from: "jiuzhaigou", to: "zhagana", mode: "drive" },
      { from: "zhagana", to: "hezuo", mode: "drive" },
      { from: "hezuo", to: "lanzhou", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – คุนหมิง – หลานโจว", en: "Bangkok – Kunming – Lanzhou" },
        stops: ["lanzhou"],
        along: [
          { th: "บินสุวรรณภูมิ–คุนหมิง ต่อเครื่องสู่หลานโจว (MU)", en: "Fly Suvarnabhumi–Kunming, connect to Lanzhou (MU)" },
          { th: "ถึงหลานโจว เมืองริมแม่น้ำเหลืองบนเส้นทางสายไหม เข้าที่พัก", en: "Arrive Lanzhou, the Yellow River city on the Silk Road, and check in", stopId: "lanzhou" },
        ],
      },
      {
        day: 2,
        title: { th: "หลานโจว – ถ้ำปิงหลิง (ล่องเรือหลิวเจียเสีย) – เซี่ยเหอ", en: "Lanzhou – Bingling Grottoes (Liujiaxia boat) – Xiahe" },
        stops: ["bingling", "xiahe"],
        along: [
          { th: "ล่องเรือทะเลสาบหลิวเจียเสียสู่ถ้ำปิงหลิง พระพุทธรูปแกะสลักริมน้ำ", en: "Boat across Liujiaxia reservoir to the Bingling grottoes, riverside carved Buddhas", stopId: "bingling" },
          { th: "เดินทางสู่เซี่ยเหอ ชุมชนทิเบตอัมโดบนที่ราบสูง", en: "Continue to Xiahe, an Amdo-Tibetan town on the plateau", stopId: "xiahe" },
        ],
        drive: { th: "หลานโจว → ปิงหลิง → เซี่ยเหอ", en: "Lanzhou → Bingling → Xiahe" },
      },
      {
        day: 3,
        title: { th: "วัดลาบรัง – ทุ่งหญ้าซางเคอ – ซงพาน", en: "Labrang Monastery – Sangke grassland – Songpan" },
        stops: ["xiahe", "songpan"],
        along: [
          { th: "วัดลาบรัง หนึ่งในวัดทิเบตใหญ่ที่สุดนอกทิเบต เดินกงล้อมนตรายาวที่สุด", en: "Labrang, one of the largest Tibetan monasteries outside Tibet, with its long prayer-wheel corridor", stopId: "xiahe" },
          { th: "ทุ่งหญ้าซางเคอ แล้วเดินทางข้ามสู่มณฑลเสฉวนสู่เมืองซงพาน", en: "The Sangke grassland, then cross into Sichuan toward Songpan", stopId: "songpan" },
        ],
        drive: { th: "เซี่ยเหอ → ซงพาน", en: "Xiahe → Songpan" },
      },
      {
        day: 4,
        title: { th: "เมืองโบราณซงพาน – อุทยานจิ่วไจ้โกว", en: "Songpan ancient town – Jiuzhaigou" },
        stops: ["songpan", "jiuzhaigou"],
        along: [
          { th: "เมืองโบราณซงพาน กำแพงเมืองสมัยราชวงศ์หมิงริมแม่น้ำหมินเจียง", en: "Songpan's Ming-dynasty walled old town on the Min River", stopId: "songpan" },
          { th: "เดินทางสู่อุทยานจิ่วไจ้โกว มรดกโลกทางธรรมชาติ", en: "Continue to Jiuzhaigou, a natural World Heritage site", stopId: "jiuzhaigou" },
        ],
        drive: { th: "ซงพาน → จิ่วไจ้โกว", en: "Songpan → Jiuzhaigou" },
      },
      {
        day: 5,
        title: { th: "เจาะลึกอุทยานจิ่วไจ้โกว (เต็มวัน)", en: "Jiuzhaigou valley in depth (full day)" },
        stops: ["jiuzhaigou"],
        along: [
          { th: "ทะเลสาบสีเทอร์ควอยซ์ ทะเลสาบห้าสี และสระน้ำหลากสี (รวมรถอุทยาน)", en: "Turquoise lakes, the Five-Colour Pond and multicoloured pools (park bus included)", stopId: "jiuzhaigou" },
          { th: "น้ำตกธารไข่มุกและน้ำตกหนัวรื่อหลั่ง ป่าน้ำตกขั้นบันได", en: "Pearl Shoal and Nuorilang waterfalls, terraced cascades", stopId: "jiuzhaigou" },
        ],
      },
      {
        day: 6,
        title: { th: "จิ่วไจ้โกว – หมู่บ้านหินจากาน่า", en: "Jiuzhaigou – Zhagana stone village" },
        stops: ["zhagana"],
        along: [
          { th: "เดินทางสู่จากาน่า หมู่บ้านหินทิเบตกลางหุบเขาหินปูน", en: "Drive to Zhagana, a Tibetan stone village cradled by limestone peaks", stopId: "zhagana" },
          { th: "ชมวิวทุ่งนาขั้นบันไดและยอดเขารูปปราการธรรมชาติ", en: "Terraced fields and the natural fortress-like rock walls" },
        ],
        drive: { th: "จิ่วไจ้โกว → จากาน่า", en: "Jiuzhaigou → Zhagana" },
      },
      {
        day: 7,
        title: { th: "จากาน่า – เหอจั้ว (วังมิลาเรปา) – หลานโจว – กลับ", en: "Zhagana – Hezuo (Milarepa Palace) – Lanzhou – fly home" },
        stops: ["hezuo", "lanzhou"],
        along: [
          { th: "พระราชวังมิลาเรปาเก้าชั้นที่เหอจั้ว ศูนย์รวมศิลปะพุทธทิเบต", en: "The nine-storey Milarepa Palace at Hezuo, a treasury of Tibetan Buddhist art", stopId: "hezuo" },
          { th: "เดินทางกลับหลานโจว บินคุนหมิงต่อเครื่องกลับกรุงเทพฯ (MU)", en: "Return to Lanzhou, fly via Kunming connecting home to Bangkok (MU)" },
        ],
        drive: { th: "จากาน่า → เหอจั้ว → หลานโจว", en: "Zhagana → Hezuo → Lanzhou" },
      },
      {
        day: 8,
        title: { th: "หลานโจว – คุนหมิง – กรุงเทพฯ", en: "Lanzhou – Kunming – Bangkok" },
        stops: ["lanzhou"],
        along: [
          { th: "เดินทางถึงสุวรรณภูมิโดยสวัสดิภาพ", en: "Arrive safely at Suvarnabhumi" },
        ],
      },
    ],
  },
  {
    id: "2UXNN-VZ001",
    regionId: "tibet",
    flights: [
      {
        airports: ["BKK", "XNN"],
        airline: "Thai Vietjet (VZ)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 4.5 ชม.", en: "Direct ≈ 4.5h" },
        note: { th: "ไม่ต้องต่อเครื่อง — จุดขายเด่น", en: "No transfer — a key selling point" },
        hops: [{ from: "BKK", to: "XNN", flightNo: "VZ3690", dep: "17:40", arr: "22:40" }],
      },
      {
        airports: ["XNN", "BKK"],
        airline: "Thai Vietjet (VZ)",
        direction: "return",
        duration: { th: "บินตรง ≈ 4.5 ชม.", en: "Direct ≈ 4.5h" },
        hops: [{ from: "XNN", to: "BKK", flightNo: "VZ3691", dep: "23:40", arr: "02:45+1" }],
      },
    ],
    title: {
      th: "ซีหนิง–ทิเบต–ชิงไห่ โปตาลา & รถไฟสายหลังคาโลก",
      en: "Xining–Tibet–Qinghai: Potala & the Roof-of-the-World railway",
    },
    oneLiner: {
      th: "ทิเบตแท้ระดับ bucket-list — โปตาลา + รถไฟหลังคาโลก จุดขายใหญ่คือ ‘บินตรงซีหนิง’ ไม่ต้องต่อเครื่อง",
      en: "Bucket-list true Tibet — Potala + the high-altitude railway; the big hook is the direct flight to Xining (no transfer).",
    },
    days: 8,
    nights: 7,
    airline: "Thai Vietjet (VZ)",
    via: { th: "บินตรงซีหนิง", en: "direct to Xining" },
    difficulty: "high",
    altitudeNote: { th: "สูงมาก • คัดกรองสุขภาพ (ลาซา 3,650 ม.)", en: "Very high • health screening (Lhasa 3,650 m)" },
    bestMonths: { th: "ก.ค.–ต.ค. (ทิเบตเที่ยวได้ พ.ค.–ต.ค.)", en: "Jul–Oct (Tibet open May–Oct)" },
    months: [7, 8, 9, 10],
    highlights: [
      { th: "พระราชวังโปตาลา สัญลักษณ์ของทิเบต (bucket-list)", en: "Potala Palace, the symbol of Tibet (bucket-list)" },
      { th: "วัดโจคัง + ตลาดบาคอร์ หัวใจศรัทธาทิเบต", en: "Jokhang + Barkhor, the heart of Tibetan faith" },
      { th: "หลินจือ ‘สวิตเซอร์แลนด์แห่งทิเบต’ + ทะเลสาบปาซง", en: "Nyingchi, the 'Switzerland of Tibet' + Basum Tso" },
      { th: "บินตรงซีหนิง VZ — สะดวก ไม่ต้องต่อเครื่อง (จุดขายเด่น)", en: "Direct VZ flight to Xining — no transfer (key hook)" },
    ],
    whoFor: {
      th: "สายศรัทธา/พุทธ • bucket-list ทิเบต • สายรถไฟ • ลูกค้าแข็งแรงไม่มีโรคประจำตัว",
      en: "Faith/Buddhist travellers • Tibet bucket-listers • railway fans • fit clients with no chronic illness",
    },
    prep: [
      { text: { th: "ลาซา 3,650 ม. มีวันปรับสภาพ — งดแอลกอฮอล์/ไม่อาบน้ำ/ไม่ออกแรงหนักวันแรก", en: "Lhasa 3,650 m needs an acclimatisation day — no alcohol/shower/exertion day one" }, warn: true },
      { text: { th: "คัดกรองสุขภาพ — เลี่ยงโรคหัวใจ/ปอด/ความดัน หญิงตั้งครรภ์ ผู้สูงอายุเปราะบาง", en: "Health screening — avoid heart/lung/BP conditions, pregnancy, frail seniors" }, warn: true },
      { text: { th: "Tibet Permit — เตรียมพาสปอร์ต/เอกสารล่วงหน้า อย่าปิดการขายกระชั้น", en: "Tibet Permit — prepare passport/documents early, don't sell last-minute" } },
      { text: { th: "ทำประกันครอบคลุมพื้นที่สูง", en: "Insurance covering high altitude" } },
    ],
    sellingScript: {
      th: "“ทิเบตคือความฝันของนักเดินทาง และนี่คือเส้นทาง ‘บินตรงซีหนิง’ ไม่ต้องเสียเวลาต่อเครื่อง ได้ยืนหน้าโปตาลาและนั่งรถไฟหลังคาโลก”",
      en: "\"Tibet is every traveller's dream — and this route flies direct to Xining, no transfers, standing before the Potala and riding the roof-of-the-world railway.\"",
    },
    crossSell: {
      th: "คู่กับ GH-C (เวอร์ชันเจาะลึกรถไฟนอน + หลู่ล่าง)",
      en: "Pair with GH-C (the deeper sleeper-train + Lulang version).",
    },
    customerSegments: ["culture", "bucketlist"],
    routeSegments: [
      { from: "xining", to: "lhasa", mode: "flight" },
      { from: "lhasa", to: "nyingchi", mode: "train" },
      { from: "nyingchi", to: "basum-tso", mode: "drive" },
      { from: "basum-tso", to: "lhasa", mode: "drive" },
      { from: "lhasa", to: "xining", mode: "train" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ซีหนิง (บินตรง)", en: "Bangkok – Xining (direct)" },
        stops: ["xining"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–ซีหนิง (VZ3690) ไม่ต้องต่อเครื่อง", en: "Direct flight Suvarnabhumi–Xining (VZ3690), no transfer" },
          { th: "ถึงซีหนิง ประตูสู่ที่ราบสูงชิงไห่–ทิเบต เข้าที่พัก", en: "Arrive Xining, gateway to the Qinghai–Tibet plateau, and check in", stopId: "xining" },
        ],
        hotel: { name: "XINING YONGHE INTERNATIONAL HOTEL", star: 4, cityId: "xining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ซีหนิง – ลาซา (บินภายใน) – ปรับสภาพร่างกาย", en: "Xining – Lhasa (domestic flight) – acclimatise" },
        stops: ["lhasa"],
        along: [
          { th: "บินภายในซีหนิง–ลาซา (สนามบินกงกา)", en: "Domestic flight Xining–Lhasa (Gonggar Airport)" },
          { th: "พักผ่อนปรับสภาพร่างกายกับความสูง 3,650 ม. งดออกแรงหนัก", en: "Rest to acclimatise to 3,650 m — avoid exertion on arrival" },
        ],
        hotel: { name: "LA WEI INTERNATIONAL HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "พระราชวังฤดูร้อนนอร์บูลิงคา – พิพิธภัณฑ์ทิเบต", en: "Norbulingka summer palace – Tibet Museum" },
        stops: ["lhasa"],
        along: [
          { th: "พระราชวังฤดูร้อนนอร์บูลิงคา สวนและที่ประทับฤดูร้อนของดาไลลามะ", en: "Norbulingka, the Dalai Lamas' summer palace and gardens", stopId: "lhasa" },
          { th: "พิพิธภัณฑ์ทิเบต เรียนรู้ประวัติศาสตร์และวัฒนธรรมทิเบต", en: "The Tibet Museum for Tibetan history and culture", stopId: "lhasa" },
        ],
        hotel: { name: "LA WEI INTERNATIONAL HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ลาซา – หลินจือ (รถไฟความเร็วสูง) – ป่าโบราณ", en: "Lhasa – Nyingchi (high-speed rail) – ancient forest" },
        stops: ["nyingchi"],
        along: [
          { th: "นั่งรถไฟความเร็วสูงลาซา–หลินจือ เส้นทางใหม่กลางหุบเขา", en: "Ride the new Lhasa–Nyingchi high-speed railway through the gorges", stopId: "nyingchi" },
          { th: "ป่าโบราณจวี้ป๋อ และหุบเขาคาติ้งโกว ‘สวิตเซอร์แลนด์แห่งทิเบต’", en: "The Juebo ancient forest and Kading valley, the 'Switzerland of Tibet'", stopId: "nyingchi" },
        ],
        drive: { th: "ลาซา → หลินจือ (รถไฟความเร็วสูง)", en: "Lhasa → Nyingchi (HSR)" },
        hotel: { name: "LINZHI YUNXI HOTEL", star: 4, cityId: "nyingchi", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "หลินจือ – ทะเลสาบปาซง – ลาซา", en: "Nyingchi – Basum Tso – Lhasa" },
        stops: ["basum-tso"],
        along: [
          { th: "ทะเลสาบปาซง (Basum Tso) ทะเลสาบศักดิ์สิทธิ์กลางป่าสน เกาะกลางน้ำ", en: "Basum Tso, a sacred alpine lake with a forested island", stopId: "basum-tso" },
          { th: "เดินทางกลับลาซาตามทางหลวงหลินลา", en: "Return to Lhasa along the Lhasa–Nyingchi highway", stopId: "lhasa" },
        ],
        drive: { th: "หลินจือ → ปาซง → ลาซา", en: "Nyingchi → Basum Tso → Lhasa" },
        hotel: { name: "LA WEI INTERNATIONAL HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "พระราชวังโปตาลา – วัดโจคัง – ตลาดบาคอร์", en: "Potala Palace – Jokhang – Barkhor" },
        stops: ["lhasa"],
        along: [
          { th: "พระราชวังโปตาลา สัญลักษณ์ของทิเบต (bucket-list)", en: "Potala Palace, the symbol of Tibet (bucket-list)", stopId: "lhasa" },
          { th: "วัดโจคัง หัวใจศรัทธาทิเบต + ตลาดบาคอร์รอบวัด", en: "Jokhang Temple, the heart of Tibetan faith + the Barkhor market", stopId: "lhasa" },
        ],
        hotel: { name: "LA WEI INTERNATIONAL HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ลาซา – ซีหนิง (รถไฟสายหลังคาโลก, ตู้นอน)", en: "Lhasa – Xining (roof-of-the-world sleeper train)" },
        stops: ["lhasa"],
        along: [
          { th: "นั่งรถไฟสายชิงไห่–ทิเบตข้ามที่ราบสูง ตู้นอน 4 ท่าน/ห้อง", en: "Board the Qinghai–Tibet railway across the plateau, sleeper 4/cabin" },
          { th: "ค้างคืนบนรถไฟ (ไม่รวมอาหารบนรถไฟ)", en: "Overnight on the train (train meals not included)" },
        ],
        drive: { th: "ลาซา → ซีหนิง (รถไฟตู้นอน)", en: "Lhasa → Xining (sleeper train)" },
      },
      {
        day: 8,
        title: { th: "ซีหนิง – พิพิธภัณฑ์ชิงไห่ – กรุงเทพฯ", en: "Xining – Qinghai Museum – Bangkok" },
        stops: ["xining"],
        along: [
          { th: "ถึงซีหนิง ชมพิพิธภัณฑ์ชิงไห่", en: "Arrive Xining and visit the Qinghai Museum", stopId: "xining" },
          { th: "บินตรงซีหนิง–สุวรรณภูมิ (VZ3691 23:40)", en: "Direct flight Xining–Suvarnabhumi (VZ3691 23:40)" },
        ],
      },
    ],
  },
  {
    id: "GH-C",
    regionId: "tibet",
    flights: [
      {
        airports: ["BKK", "XNN"],
        airline: "Thai Vietjet (VZ)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 4.5 ชม.", en: "Direct ≈ 4.5h" },
        note: { th: "ไม่ต้องต่อเครื่อง — จุดขายเด่น", en: "No transfer — a key selling point" },
        hops: [{ from: "BKK", to: "XNN", flightNo: "VZ3690", dep: "17:40", arr: "22:40" }],
      },
      {
        airports: ["XNN", "BKK"],
        airline: "Thai Vietjet (VZ)",
        direction: "return",
        duration: { th: "บินตรง ≈ 4.5 ชม.", en: "Direct ≈ 4.5h" },
        hops: [{ from: "XNN", to: "BKK", flightNo: "VZ3691", dep: "23:40", arr: "02:45+1" }],
      },
    ],
    title: {
      th: "ซีหนิง–ลาซา–หลู่ล่าง เจาะลึกรถไฟหลังคาโลก (รถไฟนอน)",
      en: "Xining–Lhasa–Lulang: deep roof-of-the-world railway (sleeper)",
    },
    oneLiner: {
      th: "ทิเบตเวอร์ชันเจาะลึก — เพิ่มเมืองหลู่ล่าง วัดถาเอ่อร์ และ ‘รถไฟนอนลาซา–ซีหนิง’ ประสบการณ์หลังคาโลกเต็มรูปแบบ",
      en: "The deep Tibet version — adds Lulang, Kumbum, and the Lhasa–Xining sleeper train for the full roof-of-the-world experience.",
    },
    days: 8,
    airline: "Thai Vietjet (VZ)",
    via: { th: "บินตรงซีหนิง", en: "direct to Xining" },
    difficulty: "high",
    altitudeNote: { th: "สูงมาก • คัดกรองสุขภาพ (ลาซา 3,650 ม.)", en: "Very high • health screening (Lhasa 3,650 m)" },
    bestMonths: { th: "ก.ค.–ต.ค.", en: "Jul–Oct" },
    months: [7, 8, 9, 10],
    highlights: [
      { th: "รถไฟนอนลาซา–ซีหนิง (4 คน/ห้อง) ประสบการณ์หลังคาโลกเต็มรูปแบบ", en: "Lhasa–Xining sleeper (4/cabin), the full roof-of-the-world ride" },
      { th: "เมืองหลู่ล่าง + ป่าทะเลหลู่ล่าง วิวหิมาลัย", en: "Lulang town + forest sea, Himalayan views" },
      { th: "โปตาลา • วัดโจคัง • ตลาดแปดเหลี่ยม", en: "Potala • Jokhang • Barkhor market" },
      { th: "วัดถาเอ่อร์ (Kumbum) วัดสำคัญพุทธทิเบต", en: "Kumbum Monastery, a major Tibetan-Buddhist site" },
    ],
    whoFor: {
      th: "repeater ทิเบต • สายรถไฟตัวจริง • สายศรัทธา/วัฒนธรรม • ลูกค้าแข็งแรง",
      en: "Tibet repeaters • true railway fans • faith/culture travellers • fit clients",
    },
    prep: [
      { text: { th: "ลาซา 3,650 ม. มีวันปรับสภาพ + คัดกรองสุขภาพเหมือน VZ001", en: "Lhasa 3,650 m, acclimatisation day + health screening as VZ001" }, warn: true },
      { text: { th: "คืนบนรถไฟนอน 4 คน/ห้อง — ตั้งความคาดหวังเรื่องความเป็นส่วนตัว", en: "Sleeper night, 4/cabin — set privacy expectations" } },
      { text: { th: "Tibet Permit + เอกสารล่วงหน้า", en: "Tibet Permit + documents in advance" } },
      { text: { th: "ของใช้ค้างคืนบนรถไฟ + ของว่าง (ไม่รวมอาหารบนรถไฟ)", en: "Overnight train kit + snacks (train meals not included)" } },
    ],
    sellingScript: {
      th: "“อยากได้ทิเบตแบบเต็มสูบ? เวอร์ชันนี้เพิ่มหลู่ล่างวิวหิมาลัย และนอนบนรถไฟหลังคาโลกจริง ๆ จากลาซากลับซีหนิง — ประสบการณ์ที่เล่าได้ทั้งชีวิต”",
      en: "\"Want Tibet to the fullest? This adds Himalayan Lulang and an actual sleeper night on the roof-of-the-world railway from Lhasa to Xining — a story for life.\"",
    },
    crossSell: {
      th: "เวอร์ชันเจาะลึกของทิเบต — เสนอกับคนที่อยากได้ ‘รถไฟนอน’ และเที่ยวลึกกว่า VZ001",
      en: "The deep Tibet version — for those wanting the sleeper train and more than VZ001.",
    },
    customerSegments: ["bucketlist", "culture", "repeater"],
    routeSegments: [
      { from: "xining", to: "lhasa", mode: "flight" },
      { from: "lhasa", to: "nyingchi", mode: "train" },
      { from: "nyingchi", to: "lulang", mode: "drive" },
      { from: "lulang", to: "basum-tso", mode: "drive" },
      { from: "basum-tso", to: "lhasa", mode: "drive" },
      { from: "lhasa", to: "xining", mode: "train" },
      { from: "xining", to: "kumbum", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ซีหนิง (บินตรง)", en: "Bangkok – Xining (direct)" },
        stops: ["xining"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–ซีหนิง (VZ3690 17:40-22:40) เข้าที่พัก", en: "Direct flight Suvarnabhumi–Xining (VZ3690 17:40-22:40), check in" },
        ],
        hotel: { name: "XINING YONGHE INTERNATIONAL HOTEL", star: 4, cityId: "xining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ซีหนิง – ลาซา (บินภายใน) – วิวกลางคืนโปตาลา", en: "Xining – Lhasa (domestic flight) – Potala by night" },
        stops: ["lhasa"],
        along: [
          { th: "บินภายในซีหนิง–ลาซา (3U3453 12:45-15:05)", en: "Domestic flight Xining–Lhasa (3U3453 12:45-15:05)" },
          { th: "ชมวิวพระราชวังโปตาลายามค่ำคืน", en: "Evening view of the floodlit Potala Palace", stopId: "lhasa" },
        ],
        hotel: { name: "LHASA CHAMOLUNG HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "พระราชวังโปตาลา – วัดโจคัง – ถนนแปดเหลี่ยม", en: "Potala Palace – Jokhang – Barkhor" },
        stops: ["lhasa"],
        along: [
          { th: "พระราชวังโปตาลา สัญลักษณ์ของทิเบต (bucket-list)", en: "Potala Palace, the symbol of Tibet (bucket-list)", stopId: "lhasa" },
          { th: "วัดโจคัง และตลาดถนนแปดเหลี่ยม (บาคอร์) หัวใจศรัทธาทิเบต", en: "Jokhang Temple and the Barkhor (eight-corner) market", stopId: "lhasa" },
        ],
        hotel: { name: "LHASA CHAMOLUNG HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ลาซา – หลินจือ (รถไฟ) – ป่าทะเลหลู่ล่าง – เมืองหลู่ล่าง", en: "Lhasa – Nyingchi (train) – Lulang forest-sea – Lulang town" },
        stops: ["nyingchi", "lulang"],
        along: [
          { th: "นั่งรถไฟลาซา–หลินจือ (ที่นั่งชั้น 2) ผ่านช่องเขาซีจีล่า", en: "Train Lhasa–Nyingchi (2nd-class) over the Sejila Pass", stopId: "nyingchi" },
          { th: "ป่าทะเลหลู่ล่าง ทุ่งหญ้าบนที่สูงหิมาลัย สู่เมืองหลู่ล่าง", en: "The Lulang forest-sea and Himalayan alpine meadows, into Lulang town", stopId: "lulang" },
        ],
        drive: { th: "ลาซา → หลินจือ (รถไฟ) → หลู่ล่าง", en: "Lhasa → Nyingchi (train) → Lulang" },
        hotel: { name: "LULANG XILU HOTEL", star: 4, cityId: "lulang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "เมืองหลู่ล่าง – ทะเลสาบบาซง – ลาซา", en: "Lulang town – Basum Tso – Lhasa" },
        stops: ["basum-tso"],
        along: [
          { th: "ทะเลสาบบาซง (Basum Tso) ทะเลสาบศักดิ์สิทธิ์กลางป่าสน", en: "Basum Tso, a sacred alpine lake amid pine forest", stopId: "basum-tso" },
          { th: "เดินทางกลับลาซา", en: "Return to Lhasa", stopId: "lhasa" },
        ],
        drive: { th: "หลู่ล่าง → ปาซง → ลาซา", en: "Lulang → Basum Tso → Lhasa" },
        hotel: { name: "LHASA CHAMOLUNG HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ตำหนักนอร์บูลิงคา – พิพิธภัณฑ์ทิเบต", en: "Norbulingka – Tibet Museum" },
        stops: ["lhasa"],
        along: [
          { th: "ตำหนักนอร์บูลิงคา (รวมรถกอล์ฟ) พระราชวังฤดูร้อนของดาไลลามะ", en: "Norbulingka (golf cart), the Dalai Lamas' summer palace", stopId: "lhasa" },
          { th: "พิพิธภัณฑ์ทิเบต", en: "The Tibet Museum", stopId: "lhasa" },
        ],
        hotel: { name: "LHASA CHAMOLUNG HOTEL", star: 4, cityId: "lhasa", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ลาซา – ซีหนิง (รถไฟตู้นอน สายหลังคาโลก)", en: "Lhasa – Xining (roof-of-the-world sleeper train)" },
        stops: ["lhasa"],
        along: [
          { th: "นั่งรถไฟตู้นอน Z9818 (09:25-06:08+1) ห้องนอนนุ่ม 4 ท่าน/ห้อง", en: "Soft-sleeper train Z9818 (09:25-06:08+1), 4 berths per cabin" },
          { th: "ค้างคืนบนรถไฟข้ามที่ราบสูง (ไม่รวมอาหารบนรถไฟ)", en: "Overnight on the plateau railway (train meals not included)" },
        ],
        drive: { th: "ลาซา → ซีหนิง (รถไฟตู้นอน)", en: "Lhasa → Xining (sleeper train)" },
      },
      {
        day: 8,
        title: { th: "ถึงซีหนิง – วัดถาเอ่อร์ (Kumbum) – กรุงเทพฯ", en: "Arrive Xining – Kumbum Monastery – Bangkok" },
        stops: ["kumbum", "xining"],
        along: [
          { th: "วัดถาเอ่อร์ซื่อ (Kumbum) (รวมรถกอล์ฟ) วัดสำคัญพุทธทิเบต", en: "Kumbum (Ta'er) Monastery (golf cart), a major Tibetan-Buddhist site", stopId: "kumbum" },
          { th: "สตรีทฟู้ดสุ่ยจิ่ง / ถนนคนเดินลี่เหมิง แล้วบินกลับ (VZ3691 23:40)", en: "Shuijing street food / Limeng pedestrian street, then fly home (VZ3691 23:40)" },
        ],
        drive: { th: "ซีหนิง → วัดถาเอ่อร์ → สนามบินซีหนิง", en: "Xining → Kumbum → Xining airport" },
      },
    ],
  },
  {
    id: "2UTAO-QW001",
    regionId: "shandong",
    flights: [
      {
        airports: ["BKK", "TAO"],
        airline: "Qingdao Airlines (QW)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
        note: { th: "บินตรงชิงเต่า ไม่ต้องต่อเครื่อง", en: "Direct to Qingdao, no transfer" },
      },
      {
        airports: ["TAO", "BKK"],
        airline: "Qingdao Airlines (QW)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
      },
    ],
    title: {
      th: "ชิงเต่า เว่ยไห่ เยียนไถ ดื่มเบียร์ จิบไวน์ ชิลล์ริมทะเลซานตง",
      en: "Qingdao–Weihai–Yantai: beer, wine and the Shandong coast",
    },
    oneLiner: {
      th: "บินตรงชิงเต่า เที่ยวสบายริมทะเลซานตง — ย่านเก่าเยอรมัน เบียร์ชิงเต่า ไวน์จางยู่ ขายง่ายมาก",
      en: "Direct to Qingdao for an easy Shandong-coast trip — German old town, Tsingtao beer, Changyu wine; very easy to sell.",
    },
    days: 6,
    nights: 5,
    airline: "Qingdao Airlines (QW)",
    via: { th: "บินตรงชิงเต่า", en: "direct to Qingdao" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง", en: "Easy • no high altitude" },
    bestMonths: {
      th: "เม.ย.–ต.ค. • ทะเลสวยอากาศดี พ.ค.–มิ.ย. และ ก.ย.–ต.ค.",
      en: "Apr–Oct • best sea weather May–Jun and Sep–Oct",
    },
    months: [4, 5, 6, 7, 8, 9, 10],
    highlights: [
      { th: "ย่านเมืองเก่าเยอรมัน + โบสถ์เซนต์ไมเคิล ชิงเต่า", en: "Qingdao's German old town + St Michael's Cathedral" },
      { th: "พิพิธภัณฑ์เบียร์ชิงเต่า (ลิ้มรสเบียร์สด)", en: "Tsingtao Beer Museum (with a fresh draught)" },
      { th: "ไร่ไวน์ชาโตว์จางยู่ เมืองเยียนไถ (ลิ้มรสไวน์)", en: "Changyu wine château in Yantai (with a tasting)" },
      { th: "ศาลาเผิงไหล ‘แดนเซียน’ + ถนนคบเพลิงเว่ยไห่", en: "Penglai Pavilion 'fairyland' + Weihai's Torch Road" },
    ],
    whoFor: {
      th: "ครอบครัว • คู่รัก • First-timer • สายชิลล์ริมทะเล • ผู้สูงอายุที่เดินไหว",
      en: "Families • couples • first-timers • relaxed coastal travellers • active seniors",
    },
    prep: [
      { text: { th: "บินตรง น้ำหนักกระเป๋า 20 กก./ใบ", en: "Direct flight, 20 kg checked baggage" } },
      { text: { th: "นั่งรถระหว่างเมืองซานตงพอสมควร (ชิงเต่า–เผิงไหล ~4 ชม.)", en: "Some intercity driving (Qingdao–Penglai ~4h)" } },
      { text: { th: "ลิ้มรสไวน์/เบียร์ มีน้ำผลไม้/น้ำอัดลมแทนสำหรับผู้ไม่ดื่ม", en: "Wine/beer tastings; juice/soft drinks offered for non-drinkers" } },
      { text: { th: "ลมทะเลเย็น เตรียมเสื้อกันลมบาง ๆ", en: "Cool sea breeze — pack a light windbreaker" } },
    ],
    sellingScript: {
      th: "“อยากเที่ยวจีนสบาย ๆ ริมทะเล ไม่ต่อเครื่อง? ชิงเต่า–ซานตง บินตรง ได้ทั้งย่านยุโรป เบียร์ชิงเต่า และไวน์ — เหมาะครอบครัวและ first-timer”",
      en: "\"Want an easy seaside China trip with no transfer? Direct to Qingdao — European streets, Tsingtao beer and wine; perfect for families and first-timers.\"",
    },
    crossSell: {
      th: "ตัวมาตรฐานบินตรงของซานตง — เสนอคู่กับ SC001 (4 เมือง) หรือ CZ005 (ต่อต้าเหลียน)",
      en: "The standard direct Shandong trip — pair with SC001 (four cities) or CZ005 (adds Dalian).",
    },
    customerSegments: ["family", "honeymoon", "firsttimer", "culture"],
    routeSegments: [
      { from: "qingdao", to: "penglai", mode: "drive" },
      { from: "penglai", to: "yantai", mode: "drive" },
      { from: "yantai", to: "weihai", mode: "drive" },
      { from: "weihai", to: "qingdao", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ชิงเต่า (บินตรง) – ย่านเมืองเก่าเยอรมัน", en: "Bangkok – Qingdao (direct) – German old town" },
        stops: ["qingdao"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–ชิงเต่า (QW) ไม่ต้องต่อเครื่อง", en: "Direct Suvarnabhumi–Qingdao (QW), no transfer" },
          { th: "เดินเล่นย่านเมืองเก่าเยอรมัน ถ่ายรูปโบสถ์เซนต์ไมเคิล", en: "Stroll the German old town and photograph St Michael's Cathedral", stopId: "qingdao" },
        ],
      },
      {
        day: 2,
        title: { th: "ชิงเต่า: สะพานจ้านเฉียว ปาต้ากวน พิพิธภัณฑ์เบียร์", en: "Qingdao: Zhanqiao Pier, Badaguan & the Beer Museum" },
        stops: ["qingdao"],
        along: [
          { th: "สะพานจ้านเฉียว ศาลาหุยหลาน และจัตุรัสอู่ซื่อ (May Fourth) ริมอ่าว", en: "Zhanqiao Pier, Huilan Pavilion and May Fourth Square along the bay", stopId: "qingdao" },
          { th: "ย่านปาต้ากวน ‘พิพิธภัณฑ์สถาปัตยกรรมโลก’ + พิพิธภัณฑ์เบียร์ชิงเต่า (ชิมเบียร์สด)", en: "Badaguan villa quarter + Tsingtao Beer Museum with a fresh draught", stopId: "qingdao" },
        ],
      },
      {
        day: 3,
        title: { th: "ชิงเต่า – เผิงไหล (ศาลาเผิงไหล) – เยียนไถ", en: "Qingdao – Penglai Pavilion – Yantai" },
        stops: ["penglai", "yantai"],
        along: [
          { th: "ศาลาเผิงไหล ‘แดนเซียน’ จุดชมวิวทะเลโป๋ไห่", en: "Penglai Pavilion 'fairyland' overlooking the Bohai Sea", stopId: "penglai" },
          { th: "เดินทางต่อสู่เยียนไถ เมืองริมทะเลบรรยากาศสบาย", en: "Continue to the relaxed seaside city of Yantai", stopId: "yantai" },
        ],
      },
      {
        day: 4,
        title: { th: "เยียนไถ: ไร่ไวน์จางยู่ – เว่ยไห่", en: "Yantai: Changyu wine château – Weihai" },
        stops: ["yantai", "weihai"],
        along: [
          { th: "ชาโตว์ไวน์จางยู่ ชิมไวน์และชมประวัติไวน์จีน", en: "Changyu wine château — a tasting and the story of Chinese wine", stopId: "yantai" },
          { th: "เขาเยียนไถซาน แล้วเดินทางสู่เว่ยไห่", en: "Yantai Hill, then transfer to Weihai", stopId: "yantai" },
        ],
      },
      {
        day: 5,
        title: { th: "เว่ยไห่: ถนนคบเพลิง ประตูแห่งความสุข – กลับชิงเต่า", en: "Weihai: Torch Road & Happiness Gate – back to Qingdao" },
        stops: ["weihai", "qingdao"],
        along: [
          { th: "ถนนคบเพลิงริมทะเล ประตูแห่งความสุข และประติมากรรมวาฬเกยตื้น", en: "The seaside Torch Road, the Gate of Happiness and the beached-whale sculpture", stopId: "weihai" },
          { th: "เดินทางกลับชิงเต่า", en: "Drive back to Qingdao", stopId: "qingdao" },
        ],
      },
      {
        day: 6,
        title: { th: "ชิงเต่า – กรุงเทพฯ (บินตรง)", en: "Qingdao – Bangkok (direct)" },
        stops: ["qingdao"],
        along: [
          { th: "อิสระช้อปปิ้งของฝาก ก่อนบินตรงกลับสุวรรณภูมิ", en: "Free time for souvenirs before the direct flight home to Suvarnabhumi" },
        ],
      },
    ],
  },
  {
    id: "GO1TAO-SC001",
    regionId: "shandong",
    flights: [
      {
        airports: ["BKK", "TAO"],
        airline: "Shandong Airlines (SC)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5.5 ชม. (ไฟลท์เช้ามืด)", en: "Direct ≈ 5.5h (red-eye)" },
        note: { th: "บินตรงชิงเต่า ไม่ต้องต่อเครื่อง", en: "Direct to Qingdao, no transfer" },
      },
      {
        airports: ["TAO", "BKK"],
        airline: "Shandong Airlines (SC)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
      },
    ],
    title: {
      th: "บินตรงชิงเต่า สี่เมืองสุดชิค จิบไวน์หรู ดูโรงเบียร์ (ซานตง)",
      en: "Direct Qingdao: four chic Shandong cities, wine & beer",
    },
    oneLiner: {
      th: "ราคาเริ่มต้นย่อมเยา บินตรงเก็บครบ 4 เมืองซานตง ชิงเต่า–เยียนไถ–เผิงไหล–เว่ยไห่ — ขายง่ายงบไม่บาน",
      en: "Value-priced direct flight covering all four Shandong cities — Qingdao, Yantai, Penglai, Weihai; an easy budget sell.",
    },
    days: 6,
    nights: 4,
    airline: "Shandong Airlines (SC)",
    via: { th: "บินตรงชิงเต่า", en: "direct to Qingdao" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง", en: "Easy • no high altitude" },
    bestMonths: {
      th: "ก.ค.–ต.ค. • ทะเลและอากาศดีช่วงปลายฤดูร้อน–ใบไม้ร่วง",
      en: "Jul–Oct • great sea weather from late summer into autumn",
    },
    months: [7, 8, 9, 10],
    highlights: [
      { th: "เก็บครบ 4 เมืองซานตงในทริปเดียว", en: "All four Shandong cities in one trip" },
      { th: "สะพานจ้านเฉียว + ย่านปาต้ากวน ‘พิพิธภัณฑ์สถาปัตยกรรมนานาชาติ’", en: "Zhanqiao Pier + Badaguan, the 'museum of world architecture'" },
      { th: "ไร่ไวน์จางยู่ + พิพิธภัณฑ์เบียร์ชิงเต่า", en: "Changyu wine château + Tsingtao Beer Museum" },
      { th: "ประติมากรรมวาฬเกยตื้น + ประตูแห่งโชคลาภเว่ยไห่", en: "The beached-whale sculpture + Weihai's Gate of Happiness" },
    ],
    whoFor: {
      th: "ครอบครัวงบประหยัด • First-timer • คู่รัก • กรุ๊ปเหมาราคาคุ้ม",
      en: "Budget families • first-timers • couples • value group charters",
    },
    prep: [
      { text: { th: "ไฟลท์ขาไปออกเช้ามืด (~02:25) บรีฟลูกค้าเรื่องเวลานอน", en: "Outbound is a red-eye (~02:25) — brief clients on sleep" }, warn: true },
      { text: { th: "6 วัน 4 คืน แน่นกว่าตัว QW เล็กน้อย", en: "6 days/4 nights — a touch tighter than the QW version" } },
      { text: { th: "ไม่มีอาหารบนเครื่องขาไป เตรียมของว่าง", en: "No meal on the outbound flight — bring a snack" } },
      { text: { th: "ลมทะเลเย็น เตรียมเสื้อกันลม", en: "Cool sea breeze — pack a windbreaker" } },
    ],
    sellingScript: {
      th: "“งบไม่เยอะแต่อยากบินตรงชิงเต่าให้ครบ 4 เมือง? ตัวนี้คุ้มสุด เก็บเบียร์ ไวน์ ทะเล และย่านยุโรปครบในทริปเดียว”",
      en: "\"On a budget but want a direct Qingdao trip with all four cities? This is the value pick — beer, wine, sea and European streets in one go.\"",
    },
    crossSell: {
      th: "ตัวคุ้มราคาของซานตง — อัปเซลเป็น QW001 (สบายกว่า) หรือ CZ005 (ต่อต้าเหลียน)",
      en: "The Shandong value option — upsell to QW001 (more relaxed) or CZ005 (adds Dalian).",
    },
    customerSegments: ["family", "firsttimer", "culture"],
    routeSegments: [
      { from: "qingdao", to: "penglai", mode: "drive" },
      { from: "penglai", to: "yantai", mode: "drive" },
      { from: "yantai", to: "weihai", mode: "drive" },
      { from: "weihai", to: "qingdao", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (ไฟลท์เช้ามืด) – ชิงเต่า – ย่านเก่าเยอรมัน", en: "Bangkok (red-eye) – Qingdao – German old town" },
        stops: ["qingdao"],
        along: [
          { th: "บินตรงเช้ามืดสุวรรณภูมิ–ชิงเต่า (SC) ถึงช่วงเช้า", en: "Red-eye direct Suvarnabhumi–Qingdao (SC), arriving in the morning" },
          { th: "สะพานจ้านเฉียว ย่านปาต้ากวน และโบสถ์เซนต์ไมเคิล", en: "Zhanqiao Pier, the Badaguan quarter and St Michael's Cathedral", stopId: "qingdao" },
        ],
      },
      {
        day: 2,
        title: { th: "ชิงเต่า – เผิงไหล (ศาลาเผิงไหล) – เยียนไถ", en: "Qingdao – Penglai Pavilion – Yantai" },
        stops: ["penglai", "yantai"],
        along: [
          { th: "พิพิธภัณฑ์เบียร์ชิงเต่า (ชิมเบียร์สด) ก่อนออกเดินทาง", en: "Tsingtao Beer Museum (fresh draught) before setting off", stopId: "qingdao" },
          { th: "ศาลาเผิงไหล ‘แดนเซียน’ แล้วต่อสู่เยียนไถ", en: "Penglai Pavilion 'fairyland', then on to Yantai", stopId: "penglai" },
        ],
      },
      {
        day: 3,
        title: { th: "เยียนไถ: ไร่ไวน์จางยู่ – เว่ยไห่", en: "Yantai: Changyu wine château – Weihai" },
        stops: ["yantai", "weihai"],
        along: [
          { th: "ชาโตว์ไวน์จางยู่ ชิมไวน์ชื่อดังของจีน", en: "Changyu wine château — a tasting of China's famous wine", stopId: "yantai" },
          { th: "เว่ยไห่ ประตูแห่งความสุข และประติมากรรมวาฬเกยตื้น", en: "Weihai's Gate of Happiness and the beached-whale sculpture", stopId: "weihai" },
        ],
      },
      {
        day: 4,
        title: { th: "เว่ยไห่ – กลับชิงเต่า", en: "Weihai – back to Qingdao" },
        stops: ["qingdao"],
        along: [
          { th: "เดินเล่นริมทะเลเว่ยไห่ ก่อนเดินทางกลับชิงเต่า", en: "A last Weihai seafront walk before returning to Qingdao", stopId: "qingdao" },
          { th: "จัตุรัสอู่ซื่อ (May Fourth) และศูนย์เรือใบโอลิมปิก", en: "May Fourth Square and the Olympic Sailing Center", stopId: "qingdao" },
        ],
      },
      {
        day: 5,
        title: { th: "ชิงเต่า – กรุงเทพฯ (บินตรง)", en: "Qingdao – Bangkok (direct)" },
        stops: ["qingdao"],
        along: [
          { th: "อิสระช้อปปิ้ง ก่อนบินตรงกลับสุวรรณภูมิ", en: "Free time for shopping before the direct flight home" },
        ],
      },
      {
        day: 6,
        title: { th: "ถึงกรุงเทพฯ", en: "Arrive Bangkok" },
        along: [
          { th: "เดินทางถึงสุวรรณภูมิโดยสวัสดิภาพ", en: "Arrive safely at Suvarnabhumi" },
        ],
      },
    ],
  },
  {
    id: "GO1TAO-CZ005",
    regionId: "shandong",
    flights: [
      {
        airports: ["BKK", "CAN", "TAO"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
      },
      {
        airports: ["DLC", "CAN", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 9h incl. Guangzhou connection" },
        note: { th: "ขากลับบินจากต้าเหลียน", en: "Returns from Dalian" },
      },
    ],
    title: {
      th: "ชิงเต่า–ต้าเหลียน ล่องเรือข้ามอ่าวโป๋ไห่ เยียนไถ หลี่ซุ่น",
      en: "Qingdao–Dalian: overnight Bohai ferry, Yantai & Lüshun",
    },
    oneLiner: {
      th: "สองมณฑลในทริปเดียว ซานตง+เหลียวหนิง เด่นที่ ‘ล่องเรือข้ามอ่าวโป๋ไห่’ ค้างคืนจากเยียนไถสู่ต้าเหลียน",
      en: "Two provinces in one trip — Shandong + Liaoning — with an overnight Bohai-crossing ferry from Yantai to Dalian.",
    },
    days: 6,
    nights: 5,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านกว่างโจว", en: "via Guangzhou" },
    difficulty: "moderate",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง (มีคืนบนเรือ)", en: "Easy • no altitude (one night on a ferry)" },
    bestMonths: {
      th: "ก.ย.–ต.ค. • ใบไม้เปลี่ยนสีและอากาศดีที่สุด",
      en: "Sep–Oct • autumn colours and the best weather",
    },
    months: [9, 10],
    highlights: [
      { th: "ล่องเรือข้ามอ่าวโป๋ไห่ เยียนไถ–ต้าเหลียน (ค้างคืนบนเรือ)", en: "Overnight Bohai-crossing ferry, Yantai–Dalian" },
      { th: "ต้าเหลียน จัตุรัสซิงไห่ รถรางร้อยปี ‘เวนิสตะวันออก’", en: "Dalian — Xinghai Square, century-old trams, 'Eastern Venice'" },
      { th: "หลี่ซุ่น (พอร์ต อาร์เธอร์) สถานีรถไฟรัสเซีย + พิพิธภัณฑ์", en: "Lüshun (Port Arthur) Russian railway station + museum" },
      { th: "ชิงเต่า–เว่ยไห่–เยียนไถ เบียร์ชิงเต่า ย่านเก่าเยอรมัน", en: "Qingdao–Weihai–Yantai, Tsingtao beer, German old town" },
    ],
    whoFor: {
      th: "Repeater ซานตง • คู่รัก • สายประสบการณ์แปลกใหม่ • คนชอบเมืองท่า-ประวัติศาสตร์",
      en: "Shandong repeaters • couples • experience-seekers • port-and-history fans",
    },
    prep: [
      { text: { th: "ค้างคืนบนเรือเฟอร์รี่ (เตียง 2 ชั้น) ต้องยกกระเป๋าเอง — บรีฟล่วงหน้า", en: "One night on the ferry (bunk beds), carry own bags — brief in advance" }, warn: true },
      { text: { th: "เรือออก ~22:20 ถึงต้าเหลียน ~06:00 เตรียมกระเป๋าใบเล็ก 1 คืน", en: "Ferry departs ~22:20, arrives Dalian ~06:00 — pack a small overnight bag" } },
      { text: { th: "ขาไปเข้าชิงเต่า ขากลับออกต้าเหลียน (เส้นทางไม่วน)", en: "Enters at Qingdao, departs from Dalian (one-way routing)" } },
      { text: { th: "ลมทะเลเย็นช่วงใบไม้ร่วง เตรียมเสื้อกันหนาว", en: "Cool autumn sea air — pack warm layers" } },
    ],
    sellingScript: {
      th: "“อยากได้ทริปจีนแปลกใหม่? นอนบนเรือข้ามอ่าวโป๋ไห่หนึ่งคืน ตื่นมาเที่ยวต้าเหลียน เก็บทั้งซานตงและเหลียวหนิงในทริปเดียว”",
      en: "\"Want something different? Sleep on an overnight Bohai ferry and wake up in Dalian — covering both Shandong and Liaoning in one trip.\"",
    },
    crossSell: {
      th: "ตัวเจาะลึก/แปลกใหม่ของซานตง — เสนอกับ repeater ที่เคยไป QW001/SC001 แล้ว",
      en: "The novel, deeper Shandong option — for repeaters who've done QW001/SC001.",
    },
    customerSegments: ["repeater", "honeymoon", "culture", "bucketlist"],
    routeSegments: [
      { from: "qingdao", to: "weihai", mode: "drive" },
      { from: "weihai", to: "yantai", mode: "drive" },
      { from: "yantai", to: "dalian", mode: "train" },
      { from: "dalian", to: "lvshun", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – กว่างโจว – ชิงเต่า", en: "Bangkok – Guangzhou – Qingdao" },
        stops: ["qingdao"],
        along: [
          { th: "บินสุวรรณภูมิ–กว่างโจว ต่อเครื่องสู่ชิงเต่า (CZ)", en: "Fly Suvarnabhumi–Guangzhou, connect to Qingdao (CZ)" },
          { th: "ถึงชิงเต่า เดินเล่นย่านเมืองเก่าเยอรมัน", en: "Arrive Qingdao and stroll the German old town", stopId: "qingdao" },
        ],
      },
      {
        day: 2,
        title: { th: "ชิงเต่า: จ้านเฉียว ปาต้ากวน เบียร์ชิงเต่า – เว่ยไห่", en: "Qingdao: Zhanqiao, Badaguan, Tsingtao beer – Weihai" },
        stops: ["qingdao", "weihai"],
        along: [
          { th: "สะพานจ้านเฉียว ย่านปาต้ากวน โบสถ์เซนต์ไมเคิล และพิพิธภัณฑ์เบียร์ชิงเต่า", en: "Zhanqiao Pier, Badaguan, St Michael's and the Tsingtao Beer Museum", stopId: "qingdao" },
          { th: "เดินทางสู่เว่ยไห่ ถนนคบเพลิงริมทะเล", en: "Transfer to Weihai and its seaside Torch Road", stopId: "weihai" },
        ],
      },
      {
        day: 3,
        title: { th: "เว่ยไห่ – เยียนไถ – ล่องเรือข้ามอ่าวโป๋ไห่ (ค้างคืนบนเรือ)", en: "Weihai – Yantai – overnight Bohai ferry" },
        stops: ["yantai", "dalian"],
        along: [
          { th: "ประตูแห่งความสุขเว่ยไห่ แล้วสู่เยียนไถ ชาโตว์ไวน์จางยู่", en: "Weihai's Gate of Happiness, then Yantai and the Changyu wine château", stopId: "yantai" },
          { th: "ลงเรือเฟอร์รี่ข้ามอ่าวโป๋ไห่ เยียนไถ–ต้าเหลียน ออก ~22:20 ค้างคืนบนเรือ", en: "Board the Bohai-crossing ferry Yantai–Dalian (~22:20 departure), overnight aboard", stopId: "yantai" },
        ],
      },
      {
        day: 4,
        title: { th: "ถึงต้าเหลียน – จัตุรัสซิงไห่ – รถรางร้อยปี", en: "Arrive Dalian – Xinghai Square – heritage trams" },
        stops: ["dalian"],
        along: [
          { th: "เรือถึงต้าเหลียน ~06:00 เที่ยวจัตุรัสซิงไห่และถนนรัสเซีย ‘เวนิสตะวันออก’", en: "Ferry arrives Dalian ~06:00 — Xinghai Square and the Russian street, the 'Eastern Venice'", stopId: "dalian" },
          { th: "นั่งรถรางร้อยปี ชมเมืองท่าต้าเหลียน", en: "Ride the century-old trams through the port city" },
        ],
      },
      {
        day: 5,
        title: { th: "ต้าเหลียน – หลี่ซุ่น (พอร์ต อาร์เธอร์)", en: "Dalian – Lüshun (Port Arthur)" },
        stops: ["lvshun", "dalian"],
        along: [
          { th: "หลี่ซุ่น สถานีรถไฟรัสเซียและพิพิธภัณฑ์ประวัติศาสตร์", en: "Lüshun's Russian railway station and history museum", stopId: "lvshun" },
          { th: "กลับต้าเหลียน อิสระริมอ่าว", en: "Return to Dalian for free time by the bay", stopId: "dalian" },
        ],
      },
      {
        day: 6,
        title: { th: "ต้าเหลียน – กว่างโจว – กรุงเทพฯ", en: "Dalian – Guangzhou – Bangkok" },
        stops: ["dalian"],
        along: [
          { th: "บินต้าเหลียน–กว่างโจว ต่อเครื่องกลับสุวรรณภูมิ (CZ)", en: "Fly Dalian–Guangzhou, connect home to Suvarnabhumi (CZ)" },
        ],
      },
    ],
  },
  {
    id: "2USHE-CZ001",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "CAN", "SHE"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 10 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 10h incl. Guangzhou connection" },
        hops: [
          { from: "BKK", to: "CAN", flightNo: "CZ8080", dep: "12:45", arr: "16:40" },
          { from: "CAN", to: "SHE", flightNo: "CZ3640", dep: "18:35", arr: "22:30" },
        ],
      },
      {
        airports: ["SHE", "CAN", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 10 ชม. รวมต่อเครื่องกว่างโจว", en: "≈ 10h incl. Guangzhou connection" },
        hops: [
          { from: "SHE", to: "CAN", flightNo: "CZ6367", dep: "10:00", arr: "14:25" },
          { from: "CAN", to: "BKK", flightNo: "CZ8019", dep: "16:55", arr: "18:55" },
        ],
      },
    ],
    title: {
      th: "เสิ่นหยาง ต้าเหลียน ผานจิ่น ตานตง ตามรอยแมนจู สู่ชายแดนเกาหลีเหนือ",
      en: "Shenyang–Dalian–Panjin–Dandong: Manchu trail to the N. Korea border",
    },
    oneLiner: {
      th: "เหลียวหนิงครบรส บ้านเกิดราชวงศ์ชิง หาดแดงผานจิ่น และชายแดนเกาหลีเหนือริมแม่น้ำยาลู — เส้นทางที่คนไทยยังไปไม่เยอะ",
      en: "Liaoning all-in — the Qing cradle, Panjin's Red Beach and the North Korea border on the Yalu River; a route few Thais have done.",
    },
    days: 6,
    nights: 5,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านกว่างโจว", en: "via Guangzhou" },
    difficulty: "moderate",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง (นั่งรถระหว่างเมืองนาน)", en: "Easy • no altitude (long intercity drives)" },
    bestMonths: {
      th: "ก.ย.–ต.ค. • หาดแดงผานจิ่นแดงสุดปลายก.ย.–ต้นต.ค.",
      en: "Sep–Oct • Panjin's Red Beach peaks late Sep–early Oct",
    },
    months: [9, 10],
    highlights: [
      { th: "หาดแดงผานจิ่น ปรากฏการณ์ทุ่งชะครามสีแดง (หน้าต่างสั้น)", en: "Panjin Red Beach, the crimson seepweed marsh (short window)" },
      { th: "ด่านชายแดนจีน–เกาหลีเหนือ ล่องเรือแม่น้ำยาลู สะพานหักตานตง", en: "China–N.Korea border, Yalu River cruise, Dandong's broken bridge" },
      { th: "พระราชวังเสิ่นหยางกู้กง บ้านเกิดราชวงศ์ชิง", en: "Mukden Palace, the Qing dynasty's birthplace" },
      { th: "ต้าเหลียน ‘เวนิสตะวันออก’ จัตุรัสซิงไห่ + ถ้ำน้ำเปิ่นซี", en: "Dalian's 'Eastern Venice', Xinghai Square + Benxi Water Cave" },
    ],
    whoFor: {
      th: "สายประวัติศาสตร์/แมนจู • Repeater • สายถ่ายรูปหาดแดง • คนอยากได้ exotic ที่ปลอดภัย",
      en: "History/Manchu fans • repeaters • Red-Beach photographers • safe-but-exotic seekers",
    },
    prep: [
      { text: { th: "หาดแดงเป็นปรากฏการณ์ธรรมชาติ สีขึ้นกับสภาพอากาศ ปิดการขายเร็ว", en: "Red Beach is a natural phenomenon — colour depends on weather; sell early" }, warn: true },
      { text: { th: "ด่านชายแดนเปิด-ปิดตามดุลยพินิจราชการ อาจปรับโปรแกรม", en: "The border crossing opens at official discretion — itinerary may adjust" }, warn: true },
      { text: { th: "นั่งรถระหว่างเมืองนาน (ตานตง–ต้าเหลียน ~4 ชม.)", en: "Long intercity drives (Dandong–Dalian ~4h)" } },
      { text: { th: "อากาศเย็นช่วงใบไม้ร่วง เตรียมเสื้อกันหนาว", en: "Cool autumn weather — pack warm layers" } },
    ],
    sellingScript: {
      th: "“อยากได้จีนที่ไม่ซ้ำใคร? ตงเป่ยพาไปยืนริมแม่น้ำยาลูมองเกาหลีเหนือ เดินพระราชวังต้นราชวงศ์ชิง และเก็บหาดแดงผานจิ่นที่มีปีละครั้ง”",
      en: "\"Want a China no one else has done? Dongbei takes you to the Yalu River facing North Korea, the Qing palace, and Panjin's once-a-year Red Beach.\"",
    },
    crossSell: {
      th: "ประตูสู่ภาคตะวันออกเฉียงเหนือ — เสนอคู่กับทริปฮาร์บินหน้าหนาว (CA006/CA001)",
      en: "The gateway to the Northeast — pair with the winter Harbin trips (CA006/CA001).",
    },
    customerSegments: ["culture", "photography", "repeater", "adventure"],
    routeSegments: [
      { from: "shenyang", to: "benxi", mode: "drive" },
      { from: "benxi", to: "dandong", mode: "drive" },
      { from: "dandong", to: "dalian", mode: "drive" },
      { from: "dalian", to: "panjin", mode: "drive" },
      { from: "panjin", to: "shenyang", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – กว่างโจว – เสิ่นหยาง", en: "Bangkok – Guangzhou – Shenyang" },
        stops: ["shenyang"],
        along: [
          { th: "บินสุวรรณภูมิ–กว่างโจว (CZ8080) ต่อเครื่องสู่เสิ่นหยาง (CZ3640)", en: "Fly Suvarnabhumi–Guangzhou (CZ8080), connect to Shenyang (CZ3640)" },
          { th: "ถึงเสิ่นหยาง ‘มุกเดน’ บ้านเกิดราชวงศ์ชิงช่วงค่ำ เข้าที่พัก", en: "Arrive Shenyang ('Mukden'), the Qing cradle, in the evening", stopId: "shenyang" },
        ],
        hotel: { name: "SHENYANG HOLIDAY INN EXPRESS", star: 4, cityId: "shenyang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "พระราชวังเสิ่นหยางกู้กง – ถ้ำน้ำเปิ่นซี – ตานตง", en: "Mukden Palace – Benxi Water Cave – Dandong" },
        stops: ["shenyang"],
        along: [
          { th: "พระราชวังเสิ่นหยางกู้กง วังหลวงราชวงศ์ชิงตอนต้น", en: "Mukden Imperial Palace, the early-Qing court", stopId: "shenyang" },
          { th: "ถ้ำน้ำเปิ่นซี ล่องเรือชมถ้ำหินปูนแม่น้ำใต้ดิน", en: "Benxi Water Cave — boat through the underground limestone river", stopId: "benxi" },
          { th: "เดินทางสู่ตานตง ชมถนนโบราณอันตง", en: "Continue to Dandong, stroll the Andong ancient street", stopId: "dandong" },
        ],
        hotel: { name: "DANDONG RIVER PEARL ISLAND RIVERSIDE HOTEL", star: 4, cityId: "dandong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "สะพานหักยาลู – ชายแดนเกาหลีเหนือ – ต้าเหลียน", en: "Broken Bridge – N. Korea border – Dalian" },
        stops: ["dandong", "dalian"],
        along: [
          { th: "สะพานหักต้วนเฉียว และล่องเรือแม่น้ำยาลูเลียบชายแดนเกาหลีเหนือ", en: "The broken Yalu bridge and a Yalu River cruise along the N. Korea border", stopId: "dandong" },
          { th: "เกาะฉวนเฉียว + ชมการแสดงนาฏกรรมเกาหลีเหนือ", en: "Chuanqiao island + a North Korean dance performance" },
          { th: "สู่ต้าเหลียน นั่งรถรางเมืองเก่า และนครเวนิสตะวันออก", en: "On to Dalian — heritage tram ride and the 'Eastern Venice'", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN ORIENTAL INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "เขาดอกบัวเหลียนฮัว – ท่าเรือประมง – จัตุรัสซิงไห่ – ผานจิ่น", en: "Lianhua Mountain – fishing wharf – Xinghai Square – Panjin" },
        stops: ["dalian", "panjin"],
        along: [
          { th: "จุดชมวิวเขาเหลียนฮัว (เขาดอกบัว) และวิวสะพานซิงไห่", en: "Lianhua (Lotus) Mountain viewpoint and the Xinghai Bay Bridge view", stopId: "dalian" },
          { th: "อ่าวหลิงเจียว ท่าเรือประมงต้าเหลียน และจัตุรัสซิงไห่", en: "Lingjiao Bay, Dalian fishing wharf and Xinghai Square", stopId: "dalian" },
          { th: "เดินทางสู่ผานจิ่น เมืองพื้นที่ชุ่มน้ำปากแม่น้ำเหลียวเหอ", en: "Continue to Panjin, the Liao River wetland city", stopId: "panjin" },
        ],
        hotel: { name: "PANJIN XIANGHAI AVENUE INTERCITY HOTEL", star: 4, cityId: "panjin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "หาดแดงผานจิ่น – เสิ่นหยาง – วัดเซิงซื่อ – ตลาดเหลาเป่ย", en: "Panjin Red Beach – Shenyang – Shengshi Temple – Laobei market" },
        stops: ["panjin", "shenyang"],
        along: [
          { th: "หาดแดงผานจิ่น ทุ่งชะครามแดงสุดลูกหูลูกตา (ปลายก.ย.–ต้นต.ค.)", en: "Panjin Red Beach — vast crimson seepweed marsh (late Sep–early Oct)", stopId: "panjin" },
          { th: "กลับเสิ่นหยาง สักการะวัดเซิงซื่อ และเดินตลาดเก่าเหลาเป่ย", en: "Back to Shenyang for Shengshi Temple and the Laobei old market", stopId: "shenyang" },
        ],
        hotel: { name: "SHENYANG HOLIDAY INN EXPRESS", star: 4, cityId: "shenyang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "เสิ่นหยาง – กว่างโจว – กรุงเทพฯ", en: "Shenyang – Guangzhou – Bangkok" },
        stops: ["shenyang"],
        along: [
          { th: "บินเสิ่นหยาง–กว่างโจว (CZ6367) ต่อเครื่องกลับกรุงเทพฯ (CZ8019)", en: "Fly Shenyang–Guangzhou (CZ6367), connect home to Bangkok (CZ8019)" },
        ],
      },
    ],
  },
  {
    id: "GO1HRB-CA006",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "PEK", "HRB"],
        airline: "Air China (CA)",
        direction: "outbound",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องปักกิ่ง (ค้างคืนบนเครื่อง)", en: "≈ 11h incl. Beijing connection (red-eye)" },
        hops: [
          { from: "BKK", to: "PEK", flightNo: "CA960", dep: "19:30", arr: "01:05+1" },
          { from: "PEK", to: "HRB", flightNo: "CA1621", dep: "06:50", arr: "08:45" },
        ],
      },
      {
        airports: ["HRB", "PEK", "BKK"],
        airline: "Air China (CA)",
        direction: "return",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องปักกิ่ง", en: "≈ 11h incl. Beijing connection" },
        hops: [
          { from: "HRB", to: "PEK", flightNo: "CA1640", dep: "08:30", arr: "10:35" },
          { from: "PEK", to: "BKK", flightNo: "CA959", dep: "13:40", arr: "18:05" },
        ],
      },
    ],
    title: {
      th: "ฮาร์บิน Winter Wonderland หมู่บ้านหิมะ คฤหาสน์วอลการ์ เทศกาลน้ำแข็ง",
      en: "Harbin Winter Wonderland: Snow Town, Volga Manor & Ice Festival",
    },
    oneLiner: {
      th: "ทริปหน้าหนาวสุดว้าว แดนหิมะตงเป่ย หมู่บ้านหิมะ เทศกาลแกะสลักน้ำแข็งที่ใหญ่ที่สุดในโลก — สินค้าขายดีหน้าไฮซีซัน",
      en: "A show-stopping winter trip — Dongbei snowscapes, Snow Town and the world's biggest ice festival; a peak-season bestseller.",
    },
    days: 7,
    nights: 5,
    airline: "Air China (CA)",
    via: { th: "ผ่านปักกิ่ง", en: "via Beijing" },
    difficulty: "moderate",
    altitudeNote: { th: "หนาวจัด -20 ถึง -30°C • เตรียมชุดกันหนาว", en: "Extreme cold -20 to -30°C • full winter gear" },
    bestMonths: {
      th: "ปลายธ.ค.–ม.ค. • เทศกาลน้ำแข็งและหิมะเต็มที่",
      en: "Late Dec–Jan • full ice festival and snow",
    },
    months: [12, 1, 2],
    highlights: [
      { th: "เทศกาลแกะสลักน้ำแข็งฮาร์บิน (ใหญ่ที่สุดในโลก)", en: "Harbin Ice & Snow Festival (the world's largest)" },
      { th: "หมู่บ้านหิมะ (Snow Town) ‘เห็ดหิมะ’ และพาเหรดราตรี", en: "Snow Town with 'snow mushrooms' and the night parade" },
      { th: "คฤหาสน์วอลการ์ + โบสถ์เซนต์โซเฟีย กลิ่นอายรัสเซีย", en: "Volga Manor + St Sophia Cathedral, Russian flavour" },
      { th: "เมืองรถไฟเหิงเต้าเหอจื่อ โรงเก็บหัวรถจักรทรงพัด", en: "Hengdaohezi railway town, the fan-shaped locomotive shed" },
    ],
    whoFor: {
      th: "ครอบครัวอยากเล่นหิมะ • คู่รัก • สายถ่ายรูปหน้าหนาว • Bucket-list เทศกาลน้ำแข็ง",
      en: "Families wanting snow • couples • winter photographers • ice-festival bucket-listers",
    },
    prep: [
      { text: { th: "หนาวจัด -20 ถึง -30°C ต้องมีชุดกันหนาวจริงจัง รองเท้า/ถุงมือ/แผ่นทำความร้อน", en: "Extreme cold -20 to -30°C — serious winter gear, boots/gloves/heat packs" }, warn: true },
      { text: { th: "ที่พักในหมู่บ้านหิมะเรียบง่าย ต้องหิ้วกระเป๋าเอง 1 คืน", en: "Snow Town lodging is basic; carry a small overnight bag" } },
      { text: { th: "เปลี่ยนเครื่อง+โหลดกระเป๋าใหม่ที่ปักกิ่ง", en: "Connection at Beijing requires re-checking baggage" } },
      { text: { th: "ขับรถระหว่างเมืองยาวบนถนนหิมะ (ฮาร์บิน–เหิงเต้าเหอจื่อ ~4.5 ชม.)", en: "Long drives on snowy roads (Harbin–Hengdaohezi ~4.5h)" } },
    ],
    sellingScript: {
      th: "“อยากเห็นหิมะจริง ๆ สักครั้งในชีวิต? ฮาร์บินคือคำตอบ เดินในเทศกาลน้ำแข็งที่ใหญ่ที่สุดในโลก และนอนในหมู่บ้านหิมะเหมือนเทพนิยาย”",
      en: "\"Want to see real snow once in your life? Harbin is it — walk the world's biggest ice festival and sleep in a fairy-tale Snow Town.\"",
    },
    crossSell: {
      th: "ตัวพรีเมียมหน้าหนาว (มีคฤหาสน์วอลการ์) — คู่กับ CA001 ตัวมาตรฐาน",
      en: "The premium winter option (adds Volga Manor) — pair with CA001, the standard.",
    },
    customerSegments: ["family", "honeymoon", "photography", "bucketlist"],
    routeSegments: [
      { from: "harbin", to: "hengdaohezi", mode: "drive" },
      { from: "hengdaohezi", to: "mudanjiang", mode: "drive" },
      { from: "mudanjiang", to: "snowtown", mode: "drive" },
      { from: "snowtown", to: "harbin", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ปักกิ่ง", en: "Bangkok – Beijing" },
        stops: [],
        along: [
          { th: "บินสุวรรณภูมิ–ปักกิ่งแคปิตอล (CA960 19:30-01:05+1) ค้างคืนบนเครื่อง/รอต่อเครื่อง", en: "Fly Suvarnabhumi–Beijing Capital (CA960 19:30-01:05+1), red-eye / airport connection" },
        ],
      },
      {
        day: 2,
        title: { th: "ปักกิ่ง – ฮาร์บิน – โบสถ์เซนต์โซเฟีย – ถนนจงยาง", en: "Beijing – Harbin – St Sophia – Central Street" },
        stops: ["harbin"],
        along: [
          { th: "บินต่อปักกิ่ง–ฮาร์บิน (CA1621 06:50-08:45)", en: "Connect Beijing–Harbin (CA1621 06:50-08:45)" },
          { th: "จัตุรัสมหาวิหารเซนต์โซเฟีย ถนนคนเดินจงยาง (แถมไอติม) ตรอกเซียวเข่อ", en: "St Sophia Cathedral square, Central Street (free ice cream) and Xiaoke lane", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "เมืองรถไฟเหิงเต้าเหอจื่อ – มู่ตานเจียง", en: "Hengdaohezi railway town – Mudanjiang" },
        stops: ["hengdaohezi", "mudanjiang"],
        along: [
          { th: "โรงเก็บหัวรถจักรทรงพัด + โบสถ์ออร์โธดอกซ์ (ถ่ายรูปด้านนอก)", en: "The fan-shaped locomotive shed + the Orthodox church (photo stop)", stopId: "hengdaohezi" },
          { th: "ถนนรัสเซีย และหมู่บ้านภาพเขียนสีน้ำมัน", en: "The Russian street and the oil-painting village", stopId: "hengdaohezi" },
        ],
        drive: { th: "ฮาร์บิน → เหิงเต้าเหอจื่อ → มู่ตานเจียง", en: "Harbin → Hengdaohezi → Mudanjiang" },
        hotel: { name: "MUDANJIANG SUNNY DATE HOTEL", star: 4, cityId: "mudanjiang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "หมู่บ้านหิมะ (Snow Town) – พาเหรดหิมะราตรี", en: "Snow Town – night snow parade" },
        stops: ["snowtown"],
        along: [
          { th: "หมู่บ้านหิมะ ป้ายหินหมู่บ้าน ไปรษณีย์หิมะ บ้านแห่งความฝัน", en: "Snow Town — the village stone, snow post office and 'Dream Home'", stopId: "snowtown" },
          { th: "ถนนคนเดินเสน่ห์หิมะ และขบวนพาเหรดหิมะราตรี", en: "The snow-charm street and the night snow parade", stopId: "snowtown" },
        ],
        drive: { th: "มู่ตานเจียง → หมู่บ้านหิมะ", en: "Mudanjiang → Snow Town" },
        hotel: { name: "SNOWTOWN FOLK GUESTHOUSE", star: 3, cityId: "snowtown", note: { th: "ที่พักภายในหมู่บ้านหิมะ", en: "lodging inside Snow Town" } },
      },
      {
        day: 5,
        title: { th: "ภาพเขียนหิมะสิบลี้ – กลับฮาร์บิน", en: "Ten-li snow painting – back to Harbin" },
        stops: ["harbin"],
        along: [
          { th: "ป้ายหินหมู่บ้านหิมะ ภาพเขียนหิมะสิบลี้ และม้าหมุนล้อยาง", en: "The Snow Town stone marker, the 'ten-li snow painting' ridge and the tyre carousel", stopId: "snowtown" },
        ],
        drive: { th: "หมู่บ้านหิมะ → ฮาร์บิน", en: "Snow Town → Harbin" },
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "คฤหาสน์วอลการ์ – เกาะพระอาทิตย์ – เทศกาลน้ำแข็ง", en: "Volga Manor – Sun Island – Ice & Snow Festival" },
        stops: ["harbin"],
        along: [
          { th: "คฤหาสน์วอลการ์ โบสถ์เซนต์นิโคลัส ห้องวอดก้า หอศิลป์เปตรอฟ", en: "Volga Manor, St Nicholas church, the vodka hall and Petrov gallery", stopId: "harbin" },
          { th: "นิทรรศการแกะสลักหิมะ เกาะพระอาทิตย์ + เทศกาลน้ำแข็งฮาร์บิน", en: "The Sun Island snow-sculpture expo + the Harbin Ice & Snow Festival", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ฮาร์บิน – ปักกิ่ง – กรุงเทพฯ", en: "Harbin – Beijing – Bangkok" },
        stops: ["harbin"],
        along: [
          { th: "บินฮาร์บิน–ปักกิ่ง (CA1640) ต่อเครื่องกลับสุวรรณภูมิ (CA959)", en: "Fly Harbin–Beijing (CA1640), connect home to Suvarnabhumi (CA959)" },
        ],
      },
    ],
  },
  {
    id: "2UHRB-CA001",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "PEK", "HRB"],
        airline: "Air China (CA)",
        direction: "outbound",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องปักกิ่ง (ค้างคืนบนเครื่อง)", en: "≈ 11h incl. Beijing connection (red-eye)" },
        hops: [
          { from: "BKK", to: "PEK", flightNo: "CA960", dep: "19:30", arr: "01:05+1" },
          { from: "PEK", to: "HRB", flightNo: "CA1621", dep: "06:50", arr: "08:45" },
        ],
      },
      {
        airports: ["HRB", "PEK", "BKK"],
        airline: "Air China (CA)",
        direction: "return",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องปักกิ่ง", en: "≈ 11h incl. Beijing connection" },
        hops: [
          { from: "HRB", to: "PEK", flightNo: "CA1640", dep: "08:30", arr: "10:35" },
          { from: "PEK", to: "BKK", flightNo: "CA959", dep: "14:00", arr: "18:05" },
        ],
      },
    ],
    title: {
      th: "ตะลุยฮาร์บิน เช็คอินหมู่บ้านหิมะ ท้าความเย็นติดลบ ซบอาณาจักรน้ำแข็ง",
      en: "Harbin & Snow Town: take on the sub-zero ice kingdom",
    },
    oneLiner: {
      th: "ฮาร์บินหน้าหนาวตัวมาตรฐาน หมู่บ้านหิมะ ถนนบาร็อค หมู่บ้านรัสเซีย และเทศกาลน้ำแข็ง — ราคาเข้าถึงง่ายกว่า",
      en: "The standard winter Harbin trip — Snow Town, Baroque Street, the Russian village and the ice festival; a more accessible price.",
    },
    days: 7,
    nights: 5,
    airline: "Air China (CA)",
    via: { th: "ผ่านปักกิ่ง", en: "via Beijing" },
    difficulty: "moderate",
    altitudeNote: { th: "หนาวจัด -20 ถึง -30°C • เตรียมชุดกันหนาว", en: "Extreme cold -20 to -30°C • full winter gear" },
    bestMonths: {
      th: "ปลายธ.ค.–ม.ค. • เทศกาลน้ำแข็งและหิมะเต็มที่",
      en: "Late Dec–Jan • full ice festival and snow",
    },
    months: [12, 1, 2],
    highlights: [
      { th: "เทศกาลแกะสลักน้ำแข็งฮาร์บิน (ใหญ่ที่สุดในโลก)", en: "Harbin Ice & Snow Festival (the world's largest)" },
      { th: "หมู่บ้านหิมะ (Snow Town) ‘เห็ดหิมะ’ และพาเหรดราตรี", en: "Snow Town with 'snow mushrooms' and the night parade" },
      { th: "ตุ๊กตาหิมะยักษ์ 19 ม. + ถนนบาร็อคจงหัว", en: "The 19 m giant snowman + China Baroque Street" },
      { th: "หมู่บ้านรัสเซีย เกาะพระอาทิตย์ + ถนนจงยาง", en: "The Russian village on Sun Island + Central Street" },
    ],
    whoFor: {
      th: "ครอบครัวอยากเล่นหิมะ • First-timer หน้าหนาว • คู่รัก • สายถ่ายรูป งบเข้าถึงง่าย",
      en: "Families wanting snow • winter first-timers • couples • photographers on an accessible budget",
    },
    prep: [
      { text: { th: "หนาวจัด -20 ถึง -30°C ต้องมีชุดกันหนาวจริงจัง รองเท้า/ถุงมือ/แผ่นทำความร้อน", en: "Extreme cold -20 to -30°C — serious winter gear, boots/gloves/heat packs" }, warn: true },
      { text: { th: "ที่พักในหมู่บ้านหิมะเรียบง่าย ต้องหิ้วกระเป๋าเอง 1 คืน", en: "Snow Town lodging is basic; carry a small overnight bag" } },
      { text: { th: "เปลี่ยนเครื่อง+โหลดกระเป๋าใหม่ที่ปักกิ่ง", en: "Connection at Beijing requires re-checking baggage" } },
      { text: { th: "ขับรถระหว่างเมืองยาวบนถนนหิมะ", en: "Long drives on snowy roads" } },
    ],
    sellingScript: {
      th: "“ทริปหิมะในงบที่จับต้องได้ เก็บครบทั้งหมู่บ้านหิมะ เทศกาลน้ำแข็ง และมุมรัสเซียของฮาร์บิน — เหมาะ first-timer หน้าหนาว”",
      en: "\"A snow trip at an accessible price — Snow Town, the ice festival and Harbin's Russian side; perfect for winter first-timers.\"",
    },
    crossSell: {
      th: "ตัวมาตรฐานหน้าหนาว — อัปเซลเป็น CA006 (เพิ่มคฤหาสน์วอลการ์)",
      en: "The standard winter trip — upsell to CA006 (adds Volga Manor).",
    },
    customerSegments: ["family", "firsttimer", "photography", "bucketlist"],
    routeSegments: [
      { from: "harbin", to: "hengdaohezi", mode: "drive" },
      { from: "hengdaohezi", to: "mudanjiang", mode: "drive" },
      { from: "mudanjiang", to: "snowtown", mode: "drive" },
      { from: "snowtown", to: "harbin", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ปักกิ่ง", en: "Bangkok – Beijing" },
        stops: [],
        along: [
          { th: "บินสุวรรณภูมิ–ปักกิ่งแคปิตอล (CA960 19:30-01:05+1) ค้างคืนบนเครื่อง/รอต่อเครื่อง", en: "Fly Suvarnabhumi–Beijing Capital (CA960 19:30-01:05+1), red-eye / airport connection" },
        ],
      },
      {
        day: 2,
        title: { th: "ปักกิ่ง – ฮาร์บิน – มนุษย์หิมะยักษ์ – ถนนบาร็อค", en: "Beijing – Harbin – giant snowman – Baroque Street" },
        stops: ["harbin"],
        along: [
          { th: "บินต่อปักกิ่ง–ฮาร์บิน (CA1621 06:50-08:45) แวะร้านเสื้อกันหนาว", en: "Connect Beijing–Harbin (CA1621 06:50-08:45), stop at a winter-wear shop" },
          { th: "มนุษย์หิมะยักษ์ 19 ม. ถนนบาร็อค จัตุรัสเซนต์โซเฟีย ถนนจงยาง (แถมไอติม) ตรอกเซียวเข่อ", en: "The 19 m snowman, Baroque Street, St Sophia square, Central Street (free ice cream) and Xiaoke lane", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "เมืองรถไฟเหิงเต้าเหอจื่อ – มู่ตานเจียง", en: "Hengdaohezi railway town – Mudanjiang" },
        stops: ["hengdaohezi", "mudanjiang"],
        along: [
          { th: "โรงเก็บหัวรถจักรทรงพัด + โบสถ์ออร์โธดอกซ์ (ถ่ายรูปด้านนอก)", en: "The fan-shaped locomotive shed + the Orthodox church (photo stop)", stopId: "hengdaohezi" },
          { th: "ถนนรัสเซีย และหมู่บ้านภาพเขียนสีน้ำมัน", en: "The Russian street and the oil-painting village", stopId: "hengdaohezi" },
        ],
        drive: { th: "ฮาร์บิน → เหิงเต้าเหอจื่อ → มู่ตานเจียง", en: "Harbin → Hengdaohezi → Mudanjiang" },
        hotel: { name: "MUDANJIANG SUNNY DATE HOTEL", star: 4, cityId: "mudanjiang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "หมู่บ้านหิมะ (Snow Town) – พาเหรดหิมะราตรี", en: "Snow Town – night snow parade" },
        stops: ["snowtown"],
        along: [
          { th: "หมู่บ้านหิมะ ป้ายหินหมู่บ้าน ไปรษณีย์หิมะ บ้านแห่งความฝัน", en: "Snow Town — the village stone, snow post office and 'Dream Home'", stopId: "snowtown" },
          { th: "ถนนคนเดินเสน่ห์หิมะ และขบวนพาเหรดหิมะราตรี", en: "The snow-charm street and the night snow parade", stopId: "snowtown" },
        ],
        drive: { th: "มู่ตานเจียง → หมู่บ้านหิมะ", en: "Mudanjiang → Snow Town" },
        hotel: { name: "SNOWTOWN FOLK GUESTHOUSE", star: 3, cityId: "snowtown", note: { th: "ที่พักภายในหมู่บ้านหิมะ", en: "lodging inside Snow Town" } },
      },
      {
        day: 5,
        title: { th: "ภาพเขียนหิมะสิบลี้ – ฮาร์บิน – เทศกาลน้ำแข็ง", en: "Ten-li snow painting – Harbin – Ice & Snow Festival" },
        stops: ["harbin"],
        along: [
          { th: "ป้ายหินหมู่บ้านหิมะ ภาพเขียนหิมะสิบลี้ ม้าหมุนล้อยาง", en: "The Snow Town stone marker, 'ten-li snow painting' ridge and tyre carousel", stopId: "snowtown" },
          { th: "กลับฮาร์บิน เข้าชมเทศกาลแกะสลักน้ำแข็งฮาร์บิน (ใหญ่ที่สุดในโลก)", en: "Back to Harbin for the Harbin Ice & Snow Festival (the world's largest)", stopId: "harbin" },
        ],
        drive: { th: "หมู่บ้านหิมะ → ฮาร์บิน", en: "Snow Town → Harbin" },
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "หมู่บ้านรัสเซีย – แกะสลักหิมะ เกาะพระอาทิตย์", en: "Russian village – Sun Island snow sculptures" },
        stops: ["harbin"],
        along: [
          { th: "หมู่บ้านรัสเซีย (เกาะพระอาทิตย์) บรรยากาศยุโรปกลางหิมะ", en: "The Russian village on Sun Island, a European feel in the snow", stopId: "harbin" },
          { th: "นิทรรศการแกะสลักหิมะ เกาะพระอาทิตย์ (รวมรถอุทยาน)", en: "The Sun Island snow-sculpture expo (park shuttle included)", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ฮาร์บิน – ปักกิ่ง – กรุงเทพฯ", en: "Harbin – Beijing – Bangkok" },
        stops: ["harbin"],
        along: [
          { th: "บินฮาร์บิน–ปักกิ่ง (CA1640) ต่อเครื่องกลับสุวรรณภูมิ (CA959)", en: "Fly Harbin–Beijing (CA1640), connect home to Suvarnabhumi (CA959)" },
        ],
      },
    ],
  },
  {
    id: "2UDLC-CZ001",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "SZX", "DLC"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 13 ชม. รวมต่อเครื่องเซินเจิ้น", en: "≈ 13h incl. Shenzhen connection" },
        hops: [
          { from: "BKK", to: "SZX", flightNo: "CZ8158", dep: "02:40", arr: "07:45" },
          { from: "SZX", to: "DLC", flightNo: "CZ6300", dep: "12:00", arr: "15:30" },
        ],
      },
      {
        airports: ["DLC", "SZX", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องเซินเจิ้น", en: "≈ 9h incl. Shenzhen connection" },
        hops: [
          { from: "DLC", to: "SZX", flightNo: "CZ6299", dep: "07:20", arr: "10:55" },
          { from: "SZX", to: "BKK", flightNo: "CZ8323", dep: "13:55", arr: "16:25" },
        ],
      },
    ],
    title: {
      th: "ต้าเหลียน เหลียวหนิง ‘พากล้องไปเที่ยว’ ตานตง เปิ่นซี เสิ่นหยาง",
      en: "Dalian & Liaoning: Dandong, Benxi & Shenyang grand loop",
    },
    oneLiner: {
      th: "วงรอบเหลียวหนิงครบเมือง ต้าเหลียนเมืองท่ายุโรป ชายแดนเกาหลีเหนือ ถ้ำน้ำเปิ่นซี และพระราชวังชิง",
      en: "A full Liaoning loop — European-flavoured Dalian, the N. Korea border, Benxi Water Cave and the Qing palace.",
    },
    days: 7,
    nights: 5,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านเซินเจิ้น", en: "via Shenzhen" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง (นั่งรถระหว่างเมือง)", en: "Easy • no altitude (intercity drives)" },
    bestMonths: { th: "ก.ย.–ต.ค. • อากาศดี ใบไม้เริ่มเปลี่ยนสี", en: "Sep–Oct • fine weather, early autumn colour" },
    months: [9, 10],
    highlights: [
      { th: "ต้าเหลียน จัตุรัสซิงไห่ รถรางร้อยปี และนครเวนิสตะวันออก", en: "Dalian — Xinghai Square, century-old trams and the 'Eastern Venice'" },
      { th: "ตานตง ล่องเรือแม่น้ำยาลู มองชายแดนเกาหลีเหนือ + สะพานหัก", en: "Dandong — Yalu River cruise facing North Korea + the broken bridge" },
      { th: "ถ้ำน้ำเปิ่นซี ล่องเรือถ้ำหินปูนแม่น้ำใต้ดิน", en: "Benxi Water Cave — boating an underground limestone river" },
      { th: "พระราชวังเสิ่นหยางกู้กง บ้านเกิดราชวงศ์ชิง", en: "Mukden Palace, the cradle of the Qing dynasty" },
    ],
    whoFor: {
      th: "ครอบครัว • คู่รัก • First-timer ตงเป่ย • สายเมืองท่า-ประวัติศาสตร์",
      en: "Families • couples • Dongbei first-timers • port-and-history fans",
    },
    prep: [
      { text: { th: "ไฟลท์ขาไปออกเช้ามืด (~02:40) บรีฟลูกค้าเรื่องเวลานอน", en: "Outbound is a red-eye (~02:40) — brief clients on sleep" }, warn: true },
      { text: { th: "นั่งรถระหว่างเมืองนาน (ตานตง–เสิ่นหยาง ผ่านเปิ่นซี)", en: "Long intercity drives (Dandong–Shenyang via Benxi)" } },
      { text: { th: "อากาศเย็นช่วงใบไม้ร่วง เตรียมเสื้อกันหนาวบาง ๆ", en: "Cool autumn weather — pack light warm layers" } },
      { text: { th: "ลมทะเลที่ต้าเหลียนแรง เตรียมเสื้อกันลม", en: "Breezy at Dalian's coast — bring a windbreaker" } },
    ],
    sellingScript: {
      th: "“อยากได้ตงเป่ยครบรสในทริปเดียว? ต้าเหลียนเมืองท่ายุโรป ยืนริมยาลูมองเกาหลีเหนือ ลงเรือถ้ำเปิ่นซี และเดินวังราชวงศ์ชิง”",
      en: "\"Want all of Liaoning in one trip? European Dalian, the Yalu facing North Korea, the Benxi cave boat and the Qing palace.\"",
    },
    crossSell: {
      th: "คู่กับ CZ002 (เจาะผานจิ่นหาดแดง) หรือ MU003 (8 วันครบเมือง)",
      en: "Pair with CZ002 (Panjin Red Beach) or MU003 (the 8-day full loop).",
    },
    customerSegments: ["family", "firsttimer", "culture", "photography"],
    routeSegments: [
      { from: "dalian", to: "dandong", mode: "drive" },
      { from: "dandong", to: "benxi", mode: "drive" },
      { from: "benxi", to: "shenyang", mode: "drive" },
      { from: "shenyang", to: "dalian", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (สนามบินสุวรรณภูมิ)", en: "Bangkok (Suvarnabhumi)" },
        stops: ["dalian"],
        along: [
          { th: "พร้อมกันที่สนามบินสุวรรณภูมิ ~23.00 น. เช็คอินสายการบิน CZ", en: "Meet at Suvarnabhumi ~23:00, check in with China Southern (CZ)" },
        ],
      },
      {
        day: 2,
        title: { th: "กรุงเทพฯ – เซินเจิ้น – ต้าเหลียน", en: "Bangkok – Shenzhen – Dalian" },
        stops: ["dalian"],
        along: [
          { th: "บินสุวรรณภูมิ–เซินเจิ้น (CZ8158) ต่อเครื่องสู่ต้าเหลียน (CZ6300)", en: "Fly Suvarnabhumi–Shenzhen (CZ8158), connect to Dalian (CZ6300)" },
          { th: "ถึงต้าเหลียน ‘ไข่มุกแห่งแดนเหนือ’ จัตุรัสจงซานเมืองเก่า", en: "Arrive Dalian, 'Pearl of the North' — Zhongshan Square old town", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "จัตุรัสซิงไห่ – รูปสลักร้อยปี – ตงกั่ง/เวนิส – ถนนบิ่นไห่", en: "Xinghai Square – Centennial sculpture – Donggang/Venice – Binhai Rd" },
        stops: ["dalian"],
        along: [
          { th: "จัตุรัสซิงไห่ จัตุรัสริมทะเลที่ใหญ่ที่สุดในเอเชีย + ประติมากรรมร้อยปี", en: "Xinghai Square, Asia's largest seaside plaza + the Centennial sculpture", stopId: "dalian" },
          { th: "ย่านตงกั่ง นครเวนิสจำลอง และท่าเรือประมงต้าเหลียน", en: "Donggang district, the 'Eastern Venice' canals and the fishing wharf", stopId: "dalian" },
          { th: "ถนนบิ่นไห่เลียบทะเล ผ่านชมสะพานเป่ยต้า", en: "Coastal Binhai Road past the Beida Bridge viewpoint", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ต้าเหลียน – ตานตง – ชายแดนเกาหลีเหนือ – ล่องเรือยาลู", en: "Dalian – Dandong – N. Korea border – Yalu cruise" },
        stops: ["dandong"],
        along: [
          { th: "เดินทางสู่ตานตง เมืองชายแดนที่ใหญ่ที่สุดของจีน", en: "Drive to Dandong, China's largest border city", stopId: "dandong" },
          { th: "ด่านชายแดนจีน–เกาหลีเหนือ ล่องเรือแม่น้ำยาลู และสะพานหักต้วนเฉียว", en: "China–N.Korea border, Yalu River cruise and the broken bridge", stopId: "dandong" },
        ],
        hotel: { name: "DANDONG PEARL ISLAND HOTEL", star: 4, cityId: "dandong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ตานตง – เปิ่นซี (ถ้ำน้ำ) – เสิ่นหยาง – ถนนคนเดินจงเจีย", en: "Dandong – Benxi Water Cave – Shenyang – Zhongjie street" },
        stops: ["shenyang"],
        along: [
          { th: "ถ้ำน้ำเปิ่นซี ล่องเรือชมหินงอกหินย้อยในถ้ำแม่น้ำใต้ดิน", en: "Benxi Water Cave — boat past stalactites in the underground river", stopId: "benxi" },
          { th: "เสิ่นหยาง เดินถนนคนเดินจงเจีย และตลาดเก่าเหลาเป่ย", en: "Shenyang — the Zhongjie pedestrian street and Laobei old market", stopId: "shenyang" },
        ],
        hotel: { name: "SHENYANG COUNTRY GARDEN PHOENIX HOTEL", star: 4, cityId: "shenyang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "พระราชวังเสิ่นหยางกู้กง – พระหยกอันซาน – ต้าเหลียน – ว่านต๋า", en: "Mukden Palace – Anshan Jade Buddha – Dalian – Wanda" },
        stops: ["shenyang", "dalian"],
        along: [
          { th: "พระราชวังเสิ่นหยางกู้กง วังหลวงราชวงศ์ชิงตอนต้น", en: "Mukden Imperial Palace, the early-Qing court", stopId: "shenyang" },
          { th: "ผ่านชมพระหยกอันซาน ก่อนกลับต้าเหลียน ช้อปห้างว่านต๋า", en: "Stop at the Anshan Jade Buddha, then back to Dalian for Wanda mall", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ต้าเหลียน – เซินเจิ้น – กรุงเทพฯ", en: "Dalian – Shenzhen – Bangkok" },
        stops: ["dalian"],
        along: [
          { th: "บินต้าเหลียน–เซินเจิ้น (CZ6299) ต่อเครื่องกลับกรุงเทพฯ (CZ8323)", en: "Fly Dalian–Shenzhen (CZ6299), connect home to Bangkok (CZ8323)" },
        ],
      },
    ],
  },
  {
    id: "2UDLC-CZ002",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "SZX", "DLC"],
        airline: "China Southern (CZ)",
        direction: "outbound",
        duration: { th: "≈ 13 ชม. รวมต่อเครื่องเซินเจิ้น", en: "≈ 13h incl. Shenzhen connection" },
        hops: [
          { from: "BKK", to: "SZX", flightNo: "CZ8158", dep: "02:40", arr: "07:45" },
          { from: "SZX", to: "DLC", flightNo: "CZ6300", dep: "12:00", arr: "15:30" },
        ],
      },
      {
        airports: ["DLC", "SZX", "BKK"],
        airline: "China Southern (CZ)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องเซินเจิ้น", en: "≈ 9h incl. Shenzhen connection" },
        hops: [
          { from: "DLC", to: "SZX", flightNo: "CZ6299", dep: "07:20", arr: "10:55" },
          { from: "SZX", to: "BKK", flightNo: "CZ8323", dep: "13:55", arr: "16:25" },
        ],
      },
    ],
    title: {
      th: "ต้าเหลียน ตานตง ผานจิ่น เจาะลึก 3 นคร เหลียวหนิง (หาดแดง)",
      en: "Dalian–Dandong–Panjin: deep three-city Liaoning (Red Beach)",
    },
    oneLiner: {
      th: "เจาะลึก 3 นครเหลียวหนิง จุดขายคือหาดแดงผานจิ่น บวกชายแดนเกาหลีเหนือและต้าเหลียนเมืองท่า",
      en: "A deep three-city Liaoning trip — the hook is Panjin's Red Beach, plus the N. Korea border and seaside Dalian.",
    },
    days: 7,
    nights: 5,
    airline: "China Southern (CZ)",
    via: { th: "ผ่านเซินเจิ้น", en: "via Shenzhen" },
    difficulty: "moderate",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง (นั่งรถระหว่างเมือง)", en: "Easy • no altitude (intercity drives)" },
    bestMonths: { th: "ปลายส.ค.–ต.ค. • หาดแดงผานจิ่นพีคปลายก.ย.–ต้นต.ค.", en: "Late Aug–Oct • Red Beach peaks late Sep–early Oct" },
    months: [9, 10],
    highlights: [
      { th: "หาดแดงผานจิ่น ปรากฏการณ์ทุ่งชะครามสีแดง (หน้าต่างสั้น)", en: "Panjin Red Beach, the crimson seepweed marsh (short window)" },
      { th: "ตานตง ล่องเรือแม่น้ำยาลู มองชายแดนเกาหลีเหนือ + วัดต้ากูซาน", en: "Dandong — Yalu River cruise facing N. Korea + Dagushan Temple" },
      { th: "ต้าเหลียน เขาดอกบัวเหลียนฮัว เกาะพระจันทร์ และถนนญี่ปุ่น/รัสเซีย", en: "Dalian — Lianhua Mountain, Moon Island and the Japan/Russia streets" },
      { th: "นั่งรถรางร้อยปีต้าเหลียน และนครเวนิสตะวันออก", en: "Century-old Dalian trams and the 'Eastern Venice'" },
    ],
    whoFor: {
      th: "สายถ่ายรูปหาดแดง • คู่รัก • Repeater ตงเป่ย • ครอบครัว",
      en: "Red-Beach photographers • couples • Dongbei repeaters • families",
    },
    prep: [
      { text: { th: "หาดแดงเป็นปรากฏการณ์ธรรมชาติ สีขึ้นกับอากาศ ปิดการขายเร็ว", en: "Red Beach colour depends on weather — sell/confirm early" }, warn: true },
      { text: { th: "ไฟลท์ขาไปออกเช้ามืด (~02:40) บรีฟเรื่องเวลานอน", en: "Outbound red-eye (~02:40) — brief clients on sleep" } },
      { text: { th: "น้ำหนักกระเป๋า 20 กก./ใบ", en: "Checked baggage 20 kg" } },
      { text: { th: "อากาศเย็นช่วงใบไม้ร่วง เตรียมเสื้อกันหนาว", en: "Cool autumn weather — pack warm layers" } },
    ],
    sellingScript: {
      th: "“อยากเก็บหาดแดงผานจิ่นปีละครั้ง? ทริปนี้เจาะ 3 นคร ผานจิ่น–ตานตง–ต้าเหลียน ครบทั้งหาดแดง ชายแดน และเมืองท่า”",
      en: "\"Chasing Panjin's once-a-year Red Beach? This deep three-city trip pairs it with the N. Korea border and seaside Dalian.\"",
    },
    crossSell: {
      th: "คู่กับ CZ001 (วงรอบครบเมือง) หรือ MU003 (8 วันเพิ่มเสิ่นหยาง)",
      en: "Pair with CZ001 (the full loop) or MU003 (8 days, adds Shenyang).",
    },
    customerSegments: ["photography", "honeymoon", "repeater", "family"],
    routeSegments: [
      { from: "dalian", to: "dandong", mode: "drive" },
      { from: "dandong", to: "panjin", mode: "drive" },
      { from: "panjin", to: "dalian", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (สนามบินสุวรรณภูมิ)", en: "Bangkok (Suvarnabhumi)" },
        stops: ["dalian"],
        along: [
          { th: "พร้อมกันที่สนามบินสุวรรณภูมิ ~23.00 น. เช็คอินสายการบิน CZ", en: "Meet at Suvarnabhumi ~23:00, check in with China Southern (CZ)" },
        ],
      },
      {
        day: 2,
        title: { th: "กรุงเทพฯ – เซินเจิ้น – ต้าเหลียน", en: "Bangkok – Shenzhen – Dalian" },
        stops: ["dalian"],
        along: [
          { th: "บินสุวรรณภูมิ–เซินเจิ้น (CZ8158) ต่อเครื่องสู่ต้าเหลียน (CZ6300)", en: "Fly Suvarnabhumi–Shenzhen (CZ8158), connect to Dalian (CZ6300)" },
          { th: "ถึงต้าเหลียน ‘ไข่มุกแห่งแดนเหนือ’ เข้าที่พัก", en: "Arrive Dalian, the 'Pearl of the North', transfer to hotel", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "เขาเหลียนฮัว – จัตุรัสซิงไห่ – ตานตง – เกาะพระจันทร์", en: "Lianhua Mtn – Xinghai Square – Dandong – Moon Island" },
        stops: ["dandong"],
        along: [
          { th: "จุดชมวิวเขาเหลียนฮัว (เขาดอกบัว) และจัตุรัสซิงไห่", en: "Lianhua (Lotus) Mountain viewpoint and Xinghai Square", stopId: "dalian" },
          { th: "สู่ตานตง ชมเกาะพระจันทร์ และถนนโบราณอันตง", en: "On to Dandong — Moon Island and the Andong ancient street", stopId: "dandong" },
        ],
        hotel: { name: "DANDONG PEARL ISLAND HOTEL", star: 4, cityId: "dandong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ชายแดนเกาหลีเหนือ – ล่องเรือยาลู – วัดต้ากูซาน – ผานจิ่น", en: "N. Korea border – Yalu cruise – Dagushan Temple – Panjin" },
        stops: ["panjin"],
        along: [
          { th: "ด่านชายแดนจีน–เกาหลีเหนือ และล่องเรือแม่น้ำยาลู", en: "China–N.Korea border and a Yalu River cruise", stopId: "dandong" },
          { th: "วัดต้ากูซาน วัดบนภูเขาริมทะเล ก่อนเดินทางสู่ผานจิ่น", en: "Dagushan, a seaside mountain temple, then on to Panjin", stopId: "panjin" },
        ],
        hotel: { name: "PANJIN CITY CENTER HOLIDAY INN EXPRESS", star: 4, cityId: "panjin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ผานจิ่น – หาดหญ้าแดง – ต้าเหลียน – นั่งรถราง", en: "Panjin – Red Beach – Dalian – tram ride" },
        stops: ["panjin", "dalian"],
        along: [
          { th: "หาดแดงผานจิ่น ทุ่งชะครามแดงสุดลูกหูลูกตา", en: "Panjin Red Beach — a vast crimson seepweed marsh", stopId: "panjin" },
          { th: "กลับต้าเหลียน นั่งรถรางร้อยปีชมเมือง", en: "Back to Dalian for a heritage tram city tour", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ตงกั่ง/เวนิส – ท่าเรือประมง – ถนนญี่ปุ่น + ถนนรัสเซีย", en: "Donggang/Venice – fishing wharf – Japan & Russia streets" },
        stops: ["dalian"],
        along: [
          { th: "ย่านตงกั่ง นครเวนิสจำลอง และท่าเรือประมงต้าเหลียน", en: "Donggang district, the 'Eastern Venice' and the fishing wharf", stopId: "dalian" },
          { th: "ถนนญี่ปุ่นและถนนรัสเซีย ย่านอาณานิคมเก่าของต้าเหลียน", en: "Dalian's colonial-era Japan Street and Russia Street", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ต้าเหลียน – เซินเจิ้น – กรุงเทพฯ", en: "Dalian – Shenzhen – Bangkok" },
        stops: ["dalian"],
        along: [
          { th: "บินต้าเหลียน–เซินเจิ้น (CZ6299) ต่อเครื่องกลับกรุงเทพฯ (CZ8323)", en: "Fly Dalian–Shenzhen (CZ6299), connect home to Bangkok (CZ8323)" },
        ],
      },
    ],
  },
  {
    id: "2UDLC-MU003",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "PVG", "DLC"],
        airline: "China Eastern (MU)",
        direction: "outbound",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องเซี่ยงไฮ้", en: "≈ 11h incl. Shanghai connection" },
        hops: [
          { from: "BKK", to: "PVG", flightNo: "MU548", dep: "02:10", arr: "07:35" },
          { from: "PVG", to: "DLC", flightNo: "MU9095", dep: "09:35", arr: "11:20" },
        ],
      },
      {
        airports: ["DLC", "PVG", "BKK"],
        airline: "China Eastern (MU)",
        direction: "return",
        duration: { th: "≈ 10 ชม. รวมต่อเครื่องเซี่ยงไฮ้ (ถึงกรุงเทพฯ เช้ามืด)", en: "≈ 10h incl. Shanghai connection (dawn arrival)" },
        hops: [
          { from: "DLC", to: "PVG", flightNo: "MU5624", dep: "20:25", arr: "22:30" },
          { from: "PVG", to: "BKK", flightNo: "FM847", dep: "00:15", arr: "04:05" },
        ],
      },
    ],
    title: {
      th: "ต้าเหลียน มหัศจรรย์หาดหญ้าแดง ผานจิ่น ตานตง เสิ่นหยาง (8 วัน)",
      en: "Dalian, Panjin Red Beach, Dandong & Shenyang (8 days)",
    },
    oneLiner: {
      th: "เวอร์ชันยาว 8 วัน เก็บครบ 4 เมืองเหลียวหนิง เน้นหาดแดงผานจิ่นเต็มอิ่ม บวกทุ่งหญ้าสไลเดอร์เสิ่นหยาง",
      en: "The longer 8-day version covering all four Liaoning cities, with a full Panjin Red Beach day plus Shenyang's grass-sledding meadow.",
    },
    days: 8,
    nights: 5,
    airline: "China Eastern (MU)",
    via: { th: "ผ่านเซี่ยงไฮ้", en: "via Shanghai" },
    difficulty: "moderate",
    altitudeNote: { th: "สบาย • ไม่ขึ้นที่สูง (นั่งรถระหว่างเมือง)", en: "Easy • no altitude (intercity drives)" },
    bestMonths: { th: "ก.ย.–ต.ค. • หาดแดงผานจิ่นพีคปลายก.ย.–ต้นต.ค.", en: "Sep–Oct • Red Beach peaks late Sep–early Oct" },
    months: [9, 10],
    highlights: [
      { th: "หาดแดงผานจิ่น (รวมรถอุทยาน) เกาะคู่รัก สะพานไม้ซุ่ยเยี่ย", en: "Panjin Red Beach (with park bus), Couple Island and the Suiye boardwalk" },
      { th: "ทุ่งหญ้าหยุนตวนเสิ่นหยาง เล่นสไลเดอร์หญ้า + บ้านฮอบบิท", en: "Shenyang's Yunduan meadow — grass sledding + the Hobbit House" },
      { th: "ตานตง ล่องเรือยาลู มองชายแดนเกาหลีเหนือ + สะพานหัก", en: "Dandong — Yalu cruise facing N. Korea + the broken bridge" },
      { th: "ต้าเหลียน จัตุรัสซิงไห่ ถนนญี่ปุ่น/รัสเซีย และพิพิธภัณฑ์ธรรมชาติ", en: "Dalian — Xinghai Square, Japan/Russia streets and the Natural History Museum" },
    ],
    whoFor: {
      th: "ครอบครัว • สายถ่ายรูปหาดแดง • คนอยากเที่ยวไม่รีบ (8 วัน) • Repeater",
      en: "Families • Red-Beach photographers • slow travellers (8 days) • repeaters",
    },
    prep: [
      { text: { th: "หาดแดงเป็นปรากฏการณ์ธรรมชาติ สีขึ้นกับอากาศ ปิดการขายเร็ว", en: "Red Beach colour depends on weather — sell/confirm early" }, warn: true },
      { text: { th: "ขากลับถึงกรุงเทพฯ เช้ามืด (~04:05) บรีฟเรื่องการต่อรถ", en: "Arrives Bangkok pre-dawn (~04:05) — brief onward transport" } },
      { text: { th: "นั่งรถระหว่าง 4 เมืองพอสมควร", en: "A fair amount of intercity driving across four cities" } },
      { text: { th: "อากาศเย็นช่วงใบไม้ร่วง เตรียมเสื้อกันหนาว", en: "Cool autumn weather — pack warm layers" } },
    ],
    sellingScript: {
      th: "“มีเวลามากขึ้น อยากเก็บเหลียวหนิงให้ครบ? 8 วันนี้เจาะหาดแดงผานจิ่นเต็มวัน เล่นสไลเดอร์หญ้า และครบ 4 เมือง”",
      en: "\"More time and want all of Liaoning? These 8 days give a full Red-Beach day, grass-sledding and all four cities.\"",
    },
    crossSell: {
      th: "เวอร์ชันยาวของตงเป่ย — คู่กับ CZ002 (7 วัน) หรือ MU005 (หน้าหนาวฮาร์บิน)",
      en: "The long Dongbei option — pair with CZ002 (7 days) or MU005 (winter Harbin).",
    },
    customerSegments: ["family", "photography", "firsttimer", "repeater"],
    routeSegments: [
      { from: "dalian", to: "panjin", mode: "drive" },
      { from: "panjin", to: "shenyang", mode: "drive" },
      { from: "shenyang", to: "dandong", mode: "drive" },
      { from: "dandong", to: "dalian", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (สนามบินสุวรรณภูมิ)", en: "Bangkok (Suvarnabhumi)" },
        stops: ["dalian"],
        along: [
          { th: "พร้อมกันที่สนามบินสุวรรณภูมิ ~23.00 น. เช็คอินสายการบิน MU", en: "Meet at Suvarnabhumi ~23:00, check in with China Eastern (MU)" },
        ],
      },
      {
        day: 2,
        title: { th: "กรุงเทพฯ – เซี่ยงไฮ้ – ต้าเหลียน – จัตุรัสซิงไห่", en: "Bangkok – Shanghai – Dalian – Xinghai Square" },
        stops: ["dalian"],
        along: [
          { th: "บินสุวรรณภูมิ–เซี่ยงไฮ้ผู่ตง (MU548) ต่อเครื่องสู่ต้าเหลียน (MU9095)", en: "Fly Suvarnabhumi–Shanghai Pudong (MU548), connect to Dalian (MU9095)" },
          { th: "จัตุรัสซิงไห่ ท่าเรือประมง ถนนญี่ปุ่น/รัสเซีย และตงกั่ง/เวนิส", en: "Xinghai Square, the fishing wharf, Japan/Russia streets and Donggang/Venice", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "ต้าเหลียน – หาดหญ้าแดงผานจิ่น – เกาะคู่รัก – นาข้าวต้าเมิ่ง", en: "Dalian – Panjin Red Beach – Couple Island – Damen paddies" },
        stops: ["panjin"],
        along: [
          { th: "หาดหญ้าทะเลแดงผานจิ่น (รวมรถอุทยาน) เกาะคู่รัก สะพานเฉียวอ้าย", en: "Panjin Red Beach (with park bus), Couple Island and Qiao'ai Bridge", stopId: "panjin" },
          { th: "สะพานไม้ซุ่ยเยี่ย จุดชมวิวนาข้าวต้าเมิ่ง ผ่านชมทุ่งบ่อน้ำมัน", en: "The Suiye boardwalk, the Damen rice-paddy viewpoint, past the oilfields" },
        ],
        hotel: { name: "PANJIN CITY CENTER HOLIDAY INN EXPRESS", star: 4, cityId: "panjin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ผานจิ่น – เสิ่นหยาง – ทุ่งหญ้าหยุนตวน (สไลเดอร์หญ้า) – ซีถ่า", en: "Panjin – Shenyang – Yunduan meadow (grass sled) – Xita" },
        stops: ["shenyang"],
        along: [
          { th: "ทุ่งหญ้าหยุนตวน เล่นสไลเดอร์หญ้า 1 รอบ และบ้านฮอบบิท", en: "Yunduan grassland — one grass-sled run and the Hobbit House" },
          { th: "ตลาดกลางคืนซีถ่า ย่านเกาหลีของเสิ่นหยาง", en: "Xita night market, Shenyang's Koreatown", stopId: "shenyang" },
        ],
        hotel: { name: "SHENYANG COUNTRY GARDEN PHOENIX HOTEL", star: 4, cityId: "shenyang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "เสิ่นหยาง – ศิลปะน้ำตาลตระกูลหลี่ – โบสถ์หนานกวน – ตานตง", en: "Shenyang – Li sugar-art – Nanguan Church – Dandong" },
        stops: ["dandong"],
        along: [
          { th: "ชมศิลปะน้ำตาลตระกูลหลี่ และโบสถ์คาทอลิกหนานกวน", en: "The Li-family sugar art and the Nanguan Catholic Church" },
          { th: "เดินทางสู่ตานตง เมืองชายแดนริมแม่น้ำยาลู", en: "Drive to Dandong, the border city on the Yalu River", stopId: "dandong" },
        ],
        hotel: { name: "DANDONG PEARL ISLAND HOTEL", star: 4, cityId: "dandong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ตานตง – ชายแดนเกาหลีเหนือ – ล่องเรือยาลู – ต้าเหลียน", en: "Dandong – N. Korea border – Yalu cruise – Dalian" },
        stops: ["dandong", "dalian"],
        along: [
          { th: "ด่านชายแดนจีน–เกาหลีเหนือ ล่องเรือแม่น้ำยาลู และสะพานหัก", en: "China–N.Korea border, Yalu River cruise and the broken bridge", stopId: "dandong" },
          { th: "เดินทางกลับต้าเหลียน อิสระยามค่ำคืน", en: "Drive back to Dalian, free evening", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ท่าเรือประมง – พิพิธภัณฑ์ธรรมชาติ – ว่านต๋า – บินกลับเซี่ยงไฮ้", en: "Fishing wharf – Natural History Museum – Wanda – fly to Shanghai" },
        stops: ["dalian"],
        along: [
          { th: "ท่าเรือประมงต้าเหลียน พิพิธภัณฑ์ธรรมชาติต้าเหลียน และว่านต๋าพลาซ่า", en: "Dalian fishing wharf, the Natural History Museum and Wanda Plaza", stopId: "dalian" },
          { th: "บินต้าเหลียน–เซี่ยงไฮ้ผู่ตง (MU5624)", en: "Fly Dalian–Shanghai Pudong (MU5624)" },
        ],
      },
      {
        day: 8,
        title: { th: "เซี่ยงไฮ้ – กรุงเทพฯ", en: "Shanghai – Bangkok" },
        stops: ["dalian"],
        along: [
          { th: "บินเซี่ยงไฮ้–กรุงเทพฯ (FM847) ถึงสุวรรณภูมิช่วงเช้ามืด", en: "Fly Shanghai–Bangkok (FM847), arriving Suvarnabhumi before dawn" },
        ],
      },
    ],
  },
  {
    id: "2UDLC-MU005",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "PVG", "DLC"],
        airline: "China Eastern (MU)",
        direction: "outbound",
        duration: { th: "≈ 11 ชม. รวมต่อเครื่องเซี่ยงไฮ้", en: "≈ 11h incl. Shanghai connection" },
        hops: [
          { from: "BKK", to: "PVG", flightNo: "MU548", dep: "02:10", arr: "07:35" },
          { from: "PVG", to: "DLC", flightNo: "MU9095", dep: "09:35", arr: "11:20" },
        ],
      },
      {
        airports: ["DLC", "PVG", "BKK"],
        airline: "China Eastern (MU)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องเซี่ยงไฮ้ (ถึงกรุงเทพฯ เช้ามืด)", en: "≈ 9h incl. Shanghai connection (dawn arrival)" },
        hops: [
          { from: "DLC", to: "PVG", flightNo: "MU5626", dep: "16:50", arr: "19:00" },
          { from: "PVG", to: "BKK", flightNo: "FM841", dep: "22:20", arr: "01:55" },
        ],
      },
    ],
    title: {
      th: "ต้าเหลียน ฮาร์บิน หน้าหนาวหิมะโปรย เทศกาลน้ำแข็ง (รถไฟความเร็วสูง)",
      en: "Dalian & Harbin: snowy winter & ice festival (bullet train)",
    },
    oneLiner: {
      th: "ทริปหน้าหนาวสองเมือง ต้าเหลียนเมืองท่า + ฮาร์บินเทศกาลน้ำแข็ง เชื่อมด้วยรถไฟความเร็วสูง",
      en: "A two-city winter trip — seaside Dalian plus Harbin's ice festival, linked by high-speed train.",
    },
    days: 7,
    nights: 5,
    airline: "China Eastern (MU)",
    via: { th: "ผ่านเซี่ยงไฮ้", en: "via Shanghai" },
    difficulty: "moderate",
    altitudeNote: { th: "หนาวจัด -20 ถึง -30°C • เตรียมชุดกันหนาว", en: "Extreme cold -20 to -30°C • full winter gear" },
    bestMonths: { th: "ปลายธ.ค.–ม.ค. • เทศกาลน้ำแข็งฮาร์บินเต็มที่", en: "Late Dec–Jan • full Harbin ice festival" },
    months: [12, 1, 2],
    highlights: [
      { th: "เทศกาลแกะสลักน้ำแข็งฮาร์บิน (ใหญ่ที่สุดในโลก) + นิทรรศการหิมะเกาะพระอาทิตย์", en: "Harbin Ice & Snow Festival (world's largest) + Sun Island snow expo" },
      { th: "โบสถ์เซนต์โซเฟีย ถนนคนเดินจงยาง และตรอกเวทมนต์เซียวเข่อ", en: "St Sophia Cathedral, Central Street and the Xiaoke 'magic' alley" },
      { th: "นั่งรถไฟความเร็วสูงต้าเหลียน–ฮาร์บิน ชมวิวหิมะ", en: "A Dalian–Harbin bullet-train ride through snowscapes" },
      { th: "ต้าเหลียน จัตุรัสซิงไห่ รถราง และตุ๊กตามนุษย์หิมะยักษ์ฮาร์บิน", en: "Dalian's Xinghai Square and trams + Harbin's giant snowman" },
    ],
    whoFor: {
      th: "ครอบครัวอยากเล่นหิมะ • คู่รัก • สายถ่ายรูปหน้าหนาว • Bucket-list เทศกาลน้ำแข็ง",
      en: "Families wanting snow • couples • winter photographers • ice-festival bucket-listers",
    },
    prep: [
      { text: { th: "หนาวจัด -20 ถึง -30°C ที่ฮาร์บิน ต้องมีชุดกันหนาวจริงจัง", en: "Harbin is -20 to -30°C — serious winter gear is essential" }, warn: true },
      { text: { th: "งดรับทารกอายุต่ำกว่า 2 ปี เนื่องจากอากาศหนาวจัด", en: "Infants under 2 are not accepted due to extreme cold" }, warn: true },
      { text: { th: "ขากลับถึงกรุงเทพฯ เช้ามืด (~01:55) บรีฟเรื่องการต่อรถ", en: "Arrives Bangkok pre-dawn (~01:55) — brief onward transport" } },
      { text: { th: "เตรียมแผ่นทำความร้อน ถุงมือ และรองเท้ากันลื่น", en: "Bring heat packs, gloves and non-slip boots" } },
    ],
    sellingScript: {
      th: "“อยากเห็นหิมะและเทศกาลน้ำแข็งฮาร์บิน แต่ได้เที่ยวเมืองท่าสวย ๆ ด้วย? ทริปนี้รวมต้าเหลียน+ฮาร์บิน นั่งรถไฟความเร็วสูงเชื่อมสองเมือง”",
      en: "\"Want Harbin's snow and ice festival but a pretty port city too? This pairs Dalian and Harbin, linked by a bullet train.\"",
    },
    crossSell: {
      th: "ตัวหน้าหนาวที่เริ่มจากต้าเหลียน — คู่กับทริปฮาร์บินล้วน (CA001/CA006)",
      en: "The Dalian-gateway winter trip — pair with the pure-Harbin tours (CA001/CA006).",
    },
    customerSegments: ["family", "honeymoon", "photography", "bucketlist"],
    routeSegments: [
      { from: "dalian", to: "harbin", mode: "train", hours: 5.5 },
      { from: "harbin", to: "dalian", mode: "train", hours: 5.5 },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (สนามบินสุวรรณภูมิ)", en: "Bangkok (Suvarnabhumi)" },
        stops: ["dalian"],
        along: [
          { th: "พร้อมกันที่สนามบินสุวรรณภูมิ ~23.00 น. เช็คอินสายการบิน MU", en: "Meet at Suvarnabhumi ~23:00, check in with China Eastern (MU)" },
        ],
      },
      {
        day: 2,
        title: { th: "กรุงเทพฯ – เซี่ยงไฮ้ – ต้าเหลียน – จัตุรัสซิงไห่", en: "Bangkok – Shanghai – Dalian – Xinghai Square" },
        stops: ["dalian"],
        along: [
          { th: "บินสุวรรณภูมิ–เซี่ยงไฮ้ผู่ตง (MU548) ต่อเครื่องสู่ต้าเหลียน (MU9095)", en: "Fly Suvarnabhumi–Shanghai Pudong (MU548), connect to Dalian (MU9095)" },
          { th: "จัตุรัสซิงไห่ ท่าเรือประมง และถนนญี่ปุ่น/รัสเซีย", en: "Xinghai Square, the fishing wharf and the Japan/Russia streets", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "ต้าเหลียน – ฮาร์บิน (รถไฟความเร็วสูง) – มนุษย์หิมะยักษ์ – ถนนบาร็อค", en: "Dalian – Harbin (bullet train) – giant snowman – Baroque Street" },
        stops: ["harbin"],
        along: [
          { th: "นั่งรถไฟความเร็วสูงต้าเหลียน–ฮาร์บิน แวะร้านผลิตภัณฑ์กันหนาว", en: "Dalian–Harbin bullet train, with a winter-gear shop stop", stopId: "dalian" },
          { th: "ตุ๊กตามนุษย์หิมะยักษ์ และถนนบาร็อคจงหัว", en: "The giant snowman and China Baroque Street", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "โบสถ์เซนต์โซเฟีย – ถนนจงยาง – เกาะพระอาทิตย์ – เทศกาลน้ำแข็ง", en: "St Sophia – Central Street – Sun Island – Ice & Snow Festival" },
        stops: ["harbin"],
        along: [
          { th: "จัตุรัสโบสถ์เซนต์โซเฟีย ถนนคนเดินจงยาง (ไอติม 1 แท่ง) และตรอกเซียวเข่อ", en: "St Sophia square, Central Street (with an ice cream) and the Xiaoke alley", stopId: "harbin" },
          { th: "นิทรรศการแกะสลักหิมะเกาะพระอาทิตย์ และเทศกาลน้ำแข็งฮาร์บิน", en: "Sun Island snow-sculpture expo and the Harbin Ice & Snow Festival", stopId: "harbin" },
        ],
        hotel: { name: "HARBIN HUIMA HOTEL", star: 4, cityId: "harbin", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "สะพานเหล็กซงฮัวเจียง – สวนสตาลิน – ต้าเหลียน (รถไฟความเร็วสูง)", en: "Songhua iron bridge – Stalin Park – Dalian (bullet train)" },
        stops: ["harbin", "dalian"],
        along: [
          { th: "สะพานเหล็กแม่น้ำซงฮัวเจียง สวนสตาลิน และอนุสาวรีย์ฝั่งหง", en: "The Songhua River iron bridge, Stalin Park and the Flood Control Monument", stopId: "harbin" },
          { th: "นั่งรถไฟความเร็วสูงกลับต้าเหลียน", en: "High-speed train back to Dalian", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "อ่าวหลิงเจียว – ท่าเรือประมง – จัตุรัสซิงไห่ – รถราง – ไนท์มาร์เก็ต", en: "Lingjiao Bay – fishing wharf – Xinghai Square – tram – night market" },
        stops: ["dalian"],
        along: [
          { th: "อ่าวหลิงเจียว ท่าเรือประมงต้าเหลียน และจัตุรัสซิงไห่", en: "Lingjiao Bay, the Dalian fishing wharf and Xinghai Square", stopId: "dalian" },
          { th: "นั่งรถรางร้อยปี และเดินต้าเหลียนไนท์มาร์เก็ต", en: "A heritage tram ride and the Dalian night market", stopId: "dalian" },
        ],
        hotel: { name: "DALIAN FURONG INTERNATIONAL HOTEL", star: 4, cityId: "dalian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "เขาเหลียนฮัว – ต้าเหลียน – เซี่ยงไฮ้ – กรุงเทพฯ", en: "Lianhua Mtn – Dalian – Shanghai – Bangkok" },
        stops: ["dalian"],
        along: [
          { th: "จุดชมวิวเขาเหลียนฮัว ก่อนเดินทางสู่สนามบิน", en: "Lianhua Mountain viewpoint before transferring to the airport", stopId: "dalian" },
          { th: "บินต้าเหลียน–เซี่ยงไฮ้ (MU5626) ต่อเครื่องกลับกรุงเทพฯ (FM841)", en: "Fly Dalian–Shanghai (MU5626), connect home to Bangkok (FM841)" },
        ],
      },
    ],
  },
  {
    id: "2UHRB-MU001",
    regionId: "dongbei",
    flights: [
      {
        airports: ["BKK", "PVG", "HRB"],
        airline: "Shanghai Airlines (FM)",
        direction: "outbound",
        duration: { th: "≈ 12 ชม. รวมต่อเครื่องเซี่ยงไฮ้", en: "≈ 12h incl. Shanghai connection" },
        hops: [
          { from: "BKK", to: "PVG", flightNo: "FM848", dep: "05:05", arr: "10:35" },
          { from: "PVG", to: "HRB", flightNo: "FM9063", dep: "13:55", arr: "17:00" },
        ],
      },
      {
        airports: ["CGQ", "PVG", "BKK"],
        airline: "Shanghai Airlines (FM)",
        direction: "return",
        duration: { th: "≈ 9 ชม. รวมต่อเครื่องเซี่ยงไฮ้", en: "≈ 9h incl. Shanghai connection" },
        hops: [
          { from: "CGQ", to: "PVG", flightNo: "FM9080", dep: "07:00", arr: "09:45" },
          { from: "PVG", to: "BKK", flightNo: "FM833", dep: "11:45", arr: "15:55" },
        ],
      },
    ],
    title: {
      th: "ฮาร์บิน หมู่บ้านหิมะ เหยียนจี๋ จี๋หลิน เจาะลึกหิมะตงเป่ย (จากฮาร์บินสู่ฉางชุน)",
      en: "Harbin, Snow Town, Yanji & Jilin: deep Dongbei winter (Harbin to Changchun)",
    },
    oneLiner: {
      th: "ทริปหน้าหนาวข้ามจี๋หลิน-เฮยหลงเจียง ฮาร์บินเทศกาลน้ำแข็ง หมู่บ้านหิมะ วัฒนธรรมเกาหลีเหยียนจี๋ และอู้ซงจี๋หลิน",
      en: "A cross-Jilin/Heilongjiang winter trip — Harbin's ice festival, Snow Town, Korean Yanji and Jilin's rime forest.",
    },
    days: 7,
    nights: 6,
    airline: "Shanghai Airlines (FM)",
    via: { th: "ผ่านเซี่ยงไฮ้", en: "via Shanghai" },
    difficulty: "moderate",
    altitudeNote: { th: "หนาวจัด -20 ถึง -30°C • ถนนลื่น เตรียมชุดกันหนาวเต็มรูปแบบ", en: "Extreme cold -20 to -30°C • icy roads, full winter gear" },
    bestMonths: { th: "ปลายธ.ค.–ก.พ. • หิมะเต็มที่ + เทศกาลน้ำแข็งฮาร์บิน", en: "Late Dec–Feb • full snow + Harbin ice festival" },
    months: [12, 1, 2],
    highlights: [
      { th: "เมืองน้ำแข็งฮาร์บิน (Ice & Snow World) ที่ใหญ่ที่สุดในโลก + โบสถ์เซนต์โซเฟีย", en: "Harbin Ice & Snow World (world's largest) + St Sophia Cathedral" },
      { th: "หมู่บ้านหิมะเสวี่ยเซียง นั่งเลื่อนม้า เดินเล่นยามค่ำ และเล่นเกมเทน้ำเป็นน้ำแข็ง", en: "Snow Town — horse sled, lantern-lit nights and the 'splash-freeze' ice game" },
      { th: "เหยียนจี๋ หมู่บ้านวัฒนธรรมเกาหลี และเมืองชายแดนถูเหมิน", en: "Yanji — a Korean folk village and the Tumen border town" },
      { th: "พระสำริดกลางแจ้งสูงที่สุดในโลกลิ่วติ่งซาน และอู้ซง (น้ำค้างแข็ง) ที่จี๋หลิน", en: "The world's tallest outdoor bronze Buddha at Liudingshan, and Jilin's rime frost" },
    ],
    whoFor: {
      th: "ครอบครัวเล่นหิมะ • สายลุยกิจกรรมหิมะ • สายถ่ายรูปฤดูหนาว • Bucket-list เทศกาลน้ำแข็ง",
      en: "Snow-loving families • snow-activity seekers • winter photographers • ice-festival bucket-listers",
    },
    prep: [
      { text: { th: "หนาวจัด -20 ถึง -30°C ต้องมีชุดกันหนาวจริงจัง (แจกหมวก/ผ้าพันคอ/ถุงมือ)", en: "Extreme -20 to -30°C — serious winter gear essential (hat/scarf/gloves provided)" }, warn: true },
      { text: { th: "รถบัสเข้าหมู่บ้านหิมะไม่ได้ ต้องแพ็คกระเป๋าใบเล็ก ฝากกระเป๋าใหญ่ไว้บนรถ", en: "Coaches can't enter Snow Town — pack a small bag, leave big cases on the bus" }, warn: true },
      { text: { th: "ถนนตงเป่ยลื่นมาก เตรียมรองเท้ากันลื่นและแผ่นทำความร้อน", en: "Dongbei roads are very icy — bring non-slip boots and heat packs" } },
      { text: { th: "ออกจากฮาร์บิน บินกลับจากฉางชุน (เมืองเข้า-ออกคนละเมือง)", en: "Arrives Harbin, departs Changchun (different in/out cities)" } },
    ],
    sellingScript: {
      th: "“อยากได้หน้าหนาวตงเป่ยแบบจัดเต็ม? เส้นทางนี้ลากยาวจากฮาร์บินเมืองน้ำแข็ง ผ่านหมู่บ้านหิมะ แดนเกาหลีเหยียนจี๋ จนถึงอู้ซงจี๋หลิน”",
      en: "\"Want the ultimate Dongbei winter? This route runs from icy Harbin through Snow Town and Korean Yanji to Jilin's rime forest.\"",
    },
    crossSell: {
      th: "คู่กับ MU005 (ต้าเหลียน+ฮาร์บิน) หรือทริปฮาร์บินล้วน (CA001/CA006)",
      en: "Pair with MU005 (Dalian+Harbin) or the pure-Harbin tours (CA001/CA006).",
    },
    customerSegments: ["family", "adventure", "photography", "bucketlist"],
    routeSegments: [
      { from: "harbin", to: "snowtown", mode: "drive" },
      { from: "snowtown", to: "yanji", mode: "drive" },
      { from: "yanji", to: "dunhua", mode: "drive" },
      { from: "dunhua", to: "jilin-city", mode: "drive" },
      { from: "jilin-city", to: "changchun", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – เซี่ยงไฮ้ – ฮาร์บิน", en: "Bangkok – Shanghai – Harbin" },
        stops: ["harbin"],
        along: [
          { th: "บินสุวรรณภูมิ–เซี่ยงไฮ้ผู่ตง (FM848) ต่อเครื่องสู่ฮาร์บิน (FM9063)", en: "Fly Suvarnabhumi–Shanghai Pudong (FM848), connect to Harbin (FM9063)" },
          { th: "ซูเปอร์มาร์เก็ตชุดกันหนาวตงเป่ย เลือกซื้อเสื้อกันหนาว", en: "Dongbei winter-wear supermarket to pick up cold-weather clothing" },
        ],
        hotel: { name: "BORRNI HOTEL, HARBIN", star: 4, cityId: "harbin", note: { th: "หรือ Fanhua Lily / Aoxue Four Seasons ระดับ 4★", en: "or Fanhua Lily / Aoxue Four Seasons 4★" } },
      },
      {
        day: 2,
        title: { th: "ฮาร์บิน – เซนต์โซเฟีย – ถนนจงยาง – เมืองน้ำแข็ง", en: "Harbin – St Sophia – Central Street – Ice & Snow World" },
        stops: ["harbin"],
        along: [
          { th: "จัตุรัสโบสถ์เซนต์โซเฟีย และถนนคนเดินจงยาง (แจกไอติมมาเตี๋ยร์ 1 แท่ง)", en: "St Sophia square and Central Street (with a Madieer ice-cream bar)", stopId: "harbin" },
          { th: "ย่านจงหัวบาร็อค และมนุษย์หิมะยักษ์ที่สวนดนตรี", en: "China Baroque quarter and the giant snowman at Music Park", stopId: "harbin" },
          { th: "เมืองน้ำแข็งฮาร์บิน (Ice & Snow World) สวนน้ำแข็งที่ใหญ่ที่สุดในโลก", en: "Harbin Ice & Snow World, the planet's largest ice theme park", stopId: "harbin" },
        ],
        hotel: { name: "BORRNI HOTEL, HARBIN", star: 4, cityId: "harbin", note: { th: "หรือ Fanhua Lily / Aoxue Four Seasons ระดับ 4★", en: "or Fanhua Lily / Aoxue Four Seasons 4★" } },
      },
      {
        day: 3,
        title: { th: "ฮาร์บิน – หมู่บ้านหิมะ (~5 ชม.) – เลื่อนม้า – ถนนเสวี่ยอวิ้น", en: "Harbin – Snow Town (~5h) – horse sled – Xueyun Street" },
        stops: ["snowtown"],
        along: [
          { th: "นั่งเลื่อนม้าลากบนหิมะ และเข้าหมู่บ้านหิมะ (รวมรถต่อเข้าหมู่บ้าน)", en: "Horse-drawn snow sled and Snow Town (with shuttle transfer)", stopId: "snowtown" },
          { th: "ทางเดินไม้เขาปั้งฉุย จุดชมป่าหิมะ และสวนเมิ่งฮว่านเจียหยวน", en: "Bangchui Hill boardwalk over the snow forest and Dreamland park" },
          { th: "ถนนเสวี่ยอวิ้นยามค่ำ ขบวนรถแห่ และเล่นเทน้ำร้อนกลายเป็นน้ำแข็ง", en: "Xueyun Street by night, the float parade and the 'splash-freeze' ice game", stopId: "snowtown" },
        ],
        drive: { th: "ฮาร์บิน–หมู่บ้านหิมะ ~5 ชม.", en: "Harbin–Snow Town ~5h" },
        hotel: { name: "SNOW TOWN VILLAGE INN (XUEXIANG)", cityId: "snowtown", note: { th: "ห้องเตียงคู่ หรือเตียงคัง (เตียงอุ่น) ในหมู่บ้าน", en: "Twin room or heated 'kang' bed inside the village" } },
      },
      {
        day: 4,
        title: { th: "หมู่บ้านหิมะ – เหยียนจี๋ (~5 ชม.) – ขับสโนว์โมบิล", en: "Snow Town – Yanji (~5h) – snowmobiling" },
        stops: ["yanji"],
        along: [
          { th: "หอศิลป์หิมะ และขับสโนว์โมบิลตะลุยป่าหิมะ", en: "The ice gallery and snowmobiling through the snow forest" },
          { th: "หุบเขาหิมะใหญ่ (Great Snow Valley) สวนสนุกหิมะ", en: "The Great Snow Valley snow-play park" },
        ],
        drive: { th: "หมู่บ้านหิมะ–เหยียนจี๋ ~5 ชม.", en: "Snow Town–Yanji ~5h" },
        hotel: { name: "YANJI HUAYANG HOTEL", star: 4, cityId: "yanji", note: { th: "หรือ Kelidun / Qianyuan Xiangyu ระดับ 4★", en: "or Kelidun / Qianyuan Xiangyu 4★" } },
      },
      {
        day: 5,
        title: { th: "เหยียนจี๋ – หมู่บ้านเกาหลี – ถูเหมิน – ตุนฮว่า (~2 ชม.)", en: "Yanji – Korean folk village – Tumen – Dunhua (~2h)" },
        stops: ["dunhua"],
        along: [
          { th: "หมู่บ้านวัฒนธรรมเกาหลี สัมผัสวิถีชนชาติเกาหลีเหยียนเปียน", en: "The Korean folk village, immersed in Yanbian Korean culture", stopId: "yanji" },
          { th: "เมืองถูเหมิน ด่านชายแดนติดเกาหลีเหนือแห่งเดียวในเขตเมืองของจี๋หลิน", en: "Tumen, Jilin's only in-city border crossing facing North Korea" },
        ],
        drive: { th: "เหยียนจี๋–ตุนฮว่า ~2 ชม.", en: "Yanji–Dunhua ~2h" },
        hotel: { name: "DUNHUA LIUDINGSHAN CULTURE HOTEL", star: 4, cityId: "dunhua", note: { th: "หรือ Puti / Tiger ระดับ 4★", en: "or Puti / Tiger Hotel 4★" } },
      },
      {
        day: 6,
        title: { th: "ตุนฮว่า – พระทองลิ่วติ่งซาน – จี๋หลิน – ลานสกีว่านเคอ", en: "Dunhua – Liudingshan Golden Buddha – Jilin – Vanke ski" },
        stops: ["jilin-city"],
        along: [
          { th: "พระทองลิ่วติ่งซาน พระศากยมุนีสำริดกลางแจ้งที่สูงที่สุดในโลก", en: "Liudingshan Golden Buddha, the world's tallest outdoor bronze Sakyamuni", stopId: "dunhua" },
          { th: "ลานสกีว่านเคอ เล่นสกีพร้อมชมป่าอู้ซง (น้ำค้างแข็ง)", en: "Vanke ski resort — skiing amid the wusong rime forest", stopId: "jilin-city" },
        ],
        hotel: { name: "VIENNA HOTEL, JILIN", star: 4, cityId: "jilin-city", note: { th: "หรือ Libo Hotel ระดับ 4★", en: "or Libo Hotel 4★" } },
      },
      {
        day: 7,
        title: { th: "ระเบียงอู้ซง – ฉางชุน – เซี่ยงไฮ้ – กรุงเทพฯ", en: "Rime corridor – Changchun – Shanghai – Bangkok" },
        stops: ["changchun"],
        along: [
          { th: "ระเบียงอู้ซงยามเช้า น้ำค้างแข็งเกาะกิ่งไม้ราวกับแดนสวรรค์", en: "The dawn rime corridor — frost-laden willows like a fairyland", stopId: "jilin-city" },
          { th: "บินฉางชุน–เซี่ยงไฮ้ผู่ตง (FM9080) ต่อเครื่องกลับกรุงเทพฯ (FM833)", en: "Fly Changchun–Shanghai Pudong (FM9080), connect home to Bangkok (FM833)" },
        ],
      },
    ],
  },
  {
    id: "2UYCU-ZH001",
    regionId: "shanxi",
    flights: [
      {
        airports: ["BKK", "YCU"],
        airline: "Shenzhen Airlines (ZH)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5 ชม.", en: "Direct ≈ 5h" },
        hops: [{ from: "BKK", to: "YCU", flightNo: "ZH282", dep: "12:40", arr: "17:30" }],
      },
      {
        airports: ["YCU", "BKK"],
        airline: "Shenzhen Airlines (ZH)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5 ชม.", en: "Direct ≈ 5h" },
        hops: [{ from: "YCU", to: "BKK", flightNo: "ZH281", dep: "08:15", arr: "11:40" }],
      },
    ],
    title: {
      th: "บินตรงหยุนเฉิง ซานซี ครบสามมรดกโลก อู่ไถซาน หยุนกัง ผิงเหยา",
      en: "Direct to Yuncheng — Shanxi's 3 World Heritage sites: Wutai, Yungang & Pingyao",
    },
    oneLiner: {
      th: "บินตรงเข้าซานซีใต้ เก็บครบพุทธคีรีอู่ไถซาน ผาแกะสลักหยุนกัง และเมืองโบราณผิงเหยา — เส้นทางมรดกโลกที่คนไทยยังไปไม่เยอะ",
      en: "A direct entry into southern Shanxi bagging Mount Wutai, the Yungang Grottoes and Pingyao — a heritage route few Thais have done.",
    },
    days: 6,
    nights: 5,
    airline: "Shenzhen Airlines (ZH)",
    via: { th: "บินตรง", en: "direct" },
    difficulty: "moderate",
    altitudeNote: { th: "ปานกลาง • อู่ไถซานสูง ~1,700–2,000 ม. อากาศเย็น", en: "Moderate • Mount Wutai ~1,700–2,000 m, cool air" },
    bestMonths: {
      th: "เม.ย.–ต.ค. • ใบไม้เปลี่ยนสีเดือนต.ค.",
      en: "Apr–Oct • autumn foliage in October",
    },
    months: [4, 5, 9, 10],
    highlights: [
      { th: "อู่ไถซาน พุทธคีรีมรดกโลก หนึ่งในสี่ภูเขาศักดิ์สิทธิ์ของจีน", en: "Mount Wutai, a World Heritage Buddhist peak — one of China's four sacred mountains" },
      { th: "ผาแกะสลักหยุนกัง พุทธศิลป์มรดกโลกกว่า 51,000 องค์", en: "The Yungang Grottoes, a World Heritage cliff of 51,000+ Buddhist carvings" },
      { th: "เมืองโบราณผิงเหยา ‘วอลล์สตรีทแห่งราชวงศ์ชิง’ + โรงแลกเงินยื่อเซิงชาง", en: "Pingyao Ancient City — the 'Wall Street of the Qing' + Rishengchang exchange house" },
      { th: "วัดเสวียนคง อารามลอยฟ้าเกาะหน้าผา", en: "The Hanging Temple (Xuankong), clinging to a sheer cliff" },
    ],
    whoFor: {
      th: "สายประวัติศาสตร์/วัฒนธรรม • สายบุญ/วัด • Repeater ที่อยากได้จีนแปลกใหม่",
      en: "History/culture fans • temple pilgrims • repeaters seeking a fresh corner of China",
    },
    prep: [
      { text: { th: "อู่ไถซานสูงและอากาศเย็นแม้หน้าร้อน เตรียมเสื้อกันหนาว", en: "Mount Wutai is high and cool even in summer — pack warm layers" } },
      { text: { th: "นั่งรถระหว่างเมืองนาน (หยุนเฉิง–ผิงเหยา ~288 กม./4 ชม.)", en: "Long intercity drives (Yuncheng–Pingyao ~288 km/4h)" } },
      { text: { th: "วันสุดท้ายของทริปนั่งรถไฟความเร็วสูงต้าถง–หยุนเฉิง", en: "A high-speed train Datong–Yuncheng near the end of the trip" } },
    ],
    sellingScript: {
      th: "“อยากได้จีนสายมรดกโลกแบบไม่ตามใคร? บินตรงซานซี เก็บครบอู่ไถซาน หยุนกัง ผิงเหยา ในทริปเดียว”",
      en: "\"Want a heritage China no one else is selling? Fly direct to Shanxi for Wutai, Yungang and Pingyao in one trip.\"",
    },
    crossSell: {
      th: "คู่กับทริปไท่หยวน 8 วัน (TYN-MU001) สำหรับลูกค้าที่อยากเก็บซานซีให้ครบ",
      en: "Pair with the 8-day Taiyuan trip (TYN-MU001) for guests who want all of Shanxi.",
    },
    customerSegments: ["culture", "repeater", "photography"],
    routeSegments: [
      { from: "yuncheng", to: "pingyao", mode: "drive" },
      { from: "pingyao", to: "wutaishan", mode: "drive" },
      { from: "wutaishan", to: "datong", mode: "drive" },
      { from: "datong", to: "yuncheng", mode: "train", hours: 3 },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – หยุนเฉิง", en: "Bangkok – Yuncheng" },
        stops: ["yuncheng"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–หยุนเฉิง (ZH282)", en: "Fly direct Suvarnabhumi–Yuncheng (ZH282)" },
          { th: "ถึงหยุนเฉิง บ้านเกิดเทพเจ้ากวนอู ริมทะเลสาบเกลือ เข้าที่พัก", en: "Arrive Yuncheng, Guan Yu's salt-lake hometown, and check in", stopId: "yuncheng" },
        ],
        hotel: { name: "YUNCHENG PARK PLAZA HOTEL", star: 4, cityId: "yuncheng", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "หยุนเฉิง – เมืองโบราณผิงเหยา", en: "Yuncheng – Pingyao Ancient City" },
        stops: ["pingyao"],
        along: [
          { th: "เมืองโบราณผิงเหยา มรดกโลกที่มีคนอาศัยอยู่จริง", en: "Pingyao Ancient City, a living World Heritage town", stopId: "pingyao" },
          { th: "กำแพงเมืองโบราณ + ถนนคนเดินหมิง–ชิง + ที่ว่าการอำเภอโบราณ", en: "The old city wall + Ming-Qing street + the ancient county yamen" },
          { th: "โรงแลกเงินยื่อเซิงชาง ต้นกำเนิดธนาคารแห่งแรกของจีน", en: "The Rishengchang exchange house, China's first 'bank'", stopId: "pingyao" },
        ],
        drive: { th: "หยุนเฉิง → ผิงเหยา ~288 กม. / 4 ชม.", en: "Yuncheng → Pingyao ~288 km / 4h" },
        hotel: { name: "PINGYAO HUIGUAN HOTEL", star: 4, cityId: "pingyao", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "อู่ไถซาน – วัดผู่ซาติ่ง – วัดเสียนทง", en: "Mount Wutai – Pusading & Xiantong temples" },
        stops: ["wutaishan"],
        along: [
          { th: "วัดผู่ซาติ่ง และวัดถ่าหยวน เจดีย์ขาวสัญลักษณ์ของอู่ไถซาน", en: "Pusading temple and Tayuan temple, the white stupa landmark of Wutai", stopId: "wutaishan" },
          { th: "วัดเสียนทง วัดเก่าแก่ที่สุดบนอู่ไถซาน + หอหมื่นพุทธะ", en: "Xiantong, the oldest temple on Wutai + the Hall of Ten Thousand Buddhas", stopId: "wutaishan" },
        ],
        hotel: { name: "WUTAI MOUNTAIN HUAHUI JUNLAN MANOR", star: 4, cityId: "wutaishan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "วัดเสวียนคง – ต้าถง – ผาแกะสลักหยุนกัง", en: "Hanging Temple – Datong – Yungang Grottoes" },
        stops: ["datong"],
        along: [
          { th: "หุนหยวน วัดเสวียนคง อารามลอยฟ้าเกาะหน้าผา (รวมรถอุทยาน)", en: "Hunyuan's Hanging Temple, clinging to a cliff face", stopId: "datong" },
          { th: "ผาแกะสลักหยุนกัง พุทธศิลป์มรดกโลก (รวมรถอุทยาน)", en: "The Yungang Grottoes, a World Heritage Buddhist cliff", stopId: "datong" },
        ],
        drive: { th: "อู่ไถซาน → ต้าถง", en: "Mount Wutai → Datong" },
        hotel: { name: "DATONG MEILIHAO HOTEL", star: 4, cityId: "datong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ต้าถง – หยุนเฉิง (รถไฟความเร็วสูง) – ศาลกวนอู", en: "Datong – Yuncheng (high-speed rail) – Guandi Temple" },
        stops: ["yuncheng"],
        along: [
          { th: "นั่งรถไฟความเร็วสูงต้าถง–หยุนเฉิง", en: "High-speed train Datong–Yuncheng", stopId: "yuncheng" },
          { th: "ศาลเจ้ากวนอู (กวนตี้) สักการะเทพเจ้าแห่งความซื่อสัตย์", en: "The Guandi Temple, honouring the god of loyalty Guan Yu", stopId: "yuncheng" },
        ],
        hotel: { name: "YUNCHENG PARK PLAZA HOTEL", star: 4, cityId: "yuncheng", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "หยุนเฉิง – กรุงเทพฯ", en: "Yuncheng – Bangkok" },
        stops: ["yuncheng"],
        along: [
          { th: "บินตรงหยุนเฉิง–สุวรรณภูมิ (ZH281)", en: "Fly direct Yuncheng–Suvarnabhumi (ZH281)" },
        ],
      },
    ],
  },
  {
    id: "GO1DSN-VZ001",
    regionId: "innermongolia",
    flights: [
      {
        airports: ["BKK", "DSN"],
        airline: "Thai Vietjet (VZ)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
        hops: [{ from: "BKK", to: "DSN", flightNo: "VZ3534", dep: "16:20", arr: "22:00" }],
      },
      {
        airports: ["DSN", "BKK"],
        airline: "Thai Vietjet (VZ)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5.5 ชม. (ถึงเช้าวันรุ่งขึ้น)", en: "Direct ≈ 5.5h (arrives next morning)" },
        hops: [{ from: "DSN", to: "BKK", flightNo: "VZ3535", dep: "22:50", arr: "02:50+1" }],
      },
    ],
    title: {
      th: "บินตรงเออร์ดอส มองโกเลียใน ตะลุยทุ่งหญ้า–ทะเลทราย ควบม้าท้าสายลม",
      en: "Direct to Ordos — Inner Mongolia grasslands, dunes & horseback freedom",
    },
    oneLiner: {
      th: "บินตรงสู่มองโกเลียใน นอนกระโจมกลางทุ่งหญ้า ขี่อูฐบนเนินทรายเสี่ยงซาวาน และสัมผัสวัฒนธรรมชนเผ่าเร่ร่อน",
      en: "Fly direct to Inner Mongolia — sleep in a grassland yurt, ride camels on the Xiangshawan dunes and live nomadic Mongol culture.",
    },
    days: 6,
    nights: 5,
    airline: "Thai Vietjet (VZ)",
    via: { th: "บินตรง", en: "direct" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ที่ราบสูง ~1,300 ม. แดดแรง อากาศแห้ง", en: "Easy • plateau ~1,300 m, strong sun and dry air" },
    bestMonths: {
      th: "มิ.ย.–ก.ย. • ทุ่งหญ้าเขียวสุดในมิ.ย.–ก.ค.",
      en: "Jun–Sep • grasslands greenest in Jun–Jul",
    },
    months: [6, 7, 8, 9],
    highlights: [
      { th: "นอนกระโจมมองโกล (Yurt) กลางทุ่งหญ้าเออร์ดอส + งานเลี้ยงรอบกองไฟ", en: "Sleep in a Mongol yurt on the Ordos grassland + a campfire feast" },
      { th: "เนินทรายเสี่ยงซาวาน ขี่อูฐ + กระเช้าข้ามทะเลทรายคูปูฉี", en: "Xiangshawan dunes — camel rides + a cable car across the Kubuqi Desert" },
      { th: "สุสานเจงกิสข่าน และวัฒนธรรมมองโกลที่ยังมีชีวิต", en: "The Genghis Khan Mausoleum and living Mongol culture" },
      { th: "โฮฮอต สุสานหวังเจาจวิน + อารามต้าเจา", en: "Hohhot — the Wang Zhaojun tomb + the Dazhao Monastery" },
    ],
    whoFor: {
      th: "ครอบครัว/เด็ก • สายแอดเวนเจอร์ • คนอยากได้ exotic ที่ไม่ลำบาก • สายถ่ายรูปทะเลทราย",
      en: "Families/kids • adventure seekers • exotic-but-easy travellers • desert photographers",
    },
    prep: [
      { text: { th: "แดดแรง อากาศแห้ง เตรียมครีมกันแดด หมวก และน้ำดื่ม", en: "Strong sun and dry air — bring sunscreen, a hat and water" } },
      { text: { th: "ที่พักกระโจมมองโกลเป็นแบบทันสมัย 1 คืน แต่สิ่งอำนวยความสะดวกจำกัด", en: "One night in a modern yurt; amenities are limited" } },
      { text: { th: "โปรแกรมมีร้านช้อปปิ้ง 2 ร้าน (ผลิตภัณฑ์โคนม/อูฐ)", en: "Itinerary includes 2 shopping stops (dairy / camel products)" } },
      { text: { th: "กิจกรรมขี่ม้า ยิงธนู โกคาร์ท เป็นค่าใช้จ่ายเพิ่มเติม", en: "Horse riding, archery and go-karts are optional paid activities" } },
    ],
    sellingScript: {
      th: "“อยากได้จีนที่เหมือนอยู่อีกโลก? บินตรงมองโกเลียใน นอนกระโจมกลางทุ่งหญ้า ขี่อูฐบนทะเลทราย สัมผัสจิตวิญญาณนักรบมองโกล”",
      en: "\"Want a China that feels like another world? Fly direct to Inner Mongolia — yurt nights on the grassland, camels on the dunes, the Mongol warrior spirit.\"",
    },
    crossSell: {
      th: "เส้นทางแปลกใหม่สำหรับ repeater — เสนอคู่กับซานซี (YCU/TYN) ที่อยู่ใกล้กัน",
      en: "A novel route for repeaters — pair with nearby Shanxi trips (YCU/TYN).",
    },
    customerSegments: ["family", "adventure", "photography", "repeater"],
    routeSegments: [
      { from: "ordos", to: "hohhot", mode: "drive" },
      { from: "hohhot", to: "dalad", mode: "drive" },
      { from: "dalad", to: "xiangshawan", mode: "drive" },
      { from: "xiangshawan", to: "ordos", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – เออร์ดอส", en: "Bangkok – Ordos" },
        stops: ["ordos"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–เออร์ดอส (VZ3534)", en: "Fly direct Suvarnabhumi–Ordos (VZ3534)" },
          { th: "ถึงเออร์ดอส ‘หมู่พระราชวังอันมากมาย’ เข้าที่พัก", en: "Arrive Ordos, 'the many palaces', and check in", stopId: "ordos" },
        ],
        hotel: { name: "HOLIDAY INN EXPRESS ORDOS", star: 4, cityId: "ordos", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ทุ่งหญ้าเออร์ดอส – กิจกรรมแบบชาวมองโกล", en: "Ordos Grassland – Mongol experiences" },
        stops: ["ordos"],
        along: [
          { th: "ทุ่งหญ้าเออร์ดอส เต็นท์มองโกล 399 หลังผังรูป ‘นกอินทรีกางปีก’", en: "Ordos Grassland with 399 yurts in an 'eagle-spreading-wings' layout", stopId: "ordos" },
          { th: "สวมชุดมองโกล ถ่ายรูปกับน้องแกะ และงานเลี้ยงรอบกองไฟ", en: "Wear Mongol robes, photos with the sheep, and a campfire feast" },
        ],
        drive: { th: "เออร์ดอส → ทุ่งหญ้า ~127 กม. / 3 ชม.", en: "Ordos → grassland ~127 km / 3h" },
        hotel: { name: "MONGOLIC YURT (modern)", star: 4, cityId: "ordos", note: { th: "กระโจมมองโกลแบบทันสมัย", en: "modern Mongolian yurt" } },
      },
      {
        day: 3,
        title: { th: "โฮฮอต – สุสานหวังเจาจวิน – อารามต้าเจา – ต้าลาฉี", en: "Hohhot – Wang Zhaojun Tomb – Dazhao – Dalad" },
        stops: ["hohhot", "dalad"],
        along: [
          { th: "ศูนย์แสดงผลิตภัณฑ์โคนมเหมิงเลี่ยง", en: "The Mengniu dairy products centre", stopId: "hohhot" },
          { th: "สุสานหวังเจาจวิน และอารามต้าเจาในโฮฮอต", en: "The Wang Zhaojun tomb and the Dazhao Monastery in Hohhot", stopId: "hohhot" },
          { th: "เดินทางสู่เมืองต้าลาฉี (ดาลัตแบนเนอร์)", en: "Continue to Dalad Banner", stopId: "dalad" },
        ],
        hotel: { name: "ZHENJIN INTERNATIONAL HOTEL", star: 4, cityId: "dalad", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "เนินทรายเสี่ยงซาวาน – ขี่อูฐ – เออร์ดอส", en: "Xiangshawan dunes – camel ride – Ordos" },
        stops: ["xiangshawan"],
        along: [
          { th: "เนินทรายเสี่ยงซาวาน (รวมกระเช้า + ผ้าหุ้มรองเท้า)", en: "Xiangshawan dunes (cable car + shoe covers included)", stopId: "xiangshawan" },
          { th: "ขี่อูฐชมทะเลทราย และชมงานจิตรกรรมทราย", en: "Camel ride across the desert and a sand-art show" },
        ],
        drive: { th: "ต้าลาฉี → เสี่ยงซาวาน → เออร์ดอส", en: "Dalad → Xiangshawan → Ordos" },
        hotel: { name: "HOLIDAY INN EXPRESS ORDOS", star: 4, cityId: "ordos", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "อารามซือหนี – สวนวัฒนธรรมมองโกล – เมืองใหม่คังปาสือ", en: "Sini Monastery – Mongol culture park – Kangbashi" },
        stops: ["ordos"],
        along: [
          { th: "ศูนย์ผลิตภัณฑ์เส้นใยขนอูฐ และอารามซือหนี", en: "The camel-wool centre and the Sini Monastery" },
          { th: "สวนวัฒนธรรมมองโกลหยวนหลิว และวัดพระมหามัยมุนี", en: "The Yuanliu Mongol culture park and the Mahamuni temple" },
          { th: "เมืองใหม่คังปาสือ เมืองอนาคตกลางที่ราบสูง", en: "The futuristic Kangbashi new town on the plateau", stopId: "ordos" },
        ],
        hotel: { name: "HOLIDAY INN EXPRESS ORDOS", star: 4, cityId: "ordos", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "สุสานเจงกิสข่าน – เออร์ดอส – กรุงเทพฯ", en: "Genghis Khan Mausoleum – Ordos – Bangkok" },
        stops: ["ordos"],
        along: [
          { th: "สุสานเจงกิสข่าน และถนนคนเดินเออร์ดอส", en: "The Genghis Khan Mausoleum and the Ordos pedestrian street", stopId: "ordos" },
          { th: "บินตรงเออร์ดอส–สุวรรณภูมิ (VZ3535)", en: "Fly direct Ordos–Suvarnabhumi (VZ3535)" },
        ],
      },
    ],
  },
  {
    id: "GO1TYN-MU001",
    regionId: "shanxi",
    flights: [
      {
        airports: ["BKK", "TYN"],
        airline: "China Eastern (MU)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
        hops: [{ from: "BKK", to: "TYN", flightNo: "MU5068", dep: "14:25", arr: "19:45" }],
      },
      {
        airports: ["TYN", "BKK"],
        airline: "China Eastern (MU)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5.5 ชม.", en: "Direct ≈ 5.5h" },
        hops: [{ from: "TYN", to: "BKK", flightNo: "MU5067", dep: "09:35", arr: "13:30" }],
      },
    ],
    title: {
      th: "บินตรงไท่หยวน ต้าถง ผิงเหยา มรดกโลกแดนมังกร 8 วัน",
      en: "Direct to Taiyuan — Datong, Pingyao & Shanxi's World Heritage, 8 days",
    },
    oneLiner: {
      th: "ซานซีฉบับเต็ม 8 วัน บินตรงไท่หยวน เก็บครบอู่ไถซาน หยุนกัง ผิงเหยา น้ำตกหูโข่ว และวัดจิ้นฉือ",
      en: "The full 8-day Shanxi — direct to Taiyuan for Wutai, Yungang, Pingyao, Hukou Waterfall and the Jinci Temple.",
    },
    days: 8,
    nights: 7,
    airline: "China Eastern (MU)",
    via: { th: "บินตรง", en: "direct" },
    difficulty: "moderate",
    altitudeNote: { th: "ปานกลาง • อู่ไถซานสูงและเย็น นั่งรถระหว่างเมืองนาน", en: "Moderate • Mount Wutai is high and cool; long intercity drives" },
    bestMonths: {
      th: "พ.ค.–ต.ค. • ใบไม้เปลี่ยนสีและน้ำตกหูโข่วสวยช่วงฤดูฝน–ใบไม้ร่วง",
      en: "May–Oct • foliage and a fuller Hukou Waterfall in the rainy/autumn season",
    },
    months: [5, 9, 10],
    highlights: [
      { th: "อู่ไถซาน นมัสการพระโพธิสัตว์เหวินซู มหาโพธิสัตว์แห่งปัญญา", en: "Mount Wutai, honouring Mañjuśrī, the Bodhisattva of wisdom" },
      { th: "ผาแกะสลักหยุนกัง + วัดเสียนคง อารามริมผา", en: "The Yungang Grottoes + the cliff-side Hanging Temple" },
      { th: "เมืองโบราณผิงเหยา + เจดีย์ไม้วัดฝอกวง 1,000 ปี", en: "Pingyao Ancient City + the 1,000-year wooden Fogong pagoda" },
      { th: "น้ำตกหูโข่ว สายน้ำสีอำพันบนแม่น้ำเหลือง + วัดจิ้นฉือ", en: "Hukou Waterfall, the amber Yellow River torrent + the Jinci Temple" },
    ],
    whoFor: {
      th: "สายประวัติศาสตร์/วัฒนธรรมแบบจัดเต็ม • สายบุญ • Repeater ที่มีเวลา 8 วัน",
      en: "Deep history/culture fans • pilgrims • repeaters with 8 days to spare",
    },
    prep: [
      { text: { th: "ทริปยาว 8 วัน นั่งรถระหว่างเมืองหลายช่วง (ไท่หยวน–ต้าถง ~275 กม./4 ชม.)", en: "A long 8-day trip with several intercity drives (Taiyuan–Datong ~275 km/4h)" } },
      { text: { th: "อู่ไถซานสูงและอากาศเย็น เตรียมเสื้อกันหนาว", en: "Mount Wutai is high and cool — pack warm layers" } },
      { text: { th: "น้ำตกหูโข่วปริมาณน้ำขึ้นกับฤดู สวยสุดช่วงฤดูฝน–ใบไม้ร่วง", en: "Hukou's flow depends on season — fullest in the rainy/autumn months" } },
    ],
    sellingScript: {
      th: "“ให้เวลาซานซี 8 วันเต็ม เก็บครบมรดกโลก พุทธคีรี เมืองโบราณ และน้ำตกหูโข่วบนแม่น้ำเหลือง — จีนสายลึกของจริง”",
      en: "\"Give Shanxi a full 8 days — all the World Heritage, sacred peaks, ancient towns and the Yellow River's Hukou Waterfall; deep-cut China.\"",
    },
    crossSell: {
      th: "ตัวจัดเต็มของซานซี — สำหรับลูกค้าเวลาน้อยเสนอ YCU-ZH001 (6 วัน) แทน",
      en: "The full Shanxi option — for time-pressed guests offer YCU-ZH001 (6 days) instead.",
    },
    customerSegments: ["culture", "repeater", "photography"],
    routeSegments: [
      { from: "taiyuan", to: "datong", mode: "drive" },
      { from: "datong", to: "wutaishan", mode: "drive" },
      { from: "wutaishan", to: "taiyuan", mode: "drive" },
      { from: "taiyuan", to: "jixian", mode: "drive" },
      { from: "jixian", to: "hukou", mode: "drive" },
      { from: "hukou", to: "pingyao", mode: "drive" },
      { from: "pingyao", to: "taiyuan", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ไท่หยวน", en: "Bangkok – Taiyuan" },
        stops: ["taiyuan"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–ไท่หยวน (MU5068)", en: "Fly direct Suvarnabhumi–Taiyuan (MU5068)" },
          { th: "ถึงไท่หยวน เมืองเอกของซานซี เข้าที่พัก", en: "Arrive Taiyuan, Shanxi's capital, and check in", stopId: "taiyuan" },
        ],
        hotel: { name: "TAIYUAN YIHE HOTEL", star: 4, cityId: "taiyuan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ไท่หยวน – เจดีย์ไม้วัดฝอกวง – ต้าถง", en: "Taiyuan – Fogong wooden pagoda – Datong" },
        stops: ["datong"],
        along: [
          { th: "เจดีย์ไม้วัดฝอกวง เจดีย์ไม้อายุกว่า 1,000 ปี", en: "The Fogong Temple wooden pagoda, over 1,000 years old", stopId: "datong" },
          { th: "กำแพงเก้ามังกร และกำแพงเมืองโบราณต้าถง", en: "The Nine-Dragon Wall and Datong's ancient city wall", stopId: "datong" },
        ],
        drive: { th: "ไท่หยวน → ต้าถง ~275 กม. / 4 ชม.", en: "Taiyuan → Datong ~275 km / 4h" },
        hotel: { name: "DATONG TIANGUI HOTEL", star: 4, cityId: "datong", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "ต้าถง – ผาแกะสลักหยุนกัง – วัดเสียนคง – อู่ไถซาน", en: "Datong – Yungang – Hanging Temple – Wutai" },
        stops: ["wutaishan"],
        along: [
          { th: "ผาแกะสลักหยุนกัง พุทธศิลป์มรดกโลก (รวมรถอุทยาน)", en: "The Yungang Grottoes, a World Heritage Buddhist cliff", stopId: "datong" },
          { th: "วัดเสียนคง อารามริมผาจุดรวม 3 ศาสนา", en: "The Hanging Temple, a cliff shrine of three religions", stopId: "datong" },
        ],
        drive: { th: "ต้าถง → วัดเสียนคง ~97 กม. / 1.5 ชม. → อู่ไถซาน", en: "Datong → Hanging Temple ~97 km / 1.5h → Wutai" },
        hotel: { name: "WUTAISHAN FRIENDSHIP HOTEL", star: 4, cityId: "wutaishan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "อู่ไถซาน – ยอดพระโพธิสัตว์ – ไท่หยวน", en: "Mount Wutai – Bodhisattva Peak – Taiyuan" },
        stops: ["taiyuan"],
        along: [
          { th: "ยอดพระโพธิสัตว์ วัดเสียนทง วัดถ่าหยวน และอารามหมื่นพระพุทธ", en: "Bodhisattva Peak, Xiantong, Tayuan and the Wanfo monastery", stopId: "wutaishan" },
          { th: "กลับไท่หยวน เดินถนนคนเดินจงโหลว", en: "Back to Taiyuan, stroll the Zhonglou pedestrian street", stopId: "taiyuan" },
        ],
        drive: { th: "อู่ไถซาน → ไท่หยวน", en: "Mount Wutai → Taiyuan" },
        hotel: { name: "TAIYUAN YIHE HOTEL", star: 4, cityId: "taiyuan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ไท่หยวน – เมืองโบราณจางปี้ – วัดกว่างเซิ่ง – จี๋เซี่ยน", en: "Taiyuan – Zhangbi castle – Guangsheng – Jixian" },
        stops: ["jixian"],
        along: [
          { th: "เมืองโบราณจางปี้ ป้อมใต้ดินสมัยราชวงศ์สุย", en: "The Zhangbi ancient castle with its Sui-era underground tunnels" },
          { th: "วัดกว่างเซิ่ง เจดีย์เคลือบสีรุ้งเฟยหง", en: "The Guangsheng Temple and its rainbow-glazed Feihong pagoda" },
        ],
        drive: { th: "ไท่หยวน → จี๋เซี่ยน", en: "Taiyuan → Jixian" },
        hotel: { name: "JIZHOU HOTEL", star: 4, cityId: "jixian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "น้ำตกหูโข่ว – คฤหาสน์ตระกูลหวัง", en: "Hukou Waterfall – Wang Family Compound" },
        stops: ["hukou", "pingyao"],
        along: [
          { th: "น้ำตกหูโข่ว น้ำตกที่ใหญ่ที่สุดบนแม่น้ำเหลือง", en: "Hukou Waterfall, the largest on the Yellow River", stopId: "hukou" },
          { th: "คฤหาสน์ตระกูลหวัง ‘พระราชวังของสามัญชน’ สมัยชิง", en: "The Wang Family Compound, a Qing-era 'commoner's palace'", stopId: "pingyao" },
        ],
        drive: { th: "จี๋เซี่ยน → หูโข่ว → ผิงเหยา", en: "Jixian → Hukou → Pingyao" },
        hotel: { name: "PINGYAO TRADITION HOTEL", star: 4, cityId: "pingyao", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "เมืองโบราณผิงเหยา – วัดจิ้นฉือ – ไท่หยวน", en: "Pingyao Ancient City – Jinci Temple – Taiyuan" },
        stops: ["pingyao", "taiyuan"],
        along: [
          { th: "กำแพงเมืองโบราณผิงเหยา ถนนหมิง–ชิง และโรงแลกเงิน", en: "Pingyao's old wall, the Ming-Qing street and the exchange house", stopId: "pingyao" },
          { th: "วัดจิ้นฉือ วัดสวนโบราณริมแม่น้ำเฝินที่ไท่หยวน", en: "The Jinci Temple, an ancient garden shrine on the Fen River in Taiyuan", stopId: "taiyuan" },
        ],
        drive: { th: "ผิงเหยา → ไท่หยวน", en: "Pingyao → Taiyuan" },
        hotel: { name: "PULLMAN TAIYUAN HOTEL", star: 5, cityId: "taiyuan", note: { th: "หรือเทียบเท่า 4–5 ดาว (มาตรฐานจีน)", en: "or equivalent 4–5 star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "ไท่หยวน – กรุงเทพฯ", en: "Taiyuan – Bangkok" },
        stops: ["taiyuan"],
        along: [
          { th: "บินตรงไท่หยวน–สุวรรณภูมิ (MU5067)", en: "Fly direct Taiyuan–Suvarnabhumi (MU5067)" },
        ],
      },
    ],
  },
  {
    id: "GO1XNN-VZ004",
    regionId: "tibet",
    flights: [
      {
        airports: ["BKK", "XNN"],
        airline: "Thai Vietjet (VZ)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 5 ชม.", en: "Direct ≈ 5h" },
        hops: [{ from: "BKK", to: "XNN", flightNo: "VZ3690", dep: "17:40", arr: "22:40" }],
      },
      {
        airports: ["XNN", "BKK"],
        airline: "Thai Vietjet (VZ)",
        direction: "return",
        duration: { th: "บินตรง ≈ 5 ชม. (ถึงเช้าวันรุ่งขึ้น)", en: "Direct ≈ 5h (arrives next morning)" },
        hops: [{ from: "XNN", to: "BKK", flightNo: "VZ3691", dep: "23:40", arr: "02:45+1" }],
      },
    ],
    title: {
      th: "บินตรงซีหนิง สายไหมสองมณฑล กานซู–ชิงไห่ ม่อเกา เขาสายรุ้ง กระจกฉาข่า",
      en: "Direct to Xining — Gansu–Qinghai Silk Road: Mogao, Rainbow Mountains & Chaka",
    },
    oneLiner: {
      th: "บินตรงซีหนิง วิ่งเส้นทางสายไหม เก็บถ้ำม่อเกา เขาสายรุ้งจางเย่ เนินทรายจันทร์เสี้ยว ทะเลสาบชิงไห่ และกระจกส่องฟ้าฉาข่า",
      en: "Fly direct to Xining and run the Silk Road — Mogao Caves, Zhangye's rainbow mountains, Crescent dunes, Qinghai Lake and Chaka's 'sky mirror'.",
    },
    days: 8,
    nights: 7,
    airline: "Thai Vietjet (VZ)",
    via: { th: "บินตรง", en: "direct" },
    difficulty: "moderate",
    altitudeNote: { th: "ปานกลาง–สูง • ซีหนิง ~2,200 ม. ทะเลสาบชิงไห่/ฉาข่า ~3,200 ม.", en: "Moderate–high • Xining ~2,200 m, Qinghai Lake/Chaka ~3,200 m" },
    bestMonths: {
      th: "มิ.ย.–ก.ย. • ทุ่งเรพซีดทะเลสาบชิงไห่บานก.ค., อากาศกำลังดี",
      en: "Jun–Sep • Qinghai Lake rapeseed blooms in July, pleasant weather",
    },
    months: [6, 7, 8, 9],
    highlights: [
      { th: "ถ้ำพุทธศิลป์ม่อเกาคู ตุนหวง มรดกโลกพันปีบนเส้นทางสายไหม", en: "The Mogao Caves at Dunhuang — a millennium of Silk Road World Heritage art" },
      { th: "หุบเขาสายรุ้งจางเย่ตันเซี่ย ภูเขาหลากสีมรดกโลก", en: "The Zhangye Danxia rainbow mountains, World Heritage multicolour hills" },
      { th: "เนินทรายครวญหมิงซาซาน + สระน้ำวงพระจันทร์ + ขี่อูฐ", en: "The Singing-Sand Dunes + Crescent Moon Lake + camel rides" },
      { th: "ทะเลสาบชิงไห่ และกระจกส่องฟ้าฉาข่า + กำแพงเมืองจีนด่านเจียยี่กวน", en: "Qinghai Lake, Chaka's 'sky mirror' + the Great Wall's Jiayuguan fort" },
    ],
    whoFor: {
      th: "สายถ่ายรูป/แลนด์สเคป • สายประวัติศาสตร์สายไหม • Repeater • คู่รัก",
      en: "Landscape photographers • Silk Road history fans • repeaters • couples",
    },
    prep: [
      { text: { th: "อยู่บนที่สูง 2,200–3,200 ม. อาจมีอาการแพ้ความสูงเล็กน้อย พักผ่อนให้พอ", en: "Altitudes of 2,200–3,200 m — mild altitude effects possible; rest well" }, warn: true },
      { text: { th: "ทริปนั่งรถ/รถไฟระยะไกล (จางเย่–เจียยี่กวน–ตุนหวง) และรถไฟความเร็วสูงกลับซีหนิง", en: "Long road/rail legs (Zhangye–Jiayuguan–Dunhuang) and a high-speed train back to Xining" } },
      { text: { th: "แดดแรง อากาศแห้ง อุณหภูมิกลางวัน–กลางคืนต่างมาก เตรียมเสื้อเป็นชั้น", en: "Strong sun, dry air, big day–night temperature swings — dress in layers" } },
      { text: { th: "ถ้ำม่อเกาจองล่วงหน้าและจำกัดจำนวน อาจปรับถ้ำที่เข้าชม", en: "Mogao Caves require advance booking with quotas; the caves shown may vary" } },
    ],
    sellingScript: {
      th: "“อยากได้สายไหมแบบครบจบ? บินตรงซีหนิง เก็บถ้ำม่อเกา เขาสายรุ้ง ทะเลทราย และกระจกฉาข่า — สองมณฑลในทริปเดียว”",
      en: "\"Want the complete Silk Road? Fly direct to Xining for Mogao, the rainbow mountains, the dunes and Chaka's mirror — two provinces in one trip.\"",
    },
    crossSell: {
      th: "เส้นทางสายไหมขั้นกว่า — คู่กับทริปกานซู–เสฉวน หรือทิเบต–ลาซา",
      en: "A next-level Silk Road — pair with the Gansu–Sichuan or Tibet–Lhasa trips.",
    },
    customerSegments: ["photography", "culture", "repeater", "honeymoon"],
    routeSegments: [
      { from: "xining", to: "zhangye", mode: "drive" },
      { from: "zhangye", to: "jiayuguan", mode: "drive" },
      { from: "jiayuguan", to: "dunhuang", mode: "drive" },
      { from: "dunhuang", to: "xining", mode: "train", hours: 6.5 },
      { from: "xining", to: "qinghai-lake", mode: "drive" },
      { from: "qinghai-lake", to: "chaka", mode: "drive" },
      { from: "chaka", to: "xining", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ – ซีหนิง", en: "Bangkok – Xining" },
        stops: ["xining"],
        along: [
          { th: "บินตรงสุวรรณภูมิ–ซีหนิง (VZ3690)", en: "Fly direct Suvarnabhumi–Xining (VZ3690)" },
          { th: "ถึงซีหนิง ประตูสู่ที่ราบสูงชิงไห่–ทิเบต เข้าที่พัก", en: "Arrive Xining, gateway to the Qinghai–Tibet plateau, and check in", stopId: "xining" },
        ],
        hotel: { name: "XINING YONGHE INTERNATIONAL HOTEL", star: 4, cityId: "xining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ทุ่งหญ้าฉีเหลียนซาน – วัดถ้ำเกือกม้า – จางเย่", en: "Qilian grassland – Mati Temple caves – Zhangye" },
        stops: ["zhangye"],
        along: [
          { th: "ทุ่งหญ้าฉีเหลียนซาน รอยต่อชิงไห่–กานซู และฟาร์มอี้เป่า (ชุดทิเบต + ยิงธนู)", en: "The Qilian grassland on the Qinghai–Gansu border and Yibao farm (Tibetan dress + archery)" },
          { th: "ถ้ำพุทธศิลป์หม่าถีซาน (ถ้ำเกือกม้า)", en: "The Mati Temple 'Horseshoe' Buddhist grottoes", stopId: "zhangye" },
        ],
        drive: { th: "ซีหนิง → ฉีเหลียน ~135 กม. / 2 ชม. → จางเย่", en: "Xining → Qilian ~135 km / 2h → Zhangye" },
        hotel: { name: "HOLIDAY INN EXPRESS ZHANGYE", star: 4, cityId: "zhangye", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "หุบเขาสายรุ้งจางเย่ – เจียยี่กวน", en: "Zhangye Rainbow Mountains – Jiayuguan" },
        stops: ["jiayuguan"],
        along: [
          { th: "หุบเขาสายรุ้งจางเย่ตันเซี่ย ภูเขาหลากสีมรดกโลก (รวมรถอุทยาน)", en: "The Zhangye Danxia rainbow mountains, World Heritage multicolour hills", stopId: "zhangye" },
          { th: "เดินทางสู่เจียยี่กวน เมืองปลายกำแพงเมืองจีน", en: "On to Jiayuguan, the Great Wall's western frontier city", stopId: "jiayuguan" },
        ],
        drive: { th: "จางเย่ → เจียยี่กวน", en: "Zhangye → Jiayuguan" },
        hotel: { name: "JIAYUGUAN CHENGFENG HOTEL", star: 4, cityId: "jiayuguan", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ด่านเจียยี่กวน – ตุนหวง", en: "Jiayuguan Great Wall fort – Dunhuang" },
        stops: ["dunhuang"],
        along: [
          { th: "กำแพงเมืองจีนด่านเจียยี่กวน ‘ด่านแรกใต้หล้า’ (รวมรถอุทยาน)", en: "The Jiayuguan Great Wall fort, the 'First Pass under Heaven'", stopId: "jiayuguan" },
          { th: "ประติมากรรมทารกแห่งแผ่นดิน + พระพักตร์จักรพรรดิฮั่นอู่ตี้", en: "The 'Baby of the Earth' sculpture + the Emperor Han Wudi face" },
        ],
        drive: { th: "เจียยี่กวน → ตุนหวง", en: "Jiayuguan → Dunhuang" },
        hotel: { name: "DUNHUANG TIANRUN YIBO HOTEL", star: 4, cityId: "dunhuang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "ถ้ำม่อเกาคู – เนินทรายครวญ – สระน้ำวงพระจันทร์", en: "Mogao Caves – Singing-Sand Dunes – Crescent Lake" },
        stops: ["dunhuang"],
        along: [
          { th: "ถ้ำพุทธศิลป์ม่อเกาคู มรดกโลก (รวมรถอุทยาน)", en: "The Mogao Caves, World Heritage Buddhist art", stopId: "dunhuang" },
          { th: "เนินทรายครวญหมิงซาซาน + สระน้ำวงพระจันทร์ (ขี่อูฐ – ออปชัน)", en: "Mingsha Singing-Sand Dunes + Crescent Moon Lake (optional camel ride)", stopId: "dunhuang" },
          { th: "เจดีย์ม้าขาว และตลาดกลางคืนซาโจว", en: "The White Horse Pagoda and the Shazhou night market", stopId: "dunhuang" },
        ],
        hotel: { name: "DUNHUANG TIANRUN YIBO HOTEL", star: 4, cityId: "dunhuang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "ซีหนิง (รถไฟความเร็วสูง) – ทะเลสาบชิงไห่ – ฉาข่า", en: "Xining (high-speed rail) – Qinghai Lake – Chaka" },
        stops: ["xining", "qinghai-lake", "chaka"],
        along: [
          { th: "นั่งรถไฟความเร็วสูงกลับสู่ซีหนิง", en: "High-speed train back to Xining", stopId: "xining" },
          { th: "ทะเลสาบชิงไห่ ทะเลสาบน้ำเค็มที่ใหญ่ที่สุดของจีน (ล่องเรือ – ออปชัน)", en: "Qinghai Lake, China's largest saltwater lake (optional boat cruise)", stopId: "qinghai-lake" },
          { th: "เดินทางสู่ฉาข่า", en: "Continue to Chaka" },
        ],
        drive: { th: "ซีหนิง → ทะเลสาบชิงไห่ → ฉาข่า", en: "Xining → Qinghai Lake → Chaka" },
        hotel: { name: "CHAKA BAILANDO HOTEL", star: 4, cityId: "chaka", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 7,
        title: { th: "ทะเลสาบเกลือฉาข่า – ตลาดกลางคืนซีหนิง", en: "Chaka Salt Lake – Xining night market" },
        stops: ["chaka", "xining"],
        along: [
          { th: "ทะเลสาบเกลือฉาข่า ‘กระจกส่องฟ้า’ (รวมผ้าหุ้มรองเท้า + รถไฟชมวิว 1 ขา)", en: "Chaka Salt Lake, the 'Mirror of the Sky' (shoe covers + a one-way sightseeing train)", stopId: "chaka" },
          { th: "กลับซีหนิง เดินตลาดกลางคืน", en: "Back to Xining for the night market", stopId: "xining" },
        ],
        drive: { th: "ฉาข่า → ซีหนิง", en: "Chaka → Xining" },
        hotel: { name: "XINING YONGHE INTERNATIONAL HOTEL", star: 4, cityId: "xining", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 8,
        title: { th: "ซีหนิง – วัดถ่าเอ๋อร์ – กรุงเทพฯ", en: "Xining – Kumbum Monastery – Bangkok" },
        stops: ["xining"],
        along: [
          { th: "วัดถ่าเอ๋อร์ (คุมบุม) วัดเกลุกสำคัญ บ้านเกิดท่านจงคาปา", en: "Kumbum (Ta'er) Monastery, a major Gelug temple at Tsongkhapa's birthplace", stopId: "kumbum" },
          { th: "ถนนคนเดินเซี่ยหนานกวน แล้วบินตรงกลับสุวรรณภูมิ (VZ3691)", en: "The Xiananguan pedestrian street, then fly direct home (VZ3691)" },
        ],
      },
    ],
  },
  {
    id: "GO1XIY-SL006",
    regionId: "central",
    flights: [
      {
        airports: ["DMK", "XIY"],
        airline: "Thai Lion Air (SL)",
        direction: "outbound",
        duration: { th: "บินตรง ≈ 4.5 ชม. (ถึงหลังเที่ยงคืน)", en: "Direct ≈ 4.5h (arrives after midnight)" },
        hops: [{ from: "DMK", to: "XIY", flightNo: "SL950", dep: "20:00", arr: "00:35+1" }],
      },
      {
        airports: ["CGO", "DMK"],
        airline: "Thai Lion Air (SL)",
        direction: "return",
        duration: { th: "บินตรงจากเจิ้งโจว ≈ 4 ชม.", en: "Direct from Zhengzhou ≈ 4h" },
        hops: [{ from: "CGO", to: "DMK", flightNo: "SL965", dep: "18:20", arr: "21:25" }],
      },
    ],
    title: {
      th: "บินตรงซีอาน ย้อนเวลาสู่ฉางอัน เจิ้งโจว ลั่วหยาง หยุนไถซาน",
      en: "Direct to Xi'an — back to Chang'an, Zhengzhou, Luoyang & Yuntaishan",
    },
    oneLiner: {
      th: "บินตรงซีอาน เก็บกองทัพทหารดินเผา ถ้ำหลงเหมิน วัดเส้าหลิน และอุทยานหยุนไถซาน — เข้าซีอาน ออกเจิ้งโจว",
      en: "Fly direct to Xi'an for the Terracotta Army, Longmen Grottoes, Shaolin Temple and Yuntaishan — in via Xi'an, out via Zhengzhou.",
    },
    days: 6,
    nights: 5,
    airline: "Thai Lion Air (SL)",
    via: { th: "บินตรง ดอนเมือง (เข้าซีอาน–ออกเจิ้งโจว)", en: "direct from Don Muang (in Xi'an, out Zhengzhou)" },
    difficulty: "easy",
    altitudeNote: { th: "สบาย • ที่ราบกวนจง–จงหยวน ไม่ขึ้นที่สูง เดินเยอะ", en: "Easy • Guanzhong–Central Plains lowlands, no altitude, lots of walking" },
    bestMonths: {
      th: "เม.ย.–มิ.ย. • อากาศกำลังดี ดอกไม้บานในซีอาน–ลั่วหยาง",
      en: "Apr–Jun • pleasant weather, blossoms in Xi'an–Luoyang",
    },
    months: [4, 5, 6],
    highlights: [
      { th: "กองทัพทหารดินเผาจิ๋นซี สิ่งมหัศจรรย์ของโลก", en: "The Terracotta Army of Qin Shi Huang, a wonder of the world" },
      { th: "ถ้ำแกะสลักหลงเหมิน ลั่วหยาง มรดกโลกพุทธศิลป์", en: "The Longmen Grottoes at Luoyang, World Heritage Buddhist carvings" },
      { th: "วัดเส้าหลิน + ป่าเจดีย์ + โชว์กังฟู", en: "The Shaolin Temple + the Pagoda Forest + a kung fu show" },
      { th: "อุทยานหยุนไถซาน หุบเขาแดงและน้ำตกสูงที่สุดของจีน", en: "The Yuntaishan geopark — the Red Gorge and China's tallest waterfall" },
    ],
    whoFor: {
      th: "สายประวัติศาสตร์/วัฒนธรรม • First-timer สายเที่ยวเมือง • ครอบครัว • สายวัด/กังฟู",
      en: "History/culture fans • city-touring first-timers • families • temple/kung-fu lovers",
    },
    prep: [
      { text: { th: "เข้าซีอาน–ออกเจิ้งโจว (สนามบินคนละเมือง) เป็นทริปวิ่งเส้นไม่วน", en: "In via Xi'an, out via Zhengzhou (different airport cities) — a one-way route" } },
      { text: { th: "เที่ยวบินขาไปถึงซีอานหลังเที่ยงคืน เข้าที่พักดึก", en: "The outbound flight lands after midnight — a late hotel check-in" } },
      { text: { th: "เดินเยอะที่ทหารดินเผา หลงเหมิน และเส้าหลิน เตรียมรองเท้าสบาย", en: "Lots of walking at the Terracotta Army, Longmen and Shaolin — comfy shoes" } },
    ],
    sellingScript: {
      th: "“อยากเริ่มจีนสายประวัติศาสตร์? บินตรงซีอาน ยืนหน้ากองทัพทหารดินเผา ดูกังฟูเส้าหลิน แล้วปิดท้ายธรรมชาติหยุนไถซาน”",
      en: "\"New to historical China? Fly direct to Xi'an — stand before the Terracotta Army, watch Shaolin kung fu, and finish in Yuntaishan's nature.\"",
    },
    crossSell: {
      th: "ประตูสู่จีนแผ่นดินกลาง — คู่กับซานซี (TYN/YCU) สำหรับสายมรดกโลกตัวจริง",
      en: "The gateway to central China — pair with Shanxi (TYN/YCU) for serious heritage hunters.",
    },
    customerSegments: ["culture", "firsttimer", "family"],
    routeSegments: [
      { from: "xian", to: "sanmenxia", mode: "drive" },
      { from: "sanmenxia", to: "luoyang", mode: "drive" },
      { from: "luoyang", to: "dengfeng", mode: "drive" },
      { from: "dengfeng", to: "jiaozuo", mode: "drive" },
      { from: "jiaozuo", to: "zhengzhou", mode: "drive" },
    ],
    itinerary: [
      {
        day: 1,
        title: { th: "กรุงเทพฯ (ดอนเมือง) – ซีอาน", en: "Bangkok (Don Muang) – Xi'an" },
        stops: ["xian"],
        along: [
          { th: "บินตรงดอนเมือง–ซีอาน (SL950) ถึงหลังเที่ยงคืน", en: "Fly direct Don Muang–Xi'an (SL950), arriving after midnight" },
          { th: "ถึงซีอาน อดีตราชธานี ‘ฉางอาน’ เข้าที่พัก", en: "Arrive Xi'an, the ancient capital 'Chang'an', and check in", stopId: "xian" },
        ],
        hotel: { name: "XI'AN JIANGUO AIRPORT HOTEL", star: 4, cityId: "xian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 2,
        title: { th: "ซีอาน – กำแพงเมืองโบราณ – เจดีย์ห่านป่าใหญ่", en: "Xi'an – City Wall – Big Wild Goose Pagoda" },
        stops: ["xian"],
        along: [
          { th: "ขึ้นกำแพงเมืองโบราณซีอาน และจัตุรัสหอกลอง–หอระฆัง", en: "Climb the Xi'an city wall and the Bell & Drum Tower square", stopId: "xian" },
          { th: "ถนนมุสลิม และเจดีย์ห่านป่าใหญ่", en: "The Muslim Quarter and the Big Wild Goose Pagoda", stopId: "xian" },
          { th: "ถนนต้าถังไร้นิทรา ย่านราชวงศ์ถังยามค่ำคืน", en: "Datang Everbright City, the Tang-dynasty night district", stopId: "xian" },
        ],
        hotel: { name: "HOLIDAY INN EXPRESS XI'AN HOTEL", star: 4, cityId: "xian", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 3,
        title: { th: "ทหารดินเผาจิ๋นซี – ซานเหมินเสีย – หมู่บ้านใต้ดิน", en: "Terracotta Army – Sanmenxia – underground village" },
        stops: ["sanmenxia"],
        along: [
          { th: "พิพิธภัณฑ์ทหารดินเผาจิ๋นซี (รวมรถอุทยาน)", en: "The Terracotta Army museum of Qin Shi Huang", stopId: "xian" },
          { th: "ซานเหมินเสีย และหมู่บ้านใต้ดินส่านโจว บ้านถ้ำดินโบราณ", en: "Sanmenxia and the Shanzhou underground village of pit-cave homes", stopId: "sanmenxia" },
        ],
        drive: { th: "ซีอาน → ซานเหมินเสีย", en: "Xi'an → Sanmenxia" },
        hotel: { name: "SANMENXIA SWAN LAKE HOTEL", star: 4, cityId: "sanmenxia", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 4,
        title: { th: "ลั่วหยาง – ถ้ำหลงเหมิน – ศาลกวนอู", en: "Luoyang – Longmen Grottoes – Guanlin Temple" },
        stops: ["luoyang"],
        along: [
          { th: "ถ้ำแกะสลักหลงเหมิน มรดกโลกพุทธศิลป์ (รวมรถอุทยาน)", en: "The Longmen Grottoes, World Heritage Buddhist carvings", stopId: "luoyang" },
          { th: "ศาลกวนอู (กวนหลิน) และประตูอิ้งเทียนเหมิน", en: "The Guanlin temple of Guan Yu and the Yingtianmen gate", stopId: "luoyang" },
        ],
        drive: { th: "ซานเหมินเสีย → ลั่วหยาง", en: "Sanmenxia → Luoyang" },
        hotel: { name: "EASEHOUSE HOTEL LUOYANG", star: 4, cityId: "luoyang", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 5,
        title: { th: "เติงเฟิง – วัดเส้าหลิน – ป่าเจดีย์ – หยุนไถซาน", en: "Dengfeng – Shaolin Temple – Pagoda Forest – Yuntaishan" },
        stops: ["dengfeng", "jiaozuo"],
        along: [
          { th: "วัดเส้าหลิน ต้นกำเนิดกังฟู + ป่าเจดีย์ + ชมการแสดงกังฟู", en: "The Shaolin Temple, kung fu's birthplace + the Pagoda Forest + a kung fu show", stopId: "dengfeng" },
          { th: "เดินทางสู่เจียวจั่ว เข้าสู่อุทยานหยุนไถซาน", en: "Continue to Jiaozuo for the Yuntaishan geopark", stopId: "jiaozuo" },
        ],
        drive: { th: "ลั่วหยาง → เติงเฟิง → เจียวจั่ว", en: "Luoyang → Dengfeng → Jiaozuo" },
        hotel: { name: "JIAOZUO WANDA JINWUZHI HOTEL", star: 4, cityId: "jiaozuo", note: { th: "หรือเทียบเท่า 4 ดาว (มาตรฐานจีน)", en: "or equivalent 4-star (China standard)" } },
      },
      {
        day: 6,
        title: { th: "เจิ้งโจว – ทะเลสาบหรูอี้ – จัตุรัส 27 – กรุงเทพฯ", en: "Zhengzhou – Ruyi Lake – Feb 27 Square – Bangkok" },
        stops: ["zhengzhou"],
        along: [
          { th: "ทะเลสาบหรูอี้ เช็คอิน ‘ตึกข้าวโพด’ และจัตุรัส 27", en: "Ruyi Lake, the 'Corn Tower' check-in and February 27 Square", stopId: "zhengzhou" },
          { th: "ถนนคนเดินเต๋อหัว แล้วบินตรงเจิ้งโจว–ดอนเมือง (SL965)", en: "The Dehua pedestrian street, then fly direct Zhengzhou–Don Muang (SL965)" },
        ],
      },
    ],
  },
];

export const getProgram = (id: string) => programs.find((p) => p.id === id);
