import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/JsonLd";

const PHONE_RAW = "995568834707";
const PHONE_TEL = "+995568834707";
const BASE = "https://www.mdzgholi.ge";

const ALL_SERVICES: Record<string, { slug: string; icon: string; ka: string; en: string; ru: string }> = {
    "sober-driver": { slug: "sober-driver", icon: "🍷", ka: "ფხიზელი მძღოლი", en: "Sober Driver", ru: "Трезвый водитель" },
    "personal-driver": { slug: "personal-driver", icon: "🧑‍✈️", ka: "პირადი მძღოლი", en: "Personal Driver", ru: "Личный водитель" },
    "evacuator": { slug: "evacuator", icon: "🚛", ka: "ევაკუატორი", en: "Tow Truck", ru: "Эвакуатор" },
    "car-wash": { slug: "car-wash", icon: "🚿", ka: "მანქანის რეცხვა", en: "Car Wash", ru: "Мойка машин" },
    "airport-transfer": { slug: "airport-transfer", icon: "✈️", ka: "აეროპორტის ტრანსფერი", en: "Airport Transfer", ru: "Трансфер" },
    "battery-charging": { slug: "battery-charging", icon: "🔋", ka: "აკუმულატორის დატენვა", en: "Battery Charging", ru: "Зарядка аккумулятора" },
    "tire-change": { slug: "tire-change", icon: "🛞", ka: "საბურავის შეცვლა", en: "Tire Change", ru: "Замена шин" },
};

const TBILISI_DISTRICTS: Record<string, string[]> = {
    ka: [
        "ვაკე", "ვერა", "მთაწმინდა", "რუსთაველი", "სოლოლაკი", "საბურთალო", "ბაგები", "ნუცუბიძე",
        "დიდი დიღომი", "დიღმის მასივი", "დიდუბე", "ჩუღურეთი", "ისანი", "სამგორი", "ვარკეთილი",
        "ვაზისუბანი", "ავლაბარი", "ორთაჭალა", "გლდანი", "ნაძალადევი", "თემქა", "მუხიანი",
        "წყნეთი", "ტაბახმელა", "კოჯორი", "მცხეთა", "რუსთავი"
    ],
    en: [
        "Vake", "Vera", "Mtatsminda", "Rustaveli", "Sololaki", "Saburtalo", "Bagebi", "Nutsubidze",
        "Didi Dighomi", "Dighomi Massive", "Didube", "Chugureti", "Isani", "Samgori", "Varketili",
        "Vazisubani", "Avlabari", "Ortachala", "Gldani", "Nadzaladevi", "Temqa", "Mukhiani",
        "Tskneti", "Tabakhmela", "Kojori", "Mtskheta", "Rustavi"
    ],
    ru: [
        "Ваке", "Вера", "Мтацминда", "Руставели", "Сололаки", "Сабуртало", "Багеби", "Нуцубидзе",
        "Диди Дигоми", "Дигомский массив", "Дидубе", "Чугурети", "Исани", "Самгори", "Варкетили",
        "Вазисубани", "Авлабари", "Ортачала", "Глдани", "Надзаладеви", "Темка", "Мухиани",
        "Цхнети", "Табахмела", "Коджори", "Мцхета", "Рустави"
    ],
};

interface ServiceContent {
    slug: string;
    icon: string;
    h1: string;
    description: string;
    benefits: string[];
    faq: { q: string; a: string }[];
}

interface ServicePageLayoutProps {
    d: Dictionary;
    lang: string;
    content: ServiceContent;
}

