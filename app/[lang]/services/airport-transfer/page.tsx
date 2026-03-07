import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "აეროპორტის ტრანსფერი / საქალაქთაშორისო | SaveDrive",
        en: "Airport Transfer & Intercity | SaveDrive",
        ru: "Трансфер в аэропорт / Междугородний | SaveDrive",
    };
    const descs: Record<string, string> = {
        ka: "SaveDrive აეროპორტის ტრანსფერი და საქალაქთაშორისო მარშრუტები — ბათუმი, ქუთაისი. პუნქტუალური, კომფორტული. 24/7. დაგვირეკეთ: +995 568 83 47 07",
        en: "SaveDrive airport transfer & intercity routes — Batumi, Kutaisi. Punctual, comfortable. 24/7. Call: +995 568 83 47 07",
        ru: "Трансфер в аэропорт и междугородний SaveDrive — Батуми, Кутаиси. Пунктуальный, комфортный. 24/7. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "აეროპორტის ტრანსფერი / საქალაქთაშორისო — SaveDrive",
        description: "პუნქტუალური და კომფორტული ტრანსფერი თბილისის საერთაშორისო აეროპორტამდე და საქალაქთაშორისო მარშრუტებზე. სტრესის გარეშე მგზავრობა ნებისმიერი მიმართულებით.",
        benefits: [
            "დროული ჩამოსვლა — ფრენის განრიგზე დაყრდნობით",
            "ფრენის ნომრით ლოდინი — გვიანი ჩამოსვლა დაუბრკოლებლად",
            "საქალაქთაშორისო მარშრუტები — ბათუმი, ქუთაისი, სხვა",
            "კომფორტული, გაწმენდილი მანქანები",
            "24/7 ხელმისაწვდომობა",
            "ფიქსირებული ფასი — გზაში სიურპრიზის გარეშე",
        ],
        faq: [
            { q: "ვინ შემხვდება აეროპორტში?", a: "მძღოლი გელოდება სახელის ბარათით — ადვილი ამოცნობა." },
            { q: "ფრენა დაგვიანდა — რა მოხდება?", a: "ჩვენ ვადევნებთ ფრენას — მძღოლი ადაპტაციურად ელოდება." },
            { q: "საქალაქთაშორისო მარშრუტები ხელმისაწვდომია?", a: "დიახ, ჩვენ ვემსახურებით ბათუმის, ქუთაისის და სხვა მიმართულებებს." },
            { q: "ფასი ფიქსირებულია?", a: "დიახ, ფასი წინასწარ შეთანხმებულია და გზაში არ იცვლება." },
        ],
    },
    en: {
        h1: "Airport Transfer & Intercity — SaveDrive",
        description: "Punctual and comfortable transfers to Tbilisi International Airport and intercity routes. Travel stress-free in any direction.",
        benefits: [
            "On-time pickup — based on your flight schedule",
            "Flight number tracking — no problem if flight is late",
            "Intercity routes — Batumi, Kutaisi, and more",
            "Comfortable, clean vehicles",
            "24/7 availability",
            "Fixed price — no surprises en route",
        ],
        faq: [
            { q: "Who will meet me at the airport?", a: "Your driver will be waiting with a name sign — easy to find." },
            { q: "My flight is delayed — what happens?", a: "We track your flight — your driver will adjust automatically." },
            { q: "Do you offer intercity routes?", a: "Yes, we serve Batumi, Kutaisi, and other destinations across Georgia." },
            { q: "Is the price fixed?", a: "Yes, the price is agreed upon in advance and does not change during the trip." },
        ],
    },
    ru: {
        h1: "Трансфер в аэропорт / Междугородний — SaveDrive",
        description: "Пунктуальный и комфортный трансфер до аэропорта Тбилиси и по междугородним маршрутам. Путешествуйте без стресса в любом направлении.",
        benefits: [
            "Своевременный выезд — по расписанию рейса",
            "Отслеживание рейса — задержка не проблема",
            "Междугородние маршруты — Батуми, Кутаиси и др.",
            "Комфортные, чистые автомобили",
            "Доступность 24/7",
            "Фиксированная цена — без сюрпризов",
        ],
        faq: [
            { q: "Кто встретит меня в аэропорту?", a: "Водитель будет ждать с табличкой с вашим именем." },
            { q: "Мой рейс задержан — что произойдёт?", a: "Мы отслеживаем рейс — водитель скорректирует время встречи." },
            { q: "Есть ли междугородние маршруты?", a: "Да, мы обслуживаем Батуми, Кутаиси и другие направления по Грузии." },
            { q: "Цена фиксированная?", a: "Да, цена согласовывается заранее и не меняется в пути." },
        ],
    },
};

export default async function AirportTransferPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "airport-transfer", icon: "✈️", ...c }} />;
}
