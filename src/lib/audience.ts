import {
  Armchair,
  Camera,
  Heart,
  Landmark,
  Mountain,
  User,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { AudienceId, Localized } from "../types";

/** Display order for audience chips. */
export const AUDIENCE_ORDER: AudienceId[] = [
  "family",
  "couple",
  "solo",
  "adventure",
  "retiree",
  "culture",
  "cuisine",
  "photography",
];

export const AUDIENCE_LABEL: Record<AudienceId, Localized> = {
  family: { th: "ครอบครัว", en: "Family" },
  couple: { th: "คู่รัก", en: "Couples" },
  solo: { th: "เที่ยวคนเดียว", en: "Solo" },
  adventure: { th: "สายผจญภัย", en: "Adventure" },
  retiree: { th: "วัยเกษียณ", en: "Retirees" },
  culture: { th: "สายวัฒนธรรม", en: "Culture" },
  cuisine: { th: "สายกิน", en: "Cuisine" },
  photography: { th: "สายถ่ายภาพ", en: "Photography" },
};

export const AUDIENCE_ICON: Record<AudienceId, LucideIcon> = {
  family: Users,
  couple: Heart,
  solo: User,
  adventure: Mountain,
  retiree: Armchair,
  culture: Landmark,
  cuisine: UtensilsCrossed,
  photography: Camera,
};