export function ServicePageLayout({ d, lang, content }: ServicePageLayoutProps) {
    const otherServices = Object.values(ALL_SERVICES).filter((s) => s.slug !== content.slug);
    const svcName = ALL_SERVICES[content.slug]?.[lang as "ka" | "en" | "ru"] ?? ALL_SERVICES[content.slug]?.ka ?? "";
    const otherSectionTitle = lang === "ka" ? "სხვა ხელმისაწვდომი სერვისები" : lang === "ru" ? "Другие доступные услуги" : "Explore Other Services";
    const districts = TBILISI_DISTRICTS[lang] ?? TBILISI_DISTRICTS.ka;

    const processTitles = {
        ka: {
            label: "მომსახურების პროცესი",
            heading: `როგორ მუშაობს ${svcName}?`,
            step1Title: "1. ზარი ან შეტყობინება",
            step1Desc: "დაგვირეკეთ ნომერზე +995 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. ჩვენი სადისპეტჩერო მუშაობს 24/7 და მყისიერად იბარებს გამოძახებას.",
            step2Title: "2. ფიქსირებული ტარიფი",
            step2Desc: "ოპერატორი ზარის მომენტშივე გითანხმებთ მომსახურების ზუსტ, ფიქსირებულ ღირებულებას — არანაირი მოულოდნელი ტარიფები ან საცობის კოეფიციენტი.",
            step3Title: "3. მოსვლა 15–20 წუთში",
            step3Desc: "თბილისის ნებისმიერ უბანში უახლოესი მორიგე ეკიპაჟი ჩამოდის 15–20 წუთში. დროის დაზოგვა და ოპერატიულობა ჩვენი უმთავრესი პრიორიტეტია.",
            step4Title: "4. უსაფრთხო შესრულება",
            step4Desc: "ჩვენი გამოცდილი პროფესიონალი სრული პასუხისმგებლობით შეასრულებს სამუშაოს — უსაფრთხოდ მიგიყვანთ სახლამდე თქვენი ავტომობილით ან მოაგვარებს პრობლემას ადგილზე.",
        },
        en: {
            label: "How It Works",
            heading: `How does our ${svcName} service work?`,
            step1Title: "1. Quick Call or WhatsApp",
            step1Desc: "Call our 24/7 dispatch at +995 568 83 47 07 or message via WhatsApp. Our team takes your request instantly without delays or app downloads.",
            step2Title: "2. Fixed Upfront Quote",
            step2Desc: "You receive a clear, agreed price before dispatch. No surge pricing, unexpected meter adjustments, or nighttime penalty fees.",
            step3Title: "3. Arrival in 15–20 Mins",
            step3Desc: "The closest on-duty driver or mobile technician reaches your location anywhere in Tbilisi within 15–20 minutes on average.",
            step4Title: "4. Professional Execution",
            step4Desc: "Relax while our experienced professional takes care of your vehicle, navigates smoothly, and ensures your complete safety and comfort.",
        },
        ru: {
            label: "Как это работает",
            heading: `Как работает услуга ${svcName}?`,
            step1Title: "1. Звонок или WhatsApp",
            step1Desc: "Позвоните нам по номеру +995 568 83 47 07 или напишите в WhatsApp. Наша диспетчерская работает круглосуточно 24/7.",
            step2Title: "2. Фиксированный тариф",
            step2Desc: "Точная стоимость согласовывается заранее во время звонка. Никаких скрытых наценок, счетчиков или доплат за пробки.",
            step3Title: "3. Приезд за 15–20 минут",
            step3Desc: "Ближайший дежурный экипаж прибудет по вашему адресу в любой район Тбилиси в среднем за 15–20 минут.",
            step4Title: "4. Безопасность и результат",
            step4Desc: "Наш опытный специалист аккуратно доставит вас домой на вашем автомобиле или оперативно устранит поломку на месте.",
        },
    }[lang] ?? {
        label: "მომსახურების პროცესი",
        heading: `როგორ მუშაობს ${svcName}?`,
        step1Title: "1. ზარი ან შეტყობინება",
        step1Desc: "დაგვირეკეთ ნომერზე +995 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. ჩვენი სადისპეტჩერო მუშაობს 24/7.",
        step2Title: "2. ფიქსირებული ტარიფი",
        step2Desc: "ოპერატორი ზარის მომენტშივე გითანხმებთ მომსახურების ზუსტ, ფიქსირებულ ღირებულებას.",
        step3Title: "3. მოსვლა 15–20 წუთში",
        step3Desc: "თბილისის ნებისმიერ უბანში უახლოესი მორიგე ეკიპაჟი ჩამოდის 15–20 წუთში.",
        step4Title: "4. უსაფრთხო შესრულება",
        step4Desc: "ჩვენი გამოცდილი პროფესიონალი სრული პასუხისმგებლობით შეასრულებს სამუშაოს.",
    };

    const standardsContent = {
        ka: {
            label: "სტანდარტები და გარანტიები",
            heading: "რატომ გვენდობიან მძღოლები და ავტომფლობელები?",
            p1Title: "გამოცდილი და შემოწმებული კადრები",
            p1Desc: "თითოეული მძღოლი გადის დეტალურ შემოწმებას და ფლობს მინიმუმ 5-წლიან უავარიო მართვის გამოცდილებას. ჩვენ ვუფრთხილდებით თქვენს ავტომობილს, როგორც საკუთარს.",
            p2Title: "სრული კონფიდენციალურობა და ეთიკა",
            p2Desc: "ჩვენი მძღოლები იცავენ პროფესიულ ეთიკას, პატივს სცემენ თქვენს პირად სივრცეს და უზრუნველყოფენ სატელეფონო საუბრებისა და საქმიანი ინფორმაციის მკაცრ კონფიდენციალურობას.",
            p3Title: "24/7 უწყვეტი რეჟიმი და სისწრაფე",
            p3Desc: "ვმუშაობთ უქმეებზე, დღესასწაულებსა და რთულ მეტეოროლოგიურ პირობებში. მორიგე ეკიპაჟები მუდმივ მზადყოფნაში არიან თბილისის საკვანძო წერტილებში.",
            p4Title: "გამჭვირვალობა და პასუხისმგებლობა",
            p4Desc: "არანაირი გაურკვეველი ტარიფები. კომპანია იღებს სრულ პასუხისმგებლობას გაწეული მომსახურების ხარისხზე, თქვენს სიმშვიდესა და ავტომობილის უსაფრთხოებაზე.",
            coverageHeading: "მომსახურების არეალი — თბილისის ყველა უბანი და შემოგარენი",
            coverageDesc: "mdzgholi.ge-ის ეკიპაჟები ოპერატიულად ემსახურებიან თბილისის ნებისმიერ რაიონსა და მის შემოგარენს. სადაც არ უნდა იმყოფებოდეთ, ჩვენი სპეციალისტი 15–20 წუთში მოვა თქვენთან:",
        },
        en: {
            label: "Standards & Guarantees",
            heading: "Why Drivers & Vehicle Owners Trust mdzgholi.ge",
            p1Title: "Vetted & Certified Professionals",
            p1Desc: "Every team member undergoes background checks and brings 5+ years of driving expertise. We treat your automobile with utmost care and mechanical respect.",
            p2Title: "Strict Confidentiality & Etiquette",
            p2Desc: "Our drivers adhere to high standards of discretion, respectful behavior, and complete confidentiality for executive business and private conversations.",
            p3Title: "24/7 Uninterrupted Readiness",
            p3Desc: "We operate 24 hours a day, 365 days a year — through late nights, rain, snow, and national holidays. Crews are stationed across Tbilisi for prompt dispatch.",
            p4Title: "Upfront Transparency & Full Liability",
            p4Desc: "Clear pricing established before departure. mdzgholi.ge takes complete responsibility for service quality, customer peace of mind, and vehicle safety.",
            coverageHeading: "Service Coverage — All Districts of Tbilisi & Suburbs",
            coverageDesc: "mdzgholi.ge mobile crews are stationed across all metropolitan zones of Tbilisi and surrounding areas. Our technician or driver reaches your address within 15–20 minutes:",
        },
        ru: {
            label: "Стандарты и гарантии",
            heading: "Почему автовладельцы выбирают mdzgholi.ge?",
            p1Title: "Проверенные и опытные специалисты",
            p1Desc: "Каждый водитель проходит проверку и имеет от 5 лет безаварийного стажа вождения. Мы бережно относимся к вашему автомобилю на каждом километре.",
            p2Title: "Конфиденциальность и деловой этикет",
            p2Desc: "Наши водители соблюдают правила субординации, уважают ваше личное пространство и гарантируют конфиденциальность телефонных и деловых разговоров.",
            p3Title: "Круглосуточная готовность 24/7",
            p3Desc: "Мы работаем без выходных и праздников, в дождь и снег. Дежурные экипажи распределены по ключевым точкам Тбилиси для скорейшего прибытия.",
            p4Title: "Прозрачность цен и ответственность",
            p4Desc: "Фиксированная стоимость согласуется сразу. Компания несет полную ответственность за качество сервиса, спокойствие клиента и сохранность авто.",
            coverageHeading: "Зона обслуживания — все районы Тбилиси и пригород",
            coverageDesc: "Экипажи mdzgholi.ge дежурят во всех районах Тбилиси и на выездных направлениях. Водитель или мастер прибудет к вам в течение 15–20 минут:",
        },
    }[lang] ?? {
        label: "სტანდარტები და გარანტიები",
        heading: "რატომ გვენდობიან მძღოლები და ავტომფლობელები?",
        p1Title: "გამოცდილი და შემოწმებული კადრები",
        p1Desc: "თითოეული მძღოლი გადის დეტალურ შემოწმებას და ფლობს მინიმუმ 5-წლიან უავარიო მართვის გამოცდილებას.",
        p2Title: "სრული კონფიდენციალურობა და ეთიკა",
        p2Desc: "ჩვენი მძღოლები იცავენ პროფესიულ ეთიკას და პატივს სცემენ თქვენს პირად სივრცეს.",
        p3Title: "24/7 უწყვეტი რეჟიმი და სისწრაფე",
        p3Desc: "ვმუშაობთ უქმეებზე, დღესასწაულებსა და რთულ მეტეოროლოგიურ პირობებში.",
        p4Title: "გამჭვირვალობა და პასუხისმგებლობა",
        p4Desc: "არანაირი გაურკვეველი ტარიფები. კომპანია იღებს სრულ პასუხისმგებლობას.",
        coverageHeading: "მომსახურების არეალი — თბილისის ყველა უბანი და შემოგარენი",
        coverageDesc: "mdzgholi.ge-ის ეკიპაჟები ოპერატიულად ემსახურებიან თბილისის ნებისმიერ რაიონს:",
    };

    const detailedInfo = {
        ka: {
            title: `სრული ინფორმაცია სერვისის შესახებ — ${svcName}`,
            p1Title: "სადისპეტჩერო მომსახურება და ოპერატიული მარშრუტიზაცია",
            p1: `ჩვენი სადისპეტჩერო ცენტრი მუშაობს უწყვეტად 24/7 რეჟიმში. გამოძახების მიღებისთანავე სისტემა აფიქსირებს თქვენს კოორდინატებს და აგზავნის უახლოეს მორიგე ეკიპაჟს. თბილისის ნებისმიერ უბანში (ვაკე, საბურთალო, მთაწმინდა, დიდუბე, გლდანი, ისანი, სამგორი და სხვა) ჩამოსვლის საშუალო დრო შეადგენს 15–20 წუთს. პიკის საათებში ოპერატორი ზარის მომენტშივე გაწვდით ზუსტ ინფორმაციას ჩამოსვლის დროის შესახებ.`,
            p2Title: "ავტომობილის ტიპები და მართვის გამოცდილება",
            p2: `ჩვენი მძღოლები და ტექნიკური პერსონალი ფლობენ მრავალწლიან პრაქტიკულ გამოცდილებას ნებისმიერი ტიპის ტრანსპორტზე: მექანიკური, კლასიკური ავტომატიკა, ვარიატორი (CVT), რობოტიზებული კოლოფი, ჰიბრიდები და თანამედროვე ელექტრომობილები. განსაკუთრებული ყურადღება ექცევა პრემიუმ კლასის სედანებსა და დიდი ზომის ყველგანმავლებს.`,
            p3Title: "ფიქსირებული ტარიფები და გამჭვირვალობა",
            p3: `mdzgholi.ge-ში ყველა ფასი ფიქსირებულია და თანხმდება წინასწარ, სატელეფონო საუბრისას. ჩვენთან არ მოქმედებს საცობის კოეფიციენტი, ღამის საათების გაურკვეველი დანამატები ან წუთობრივი ტარიფიკაცია. თქვენ იხდით ზუსტად იმ თანხას, რაც ოპერატორმა დაგიდასტურათ.`,
            p4Title: "კანონმდებლობა, უსაფრთხოება და პასუხისმგებლობა",
            p4: `საქართველოს საგზაო კანონმდებლობა ითვალისწინებს უმკაცრეს სანქციებს ნასვამ მდგომარეობაში საჭის მართვისთვის. ფხიზელი მძღოლის გამოძახება არის ერთადერთი სწორი, უსაფრთხო და ცივილიზებული გამოსავალი, რომელიც იცავს თქვენს სიცოცხლეს, იცავს თქვენს ავტომობილს და გარიდებთ უდიდეს ფინანსურ თუ სამართლებრივ პრობლემებს.`,
        },
        en: {
            title: `Detailed Service Overview — ${svcName} in Tbilisi`,
            p1Title: "24/7 Central Dispatch & Rapid District Routing",
            p1: `Our central dispatch operates 24 hours a day, 365 days a year without interruption. The moment you place a call or WhatsApp request, our routing system dispatches the nearest on-duty unit. Whether you are located in central neighborhoods (Vake, Saburtalo, Mtatsminda, Rustaveli) or outer districts (Gldani, Didi Dighomi, Isani, Samgori), our driver or technician arrives within an average of 15–20 minutes.`,
            p2Title: "All Transmission Types & Vehicle Classes Supported",
            p2: `Our chauffeurs and technicians possess extensive commercial experience with all types of powertrains and transmissions: manual gearboxes, classic automatics, dual-clutch systems (DSG), CVTs, hybrids, and full EVs. We regularly handle executive sedans, heavy SUVs, and sports vehicles with utmost mechanical care and delicate maneuvering.`,
            p3Title: "100% Upfront Pricing Guarantee — No Hidden Surcharges",
            p3: `At mdzgholi.ge, every rate is fixed and confirmed upfront before dispatch. You will never encounter traffic surge multipliers, sudden nighttime penalty fees, or unpredictable metering. The exact price quoted during your initial call is the only amount you pay upon completion.`,
            p4Title: "Traffic Law Compliance, Safety & Full Liability",
            p4: `Georgia enforces strict zero-tolerance regulations for operating a vehicle under the influence of alcohol, carrying heavy mandatory fines and immediate license suspension. Booking an official mdzgholi.ge designated sober driver ensures absolute road safety, protects your vehicle from impoundment, and lets you travel home in total comfort.`,
        },
        ru: {
            title: `Подробная информация об услуге — ${svcName} в Тбилиси`,
            p1Title: "Круглосуточная диспетчерская 24/7 и оперативный выезд",
            p1: `Наша диспетчерская служба работает круглосуточно, 365 дней в году. Сразу после вашего звонка или сообщения в WhatsApp дежурный экипаж направляется по вашему адресу. В любой район Тбилиси (Ваке, Сабуртало, Дидубе, Глдани, Исани, Самгори и пригород) специалист прибывает в среднем за 15–20 минут.`,
            p2Title: "Опыт работы с любыми типами трансмиссий и авто",
            p2: `Все наши водители обладают стажем вождения от 5 лет и опытом управления автомобилями любого класса: механическая коробка передач, классический автомат, робот, вариатор, гибридные системы и электромобили. Мы бережно относимся к представительским седанам, спорткарам и полноразмерным внедорожникам.`,
            p3Title: "Прозрачные фиксированные цены без сюрпризов",
            p3: `Стоимость услуги согласуется диспетчером заранее во время телефонного звонка. В mdzgholi.ge отсутствуют динамические коэффициенты на пробки, доплаты за ночные часы или непонятные счетчики. Вы оплачиваете ровно ту сумму, которая была озвучена при заказе.`,
            p4Title: "Безопасность, соблюдение ПДД и ответственность",
            p4: `Законодательство Грузии предусматривает серьезные санкции и лишение прав за вождение в состоянии алкогольного опьянения. Вызов профессионального трезвого водителя — единственный безопасный и надежный способ вернуться домой на собственной машине без риска для здоровья, прав и кошелька.`,
        },
    }[lang] ?? {
        title: `სრული ინფორმაცია სერვისის შესახებ — ${svcName}`,
        p1Title: "სადისპეტჩერო მომსახურება",
        p1: "ჩვენი სადისპეტჩერო ცენტრი მუშაობს უწყვეტად 24/7 რეჟიმში.",
        p2Title: "ავტომობილის ტიპები",
        p2: "ჩვენი მძღოლები ფლობენ მრავალწლიან გამოცდილებას ნებისმიერი ტიპის ტრანსპორტზე.",
        p3Title: "ფიქსირებული ტარიფები",
        p3: "ყველა ფასი ფიქსირებულია და თანხმდება წინასწარ.",
        p4Title: "უსაფრთხოება",
        p4: "სრული პასუხისმგებლობა და უსაფრთხოება.",
    };

    return (
        <>
            {/* Structured Data */}
            <JsonLd data={serviceSchema({ lang, slug: content.slug, name: content.h1, description: content.description })} />
            <JsonLd data={faqSchema(content.faq)} />
            <JsonLd data={breadcrumbSchema([
                { name: "mdzgholi.ge", url: lang === "ka" ? BASE : `${BASE}/${lang}` },
                { name: content.h1, url: lang === "ka" ? `${BASE}/services/${content.slug}` : `${BASE}/${lang}/services/${content.slug}` },
            ])} />

            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0f1e 0%, #111827 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "80px 16px 50px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div aria-hidden style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "rgba(245,197,24,0.05)", filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ maxWidth: 750, margin: "0 auto", position: "relative" }}>
                    <div style={{ fontSize: "3.5rem", marginBottom: 16, lineHeight: 1 }}>{content.icon}</div>
                    <h1
                        style={{
                            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                            fontWeight: 900,
                            color: "#fff",
                            marginBottom: 18,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        {content.h1}
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 650, margin: "0 auto 32px" }}>
                        {content.description}
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", padding: "0 8px" }}>
                        <a href={`tel:${PHONE_TEL}`} className="btn-yellow" style={{ fontSize: "0.95rem", padding: "13px 24px", minWidth: 160, justifyContent: "center" }}>
                            ☎ {d.nav.callNow}
                        </a>
                        <a
                            href={`https://wa.me/${PHONE_RAW}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: "0.95rem", padding: "13px 24px", minWidth: 160, justifyContent: "center" }}
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="service-section">
                <div className="service-container">
                    <span className="section-label">
                        {lang === "ka" ? "უპირატესობები" : lang === "ru" ? "Преимущества" : "Benefits"}
                    </span>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginBottom: 36 }}>
                        {lang === "ka" ? `რატომ mdzgholi.ge — ${svcName}?` : lang === "ru" ? `Почему mdzgholi.ge — ${svcName}?` : `Why mdzgholi.ge — ${svcName}?`}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
                        {content.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ padding: "20px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}
                            >
                                <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    background: "rgba(245,197,24,0.15)",
                                    border: "1px solid rgba(245,197,24,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Process */}
            <section className="service-section-alt">
                <div className="service-container">
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <span className="section-label">{processTitles.label}</span>
                        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginTop: 10 }}>
                            {processTitles.heading}
                        </h2>
                    </div>
                    <div className="service-grid-4">
                        <div className="step-card">
                            <span style={{ color: "var(--yellow)", fontWeight: 800, fontSize: "1.3rem" }}>01</span>
                            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{processTitles.step1Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{processTitles.step1Desc}</p>
                        </div>
                        <div className="step-card">
                            <span style={{ color: "var(--yellow)", fontWeight: 800, fontSize: "1.3rem" }}>02</span>
                            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{processTitles.step2Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{processTitles.step2Desc}</p>
                        </div>
                        <div className="step-card">
                            <span style={{ color: "var(--yellow)", fontWeight: 800, fontSize: "1.3rem" }}>03</span>
                            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{processTitles.step3Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{processTitles.step3Desc}</p>
                        </div>
                        <div className="step-card">
                            <span style={{ color: "var(--yellow)", fontWeight: 800, fontSize: "1.3rem" }}>04</span>
                            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{processTitles.step4Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{processTitles.step4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline CTA Strip */}
            <section
                style={{
                    background: "var(--yellow)",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 650, margin: "0 auto" }}>
                    <h2 style={{ color: "#0a0f1e", fontWeight: 900, fontSize: "1.7rem", marginBottom: 18 }}>
                        {lang === "ka" ? `${svcName} — გამოიძახეთ 24/7` : lang === "ru" ? `Вызвать ${svcName} 24/7` : `Book ${svcName} 24/7`}
                    </h2>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            background: "#0a0f1e",
                            color: "#fff",
                            fontWeight: 800,
                            padding: "15px 32px",
                            borderRadius: 50,
                            textDecoration: "none",
                            fontSize: "1.1rem",
                        }}
                    >
                        ☎ {lang === "ka"
                            ? (content.slug === "battery-charging" ? "გამოიძახეთ ბუსტერი"
                                : content.slug === "tire-change" ? "გამოიძახეთ ოსტატი"
                                : content.slug === "evacuator" ? "ევაკუატორის გამოძახება"
                                : "მძღოლის გამოძახება")
                            : lang === "ru"
                            ? (content.slug === "battery-charging" ? "Вызвать бустер"
                                : content.slug === "tire-change" ? "Вызвать мастера"
                                : content.slug === "evacuator" ? "Вызвать эвакуатор"
                                : "Вызвать водителя")
                            : (content.slug === "battery-charging" ? "Call a Technician"
                                : content.slug === "tire-change" ? "Call a Technician"
                                : content.slug === "evacuator" ? "Call Tow Truck"
                                : "Call a Driver")}
                    </a>
                </div>
            </section>

            {/* Quality Standards & Coverage Area */}
            <section className="service-section">
                <div className="service-container">
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <span className="section-label">{standardsContent.label}</span>
                        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginTop: 10 }}>
                            {standardsContent.heading}
                        </h2>
                    </div>

                    <div className="service-grid-2" style={{ marginBottom: 48 }}>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
                                🛡️ {standardsContent.p1Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {standardsContent.p1Desc}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
                                🤝 {standardsContent.p2Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {standardsContent.p2Desc}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
                                ⚡ {standardsContent.p3Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {standardsContent.p3Desc}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
                                💰 {standardsContent.p4Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {standardsContent.p4Desc}
                            </p>
                        </div>
                    </div>

                    {/* Districts Coverage */}
                    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--radius)", padding: "28px 24px", textAlign: "center" }}>
                        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", marginBottom: 12 }}>
                            📍 {standardsContent.coverageHeading}
                        </h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: 750, margin: "0 auto 20px" }}>
                            {standardsContent.coverageDesc}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {districts.map((d) => (
                                <span key={d} className="district-tag">{d}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="service-section-alt">
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 36 }}>
                        <span className="section-label">FAQ</span>
                        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginTop: 10 }}>
                            {lang === "ka" ? `ხშირი კითხვები: ${svcName}` : lang === "ru" ? `Частые вопросы: ${svcName}` : `FAQ: ${svcName}`}
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {content.faq.map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ padding: "22px 24px" }}
                            >
                                <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
                                    {item.q}
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Specifications & Operational Protocols (Expands Text-to-HTML ratio & SEO quality) */}
            <section className="service-section">
                <div className="service-container">
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.6rem", marginBottom: 28, textAlign: "center" }}>
                        📖 {detailedInfo.title}
                    </h2>
                    <div className="service-grid-2" style={{ marginBottom: 20 }}>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                                ⏱️ {detailedInfo.p1Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {detailedInfo.p1}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                                🚘 {detailedInfo.p2Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {detailedInfo.p2}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                                🏷️ {detailedInfo.p3Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {detailedInfo.p3}
                            </p>
                        </div>
                        <div className="step-card">
                            <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                                ⚖️ {detailedInfo.p4Title}
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                                {detailedInfo.p4}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services — Internal Cross-Linking */}
            <section className="service-section-alt">
                <div className="service-container">
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 24, textAlign: "center" }}>
                        {otherSectionTitle}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
                        {otherServices.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={lang === "ka" ? `/services/${svc.slug}` : `/${lang}/services/${svc.slug}`}
                                className="card"
                                style={{
                                    padding: "16px 18px",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <span style={{ fontSize: "1.5rem" }}>{svc.icon}</span>
                                <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                                    {svc[lang as "ka" | "en" | "ru"] ?? svc.ka}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back + Final CTA */}
            <section className="svc-back-bar">
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href={lang === "ka" ? "/" : `/${lang}`} className="btn-outline" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
                        ← {d.nav.home}
                    </Link>
                    <a href={`tel:${PHONE_TEL}`} className="btn-yellow" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
                        ☎ {d.contact.callBtn}
                    </a>
                </div>
            </section>
        </>
    );
}
