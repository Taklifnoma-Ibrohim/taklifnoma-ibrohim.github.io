/* =========================================================
   ОБЩИЕ ДАННЫЕ (одинаковые для всех языков)
   ========================================================= */
const CONFIG = {
  date: "2026-11-14T12:00",     // дата и время начала (ГГГГ-ММ-ДДTЧЧ:ММ)
  endTime: "15:00",             // время окончания (можно оставить пустым)
  timezone: "+03:00",           // часовой пояс места (Стамбул) — для точного отсчёта у гостей из других стран

  venue: {
    name: "OZKAD",
    address: "Kayabaşı, Kayaşehir Blv Seyran Şehir Cadde Dükkanları D:2 Blok No:29, 34494 Başakşehir/İstanbul",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kayaba%C5%9F%C4%B1%2C%20Kaya%C5%9Fehir%20Blv%20Seyran%20%C5%9Eehir%20Cadde%20D%C3%BCkkanlar%C4%B1%20D%3A2%20Blok%20No%3A29%2C%2034494%20Ba%C5%9Fak%C5%9Fehir/%C4%B0stanbul",
    mapEmbed: "https://maps.google.com/maps?q=Kayaba%C5%9F%C4%B1%2C%20Kaya%C5%9Fehir%20Blv%20Seyran%20%C5%9Eehir%20Cadde%20D%C3%BCkkanlar%C4%B1%20D%3A2%20Blok%20No%3A29%2C%2034494%20Ba%C5%9Fak%C5%9Fehir/%C4%B0stanbul&z=16&output=embed",
  },

  rsvp: {
    whatsapp: "905054951211",   // номер только цифрами, без «+»
    telegram: "Umarfaruq0198",  // username без «@»
  },
  contacts: { phone: "+90 505 495 12 11" },

  ayahArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",

  music: "ayah.mp3",  // аят 30:21, чтец Насир аль-Катами
  musicLoop: false,
  defaultLang: "uz",
};

/* =========================================================
   ТЕКСТЫ НА ДВУХ ЯЗЫКАХ (узбекский, арабский) — МЕНЯЙТЕ ЗДЕСЬ
   ========================================================= */
