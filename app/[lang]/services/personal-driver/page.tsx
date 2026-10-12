import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "პირადი მძღოლი თბილისში — დაქირავება და გამოძახება | mdzgholi.ge",
        en: "Personal Driver in Tbilisi — Full & Part Time Chauffeur | mdzgholi.ge",
        ru: "Личный водитель в Тбилиси — Услуги персонального водителя | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "პირადი მძღოლის მომსახურება თბილისში — mdzgholi.ge. სრული ან ნახევარი განაკვეთი, სანდო და გამოცდილი მძღოლები თქვენი კომფორტული მგზავრობისთვის. ☎ 568 83 47 07",
        en: "Hire a dedicated personal driver in Tbilisi with mdzgholi.ge — full or part-time. Reliable and vetted chauffeurs for business and family. Call: +995 568 83 47 07",
        ru: "Услуги личного водителя в Тбилиси от mdzgholi.ge — полная или частичная занятость. Опытные и проверенные водители для бизнеса и семьи. Звоните: +995 568 83 47 07",
    };
    const base = "https://www.mdzgholi.ge";
    const path = "/services/personal-driver";
    const canonical = lang === "ka" ? `${base}${path}` : `${base}/${lang}${path}`;

    const kwMap: Record<string, string> = {
        ka: "პირადი მძღოლი თბილისი, personal driver Tbilisi, მძღოლი განაკვეთით, driver hire Georgia, mdzgholi.ge",
        en: "personal driver Tbilisi, private chauffeur Georgia, executive driver Tbilisi, full time driver Georgia, mdzgholi.ge",
        ru: "персональный водитель Тбилиси, личный шофер Грузия, нанять водителя Тбилиси, бизнес водитель Грузия, mdzgholi.ge",
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
        h1: "პირადი მძღოლი",
        description: "დატვირთული გრაფიკი გაქვთ, ქალაქში შეხვედრებზე გიწევთ სირბილი ან გსურთ, რომ საცობებში ნერვების მოშლის ნაცვლად გზაში მშვიდად იმუშაოთ? mdzgholi.ge გთავაზობთ პირადი მძღოლის სერვისს თბილისში — როგორც რამდენიმე საათით, ისე სრული სამუშაო დღით ან ხანგრძლივი გრაფიკით. ჩვენი მძღოლები გამოირჩევიან პუნქტუალურობით, ეთიკითა და სრული კონფიდენციალურობით. ანდეთ საჭე გამოცდილ პროფესიონალს: იარეთ საქმიან შეხვედრებზე, გააგზავნეთ ბავშვები სკოლაში ან წრეებზე უსაფრთხოდ და დაზოგეთ თქვენი ენერგია მთავარი საქმეებისთვის.",
        benefits: [
            "მოქნილი გრაფიკი — რამდენიმე საათით, სრული სამუშაო დღით ან გრძელვადიანი შეთანხმებით",
            "ერთი კონკრეტული, შემოწმებული მძღოლი — რომელიც ზედმიწევნით იცნობს თქვენს მარშრუტებსა და მოთხოვნებს",
            "ბიზნეს და საოჯახო გადაადგილება — კომფორტული და უსაფრთხო მომსახურება ყოველდღე",
            "ეთიკა და დელიკატურობა — მძღოლი ინარჩუნებს დისტანციას და პატივს სცემს თქვენს პირად სივრცეს",
            "სრული კონფიდენციალურობა — სატელეფონო საუბრები და საქმიანი დეტალები მკაცრად დაცულია",
            "პუნქტუალურობა წამების სიზუსტით — დროული დახვედრა და მარშრუტის ოპტიმალური დაგეგმვა",
            "ავტომობილის ყოველდღიური მოვლა — რეცხვა, საწვავით გამართვა და ტექნიკური წესრიგი",
            "უცხო ენების ცოდნა — უცხოელი პარტნიორებისა და სტუმრების მაღალ დონეზე მომსახურება",
        ],
        faq: [
            {
                q: "შესაძლებელია თუ არა პირადი მძღოლის აყვანა მხოლოდ რამდენიმე საათით?",
                a: "დიახ, ჩვენი სერვისი სრულიად მოქნილია. შეგიძლიათ მძღოლი დაიქირაოთ როგორც კონკრეტული შეხვედრებისთვის რამდენიმე საათით, ისე მთელი დღით ან კვირეული/თვიური გრაფიკით."
            },
            {
                q: "მძღოლი ჩემი ავტომობილით იმუშავებს თუ თქვენით?",
                a: "უმეტეს შემთხვევაში პირადი მძღოლი ემსახურება თქვენს პირად ან კორპორატიულ ავტომობილს. თუმცა, საჭიროების შემთხვევაში შეგვიძლია ავტომობილის შერჩევა და უზრუნველყოფაც."
            },
            {
                q: "როგორ გამოითვლება მომსახურების ფასი?",
                a: "ტარიფი დამოკიდებულია სამუშაო საათების რაოდენობაზე, გრაფიკის ინტენსივობასა და პერიოდზე. დაგვიკავშირდით და ოპერატორი თქვენს მოთხოვნებზე მორგებულ ოპტიმალურ პაკეტს შემოგთავაზებთ."
            },
            {
                q: "შემიძლია თუ არა მძღოლს ბავშვების სკოლასა და წრეებზე ტარება ვანდო?",
                a: "დიახ, ჩვენი მძღოლები გადიან დეტალურ შემოწმებას, აქვთ მრავალწლიანი უსაფრთხო მართვის გამოცდილება და მაღალი პასუხისმგებლობის გრძნობა. ბევრი ოჯახი სწორედ ამ მიზნით გვენდობა უკვე წლებია."
            },
            {
                q: "რა ხდება, თუ მძღოლი მოულოდნელად შეუძლოდ გახდება?",
                a: "თუ მძღოლი ავად გახდა ან გაუთვალისწინებელი მიზეზით ვერ შეძლებს მოსვლას, ჩვენ დაუყოვნებლივ ჩავანაცვლებთ მას იმავე დონის კვალიფიკაციის მქონე მძღოლით, რათა თქვენი გეგმები არ ჩაიშალოს."
            },
            {
                q: "საუბრობენ თუ არა მძღოლები უცხო ენებზე?",
                a: "დიახ, ჩვენ გვყავს მძღოლები, რომლებიც თავისუფლად ფლობენ ინგლისურ და რუსულ ენებს, რაც იდეალურია საერთაშორისო სტუმრების, დელეგაციებისა და უცხოელი პარტნიორების გადასაადგილებლად."
            },
        ],
    },
    en: {
        h1: "Personal Driver Service",
        description: "Do you need a personal driver for your daily routines or business operations? mdzgholi.ge offers high-quality full-time and part-time personal driver services in Tbilisi. Our team consists of professionals dedicated to your comfort, punctuality, and safety. Whether it's for business meetings, family commuting, or simply navigating through city traffic, our personal drivers are at your disposal. Save your time and energy by entrusting your vehicle to a professional, and enjoy a stress-free journey every day.",
        benefits: [
            "Full-time or part-time options — tailored to your individual schedule",
            "A dedicated, trusted driver who gets to know your preferred routes",
            "Premium service for office, business, and personal trips",
            "Professional etiquette and conduct — your prestige is our priority",
            "Full confidentiality guarantee — your privacy is strictly protected",
            "Flexible scheduling — available for week-by-week or monthly contracts",
            "Vehicle maintenance assistance — the driver can help with car upkeep",
            "Punctuality — we ensure arrival and departures are always on time",
        ],
        faq: [
            { q: "Can I hire a personal driver on a daily basis?", a: "Yes! We offer single-visit as well as daily, weekly, or monthly service packages based on your specific needs." },
            { q: "Will the driver use my own vehicle for the service?", a: "Typically, the service involves the driver operating your vehicle. However, car procurement can also be discussed for specific requirements." },
            { q: "How is the pricing determined for a personal driver?", a: "Pricing is based on working hours, workload, and the duration of the contract. Please contact our operator for a customized quote." },
            { q: "Can I trust the driver to transport my children?", a: "Yes, our drivers undergo rigorous background checks and are highly responsible. Many clients trust us with their family transportation needs." },
            { q: "What happens if my assigned driver is unavailable?", a: "In such cases, mdzgholi.ge will immediately notify you and provide a replacement driver of the same qualification level." },
            { q: "Do your drivers speak foreign languages?", a: "We have drivers fluent in English and Russian, which is ideal for international guests or business partners." },
        ],
    },
    ru: {
        h1: "Личный водитель",
        description: "Вам нужен личный водитель для повседневных дел или бизнеса? mdzgholi.ge предлагает услуги профессионального личного водителя на полный или неполный рабочий день в Тбилиси. Наши водители — это мастера своего дела, ориентированные на ваш комфорт, пунктуальность и безопасность. Будь то деловые встречи, семейные поездки или школьные рейсы для детей, наш личный водитель всегда готов помочь. Сэкономьте время и силы, доверив свой автомобиль профессионалу, и наслаждайтесь поездкой в спокойной обстановке.",
        benefits: [
            "Полный или неполный рабочий день — исходя из вашего расписания",
            "Персональный, надежный водитель, знающий ваши предпочтения",
            "Высокий уровень обслуживания деловых и личных поездок",
            "Профессиональный этикет — ваш статус и престиж важен для нас",
            "Полная гарантия конфиденциальности — ваши данные защищены",
            "Гибкий график — возможность недельных или месячных контрактов",
            "Уход за автомобилем — помощь водителя в поддержании авто в порядке",
            "Пунктуальность — мы ценим ваше время и всегда прибываем вовремя",
        ],
        faq: [
            { q: "Могу ли я нанять личного водителя на каждый день?", a: "Да! Мы предлагаем как разовые выезды, так и ежедневные, еженедельные или месячные пакеты услуг." },
            { q: "Водитель будет управлять моим личным автомобилем?", a: "Обычно услуга предполагает работу водителем на вашем авто. Предоставление нашего автомобиля обсуждается индивидуально." },
            { q: "Как определяется стоимость услуг личного водителя?", a: "Цена зависит от количества рабочих часов, нагрузки и срока контракта. Свяжитесь с оператором для получения точного расчета." },
            { q: "Могу ли я доверить водителю перевозку детей?", a: "Да, наши водители проходят строгий отбор и отличаются высоким уровнем ответственности. Многие клиенты доверяют нам семейные нужды." },
            { q: "Что делать, если мой постоянный водитель заболеет?", a: "В таких случаях mdzgholi.ge оперативно предоставит замену — водителя такой же квалификации." },
            { q: "Владеют ли ваши водители иностранными языками?", a: "У нас есть водители, говорящие на английском и русском языках, что удобно для иностранных граждан и партнеров." },
        ],
    },
};

export default async function PersonalDriverPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "personal-driver", icon: "🧑‍✈️", ...c }} />;
}
