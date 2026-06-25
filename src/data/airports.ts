import type { Airport } from "../types";

/**
 * Main airports serving each sub-area, plus the international gateways used to
 * reach them. Coordinates are [longitude, latitude] in WGS-84.
 */
export const airports: Airport[] = [
  // North Xinjiang
  {
    id: "URC",
    iata: "URC",
    name: { th: "ท่าอากาศยานอูลู่มู่ฉี ตี้วอปู่", en: "Urumqi Diwopu Intl", zh: "乌鲁木齐地窝堡机场" },
    coords: [87.474, 43.907],
    regionId: "north",
  },
  {
    id: "YIN",
    iata: "YIN",
    name: { th: "ท่าอากาศยานอี้หนิง", en: "Yining Airport", zh: "伊宁机场" },
    coords: [81.33, 43.956],
    regionId: "north",
  },
  {
    id: "KJI",
    iata: "KJI",
    name: { th: "ท่าอากาศยานคานาสือ (ปู้เอ่อร์จิน)", en: "Kanas (Burqin) Airport", zh: "喀纳斯机场" },
    coords: [86.996, 48.222],
    regionId: "north",
  },
  // South Xinjiang
  {
    id: "KHG",
    iata: "KHG",
    name: { th: "ท่าอากาศยานคาชการ์", en: "Kashgar Airport", zh: "喀什机场" },
    coords: [76.02, 39.543],
    regionId: "south",
  },
  // Gansu–Sichuan
  {
    id: "LHW",
    iata: "LHW",
    name: { th: "ท่าอากาศยานหลานโจว จงชวน", en: "Lanzhou Zhongchuan Intl", zh: "兰州中川机场" },
    coords: [103.62, 36.515],
    regionId: "gansu",
  },
  {
    id: "JZH",
    iata: "JZH",
    name: { th: "ท่าอากาศยานจิ่วไจ้–หวงหลง", en: "Jiuzhai Huanglong Airport", zh: "九寨黄龙机场" },
    coords: [103.682, 32.853],
    regionId: "gansu",
  },
  // Qinghai–Tibet
  {
    id: "XNN",
    iata: "XNN",
    name: { th: "ท่าอากาศยานซีหนิง เฉาเจียเป่า", en: "Xining Caojiabao Intl", zh: "西宁曹家堡机场" },
    coords: [102.043, 36.527],
    regionId: "tibet",
  },
  {
    id: "LXA",
    iata: "LXA",
    name: { th: "ท่าอากาศยานลาซา กงก่า", en: "Lhasa Gonggar Airport", zh: "拉萨贡嘎机场" },
    coords: [90.912, 29.298],
    regionId: "tibet",
  },
  {
    id: "LZY",
    iata: "LZY",
    name: { th: "ท่าอากาศยานหลินจือ", en: "Nyingchi Mainling Airport", zh: "林芝米林机场" },
    coords: [94.335, 29.303],
    regionId: "tibet",
  },
  // Shandong / East coast
  {
    id: "TAO",
    iata: "TAO",
    name: { th: "ท่าอากาศยานชิงเต่า เจียวตง", en: "Qingdao Jiaodong Intl", zh: "青岛胶东机场" },
    coords: [120.0856, 36.3661],
    regionId: "shandong",
    gateway: true,
  },
  // Northeast China (Dongbei)
  {
    id: "SHE",
    iata: "SHE",
    name: { th: "ท่าอากาศยานเสิ่นหยาง เถาเซียน", en: "Shenyang Taoxian Intl", zh: "沈阳桃仙机场" },
    coords: [123.4836, 41.6398],
    regionId: "dongbei",
  },
  {
    id: "DLC",
    iata: "DLC",
    name: { th: "ท่าอากาศยานต้าเหลียน โจวสุ่ยจือ", en: "Dalian Zhoushuizi Intl", zh: "大连周水子机场" },
    coords: [121.5386, 38.9657],
    regionId: "dongbei",
  },
  {
    id: "HRB",
    iata: "HRB",
    name: { th: "ท่าอากาศยานฮาร์บิน ไท่ผิง", en: "Harbin Taiping Intl", zh: "哈尔滨太平机场" },
    coords: [126.2503, 45.6234],
    regionId: "dongbei",
    gateway: true,
  },
  // Shanxi
  {
    id: "YCU",
    iata: "YCU",
    name: { th: "ท่าอากาศยานหยุนเฉิง เหยียนหู", en: "Yuncheng Yanhu Airport", zh: "运城关公机场" },
    coords: [111.0317, 35.1164],
    regionId: "shanxi",
  },
  {
    id: "TYN",
    iata: "TYN",
    name: { th: "ท่าอากาศยานไท่หยวน อู๋ซู", en: "Taiyuan Wusu Intl", zh: "太原武宿机场" },
    coords: [112.6282, 37.7469],
    regionId: "shanxi",
  },
  // Inner Mongolia
  {
    id: "DSN",
    iata: "DSN",
    name: { th: "ท่าอากาศยานเออร์ดอส เออร์จิน", en: "Ordos Ejin Horo Airport", zh: "鄂尔多斯伊金霍洛机场" },
    coords: [109.8615, 39.49],
    regionId: "innermongolia",
  },
  // Central China (Shaanxi–Henan)
  {
    id: "XIY",
    iata: "XIY",
    name: { th: "ท่าอากาศยานซีอาน เสียนหยาง", en: "Xi'an Xianyang Intl", zh: "西安咸阳机场" },
    coords: [108.7516, 34.4471],
    regionId: "central",
    gateway: true,
  },
  {
    id: "CGO",
    iata: "CGO",
    name: { th: "ท่าอากาศยานเจิ้งโจว ซินเจิ้ง", en: "Zhengzhou Xinzheng Intl", zh: "郑州新郑机场" },
    coords: [113.841, 34.5197],
    regionId: "central",
    gateway: true,
  },
  // International gateway
  {
    id: "CTU",
    iata: "CTU",
    name: { th: "ท่าอากาศยานเฉิงตู เทียนฝู่", en: "Chengdu Tianfu Intl", zh: "成都天府机场" },
    coords: [104.442, 30.313],
    regionId: "gansu",
    gateway: true,
  },
];

const airportMap = new Map(airports.map((a) => [a.id, a]));
export const getAirport = (id: string) => airportMap.get(id);

/**
 * Coordinates for transit hubs / international gateways that are referenced by
 * program flights but are not shown as regional airport pins. Used to draw the
 * flight route arc. [longitude, latitude] in WGS-84.
 */
const HUB_COORDS: Record<string, [number, number]> = {
  BKK: [100.747, 13.69], // Bangkok Suvarnabhumi
  DMK: [100.607, 13.912], // Bangkok Don Muang
  CAN: [113.299, 23.392], // Guangzhou Baiyun
  PEK: [116.597, 40.072], // Beijing Capital
  KMG: [102.929, 24.992], // Kunming Changshui
  SZX: [113.811, 22.639], // Shenzhen Bao'an
  PVG: [121.805, 31.143], // Shanghai Pudong
  CGQ: [125.6845, 43.9962], // Changchun Longjia
  NKG: [118.862, 31.742], // Nanjing Lukou
};

/** Resolve any IATA code used in a flight to coordinates (airports or hubs). */
export const getAirportCoords = (iata: string): [number, number] | undefined =>
  airportMap.get(iata)?.coords ?? HUB_COORDS[iata];
