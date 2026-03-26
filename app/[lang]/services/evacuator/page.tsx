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

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string } [] }> = {
    ka: {
        h1: "ევაკუატორი თბილისში",
        description: "თქვენი ავტომობილი გაფუჭდა, საბურავი დაზიანდა ან მოულოდნელად ავარიაში მოხვდით? mdzgholi.ge-ის ევაკუატორის სერვისი მზად არის დაგეხმაროთ ნებისმიერ დროსა და ვითარებაში. ჩვენი ევაკუატორი ჩამოვა სწრაფად, განახორციელებს თქვენი ავტომობილის უსაფრთხო დატვირთვას და გადაიყვანს მას სასურველ მისამართზე — იქნება ეს პროფილაქტიკა, ავტოფარეხი თუ სხვა ლოკაცია. ჩვენ ვემსახურებით თბილისსა და მის შემოგარენს 24/7 რეჟიმში, რათა თქვენი პრობლემა მინიმალურ დროში მოგვარდეს. არ ინერვიულოთ გზაზე გაჩერების გამო, ჩვენი გუნდი თქვენს გვერდითაა.",
        benefits: [
            "სწრაფი რეაგირება — ჩამოსვლა ქალაქში 15-20 წუთში",
            "უსაფრთხო ტრანსპორტირება — თანამედროვე ევაკუატორები ნებისმიერი ტიპის მანქანისთვის",
            "24/7 ხელმისაწვდომობა — ყოველდღე, ღამე-ღამობით, წვიმასა და თოვლში",
            "ნებისმიერი სირთულის შემთხვევა — გაჭედილი ბორბლებიდან სრულ ევაკუაციამდე",
            "გამჭვირვალე ფასები — წინასწარი შეთანხმება ოპერატორთან, ყოველგვარი სიურპრიზის გარეშე",
            "გამოცდილი მძღოლები — ჩვენი გუნდი ზუსტად იცის, როგორ მოექცეს თქვენს მანქანას",
            "მომსახურება გარეუბნებში — ვფარავთ თბილისის ყველა რაიონსა და მის შემოგარენს",
            "დახმარება გზებზე — საბურავის შეცვლა ან დაქოქვა საჭიროების შემთხვევაში",
        ],
        faq: [
            { q: "რა დრო სჭირდება ევაკუატორის მოსვლას?", a: "თბილისის ფარგლებში ევაკუატორი საშუალოდ 15-25 წუთში ჩამოვა. გარეუბნებში დრო დამოკიდებულია მანძილზე, რასაც ოპერატორი წინასწარ გეტყვით." },
            { q: "შეგიძლიათ თუ არა ჯიპის ან მიკროავტობუსის გადაყვანა?", a: "დიახ, ჩვენს ავტოპარკში არის სხვადასხვა სიმძლავრის ევაკუატორები, რომლებიც ვარგისია მსუბუქი ავტომობილების, ჯიპებისა და მცირე სატვირთოებისთვის." },
            { q: "როგორ ხდება ევაკუაციის საფასურის გადახდა?", a: "გადახდა შესაძლებელია ნაღდი ანგარიშსწორებით ან საბანკო გადარიცხვით. ფასი განისაზღვრება მანძილისა და ავტომობილის ტიპის მიხედვით." },
            { q: "მხოლოდ ავარიული მანქანები გადაგყავთ?", a: "არა, ჩვენ გადაგვყავს ნებისმიერი ავტომობილი — იქნება ეს გაფუჭებული, უსაბუთო (სპეციალური ნებართვით) თუ უბრალოდ გაჩერებული მანქანა." },
            { q: "მუშაობთ თუ არა სადღესასწაულო დღეებში?", a: "დიახ, ევაკუატორის სერვისი mdzgholi.ge მუშაობს შეუფერხებლად 365 დღე წელიწადში, მათ შორის ახალ წელსა და აღდგომას." },
            { q: "შემიძლია თუ არა წინასწარ დავჯავშნო ევაკუატორი?", a: "დიახ, თუ გეგმავთ ავტომობილის გადაყვანას კონკრეტულ დროს, შეგიძლიათ წინასწარ შეგვიკვეთოთ და ჩვენი მძღოლი პუნქტუალურად გამოცხადდება." },
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
