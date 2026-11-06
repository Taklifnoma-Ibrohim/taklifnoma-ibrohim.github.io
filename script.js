/* =========================================================
   ВСЕ ДАННЫЕ ПРИГЛАШЕНИЯ — МЕНЯЙТЕ ЗДЕСЬ
   ========================================================= */
const CONFIG = {
  groom: "Ибрахим",             // жених
  bride: "Рукайя",              // невеста
  date: "2026-11-12T12:00",     // дата и время начала (ГГГГ-ММ-ДДTЧЧ:ММ)
  endTime: "15:00",             // время окончания (можно оставить пустым)
  timeNote: "После молитвы Зухр",
  timezone: "+03:00",           // часовой пояс места (Стамбул) — для точного отсчёта у гостей из других стран
  city: "Стамбул",

  greeting: "Дорогие гости!",
  invitationText:
    "С большой радостью приглашаем вас разделить с нами один из самых важных и счастливых дней нашей жизни — день нашей свадьбы.",

  venue: {
    name: "OZKAD",
    address: "Kayabaşı, Kayaşehir Blv Seyran Şehir Cadde Dükkanları D:2 Blok No:29, 34494 Başakşehir/İstanbul",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kayaba%C5%9F%C4%B1%2C%20Kaya%C5%9Fehir%20Blv%20Seyran%20%C5%9Eehir%20Cadde%20D%C3%BCkkanlar%C4%B1%20D%3A2%20Blok%20No%3A29%2C%2034494%20Ba%C5%9Fak%C5%9Fehir/%C4%B0stanbul",   // ссылка для кнопки «Построить маршрут» (Google / 2GIS / Яндекс)
    mapEmbed: "https://maps.google.com/maps?q=Kayaba%C5%9F%C4%B1%2C%20Kaya%C5%9Fehir%20Blv%20Seyran%20%C5%9Eehir%20Cadde%20D%C3%BCkkanlar%C4%B1%20D%3A2%20Blok%20No%3A29%2C%2034494%20Ba%C5%9Fak%C5%9Fehir/%C4%B0stanbul&z=16&output=embed",                              // ссылка для встроенной карты (iframe src) — можно оставить пустой
  },

  wishes: [
    "Пожалуйста, не дарите нам цветы — мы не успеем насладиться их красотой",
    "Лучший подарок для нас — ваше присутствие и подарок в конверте",
    "Вопросы по празднику можно задать нашему организатору",
  ],

  rsvp: {
    whatsapp: "905054951211",   // номер только цифрами, без «+» — ответ гостя уйдёт в WhatsApp
    telegram: "Umarfaruq0198",  // username без «@»
  },

  contacts: {
    phone: "+90 505 495 12 11",
  },

  ayah: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation: "Среди Его знамений — то, что Он сотворил из вас самих жён, чтобы вы находили в них успокоение, и установил между вами любовь и милосердие. Воистину, в этом — знамения для людей размышляющих.",
    source: "Сура «Ар-Рум», 30:21",
  },

  music: "ayah.mp3",  // аят 30:21, чтец Насир аль-Катами
  musicLoop: false,   // true — повторять по кругу
  closing: "С любовью и нетерпением ждём вас,",
};

/* =========================================================
   Дальше — логика сайта (менять не нужно)
   ========================================================= */
const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");
const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const MONTHS = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
const MONTHS_GEN = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

const wedding = new Date(CONFIG.date);
const weddingAbs = new Date(`${CONFIG.date}:00${CONFIG.timezone || ""}`);

/* ---------- Текстовые поля ---------- */
document.querySelectorAll("[data-bind]").forEach((el) => {
  const v = get(CONFIG, el.dataset.bind);
  if (v) el.textContent = v;
});
document.title = `${CONFIG.groom} & ${CONFIG.bride} — приглашение на свадьбу`;
$("#sealInitials").textContent = `${CONFIG.groom[0]}&${CONFIG.bride[0]}`;
$("#heroDate").textContent = `${pad(wedding.getDate())} · ${pad(wedding.getMonth() + 1)} · ${wedding.getFullYear()}`;
const startTime = `${pad(wedding.getHours())}:${pad(wedding.getMinutes())}`;
$("#timeRange").textContent = CONFIG.endTime ? `${startTime} — ${CONFIG.endTime}` : `Начало в ${startTime}`;

