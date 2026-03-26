import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "აკუმულატორი და საბურავის შეცვლა | mdzgholi.ge",
        en: "Battery Jump Start & Tire Change | mdzgholi.ge",
        ru: "Аккумулятор и замена шин | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge აკუმულატორი და საბურავის შეცვლა — სპეციალისტი ადგილზე მოვა. 24/7. დაგვირეკეთ: +995 568 83 47 07",
        en: "mdzgholi.ge battery and tire change — specialist comes to your location. 24/7. Call: +995 568 83 47 07",
        ru: "Аккумулятор и замена шин mdzgholi.ge — специалист приедет на место. 24/7. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "აკუმულატორი / საბურავის შეცვლა",
        description: "თქვენი ავტომობილის აკუმულატორი მოულოდნელად დაჯდა ან საბურავი დაზიანდა? mdzgholi.ge-ის სპეციალიზებული ჯგუფი მზად არის დაგეხმაროთ ადგილზევე. ჩვენი სერვისი გამორიცხავს ევაკუატორის გამოძახების საჭიროებას — ჩვენი სპეციალისტი მოვა თქვენთან, სადაც არ უნდა იმყოფებოდეთ თბილისსა თუ მის შემოგარენში, და პრობლემას სწრაფად მოაგვარებს. ჩვენ ვფლობთ ყველა საჭირო თანამედროვე ხელსაწყოს აკუმულატორის დასამუხტად (ე.წ. „პერემიჩკა“) ან საბურავის შესაკეთებლად/შესაცვლელად. დაზოგეთ დრო და ფინანსები, ენდეთ mdzgholi.ge-ს პროფესიონალებს, რომლებიც 24/7 რეჟიმში ზრუნავენ თქვენს შეუფერხებელ გადაადგილებაზე.",
        benefits: [
            "დახმარება ადგილზე — არ არის საჭირო ავტომობილის ევაკუაცია სერვის-ცენტრში",
            "აკუმულატორის სწრაფი დაქოქვა — პროფესიონალური აპარატურით („ბუსტერით“)",
            "საბურავის შეკეთება ან შეცვლა — ნებისმიერ ლოკაციაზე 24/7",
            "სპეციალისტის სწრაფი მოსვლა — საშუალოდ 15-20 წუთი გამოძახებიდან",
            "აკუმულატორის შემოწმება და დიაგნოსტიკა — ადგილზევე დადგენა ვარგისიანობის",
            "გამჭვირვალე და ხელმისაწვდომი ფასები — წინასწარი შეთანხმებით",
            "პროფესიონალი ოსტატები — მრავალწლიანი გამოცდილება გზებზე დახმარებაში",
            "მომსახურება ნებისმიერ ამინდში — ჩვენ არ ვუშინდებით სირთულეებს",
        ],
        faq: [
            { q: "შეგიძლიათ თუ არა აკუმულატორის შეცვლა თუ დამუხტვა არ შველის?", a: "დიახ, საჭიროების შემთხვევაში ჩვენ შეგვიძლია მოვიტანოთ ახალი აკუმულატორი და დაგიმონტაჟოთ ის ადგილზევე." },
            { q: "მაქვს დაზიანებული საბურავი, მაგრამ სათადარიგო არ მაქვს — რას მირჩევთ?", a: "ჩვენს სპეციალისტებს აქვთ საბურავის ადგილზე შეკეთების საშუალება (ე.წ. „ჟგუტი“), რაც საშუალებას მოგცემთ გააგრძელოთ გზა უსაფრთხოდ." },
            { q: "რა ტიპის ავტომობილებს ემსახურებით?", a: "ჩვენი სერვისი ვრცელდება ყველა ტიპის მსუბუქ ავტომობილზე, ჯიპებსა და მინივენებზე, მიუხედავად მათი ძრავის მოცულობისა." },
            { q: "ფასი ფიქსირებულია თუ დამოკიდებულია ლოკაციაზე?", a: "ფასი ძირითადად დამოკიდებულია ლოკაციასა და შესრულებულ სამუშაოზე. ზუსტ ღირებულებას ოპერატორი გეტყვით გამოძახებისას." },
            { q: "მუშაობთ თუ არა ღამის საათებში?", a: "დიახ, mdzgholi.ge-ის ტექნიკური ჯგუფი მორიგეობს 24 საათის განმავლობაში, კვირაში 7 დღე." },
            { q: "შესაძლებელია თუ არა აკუმულატორის ყიდვა თქვენთან?", a: "დიახ, ჩვენ ვთანამშრომლობთ წამყვან ბრენდებთან და შეგვიძლია შემოგთავაზოთ სხვადასხვა სიმძლავრის აკუმულატორები გარანტიით." },
        ],
    },
    en: {
        h1: "Battery Jump Start & Tire Change",
        description: "Did your vehicle's battery suddenly die or did you suffer a flat tire? mdzgholi.ge's specialized team is ready to help you on the spot. Our service eliminates the need for calling a tow truck — our specialist will come to you wherever you are in Tbilisi or its surroundings and resolve the problem quickly. We possess all necessary modern tools for jump-starting a battery or repairing/changing a tire. Save time and money; trust the professionals at mdzgholi.ge, who work 24/7 to ensure your uninterrupted travel.",
        benefits: [
            "On-site assistance — no need to tow the vehicle to a service center",
            "Fast battery jump start — using professional boosting equipment",
            "Tire repair or change — available at any location 24/7",
            "Fast specialist arrival — on average 15-20 minutes from the call",
            "Battery check and diagnostics — on-site assessment of battery health",
            "Transparent and affordable pricing — with upfront agreement",
            "Professional technicians — years of experience in roadside assistance",
            "Service in any weather condition — we handle challenges regardless of environmental factors",
        ],
        faq: [
            { q: "Can you replace the battery if a jump start doesn't work?", a: "Yes, if necessary, we can bring a new battery to your location and install it on the spot." },
            { q: "I have a damaged tire but no spare — what do you suggest?", a: "Our specialists can repair tires on-site using specialized plugs, allowing you to continue your journey safely." },
            { q: "What types of vehicles do you service?", a: "Our service covers all types of passenger cars, SUVs, and minivans, regardless of their engine size." },
            { q: "Is the price fixed or location-dependent?", a: "The price primarily depends on the location and the specific work performed. Our operator will provide the exact cost during the call." },
            { q: "Do you work during night hours?", a: "Yes, mdzgholi.ge's technical group is on duty 24 hours a day, 7 days a week." },
            { q: "Is it possible to purchase a battery from you?", a: "Yes, we partner with leading brands and can offer various battery capacities with an included warranty." },
        ],
    },
    ru: {
        h1: "Аккумулятор / Замена шин",
        description: "Ваш аккумулятор внезапно сел или у вас спустило колесо? Специализированная группа mdzgholi.ge готова помочь вам прямо на месте. Наш сервис исключает необходимость вызова эвакуатора — специалист приедет к вам, где бы вы ни находились в Тбилиси или окрестностях, и быстро решит проблему. У нас есть все необходимые современные инструменты для зарядки аккумулятора (т.н. «перемычка») или ремонта/замены шины. Сэкономьте время и деньги, доверьтесь профессионалам mdzgholi.ge, которые работают круглосуточно для вашего беспрепятственного передвижения.",
        benefits: [
            "Помощь на месте — не нужно эвакуировать машину в сервис-центр",
            "Быстрый запуск аккумулятора — с использованием профессионального бустера",
            "Ремонт или замена шин — на любой локации 24/7",
            "Быстрый приезд специалиста — в среднем 15-20 минут после вызова",
            "Проверка и диагностика аккумулятора — определение годности на месте",
            "Прозрачные и доступные цены — по предварительному согласованию",
            "Профессиональные мастера — многолетний опыт помощи на дорогах",
            "Обслуживание в любую погоду — мы не боимся трудностей",
        ],
        faq: [
            { q: "Можете ли вы заменить аккумулятор, если зарядка не помогает?", a: "Да, при необходимости мы можем привезти новый аккумулятор и установить его прямо на месте." },
            { q: "У меня повреждена шина, но нет запаски — что посоветуете?", a: "Наши специалисты могут отремонтировать шину на месте (т.н. «жгут»), что позволит вам безопасно продолжить путь." },
            { q: "Какие типы автомобилей вы обслуживаете?", a: "Наш сервис распространяется на все типы легковых автомобилей, внедорожников и минивэнов, независимо от объема двигателя." },
            { q: "Цена фиксированная или зависит от локации?", a: "Цена в основном зависит от локации и выполненной работы. Точную стоимость оператор сообщит при вызове." },
            { q: "Работаете ли вы в ночное время?", a: "Да, техническая группа mdzgholi.ge дежурит 24 часа в сутки, 7 дней в неделю." },
            { q: "Можно ли купить аккумулятор у вас?", a: "Да, мы сотрудничаем с ведущими брендами и можем предложить аккумуляторы разной мощности с гарантией." },
        ],
    },
};

export default async function BatteryTirePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "battery-tire", icon: "🔋", ...c }} />;
}
