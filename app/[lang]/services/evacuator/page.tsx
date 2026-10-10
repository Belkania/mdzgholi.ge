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
    const base = "https://www.mdzgholi.ge";
    const path = "/services/evacuator";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: "ევაკუატორი თბილისი, tow truck Tbilisi Georgia, ავარიი დახმარება, roadside assistance, mdzgholi.ge",
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

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string } [] }> = {
    ka: {
        h1: "ევაკუატორი თბილისში — 15-20 წუთში",
        description: "ავტომობილი მოულოდნელად გაჩერდა, ძრავი აღარ იქოქება, საბურავი დაზიანდა თუ საგზაო შემთხვევა შეგემთხვათ? გზაზე გაჩერება ყოველთვის სტრესულია, თუმცა mdzgholi.ge-ის ევაკუატორის სერვისი მზად არის სწრაფად დაგეხმაროთ. ჩვენი სპეცტექნიკა თბილისის ნებისმიერ უბანში 15-20 წუთში გამოცხადდება. უსაფრთხოდ და ფრთხილად ავიტანთ თქვენს ავტომობილს პლატფორმაზე და გადავიყვანთ ავტოსერვისში, სახლში თუ თქვენთვის სასურველ ნებისმიერ ლოკაციაზე — თბილისსა და რეგიონებში, 24 საათის განმავლობაში.",
        benefits: [
            "ოპერატიული მისვლა 15-20 წუთში — ევაკუატორები მორიგეობენ ქალაქის სხვადასხვა წერტილში",
            "ნებისმიერი ტიპის ტრანსპორტი — სედანები, ჯიპები, დაბალი კლირენსის მქონე სპორტული ავტომობილები და მიკროავტობუსები",
            "დაბლოკილი ბორბლების უსაფრთხო ევაკუაცია — სპეციალური დამხმარე გორგოლაჭებით (დოლიკებით), კოლოფის დაუზიანებლად",
            "24/7 გამოძახება — დაუყოვნებლივი რეაგირება ღამით, უქმეებსა და უამინდობაში",
            "ფიქსირებული და სამართლიანი ტარიფი — ფასი ზუსტდება ზარის დროს და ადგილზე არ იცვლება",
            "გამოცდილი ოპერატორები — ავტომობილის სწორი და უსაფრთხო ფიქსაცია პლატფორმაზე",
            "თბილისი და საქართველოს რეგიონები — ტრანსპორტირება ქალაქში და ქალაქგარეთ ნებისმიერ მანძილზე",
            "გზისპირა ტექნიკური დახმარება — ადგილზე დაქოქვა ბუსტერით ან საბურავის შეცვლა საჭიროების შემთხვევაში",
        ],
        faq: [
            {
                q: "რამდენ ხანში მოვა ევაკუატორი გამოძახების შემდეგ?",
                a: "თბილისის მასშტაბით საშუალო მისვლის დრო 15-20 წუთია. ჩვენი ევაკუატორები მოძრაობენ ქალაქის სხვადასხვა უბანში. ზარის დროსვე ოპერატორი გაგაცნობთ უახლოესი ეკიპაჟის ზუსტ ლოკაციას."
            },
            {
                q: "თუ ავტომატიკაა და ბორბლები დაბლოკილია, შესაძლებელია უსაფრთხოდ აყვანა?",
                a: "რა თქმა უნდა. ჩვენ ვიყენებთ სპეციალურ ტექნიკურ გორგოლაჭებს (დოლიკებს), რომლებიც დაბლოკილ თვლებს ქვეშ ედება. ავტომობილი პლატფორმაზე ადის ყოველგვარი წინააღმდეგობის გარეშე, გადაცემათა კოლოფისა და საბურავების დაუზიანებლად."
            },
            {
                q: "როგორ გამოითვლება ევაკუატორის მომსახურების ფასი?",
                a: "ფასი დამოკიდებულია მანძილზე (საიდან სად გადაგყავთ) და ავტომობილის გაბარიტებზე (სედანი, ჯიპი თუ სპეცტექნიკა). ოპერატორი ზარის დროს გეუბნებათ ფიქსირებულ თანხას, რომელიც ადგილზე არ იცვლება."
            },
            {
                q: "ღამით ან უამინდობაში თუ მუშაობს თქვენი ევაკუატორი?",
                a: "დიახ, ჩვენი საავარიო ევაკუაციის სამსახური მუშაობს 24/7, უწყვეტ რეჟიმში. წვიმაში, თოვლსა და ყინვაში ჩვენი ეკიპაჟები სრულ მზადყოფნაში არიან."
            },
            {
                q: "თუ მანქანა ორმოშია, ტალახშია ან გზიდანაა გადასული?",
                a: "ჩვენი ევაკუატორები აღჭურვილია მძლავრი ელექტროჯალამბარით (ლებიოდკით), რაც საშუალებას გვაძლევს ავტომობილი უსაფრთხოდ ამოვიყვანოთ თხრილიდან, თოვლიდან ან ტალახიდან და შემდეგ ავიყვანოთ პლატფორმაზე."
            },
            {
                q: "შეუძლია თუ არა მძღოლს/მგზავრს ევაკუატორის კაბინაში ჩაჯდომა?",
                a: "დიახ, ევაკუატორის კაბინაში არის კომფორტული ადგილი 1-2 მგზავრისთვის, ასე რომ თქვენ ავტომობილთან ერთად იმგზავრებთ დანიშნულების ადგილამდე."
            },
        ],
    },
    en: {
        h1: "Tow Truck / Evacuator in Tbilisi",
        description: "Did your vehicle break down, experience tire damage, or were you involved in an unexpected accident? mdzgholi.ge's tow truck service is ready to assist you anytime and in any situation. Our evacuator will arrive quickly, perform a safe loading of your vehicle, and transport it to your desired destination — whether it's a repair shop, your garage, or another location. We serve Tbilisi and its surroundings 24/7 to ensure your problem is resolved in the shortest time possible. Don't worry about being stuck on the road; our team is by your side.",
        benefits: [
            "Fast response — arrival within the city in 15-20 minutes",
            "Safe transportation — modern tow trucks for all types of vehicles",
            "24/7 availability — every day, including nights, rain, or snow",
            "Handling any difficulty — from locked wheels to complete evacuation",
            "Transparent pricing — upfront agreement with the operator, no surprises",
            "Experienced drivers — our team knows exactly how to handle your car",
            "Suburban service — we cover all districts of Tbilisi and its vicinity",
            "Roadside assistance — changing a tire or jump-starting if needed",
        ],
        faq: [
            { q: "How long does it take for the tow truck to arrive?", a: "Within Tbilisi, the tow truck typically arrives in 15-25 minutes. For suburbs, the time depends on the distance, which the operator will specify upfront." },
            { q: "Can you transport an SUV or a minivan?", a: "Yes, our fleet includes various tow trucks with different capacities suitable for sedans, SUVs, and small trucks." },
            { q: "How can I pay for the evacuation service?", a: "Payment can be made in cash or via bank transfer. The price is determined by the distance and vehicle type." },
            { q: "Do you only transport accident-damaged cars?", a: "No, we transport any vehicle — whether it's broken down, documented for transport, or just a vehicle that needs to be moved." },
            { q: "Do you work on holidays?", a: "Yes, mdzgholi.ge's tow truck service operates 365 days a year, including New Year's and Easter." },
            { q: "Can I book a tow truck in advance?", a: "Yes, if you plan to move your vehicle at a specific time, you can pre-order, and our driver will arrive punctually." },
        ],
    },
    ru: {
        h1: "Эвакуатор в Тбилиси",
        description: "Ваш автомобиль сломался, повреждено колесо или вы неожиданно попали в аварию? Служба эвакуации mdzgholi.ge готова помочь вам в любое время и в любой ситуации. Наш эвакуатор приедет быстро, обеспечит безопасную погрузку вашего авто и доставит его по нужному адресу — будь то автосервис, гараж или другое место. Мы обслуживаем Тбилиси и его окрестности 24/7, чтобы ваша проблема была решена в кратчайшие сроки. Не беспокойтесь об остановке на дороге — наша команда всегда рядом.",
        benefits: [
            "Быстрое реагирование — прибытие по городу за 15-20 минут",
            "Безопасная транспортировка — современные эвакуаторы для любых типов авто",
            "Доступны 24/7 — ежедневно, ночью, в дождь и снег",
            "Случаи любой сложности — от заблокированных колес до полной эвакуации",
            "Прозрачные цены — предварительное согласование с оператором, без сюрпризов",
            "Опытные водители — наша команда точно знает, как обращаться с вашим авто",
            "Обслуживание пригородов — охватываем все районы Тбилиси и окрестности",
            "Помощь на дорогах — замена колеса или запуск двигателя при необходимости",
        ],
        faq: [
            { q: "Сколько времени ждать эвакуатор?", a: "В пределах Тбилиси эвакуатор приедет в среднем за 15-25 минут. В пригороды время зависит от расстояния, о чем оператор сообщит заранее." },
            { q: "Можете ли вы перевезти внедорожник или микроавтобус?", a: "Да, в нашем автопарке есть эвакуаторы разной грузоподъемности, подходящие для легковых авто, внедорожников и малых грузовиков." },
            { q: "Как производится оплата услуг эвакуации?", a: "Оплата возможна наличными или банковским переводом. Цена зависит от расстояния и типа автомобиля." },
            { q: "Вы перевозите только аварийные машины?", a: "Нет, мы перевозим любые автомобили — будь то поломка, транспортировка без документов (при наличии разрешений) или просто перевозка." },
            { q: "Работаете ли вы в праздничные дни?", a: "Да, служба эвакуации mdzgholi.ge работает без выходных 365 дней в году, включая праздники." },
            { q: "Можно ли заказать эвакуатор заранее?", a: "Да, если вы планируете перевозку автомобиля на конкретное время, вы можете сделать предзаказ, и водитель приедет вовремя." },
        ],
    },
};

export default async function EvacuatorPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "evacuator", icon: "🚛", ...c }} />;
}
