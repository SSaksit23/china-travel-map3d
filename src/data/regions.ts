import type { Region } from "../types";

export const regions: Region[] = [
  {
    id: "north",
    name: { th: "ซินเจียงเหนือ", en: "North Xinjiang", zh: "北疆" },
    color: "#1565c0",
  },
  {
    id: "south",
    name: { th: "ซินเจียงใต้", en: "South Xinjiang", zh: "南疆" },
    color: "#c0392b",
  },
  {
    id: "gansu",
    name: { th: "กานซู่–เสฉวน", en: "Gansu–Sichuan", zh: "甘肃-四川" },
    color: "#0e7c7b",
  },
  {
    id: "tibet",
    name: { th: "ชิงไห่–ทิเบต", en: "Qinghai–Tibet", zh: "青海-西藏" },
    color: "#6a3d9a",
  },
  {
    id: "dongbei",
    name: { th: "จีนตะวันออกเฉียงเหนือ (ตงเป่ย)", en: "Northeast China (Dongbei)", zh: "中国东北" },
    color: "#e67e22",
  },
  {
    id: "shandong",
    name: { th: "ซานตง–ชายฝั่งตะวันออก", en: "Shandong / East coast", zh: "山东-东部沿海" },
    color: "#2e7d32",
  },
  {
    id: "shanxi",
    name: { th: "ซานซี", en: "Shanxi", zh: "山西" },
    color: "#b8860b",
  },
  {
    id: "innermongolia",
    name: { th: "มองโกเลียใน", en: "Inner Mongolia", zh: "内蒙古" },
    color: "#5d4037",
  },
  {
    id: "central",
    name: { th: "ซีอาน–เหอหนาน", en: "Xi'an – Henan", zh: "西安-河南" },
    color: "#c2185b",
  },
  {
    id: "fujian",
    name: { th: "ฝูเจี้ยน–แต้จิ๋ว (ชายฝั่งหมินหนาน)", en: "Fujian–Chaoshan coast", zh: "福建-潮汕" },
    color: "#00acc1",
  },
  {
    id: "chongqing",
    name: { th: "ฉงชิ่งและเมืองโดยรอบ", en: "Chongqing & surrounds", zh: "重庆及周边" },
    color: "#3949ab",
  },
  {
    id: "hunan",
    name: { th: "ฉางซา–หูหนาน–เจียงซี", en: "Changsha & Hunan–Jiangxi", zh: "长沙-湖南-江西" },
    color: "#7cb342",
  },
  {
    id: "yunnan",
    name: { th: "ยูนนาน", en: "Yunnan", zh: "云南" },
    color: "#f9a825",
  },
  {
    id: "beijing",
    name: { th: "ปักกิ่ง–เซี่ยงไฮ้", en: "Beijing–Shanghai", zh: "北京-上海" },
    color: "#546e7a",
  },
  {
    id: "jiangnan",
    name: { th: "หังโจว–เจียงหนาน–อันฮุย", en: "Hangzhou & Jiangnan (Zhejiang–Anhui)", zh: "杭州-江南-安徽" },
    color: "#ec407a",
  },
];

export const getRegion = (id: string) => regions.find((r) => r.id === id);