const TEXT = {
  uz: {
    groom: "Ibrohim", bride: "Ruqayya", amp: "&", city: "Istanbul",
    docTitle: "to‘yga taklifnoma",
    invited: "Siz taklif etilgansiz",
    hint: "Ochish uchun muhrni bosing",
    open: "Taklifnomani ochish", scroll: "Pastga",
    heroEyebrow: "To‘yga taklifnoma",
    ayahTranslation: "Uning oyat-alomatlaridan biri — sizlar uchun o‘zlaringizdan juftlar yaratib qo‘ygani, toki ular bilan taskin topgaysizlar. Va o‘rtalaringizda muhabbat va mehribonlik paydo qildi. Albatta, bunda tafakkur qiladigan qavm uchun oyat-alomatlar bordir.",
    ayahSource: "Rum surasi, 21-oyat",
    greeting: "Hurmatli mehmonlar!",
    invitationText: "Hayotimizdagi eng muhim va baxtli kunlardan biri — nikoh to‘yimizni biz bilan birga nishonlashga sizni katta mamnuniyat bilan taklif etamiz.",
    saveDate: "Sanani belgilab qo‘ying",
    months: ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"],
    weekdays: ["Du","Se","Ch","Pa","Ju","Sh","Ya"],
    weddingDay: "To‘y kuni",
    timeNote: "Peshin namozidan so‘ng",
    startsAt: "Boshlanishi",
    countdownTitle: "To‘ygacha qoldi",
    days: "kun", hours: "soat", mins: "daqiqa", secs: "soniya",
    venueTitle: "To‘y manzili",
    route: "Yo‘nalishni ko‘rish",
    map: "Xarita",
    wishesTitle: "Iltimoslarimiz",
    wishes: [
      "Iltimos, bizga gul sovg‘a qilmang — ularning go‘zalligidan bahramand bo‘lishga ulgurmaymiz",
      "Biz uchun eng yaxshi sovg‘a — sizning ishtirokingiz va konvertdagi sovg‘a",
      "To‘y bo‘yicha savollaringizni quyidagi kontaktlar orqali berishingiz mumkin",
    ],
    rsvpTitle: "Mehmon anketasi",
    rsvpLead: "Iltimos, ishtirokingizni tasdiqlang",
    nameLabel: "Ism va familiyangiz",
    namePh: "Masalan, Maryam Abdullayeva",
    attendQ: "Kela olasizmi?",
    a1: "Ha, albatta kelaman",
    a2: "Juftim bilan kelaman",
    a3: "Afsuski, kela olmayman",
    commentLabel: "Izoh yoki tilak",
    commentPh: "Ixtiyoriy",
    formError: "Iltimos, ismingizni yozing va javobni tanlang",
    sendWa: "WhatsApp orqali yuborish",
    sendTg: "Telegram orqali yuborish",
    thanks: "Rahmat!",
    thanksText: "Sizni kutamiz!",
    noteWa: "WhatsApp’da «Yuborish» tugmasini bosing.",
    noteTg: "Javob matni nusxalandi — uni Telegram chatiga qo‘ying va yuboring.",
    msgTitle: "Taklifnomaga javob", msgName: "Ism", msgAnswer: "Javob", msgComment: "Izoh",
    contactsTitle: "Aloqa",
    contactsLead: "To‘y bo‘yicha barcha savollar uchun",
    phone: "Telefon", write: "Yozish",
    closing: "Muhabbat bilan sizni intiqlik bilan kutamiz,",
  },

  ar: {
    groom: "إبراهيم", bride: "رقيّة", amp: "و", city: "إسطنبول",
    docTitle: "دعوة زفاف",
    invited: "أنتم مدعوون",
    hint: "اضغط على الختم لفتح الدعوة",
    open: "فتح الدعوة", scroll: "إلى الأسفل",
    heroEyebrow: "دعوة زفاف",
    ayahTranslation: "",
    ayahSource: "سورة الروم، الآية ٢١",
    greeting: "ضيوفنا الكرام",
    invitationText: "يسعدنا ويشرّفنا أن ندعوكم لمشاركتنا فرحة يوم من أهم وأسعد أيام حياتنا — يوم زفافنا.",
    saveDate: "احفظوا التاريخ",
    months: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
    weekdays: ["اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت","أحد"],
    weddingDay: "يوم الزفاف",
    timeNote: "بعد صلاة الظهر",
    startsAt: "يبدأ في",
    countdownTitle: "الوقت المتبقي على الزفاف",
    days: "يوم", hours: "ساعة", mins: "دقيقة", secs: "ثانية",
    venueTitle: "مكان الحفل",
    route: "الاتجاهات على الخريطة",
    map: "الخريطة",
    wishesTitle: "ملاحظات",
    wishes: [
      "نرجو عدم إهدائنا الزهور، فلن نتمكن من الاستمتاع بجمالها",
      "أجمل هدية لنا هي حضوركم، والهدية في ظرف",
      "يمكنكم طرح أسئلتكم حول الحفل عبر وسائل التواصل أدناه",
    ],
    rsvpTitle: "تأكيد الحضور",
    rsvpLead: "نرجو تأكيد حضوركم",
    nameLabel: "الاسم الكامل",
    namePh: "مثال: مريم عبد الله",
    attendQ: "هل ستتمكنون من الحضور؟",
    a1: "نعم، سأحضر بكل سرور",
    a2: "سأحضر مع الزوج أو الزوجة",
    a3: "للأسف، لن أتمكن من الحضور",
    commentLabel: "تعليق أو تهنئة",
    commentPh: "اختياري",
    formError: "يرجى كتابة الاسم واختيار إجابة",
    sendWa: "إرسال عبر واتساب",
    sendTg: "إرسال عبر تيليجرام",
    thanks: "شكرًا لكم!",
    thanksText: "بانتظاركم!",
    noteWa: "بقي أن تضغطوا «إرسال» في واتساب.",
    noteTg: "تم نسخ نص الرد — الصقوه في محادثة تيليجرام وأرسلوه.",
    msgTitle: "رد على الدعوة", msgName: "الاسم", msgAnswer: "الرد", msgComment: "تعليق",
    contactsTitle: "للتواصل",
    contactsLead: "لأي استفسار حول الحفل",
    phone: "الهاتف", write: "مراسلة",
    closing: "بكل حب، ننتظركم بفارغ الصبر",
  },
};

/* =========================================================
   Дальше — логика сайта (менять не нужно)
   ========================================================= */
const $ = (s) => document.querySelector(s);
const rand = (a, b) => a + Math.random() * (b - a);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = (n) => String(n).padStart(2, "0");
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};

const wedding = new Date(CONFIG.date);
const weddingAbs = new Date(`${CONFIG.date}:00${CONFIG.timezone || ""}`);
const startTime = `${pad(wedding.getHours())}:${pad(wedding.getMinutes())}`;
let T = TEXT[CONFIG.defaultLang];

