/* =========================================================
   YASHNI CREATIONS — all settings live here
   This is the only file you need to edit. Leave the rest alone.
   ========================================================= */

const CONFIG = {
  // Supabase → Project Settings → API
  SUPABASE_URL: "https://uhjebqveujolmorsxcvq.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_VhlesphpBgbikJmdn-T_cg_CefF3w7z",

  // Shop details
  WHATSAPP: "919779997768",                          // country code + number, no + or spaces
  PHONE_DISPLAY: "+91 97799 97768 | +91 78890 71347",
  EMAIL: "ishaniahuja.123@gmail.com",
  INSTAGRAM: "#",

  // Product categories — used in the admin form and as filters on the website
  CATEGORIES: ["Lehenga", "Saree", "Suit", "Kurti", "Gown", "Sharara", "Other"],

  /* ---------- BANNER IMAGES ---------- */
  // Big image behind the hero on the homepage. Put the file next to index.html
  // and write its name here, e.g. "banner.jpg". Leave "" for a plain green banner.
  // Product photos are never used here.
  HERO_IMAGE: "",

  // Image beside the "Atelier" section further down the homepage.
  // Leave "" and that section shows a plain green panel instead.
  ATELIER_IMAGE: "",

  /* ---------- OFFERS: leave empty ("" or 0) to turn an offer OFF ---------- */

  // Thin bar at the very top of the page.
  // "" = no bar at all.  Example: "Festive week \u25C6 Free shipping across India"
  ANNOUNCEMENT: "",

  // Small label printed on each product photo.
  // "" = no label.  Example: "Buy 2 get 1"
  OFFER_TAG: "",

  // Struck-through "original" price and the "% off" label.
  // 0 = show only the real price, no discount, no crossed-out price.
  // 35 = show a 35% off label with a higher crossed-out price.
  DISCOUNT_PERCENT: 0
};
