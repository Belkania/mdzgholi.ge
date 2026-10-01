import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { JsonLd, howToSchema, aggregateRatingSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "მანქანის დაქოქვა გამოძახებით — აკუმულატორის დატენვა 24/7 | mdzgholi.ge",
        en: "Car Battery Jump Start & Charging in Tbilisi 24/7 | mdzgholi.ge",
        ru: "Запуск авто и зарядка аккумулятора в Тбилиси 24/7 | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "მანქანის დაქოქვა გამოძახებით, ავტომობილის დაქოქვა ბუსტერით და დამჯდარი აკუმულატორის დამუხტვა თბილისში 24/7. ძრავის დაქოქვა 15-20 წთ-ში. ☎ +995 568 83 47 07",
        en: "Mobile car jump start and dead battery charging in Tbilisi 24/7. Professional booster dispatch in 15-20 min. Call: +995 568 83 47 07",
        ru: "Выезд на запуск авто и зарядку аккумулятора в Тбилиси 24/7. Прикурить авто бустером за 15-20 минут: +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/battery-charging";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: "მანქანის დაქოქვა გამოძახებით, მანქანის დაქოქვა, ავტომობილის დაქოქვა, დაქოქვა გამოძახებით, ძრავის დაქოქვა, მანქანის დაქოქვა თბილისში, ავტომობილის დამუხტვა, აკუმულატორის დატენვა, დამჯდარი აკუმულატორის დამუხტვა, დამუხტვა, დატენვა, აკუმულატორის დამუხტვა, აკუმულატორის დაქოქვა, პერემიჩკა გამოძახებით, ბუსტერით დაქოქვა, battery jump start Tbilisi, car jump start Tbilisi, car battery charging Tbilisi, jump start Georgia",
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
            images: [
                {
                    url: "https://www.mdzgholi.ge/images/blog/car-battery-charging-guide.jpg",
                    width: 1200,
                    height: 900,
                    alt: "აკუმულატორის დატენვა და დამუხტვა თბილისში",
                },
            ],
        },
    };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის დაქოქვა გამოძახებით — აკუმულატორის დატენვა და დამუხტვა 24/7",
        description: "თქვენს ავტომობილზე აკუმულატორი მოულოდნელად დაჯდა, ძრავი არ იქოქება და გეჩქარებათ? mdzgholi.ge გთავაზობთ სერვისს „აკუმულატორის დატენვა“ მთელი თბილისის მასშტაბით 24/7 რეჟიმში. დამჯდარი აკუმულატორის დამუხტვა ხორციელდება უახლესი, სერტიფიცირებული ბუსტერებით (Jump Starter), რაც გამორიცხავს ავტომობილის ელექტრონიკისა და კომპიუტერის დაზიანების ნებისმიერ რისკს. აღარ გჭირდებათ მეზობლის ან გამვლელის ძებნა ე.წ. „პერემიჩკის“ კაბელებით — ჩვენი გამოცდილი სპეციალისტი გამოძახებიდან 15-20 წუთში მოვა თქვენს ლოკაციაზე და უზრუნველყოფს სწრაფ და უსაფრთხო დაქოქვას. აკუმულატორის დამუხტვა და დატენვა ადგილზევე დაგიზოგავთ დროს, ევაკუატორის ზედმეტ ხარჯებსა და ნერვებს.",
        benefits: [
            "მანქანის დაქოქვა გამოძახებით 15-20 წუთში — ავტომობილის დაქოქვა თბილისის ნებისმიერ უბანში",
            "დამჯდარი აკუმულატორის დამუხტვა ბუსტერით — ელექტრონიკა 100%-ით დაცულია ძაბვის ნახტომისგან",
            "ავტომობილის დაქოქვა 24/7 — დღისით, ღამით, უქმეებსა და სადღესასწაულო დღეებში",
            "ძრავის დაქოქვის შემდეგ — გენერატორისა და აკუმულატორის ადგილზე დიაგნოსტიკა",
            "ყველა ტიპის მანქანის დაქოქვა — ბენზინი, დიზელი, ჰიბრიდი და ელექტრომობილის 12V სისტემა",
            "არანაირი ევაკუატორის საჭიროება — პრობლემა გვარდება პირდაპირ ავტოსადგომზე, ეზოში თუ გზატკეცილზე",
            "გამჭვირვალე და ხელმისაწვდომი ფასი — წინასწარი შეთანხმებით, ყოველგვარი ფარული გადასახადის გარეშე",
            "ახალი აკუმულატორის ადგილზე მოტანა და მონტაჟი — იმ შემთხვევაში, თუ ძველი აკუმულატორი დამუხტვას აღარ ექვემდებარება",
        ],
        faq: [
            {
                q: "მანქანის დაქოქვა გამოძახებით — რამდენ ხანში მოდის სპეციალისტი?",
                a: "ჩვენი მობილური ეკიპაჟები განაწილებულია თბილისის სხვადასხვა რაიონში. გამოძახების დაფიქსირებიდან სპეციალისტი ადგილზე მოდის საშუალოდ 15-20 წუთის განმავლობაში."
            },
            {
                q: "რა განსხვავებაა ბუსტერით ავტომობილის დაქოქვასა და „პერემიჩკით“ მანქანის დაქოქვას შორის?",
                a: "ჩვეულებრივი, არასწორად შეერთებული კაბელებით („პერემიჩკით“) დაქოქვამ შესაძლოა მართლაც დააზიანოს თანამედროვე ავტომობილის კომპიუტერი. თუმცა mdzgholi.ge იყენებს მხოლოდ პროფესიონალურ ციფრულ ბუსტერებს, რომლებსაც გააჩნია ჩაშენებული დაცვა მოკლე ჩართვის, პოლარობის შეცდომისა და ძაბვის ნახტომისგან. ჩვენთან აკუმულატორის დამუხტვა 100%-ით უსაფრთხოა."
            },
            {
                q: "რა ღირს მანქანის დაქოქვა გამოძახებით თბილისში?",
                a: "აკუმულატორის დატენვის ღირებულება დამოკიდებულია თქვენს ლოკაციასა და ავტომობილის სპეციფიკაზე. ფასი შეთანხმებულია წინასწარ, ოპერატორთან დარეკვისას, და არ შეიცვლება სამუშაოს დასრულების შემდეგ."
            },
            {
                q: "რა ხდება, თუ აკუმულატორი მთლიანად დაზიანებულია და დატენვა არ შველის?",
                a: "ადგილზევე ვამოწმებთ აკუმულატორისა და გენერატორის (დინამოს) მუშაობას. თუ დამუხტვა შედეგს არ გამოიღებს და აკუმულატორს რესურსი ამოწურული აქვს, ჩვენ შეგვიძლია ოპერატიულად მოგიტანოთ და დაგიყენოთ ახალი, გარანტიიანი აკუმულატორი, ან საჭიროების შემთხვევაში გამოვიძახოთ ჩვენივე ევაკუატორი."
            },
            {
                q: "ხდება თუ არა ღამით მანქანის დაქოქვა გამოძახებით?",
                a: "დიახ, mdzgholi.ge-ის აკუმულატორის დატენვა და ტექნიკური დახმარება ხელმისაწვდომია 24 საათის განმავლობაში, კვირის 7 დღე, ნებისმიერ ამინდსა და სეზონზე."
            },
            {
                q: "შეიძლება თუ არა ჰიბრიდული ან დიზელის მანქანის დაქოქვა?",
                a: "დიახ, ჩვენი მაღალი სიმძლავრის ბუსტერები გათვლილია როგორც დიდი მოცულობის დიზელის ძრავებზე, ასევე ჰიბრიდული და ელექტრო ავტომობილების 12-ვოლტიან დამხმარე სისტემებზე."
            },
        ],
    },
    en: {
        h1: "Car Battery Charging & Jump Start in Tbilisi",
        description: "Did your vehicle battery unexpectedly die, leaving you stranded? mdzgholi.ge delivers 24/7 on-demand car battery charging and professional jump start services across Tbilisi. Using state-of-the-art jump boosters with integrated surge protection, we safely start your engine without any danger to modern vehicle ECUs or electronics. No need to look for jumper cables or rely on passing cars — our mobile technician arrives at your location in 15-20 minutes. Dead battery jump start and charging has never been faster, safer, or more convenient.",
        benefits: [
            "Dead battery jump start in 15-20 minutes — fast dispatch across all Tbilisi districts",
            "Safe charging with digital jump starter — complete protection against voltage spikes",
            "24/7 emergency battery assistance — day and night, weekends and holidays",
            "Alternator and battery diagnostic check — instant on-site health evaluation",
            "Service for all vehicle types — petrol, diesel, hybrid, and EV 12V auxiliary batteries",
            "Zero towing required — issue resolved on the spot in your parking lot or roadside",
            "Transparent upfront pricing — clear rates confirmed before dispatch with no hidden fees",
            "New battery delivery & installation — if your old battery is permanently exhausted",
        ],
        faq: [
            {
                q: "How fast will the technician arrive for battery charging?",
                a: "Our mobile teams are stationed across various districts of Tbilisi. On average, a technician reaches your coordinates within 15-20 minutes of booking."
            },
            {
                q: "Is jump starting safe for modern electronic control units (ECU)?",
                a: "Yes. While amateur jump cables can create dangerous voltage spikes, mdzgholi.ge uses industrial micro-controlled boosters with anti-surge, reverse polarity, and short-circuit protection, making the process 100% safe."
            },
            {
                q: "How much does on-site battery charging cost?",
                a: "Pricing depends on your exact coordinates in Tbilisi and vehicle specifications. Rates are communicated and agreed upfront over the phone before dispatch."
            },
            {
                q: "What if the battery is completely dead and cannot be recharged?",
                a: "We inspect both battery and alternator output on the spot. If the battery is completely deteriorated, we can promptly deliver and install a brand new battery with warranty."
            },
            {
                q: "Do you operate during nighttime hours?",
                a: "Yes, our battery charging and roadside technical service operates 24 hours a day, 7 days a week, regardless of weather conditions."
            },
            {
                q: "Can you jump start large diesel engines or hybrid cars?",
                a: "Yes, our heavy-duty boosters deliver sufficient peak amperage to start large diesel engines, SUVs, vans, and 12V systems on hybrid vehicles."
            },
        ],
    },
    ru: {
        h1: "Зарядка аккумулятора и запуск авто в Тбилиси",
        description: "Не заводится автомобиль, щелкает стартер или сел аккумулятор? Служба mdzgholi.ge предоставляет круглосуточную услугу зарядки аккумулятора и запуска двигателя бустером в Тбилиси 24/7. Мы используем современное профессиональное пуско-зарядное оборудование с защитой от скачков напряжения, что полностью исключает риск повреждения чувствительной электроники автомобиля. Вам больше не нужно искать провода («прикуриватель») или просить прохожих — наш специалист приедет по вашему адресу за 15-20 минут и быстро заведет авто.",
        benefits: [
            "Запуск севшего аккумулятора за 15-20 минут — оперативный выезд во все районы Тбилиси",
            "Безопасная зарядка профессиональным бустером — полная защита электроники и ЭБУ",
            "Круглосуточный сервис 24/7 — работаем ночью, в выходные и праздничные дни",
            "Диагностика аккумулятора и генератора — проверка состояния и уровня заряда на месте",
            "Обслуживание любых автомобилей — бензин, дизель, гибриды и 12V системы электрокаров",
            "Без необходимости эвакуатора — оживим машину во дворе, на паркинге или трассе",
            "Честная и прозрачная цена — согласовывается до выезда без скрытых платежей",
            "Доставка и установка нового аккумулятора — если старый аккумулятор полностью вышел из строя",
        ],
        faq: [
            {
                q: "Как быстро приедет мастер для зарядки аккумулятора?",
                a: "Наши дежурные специалисты находятся в разных районах Тбилиси. Среднее время прибытия мастера составляет 15-20 минут с момента звонка."
            },
            {
                q: "Безопасно ли прикуривать современные автомобили?",
                a: "Да. В отличие от кустарного «прикуривания» проводами от другой машины, мы используем сертифицированные цифровые бустеры с защитой от переполюсовки и перепадов напряжения."
            },
            {
                q: "Сколько стоит запуск и зарядка севшего аккумулятора?",
                a: "Стоимость зависит от вашего местоположения и параметров автомобиля. Точная цена озвучивается диспетчером при звонке и остается фиксированной."
            },
            {
                q: "Что делать, если аккумулятор безнадежно испорчен?",
                a: "Специалист проверит заряд и состояние АКБ на месте. Если батарея не подлежит реанимации, мы можем оперативно привезти и установить новый аккумулятор с гарантией."
            },
            {
                q: "Работает ли служба в ночное время?",
                a: "Да, служба техпомощи mdzgholi.ge работает 24 часа в сутки, 7 дней в неделю, при любой погоде."
            },
            {
                q: "Заводите ли вы дизельные двигатели и гибридные авто?",
                a: "Да, наши пусковые устройства рассчитаны на высокие пусковые токи и легко справляются с дизелями большого объема и гибридными системами."
            },
        ],
    },
};

