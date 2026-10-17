const IMG={
 "assorti": "images/assorti.jpg",
 "ekler": "images/ekler.jpg",
 "kapkeyk": "images/kapkeyk.jpg",
 "keks": "images/keks.jpg",
 "kruassan": "images/kruassan.jpg",
 "malina": "images/malina.jpg",
 "medovik-kesim": "images/medovik-kesim.jpg",
 "medovik-kv": "images/medovik-kv.jpg",
 "medovik": "images/medovik.jpg",
 "napoleon": "images/napoleon.jpg",
 "pirog": "images/pirog.jpg",
 "qizil": "images/qizil.jpg",
 "rulet": "images/rulet.jpg",
 "sariq-bolak": "images/sariq-bolak.jpg",
 "sariq-tort": "images/sariq-tort.jpg",
 "shokolad": "images/shokolad.jpg",
 "tort-oq": "images/tort-oq.jpg"
};
const TG_CH="https://t.me/+DEswtTrK1REzM2Yy";
const TG_USER="Abdunosir_2007"; /* Telegram username (@siz) yozilsa, buyurtma shu odamga tayyor matn bilan ochiladi */
const P=[
["sariq-tort","Tortlar","Koʻk rezavorli sariq tort","Yaltiroq sariq glazur, ustida yangi rezavorlar.",180000,"dona"],
["shokolad","Tortlar","Yongʻoqli shokolad tort","Qalin shokolad qoplama va qovurilgan yongʻoq.",190000,"dona"],
["malina","Tortlar","Malinali kokos tort","Oq qaymoq, kokos va yangi malina bilan bezatilgan.",200000,"dona"],
["qizil","Tortlar","Naqshli glazurli tort","Qizil glazur ustida oq naqsh, bayram stoli uchun.",170000,"dona"],
["medovik","Tortlar","Asalli tort","Asalli qatlamlar, ustida asal chaqasi naqshi.",150000,"dona"],
["medovik-kv","Tortlar","Asalli tort (kvadrat)","Yumshoq qaymoqli qatlamlar, ustiga maydalangan biskvit sepilgan.",140000,"dona"],
["napoleon","Tortlar","Napoleon tort","Yupqa qatlamli, nozik qaymoqli, ustida mayda uvoq.",160000,"dona"],
["sariq-bolak","Tortlar","Boʻlak tort","Bir kishilik boʻlaklar, choyga yoki mehmonlarga.",18000,"boʻlak"],
["rulet","Pirog va rulet","Shokoladli rulet","Yumshoq biskvit, shokolad naqshi, ichida krem.",80000,"dona"],
["pirog","Pirog va rulet","Murabboli pirog","Pudra shakar sepilgan, ichi murabbo.",60000,"kg"],
["tort-oq","Pirog va rulet","Pudrali dumaloq pirog","Uyda pishirilgan, quti ichida tayyor beriladi.",50000,"dona"],
["ekler","Pishiriqlar","Qaymoqli ekler","Qarsildoq, tilla rang, ichi qaymoqqa toʻla.",4000,"dona"],
["kapkeyk","Pishiriqlar","Pistali kapkeyk","Yengil kapkeyklar, ustida pista. Sovgʻa paketida.",35000,"kg"],
["keks","Pishiriqlar","Yongʻoqli keks","Pista, yongʻoq va mayiz sepilgan uy keksi.",45000,"kg"],
["kruassan","Pishiriqlar","Kruassan","Yumshoq, yaltiroq sirli, koʻknori sepilgan.",40000,"kg"],
["assorti","Toʻplamlar","Assorti toʻplami","Bir qutida 5–6 xil tort boʻlagi. Marosim stoli uchun.",90000,"quti"]
].map((a,i)=>({id:i,k:a[0],c:a[1],n:a[2],d:a[3],p:a[4],u:a[5]}));
const CATS=["Tortlar","Pirog va rulet","Pishiriqlar","Toʻplamlar"];
const CIMG={"Tortlar":"sariq-tort","Pirog va rulet":"rulet","Pishiriqlar":"ekler","Toʻplamlar":"assorti"};
const $=s=>document.querySelector(s),app=$("#app");
const fm=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" soʻm";
let cart={};try{cart=JSON.parse(localStorage.getItem("cart")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("cart",JSON.stringify(cart))}catch(e){}const n=Object.values(cart).reduce((a,b)=>a+b,0);document.querySelectorAll(".cn").forEach(e=>{e.textContent=n;e.dataset.n=n})};
const toast=t=>{const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),1800)};
const card=p=>`<article class="card"><div class="im"><img src="${IMG[p.k]}" alt="${p.n}" loading="lazy"></div><div class="cb"><h3>${p.n}</h3><p>${p.d}</p><div class="pr"><b>${fm(p.p)} <small>/ ${p.u}</small></b><button class="add" data-add="${p.id}">Savatga</button></div></div></article>`;
const items=()=>Object.keys(cart).map(i=>({p:P[i],q:cart[i]}));
const total=()=>items().reduce((a,x)=>a+x.p.p*x.q,0);
const V={
home:()=>`<div class="hero"><div class="wrap"><div><h1>Sifatli va mazali shirinliklar</h1><p>Uyda, mehr bilan tayyorlangan tortlar, rulet, ekler va pirojniylar. Toʻy va marosimlar uchun buyurtma qabul qilamiz, Denov shahri boʻylab yetkazib beramiz.</p><div class="btns"><a class="btn fill" href="#/menyu">Menyuni koʻrish</a><a class="btn line" href="#/buyurtma">Buyurtma berish</a></div></div><div class="collage"><img class="arch" src="${IMG["sariq-tort"]}" alt="Sariq tort"><img src="${IMG.ekler}" alt="Ekler"><img src="${IMG.malina}" alt="Malinali tort"></div></div></div>
<section><div class="wrap"><div class="head rv"><h2>Yangi pishgan</h2><p>Eng koʻp buyurtma qilinadigan tortlarimiz.</p></div><div class="grid rv">${[0,1,4,6].map(i=>card(P[i])).join("")}</div></div></section>
<section style="padding-top:0"><div class="wrap"><div class="head rv"><h2>Boʻlimlar</h2></div><div class="cats rv">${CATS.map(c=>`<a class="cat" href="#/menyu/${encodeURIComponent(c)}"><img src="${IMG[CIMG[c]]}" alt=""><span>${c}</span></a>`).join("")}</div></div></section>
<div class="why"><div class="wrap" style="padding-top:3.2rem;padding-bottom:3.2rem"><div class="rv"><h2>Uy sharoitida, shoshilmasdan</h2><ul><li><b>Uyda tayyorlanadi</b>Har bir tort qoʻlda, buyurtma kuni yangi pishiriladi.</li><li><b>Toʻy va marosimlar</b>Buyurtma turiga qarab bir necha kun oldin xabar bering.</li><li><b>Yetkazib berish</b>Denov shahri boʻylab eshigingizgacha olib boramiz.</li></ul></div><img class="rv" src="${IMG["medovik-kesim"]}" alt="Asalli tort kesimi" loading="lazy"></div></div>
<section><div class="wrap"><div class="head rv"><h2>Buyurtma qanday beriladi</h2></div><ol class="steps rv"><li><b>Tanlang</b><span>Menyudan kerakli shirinliklarni savatga soling.</span></li><li><b>Maʼlumot yozing</b><span>Ism, telefon va manzilingizni kiriting.</span></li><li><b>Yuboring</b><span>Buyurtma Telegram orqali bizga boradi.</span></li><li><b>Qabul qiling</b><span>Kelishilgan vaqtda yetkazamiz yoki oʻzingiz olib ketasiz.</span></li></ol></div></section>`,
menu:c=>`<div class="pg"><div class="wrap"><h2>Menyu</h2><div class="chips">${["Hammasi",...CATS].map(x=>`<button class="chip ${(c||"Hammasi")==x?"on":""}" data-cat="${x}">${x}</button>`).join("")}</div><div class="grid">${P.filter(p=>!c||c=="Hammasi"||p.c==c).map(card).join("")}</div><p style="color:var(--muted);margin-top:1.5rem">Narxlar taxminiy, aniq narxni buyurtma vaqtida kelishamiz.</p></div></div>`,
cart:()=>{const it=items();return `<div class="pg"><div class="wrap"><h2>Savat</h2>${it.length?it.map(({p,q})=>`<div class="row"><img src="${IMG[p.k]}" alt=""><div><b>${p.n}</b><br><small>${fm(p.p)} / ${p.u}</small></div><div class="qty"><button data-dec="${p.id}" aria-label="Kamaytirish">−</button>${q}<button data-add="${p.id}" data-q aria-label="Koʻpaytirish">+</button></div></div>`).join("")+`<div class="tot"><span>Jami</span><span>${fm(total())}</span></div><div class="btns"><a class="btn dark" href="#/buyurtma">Buyurtma berishga oʻtish</a><a class="btn" style="border-color:var(--line)" href="#/menyu">Yana tanlash</a></div>`:`<div class="empty">Savat hozircha boʻsh. <a href="#/menyu">Menyuga oʻting</a> va yoqqan shirinliklarni tanlang.</div>`}</div></div>`},
order:()=>{const it=items();return `<div class="pg"><div class="wrap"><h2>Buyurtma berish</h2>${it.length?`<p>${it.map(({p,q})=>`${p.n} × ${q}`).join(", ")}.<br><b>Jami: ${fm(total())}</b></p>`:`<p class="empty">Avval <a href="#/menyu">menyudan</a> shirinlik tanlang. Maxsus tort uchun izohda yozishingiz ham mumkin.</p>`}<form class="form" id="of"><label>Ismingiz<input name="n" required autocomplete="name"></label><label>Telefon raqamingiz<input name="t" type="tel" required autocomplete="tel" placeholder="+998 "></label><label>Qanday olasiz?<select name="m"><option>Yetkazib berish (Denov shahri)</option><option>Oʻzim olib ketaman</option></select></label><label>Manzil<input name="a" autocomplete="street-address"></label><label>Qachonga kerak? (buyurtma turiga qarab bir necha kun oldin)<input name="d" placeholder="Masalan: shanba, soat 15:00"></label><label>Izoh<textarea name="x" rows="3" placeholder="Tort yozuvi, ta'm, bezak..."></textarea></label><button class="btn dark" type="submit">Buyurtmani yuborish</button></form></div></div>`},
contact:()=>`<div class="pg"><div class="wrap"><h2>Aloqa</h2><p class="sub">Qoʻngʻiroq qiling yoki Telegramda yozing, buyurtmani birga kelishamiz.</p><div class="info"><div><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span><h3>Telefon</h3><a class="big" href="tel:+998905213802">+998 90 521 38 02</a><a class="big" href="tel:+998916451985">+998 91 645 19 85</a></div><div><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg></span><h3>Telegram</h3><a class="big" href="${TG_CH}" target="_blank" rel="noopener">Kanalimizga oʻtish</a></div><div><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span><h3>Ish vaqti</h3><span class="big">Har kuni 08:00–17:00</span></div><div><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span><h3>Manzil</h3>Denov shahri, Islom Nuri 41-uy, Jome masjidi yonida</div></div></div></div>`
};
function render(){const [v,a]=location.hash.slice(2).split("/");const m={menyu:()=>V.menu(a&&decodeURIComponent(a)),savat:V.cart,buyurtma:V.order,aloqa:V.contact}[v]||V.home;
app.innerHTML=`<div class="view">${m()}</div>`;scrollTo(0,0);
document.querySelectorAll("#nav a,#tabs a").forEach(x=>x.classList.toggle("on",x.getAttribute("href")==="#/"+(v||"")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(x=>io.observe(x));
const f=$("#of");if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
const t=`Yangi buyurtma\nIsm: ${d.get("n")}\nTelefon: ${d.get("t")}\nUsul: ${d.get("m")}\nManzil: ${d.get("a")||"-"}\nVaqt: ${d.get("d")||"-"}\n\nMahsulotlar:\n${items().map(({p,q})=>`- ${p.n} × ${q} = ${fm(p.p*q)}`).join("\n")||"- (izohga qarang)"}\n\nJami: ${fm(total())}\nIzoh: ${d.get("x")||"-"}`;
const u=TG_USER?`https://t.me/${TG_USER}?text=${encodeURIComponent(t)}`:`https://t.me/share/url?url=${encodeURIComponent(TG_CH)}&text=${encodeURIComponent(t)}`;
try{navigator.clipboard.writeText(t)}catch(x){}
open(u,"_blank");
f.outerHTML=`<div class="form"><p><b>Buyurtma tayyor.</b> Telegram ochilmasa, quyidagi tugmani bosing yoki matnni nusxalab yuboring.</p><textarea class="out" readonly>${t}</textarea><div class="btns"><a class="btn dark" href="${u}" target="_blank" rel="noopener">Telegramda yuborish</a><a class="btn" style="border-color:var(--line)" href="tel:+998905213802">Qoʻngʻiroq qilish</a><button class="btn" id="shp" type="button" style="display:none;border-color:var(--line)">Rasmlar bilan yuborish</button></div></div>`;
let files=null;Promise.all(items().map(async({p})=>new File([await(await fetch(IMG[p.k])).blob()],p.k+".jpg",{type:"image/jpeg"}))).then(x=>files=x).catch(()=>{});
if(navigator.share){const b=$("#shp");b.style.display="inline-block";b.onclick=()=>{
if(!files){toast("Rasmlar tayyorlanmoqda, yana bir marta bosing");return}
const d={files,text:t,title:"Yangi buyurtma"};
if(!(navigator.canShare&&navigator.canShare(d))){toast("Bu brauzerda rasm yuborib boʻlmaydi. Telefonda Chrome yoki Safari orqali oching");return}
navigator.share(d).catch(e=>{if(e.name!=="AbortError")toast(e.name==="NotAllowedError"?"Ruxsat berilmadi. Saytni https manzilda toʻliq oching":"Yuborib boʻlmadi ("+e.name+")")})}}}}
document.addEventListener("click",e=>{const a=e.target.closest("[data-add]"),d=e.target.closest("[data-dec]"),c=e.target.closest("[data-cat]");
if(a){const i=a.dataset.add;cart[i]=(cart[i]||0)+1;save();document.querySelectorAll(".cartb,.tcart").forEach(b=>{b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump")});if(a.hasAttribute("data-q"))render();else toast(P[i].n+" savatga qoʻshildi")}
if(d){const i=d.dataset.dec;cart[i]--;if(cart[i]<=0)delete cart[i];save();render()}
if(c)location.hash="#/menyu/"+encodeURIComponent(c.dataset.cat)});
addEventListener("hashchange",render);save();render();
(()=>{const b=$("#bg"),c=["#c93d73","#e6bb62","#5a1424","#f4a6c0","#d9a441"];for(let i=0;i<20;i++){const s=document.createElement("i"),w=6+Math.random()*10;s.style.cssText=`left:${Math.random()*100}%;width:${w}px;height:${w*(i%3?1:2.6)}px;background:${c[i%5]};animation-duration:${14+Math.random()*18}s;animation-delay:${-Math.random()*30}s`;b.appendChild(s)}})();
