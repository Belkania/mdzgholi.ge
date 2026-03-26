import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "პირადი მძღოლი თბილისში | mdzgholi.ge",
        en: "Personal Driver in Tbilisi | mdzgholi.ge",
        ru: "Личный водитель в Тбилиси | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge პირადი მძღოლი თბილისში — სრული ან ნახევარი განაკვეთი. სანდო, გამოცდილი მძღოლები თქვენი კომფორტისთვის. დაგვირეკეთ: +995 568 83 47 07",
        en: "mdzgholi.ge Personal Driver in Tbilisi — full-time or part-time. Reliable, experienced drivers for your comfort. Call us: +995 568 83 47 07",
        ru: "mdzgholi.ge Личный водитель в Тбилиси — полная или частичная занятость. Надежные, опытные водители. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "პირადი მძღოლი",
        description: "გჭირდებათ პირადი მძღოლი ყოველდღიურ ცხოვრებაში ან ბიზნეს საქმიანობისთვის? mdzgholi.ge გთავაზობთ სრულ და ნახევარ განაკვეთზე პირადი მძღოლის მომსახურებას თბილისში. ჩვენი მძღოლები არიან პროფესიონალები, რომლებიც ორიენტირებულნი არიან თქვენს კომფორტზე, პუნქტუალურობასა და უსაფრთხოებაზე. იქნება ეს საქმიანი შეხვედრები, საოჯახო გადაადგილება თუ ბავშვების სკოლაში მიყვანა, ჩვენი პირადი მძღოლი თქვენს განკარგულებაშია. დაზოგეთ დრო და ენერგია, ანდეთ თქვენი ავტომობილი პროფესიონალს და ისიამოვნეთ მგზავრობით ყოველგვარი სტრესის გარეშე.",
        benefits: [
            "სრული ან ნახევარი განაკვეთი — თქვენი ინდივიდუალური განრიგის მიხედვით",
            "ერთი კონკრეტული, სანდო მძღოლი, რომელიც შეისწავლის თქვენს მარშრუტებს",
            "საოფისე, ბიზნეს და პირადი ვიზიტების უმაღლესი დონის მომსახურება",
            "პროფესიონალური და ეთიკური ქცევა — თქვენი პრესტიჟი ჩვენი პრიორიტეტია",
            "კონფიდენციალურობის სრული გარანტია — თქვენი ინფორმაცია დაცულია",
            "მოქნილი გრაფიკი — კვირა-კვირაზე ან თვიური ხელშეკრულება",
            "ავტომობილის მოვლა — მძღოლი იზრუნებს თქვენი მანქანის გამართულობაზე",
            "პუნქტუალურობა — ჩვენ არასდროს ვაგვიანებთ დანიშნულ დროს",
        ],
        faq: [
            { q: "შესაძლებელია თუ არა ყოველდღიური პირადი მძღოლის ყოლა?", a: "დიახ! ჩვენ გთავაზობთ როგორც ერთჯერად, ისე ყოველდღიურ, კვირეულ ან თვიურ სამუშაო პაკეტებს თქვენი საჭიროებიდან გამომდინარე." },
            { q: "პირადი მძღოლი ჩემივე ავტომობილით გვემსახურება?", a: "ჩვეულებრივ, სერვისი გულისხმობს მძღოლის მუშაობას თქვენს ავტომობილზე, თუმცა განსაკუთრებულ შემთხვევებში შესაძლებელია ავტომობილის უზრუნველყოფაც." },
            { q: "როგორ ხდება ფასის განსაზღვრა?", a: "ფასი დამოკიდებულია სამუშაო საათებზე, დატვირთვასა და პერიოდზე. ინდივიდუალური პაკეტის შესადგენად დაუკავშირდით ოპერატორს." },
            { q: "შემიძლია მძღოლს ვანდო ბავშვის გადაყვანა?", a: "დიახ, ჩვენს მძღოლებს გავლილი აქვთ მკაცრი შერჩევა და არიან მაღალი პასუხისმგებლობის მქონე პირები. ბევრი კლიენტი გვენდობა საოჯახო საკითხებში." },
            { q: "რა მოხდება თუ ჩემი მძღოლი ავად გახდება?", a: "ასეთ შემთხვევაში mdzgholi.ge მყისიერად მოგახსენებთ და შემოგთავაზებთ მძღოლის ჩანაცვლებას იმავე კვალიფიკაციის მქონე სპეციალისტით." },
            { q: "მძღოლი ფლობს თუ არა უცხო ენებს?", a: "ჩვენ გვყავს მძღოლები, რომლებიც საუბრობენ ინგლისურ და რუსულ ენებზე, რაც მოსახერხებელია უცხოელი სტუმრებისთვის ან პარტნიორებისთვის." },
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