export default async function BatteryChargingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    const base = "https://www.mdzgholi.ge";
    const url = lang === "ka" ? `${base}/services/battery-charging` : `${base}/${lang}/services/battery-charging`;

    const howToName = lang === "ru"
        ? "Как вызвать зарядку аккумулятора в Тбилиси"
        : lang === "en"
        ? "How to get a dead battery charged in Tbilisi"
        : "როგორ გამოვიძახოთ აკუმულატორის დატენვა თბილისში";

    const howToSteps = lang === "ru" ? [
        { name: "Позвоните по номеру", text: "Наберите +995 568 83 47 07 или напишите в WhatsApp. Оператор ответит мгновенно." },
        { name: "Укажите местоположение", text: "Сообщите ваш точный адрес или ориентир в Тбилиси. Специалист рассчитает маршрут." },
        { name: "Ожидайте 15-20 минут", text: "Дежурный техник с профессиональным бустером приедет к вашему автомобилю за 15-20 минут." },
        { name: "Безопасный запуск двигателя", text: "Специалист подключит бустер с защитой от скачков и заведёт ваш автомобиль." },
        { name: "Диагностика и оплата", text: "После запуска технику проверит генератор и АКБ. Оплата производится на месте по согласованной цене." },
    ] : lang === "en" ? [
        { name: "Call or WhatsApp us", text: "Dial +995 568 83 47 07 or send a WhatsApp message. Our dispatcher responds instantly." },
        { name: "Share your location", text: "Tell us your exact address or landmark in Tbilisi. Our system routes the nearest team." },
        { name: "Wait 15-20 minutes", text: "A mobile technician equipped with a digital jump booster arrives at your vehicle within 15-20 minutes." },
        { name: "Safe engine start", text: "The technician safely connects the booster and starts your engine with full surge protection." },
        { name: "On-site check & payment", text: "Alternator and battery health are verified after start. Payment is made on-site at the agreed upfront price." },
    ] : [
        { name: "დარეკეთ ან მოგვწერეთ", text: "დაგვირეკეთ +995 568 83 47 07 ან WhatsApp-ში — ოპერატორი მყისიერად გიპასუხებს." },
        { name: "მიუთითეთ ლოკაცია", text: "აღუწერეთ ზუსტი მისამართი ან ლენდმარქი თბილისში. სისტემა გამოძახებს ყველაზე ახლო ეკიპაჟს." },
        { name: "დაელოდეთ 15-20 წუთს", text: "პროფესიონალური ბუსტერით აღჭურვილი სპეციალისტი 15-20 წუთში მოვა თქვენს ლოკაციაზე." },
        { name: "უსაფრთხო დაქოქვა", text: "სპეციალისტი შეაერთებს ბუსტერს ძაბვის დაცვის სისტემით და სწრაფად დაქოქავს ძრავს." },
        { name: "ადგილზე შემოწმება და გადახდა", text: "დაქოქვის შემდეგ გენერატორი და აკუმულატორი ადგილზევე მოწმდება. გადახდა ხდება წინასწარ შეთანხმებული ფასით." },
    ];

    return (
        <>
            <JsonLd data={howToSchema({ name: howToName, description: c.description, steps: howToSteps })} />
            <JsonLd data={aggregateRatingSchema({ name: "mdzgholi.ge — " + c.h1, url, rating: "4.9", reviewCount: "214" })} />
            <ServicePageLayout d={d} lang={lang} content={{ slug: "battery-charging", icon: "🔋", ...c }} />
        </>
    );
}
