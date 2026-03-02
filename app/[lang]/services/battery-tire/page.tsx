import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "აკუმულატორი და საბურავის შეცვლა | SaveDrive",
        en: "Battery Jump Start & Tire Change | SaveDrive",
        ru: "Аккумулятор и замена шин | SaveDrive",
    };
    const descs: Record<string, string> = {
        ka: "SaveDrive აკუმულატორი და საბურავის შეცვლა — სპეციალისტი ადგილზე მოვა. 24/7. დაგვირეკეთ: +995 511 55 36 60",
        en: "SaveDrive battery and tire change — specialist comes to your location. 24/7. Call: +995 511 55 36 60",
        ru: "Аккумулятор и замена шин SaveDrive — специалист приедет на место. 24/7. Звоните: +995 511 55 36 60",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "აკუმულატორი / საბურავის შეცვლა — SaveDrive",
        description: "აკუმულატორი დაჯდა ან საბურავი გაგიფუჭდა? SaveDrive-ის სპეციალისტი ადგილზე მოვა და პრობლემას სწრაფად მოაგვარებს. არ არის საჭირო ევაკუატორის ლოდინი — ჩვენ ადგილზე ვწყვეტთ.",
        benefits: [
            "ადგილზე მოსვლა — არ არის საჭირო ევაკუაცია",
            "აკუმულატორის გაცოცხლება ან შეცვლა",
            "საბურავის შეცვლა და შეკეთება ადგილზე",
            "24/7 ხელმისაწვდომობა — ყოველდღე",
            "პროფესიონალური ხელსაწყოები და გამოცდილი სპეციალისტები",
            "გამჭვირვალე ფასი — წინასწარი შეთანხმება",
        ],
        faq: [
            { q: "აკუმულატორის გაცოცხლება შეიძლება თუ მხოლოდ შეცვლა?", a: "ორივე ვარიანტი ხელმისაწვდომია. სპეციალისტი ადგილზე გადაწყვეტს რა სჭირდება." },
            { q: "სათადარიგო საბურავი არ მაქვს — რა ვქნა?", a: "ჩვენ შეგვიძლია მოვიტანოთ საბურავი ან ადგილზე შევაკეთოთ არსებული." },
            { q: "რა ტიპის აკუმულატორებთან მუშაობთ?", a: "ჩვენ ვემსახურებით ყველა ტიპის ავტომობილის აკუმულატორს — მსუბუქი, ჯიპი, მინივენი." },
            { q: "სერვისი ხელმისაწვდომია გარეუბანშიც?", a: "დიახ, ჩვენ ვემსახურებით თბილისსა და მიმდებარე ტერიტორიებს 24/7." },
        ],
    },
    en: {
        h1: "Battery Jump Start & Tire Change — SaveDrive",
        description: "Dead battery or flat tire? SaveDrive's specialist comes to your location and fixes the problem quickly. No need to wait for a tow truck — we solve it on the spot.",
        benefits: [
            "On-site service — no need for evacuation",
            "Battery jump start or replacement",
            "Tire change and repair on location",
            "24/7 availability — every day",
            "Professional tools and experienced specialists",
            "Transparent pricing — agreed upfront",
        ],
        faq: [
            { q: "Can you jump start or only replace the battery?", a: "Both options are available. Our specialist will assess the situation on site." },
            { q: "I don't have a spare tire — what can I do?", a: "We can bring a tire or repair the existing one on location." },
            { q: "What battery types do you work with?", a: "We service all passenger vehicle batteries — sedans, SUVs, minivans, and more." },
            { q: "Is the service available in suburbs?", a: "Yes, we cover Tbilisi and surrounding areas 24/7." },
        ],
    },
    ru: {
        h1: "Аккумулятор / Замена шин — SaveDrive",
        description: "Сел аккумулятор или пробито колесо? Специалист SaveDrive приедет на место и быстро решит проблему. Не нужно ждать эвакуатор — решаем на месте.",
        benefits: [
            "Выезд на место — эвакуация не нужна",
            "Подзарядка или замена аккумулятора",
            "Замена и ремонт шин на месте",
            "Доступны 24/7 — каждый день",
            "Профессиональные инструменты и опытные специалисты",
            "Прозрачные цены — согласовываем заранее",
        ],
        faq: [
            { q: "Можете подзарядить или только заменить аккумулятор?", a: "Оба варианта доступны. Специалист оценит ситуацию на месте." },
            { q: "У меня нет запасного колеса — что делать?", a: "Мы можем привезти шину или отремонтировать существующую на месте." },
            { q: "С какими типами аккумуляторов работаете?", a: "Обслуживаем все типы автомобильных аккумуляторов — легковые, внедорожники, минивэны." },
            { q: "Доступен ли сервис в пригороде?", a: "Да, мы обслуживаем Тбилиси и окрестности 24/7." },
        ],
    },
};

export default async function BatteryTirePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "battery-tire", icon: "🔋", ...c }} />;
}
