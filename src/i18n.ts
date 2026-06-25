import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  th: {
    translation: {
      brand: "CHINESE TRAVEL MAP",
      appSubtitle: "แผนที่เส้นทางจีน · คู่มือสำหรับเอเจนซี",
      langName: "TH",

      // Filters
      filters: "ตัวกรอง",
      filtersTitle: "ค้นหาโปรแกรมที่ใช่",
      region: "ภูมิภาค",
      allRegions: "ทุกภูมิภาค",
      seasonFilter: "ฤดูกาล",
      seasonAll: "ทุกฤดู",
      season: "เดินทางเดือน",
      anyMonth: "ทุกเดือน",
      difficulty: "ระดับความยาก",
      anyDifficulty: "ทุกระดับ",
      diffEasy: "สบาย",
      diffModerate: "ปานกลาง",
      diffHigh: "ขึ้นที่สูง",
      customerSegment: "กลุ่มลูกค้า",
      allSegments: "ทุกกลุ่ม",
      customerSays: "ลูกค้าพูดว่า…",
      clearFilters: "ล้างตัวกรอง",
      resultsCount: "{{count}} โปรแกรม",

      // List
      programsTitle: "โปรแกรมทั้งหมด",
      noResults: "ไม่พบโปรแกรมที่ตรงกับตัวกรอง",
      days: "วัน",
      nights: "คืน",

      // Program card
      backToList: "← กลับไปรายการ",
      close: "ปิด",
      route: "เส้นทาง",
      highlights: "ไฮไลต์",
      whoFor: "เหมาะกับใคร",
      prep: "เตรียมตัว & ข้อควรระวัง",
      sellingScript: "สคริปต์การขาย",
      crossSell: "ขายต่อยอด",
      season_label: "ฤดูกาล",
      altitude: "ความสูง",
      airline: "สายการบิน",

      // Map legend / modes
      legend: "สัญลักษณ์",
      modeDrive: "รถ (ตามถนนจริง)",
      modeFlight: "เครื่องบิน",
      modeTrain: "รถไฟ",

      // Layers
      layers: "เลเยอร์",
      railways: "เส้นทางรถไฟ",
      airports: "สนามบิน",
      attractions: "สถานที่ท่องเที่ยว",
      buildings3d: "อาคาร 3 มิติ",
      terrain3d: "ภูมิประเทศ 3 มิติ",

      // Itinerary / legs
      itinerary: "ไทม์ไลน์การเดินทาง (รายวัน)",
      day: "วันที่",
      flights: "เที่ยวบิน",
      outbound: "ขาไป",
      return: "ขากลับ",
      via: "ผ่าน",
      showFlightOnMap: "แตะเที่ยวบินเพื่อดูเส้นทางบนแผนที่",
      tapAgainToClear: "แตะอีกครั้งเพื่อกลับสู่ภาพรวมเส้นทาง",
      tapDayHint: "แตะแต่ละวันเพื่อดูเฉพาะวันนั้นบนแผนที่",
      tapDayAgain: "แตะอีกครั้งเพื่อดูภาพรวมทั้งทริป",
      dayStart: "จุดเริ่มต้น",
      dayNight: "พักค้างคืน",
      hotelLabel: "ที่พัก",
      hotelInProgram: "โรงแรมในโปรแกรม",
      routeDistance: "เส้นทาง & ระยะทาง/เวลา",

      // Temperature
      temperature: "อุณหภูมิ",
      avgTempRange: "เฉลี่ยช่วงเดินทาง",
      degHigh: "สูงสุด",
      degLow: "ต่ำสุด",
      photoCredit: "ที่มาภาพ",
      readMore: "อ่านเพิ่มเติม",
      noImage: "ยังไม่มีภาพประกอบ",

      // Hotels (Trip.com / Ctrip)
      hotelsTitle: "โรงแรมแนะนำ",
      reviews: "รีวิว",
      hotelsSource: "ข้อมูลโรงแรมจาก Trip.com (Ctrip)",

      // Categories
      catCity: "เมือง",
      catNature: "ธรรมชาติ",
      catHeritage: "มรดก/ประวัติศาสตร์",
      catTemple: "วัด/ศาสนสถาน",
      catBorder: "ชายแดน/ด่าน",

      // Hints
      overviewHint: "เลือกภูมิภาคหรือโปรแกรมเพื่อดูเส้นทางบนแผนที่",
      tapRouteHint: "แตะเส้นทางหรือหมุดบนแผนที่เพื่อเปิดรายละเอียด",
      madeBy: "แอปนี้สร้างโดย Saksit Saelow",
    },
  },
  en: {
    translation: {
      brand: "CHINESE TRAVEL MAP",
      appSubtitle: "China route map · Agent field guide",
      langName: "EN",

      // Filters
      filters: "Filters",
      filtersTitle: "Find the right program",
      region: "Region",
      allRegions: "All regions",
      seasonFilter: "Season",
      seasonAll: "All seasons",
      season: "Travel month",
      anyMonth: "Any month",
      difficulty: "Difficulty",
      anyDifficulty: "Any difficulty",
      diffEasy: "Easy",
      diffModerate: "Moderate",
      diffHigh: "High altitude",
      customerSegment: "Customer type",
      allSegments: "All types",
      customerSays: "Customer says…",
      clearFilters: "Clear filters",
      resultsCount: "{{count}} programs",

      // List
      programsTitle: "All programs",
      noResults: "No programs match these filters",
      days: "days",
      nights: "nights",

      // Program card
      backToList: "← Back to list",
      close: "Close",
      route: "Route",
      highlights: "Highlights",
      whoFor: "Who it's for",
      prep: "Prep & cautions",
      sellingScript: "Selling script",
      crossSell: "Cross-sell",
      season_label: "Season",
      altitude: "Altitude",
      airline: "Airline",

      // Map legend / modes
      legend: "Legend",
      modeDrive: "Drive (real roads)",
      modeFlight: "Flight",
      modeTrain: "Train",

      // Layers
      layers: "Layers",
      railways: "Railways",
      airports: "Airports",
      attractions: "Attractions",
      buildings3d: "3D buildings",
      terrain3d: "3D terrain",

      // Itinerary / legs
      itinerary: "Day-by-day itinerary",
      day: "Day",
      flights: "Flights",
      outbound: "Outbound",
      return: "Return",
      via: "via",
      showFlightOnMap: "Tap a flight to see its route on the map",
      tapAgainToClear: "Tap again to return to the route overview",
      tapDayHint: "Tap a day to see just that day on the map",
      tapDayAgain: "Tap again to see the whole trip",
      dayStart: "Start",
      dayNight: "Overnight",
      hotelLabel: "Hotel",
      hotelInProgram: "Hotel in this program",
      routeDistance: "Route & distance/time",

      // Temperature
      temperature: "Temperature",
      avgTempRange: "Avg in travel season",
      degHigh: "high",
      degLow: "low",
      photoCredit: "Photo",
      readMore: "Read more",
      noImage: "No photo yet",

      // Hotels (Trip.com / Ctrip)
      hotelsTitle: "Recommended hotels",
      reviews: "reviews",
      hotelsSource: "Hotel data from Trip.com (Ctrip)",

      // Categories
      catCity: "City",
      catNature: "Nature",
      catHeritage: "Heritage",
      catTemple: "Temple",
      catBorder: "Border",

      // Hints
      overviewHint: "Pick a region or program to see its route on the map",
      tapRouteHint: "Tap a route or pin on the map to open details",
      madeBy: "This app made by Saksit Saelow",
    },
  },
};

export const monthKeys = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

i18n.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
