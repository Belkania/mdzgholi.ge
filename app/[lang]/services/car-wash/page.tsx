import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "მანქანის რეცხვა თბილისში | SaveDrive",
        en: "Car Wash Service in Tbilisi | SaveDrive",
        ru: "Мойка машин в Тбилиси | SaveDrive",
    };
    const descs: Record<string, string> = {
        ka: "SaveDrive მანქანის რეცხვა — პროფესიონალური შიდა და გარე რეცხვა, მობილური სერვისი. დაგვირეკეთ: +995 511 55 36 60",
        en: "SaveDrive car wash — professional interior and exterior wash, mobile service. Call us: +995 511 55 36 60",
        ru: "Мойка машин SaveDrive — профессиональная мойка внутри и снаружи, мобильный сервис. Звоните: +995 511 55 36 60",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის რეცხვა — SaveDrive თბილისი",
        description: "პროფესიონალური მანქანის რეცხვა — შიგნით და გარეთ. ჩვენი გუნდი ჩამოვა შენს მისამართზე და მანქანას სრულყოფილად გარეცხავს. კომფორტი და ხარისხი ერთ ზარში.",
        benefits: [
            "მობილური სერვისი — ჩვენ ჩამოვალთ შენს მისამართზე",
            "შიდა და გარე რეცხვა — სრული პაკეტი",
            "პროფესიონალური საშუალებები და ხელსაწყოები",
            "სწრაფი და ხარისხიანი სერვისი",
            "ხელმისაწვდომი ფასები — გამჭვირვალე ტარიფები",
            "რეგულარული კლიენტების ფასდაკლება",
        ],
        faq: [
            { q: "ჩამოხვალთ ჩემს მისამართზე?", a: "დიახ! ჩვენი მობილური გუნდი ჩამოვა ნებისმიერ მისამართზე თბილისში." },
            { q: "რა სახის რეცხვას გთავაზობთ?", a: "გარე რეცხვა, შიდა წმენდა, პოლირება, ქიმწმენდა — სრული სპექტრი." },
            { q: "რამდენ ხანს გრძელდება რეცხვა?", a: "გარე რეცხვა 30-40 წუთი, სრული პაკეტი 1-2 საათი." },
            { q: "ფასი რამდენია?", a: "ფასი დამოკიდებულია მანქანის ტიპსა და შერჩეულ პაკეტზე. დაგვიკავშირდით დეტალებისთვის." },
        ],
    },
    en: {
        h1: "Car Wash Service — SaveDrive Tbilisi",
        description: "Professional car wash — inside and out. Our team comes to your location and provides a thorough clean. Comfort and quality in one call.",
        benefits: [
            "Mobile service — we come to your address",
            "Interior and exterior wash — full package",
            "Professional-grade products and equipment",
            "Fast and high-quality service",
            "Affordable prices — transparent rates",
            "Regular customer discounts available",
        ],
        faq: [
            { q: "Will you come to my location?", a: "Yes! Our mobile team will come to any address in Tbilisi." },
            { q: "What types of wash do you offer?", a: "Exterior wash, interior cleaning, polishing, deep cleaning — full spectrum." },
            { q: "How long does a wash take?", a: "Exterior wash 30-40 minutes, full package 1-2 hours." },
            { q: "How much does it cost?", a: "Pricing depends on vehicle type and selected package. Contact us for details." },
        ],
    },
    ru: {
        h1: "Мойка машин — SaveDrive Тбилиси",
        description: "Профессиональная мойка автомобиля — внутри и снаружи. Наша команда приедет к вам и тщательно помоет автомобиль. Комфорт и качество за один звонок.",
        benefits: [
            "Мобильный сервис — приезжаем по вашему адресу",
            "Мойка салона и кузова — полный пакет",
            "Профессиональные средства и оборудование",
            "Быстрый и качественный сервис",
            "Доступные цены — прозрачные тарифы",
            "Скидки для постоянных клиентов",
        ],
        faq: [
            { q: "Приедете ли вы по моему адресу?", a: "Да! Наша мобильная команда приедет по любому адресу в Тбилиси." },
            { q: "Какие виды мойки предлагаете?", a: "Наружная мойка, чистка салона, полировка, химчистка — полный спектр." },
            { q: "Сколько длится мойка?", a: "Наружная мойка 30-40 минут, полный пакет 1-2 часа." },
            { q: "Сколько это стоит?", a: "Цена зависит от типа автомобиля и выбранного пакета. Свяжитесь с нами." },
        ],
    },
};

export default async function CarWashPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "car-wash", icon: "🚿", ...c }} />;
}
