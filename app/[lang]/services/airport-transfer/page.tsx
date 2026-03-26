import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "აეროპორტის ტრანსფერი / საქალაქთაშორისო | mdzgholi.ge",
        en: "Airport Transfer & Intercity | mdzgholi.ge",
        ru: "Трансфер в аэропорт / Междугородний | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge აეროპორტის ტრანსფერი და საქალაქთაშორისო მარშრუტები — ბათუმი, ქუთაისი. პუნქტუალური, კომფორტული. 24/7. დაგვირეკეთ: +995 568 83 47 07",
        en: "mdzgholi.ge airport transfer & intercity routes — Batumi, Kutaisi. Punctual, comfortable. 24/7. Call: +995 568 83 47 07",
        ru: "Трансфер в аэропорт и междугородний mdzgholi.ge — Батуми, Кутаиси. Пунктуальный, комфортный. 24/7. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "აეროპორტის ტრანსფერი / საქალაქთაშორისო",
        description: "mdzgholi.ge გთავაზობთ პუნქტუალურ და კომფორტულ ტრანსფერს თბილისის, ქუთაისისა და ბათუმის საერთაშორისო აეროპორტებამდე, ასევე საქალაქთაშორისო მარშრუტებს მთელი საქართველოს მასშტაბით. ჩვენი სერვისი შექმნილია მათთვის, ვისაც სურს იმგზავროს სტრესის გარეშე, დაზოგოს დრო და მიიღოს უმაღლესი ხარისხის მომსახურება. ჩვენი გამოცდილი მძღოლები უზრუნველყოფენ თქვენს დროულ გამოცხადებას აეროპორტში ან დახვედრას ჩამოფრენისას. საქალაქთაშორისო მგზავრობისას კი გარანტირებული გაქვთ კომფორტული და უსაფრთხო გარემო ნებისმიერი მიმართულებით — იქნება ეს ბათუმი, ქუთაისი, ყაზბეგი თუ სხვა.",
        benefits: [
            "დროული გამოცხადება — ჩვენ ყოველთვის ვითვალისწინებთ ფრენის განრიგს",
            "დახვედრა აეროპორტში — მძღოლი დაგხვდებათ სახელობითი ბარათით ჩამოსვლის დარბაზში",
            "ფრენის მონიტორინგი — რეისის დაგვიანების შემთხვევაში, ლოდინი უფასოა",
            "საქალაქთაშორისო ტრანსფერები — კომფორტული მგზავრობა საქართველოს ნებისმიერ წერტილში",
            "მოწესრიგებული ავტოპარკი — სუფთა და კომფორტული ავტომობილები თქვენი კომფორტისთვის",
            "ფიქსირებული ტარიფები — ფასი წინასწარ არის ცნობილი და არ იცვლება გზაში",
            "24/7 მხარდაჭერა — დაგვიკავშირდით ნებისმიერ დროს, დღისით თუ ღამით",
            "პროფესიონალი მძღოლები — უსაფრთხოება და თავაზიანობა ჩვენი პრაქტიკაა",
        ],
        faq: [
            { q: "როგორ ხდება დახვედრა აეროპორტში?", a: "ჩვენი მძღოლი დაგხვდებათ ჩამოსვლის დარბაზში სპეციალური ბარათით, რომელზეც ეწერება თქვენი სახელი. ეს დაგეხმარებათ მის მარტივად ამოცნობაში." },
            { q: "რა მოხდება თუ ჩემი ფრენა დააგვიანებს?", a: "ჩვენ ვადევნებთ თვალყურს ფრენების ონლაინ ტაბლოს. მძღოლი გამოცხადდება რეალური ჩამოფრენის დროს და ლოდინის საფასური არ დაგერიცხებათ." },
            { q: "შესაძლებელია თუ არა ტრანსფერი ქუთაისიდან ბათუმში ან სხვა ქალაქში?", a: "დიახ, ჩვენ ვფარავთ ყველა მიმართულებას. შეგიძლიათ შეუკვეთოთ ტრანსფერი ნებისმიერი წერტილიდან ნებისმიერი მიმართულებით საქართველოში." },
            { q: "რამდენი ადამიანი ეტევა ერთ ავტომობილში?", a: "ჩვენ გვყავს როგორც სტანდარტული სედანები (3-4 მგზავრი), ისე მინივენები (6-8 მგზავრი) ჯგუფური ტრანსფერებისთვის." },
            { q: "ფასში შედის თუ არა პარკინგის გადასახადი?", a: "დიახ, ჩვენი ფიქსირებული ტარიფები ჩვეულებრივ მოიცავს პარკინგის ხარჯებსაც, რათა თქვენ არ მოგიწიოთ დამატებითი გადახდა." },
            { q: "შემიძლია თუ არა ბავშვის სავარძლის მოთხოვნა?", a: "რა თქმა უნდა, წინასწარი დაჯავშნისას მიუთითეთ საჭიროება და ჩვენ უზრუნველვყოფთ ბავშვისთვის უსაფრთხო სავარძლის განთავსებას." },
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
