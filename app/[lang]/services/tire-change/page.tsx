import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "საბურავის შეცვლა და შეკეთება ადგილზე 24/7 | mdzgholi.ge",
        en: "Mobile Tire Change & Repair in Tbilisi 24/7 | mdzgholi.ge",
        ru: "Замена и ремонт шин на выезде в Тбилиси 24/7 | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "საბურავის შეცვლა და დაზიანებული საბურავის შეკეთება ადგილზე გამოძახებით თბილისში 24/7. სათადარიგო ბორბლის დაყენება, დაბერვა 15-20 წთ-ში: +995 568 83 47 07",
        en: "Mobile tire change and flat tire puncture repair on-site in Tbilisi 24/7. Spare wheel mounting, inflation in 15-20 min. Call: +995 568 83 47 07",
        ru: "Замена колеса на запаску и ремонт проколов шин на выезде в Тбилиси 24/7. Быстрый приезд мастера за 15-20 минут. Звоните: +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/tire-change";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    const kwMap: Record<string, string> = {
        ka: "საბურავის შეცვლა, საბურავის შეკეთება ადგილზე, საბურავის გამოცვლა, დაშვებული საბურავი, სათადარიგო საბურავი, ვულკანიზაცია გამოძახებით, tire change Tbilisi, საბურავის შეცვლა თბილისში",
        en: "mobile tire change Tbilisi, flat tire repair Georgia, roadside tire service, spare wheel mounting Tbilisi, 24/7 tire assist, mdzgholi.ge",
        ru: "замена колеса на выезде Тбилиси, ремонт прокола шин на месте, мобильный шиномонтаж Грузия, выездная вулканизация, mdzgholi.ge",
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
        h1: "საბურავის შეცვლა და შეკეთება ადგილზე",
        description: "გზაში მოულოდნელად საბურავი დაგეშვათ ან ლურსმანზე შეჯექით? საბარგულში არც დომკრატი აღმოგაჩნდათ, არც ქანჩი და არც ხელების დასვრა გინდათ შუა ქალაქში? mdzgholi.ge-ის მობილური ჯგუფი 15-20 წუთში მოვა თქვენს ლოკაციაზე. ჩვენი ეკიპაჟი აღჭურვილია მძლავრი ჰიდრავლიკური დომკრატებით, იმპაქტ-გასაღებებით, სწრაფი შეკეთების კომპლექტითა და მობილური კომპრესორით. ადგილზევე დაგიყენებთ სათადარიგო ბორბალს („ზაპასკას“), შევაკეთებთ ნაჩხვლეტს სპეციალური ჟგუტით ან დაგიბერავთ საბურავს სწორ წნევამდე. ვმუშაობთ 24/7, თბილისის ნებისმიერ უბანში.",
        benefits: [
            "დახმარება ადგილზე 15-20 წუთში — არ გჭირდებათ ევაკუატორის ძებნა და ვულკანიზაციაში წვალება",
            "ნაჩხვლეტის შეკეთება ადგილზევე — ჟგუტის ჩასმა ბორბლის მოხსნის გარეშე, თუ სათადარიგო საბურავი არ გაქვთ",
            "სათადარიგო საბურავის სწრაფი მონტაჟი — ბორბლის უსაფრთხო შეცვლა და ქანჩების სწორი დაჭერა",
            "საბურავის დაბერვა და წნევის გასწორება — მძლავრი ციფრული კომპრესორით ქარხნულ ნორმამდე",
            "გაჭედილი ან გაფუჭებული ბოლტების მოხსნა — პროფესიონალური ხელსაწყოებით, დისკის დაზიანების გარეშე",
            "ნებისმიერი ავტომობილისთვის — მსუბუქი სედანები, მძიმე ჯიპები, კროსოვერები და მიკროავტობუსები",
            "24/7 გამოძახება — ხელმისაწვდომია ღამით, უქმეებზე, წვიმასა და თოვლში",
            "ფიქსირებული ტარიფი — ფასს წინასწარ გითანხმებთ ოპერატორი ყოველგვარი დამატებითი ხარჯის გარეშე",
        ],
        faq: [
            {
                q: "რა ვქნა, თუ საბურავი გაიხვრიტა, მაგრამ სათადარიგო ბორბალი („ზაპასკა“) არ მაქვს?",
                a: "პრობლემა არ არის. ჩვენს ეკიპაჟს თან აქვს სპეციალური სარემონტო კომპლექტი (ე.წ. ჟგუტი). თუ საბურავი ლურსმანმა ან ხრახნმა გახვრიტა, ადგილზევე ვარემონტებთ ნაჩხვლეტს და ვბერავთ ბორბალს. ხოლო თუ საბურავი გვერდიდანაა გახეული და აღდგენას არ ექვემდებარება, ჩვენივე ევაკუატორი დაუყოვნებლივ მიგიყვანთ უახლოეს ვულკანიზაციაში."
            },
            {
                q: "რამდენ ხანში მოვა სპეციალისტი ჩემთან?",
                a: "თბილისის მასშტაბით საშუალო მოსვლის დრო 15-20 წუთია. ზარის დროსვე ოპერატორი ზუსტად გეტყვით, სად იმყოფება უახლოესი მორიგე ეკიპაჟი."
            },
            {
                q: "საბურავის დასაბერი კომპრესორი თან გაქვთ?",
                a: "დიახ, ყველა ჩვენს მანქანას თან აქვს პროფესიონალური მობილური კომპრესორი და წნევის ზუსტი მანომეტრი. შეცვლის შემდეგ აუცილებლად ვამოწმებთ და ვბერავთ საბურავს ქარხნული სტანდარტის მიხედვით."
            },
            {
                q: "ჯიპებისა და დიდი ზომის დისკების შეცვლას შეძლებთ?",
                a: "დიახ, ჩვენი მაღალტონიანი ჰიდრავლიკური დომკრატები და პროფესიონალური ელექტრო გასაღებები გათვლილია მძიმე ჯიპებზე, პიკაპებსა და დაბალპროფილიან დისკებზე."
            },
            {
                q: "როგორ ხდება ფასის შეთანხმება?",
                a: "დაგვირეკეთ ნომერზე +995 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. ოპერატორს ეტყვით ლოკაციას და რა პრობლემა გაქვთ — მიიღებთ კონკრეტულ, ფიქსირებულ ფასს, რომელიც ადგილზე აღარ შეიცვლება."
            },
            {
                q: "ღამის საათებში თუ მუშაობთ?",
                a: "დიახ, ჩვენი საავარიო ბრიგადა მუშაობს 24/7, უწყვეტად, დღისით და ღამით."
            },
        ],
    },
    en: {
        h1: "Mobile Tire Change & Repair in Tbilisi",
        description: "Got a flat or damaged tire unexpectedly on the road? Don't have the right tools, jack, or spare wheel? mdzgholi.ge offers 24/7 on-demand roadside tire change and on-site tire repair across Tbilisi and nearby areas. Our mobile service technicians carry hydraulic jacks, impact wrenches, professional puncture repair kits, and heavy-duty portable air compressors. We will swap your flat tire for your spare, repair tread punctures with vulcanization plugs on the spot, or inflate your tires so you can continue your journey safely.",
        benefits: [
            "On-site tire service — no need for expensive towing to a stationary workshop",
            "Fast technician arrival — 15-20 minutes to any district in Tbilisi",
            "Emergency puncture plug repair — drive safely even without a spare tire",
            "Spare wheel installation & inflation — correct pressure set to factory spec",
            "Safe removal of stuck or over-torqued lug nuts — without wheel rim damage",
            "24/7 availability — night hours, weekend emergencies, and adverse weather",
            "Full mobile equipment — hydraulic jacks, impact tools, and digital compressors",
            "Transparent pricing — upfront agreed rates with zero hidden charges",
        ],
        faq: [
            {
                q: "What should I do if my tire is flat and I don't have a spare wheel?",
                a: "Our mobile technicians carry professional puncture repair kits that allow us to seal tread holes on the spot without taking the wheel off. If the damage is catastrophic, our in-house tow truck can safely transport your car."
            },
            {
                q: "How fast will the technician arrive for a tire change?",
                a: "Across Tbilisi, our average arrival time is 15-20 minutes from the initial call."
            },
            {
                q: "Do you bring a portable air compressor?",
                a: "Yes, our service vehicles are equipped with professional air compressors and calibrated gauges to inflate tires to optimal manufacturer pressure."
            },
            {
                q: "Can you service SUVs, pickup trucks, and minivans?",
                a: "Yes, our heavy-duty hydraulic lifting equipment easily handles passenger sedans, SUVs, crossovers, and light commercial vehicles."
            },
            {
                q: "How is pricing determined?",
                a: "Simply call +995 568 83 47 07, state your location and vehicle model, and our dispatcher will provide a clear, upfront fixed price."
            },
            {
                q: "Do you provide emergency assistance at night?",
                a: "Yes, mdzgholi.ge operates 24/7 every day of the year, including late nights and public holidays."
            },
        ],
    },
    ru: {
        h1: "Замена и ремонт шин на выезде в Тбилиси",
        description: "Спустило колесо прямо в пути или пробили шину? Нет домкрата, баллонного ключа или запаски? Служба mdzgholi.ge предлагает круглосуточную замену колес и выездной ремонт шин в Тбилиси 24/7. Наша мобильная бригада оснащена мощными гидравлическими домкратами, гайковертами, ремкомплектами для быстрой заделки проколов (жгутами) и автомобильными компрессорами. Мы быстро установим запасное колесо, устраним прокол на месте или подкачаем шины до нужного давления, чтобы вы могли продолжить безопасное движение.",
        benefits: [
            "Помощь на месте — без вызова эвакуатора и очередей в стационарный шиномонтаж",
            "Быстрый приезд мастера — 15-20 минут в любую точку Тбилиси",
            "Ремонт прокола на выезде — установим жгут даже при отсутствии запасного колеса",
            "Установка запаски и подкачка — выставление точного рабочего давления",
            "Откручивание прикипевших и сорванных болтов — без риска повреждения диска",
            "Круглосуточный сервис 24/7 — работаем ночью, в дождь и снег",
            "Профессиональный инструмент — домкраты, пневмоинструмент и компрессоры",
            "Честная цена — предварительное согласование стоимости без переплат",
        ],
        faq: [
            {
                q: "Что делать, если колесо пробито, а запаски нет?",
                a: "Наш специалист выполнит ремонт прокола протектора на месте с помощью специального жгута. Если повреждение боковое и ремонту не подлежит, наш эвакуатор оперативно доставит авто до ближайшего шиномонтажа."
            },
            {
                q: "Сколько времени занимает приезд мастера?",
                a: "В среднем наш специалист прибывает на место за 15-20 минут после звонка."
            },
            {
                q: "Есть ли у вас компрессор для подкачки колес?",
                a: "Да, все дежурные машины укомплектованы портативными компрессорами и манометрами для точной проверки и накачки давления."
            },
            {
                q: "Обслуживаете ли вы внедорожники и минивэны?",
                a: "Да, наше оборудование рассчитано на обслуживание легковых авто, тяжелых джипов и коммерческих фургонов."
            },
            {
                q: "Как формируется стоимость услуги?",
                a: "Позвоните по номеру +995 568 83 47 07, назовите адрес и ситуацию — оператор назовет фиксированную и прозрачную цену."
            },
            {
                q: "Работает ли шиномонтаж на выезде ночью?",
                a: "Да, техпомощь mdzgholi.ge доступна круглосуточно 24/7, включая выходные и праздничные дни."
            },
        ],
    },
};

export default async function TireChangePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "tire-change", icon: "🛞", ...c }} />;
}
