import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { toast } from "sonner";

type Lang = "ru" | "en";

const copy = {
  ru: {
    nav: ["О нас", "Услуги", "Команда", "Контакты"],
    eyebrow: "BARBERSHOP · ALMATY",
    heroTitle: "Стиль, который\nговорит за тебя.",
    heroBody:
      "BLADE — камерное пространство для тех, кто ценит точность, ритуал и хорошую беседу. Стрижём без спешки, создаём с характером.",
    book: "Записаться",
    explore: "Смотреть услуги",
    heroNote: "Открыты сегодня · до 22:00",
    scroll: "Листайте вниз",
    sectionAbout: "01 / Философия",
    aboutTitle: "Не просто стрижка.\nВаш новый ритуал.",
    aboutBody:
      "Мы верим, что хороший барбершоп начинается с внимания к деталям. От первого касания машинки до финального штриха — каждый визит BLADE собран как личный ритуал.",
    aboutQuote: "Precision is a form of respect.",
    statOne: "лет в деле",
    statTwo: "средняя оценка",
    statThree: "минут заботы",
    servicesLabel: "02 / Меню",
    servicesTitle: "Соберите свой\nидеальный образ.",
    servicesNote: "Все услуги включают консультацию и стайлинг.",
    services: [
      { name: "Signature Cut", desc: "Фирменная стрижка ножницами и машинкой", price: "12 000 ₸", time: "60 мин" },
      { name: "The Full Ritual", desc: "Стрижка, моделирование бороды и горячее полотенце", price: "18 000 ₸", time: "90 мин" },
      { name: "Beard Architecture", desc: "Точная форма, контуры и уход за бородой", price: "9 000 ₸", time: "45 мин" },
      { name: "Clean Shave", desc: "Королевское бритьё с премиальным уходом", price: "10 000 ₸", time: "45 мин" },
    ],
    galleryLabel: "03 / Атмосфера",
    galleryTitle: "Место, куда\nхочется вернуться.",
    galleryBody: "Тёплый свет, винил на проигрывателе и кресло, в котором можно выдохнуть.",
    teamLabel: "04 / Команда",
    teamTitle: "Люди, которым\nможно доверять.",
    teamBody: "Наши мастера слушают, предлагают и делают ровно то, что подходит вам — не трендам из ленты.",
    team: [
      { name: "Илья Морозов", role: "Founder · Master Barber", image: "/manus-storage/portrait_6992874a.jpg" },
      { name: "Арман Садыков", role: "Senior Barber", image: "/manus-storage/hair-detail_830fe21d.jpg" },
    ],
    reviewsLabel: "05 / Отзывы",
    reviewsTitle: "Сказано\nгостями BLADE.",
    reviews: [
      { quote: "Редкий случай, когда место выглядит ещё лучше, чем на фотографиях. Илья понял, что мне нужно, с одного взгляда.", name: "Алексей К.", meta: "Гость с 2023 года" },
      { quote: "The Full Ritual — это не услуга, а полтора часа полного перезапуска. Выхожу собранным и спокойным.", name: "Тимур А.", meta: "Гость с 2024 года" },
      { quote: "Наконец-то нашёл место, где не нужно объяснять очевидное. Идеальная форма каждый раз.", name: "Данияр Р.", meta: "Гость с 2022 года" },
    ],
    bookingLabel: "06 / Запись",
    bookingTitle: "Ваше время\nдля себя.",
    bookingBody: "Выберите услугу — мы свяжемся с вами в течение 15 минут и подберём удобное окно.",
    name: "Ваше имя",
    phone: "Номер телефона",
    service: "Выберите услугу",
    date: "Желаемая дата",
    send: "Отправить запрос",
    sent: "Запрос отправлен",
    sentBody: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    address: "ул. Панфилова, 92",
    city: "Алматы · Казахстан",
    hours: "Пн—Вс · 10:00—22:00",
    footerLine: "Сделано с вниманием к деталям.",
    bookWhatsApp: "Написать в WhatsApp",
  },
  en: {
    nav: ["About", "Services", "Team", "Contact"],
    eyebrow: "BARBERSHOP · ALMATY",
    heroTitle: "A style that\nspeaks for you.",
    heroBody:
      "BLADE is an intimate space for those who value precision, ritual and a good conversation. No rush — just character.",
    book: "Book a visit",
    explore: "Explore services",
    heroNote: "Open today · until 10 PM",
    scroll: "Scroll to explore",
    sectionAbout: "01 / Philosophy",
    aboutTitle: "More than a cut.\nYour new ritual.",
    aboutBody:
      "We believe a great barbershop starts with attention to detail. From the first clipper pass to the final touch, every BLADE visit is built like a personal ritual.",
    aboutQuote: "Precision is a form of respect.",
    statOne: "years in craft",
    statTwo: "average rating",
    statThree: "minutes of care",
    servicesLabel: "02 / Menu",
    servicesTitle: "Build your\nperfect look.",
    servicesNote: "Every service includes consultation and styling.",
    services: [
      { name: "Signature Cut", desc: "Signature scissor and clipper haircut", price: "12 000 ₸", time: "60 min" },
      { name: "The Full Ritual", desc: "Cut, beard architecture and hot towel", price: "18 000 ₸", time: "90 min" },
      { name: "Beard Architecture", desc: "Precise shape, contours and care", price: "9 000 ₸", time: "45 min" },
      { name: "Clean Shave", desc: "Royal shave with premium skincare", price: "10 000 ₸", time: "45 min" },
    ],
    galleryLabel: "03 / Atmosphere",
    galleryTitle: "A place you\nwant to return to.",
    galleryBody: "Warm light, vinyl on the turntable and a chair where you can finally exhale.",
    teamLabel: "04 / The crew",
    teamTitle: "People you\ncan trust.",
    teamBody: "Our barbers listen, suggest and create what fits you — not whatever is trending on your feed.",
    team: [
      { name: "Ilya Morozov", role: "Founder · Master Barber", image: "/manus-storage/portrait_6992874a.jpg" },
      { name: "Arman Sadykov", role: "Senior Barber", image: "/manus-storage/hair-detail_830fe21d.jpg" },
    ],
    reviewsLabel: "05 / Words from guests",
    reviewsTitle: "BLADE,\nin their words.",
    reviews: [
      { quote: "Rarely does a place look even better than its photos. Ilya understood what I wanted in one glance.", name: "Alex K.", meta: "Guest since 2023" },
      { quote: "The Full Ritual is not a service, it is an hour and a half of a complete reset. I leave calm and collected.", name: "Timur A.", meta: "Guest since 2024" },
      { quote: "Finally found a place where I don't have to explain the obvious. Perfect shape, every time.", name: "Daniyar R.", meta: "Guest since 2022" },
    ],
    bookingLabel: "06 / Book your chair",
    bookingTitle: "Your time\nfor yourself.",
    bookingBody: "Choose a service — we’ll get back to you within 15 minutes and find a time that works.",
    name: "Your name",
    phone: "Phone number",
    service: "Choose a service",
    date: "Preferred date",
    send: "Send request",
    sent: "Request sent",
    sentBody: "Thank you! We’ll be in touch very soon.",
    address: "92 Panfilov Street",
    city: "Almaty · Kazakhstan",
    hours: "Mon—Sun · 10 AM—10 PM",
    footerLine: "Made with attention to detail.",
    bookWhatsApp: "Write on WhatsApp",
  },
} as const;

