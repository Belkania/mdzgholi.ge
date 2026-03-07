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
        ka: "SaveDrive მანქანის რეცხვის სერვისი თბილისში — ჩვენ მოვდივართ თქვენს ლოკაციაზე, წავიყვანთ ავტომობილს, ვრეცხავთ შიგნიდან და გარედან იდეალურად და ვაბრუნებთ აყვანის ადგილზე. დაგვირეკეთ: +995 568 83 47 07",
        en: "SaveDrive car wash service in Tbilisi — we pick up your car from your location, wash it inside and out to perfection, and return it right back. Call us: +995 568 83 47 07",
        ru: "Мойка машин SaveDrive в Тбилиси — забираем автомобиль с вашей локации, моем внутри и снаружи до идеала и возвращаем обратно. Звоните: +995 568 83 47 07",
    };
    return { title: titles[lang] ?? titles.ka, description: descs[lang] ?? descs.ka };
}

const content: Record<string, { h1: string; description: string; benefits: string[]; faq: { q: string; a: string }[] }> = {
    ka: {
        h1: "მანქანის რეცხვა — SaveDrive თბილისი",
        description: "SaveDrive მანქანის რეცხვის სერვისი მუშაობს მარტივად: დაგვირეკეთ, ჩვენ მოვდივართ თქვენს მისამართზე, ავტომობილს მივიყვანთ ჩვენს სარეცხ ლოკაციაზე, ვრეცხავთ შიგნიდან და გარედან იდეალურად, და ვაბრუნებთ ზუსტად იმავე ადგილზე, საიდანაც ავიყვანეთ. შენ არაფრის გაკეთება არ გჭირდება — უბრალოდ დაგვირეკე და ჩვენ ყველაფერს თავად მოვაგვარებთ.",
        benefits: [
            "ავტომობილს ადგილზე მოვდივართ და ვიყვანთ — შენ არ გჭირდება არსად წასვლა",
            "სრული შიდა და გარე რეცხვა — საბარგული, სალონი, კარები, ძარა, დისკები",
            "რეცხვის შემდეგ მანქანას ვაბრუნებთ ზუსტად იმავე ლოკაციაზე",
            "პროფესიონალური საშუალებები და ხელსაწყოები — პრემიუმ ხარისხი",
            "შენი დრო ფასეულია — ჩვენ ვზოგავთ მას",
            "ხელმისაწვდომი ფასები და გამჭვირვალე ტარიფები",
            "რეგულარული კლიენტებისთვის სპეციალური ფასდაკლებები",
        ],
        faq: [
            { q: "როგორ მუშაობს სერვისი?", a: "დარეკავთ, ჩვენ მოვდივართ თქვენს ლოკაციაზე, მანქანას მივიყვანთ რეცხვაზე, ვრეცხავთ შიგნიდან და გარედან და ვაბრუნებთ იმავე ადგილზე." },
            { q: "მანქანა წაიყვანეთ თუ ადგილზე რეცხავთ?", a: "ჩვენ ავტომობილს წავიყვანთ ჩვენს სარეცხ ლოკაციაზე, რათა უზრუნველვყოთ მაქსიმალური ხარისხი, და შემდეგ დავაბრუნებთ." },
            { q: "რას მოიცავს რეცხვა?", a: "სრული გარე რეცხვა (ძარა, დისკები, მინები), შიდა წმენდა (სალონი, საბარგული, კარის ჩარჩოები), მტვერსასრუტი, პოლირება და სურნელოვნების განახლება." },
            { q: "რამდენი დრო სჭირდება?", a: "მთელი პროცესი (აყვანა, რეცხვა, დაბრუნება) საშუალოდ 2-3 საათს იკავებს." },
            { q: "ფასი რამდენია?", a: "ფასი დამოკიდებულია მანქანის ტიპსა და შერჩეულ პაკეტზე. დაგვიკავშირდით ზუსტი ინფორმაციისთვის." },
            { q: "უსაფრთხოა ჩემი მანქანის გადაცემა?", a: "რა თქმა უნდა! ჩვენი მძღოლები სერტიფიცირებულები არიან და ავტომობილი დაზღვეულია მთელი პროცესის განმავლობაში." },
        ],
    },
    en: {
        h1: "Car Wash Service — SaveDrive Tbilisi",
        description: "SaveDrive car wash works simply: call us and we come to your location, pick up your car, take it to our washing facility, wash it inside and out to perfection, and return it to the exact same spot where we picked it up. You don't have to do a thing — just call and we handle everything.",
        benefits: [
            "We come to your location and pick up the car — no need to go anywhere",
            "Full interior and exterior wash — trunk, cabin, doors, body, rims",
            "Car returned to the exact same location after washing",
            "Professional-grade products and equipment — premium quality",
            "Your time is valuable — we save it for you",
            "Affordable prices with transparent rates",
            "Special discounts for regular customers",
        ],
        faq: [
            { q: "How does the service work?", a: "You call us, we come to your location, take your car to our wash facility, clean it inside and out, and bring it back to the same spot." },
            { q: "Do you wash on-site or take the car?", a: "We take your car to our professional wash facility to ensure maximum quality, then return it to you." },
            { q: "What does the wash include?", a: "Full exterior wash (body, rims, windows), interior cleaning (cabin, trunk, door frames), vacuuming, polishing, and air freshener." },
            { q: "How long does it take?", a: "The entire process (pickup, wash, return) takes approximately 2-3 hours." },
            { q: "How much does it cost?", a: "Pricing depends on vehicle type and selected package. Contact us for exact pricing." },
            { q: "Is it safe to hand over my car?", a: "Absolutely! Our drivers are certified and your car is insured throughout the entire process." },
        ],
    },
    ru: {
        h1: "Мойка машин — SaveDrive Тбилиси",
        description: "Мойка машин SaveDrive работает просто: вы звоните, мы приезжаем на вашу локацию, забираем автомобиль, везём на нашу моечную базу, моем снаружи и внутри до идеального состояния и возвращаем ровно на то же место, откуда забрали. Вам ничего не нужно делать — просто позвоните, и мы сделаем всё сами.",
        benefits: [
            "Приезжаем на вашу локацию и забираем автомобиль — вам никуда не нужно ехать",
            "Полная мойка снаружи и внутри — багажник, салон, двери, кузов, диски",
            "После мойки возвращаем машину на то же место",
            "Профессиональные средства и оборудование — премиальное качество",
            "Ваше время ценно — мы его экономим",
            "Доступные цены и прозрачные тарифы",
            "Специальные скидки для постоянных клиентов",
        ],
        faq: [
            { q: "Как работает сервис?", a: "Вы звоните, мы приезжаем на вашу локацию, забираем машину, моем внутри и снаружи и возвращаем на то же место." },
            { q: "Вы моете на месте или увозите?", a: "Мы забираем автомобиль на нашу профессиональную моечную базу для максимального качества, а затем возвращаем обратно." },
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
