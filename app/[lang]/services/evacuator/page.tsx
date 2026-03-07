import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "ევაკუატორი თბილისში | mdzgholi.ge",
        en: "Tow Truck / Evacuator in Tbilisi | mdzgholi.ge",
        ru: "Эвакуатор в Тбилиси | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge ევაკუატორი — მანქანა გაფუჭდა? სწრაფი და უსაფრთხო ევაკუაცია 24/7. დაგვირეკეთ: +995 568 83 47 07",
        en: "mdzgholi.ge tow truck service — car broke down? Fast and safe evacuation 24/7. Call us: +995 568 83 47 07",
        ru: "Эвакуатор mdzgholi.ge — машина сломалась? Быстрая и безопасная эвакуация 24/7. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "ევაკუატორი თბილისში",
        description: "მანქანა გაფუჭდა ან ავარიაში მოხვდა? mdzgholi.ge-ის ევაკუატორი ჩამოვა სწრაფად და უსაფრთხოდ გადაგიყვანს შენს ავტომობილს სასურველ ადგილას. 24/7 ხელმისაწვდომი.",
        benefits: [
            "სწრაფი ჩამოსვლა — ქალაქში და გარეუბანში",
            "უსაფრთხო ტრანსპორტირება — ნებისმიერი ტიპის მანქანა",
            "24/7 ხელმისაწვდომობა — ყოველდღე, ღამე-ღამობით",
            "ავარია, გაფუჭება, საბურავი — ყველა სიტუაციაში",
            "გამჭვირვალე ფასი — ფარული დანახარჯის გარეშე",
            "ოპერატორი ქართულად, ინგლისურად და რუსულად",
        ],
        faq: [
            { q: "რამდენ ხანში ჩამოვა ევაკუატორი?", a: "ქალაქში საშუალოდ 15-20 წუთში, გარეუბანში ოდნავ მეტი დრო დასჭირდება." },
            { q: "ნებისმიერი ტიპის მანქანას ევაკუაცია შეიძლება?", a: "დიახ, ჩვენ ვემსახურებით ყველა ტიპის ავტომობილს — მსუბუქი, ჯიპი, მინივენი." },
            { q: "ფასი ფიქსირებულია?", a: "ფასი დამოკიდებულია მანძილზე. ოპერატორი წინასწარ გეტყვით ზუსტ ღირებულებას." },
            { q: "ღამის საათებშიც მუშაობთ?", a: "დიახ, ჩვენ ვმუშაობთ 24 საათი, 7 დღე კვირაში." },
        ],
    },
    en: {
        h1: "Tow Truck / Evacuator in Tbilisi",
        description: "Car broke down or had an accident? mdzgholi.ge's tow truck arrives quickly and safely transports your vehicle to any location. Available 24/7.",
        benefits: [
            "Fast arrival — in the city and suburbs",
            "Safe transportation — any vehicle type",
            "24/7 availability — every day, including nights",
            "Accident, breakdown, flat tire — we cover all situations",
            "Transparent pricing — no hidden fees",
            "Support in Georgian, English, and Russian",
        ],
        faq: [
            { q: "How quickly does the tow truck arrive?", a: "On average 15-20 minutes in the city, slightly longer for suburban areas." },
            { q: "Can you tow any type of vehicle?", a: "Yes, we service all vehicle types — sedans, SUVs, minivans." },
            { q: "Is the price fixed?", a: "Pricing depends on distance. Our operator will quote you the exact cost upfront." },
            { q: "Do you operate at night?", a: "Yes, we operate 24 hours a day, 7 days a week." },
        ],
    },
    ru: {
        h1: "Эвакуатор в Тбилиси",
        description: "Машина сломалась или попала в аварию? Эвакуатор mdzgholi.ge приедет быстро и безопасно доставит ваш автомобиль в нужное место. Работаем 24/7.",
        benefits: [
            "Быстрый приезд — в городе и пригороде",
            "Безопасная транспортировка — любой тип автомобиля",
            "Доступны 24/7 — каждый день, включая ночь",
            "Авария, поломка, прокол — покрываем все ситуации",
            "Прозрачные цены — без скрытых платежей",
            "Поддержка на грузинском, английском и русском языках",
        ],
        faq: [
            { q: "Как быстро приедет эвакуатор?", a: "В среднем за 15-20 минут в городе, чуть дольше за городом." },
            { q: "Можете эвакуировать любой автомобиль?", a: "Да, мы обслуживаем все типы автомобилей — седаны, внедорожники, минивэны." },
            { q: "Цена фиксированная?", a: "Цена зависит от расстояния. Оператор назовёт точную стоимость заранее." },
            { q: "Работаете ли ночью?", a: "Да, мы работаем 24 часа в сутки, 7 дней в неделю." },
        ],
    },
};

export default async function EvacuatorPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "evacuator", icon: "🚛", ...c }} />;
}
