SIFATLI VA MAZALI SHIRINLIKLAR — sayt kodlari

Ochish: index.html faylini brauzerda oching (qoʻshimcha dastur shart emas).
index-bitta-fayl.html — hamma narsa (rasmlar ham) bitta faylda, ulashish uchun qulay.

Fayllar:
  index.html     sahifa tuzilmasi (sarlavha, menyu, savat tugmasi)
  css/style.css  ranglar, shriftlar, dizayn (ranglar faylning boshida --wine, --gold, --rose)
  js/app.js      mahsulotlar, narxlar, savat, buyurtma mantigʻi
  images/        rasmlar

Oʻzgartirish:
  Narx/nom/tavsif   js/app.js ichida "const P=[" roʻyxati: [rasm, boʻlim, nom, tavsif, narx, birlik]
  Yangi mahsulot    roʻyxatga yangi qator qoʻshing, rasmni images/ ga tashlab, "const IMG" ga yozing
  Rasm almashtirish images/ ichidagi fayl nomini oʻzgartirmasdan ustiga yozing
  Telegram          js/app.js: TG_USER="onam_username" (@ belgisiz) — buyurtma shu odamga tayyor matn bilan ochiladi
  Telefon, manzil   index.html (pastki qism) va js/app.js (Aloqa boʻlimi)

GITHUB PAGES ORQALI E'LON QILISH (bepul):
  1. github.com da yangi repository oching (masalan: shirinliklar).
  2. Shu papka ichidagi hamma fayl va papkalarni (index.html, css, js, images) repository ildiziga yuklang.
  3. Settings > Pages > Source: "Deploy from a branch", Branch: main, papka: / (root) > Save.
  4. 1-2 daqiqadan keyin sayt https://<login>.github.io/shirinliklar/ manzilida ochiladi.
  Muhim: sayt https orqali ochilganda "Rasmlar bilan yuborish" tugmasi telefonda ishlaydi.
