import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import Section09 from "@/components/Section09";

// ─── Лендинг: привлечение туристов из Китая ───────────────────────────────────

const TG_BOT = "https://t.me/chinahotelcheck_bot";
const SITE_URL = "https://www.wda.ad";

export const metadata: Metadata = {
  title: "Привлечение туристов из Китая — Ctrip, Trip.com и блогеры",
  description:
    "Разместим отель или туристический объект на Ctrip, Trip.com и других китайских платформах бесплатно. Ведение от $100 в месяц, продвижение и коллаборации с блогерами.",
  alternates: { canonical: "/tourism" },
  openGraph: {
    type: "website",
    title: "Китайские туристы для вашего бизнеса",
    description:
      "Бесплатный листинг на Ctrip, Trip.com и других платформах. Ведение, продвижение и работа с китайскими блогерами.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Размещение и продвижение туристического бизнеса на китайском рынке",
  provider: { "@type": "Organization", name: "WDA", url: SITE_URL },
  areaServed: "China",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Отели и туристический бизнес",
  },
  offers: [
    { "@type": "Offer", name: "Первичное размещение", price: "0", priceCurrency: "USD" },
    {
      "@type": "Offer",
      name: "Ведение аккаунта",
      price: "100",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "100",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  ],
};

// ─── Данные ──────────────────────────────────────────────────────────────────

const nav = [
  { label: "Платформы", href: "#platforms" },
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const journey = [
  { title: "Вдохновение", text: "Ролики, подборки и рекомендации блогеров" },
  { title: "Проверка", text: "Карточка объекта, отзывы, фото и условия" },
  { title: "Бронирование", text: "Понятное предложение на привычной платформе" },
];

const channels = [
  {
    char: "订",
    title: "Ctrip и Trip.com",
    text: "Карточка объекта, фото, условия, отзывы и бронирование. Это базовый уровень присутствия, с которого стоит начинать отелю или туристическому объекту.",
  },
  {
    char: "查",
    title: "Qunar, Fliggy, Mafengwo",
    text: "Поиск, сравнение и планирование маршрута. Набор площадок зависит от страны, типа бизнеса и доступного способа подключения.",
  },
  {
    char: "荐",
    title: "RedNote, Douyin, WeChat",
    text: "Вдохновение и социальное доказательство. Здесь работают подборки, короткие видео, обзоры, рекомендации KOL и блог-туры.",
  },
];

const plans = [
  {
    tag: "Старт",
    title: "Первичный листинг",
    text: "Поможем объекту появиться там, где его ищут китайские путешественники.",
    price: "$0",
    priceNote: "за работу WDA",
    features: [
      "Проверка текущего присутствия",
      "Подбор релевантных платформ",
      "Регистрация и первичное заполнение карточки",
      "Адаптация основной информации на китайский язык",
      "Сопровождение проверки документов",
    ],
    cta: "Проверить объект",
  },
  {
    tag: "Сопровождение",
    title: "Ведение аккаунта",
    text: "Поддерживаем карточку актуальной и помогаем превратить присутствие в рабочий канал продаж.",
    price: "от $100",
    priceNote: "в месяц",
    features: [
      "Обновление описаний, фотографий и предложений",
      "Китайская локализация материалов",
      "Работа с вопросами и отзывами",
      "Контроль актуальности ключевой информации",
      "Базовая аналитика и рекомендации",
    ],
    cta: "Обсудить ведение",
    toForm: true,
    featured: true,
  },
  {
    tag: "Рост",
    title: "Продвижение",
    text: "Формируем спрос и приводим внимание к объекту, маршруту или туристическому региону.",
    price: "по запросу",
    priceNote: "под задачу",
    features: [
      "Платное продвижение внутри Ctrip",
      "Спецпроекты и контентные размещения",
      "Интеграции с блогерами в Douyin и RedNote",
      "Кампании в WeChat и на других площадках",
      "Организация блог-туров под ключ",
    ],
    cta: "Получить предложение",
    toForm: true,
  },
];

const steps = [
  {
    title: "Проверяем присутствие",
    text: "Находим существующие карточки, дубли и пробелы в информации. Определяем, какие площадки подходят именно вашему объекту.",
  },
  {
    title: "Собираем материалы",
    text: "Запрашиваем данные об объекте, документы, фото, категории услуг, условия бронирования и контакты. Переводим и адаптируем ключевую информацию.",
  },
  {
    title: "Размещаем и проверяем",
    text: "Создаём или корректируем карточку, сопровождаем модерацию и проверяем, как объект отображается для пользователя.",
  },
  {
    title: "Подключаем рост",
    text: "При необходимости берём аккаунт на ведение, планируем продвижение в Ctrip, работу с блогерами и контент для китайских соцсетей.",
  },
];

const audiences = [
  { char: "住", title: "Отели, апарт-отели и гостевые дома" },
  { char: "景", title: "Достопримечательности и музеи" },
  { char: "食", title: "Рестораны и гастрономические проекты" },
  { char: "游", title: "Туроператоры, гиды и экскурсии" },
  { char: "城", title: "Города, регионы и туристические офисы" },
];

const faq = [
  {
    q: "Размещение действительно бесплатное?",
    a: "Да. WDA не берёт оплату за первичную проверку, подбор площадок и базовый листинг. Комиссии платформ за бронирования, платные опции, рекламный бюджет и возможные сторонние расходы не входят в бесплатную услугу.",
  },
  {
    q: "Чем Ctrip отличается от Trip.com?",
    a: "Ctrip ориентирован прежде всего на китайских пользователей, а Trip.com — международный бренд группы. В зависимости от объекта и рынка карточки и каналы продаж могут быть связаны, поэтому мы подбираем правильный маршрут размещения для каждого проекта.",
  },
  {
    q: "Нужно ли открывать юридическое лицо в Китае?",
    a: "Не всегда. Требования различаются по площадкам, странам и типам объектов. Сначала мы проверяем доступный способ подключения и только после этого предлагаем практическую схему.",
  },
  {
    q: "Что входит в ведение от $100 в месяц?",
    a: "Состав зависит от количества площадок и объёма задач. Базово это актуализация карточки, локализация контента, работа с вопросами и отзывами, контроль ключевой информации и рекомендации по улучшению видимости.",
  },
  {
    q: "Гарантирует ли листинг бронирования?",
    a: "Нет. Листинг создаёт необходимую инфраструктуру, но результат зависит от спроса, цены, отзывов, качества предложения и продвижения. Мы отдельно предлагаем инструменты для роста видимости и доверия.",
  },
  {
    q: "Можно ли продвигать не только отель?",
    a: "Да. Мы работаем с туристическими объектами, ресторанами, музеями, экскурсиями, туроператорами, городами и регионами. Для каждого типа бизнеса подбирается свой набор платформ и форматов.",
  },
];

// ─── UI-примитивы ────────────────────────────────────────────────────────────

const montserrat = { fontFamily: "var(--font-montserrat)", fontWeight: 800 } as const;
const manrope = { fontFamily: "var(--font-manrope)", fontWeight: 700 } as const;

function Label({ index, char, light }: { index: string; char: string; light?: boolean }) {
  const color = light ? "text-[#ffb3b3]" : "text-[#c00000]";
  return (
    <div className={`mb-6 flex items-center gap-[10px] text-[12px] uppercase tracking-[0.1em] ${color}`}>
      <span style={montserrat}>{char}</span>
      <span>{index}</span>
    </div>
  );
}

function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-[28px] leading-[1.1] tracking-[-0.025em] lg:text-[40px] ${light ? "text-white" : "text-[#2f3331]"}`}
      style={manrope}
    >
      {children}
    </h2>
  );
}

function TgButton({
  children,
  goal,
  variant = "red",
  className = "",
}: {
  children: React.ReactNode;
  goal: string;
  variant?: "red" | "dark" | "white";
  className?: string;
}) {
  const styles = {
    red: "bg-[#c00000] text-white hover:bg-[#a00000]",
    dark: "bg-[#2f3331] text-white hover:bg-black",
    white: "bg-white text-[#2f3331] hover:bg-[#e6e9e6]",
  }[variant];
  return (
    <a
      href={TG_BOT}
      target="_blank"
      rel="noopener"
      data-goal="tourism_tg_click"
      data-goal-label={goal}
      className={`inline-flex min-h-[56px] items-center justify-center px-8 py-4 text-center text-[11px] uppercase tracking-[0.14em] transition-colors ${styles} ${className}`}
      style={montserrat}
    >
      {children}
    </a>
  );
}

// ─── Страница ────────────────────────────────────────────────────────────────

export default function TourismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
        style={{ borderBottom: "1px solid rgba(175,179,176,0.2)" }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:h-[88px] lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/logo.svg" alt="WDA" width={80} height={40} priority />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-goal="nav_click"
                data-goal-label={`tourism: ${l.label}`}
                className="text-[12px] tracking-[0.04em] text-[#5c605d] transition-colors hover:text-[#2f3331]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={TG_BOT}
            target="_blank"
            rel="noopener"
            data-goal="tourism_tg_click"
            data-goal-label="header"
            className="inline-flex h-9 items-center justify-center bg-[#c00000] px-5 text-[11px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#a80000]"
            style={montserrat}
          >
            Проверить отель
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="bg-[#faf9f7]">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <p
                className="mb-6 text-[12px] uppercase tracking-[0.14em] text-[#c00000]"
                style={montserrat}
              >
                Китайский туристический рынок
              </p>
              <h1
                className="mb-6 text-[38px] leading-[1.05] tracking-[-0.035em] text-[#2f3331] sm:text-[48px] lg:text-[60px]"
                style={manrope}
              >
                Сделаем ваш бизнес заметным для туристов из Китая
              </h1>
              <p className="mb-8 max-w-[600px] text-[17px] leading-[1.7] text-[#5c605d] lg:text-[20px]">
                Разместим отель или туристический объект на Ctrip, Trip.com и других
                релевантных платформах <strong className="text-[#2f3331]">бесплатно</strong>.
                Возьмём на себя ведение, продвижение и работу с китайскими блогерами.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <TgButton goal="hero">Проверить присутствие бесплатно</TgButton>
                <a
                  href="#services"
                  className="inline-flex min-h-[56px] items-center justify-center border border-[rgba(47,51,49,0.2)] px-8 py-4 text-[11px] uppercase tracking-[0.14em] text-[#2f3331] transition-colors hover:border-[#2f3331]"
                  style={montserrat}
                >
                  Форматы работы
                </a>
              </div>
              <p className="mt-5 text-[13px] text-[#5c605d]">
                Для отелей, апарт-отелей, достопримечательностей, ресторанов,
                туроператоров и туристических регионов.
              </p>
            </div>

            {/* Путь клиента */}
            <aside className="bg-[#2f3331] p-8 text-white lg:p-10" aria-label="Путь китайского туриста">
              <p className="mb-6 text-[12px] uppercase tracking-[0.12em] text-[#ffb3b3]" style={montserrat}>
                Путь клиента
              </p>
              <h2 className="mb-8 text-[24px] leading-[1.2] lg:text-[28px]" style={manrope}>
                От вдохновения до бронирования — внутри китайской цифровой экосистемы
              </h2>
              <ol className="grid gap-3">
                {journey.map((s, i) => (
                  <li
                    key={s.title}
                    className="grid grid-cols-[40px_1fr] items-center gap-4 border border-white/15 p-4"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center bg-[#c00000] text-[14px]"
                      style={montserrat}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <strong className="block text-[15px]">{s.title}</strong>
                      <span className="block text-[13px] text-white/70">{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Ctrip", "Trip.com", "小红书", "抖音", "WeChat"].map((p) => (
                  <span key={p} className="border border-white/20 px-3 py-1.5 text-[12px] text-white/90">
                    {p}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ── Цифра рынка ─────────────────────────────────────────────────── */}
        <section className="bg-[#2f3331] text-white" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
            <span className="text-[44px] leading-none text-[#ff4d4d] lg:text-[56px]" style={manrope}>
              148,36 млн
            </span>
            <div>
              <p className="max-w-[640px] text-[15px] leading-[1.6] text-white/80">
                зарубежных туристических поездок совершили жители материкового Китая в
                2025 году — на 20,8% больше, чем годом ранее.
              </p>
              <p className="mt-2 text-[11px] text-white/50">
                Источник:{" "}
                <a
                  href="https://zwgk.mct.gov.cn/zfxxgkml/tjxx/202606/t20260602_966073.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Министерство культуры и туризма КНР
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── 01 Платформы ────────────────────────────────────────────────── */}
        <section id="platforms" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-[96px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
              <div>
                <Label index="01" char="见" />
                <H2>Одного сайта на русском или английском недостаточно</H2>
              </div>
              <p className="text-[16px] leading-[1.7] text-[#5c605d]">
                Китайские путешественники планируют поездки, сравнивают варианты и
                принимают решения в привычных для них сервисах. Поэтому видимость
                строится сразу в нескольких точках контакта.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {channels.map((c) => (
                <article
                  key={c.title}
                  className="flex flex-col bg-[#faf9f7] p-8"
                  style={{ borderTop: "2px solid #c00000" }}
                >
                  <span className="mb-8 text-[32px] leading-none text-[#c00000]" style={montserrat}>
                    {c.char}
                  </span>
                  <h3 className="mb-3 text-[20px] text-[#2f3331]" style={manrope}>
                    {c.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[#5c605d]">{c.text}</p>
                </article>
              ))}
            </div>

            <p
              className="mt-8 border-l-4 border-[#c00000] bg-[#e6e9e6] px-6 py-5 text-[18px] leading-[1.5] text-[#2f3331] lg:text-[20px]"
              style={manrope}
            >
              Задача не просто «зарегистрировать аккаунт», а связать контент, доверие
              и возможность бронирования в единую воронку.
            </p>
          </div>
        </section>

        {/* ── 02 Услуги и стоимость ───────────────────────────────────────── */}
        <section id="services" className="scroll-mt-24 bg-[#e6e9e6]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-[96px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
              <div>
                <Label index="02" char="价" />
                <H2>Начните с бесплатного размещения. Масштабируйте, когда будете готовы.</H2>
              </div>
              <p className="text-[16px] leading-[1.7] text-[#5c605d]">
                Можно ограничиться корректным присутствием на площадках или подключить
                постоянную работу с контентом, рекламой и блогерами.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.title}
                  className={`flex flex-col p-8 ${p.featured ? "bg-[#2f3331] text-white" : "bg-white text-[#2f3331]"}`}
                  style={{ boxShadow: "0px 25px 50px -12px rgba(47,51,49,0.05)" }}
                >
                  <span
                    className={`mb-6 text-[11px] uppercase tracking-[0.13em] ${p.featured ? "text-[#ffb3b3]" : "text-[#c00000]"}`}
                    style={montserrat}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mb-3 text-[24px] leading-[1.15]" style={manrope}>
                    {p.title}
                  </h3>
                  <p className={`text-[15px] leading-[1.6] ${p.featured ? "text-white/70" : "text-[#5c605d]"}`}>
                    {p.text}
                  </p>
                  <div
                    className={`my-6 border-b pb-6 ${p.featured ? "border-white/15" : "border-[rgba(175,179,176,0.4)]"}`}
                  >
                    <span className="text-[36px] leading-none" style={manrope}>
                      {p.price}
                    </span>{" "}
                    <span className={`text-[13px] ${p.featured ? "text-white/60" : "text-[#5c605d]"}`}>
                      {p.priceNote}
                    </span>
                  </div>
                  <ul className="mb-8 grid gap-3 text-[15px] leading-[1.5]">
                    {p.features.map((f) => (
                      <li key={f} className="relative pl-6">
                        <span className="absolute left-0 top-[9px] h-[6px] w-[6px] bg-[#c00000]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.toForm ? (
                    <a
                      href="#contact"
                      data-plan={p.title}
                      data-goal="tourism_form_click"
                      data-goal-label={p.title}
                      className={`mt-auto inline-flex min-h-[56px] w-full items-center justify-center px-8 py-4 text-center text-[11px] uppercase tracking-[0.14em] text-white transition-colors ${p.featured ? "bg-[#c00000] hover:bg-[#a00000]" : "bg-[#2f3331] hover:bg-black"}`}
                      style={montserrat}
                    >
                      {p.cta}
                    </a>
                  ) : (
                    <TgButton
                      goal={`plan: ${p.title}`}
                      variant={p.featured ? "red" : "dark"}
                      className="mt-auto w-full"
                    >
                      {p.cta}
                    </TgButton>
                  )}
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-[880px] text-center text-[13px] leading-[1.6] text-[#5c605d]">
              Бесплатно — работа WDA по первичному листингу. Комиссии площадок с
              бронирований, платные опции, рекламный бюджет и сторонние расходы
              оплачиваются отдельно, если применимо. Размещение зависит от типа объекта,
              страны и прохождения проверки площадки.
            </p>
          </div>
        </section>

        {/* ── 03 Как работаем ─────────────────────────────────────────────── */}
        <section id="process" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8 lg:py-[96px]">
            <div className="lg:sticky lg:top-[120px] lg:self-start">
              <Label index="03" char="序" />
              <H2>Понятный путь от аудита до первых кампаний</H2>
              <p className="mb-8 mt-6 text-[16px] leading-[1.7] text-[#5c605d]">
                Начинаем с минимального шага и не заставляем бизнес покупать продвижение
                до того, как подготовлена базовая инфраструктура.
              </p>
              <TgButton goal="process">Запустить бесплатную проверку</TgButton>
            </div>

            <ol>
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="grid grid-cols-[48px_1fr] gap-5 border-t border-[rgba(175,179,176,0.4)] py-8 last:border-b lg:grid-cols-[72px_1fr]"
                >
                  <span className="text-[24px] text-[#c00000] lg:text-[30px]" style={montserrat}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 text-[20px] text-[#2f3331] lg:text-[22px]" style={manrope}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-[#5c605d]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 04 Для кого ─────────────────────────────────────────────────── */}
        <section className="bg-[#faf9f7]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-[96px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
              <div>
                <Label index="04" char="合" />
                <H2>Инструменты для всей туристической цепочки</H2>
              </div>
              <p className="text-[16px] leading-[1.7] text-[#5c605d]">
                Работаем с проектами из России, Грузии и других стран — от одного
                бутик-отеля до целого туристического направления.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className="flex min-h-[160px] flex-col justify-between bg-white p-6"
                  style={{ borderTop: "2px solid #c00000" }}
                >
                  <span className="text-[28px] leading-none text-[#c00000]" style={montserrat}>
                    {a.char}
                  </span>
                  <strong className="text-[15px] leading-[1.35] text-[#2f3331]" style={manrope}>
                    {a.title}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20 lg:px-8 lg:py-[96px]">
            <div>
              <Label index="05" char="问" />
              <H2>Что важно знать до старта</H2>
              <p className="mt-6 text-[16px] leading-[1.7] text-[#5c605d]">
                Коротко отвечаем на вопросы о бесплатном листинге, документах и
                результате.
              </p>
            </div>

            <div className="border-t border-[rgba(175,179,176,0.4)]">
              {faq.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="group border-b border-[rgba(175,179,176,0.4)]"
                >
                  <summary
                    className="relative cursor-pointer list-none py-6 pr-12 text-[18px] leading-[1.3] text-[#2f3331] lg:text-[20px] [&::-webkit-details-marker]:hidden"
                    style={manrope}
                  >
                    {item.q}
                    <span
                      aria-hidden
                      className="absolute right-0 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center bg-[#c00000] text-[18px] leading-none text-white"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="-mt-1 mb-6 max-w-[720px] pr-12 text-[15px] leading-[1.65] text-[#5c605d]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 Заявка ───────────────────────────────────────────────────── */}
        <Section09
          sectionIndexLabel="06"
          sectionHanzi="联"
          decorativeHanzi="联"
          title="Обсудить ведение или продвижение"
          subtitle="Расскажите об объекте и задаче — мы свяжемся с вами, чтобы обсудить формат работы и стоимость."
          source="Туризм (/tourism)"
        />

        {/* ── Финальный CTA ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#2f3331] text-white">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none leading-none text-white"
            style={{ ...montserrat, fontSize: "clamp(200px, 25vw, 340px)", opacity: 0.04 }}
          >
            游
          </span>
          <div className="relative mx-auto max-w-[900px] px-6 py-20 text-center lg:py-[96px]">
            <p className="mb-6 text-[12px] uppercase tracking-[0.14em] text-[#ffb3b3]" style={montserrat}>
              Первый шаг — бесплатно
            </p>
            <h2 className="mb-6 text-[32px] leading-[1.1] tracking-[-0.025em] lg:text-[48px]" style={manrope}>
              Узнайте, видят ли ваш объект туристы из Китая
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-[16px] leading-[1.7] text-white/70">
              Запустите бесплатную проверку. Мы посмотрим, где уже представлен ваш
              бизнес, какие данные видит пользователь и с каких площадок стоит начать.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <TgButton goal="final">Проверить объект в Telegram</TgButton>
              <Link
                href="/"
                className="inline-flex min-h-[56px] items-center justify-center border border-white/30 px-8 py-4 text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-white"
                style={montserrat}
              >
                Узнать больше о WDA
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
