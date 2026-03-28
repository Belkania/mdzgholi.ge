import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "მანქანის რეცხვა თბილისში | mdzgholi.ge",
        en: "Car Wash Service in Tbilisi | mdzgholi.ge",
        ru: "Мойка машин в Тбилиси | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge მანქანის რეცხვის სერვისი თბილისში — მოვდივართ თქვენს ლოკაციაზე, წავიყვანთ ავტომობილს, ვრეცხავთ შიგნიდან და გარედან იდეალურად და მივიყვანთ თქვენს მიერ მითითებულ მისამართზე. დაგვირეკეთ: +995 568 83 47 07",
        en: "mdzgholi.ge car wash service in Tbilisi — we pick up your car, wash it inside and out to perfection, and deliver it to any location you specify. Call us: +995 568 83 47 07",
        ru: "Мойка машин mdzgholi.ge в Тбилиси — забираем автомобиль, моем внутри и снаружи до идеала и доставляем по указанному вами адресу. Звоните: +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/car-wash";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: "მანქანის რეცხვა თბილისი, car wash Tbilisi home delivery, მისამართზე რეცხვა, mdzgholi.ge",
        alternates: {
            canonical,
            languages: {
                ka: `${base}${path}`,
                en: `${base}/en${path}`,
                ru: `${base}/ru${path}`,
                "x-default": `${base}${path}`,
            },
        },
        openGraph: {
            title: titles[lang] ?? titles.ka,
            description: descs[lang] ?? descs.ka,
            url: canonical,
            siteName: "mdzgholi.ge",
            type: "website",
        },
    };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის რეცხვა",
        description: "mdzgholi.ge წარმოგიდგენთ მანქანის რეცხვის ყველაზე კომფორტულ სერვისს თბილისში. ჩვენი მუშაობის პრინციპი მარტივია: თქვენ გვირეკავთ, ჩვენ მოვდივართ თქვენს მისამართზე, ვიბარებთ ავტომობილს და მიგვყავს ჩვენს სპეციალიზებულ სარეცხ პუნქტში. იქ თქვენს მანქანას ჩაუტარდება სრული შიდა და გარე რეცხვა პრემიუმ ხარისხის ქიმიური საშუალებებით, ხოლო პროცესის დასრულების შემდეგ, ჩვენი მძღოლი ავტომობილს დაგიბრუნებთ თქვენთვის მოსახერხებელ ნებისმიერ წერტილში. აღარ არის საჭირო რიგებში დგომა ან რეცხვის პროცესის ლოდინი — ანდეთ ეს საქმე mdzgholi.ge-ს და დაზოგეთ დრო სხვა მნიშვნელოვანი საქმეებისთვის.",
        benefits: [
            "მისამართზე აყვანა და დაბრუნება — თქვენ არ ტოვებთ სამსახურს ან სახლს",
            "სრული პრემიუმ რეცხვა — სალონი, საბარგული, ძარა, დისკები და მინები",
            "პროფესიონალური ქიმია — ვიყენებთ მხოლოდ სერტიფიცირებულ და უსაფრთხო საშუალებებს",
            "დროის დაზოგვა — სანამ თქვენ მუშაობთ ან ისვენებთ, ჩვენი გუნდი ზრუნავს თქვენს მანქანაზე",
            "პასუხისმგებლობა — თქვენი ავტომობილი დაზღვეულია და დაცულია მთელი პროცესის განმავლობაში",
            "მოქნილი გრაფიკი — შეგიძლიათ დაჯავშნოთ რეცხვა თქვენთვის სასურველი დროისთვის",
            "იდეალური სისუფთავე — ყურადღებას ვაქცევთ უმცირეს დეტალებსაც კი",
            "სპეციალური შეთავაზებები — რეგულარული კლიენტებისთვის მოქმედებს ფასდაკლებები",
        ],
        faq: [
            { q: "როგორ ხდება ავტომობილის ჩაბარება?", a: "თქვენ გვიკავშირდებით, ჩვენი მძღოლი მოდის თქვენს მისამართზე, აფორმებს მიღება-ჩაბარების აქტს (ელექტრონულად ან ფიზიკურად) და მიჰყავს მანქანა." },
            { q: "სად რეცხავთ ავტომობილს?", a: "ჩვენ ვთანამშრომლობთ საუკეთესო სარეცხ პუნქტებთან თბილისში, სადაც გარანტირებულია მაღალი ხარისხის მომსახურება და თანამედროვე ტექნოლოგიები." },
            { q: "რა დრო სჭირდება მთლიან პროცესს?", a: "საშუალოდ, ავტომობილის წაყვანა, გარეცხვა და დაბრუნება 1.5-დან 3 საათამდე იკავებს, რაც დამოკიდებულია რიგებსა და მოძრაობაზე." },
            { q: "შემიძლია თუ არა მხოლოდ გარე რეცხვის შეკვეთა?", a: "დიახ, ჩვენ გვაქვს სხვადასხვა პაკეტი — მხოლოდ გარე, მხოლოდ შიდა ან სრული კომპლექსური რეცხვა." },
            { q: "რა მოხდება თუ რეცხვისას რამე დაზიანდა?", a: "mdzgholi.ge იღებს სრულ პასუხისმგებლობას. ნებისმიერი დაზიანება ანაზღაურდება ჩვენი კომპანიის მიერ შეთანხმებისამებრ." },
            { q: "მჭირდება თუ არა მძღოლისთვის საწვავის დამატება?", a: "სასურველია ავტომობილში იყოს საკმარისი საწვავი სარეცხ პუნქტამდე მისასვლელად და უკან დასაბრუნებლად." },
        ],
    },
    en: {
        h1: "Car Wash Service",
        description: "mdzgholi.ge presents the most convenient car wash service in Tbilisi. Our operating principle is simple: you call us, we come to your address, pick up your vehicle, and take it to our specialized washing point. There, your car will undergo a complete interior and exterior wash using premium quality chemical agents. After the process is complete, our driver will return the vehicle to any point convenient for you. No more standing in lines or waiting for the washing process — entrust this task to mdzgholi.ge and save time for other important activities.",
        benefits: [
            "Pickup and delivery at your address — no need to leave work or home",
            "Full premium wash — cabin, trunk, body, rims, and windows",
            "Professional chemicals — we use only certified and safe products",
            "Time saving — while you work or relax, our team takes care of your car",
            "Responsibility — your vehicle is insured and protected throughout the entire process",
            "Flexible scheduling — you can book a wash for a time that suits you best",
            "Perfect cleanliness — we pay attention to even the smallest details",
            "Special offers — discounts are available for regular customers",
        ],
        faq: [
            { q: "How is the vehicle handed over?", a: "You contact us, our driver comes to your address, prepares a handover act (electronically or physically), and takes the car." },
            { q: "Where do you wash the vehicle?", a: "We partner with the best car wash facilities in Tbilisi, where high-quality service and modern technology are guaranteed." },
            { q: "How long does the whole process take?", a: "On average, picking up, washing, and returning the vehicle takes between 1.5 to 3 hours, depending on lines and traffic." },
            { q: "Can I order an exterior-only wash?", a: "Yes, we have different packages available — exterior only, interior only, or a full comprehensive wash." },
            { q: "What happens if something is damaged during washing?", a: "mdzgholi.ge takes full responsibility. Any damage will be compensated by our company as per agreement." },
            { q: "Do I need to add fuel for the driver?", a: "It is preferable for the vehicle to have enough fuel to reach the washing point and return." },
        ],
    },
    ru: {
        h1: "Мойка машин",
        description: "mdzgholi.ge представляет самый удобный сервис мойки машин в Тбилиси. Наш принцип работы прост: вы звоните нам, мы приезжаем по вашему адресу, забираем автомобиль и везем его в наш специализированный пункт мойки. Там ваша машина пройдет полную внутреннюю и внешнюю мойку с использованием химических средств премиум-класса. После завершения процесса наш водитель вернет автомобиль в любую удобную для вас точку. Больше не нужно стоять в очередях или ждать завершения мойки — доверьте это дело mdzgholi.ge и сэкономьте время для других важных дел.",
        benefits: [
            "Забор и возврат по адресу — вам не нужно покидать работу или дом",
            "Полная премиум-мойка — салон, багажник, кузов, диски и стекла",
            "Профессиональная химия — используем только сертифицированные и безопасные средства",
            "Экономия времени — пока вы работаете или отдыхаете, наша команда заботится о вашем авто",
            "Ответственность — ваш автомобиль застрахован и защищен на протяжении всего процесса",
            "Гибкий график — вы можете забронировать мойку на удобное для вас время",
            "Идеальная чистота — мы уделяем внимание даже мельчайшим деталям",
            "Специальные предложения — для постоянных клиентов действуют скидки",
        ],
        faq: [
            { q: "Как происходит передача автомобиля?", a: "Вы связываетесь с нами, наш водитель приезжает по вашему адресу, оформляет акт приема-передачи и забирает машину." },
            { q: "Где вы моете автомобиль?", a: "Мы сотрудничаем с лучшими автомойками Тбилиси, где гарантированы высокое качество обслуживания и современные технологии." },
            { q: "Сколько времени занимает весь процесс?", a: "В среднем забор, мойка и возврат автомобиля занимают от 1.5 до 3 часов, в зависимости от очередей и пробок." },
            { q: "Могу ли я заказать только наружную мойку?", a: "Да, у нас есть разные пакеты — только наружная, только внутренняя или полная комплексная мойка." },
            { q: "Что если что-то повредится при мойке?", a: "mdzgholi.ge берет на себя полную ответственность. Любое повреждение будет возмещено нашей компанией согласно договоренности." },
            { q: "Нужно ли заправлять машину для водителя?", a: "Желательно, чтобы в автомобиле было достаточно топлива для поездки до мойки и обратно." },
        ],
    },
};

export default async function CarWashPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "car-wash", icon: "🚿", ...c }} />;
}