const navIds = ["about", "services", "team", "contact"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = copy[lang];

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success(t.sent, { description: t.sentBody });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-bone">
      <header className="site-header">
        <div className="container flex h-20 items-center justify-between">
          <button className="brand-mark" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="BLADE home">
            <span className="brand-symbol"><Scissors size={17} strokeWidth={1.4} /></span>
            <span>BLADE<span className="brand-dot">.</span></span>
          </button>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
            {t.nav.map((item, index) => (
              <button key={item} className="nav-link" onClick={() => jumpTo(navIds[index])}>
                <span className="nav-index">0{index + 1}</span>{item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="lang-switch" aria-label="Language selector">
              <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
              <span>/</span>
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <button className="header-cta hidden sm:inline-flex" onClick={() => jumpTo("contact")}>
              {t.book} <ArrowUpRight size={15} />
            </button>
            <button className="mobile-menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-nav lg:hidden">
            {t.nav.map((item, index) => (
              <button key={item} onClick={() => jumpTo(navIds[index])}><span>0{index + 1}</span>{item}</button>
            ))}
            <button className="mobile-nav-book" onClick={() => jumpTo("contact")}>{t.book}<ArrowUpRight size={16} /></button>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
              <h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
              <p className="hero-body">{t.heroBody}</p>
              <div className="hero-actions">
                <button className="button-gold" onClick={() => jumpTo("contact")}>{t.book}<ArrowUpRight size={17} /></button>
                <button className="text-link" onClick={() => jumpTo("services")}>{t.explore}<span className="link-line" /></button>
              </div>
              <div className="hero-meta"><span className="status-dot" />{t.heroNote}</div>
            </div>
            <div className="hero-visual">
              <div className="hero-number">01<span>/</span>06</div>
              <div className="hero-image-wrap">
                <img src="/manus-storage/portrait_6992874a.jpg" alt={lang === "ru" ? "Портрет гостя BLADE" : "BLADE guest portrait"} />
                <div className="hero-image-overlay" />
                <div className="image-caption"><span>01</span><span>{lang === "ru" ? "THE BLADE PORTRAIT" : "THE BLADE PORTRAIT"}</span></div>
              </div>
              <div className="hero-stamp"><span>EST.</span><strong>24</strong><span>ALMATY</span></div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => jumpTo("about")}><span>{t.scroll}</span><ChevronDown size={16} /></button>
        </section>

        <section id="about" className="about-section section-padding">
          <div className="container about-grid">
            <div className="section-index"><span>{t.sectionAbout}</span><div className="vertical-rule" /></div>
            <div className="about-content">
              <h2>{t.aboutTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <div className="about-lower">
                <p className="section-body">{t.aboutBody}</p>
                <div className="about-quote"><span>“</span><em>{t.aboutQuote}</em></div>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat"><strong>08</strong><span>{t.statOne}</span></div>
              <div className="stat"><strong>4.9</strong><span>{t.statTwo}</span></div>
              <div className="stat"><strong>60<span>+</span></strong><span>{t.statThree}</span></div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-padding">
          <div className="container">
            <div className="section-topline"><span>{t.servicesLabel}</span><span>{t.servicesNote}</span></div>
            <div className="services-heading-row">
              <h2>{t.servicesTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <div className="gold-circle"><Scissors size={25} strokeWidth={1} /></div>
            </div>
            <div className="services-list">
              {t.services.map((service, index) => (
                <button className="service-row" key={service.name} onClick={() => jumpTo("contact")}>
                  <span className="service-no">0{index + 1}</span>
                  <span className="service-info"><strong>{service.name}</strong><small>{service.desc}</small></span>
                  <span className="service-time"><Clock3 size={14} />{service.time}</span>
                  <span className="service-price">{service.price}</span>
                  <span className="service-arrow"><ArrowUpRight size={20} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-image large-image"><img src="/manus-storage/interior-wide_992644f4.jpg" alt={lang === "ru" ? "Интерьер BLADE" : "BLADE interior"} /><div className="gallery-shade" /></div>
          <div className="gallery-copy"><span className="section-kicker">{t.galleryLabel}</span><h2>{t.galleryTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.galleryBody}</p><button className="text-link light" onClick={() => jumpTo("contact")}>{t.book}<span className="link-line" /></button></div>
          <div className="gallery-image detail-image"><img src="/manus-storage/hair-detail_830fe21d.jpg" alt={lang === "ru" ? "Деталь укладки" : "Hair styling detail"} /></div>
          <div className="gallery-vertical">BLADE / 2024 / ALMATY</div>
        </section>

        <section id="team" className="team-section section-padding">
          <div className="container">
            <div className="team-heading"><div><span className="section-kicker dark">{t.teamLabel}</span><h2>{t.teamTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div><p>{t.teamBody}</p></div>
            <div className="team-grid">
              {t.team.map((member, index) => <article className="team-card" key={member.name}><div className="team-photo"><img src={member.image} alt={member.name} /><span>0{index + 1}</span></div><div className="team-meta"><div><h3>{member.name}</h3><p>{member.role}</p></div><ArrowUpRight size={19} /></div></article>)}
              <div className="team-manifesto"><Sparkles size={22} strokeWidth={1.3} /><p>{lang === "ru" ? "Хороший стиль — это не громкость. Это точность." : "Good style is not loud. It is precise."}</p><span>BLADE / MANIFESTO 01</span></div>
            </div>
          </div>
        </section>

        <section className="reviews-section section-padding">
          <div className="container">
            <div className="section-topline light-line"><span>{t.reviewsLabel}</span><span>★★★★★</span></div>
            <h2>{t.reviewsTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <div className="reviews-grid">
              {t.reviews.map((review) => <article className="review-card" key={review.name}><div className="review-stars"><Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /></div><p>“{review.quote}”</p><div><strong>{review.name}</strong><span>{review.meta}</span></div></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="booking-section section-padding">
          <div className="container booking-grid">
            <div className="booking-copy"><span className="section-kicker dark">{t.bookingLabel}</span><h2>{t.bookingTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.bookingBody}</p><div className="contact-details"><a href="https://wa.me/77072001870" target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.bookWhatsApp}<ArrowUpRight size={15} /></a><div><MapPin size={16} /><span>{t.address}<small>{t.city}</small></span></div><div><CalendarDays size={16} /><span>{t.hours}</span></div></div></div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label><span>{t.name}</span><input required name="name" placeholder="Ruslan" /></label>
              <label><span>{t.phone}</span><input required name="phone" type="tel" placeholder="+7 (___) ___-__-__" /></label>
              <label><span>{t.service}</span><select required name="service" defaultValue=""><option value="" disabled>{t.service}</option>{t.services.map((service) => <option value={service.name} key={service.name}>{service.name} · {service.price}</option>)}</select></label>
              <label><span>{t.date}</span><input required name="date" type="date" /></label>
              <button className="form-submit" type="submit" disabled={submitted}>{submitted ? <><Check size={17} />{t.sent}</> : <>{t.send}<ArrowUpRight size={17} /> </>}</button>
              <p className="form-note">{lang === "ru" ? "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных." : "By clicking, you agree to the processing of personal data."}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><div className="brand-mark"><span className="brand-symbol"><Scissors size={17} strokeWidth={1.4} /></span><span>BLADE<span className="brand-dot">.</span></span></div><p>{t.footerLine}</p><div className="footer-socials"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} />Instagram</a><a href="https://wa.me/77072001870" target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp</a></div></div>
        <div className="container footer-bottom"><span>© 2024 BLADE Barbershop</span><span>Almaty, KZ</span><span>Made for the modern gentleman</span></div>
      </footer>
    </div>
  );
}
