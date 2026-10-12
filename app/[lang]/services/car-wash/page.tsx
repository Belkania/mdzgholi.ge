import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "მანქანის რეცხვა გამოძახებით თბილისში — წაყვანა-მოყვანით | mdzgholi.ge",
        en: "Car Wash Pickup & Delivery in Tbilisi | mdzgholi.ge",
        ru: "Мойка авто с доставкой в Тбилиси — Забор и возврат | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "მანქანის რეცხვა მისამართიდან წაყვანითა და დაბრუნებით — mdzgholi.ge. დაზოგეთ დრო: ჩავიბარებთ მანქანას, იდეალურად გავრეცხავთ და უკან მოგიყვანთ. ☎ 568 83 47 07",
        en: "Door-to-door car wash service in Tbilisi by mdzgholi.ge. We pick up your vehicle, provide premium interior/exterior detailing, and return it clean. Call: +995 568 83 47 07",
        ru: "Мойка машин с забором и доставкой в Тбилиси — mdzgholi.ge. Заберем авто от дома или офиса, вымоем до блеска и вернем в удобное время. ☎ +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/car-wash";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    const kwMap: Record<string, string> = {
        ka: "მანქანის რეცხვა თბილისი, car wash Tbilisi home delivery, მისამართზე რეცხვა, ავტოსამრეცხაო გამოძახებით, mdzgholi.ge",
        en: "car wash Tbilisi pickup, mobile car detailing Georgia, car wash collection Tbilisi, premium auto cleaning, mdzgholi.ge",
        ru: "мойка авто с забором Тбилиси, детейлинг авто Грузия, выездная автомойка Тбилиси, химчистка салона, mdzgholi.ge",
    };

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: kwMap[lang] ?? kwMap.ka,
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
            locale: lang === "ka" ? "ka_GE" : lang === "ru" ? "ru_GE" : "en_US",
            type: "website",
        },
    };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის რეცხვა",
        description: "სამრეცხაოების რიგში საათობით დგომა და უქმეების დაკარგვა არავის უხარია. mdzgholi.ge გთავაზობთ მანქანის რეცხვას მისამართიდან გაყვანით: ჩვენი მძღოლი მოვა თქვენს სახლთან ან ოფისთან, ჩაიბარებს ავტომობილს, წაიყვანს პრემიუმ სამრეცხაოში, საფუძვლიანად გაარეცხინებს და იდეალურად სუფთას დაგიბრუნებთ უკან. თქვენ აგრძელებთ მუშაობას ან ისვენებთ ოჯახთან ერთად, თქვენი მანქანა კი ბზინავს.",
        benefits: [
            "მისამართზე ჩაბარება და დაბრუნება — არ გიწევთ სამსახურის მიტოვება ან საქმის მოწყვეტა",
            "კომპლექსური პრემიუმ რეცხვა — სალონის ქიმწმენდის ელემენტები, საბარგული, ძარა, დისკები და მინები",
            "უმაღლესი ხარისხის ავტოქიმია — უსაფრთხო შამპუნები, რომლებიც არ აზიანებს საღებავსა და ტყავს",
            "დაზოგილი 2-3 საათი — სანამ თქვენ საქმიანობთ, ავტომობილის სისუფთავეზე ჩვენ ვზრუნავთ",
            "სრული პასუხისმგებლობა და უსაფრთხოება — ავტომობილის მდგომარეობა ფიქსირდება ჩაბარების მომენტში",
            "მოქნილი დრო — დაჯავშნეთ მომსახურება თქვენთვის სასურველ საათზე",
            "დეტალური სისუფთავე — ყურადღება ექცევა ყველა კუთხეს, ჰაერგამტარებსა და ნაკეცებს",
            "ერთგული მომხმარებლების პრივილეგიები — სპეციალური ტარიფები რეგულარული შეკვეთებისთვის",
        ],
        faq: [
            {
                q: "როგორ ხდება ავტომობილის ჩაბარება და დაბრუნება?",
                a: "ჩვენი მძღოლი მოდის თქვენ მიერ მითითებულ მისამართზე, ერთად ვამოწმებთ მანქანის ვიზუალურ მდგომარეობას (საჭიროების შემთხვევაში ვუღებთ ფოტოებს) და მიგვყავს პარტნიორ პრემიუმ სამრეცხაოში. სრული წმენდის შემდეგ ავტომობილი ისევ თქვენთან ბრუნდება."
            },
            {
                q: "სად ირეცხება ავტომობილი?",
                a: "ვთანამშრომლობთ თბილისის საუკეთესო, შემოწმებულ სამრეცხაოებთან და დითეილინგ ცენტრებთან, სადაც გამოიყენება პროფესიონალური აპარატურა და მაღალი ხარისხის ევროპული ქიმია."
            },
            {
                q: "რა დრო სჭირდება მთელ პროცესს?",
                a: "საშუალოდ ავტომობილის წაყვანას, ხარისხიან გარეცხვა-გაშრობას და უკან დაბრუნებას 1.5-დან 2.5 საათამდე სჭირდება, მოძრაობისა და არჩეული პაკეტის მიხედვით."
            },
            {
                q: "რა პაკეტები გაქვთ — შემიძლია მხოლოდ გარე ან მხოლოდ სალონის შეკვეთა?",
                a: "დიახ, შეგიძლიათ შეუკვეთოთ როგორც ექსპრეს გარე რეცხვა, ისე სალონის სიღრმისეული წმენდა ან სრული კომპლექსი საბარგულისა და დისკების დეტალური დამუშავებით."
            },
            {
                q: "ვინ არის პასუხისმგებელი ავტომობილის უსაფრთხოებაზე?",
                a: "mdzgholi.ge იღებს სრულ მატერიალურ და სამართლებრივ პასუხისმგებლობას ავტომობილის გადაყვანისა და რეცხვის მთელ პერიოდში. ჩვენი მძღოლები არიან გამოცდილი და შემოწმებული პროფესიონალები."
            },
            {
                q: "საწვავი წინასწარ უნდა იყოს მანქანაში?",
                a: "დიახ, სასურველია ავტომობილში იყოს მინიმუმ იმდენი საწვავი, რაც სამრეცხაომდე მისასვლელად და უკან დასაბრუნებლად იქნება საკმარისი (დაახლოებით 10-15 კმ-ის მარაგი)."
            },
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