/* ---------- Неизменные данные ---------- */
$("#heroDate").textContent = `${pad(wedding.getDate())} · ${pad(wedding.getMonth() + 1)} · ${wedding.getFullYear()}`;
$("#ayahArabic").textContent = CONFIG.ayahArabic;
$("#venueName").textContent = CONFIG.venue.name;
$("#venueAddress").textContent = CONFIG.venue.address;
$("#mapLink").href = CONFIG.venue.mapLink || "#";
if (CONFIG.venue.mapEmbed) {
  const wrap = $("#mapWrap");
  wrap.hidden = false;
  wrap.innerHTML = `<iframe src="${CONFIG.venue.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}
if (!CONFIG.rsvp.whatsapp) document.querySelector('[data-via="whatsapp"]').remove();
if (!CONFIG.rsvp.telegram) document.querySelector('[data-via="telegram"]').remove();

/* ---------- Переключение языка ---------- */
function setLang(lang) {
  if (!TEXT[lang]) lang = CONFIG.defaultLang;
  T = TEXT[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  store.set("lang", lang);

  document.querySelectorAll("[data-t]").forEach((el) => {
    const v = T[el.dataset.t];
    el.textContent = v ?? "";
    if (el.closest(".ayah")) el.hidden = !v;
  });
  document.querySelectorAll("[data-t-ph]").forEach((el) => (el.placeholder = T[el.dataset.tPh]));
  document.querySelectorAll("[data-t-aria]").forEach((el) => el.setAttribute("aria-label", T[el.dataset.tAria]));
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));

  document.title = `${T.groom} ${T.amp} ${T.bride} — ${T.docTitle}`;
  $("#sealInitials").textContent = lang === "ar" ? `${T.groom[0]} و ${T.bride[0]}` : `${T.groom[0]}&${T.bride[0]}`;
  $("#timeRange").textContent = CONFIG.endTime ? `${startTime} — ${CONFIG.endTime}` : `${T.startsAt} ${startTime}`;
  $("#mapWrap iframe")?.setAttribute("title", T.map);

  renderCalendar();
  renderWishes();
  renderContacts();
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

/* ---------- Календарь ---------- */
function renderCalendar() {
  const y = wedding.getFullYear(), m = wedding.getMonth();
  $("#calTitle").textContent = `${T.months[m]} ${y}`;
  const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3 1.7-1.8 3.2-3 5.3-3 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';
  let html = T.weekdays.map((d) => `<div class="wd">${d}</div>`).join("");
  const offset = (new Date(y, m, 1).getDay() + 6) % 7; // понедельник = 0
  const days = new Date(y, m + 1, 0).getDate();
  for (let i = 0; i < offset; i++) html += '<div class="d"></div>';
  for (let d = 1; d <= days; d++) {
    html += d === wedding.getDate()
      ? `<div class="d is-day" aria-label="${T.weddingDay}">${heart}<b>${d}</b></div>`
      : `<div class="d">${d}</div>`;
  }
  $("#calendar").innerHTML = html;
}

/* ---------- Пожелания ---------- */
function renderWishes() {
  const list = T.wishes || [];
  $("#wishesSection").hidden = !list.length;
  $("#wishes").innerHTML = list.map((w) => `<li>${w}</li>`).join("");
}

/* ---------- Контакты ---------- */
function renderContacts() {
  const items = [];
  const phone = CONFIG.contacts?.phone;
  if (phone) items.push(`<a href="tel:${phone.replace(/[^\d+]/g, "")}"><small>${T.phone}</small><bdi dir="ltr">${phone}</bdi></a>`);
  if (CONFIG.rsvp.whatsapp) items.push(`<a href="https://wa.me/${CONFIG.rsvp.whatsapp}" target="_blank" rel="noopener"><small>WhatsApp</small>${T.write}</a>`);
  if (CONFIG.rsvp.telegram) items.push(`<a href="https://t.me/${CONFIG.rsvp.telegram}" target="_blank" rel="noopener"><small>Telegram</small><bdi dir="ltr">@${CONFIG.rsvp.telegram}</bdi></a>`);
  $("#contactsSection").hidden = !items.length;
  $("#contacts").innerHTML = items.join("");
}

/* ---------- Обратный отсчёт ---------- */
(function countdown() {
  const els = { d: $("#cdDays"), h: $("#cdHours"), m: $("#cdMins"), s: $("#cdSecs") };
  const set = (el, v) => {
    v = String(v);
    if (el.textContent === v) return;
    el.textContent = v;
    if (!reduceMotion && el.animate) el.animate([{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "none" }], { duration: 450, easing: "ease-out" });
  };
  function tick() {
    const diff = Math.max(0, weddingAbs - Date.now()) / 1000;
    set(els.d, Math.floor(diff / 86400));
    set(els.h, pad(Math.floor((diff % 86400) / 3600)));
    set(els.m, pad(Math.floor((diff % 3600) / 60)));
    set(els.s, pad(Math.floor(diff % 60)));
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- Анкета ---------- */
$("#rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const attend = f.attend.value;
  const comment = f.comment.value.trim();
  const err = $("#formError");
  if (!name || !attend) { err.hidden = false; return; }
  err.hidden = true;

  const text = `${T.msgTitle}\n${T.msgName}: ${name}\n${T.msgAnswer}: ${T[attend]}${comment ? `\n${T.msgComment}: ${comment}` : ""}`;
  const via = e.submitter?.dataset.via || "whatsapp";

  if (via === "telegram" && CONFIG.rsvp.telegram) {
    // Telegram не умеет подставлять текст в личный чат — копируем его, гость просто вставит
    navigator.clipboard?.writeText(text).catch(() => {});
    window.open(`https://t.me/${CONFIG.rsvp.telegram}`, "_blank");
    $("#thanksNote").textContent = T.noteTg;
  } else if (CONFIG.rsvp.whatsapp) {
    window.open(`https://wa.me/${CONFIG.rsvp.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    $("#thanksNote").textContent = T.noteWa;
  }
  f.hidden = true;
  $("#thanks").hidden = false;
});

/* ---------- Музыка ---------- */
const audio = $("#audio");
const musicBtn = $("#musicBtn");
if (CONFIG.music) {
  audio.src = CONFIG.music;
  audio.loop = !!CONFIG.musicLoop;
  musicBtn.hidden = false;
  musicBtn.addEventListener("click", () => (audio.paused ? audio.play() : audio.pause()));
  audio.addEventListener("play", () => musicBtn.classList.add("is-playing"));
  audio.addEventListener("pause", () => musicBtn.classList.remove("is-playing"));
}

/* ---------- Открытие конверта ---------- */
$("#openBtn").addEventListener("click", () => {
  const intro = $("#intro");
  if (intro.classList.contains("is-open")) return;
  intro.classList.add("is-open");
  if (CONFIG.music) audio.play().catch(() => {});
  if (!reduceMotion) setTimeout(() => burstPetals(40), 850);
  setTimeout(() => {
    document.body.classList.remove("locked");
    document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("in"));
  }, reduceMotion ? 0 : 2200);
  setTimeout(() => intro.remove(), reduceMotion ? 500 : 3300);
});

/* ---------- Лепестки ---------- */
function makePetal(cls, vars) {
  const p = document.createElement("i");
  p.className = `petal ${cls}${Math.random() < 0.35 ? " petal--ivory" : ""}`;
  for (const k in vars) p.style.setProperty(`--${k}`, vars[k]);
  $("#petals").appendChild(p);
  return p;
}
function burstPetals(n) {
  for (let i = 0; i < n; i++) {
    const a = rand(-Math.PI * 0.95, -Math.PI * 0.05);
    const dist = rand(80, Math.min(innerWidth, 700) * 0.55);
    const p = makePetal("petal--burst", {
      bx: `${(Math.cos(a) * dist).toFixed(0)}px`,
      by: `${(Math.sin(a) * dist * 0.9).toFixed(0)}px`,
      fall: `${rand(35, 70).toFixed(0)}vh`,
      r: `${rand(-600, 600).toFixed(0)}deg`,
      s: rand(0.7, 1.35).toFixed(2),
      d: `${rand(2.4, 3.8).toFixed(2)}s`,
    });
    p.addEventListener("animationend", () => p.remove());
  }
}
function startFalling(n) {
  for (let i = 0; i < n; i++) {
    makePetal("petal--fall", {
      x: `${rand(0, 100).toFixed(1)}vw`,
      drift: `${rand(-90, 90).toFixed(0)}px`,
      r: `${rand(240, 900).toFixed(0)}deg`,
      s: rand(0.55, 1.05).toFixed(2),
      d: `${rand(12, 22).toFixed(1)}s`,
      delay: `${(-rand(0, 22)).toFixed(1)}s`,
    });
  }
}
if (!reduceMotion) startFalling(innerWidth < 600 ? 9 : 14);

/* ---------- Анимация появления ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting && !en.target.closest(".hero")) {
      en.target.classList.add("in");
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Старт: язык из ссылки (?lang=uz), затем сохранённый, затем по умолчанию ---------- */
setLang(new URLSearchParams(location.search).get("lang") || store.get("lang") || CONFIG.defaultLang);
