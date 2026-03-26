import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "ფხიზელი მძღოლი საქართველოში | mdzgholi.ge",
        en: "Sober Driver in Georgia | mdzgholi.ge",
        ru: "Трезвый водитель в Грузии | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "mdzgholi.ge-ის ფხიზელი მძღოლი: დალიე უზრუნველად, ჩვენ შენი მანქანით მიგიყვანთ სახლამდე. 24/7. +995 568 83 47 07",
        en: "mdzgholi.ge sober driver service: enjoy your evening, we drive you home in your own car. 24/7. +995 568 83 47 07",
        ru: "Трезвый водитель mdzgholi.ge: отдыхайте, мы довезём вас домой на вашей машине. 24/7. +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "ფხიზელი მძღოლი საქართველოში",
        description: "გაინაბეთ სიამოვნებით — mdzgholi.ge-ის ფხიზელი მძღოლი ჩამოდის სადაც ხართ და შენი მანქანით გიყვანს სახლამდე. ჩვენი სერვისი იდეალურია მათთვის, ვინც აფასებს უსაფრთხოებას და კომფორტს. ნასვამი მძღოლის მომსახურება ხელმისაწვდომია 24/7 თბილისსა და მიმდებარე ტერიტორიებზე. პროფესიონალი მძღოლი უზრუნველყოფს თქვენს მშვიდ მგზავრობას სახლამდე, ხოლო თქვენი ავტომობილი განთავსდება თქვენსავე ავტოფარეხში ან ეზოში. არ დაიწყოთ რისკიანი მართვა — მენდეთ mdzgholi.ge-ს და ისიამოვნეთ საღამოთი.",
        benefits: [
            "თქვენი ავტომობილი დარჩება სახლთან — არ არის საჭირო მეორე დღეს დაბრუნება",
            "გამოცდილი, სერტიფიცირებული მძღოლები მრავალწლიანი სტაჟით",
            "24/7 ხელმისაწვდომობა — ყოველდღე, ღამე-ღამობით, უქმე დღეებში",
            "სწრაფი გამოძახება — მძღოლი საშუალოდ 15-20 წუთში ჩამოდის",
            "გამჭვირვალე ფასი — წინასწარ შეთანხმებული ტარიფი, ფარული ხარჯის გარეშე",
            "ოპერატორების მხარდაჭერა ქართულად, ინგლისურად და რუსულად",
            "უსაფრთხოების გარანტია — ჩვენ ვუფრთხილდებით თქვენს ქონებას და ჯანმრთელობას",
            "კომფორტული მგზავრობა — თქვენ ისვენებთ, ჩვენ ვმართავთ",
        ],
        faq: [
            { q: "როგორ შეიძლება ფხიზელი მძღოლის გამოძახება?", a: "უბრალოდ დაგვიკავშირდით ნომერზე +995 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. ოპერატორი გეხმაურებათ მომენტალურად და გამოგიგზავნით უახლოეს მძღოლს." },
            { q: "მძღოლი ჩაჯდება ჩემს მანქანაში?", a: "დიახ! ჩვენი სერვისის არსი სწორედ იმაშია, რომ ჩვენი მძღოლი მართავს თქვენს ავტომობილს და მიგიყვანთ დანიშნულების ადგილამდე. მძღოლი კი ჩვენი კოლეგის მანქანით დაბრუნდება." },
            { q: "რა ღირს ფხიზელი მძღოლის მომსახურება?", a: "ფასი იწყება 30 ლარიდან თბილისის ფარგლებში. ზუსტი ღირებულება დამოკიდებულია მანძილზე და მარშრუტზე. დეტალებისთვის დაუკავშირდით ოპერატორს." },
            { q: "მუშაობთ ღამის 4 საათზე ან დღესასწაულებზე?", a: "დიახ, mdzgholi.ge მუშაობს წელიწადში 365 დღე, 24 საათი. ჩვენი გუნდი მზად არის დაგეხმაროთ ნებისმიერ დროს." },
            { q: "მჭირდება თუ არა წინასწარ დაჯავშნა?", a: "წინასწარი დაჯავშნა არ არის სავალდებულო, თუმცა სასურველია პიკის საათებში ან სადღესასწაულო პერიოდში, რათა დაზოგოთ დრო." },
            { q: "რა მოხდება თუ მძღოლი ავარიაში მოჰყვება ჩენი მანქანით?", a: "ჩვენი ყველა მძღოლი არის პროფესიონალი და პასუხისმგებელი. ნებისმიერი გაუთვალისწინებელი შემთხვევისას ჩვენ ვიღებთ პასუხისმგებლობას შეთანხმებისამებრ." },
        ],
    },
    en: {
        h1: "Sober Driver Service in Georgia",
        description: "Enjoy your night out without any worries — mdzgholi.ge's professional sober driver comes to your location and drives you home safely in your own car. This service is perfect for those who prioritize safety and want to avoid the risks of driving under the influence. Available 24/7 in Tbilisi and surrounding areas, our certified drivers ensure a smooth journey to your doorstep while your vehicle is parked securely at home. Don't risk it — trust mdzgholi.ge for a reliable and stress-free ride home.",
        benefits: [
            "Your car arrives home with you — no need to retrieve it the next day",
            "Experienced, certified drivers with years of professional experience",
            "24/7 availability — every day, including nights, weekends, and holidays",
            "Fast response time — a driver typically arrives within 15-20 minutes",
            "Transparent pricing — agreed upfront with no hidden fees or surprises",
            "Multi-language support in Georgian, English, and Russian",
            "Safety guarantee — we care for your vehicle and your peace of mind",
            "Comfortable ride — you relax in the passenger seat while we drive",
        ],
        faq: [
            { q: "How do I book a sober driver?", a: "Simply call us at +995 568 83 47 07 or message us on WhatsApp. Our operator will respond within minutes and dispatch the nearest driver." },
            { q: "Does the driver use my own car?", a: "Yes! The core of our service is that our professional driver takes the wheel of your vehicle to drive you home. The driver then returns separately via our support vehicle." },
            { q: "What is the cost of the sober driver service?", a: "Prices start from 30 GEL within Tbilisi. The final cost depends on the distance and specific route. Contact our operator for a precise quote." },
            { q: "Are you available at 4 AM or during public holidays?", a: "Yes, mdzgholi.ge operates 365 days a year, 24 hours a day. Our team is always ready to assist you regardless of the time." },
            { q: "Do I need to book in advance?", a: "Advance booking is not required, but it is recommended during peak hours or holidays to ensure minimal wait time." },
            { q: "What happens in case of an accident while your driver is driving?", a: "Our drivers are highly skilled professionals. In the unlikely event of an incident, we take responsibility as per our internal protocols and agreements." },
        ],
    },
    ru: {
        h1: "Трезвый водитель в Грузии",
        description: "Отдыхайте с удовольствием и без забот — профессиональный трезвый водитель mdzgholi.ge приедет к вам и доставит вас домой на вашем собственном автомобиле. Эта услуга идеально подходит для тех, кто ценит безопасность и не хочет рисковать, садясь за руль после вечеринки. Мы работаем 24/7 в Тбилиси и окрестностях. Наши сертифицированные водители гарантируют спокойную поездку, а ваш автомобиль будет аккуратно припаркован у вашего дома. Не рискуйте — доверьтесь mdzgholi.ge для надежной поездки домой.",
        benefits: [
            "Ваша машина едет домой вместе с вами — не нужно забирать её на следующий день",
            "Опытные, сертифицированные водители с многолетним стажем вождения",
            "Доступны 24/7 — круглосуточно, включая выходные и праздничные дни",
            "Оперативный приезд — водитель будет у вас в среднем через 15-20 минут",
            "Прозрачное ценообразование — стоимость согласовывается заранее, без скрытых платежей",
            "Поддержка на грузинском, английском и русском языках",
            "Гарантия безопасности — мы бережно относимся к вашему имуществу и здоровью",
            "Максимальный комфорт — вы отдыхаете, пока мы управляем вашим авто",
        ],
        faq: [
            { q: "Как заказать услугу трезвого водителя?", a: "Просто позвоните нам по номеру +995 568 83 47 07 или напишите в WhatsApp. Оператор ответит мгновенно и отправит к вам ближайшего водителя." },
            { q: "Водитель действительно будет управлять моей машиной?", a: "Да! Суть нашей услуги заключается в том, что наш профессиональный водитель садится за руль вашего авто и везет вас домой. Обратно он возвращается на машине коллеги." },
            { q: "Сколько стоит услуга трезвого водителя?", a: "Цена начинается от 30 лари в пределах Тбилиси. Итоговая стоимость зависит от расстояния и маршрута. Уточняйте детали у оператора." },
            { q: "Работаете ли вы в 4 утра или в праздники?", a: "Да, mdzgholi.ge работает 365 дней в году, 24 часа в сутки. Мы всегда на связи и готовы помочь в любое время." },
            { q: "Нужно ли бронировать водителя заранее?", a: "Предварительное бронирование не обязательно, но рекомендуется в праздничные дни или часы пик для экономии вашего времени." },
            { q: "Что если произойдет ДТП, пока ваш водитель за рулем?", a: "Все наши водители — профессионалы высокого класса. В случае любого инцидента мы несем ответственность в соответствии с нашими протоколами." },
        ],
    },
};

export default async function SoberDriverPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "sober-driver", icon: "🍷", ...c }} />;
}
