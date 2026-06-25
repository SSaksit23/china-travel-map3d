import type { Localized, SegmentId } from "../types";

export const customerSegments: { id: SegmentId; label: Localized }[] = [
  { id: "family", label: { th: "ครอบครัว", en: "Family" } },
  { id: "honeymoon", label: { th: "คู่รัก/ฮันนีมูน", en: "Couples/Honeymoon" } },
  { id: "photography", label: { th: "ธรรมชาติ/ถ่ายรูป", en: "Nature/Photography" } },
  { id: "adventure", label: { th: "ผจญภัย/exotic", en: "Adventure/Exotic" } },
  { id: "culture", label: { th: "วัฒนธรรม/ประวัติศาสตร์", en: "Culture/History" } },
  { id: "bucketlist", label: { th: "bucket-list", en: "Bucket-list" } },
  { id: "firsttimer", label: { th: "First-timer", en: "First-timer" } },
  { id: "repeater", label: { th: "Repeater", en: "Repeater" } },
];

/** "Customer says X -> suggest these programs" quick picks. */
export const customerSaysQuickPicks: {
  id: string;
  says: Localized;
  programIds: string[];
}[] = [
  {
    id: "lavender-first",
    says: { th: "อยากเห็นลาเวนเดอร์ / ซินเจียงครั้งแรก", en: "Wants lavender / first time in Xinjiang" },
    programIds: ["GO1URC-CZ004", "2UURC-CA001"],
  },
  {
    id: "tibet-potala",
    says: { th: "อยากไปทิเบต เห็นโปตาลา", en: "Wants Tibet, sees the Potala" },
    programIds: ["2UXNN-VZ001", "GH-C"],
  },
  {
    id: "autumn-photo",
    says: { th: "ชอบใบไม้เปลี่ยนสี ถ่ายรูปสวย", en: "Loves autumn colours, great photos" },
    programIds: ["GO1URC-CZ006", "2ULHW-MU001"],
  },
  {
    id: "exotic-adventure",
    says: { th: "อยากได้อะไรแปลก ผจญภัย exotic", en: "Wants something exotic and adventurous" },
    programIds: ["GO1KHG-CZ002"],
  },
  {
    id: "seniors-easy",
    says: { th: "พาผู้สูงอายุ เน้นสบาย", en: "Travelling with seniors, easy pace" },
    programIds: ["GO1URC-CZ004", "2ULHW-MU001"],
  },
  {
    id: "train-direct",
    says: { th: "อยากนั่งรถไฟหลังคาโลก / ไม่ต่อเครื่อง", en: "Wants the roof-of-the-world train / no transfer" },
    programIds: ["GH-C", "2UXNN-VZ001"],
  },
];
