import { getDictionary, locales } from "@/dictionaries";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "მანქანის რეცხვა თბილისში | SaveDrive",
        en: "Car Wash Service in Tbilisi | SaveDrive",
        ru: "Мойка машин в Тбилиси | SaveDrive",
    };
    const descs: Record<string, string> = {
        ka: "SaveDrive მანქანის რეცხვის სერვისი თბილისში — მოვდივართ თქვენს ლოკაციაზე, წავიყვანთ ავტომობილს, ვრეცხავთ შიგნიდან და გარედან იდეალურად და მივიყვანთ თქვენს მიერ მითითებულ მისამართზე. დაგვირეკეთ: +995 568 83 47 07",
        en: "SaveDrive car wash service in Tbilisi — we pick up your car, wash it inside and out to perfection, and deliver it to any location you specify. Call us: +995 568 83 47 07",
        ru: "Мойка машин SaveDrive в Тбилиси — забираем автомобиль, моем внутри и снаружи до идеала и доставляем по указанному вами адресу. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის რეცხვა — SaveDrive თბილისი",
        description: "SaveDrive მანქანის რეცხვის სერვისი მუშაობს მარტივად: დაგვირეკეთ, ჩვენ მოვდივართ თქვენს მისამართზე და ავტომობილს წავიყვანთ ჩვენს სარეცხ ლოკაციაზე. ვრეცხავთ შიგნიდან და გარედან იდეალურად, ხოლო შემდეგ მანქანას მივიყვანთ თქვენს მიერ მითითებულ ნებისმიერ მისამართზე. არ გჭირდება არსად წასვლა — უბრალოდ დაგვირეკეთ და ყველაფერს ჩვენ მოვაგვარებთ.",
        benefits: [
            "ავტომობილს ადგილზე მოვდივართ და ვიყვანთ — შენ არ გჭირდება არსად წასვლა",
            "სრული შიდა და გარე რეცხვა — საბარგული, სალონი, კარები, ძარა, დისკები",
            "რეცხვის შემდეგ მანქანას მივიყვანთ თქვენს მიერ მითითებულ ნებისმიერ ლოკაციაზე",
            "პროფესიონალური საშუალებები და ხელსაწყოები — პრემიუმ ხარისხი",
            "შენი დრო ფასეულია — ჩვენ ვზოგავთ მას",
            "ხელმისაწვდომი ფასები და გამჭვირვალე ტარიფები",
            "რეგულარული კლიენტებისთვის სპეციალური ფასდაკლებები",
        ],
        faq: [
            { q: "როგორ მუშაობს სერვისი?", a: "დარეკავთ, ჩვენ მოვდივართ თქვენს ლოკაციაზე, მანქანას წავიყვანთ რეცხვაზე, ვრეცხავთ შიგნიდან და გარედან, ხოლო შემდეგ მივიყვანთ თქვენს მიერ მითითებულ მისამართზე." },
            { q: "მანქანა წაიყვანეთ თუ ადგილზე რეცხავთ?", a: "ჩვენ ავტომობილს წავიყვანთ ჩვენს სარეცხ ლოკაციაზე, რათა უზრუნველვყოთ მაქსიმალური ხარისხი. რეცხვის შემდეგ მანქანას მივიყვანთ თქვენთვის სასურველ მისამართზე." },
            { q: "რას მოიცავს რეცხვა?", a: "სრული გარე რეცხვა (ძარა, დისკები, მინები), შიდა წმენდა (სალონი, საბარგული, კარის ჩარჩოები), მტვერსასრუტი, პოლირება და სურნელოვნების განახლება." },
            { q: "რამდენი დრო სჭირდება?", a: "მთელი პროცესი (აყვანა, რეცხვა, დაბრუნება) საშუალოდ 2-3 საათს იკავებს." },
            { q: "ფასი რამდენია?", a: "ფასი დამოკიდებულია მანქანის ტიპსა და შერჩეულ პაკეტზე. დაგვიკავშირდით ზუსტი ინფორმაციისთვის." },
            { q: "უსაფრთხოა ჩემი მანქანის გადაცემა?", a: "რა თქმა უნდა! ჩვენი მძღოლები სერტიფიცირებულები არიან და ავტომობილი დაზღვეულია მთელი პროცესის განმავლობაში." },
        ],
    },
    en: {
        h1: "Car Wash Service — SaveDrive Tbilisi",
        description: "SaveDrive car wash works simply: call us and we come to your location, pick up your car, and take it to our washing facility. We wash it inside and out to perfection, then deliver it to any address you specify. You don't have to do a thing — just call and we handle everything.",
        benefits: [
            "We come to your location and pick up the car — no need to go anywhere",
            "Full interior and exterior wash — trunk, cabin, doors, body, rims",
            "After washing, we deliver the car to any location you specify",
            "Professional-grade products and equipment — premium quality",
            "Your time is valuable — we save it for you",
            "Affordable prices with transparent rates",
            "Special discounts for regular customers",
        ],
        faq: [
            { q: "How does the service work?", a: "You call us, we come to your location, take your car to our wash facility, clean it inside and out, and deliver it to any address you specify." },
            { q: "Do you wash on-site or take the car?", a: "We take your car to our professional wash facility to ensure maximum quality. After washing, we deliver it to your preferred address." },
            { q: "What does the wash include?", a: "Full exterior wash (body, rims, windows), interior cleaning (cabin, trunk, door frames), vacuuming, polishing, and air freshener." },
            { q: "How long does it take?", a: "The entire process (pickup, wash, return) takes approximately 2-3 hours." },
            { q: "How much does it cost?", a: "Pricing depends on vehicle type and selected package. Contact us for exact pricing." },
            { q: "Is it safe to hand over my car?", a: "Absolutely! Our drivers are certified and your car is insured throughout the entire process." },
        ],
    },
    ru: {
        h1: "Мойка машин — SaveDrive Тбилиси",
        description: "Мойка машин SaveDrive работает просто: вы звоните, мы приезжаем на вашу локацию и забираем автомобиль. Везём на нашу моечную базу, моем снаружи и внутри до идеального состояния, а затем доставляем автомобиль по указанному вами адресу. Вам ничего не нужно делать — просто позвоните, и мы сделаем всё сами.",
        benefits: [
            "Приезжаем на вашу локацию и забираем автомобиль — вам никуда не нужно ехать",
            "Полная мойка снаружи и внутри — багажник, салон, двери, кузов, диски",
            "После мойки доставляем автомобиль по указанному вами адресу",
            "Профессиональные средства и оборудование — премиальное качество",
            "Ваше время ценно — мы его экономим",
            "Доступные цены и прозрачные тарифы",
            "Специальные скидки для постоянных клиентов",
        ],
        faq: [
            { q: "Как работает сервис?", a: "Вы звоните, мы приезжаем на вашу локацию, забираем машину, моем внутри и снаружи, а затем доставляем по указанному вами адресу." },
            { q: "Вы моете на месте или увозите?", a: "Мы забираем автомобиль на нашу профессиональную моечную базу для максимального качества. После мойки доставляем машину по вашему желанию на любой адрес." },
            { q: "Что входит в мойку?", a: "Полная наружная мойка (кузов, диски, стёкла), чистка салона (кабина, багажник, дверные рамки), пылесос, полировка и освежитель воздуха." },
            { q: "Сколько времени это занимает?", a: "Весь процесс (забор, мойка, возврат) занимает в среднем 2-3 часа." },
            { q: "Сколько это стоит?", a: "Цена зависит от типа автомобиля и выбранного пакета. Свяжитесь с нами для уточнения." },
            { q: "Безопасно ли отдавать свою машину?", a: "Конечно! Наши водители сертифицированы, а ваш автомобиль застрахован на протяжении всего процесса." },
        ],
    },
};

export default async function CarWashPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const c = content[lang] ?? content.ka;
    return <ServicePageLayout d={d} lang={lang} content={{ slug: "car-wash", icon: "🚿", ...c }} />;
}