/* ---------- Календарь ---------- */
(function renderCalendar() {
  const y = wedding.getFullYear(), m = wedding.getMonth();
  $("#calTitle").textContent = `${MONTHS[m]} ${y}`;
  const cal = $("#calendar");
  const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3 1.7-1.8 3.2-3 5.3-3 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';
  let html = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map((d) => `<div class="wd">${d}</div>`).join("");
  const offset = (new Date(y, m, 1).getDay() + 6) % 7; // понедельник = 0
  const days = new Date(y, m + 1, 0).getDate();
  for (let i = 0; i < offset; i++) html += '<div class="d"></div>';
  for (let d = 1; d <= days; d++) {
    html += d === wedding.getDate()
      ? `<div class="d is-day" aria-label="День свадьбы">${heart}<b>${d}</b></div>`
      : `<div class="d">${d}</div>`;
  }
  cal.innerHTML = html;
})();

/* ---------- Обратный отсчёт ---------- */
(function countdown() {
  const els = { d: $("#cdDays"), h: $("#cdHours"), m: $("#cdMins"), s: $("#cdSecs") };
  function tick() {
    let diff = Math.max(0, weddingAbs - Date.now()) / 1000;
    els.d.textContent = Math.floor(diff / 86400);
    els.h.textContent = pad(Math.floor((diff % 86400) / 3600));
    els.m.textContent = pad(Math.floor((diff % 3600) / 60));
    els.s.textContent = pad(Math.floor(diff % 60));
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- Место и карта ---------- */
$("#mapLink").href = CONFIG.venue.mapLink || "#";
if (CONFIG.venue.mapEmbed) {
  const wrap = $("#mapWrap");
  wrap.hidden = false;
  wrap.innerHTML = `<iframe src="${CONFIG.venue.mapEmbed}" loading="lazy" title="Карта" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

/* ---------- Пожелания ---------- */
if (CONFIG.wishes.length) {
  $("#wishes").innerHTML = CONFIG.wishes.map((w) => `<li>${w}</li>`).join("");
} else {
  $("#wishesSection").remove();
}

/* ---------- Анкета ---------- */
if (CONFIG.rsvp.deadline) {
  const dl = new Date(CONFIG.rsvp.deadline);
  $("#rsvpLead").insertAdjacentHTML("beforeend", ` до <strong>${dl.getDate()} ${MONTHS_GEN[dl.getMonth()]}</strong>`);
}

$("#rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const attend = f.attend.value;
  const comment = f.comment.value.trim();
  const err = $("#formError");
  if (!name || !attend) { err.hidden = false; return; }
  err.hidden = true;

  const text = `Ответ на приглашение\nИмя: ${name}\nОтвет: ${attend}${comment ? `\nКомментарий: ${comment}` : ""}`;
  const via = e.submitter?.dataset.via || "whatsapp";

  if (via === "telegram" && CONFIG.rsvp.telegram) {
    // Telegram не умеет подставлять текст в личный чат — копируем его, гость просто вставит
    navigator.clipboard?.writeText(text).catch(() => {});
    window.open(`https://t.me/${CONFIG.rsvp.telegram}`, "_blank");
    $("#thanksNote").textContent = "Текст ответа скопирован — вставьте его в чат Telegram и отправьте.";
  } else if (CONFIG.rsvp.whatsapp) {
    window.open(`https://wa.me/${CONFIG.rsvp.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    $("#thanksNote").textContent = "Осталось нажать «Отправить» в WhatsApp.";
  }
  f.hidden = true;
  $("#thanks").hidden = false;
});

if (!CONFIG.rsvp.whatsapp) document.querySelector('[data-via="whatsapp"]').remove();
if (!CONFIG.rsvp.telegram) document.querySelector('[data-via="telegram"]').remove();

/* ---------- Контакты ---------- */
(function contacts() {
  const items = [];
  const phone = CONFIG.contacts?.phone;
  if (phone) items.push(`<a href="tel:${phone.replace(/[^\d+]/g, "")}"><small>Телефон</small>${phone}</a>`);
  if (CONFIG.rsvp.whatsapp) items.push(`<a href="https://wa.me/${CONFIG.rsvp.whatsapp}" target="_blank" rel="noopener"><small>WhatsApp</small>Написать</a>`);
  if (CONFIG.rsvp.telegram) items.push(`<a href="https://t.me/${CONFIG.rsvp.telegram}" target="_blank" rel="noopener"><small>Telegram</small>@${CONFIG.rsvp.telegram}</a>`);
  if (items.length) $("#contacts").innerHTML = items.join("");
  else $("#contactsSection").remove();
})();

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
  $("#intro").classList.add("is-open");
  document.body.classList.remove("locked");
  if (CONFIG.music) audio.play().catch(() => {});
  setTimeout(() => document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("in")), 1300);
});

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
