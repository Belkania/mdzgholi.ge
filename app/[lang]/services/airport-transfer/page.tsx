import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "აეროპორტის ტრანსფერი და საქალაქთაშორისო მგზავრობა | mdzgholi.ge",
        en: "Airport Transfer & Intercity Travel Georgia | mdzgholi.ge",
        ru: "Трансфер в аэропорт Тбилиси и Междугородний трансфер | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "კომფორტული ტრანსფერი თბილისის, ქუთაისისა და ბათუმის აეროპორტებში — mdzgholi.ge. დახვედრა აბრით, რეისის მონიტორინგი, ფიქსირებული ფასები. ☎ 568 83 47 07",
        en: "Private airport transfers to Tbilisi, Kutaisi, and Batumi airports by mdzgholi.ge. Meet & greet in arrivals hall, flight delay monitoring, fixed rates. Call: +995 568 83 47 07",
        ru: "Трансфер в аэропорты Тбилиси, Кутаиси, Батуми и межгород по Грузии — mdzgholi.ge. Встреча с табличкой, отслеживание рейсов, честные цены. ☎ +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/airport-transfer";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: "აეროპორტის ტრანსფერი თბილისი, airport transfer Tbilisi, ბათუმი ტრანსფერი, intercity Georgia, mdzgholi.ge",
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
        h1: "აეროპორტის ტრანსფერი / საქალაქთაშორისო",
        description: "მოგზაურობისთვის ემზადებით თუ სტუმრებს ელოდებით? mdzgholi.ge გთავაზობთ აეროპორტის კომფორტულ ტრანსფერს თბილისის, ქუთაისისა და ბათუმის მიმართულებით, ასევე საქალაქთაშორისო მგზავრობას მთელ საქართველოში. ჩვენთან არ გიწევთ ნერვიულობა რეისის დაგვიანებაზე ან უცნობი ტაქსისტების გაბერილ ტარიფებზე: მძღოლი დროულად დაგხვდებათ ჩამოსვლის დარბაზში სახელობითი ბარათით, დაგეხმარებათ ბარგის დაბინავებაში და უსაფრთხოდ, მშვიდად მიგიყვანთ დანიშნულების ადგილამდე.",
        benefits: [
            "გარანტირებული პუნქტუალურობა — აეროპორტში ყოველთვის დროულად, ზედმეტი სტრესის გარეშე მიხვალთ",
            "პერსონალური დახვედრა — მძღოლი დაგხვდებათ ჩამოსვლის დარბაზში თქვენი სახელით",
            "ფრენის ცოცხალი მონიტორინგი — რეისის დაგვიანების შემთხვევაში ლოდინი უფასოა",
            "საქალაქთაშორისო მარშრუტები — ბათუმი, ქუთაისი, გუდაური, ყაზბეგი და ნებისმიერი სხვა ლოკაცია",
            "სუფთა და მოვლილი მანქანები — კონდიცირება, კომფორტული სალონი და დიდი საბარგული",
            "ფიქსირებული ტარიფი — თანხა შეთანხმებულია წინასწარ, პარკინგისა და გზის გადასახადების ჩათვლით",
            "24/7 მომსახურება — ადრეული დილის და გვიანი ღამის რეისებზე უწყვეტი მუშაობა",
            "საბავშვო სავარძელი მოთხოვნით — პატარების უსაფრთხოება და კომფორტი გარანტირებულია",
        ],
        faq: [
            {
                q: "როგორ დამხვდება მძღოლი აეროპორტში?",
                a: "მძღოლი დაგხვდებათ პირდაპირ ჩამოსვლის დარბაზში (Arrivals), ხელში სპეციალური ბარათით, რომელზეც თქვენი ან თქვენი კომპანიის სახელი ეწერება. ის დაგეხმარებათ ბარგის მანქანამდე მიტანასა და ჩადებაში."
            },
            {
                q: "რა ხდება, თუ რეისი გადაიდო ან დააგვიანა?",
                a: "ჩვენ რეალურ დროში ვამოწმებთ თქვენი ფრენის სტატუსს. მაშინაც კი, თუ რეისი 2-3 საათით დაგვიანდება, მძღოლი ზუსტად განახლებულ დროს გამოცხადდება და დამატებითი ლოდინის თანხა არ დაგერიცხებათ."
            },
            {
                q: "შესაძლებელია თუ არა საქალაქთაშორისო მგზავრობა, მაგალითად თბილისიდან ბათუმში?",
                a: "დიახ, ჩვენ ვასრულებთ ტრანსფერებს საქართველოს ნებისმიერი მიმართულებით — ბათუმში, ქუთაისში, გუდაურში, ყაზბეგში, კახეთსა თუ სვანეთში. მგზავრობა არის ინდივიდუალური, კომფორტული და გაჩერებებით თქვენი სურვილისამებრ."
            },
            {
                q: "რა ზომის ავტომობილებით ემსახურებით მგზავრებს?",
                a: "გვყავს როგორც კომფორტული სედანები (1-3 მგზავრისა და ბარგისთვის), ისე ტევადი მინივენები და მიკროავტობუსები (6-8 მგზავრისთვის), რომლებიც იდეალურია ოჯახებისა და მეგობრების ჯგუფებისთვის."
            },
            {
                q: "ფასში შედის თუ არა აეროპორტის პარკინგი?",
                a: "დიახ, ჩვენ მიერ შემოთავაზებული ფიქსირებული ტარიფი უკვე მოიცავს აეროპორტის პარკინგის საფასურს. გზაში არანაირი მოულოდნელი დანამატი არ მოგეთხოვებათ."
            },
            {
                q: "შემიძლია თუ არა ბავშვისთვის სავარძლის დამატება?",
                a: "რა თქმა უნდა. ჯავშნის გაფორმებისას უბრალოდ გვითხარით ბავშვის ასაკი და ჩვენ ავტომობილს შესაბამისი სერტიფიცირებული საბავშვო სავარძლით აღვჭურვავთ."
            },
        ],
    },
    en: {
        h1: "Airport Transfer & Intercity",
        description: "mdzgholi.ge offers punctual and comfortable transfers to Tbilisi, Kutaisi, and Batumi international airports, as well as intercity routes across Georgia. Our service is designed for those who want to travel stress-free, save time, and receive premium service. Our experienced drivers ensure your timely arrival at the airport or coordinate a meeting upon arrival. For intercity travel, you are guaranteed a comfortable and safe environment in any direction — whether it's Batumi, Kutaisi, Kazbegi, or elsewhere.",
        benefits: [
            "Timely arrival — we always take flight schedules into account",
            "Airport meet and greet — driver meets you with a name sign in the arrival hall",
            "Flight monitoring — in case of flight delays, waiting is free of charge",
            "Intercity transfers — comfortable travel to any point in Georgia",
            "Well-maintained fleet — clean and comfortable vehicles for your comfort",
            "Fixed rates — the price is known in advance and does not change during the trip",
            "24/7 support — contact us anytime, day or night",
            "Professional drivers — safety and politeness are our standard practice",
        ],
        faq: [
            { q: "How does the airport meeting process work?", a: "Our driver will meet you in the arrival hall with a special sign displaying your name. This makes them very easy to identify." },
            { q: "What happens if my flight is delayed?", a: "We monitor flight arrival boards online. The driver will appear at the actual arrival time, and no additional waiting fee will be charged." },
            { q: "Is it possible to transfer from Kutaisi to Batumi or other cities?", a: "Yes, we cover all directions. You can order a transfer from any point to any destination within Georgia." },
            { q: "How many people can fit in one vehicle?", a: "We have both standard sedans (3-4 passengers) and minivans (6-8 passengers) for group transfers." },
            { q: "Does the price include parking fees?", a: "Yes, our fixed rates usually include parking costs, so you won't have to pay anything extra." },
            { q: "Can I request a child seat?", a: "Absolutely, please specify this need during advance booking, and we will ensure a safe child seat is provided." },
        ],
    },
    ru: {
        h1: "Трансфер в аэропорт / Междугородний",
        description: "mdzgholi.ge предлагает пунктуальные и комфортные трансферы в международные аэропорты Тбилиси, Кутаиси и Батуми, а также междугородние маршруты по всей Грузии. Наш сервис создан для тех, кто хочет путешествовать без стресса, экономить время и получать обслуживание высшего качества. Наши опытные водители обеспечат ваше своевременное прибытие в аэропорт или встречу по прилету. При междугородних поездках вам гарантирована комфортная и безопасная обстановка в любом направлении — будь то Батуми, Кутаиси, Казбеги или другие города.",
        benefits: [
            "Своевременное прибытие — мы всегда учитываем расписание рейсов",
            "Встреча в аэропорту — водитель встретит вас с табличкой в зале прилета",
            "Мониторинг рейсов — в случае задержки рейса ожидание бесплатно",
            "Междугородние трансферы — комфортные поездки в любую точку Грузии",
            "Ухоженный автопарк — чистые и комфортабельные автомобили для вашего удобства",
            "Фиксированные тарифы — цена известна заранее и не меняется в пути",
            "Поддержка 24/7 — свяжитесь с нами в любое время, днем или ночью",
            "Профессиональные водители — безопасность и вежливость — наши основные принципы",
        ],
        faq: [
            { q: "Как происходит встреча в аэропорту?", a: "Наш водитель встретит вас в зале прилета со специальной табличкой, на которой будет ваше имя. Это поможет вам легко его узнать." },
            { q: "Что произойдет, если мой рейс задержится?", a: "Мы следим за онлайн-табло прилетов. Водитель приедет к реальному времени посадки, и плата за ожидание не взимается." },
            { q: "Возможен ли трансфер из Кутаиси в Батуми или другие города?", a: "Да, мы обслуживаем все направления. Вы можете заказать трансфер из любой точки в любой пункт назначения в Грузии." },
            { q: "Сколько человек помещается в один автомобиль?", a: "У нас есть как стандартные седаны (3-4 пассажира), так и минивэны (6-8 пассажиров) для групповых трансферов." },
            { q: "Включена ли в стоимость плата за парковку?", a: "Да, наши фиксированные тарифы обычно включают расходы на парковку, чтобы вам не пришлось доплачивать на месте." },
            { q: "Могу ли я заказать детское кресло?", a: "Конечно, укажите это при предварительном бронировании, и мы обеспечим наличие безопасного детского кресла." },
        ],
    },
};

export default async function AirportTransferPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "airport-transfer", icon: "✈️", ...c }} />;
}
