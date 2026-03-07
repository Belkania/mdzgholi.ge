import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "ფხიზელი მძღოლი საქართველოში | SaveDrive",
        en: "Sober Driver in Georgia | SaveDrive",
        ru: "Трезвый водитель в Грузии | SaveDrive",
    };
    const descs: Record<string, string> = {
        ka: "SaveDrive-ის ფხიზელი მძღოლი: დალიე უზრუნველად, ჩვენ შენი მანქანით მიგიყვანთ სახლამდე. 24/7. +995 568 83 47 07",
        en: "SaveDrive sober driver service: enjoy your evening, we drive you home in your own car. 24/7. +995 568 83 47 07",
        ru: "Трезвый водитель SaveDrive: отдыхайте, мы довезём вас домой на вашей машине. 24/7. +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "ფხიზელი მძღოლი საქართველოში — SaveDrive",
        description: "გაინაბეთ სიამოვნებით — SaveDrive-ის ფხიზელი მძღოლი ჩამოდის სადაც ხართ და შენი მანქანით გიყვანს სახლამდე. უსაფრთხო, პროფესიონალური, 24 საათი.",
        benefits: [
            "შენი მანქანა დარჩება სახლთან — ორივე მოხვდება სახლში",
            "გამოცდილი, სერტიფიცირებული მძღოლები",
            "24/7 ხელმისაწვდომობა — ყოველდღე, ღამე-ღამობით",
            "სწრაფი გამოძახება — მძღოლი 15-20 წუთში ჩამოდის",
            "გამჭვირვალე ფასი — ფარული დანახარჯის გარეშე",
            "ოპერატორი ქართულად, ინგლისურად და რუსულად",
        ],
        faq: [
            { q: "როგორ შეიძლება ფხიზელი მძღოლის დაჯავშნა?", a: "უბრალოდ დაგვიკავშირდით — +995 568 83 47 07. ოპერატორი გეხმაურება 2-3 წუთში და გამოგიგზავნით მძღოლს." },
            { q: "მძღოლი ჩამოდება ჩემს მანქანაში?", a: "დიახ! ჩვენი მძღოლი ისარგებლებს შენი მანქანით და სახლამდე მიგიყვანს. მძღოლი კი ჩვენი კოლეგის მანქანით დაბრუნდება." },
            { q: "ხელმისაწვდომია 3 საათზე?", a: "დიახ, ჩვენ ვმუშაობთ 24 საათი, 7 დღე კვირაში, მათ შორის შაბათ-კვირასა და დღესასწაულებში." },
            { q: "სად ვმოქმედებ?", a: "ძირითადად თბილისსა და მიმდებარე ტერიტორიებზე. გარეუბნებისთვის გთხოვთ წინასწარ დაგვიკავშირდეთ." },
        ],
    },
    en: {
        h1: "Sober Driver Service in Georgia — SaveDrive",
        description: "Enjoy your night out — SaveDrive's sober driver comes to you and drives you home safely in your own car. Professional, fast, available 24/7.",
        benefits: [
            "Your car comes home with you — no car left behind",
            "Experienced, certified drivers",
            "24/7 availability — every day, including nights and holidays",
            "Fast response — driver arrives within 15-20 minutes",
            "Transparent pricing — no hidden fees",
            "Support in Georgian, English, and Russian",
        ],
        faq: [
            { q: "How do I book a sober driver?", a: "Simply call us at +995 568 83 47 07. Our operator will respond within 2-3 minutes and dispatch a driver to you." },
            { q: "Does the driver use my car?", a: "Yes! Our driver uses your vehicle to take you home safely. The driver then returns separately in a colleague's car." },
            { q: "Are you available at 3am?", a: "Yes, we operate 24 hours a day, 7 days a week, including weekends and public holidays." },
            { q: "Where do you operate?", a: "Primarily in Tbilisi and surrounding areas. For suburbs and long distances, please contact us in advance." },
        ],
    },
    ru: {
        h1: "Трезвый водитель в Грузии — SaveDrive",
        description: "Отдыхайте с удовольствием — трезвый водитель SaveDrive приедет к вам и доставит домой на вашей машине. Профессионально, быстро, 24/7.",
        benefits: [
            "Ваша машина едет домой вместе с вами",
            "Опытные, сертифицированные водители",
            "Доступны 24/7 — каждый день, в любое время",
            "Быстрый приезд — в среднем 15-20 минут",
            "Прозрачные цены — без скрытых платежей",
            "Поддержка на грузинском, английском и русском языках",
        ],
        faq: [
            { q: "Как заказать трезвого водителя?", a: "Просто позвоните нам: +995 568 83 47 07. Оператор ответит в течение 2-3 минут и отправит водителя." },
            { q: "Водитель едет на моей машине?", a: "Да! Наш водитель использует вашу машину, чтобы доставить вас домой. Затем он возвращается отдельно на машине коллеги." },
            { q: "Работаете ли вы в 3 ночи?", a: "Да, мы работаем 24 часа в сутки, 7 дней в неделю, включая выходные и праздники." },
            { q: "В каких районах работаете?", a: "В основном в Тбилиси и окрестностях. Для пригородов свяжитесь с нами заранее." },
        ],
    },
};

export default async function SoberDriverPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "sober-driver", icon: "🍷", ...c }} />;
}
