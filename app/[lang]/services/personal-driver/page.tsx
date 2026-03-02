import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "პირადი მძღოლი თბილისში | SaveDrive",
        en: "Personal Driver in Tbilisi | SaveDrive",
        ru: "Личный водитель в Тбилиси | SaveDrive",
    };
    return { title: titles[lang] ?? titles.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "პირადი მძღოლი — SaveDrive Georgia",
        description: "გჭირდება პირადი მძღოლი ყოველდღიურ ცხოვრებაში? SaveDrive-ი გთავაზობთ სრულ და ნახევარ განაკვეთზე პირადი მძღოლის მომსახურებას, ბიზნეს-ვიზიტებিდან ოჯახური გადაადგილების ჩათვლით.",
        benefits: [
            "სრული ან ნახევარი განაკვეთი — შენი განრიგი",
            "ერთი კონკრეტული, სანდო მძღოლი",
            "საოფისე, ბიზნეს და პირადი მომსახურება",
            "მოსაუბრე, ენიჭი მძღოლი",
            "კომფიდენციალობის გარანტია",
            "მოქნილი გრაფიკი — კვირა-კვირაზე",
        ],
        faq: [
            { q: "შეიძლება ყოველდღიური მძღოლის ყოლა?", a: "დიახ! ჩვენ გთავაზობთ ყოველდღიური, კვირეული ან თვიური სამუშაო პაკეტებს." },
            { q: "პირადი მძღოლი ჩემს მანქანით ხდება?", a: "კი, ასევე შეგიძლიათ ივარჯიშოთ ჩვენს მანქანასთან, ეს ოპერატორთან განისაზღვრება." },
            { q: "ფასი შეიძლება განსხვავებული იყოს?", a: "დიახ, ყოველდღიური, თვიური პაკეტი ან ცალკეული ვიზიტი — ყველას თავისი ტარიფი აქვს. გასარკვევად დაგვიკავშირდით." },
            { q: "მძღოლი არ ჩამოვიდა — რა ვქნა?", a: "ასეთი რამ არ მოხდება, მაგრამ პრობლემის შემთხვევაში — ოპერატორი მაშინვე გეხმარება." },
        ],
    },
    en: {
        h1: "Personal Driver Service — SaveDrive Georgia",
        description: "Need a personal driver for your daily life? SaveDrive offers full-time or part-time personal driver services, from business meetings to family errands.",
        benefits: [
            "Full-time or part-time — your schedule",
            "One dedicated, trusted driver",
            "Office, business, and personal trips",
            "Professional, discreet service",
            "Confidentiality guaranteed",
            "Flexible scheduling — week by week",
        ],
        faq: [
            { q: "Can I have a driver every day?", a: "Yes! We offer daily, weekly, or monthly driver packages to suit your needs." },
            { q: "Will the driver use my car?", a: "Yes, or we can provide a vehicle — this is arranged with the operator." },
            { q: "Is pricing flexible?", a: "Yes — daily, monthly, or per-visit rates are available. Contact us to discuss." },
            { q: "What if there's a problem?", a: "Our support team is always on standby to resolve any issues immediately." },
        ],
    },
    ru: {
        h1: "Личный водитель — SaveDrive Грузия",
        description: "Нужен личный водитель для повседневной жизни? SaveDrive предоставляет услуги личного водителя на полную или частичную занятость — от деловых встреч до семейных поездок.",
        benefits: [
            "Полная или частичная занятость — ваш график",
            "Один постоянный, проверенный водитель",
            "Офисные, деловые и личные поездки",
            "Профессиональное, деликатное обслуживание",
            "Гарантия конфиденциальности",
            "Гибкое расписание — понедельно",
        ],
        faq: [
            { q: "Могу ли я пользоваться водителем каждый день?", a: "Да! Мы предлагаем ежедневные, еженедельные и ежемесячные пакеты." },
            { q: "Водитель едет на моей машине?", a: "Да, или мы можем предоставить автомобиль — согласовывается с оператором." },
            { q: "Гибкое ли ценообразование?", a: "Да — доступны суточные, ежемесячные и разовые тарифы. Свяжитесь с нами." },
            { q: "Что делать в случае проблемы?", a: "Наша команда поддержки всегда готова решить любую проблему немедленно." },
        ],
    },
};

export default async function PersonalDriverPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "personal-driver", icon: "🧑‍✈️", ...c }} />;
}
