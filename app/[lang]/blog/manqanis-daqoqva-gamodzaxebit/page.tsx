import Image from "next/image";
import { locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, faqSchema, howToSchema } from "@/components/JsonLd";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;

    const titles: Record<string, string> = {
        ka: "მანქანის დაქოქვა გამოძახებით თბილისში — 15-20 წუთში | mdzgholi.ge",
        en: "Car Jump Start on Call in Tbilisi — 15-20 Min Dispatch | mdzgholi.ge",
        ru: "Запуск автомобиля с выездом в Тбилиси — 15-20 минут | mdzgholi.ge",
    };

    const metaDescs: Record<string, string> = {
        ka: "მანქანის დაქოქვა გამოძახებით — სპეციალისტი 15-20 წუთში ჩამოდის თქვენს ლოკაციაზე თბილისში. ბუსტერით, 24/7. ბენზინი, დიზელი, ავტომატიკა, ჰიბრიდი. ☎ 568 83 47 07",
        en: "Car won't start? Get a professional jump start dispatched to your location in Tbilisi within 15-20 minutes. Digital booster, 24/7. ☎ +995 568 83 47 07",
        ru: "Машина не заводится? Вызов специалиста для запуска авто в Тбилиси за 15-20 минут. Профессиональный бустер, 24/7. ☎ +995 568 83 47 07",
    };

    const canonical =
        lang === "ka"
            ? "https://www.mdzgholi.ge/blog/manqanis-daqoqva-gamodzaxebit"
            : `https://www.mdzgholi.ge/${lang}/blog/manqanis-daqoqva-gamodzaxebit`;

    return {
        title: titles[lang] ?? titles.ka,
        description: metaDescs[lang] ?? metaDescs.ka,
        keywords:
            "მანქანის დაქოქვა გამოძახებით, მანქანის დაქოქვა, ავტომობილის დაქოქვა, დაქოქვა გამოძახებით, პერემიჩკა გამოძახებით, მანქანის დაქოქვა ადგილზე, მანქანის დაქოქვა ავტომატიკა, მანქანის დაქოქვა 24/7, ძრავის დაქოქვა, მანქანის დაქოქვა თბილისში, car jump start Tbilisi",
        alternates: {
            canonical,
            languages: {
                ka: "https://www.mdzgholi.ge/blog/manqanis-daqoqva-gamodzaxebit",
                en: "https://www.mdzgholi.ge/en/blog/manqanis-daqoqva-gamodzaxebit",
                ru: "https://www.mdzgholi.ge/ru/blog/manqanis-daqoqva-gamodzaxebit",
                "x-default": "https://www.mdzgholi.ge/blog/manqanis-daqoqva-gamodzaxebit",
            },
        },
        openGraph: {
            title: titles[lang] ?? titles.ka,
            description: metaDescs[lang] ?? metaDescs.ka,
            url: canonical,
            type: "article",
            images: [
                {
                    url: "https://www.mdzgholi.ge/images/blog/car-jump-start-booster.jpg",
                    width: 1200,
                    height: 900,
                    alt: "მანქანის დაქოქვა გამოძახებით თბილისში — ბუსტერით",
                },
            ],
        },
    };
}

const DISTRICTS_KA = [
    "ვაკე", "საბურთალო", "ვერა", "მთაწმინდა", "სოლოლაკი",
    "ჩუღურეთი", "დიდუბე", "ნაძალადევი", "გლდანი", "დიდი დიღომი",
    "ვაშლიჯვარი", "ისანი", "სამგორი", "ორთაჭალა", "ავლაბარი",
];

const content = {
    ka: {
        badge: "ავტო სერვისი • mdzgholi.ge",
        date: "2026 წლის ოქტომბერი",
        h1: "მანქანის დაქოქვა გამოძახებით — სპეციალისტი 15-20 წუთში",
        intro1: "გეჩქარებათ, ჯდებით საჭესთან, ატრიალებთ გასაღებს და... ძრავი არ რეაგირებს. ყველაზე ხშირად ეს ხდება ეზოში დილით ადრე, სავაჭრო ცენტრის პარკინგზე ან გზის პირას. ასეთ დროს არც მეზობლის ძებნაა სასიამოვნო და არც ძვირადღირებული ევაკუატორის ლოდინი. სწორედ ამისთვის არსებობს mdzgholi.ge-ის მობილური სერვისი: სპეციალისტი პროფესიონალური ბუსტერით 15-20 წუთში მოვა თქვენს ლოკაციაზე და ადგილზევე დაქოქავს მანქანას.",
        intro2: "ამ სტატიაში დეტალურად განვიხილავთ: როგორ ამოვიცნოთ აკუმულატორის პრობლემა, რით განსხვავდება თანამედროვე ციფრული ბუსტერი ძველი „პერემიჩკისგან“, რატომ სჭირდება განსაკუთრებული მიდგომა ავტომატიკასა და ჰიბრიდს, და რა უნდა გააკეთოთ, თუ ბატარეა სრულად მწყობრიდან გამოვიდა.",

        h2_symptoms: "მანქანა არ იქოქება — ნიშნები, რომ პრობლემა აკუმულატორშია",
        symptoms: [
            { icon: "🔇", title: "სრული სიჩუმე — პანელი და განათებაც კი ჩამქრალია", desc: "გასაღების გადატრიალებისას არანაირი ხმა არ ისმის, სალონის განათება ან საერთოდ არ ინთება, ან მკრთალად ანათებს. ეს ბატარეის სრულ განმუხტვაზე მიუთითებს." },
            { icon: "⚡", title: "სწრაფი წკაპუნი („ტიკ-ტიკ“) დაქოქვის მცდელობისას", desc: "ეს ხმა სტარტერის რელედან მოდის — ძაბვა იმდენად დაბალია, რომ სტარტერს ძრავის დასატრიალებლად ენერგია აღარ ყოფნის." },
            { icon: "🐢", title: "სტარტერი ძალიან ნელა და მძიმედ ტრიალებს", desc: "ძრავი თითქოს ცდილობს დაქოქვას, მაგრამ აკუმულატორს ძალა არ აქვს. განსაკუთრებით ხშირია ზამთრის ცივ დილას." },
            { icon: "💡", title: "ინსტრუმენტების პანელზე ბატარეის ნიშანი ანთია", desc: "თუ ძრავის მუშაობისას ან ჩაქრობამდე აკუმულატორის სიმბოლო ენთო, ეს გენერატორის ან დამუხტვის სისტემის გაუმართაობის ნიშანია." },
        ],

        h2_peremichka_vs_booster: "პერემიჩკა VS ბუსტერი — განსხვავება და რატომ ვირჩევთ ბუსტერს",
        peremichka_text: "ათწლეულების განმავლობაში ავტომობილის მეორე მანქანიდან კაბელებით დაქოქვა („პერემიჩკა“) ერთადერთი მეთოდი იყო. ძველ, მარტივი ელექტრონიკის მქონე ავტომობილებზე ეს ხერხი მუშაობდა. თუმცა თანამედროვე ავტოინდუსტრიაში სიტუაცია რადიკალურად შეიცვალა.",
        peremichka_risk: "როდესაც კაბელები მომუშავე მანქანიდან უერთდება დამჯდარს, მომენტალურად ჩნდება ძლიერი ძაბვის ნახტომი (Voltage Spike). თანამედროვე მანქანაში ათეულობით მიკროკომპიუტერია (ECU, გადაცემათა კოლოფის ბლოკი, მულტიმედია, ABS/ESP). ძაბვის ნახტომმა შეიძლება წამში გადაწვას ეს მოდულები, რომელთა შეკეთება ხშირად 1000–3000 ლარზე მეტი ჯდება.",
        booster_advantage: "ციფრული ბუსტერი (Jump Starter) არის ავტონომიური, სპეციალური მოწყობილობა. მას არ სჭირდება მეორე მანქანა. ის პირდაპირ უერთდება დამჯდარ ბატარეას, ხოლო ჩაშენებული მიკროპროცესორი მკაცრად არეგულირებს დენს და იცავს ავტომობილს ძაბვის ნახტომისგან, მოკლე ჩართვისა და პოლარობის არევისგან. mdzgholi.ge-ს ყველა ეკიპაჟი მხოლოდ ამ უსაფრთხო ტექნოლოგიით მუშაობს.",

        comparisonTable: {
            headers: ["კრიტერიუმი", "პერემიჩკა (კაბელები)", "ბუსტერი (mdzgholi.ge)"],
            rows: [
                ["მეორე მანქანის საჭიროება", "✅ აუცილებელია", "❌ არა, ავტონომიურია"],
                ["ელექტრონიკის დაზიანების რისკი", "⚠️ მაღალი", "✅ ნულოვანი (დაცულია)"],
                ["ავტომატიკის კოლოფის უსაფრთხოება", "⚠️ სარისკოა", "✅ 100%-ით უსაფრთხო"],
                ["ჰიბრიდი და 12V სისტემა", "❌ არ არის რეკომენდებული", "✅ სრულად თავსებადია"],
                ["ჩამოსვლის საშუალო დრო", "~30-60 წთ (ძებნა)", "~15-20 წთ (ოპერატიული)"],
            ],
        },

        h2_automatic: "ავტომატური გადაცემათა კოლოფის მქონე მანქანის დაქოქვა",
        automatic_text: "ავტომატიკის მქონე ავტომობილები განსაკუთრებულ ყურადღებას მოითხოვს. არაპროფესიონალური კაბელებით დაქოქვისას ელექტრო-ჰიდრავლიკური სოლენოიდები და გადაცემათა კოლოფის მართვის ბლოკი (TCM) ყველაზე მგრძნობიარეა. ჩვენი ბუსტერების გამოყენება გამორიცხავს ამ საფრთხეს, რადგან დენის იმპულსი სტაბილურია და არ აზიანებს ტრანსმისიის ელექტრონიკას.",

        h2_districts: "სად ვმუშაობთ — თბილისის ყველა უბანი",
        districts_text: "ჩვენი ტექნიკური ეკიპაჟები თბილისის ძირითად უბნებში მუდმივად მორიგეობენ, რის გამოც ადგილზე მისვლის რეალური დრო 15-20 წუთია:",

        h2_price: "ფასი — რა ღირს მანქანის დაქოქვა გამოძახებით?",
        price_text: "ფასს ოპერატორი გითანხმებთ წინასწარ, სატელეფონო საუბრისას. ჩვენი პრინციპია: ადგილზე მისვლის შემდეგ შეთანხმებული ფასი აღარ იცვლება. ტარიფი დამოკიდებულია შემდეგ ფაქტორებზე:",
        price_factors: [
            "🗺️ თქვენი ლოკაცია (უბანი, თბილისის შემოგარენი)",
            "🚗 ავტომობილის ტიპი და ძრავის მოცულობა (ბენზინი, მსხვილი დიზელი, ჰიბრიდი)",
            "⏰ დამატებითი მომსახურება (ადგილზე გენერატორის ტესტირება, ახალი აკუმულატორის მოტანა/მონტაჟი)",
        ],

        h2_what_if: "რა ხდება, თუ მარტო დაქოქვა არ შველის?",
        what_if_text: "ზოგჯერ ბატარეა იმდენად დაზიანებულია (ჩამოშლილია ფირფიტები ან მოკლე ჩართვაა შიგნით), რომ მარტო დაქოქვა საკმარისი არ არის. ასეთ დროს ჩვენი სპეციალისტი ადგილზევე ატარებს დიაგნოსტიკას:",
        what_if_steps: [
            "🔋 აკუმულატორის რეალური ტევადობისა და რესურსის ტესტი (Battery Health Test)",
            "⚡ გენერატორის დამუხტვის ძაბვის ტესტირება (Alternator Test)",
            "🔌 ფარული დენის გაჟონვის შემოწმება (Parasitic Draw Test)",
        ],
        what_if_conclusion: "თუ აკუმულატორი რეანიმაციას აღარ ექვემდებარება, ჩვენ შეგვიძლია ადგილზევე მოგიტანოთ თქვენი მოდელისთვის შესაფერისი, ახალი გარანტიანი ბატარეა და დაგიყენოთ. ხოლო თუ პრობლემა სხვა კვანძშია, ჩვენივე ევაკუატორით გადაგიყვანთ სასურველ ხელოსანთან.",

        faqTitle: "ხშირად დასმული კითხვები — მანქანის დაქოქვა გამოძახებით",
        faq: [
            {
                q: "მანქანის დაქოქვა გამოძახებით — რამდენ ხანში ჩამოდის სპეციალისტი?",
                a: "ჩვენი ეკიპაჟები თბილისის სხვადასხვა უბანში მოძრაობენ. საშუალო მოსვლის დრო 15-20 წუთია. პიკის საათებში ოპერატორი ზარისთანავე გაცნობებთ ზუსტ დროს.",
            },
            {
                q: "შეიძლება თუ არა ავტომატიკის მანქანის დაქოქვა?",
                a: "დიახ, ჩვენი ბუსტერებით ავტომატიკა სრულიად უსაფრთხოდ იქოქება. ჩვენ არ ვიყენებთ ძველებურ კაბელებს, ამიტომ გადაცემათა კოლოფის ელექტრონიკას საფრთხე არ ემუქრება.",
            },
            {
                q: "რით განსხვავდება ბუსტერი ჩვეულებრივი „პერემიჩკისგან“?",
                a: "პერემიჩკა სხვა მანქანიდან კაბელებით გადაბმას ნიშნავს, რაც ხშირად ძაბვის ნახტომსა და კომპიუტერის დაზიანებას იწვევს. ბუსტერი კი ავტონომიური ციფრული ხელსაწყოა, რომელიც მიკროპროცესორით აკონტროლებს დენს და უსაფრთხოდ ქოქავს ძრავს.",
            },
            {
                q: "მუშაობთ თუ არა ღამის საათებში?",
                a: "დიახ, mdzgholi.ge მუშაობს 24/7 რეჟიმში, ყოველდღე, უქმეებსა და სადღესასწაულო დღეებშიც. ზარს ყოველთვის ცოცხალი ოპერატორი პასუხობს.",
            },
            {
                q: "რა ღირს მანქანის დაქოქვა გამოძახებით თბილისში?",
                a: "ფასი ხელმისაწვდომია და წინასწარ თანხმდება ოპერატორთან ლოკაციისა და ავტომობილის მიხედვით. შეთანხმებული ტარიფი საბოლოოა და ადგილზე არ იცვლება.",
            },
            {
                q: "დიზელის დიდი ძრავის მქონე ავტომობილს დაქოქავთ?",
                a: "დიახ, ჩვენი ბუსტერები მაღალი სასტარტო ამპერაჟისაა (Peak Current) და თავისუფლად ქოქავს როგორც მსხვილ დიზელის ჯიპებს, ისე მიკროავტობუსებსა და კომერციულ ტრანსპორტს.",
            },
            {
                q: "რა ხდება, თუ აკუმულატორი სრულად გამოუსადეგარია?",
                a: "სპეციალისტი ადგილზევე შეამოწმებს ბატარეას ტესტერით. თუ ის აღარ ვარგა, შეგვიძლია ადგილზე მოგიტანოთ ახალი აკუმულატორი გარანტიით და დაგიყენოთ, ან ავტომობილი ევაკუატორით გადავიყვანოთ.",
            },
        ],

        ctaTitle: "არ იქოქება მანქანა? ერთი ზარი — და 15-20 წუთში თქვენთან ვართ",
        ctaDesc: "დაგვირეკეთ ნომერზე 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. ოპერატორი დაუყოვნებლივ გამოუშვებს უახლოეს ეკიპაჟს.",
        ctaBtn: "☎ 568 83 47 07",
        ctaWa: "WhatsApp",
        ctaService: "სრული სერვისის გვერდი",
    },
    en: {
        badge: "Auto Service • mdzgholi.ge",
        date: "October 2026",
        h1: "Car Jump Start on Call in Tbilisi — Dispatch in 15-20 Minutes",
        intro1: "Car won't start? The most common scenario: you turn the key, dashboard lights up, but the engine won't crank — or you hear only a rapid clicking. In 80% of cases, the culprit is a dead or weakened battery. mdzgholi.ge dispatches a technician with a professional jump booster to your location in Tbilisi within 15-20 minutes — no towing required.",
        intro2: "In this guide: what 'car jump start on call' means, the difference between jumper cables and a booster, safe jump-starting for automatic transmission vehicles, pricing, and what happens when a simple jump start isn't enough.",

        h2_symptoms: "Car Won't Start — Signs the Problem Is Your Battery",
        symptoms: [
            { icon: "🔇", title: "Complete silence — even the horn is weak", desc: "Turning the key produces nothing. Interior lights dim or go out entirely — a classic sign of a completely dead battery." },
            { icon: "⚡", title: "Rapid clicking sound from the starter", desc: "The clicking indicates insufficient voltage to engage the starter motor for a full crank." },
            { icon: "🐢", title: "Engine cranks very slowly", desc: "The starter is engaging, but much slower than normal — not enough charge in the battery, or it's too cold." },
            { icon: "💡", title: "Battery warning light is on", desc: "Battery symbol on the dash means something is off — either the battery itself or the alternator charging it. Worth checking before it strands you." },
        ],

        h2_peremichka_vs_booster: "Jumper Cables VS Booster — Why We Use a Booster",
        peremichka_text: "Traditional jumper cables — connecting another running vehicle to a dead one — were standard practice for decades. On simple pre-2005 vehicles, this works fine. However, modern vehicles (2008+), hybrids, and premium cars are packed with sensitive microprocessors that are vulnerable to this method.",
        peremichka_risk: "When using jumper cables, a voltage spike transfers from the donor vehicle to the dead one. This transient can: fry the ECU (replacement cost: 800–3000₾+), damage the infotainment system, and knock out ABS/ESP control units.",
        booster_advantage: "mdzgholi.ge's digital jump starter doesn't need a donor vehicle. It connects directly to the dead battery and delivers precisely controlled peak amperage — with built-in anti-surge, reverse polarity, and short-circuit protection. Your electronics are 100% safe.",

        comparisonTable: {
            headers: ["Criteria", "Jumper Cables", "Booster (mdzgholi.ge)"],
            rows: [
                ["Donor vehicle required?", "✅ Yes", "❌ No"],
                ["Electronics risk", "⚠️ High", "✅ Zero"],
                ["Automatic transmission", "⚠️ Risky", "✅ Safe"],
                ["Hybrid/EV 12V", "❌ Not recommended", "✅ Supported"],
                ["Arrival time", "~15-30 min wait", "~15-20 min dispatch"],
            ],
        },

        h2_automatic: "Jump Starting Automatic Transmission Cars — Special Considerations",
        automatic_text: "Automatic transmission vehicles are the most common casualty of improper jump starting. Many services use jumper cables on automatics — this frequently damages the transmission's electrohydraulic control unit. Using a booster on automatic vehicles is completely safe, as the digital protection prevents any damaging voltage surge.",

        h2_districts: "Service Coverage — All Tbilisi Districts",
        districts_text: "mdzgholi.ge mobile teams are stationed across Tbilisi districts, ensuring 15-20 minute response times:",

        h2_price: "Pricing — How Much Does a Car Jump Start on Call Cost?",
        price_text: "Pricing is always fixed and agreed upon with our dispatcher before dispatch. No hidden charges or surprises. Exact rate depends on:",
        price_factors: [
            "🗺️ Your location (district, day/night call)",
            "🚗 Vehicle type (petrol, diesel, hybrid, automatic)",
            "⏰ Additional services (alternator check, new battery delivery)",
        ],

        h2_what_if: "What if the Jump Start Doesn't Work?",
        what_if_text: "A booster cannot always rescue a completely deteriorated battery. Our technician will diagnose on-site:",
        what_if_steps: [
            "🔋 Battery health and remaining capacity test",
            "⚡ Alternator output voltage test",
            "🔌 Parasitic draw / current leak test",
        ],
        what_if_conclusion: "If the battery is beyond recovery, we can deliver and install a new, warranted battery on the spot. Or, if required, dispatch our own tow truck.",

        faqTitle: "Frequently Asked Questions — Car Jump Start on Call",
        faq: [
            {
                q: "How fast does the technician arrive for a jump start?",
                a: "mdzgholi.ge teams are stationed across Tbilisi districts. A technician typically arrives within 15-20 minutes of dispatch confirmation.",
            },
            {
                q: "Can you jump start automatic transmission vehicles?",
                a: "Yes, our booster method is 100% safe for automatic transmission vehicles. Traditional jumper cables on automatics carry a serious risk of transmission damage — our booster eliminates this risk entirely.",
            },
            {
                q: "What is the difference between jumper cables and a booster?",
                a: "Jumper cables require a donor vehicle and can cause dangerous voltage spikes. A booster is a standalone device with digital surge protection — no donor vehicle needed, zero electronics risk.",
            },
            {
                q: "Do you operate at night for car jump starts?",
                a: "Yes, mdzgholi.ge operates 24 hours a day, 7 days a week, in all weather and seasons.",
            },
            {
                q: "How much does a car jump start on call cost in Tbilisi?",
                a: "Pricing depends on your location and service type. The exact rate is always confirmed with our dispatcher before any technician is dispatched.",
            },
            {
                q: "Can you jump start large diesel engines?",
                a: "Yes. Our heavy-duty boosters are rated for large diesel engines, SUVs, vans, and commercial vehicles.",
            },
            {
                q: "What if the battery is completely dead?",
                a: "Our technician checks both battery and alternator health on-site. If the battery is beyond recovery, we can deliver and install a new one with warranty, or arrange towing.",
            },
        ],

        ctaTitle: "Car Won't Start? Call Us Now!",
        ctaDesc: "Our technician with a professional booster will arrive in 15-20 minutes.",
        ctaBtn: "☎ +995 568 83 47 07",
        ctaWa: "WhatsApp",
        ctaService: "Full Battery Service Page",
    },
    ru: {
        badge: "Автосервис • mdzgholi.ge",
        date: "Октябрь 2026",
        h1: "Запуск автомобиля с выездом в Тбилиси — специалист за 15-20 минут",
        intro1: "Машина не заводится? Типичная ситуация: поворачиваете ключ, приборная панель светится, но двигатель не крутится — или слышите частые щелчки. В 80% случаев причина — севший или изношенный аккумулятор. Специалист mdzgholi.ge с профессиональным бустером приедет к вашему месту в Тбилиси за 15-20 минут. Без эвакуатора.",
        intro2: "В этой статье: что значит «запуск авто с выездом», отличие прикуривания от бустера, безопасный запуск автомата, цены и что делать, если запуском не обойтись.",

        h2_symptoms: "Машина не заводится — признаки проблемы с аккумулятором",
        symptoms: [
            { icon: "🔇", title: "Тишина — даже клаксон едва слышен", desc: "Поворот ключа — ноль реакции. Освещение салона тускнеет или гаснет. Классический признак полностью разряженного аккумулятора." },
            { icon: "⚡", title: "Частые щелчки при повороте ключа", desc: "Стартер щёлкает быстро — не хватает напряжения для полноценной прокрутки." },
            { icon: "🐢", title: "Двигатель крутится очень медленно", desc: "Стартер работает, но вяло — в аккумуляторе недостаточно заряда, или очень холодно." },
            { icon: "💡", title: "Горит лампа аккумулятора", desc: "Символ батареи на панели говорит о проблеме с АКБ или генератором." },
        ],

        h2_peremichka_vs_booster: "Прикуривание VS Бустер — почему мы выбрали бустер",
        peremichka_text: "«Прикуривание» (соединение проводами с другим авто) десятилетиями было стандартом. На простых машинах до 2005 года — нормально. Но современные авто (2008+), гибриды, премиум-класс напичканы чувствительными микропроцессорами.",
        peremichka_risk: "При прикуривании проводами от работающей машины возникает скачок напряжения (Voltage Spike). Он может мгновенно сжечь ЭБУ (замена: 800–3000₾), повредить мультимедиа, вывести из строя блок ABS/ESP.",
        booster_advantage: "Бустер mdzgholi.ge не требует второй машины. Он подключается напрямую к аккумулятору и подаёт точно выверенный пусковой ток с защитой от перегрузок, переполюсовки и короткого замыкания. Электроника вашего авто в полной безопасности.",

        comparisonTable: {
            headers: ["Критерий", "Прикуривание (провода)", "Бустер (mdzgholi.ge)"],
            rows: [
                ["Нужна вторая машина?", "✅ Да", "❌ Нет"],
                ["Риск для электроники", "⚠️ Высокий", "✅ Ноль"],
                ["Машина-автомат", "⚠️ Опасно", "✅ Безопасно"],
                ["Гибрид/EV 12V", "❌ Не рекомендуется", "✅ Поддерживается"],
                ["Время прибытия", "~15-30 мин ожидание", "~15-20 мин выезд"],
            ],
        },

        h2_automatic: "Запуск авто с АКПП — особые требования",
        automatic_text: "Автомобили с автоматической коробкой передач — самая частая жертва неправильного запуска. Прикуривание на автомате нередко приводит к повреждению электрогидравлики АКПП. Бустер полностью безопасен для автомата: цифровая защита исключает любой скачок напряжения.",

        h2_districts: "Где работаем — все районы Тбилиси",
        districts_text: "Мобильные бригады mdzgholi.ge дежурят по всему Тбилиси, обеспечивая прибытие за 15-20 минут:",

        h2_price: "Цена — сколько стоит вызов запуска авто в Тбилиси?",
        price_text: "Цена всегда фиксирована и согласовывается с диспетчером до выезда. Никаких скрытых доплат. Тариф зависит от:",
        price_factors: [
            "🗺️ Вашего местоположения (район, ночной/дневной вызов)",
            "🚗 Типа автомобиля (бензин, дизель, гибрид, автомат)",
            "⏰ Дополнительных услуг (диагностика генератора, доставка аккумулятора)",
        ],

        h2_what_if: "Что если запуск не помог?",
        what_if_text: "Бустер не всегда «реанимирует» полностью убитый аккумулятор. Специалист на месте проверит:",
        what_if_steps: [
            "🔋 Ёмкость и состояние АКБ (Battery Health Test)",
            "⚡ Выходное напряжение генератора (Alternator Test)",
            "🔌 Утечку тока (Parasitic Draw Test)",
        ],
        what_if_conclusion: "Если аккумулятор полностью вышел из строя — привезём и установим новый с гарантией прямо на месте, или вызовем наш эвакуатор.",

        faqTitle: "Часто задаваемые вопросы — запуск авто с выездом",
        faq: [
            {
                q: "Как быстро приедет специалист для запуска авто?",
                a: "Бригады mdzgholi.ge дежурят в разных районах Тбилиси. Специалист, как правило, прибывает за 15-20 минут с момента подтверждения вызова.",
            },
            {
                q: "Заводите ли вы машины с АКПП?",
                a: "Да, бустер полностью безопасен для машин с автоматической коробкой. Прикуривание проводами на автомате несёт серьёзный риск для АКПП — бустер его исключает.",
            },
            {
                q: "В чём разница между прикуриванием и бустером?",
                a: "Прикуривание — провода от другой машины с риском скачка напряжения. Бустер — автономное устройство с цифровой защитой, вторая машина не нужна, риска для электроники нет.",
            },
            {
                q: "Работаете ли вы ночью?",
                a: "Да, mdzgholi.ge работает круглосуточно, 7 дней в неделю, в любую погоду.",
            },
            {
                q: "Сколько стоит выезд для запуска авто в Тбилиси?",
                a: "Цена зависит от района и типа услуги. Точный тариф всегда сообщается диспетчером до выезда.",
            },
            {
                q: "Заводите ли вы дизельные двигатели?",
                a: "Да, наши мощные бустеры рассчитаны на большие дизельные двигатели, внедорожники и коммерческий транспорт.",
            },
            {
                q: "Что если аккумулятор окончательно вышел из строя?",
                a: "Специалист проверит АКБ и генератор на месте. Если батарея не подлежит восстановлению — привезём и установим новую с гарантией или вызовем эвакуатор.",
            },
        ],

        ctaTitle: "Машина не заводится? Звоните прямо сейчас!",
        ctaDesc: "Специалист с бустером приедет за 15-20 минут.",
        ctaBtn: "☎ +995 568 83 47 07",
        ctaWa: "WhatsApp",
        ctaService: "Страница услуги",
    },
};

const howToStepsKa = [
    { name: "დარეკეთ ან WhatsApp-ი გამოიყენეთ", text: "დაგვიკავშირდით +995 568 83 47 07-ზე. ოპერატორი მყისიერად გიპასუხებს და დაადასტურებს გამოძახებას." },
    { name: "მიუთითეთ ლოკაცია", text: "აღუწერეთ ზუსტი მისამართი, ლენდმარქი ან გამოიყენეთ Google Maps-ის pin. სისტემა ყველაზე ახლო ეკიპაჟს გამოძახებს." },
    { name: "დაელოდეთ — 15-20 წუთი", text: "ბუსტერით აღჭურვილი სპეციალისტი 15-20 წუთში ჩამოდის თქვენს ადგილზე." },
    { name: "უსაფრთხო დაქოქვა", text: "სპეციალისტი შეაერთებს ბუსტერს ძაბვის დაცვის სისტემით და სწრაფად დაქოქავს ძრავს." },
    { name: "ადგილზე შემოწმება და გადახდა", text: "დაქოქვის შემდეგ გენერატორი და ბატარეა ადგილზევე მოწმდება. გადახდა ხდება წინასწარ შეთანხმებული ფასით." },
];

export default async function DaqoqvaGamodzaxebitPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const c = content[lang as keyof typeof content] || content.ka;
    const getPath = (p: string) => (lang === "ka" ? p : `/${lang}${p}`);

    const faqData = c.faq;
    const howToData = {
        name: lang === "ka" ? "მანქანის დაქოქვა გამოძახებით — ნაბიჯ-ნაბიჯ" : lang === "ru" ? "Запуск авто с выездом — пошагово" : "Car Jump Start on Call — Step by Step",
        description: lang === "ka"
            ? "როგორ გამოვიძახოთ მანქანის დაქოქვის სერვისი გამოძახებით თბილისში"
            : lang === "ru"
                ? "Как вызвать запуск авто на дом в Тбилиси"
                : "How to call a car jump start service in Tbilisi",
        steps: howToStepsKa,
    };

    const serviceUrl = lang === "ka"
        ? "https://www.mdzgholi.ge/services/battery-charging"
        : `https://www.mdzgholi.ge/${lang}/services/battery-charging`;

    // ─── Inline styles ───────────────────────────────────────────
    const card = {
        padding: "20px 24px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: 12,
        borderLeft: "4px solid var(--yellow)",
    } as React.CSSProperties;

    const h2style = {
        fontSize: "1.65rem",
        fontWeight: 800,
        color: "#fff",
        marginTop: 44,
        marginBottom: 20,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: 12,
    } as React.CSSProperties;

    return (
        <>
            <JsonLd data={faqSchema(faqData)} />
            <JsonLd data={howToSchema(howToData)} />
            {/* Service schema with review count for AI Overviews */}
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Service",
                name: lang === "ka" ? "მანქანის დაქოქვა გამოძახებით" : lang === "ru" ? "Запуск авто с выездом" : "Car Jump Start on Call",
                alternateName: ["პერემიჩკა გამოძახებით", "ავტომობილის დაქოქვა", "პერემიჩკა"],
                url: serviceUrl,
                description: lang === "ka"
                    ? "მანქანის დაქოქვა გამოძახებით 15-20 წუთში თბილისში. ბუსტერით, 24/7. ბენზინი, დიზელი, ავტომატიკა, ჰიბრიდი."
                    : "Professional car jump start dispatched to your location in Tbilisi within 15-20 minutes. Digital booster, 24/7.",
                provider: {
                    "@type": "LocalBusiness",
                    name: "mdzgholi.ge",
                    telephone: "+995568834707",
                    url: "https://www.mdzgholi.ge",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.9",
                        reviewCount: "214",
                        bestRating: "5",
                        worstRating: "1",
                    },
                },
                areaServed: [
                    { "@type": "City", name: "Tbilisi" },
                    ...DISTRICTS_KA.map(d => ({ "@type": "AdministrativeArea", name: d })),
                ],
                offers: {
                    "@type": "Offer",
                    price: "40",
                    priceCurrency: "GEL",
                    availability: "https://schema.org/InStock",
                    url: serviceUrl,
                },
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                },
            }} />

            <article style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px 120px" }}>
                <div style={{ maxWidth: 860, margin: "0 auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>

                    {/* Header Image */}
                    <div style={{ position: "relative", width: "100%", height: "420px", backgroundColor: "#141a2e" }}>
                        <Image 
                            src="/images/blog/car-jump-start-booster.jpg" 
                            alt="მანქანის დაქოქვა გამოძახებით ბუსტერით თბილისში"
                            width={1000}
                            height={420}
                            priority
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.95) 100%)" }} />
                    </div>

                    {/* Hero Banner */}
                    <div style={{ background: "linear-gradient(135deg, #111a33 0%, #0d1428 60%, #0a0f1e 100%)", padding: "48px 32px 36px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                            <span style={{ display: "inline-block", background: "rgba(245,197,24,0.15)", color: "var(--yellow)", padding: "4px 14px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 700 }}>
                                {c.badge}
                            </span>
                            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{c.date}</span>
                            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>•</span>
                            <span style={{ color: "rgba(34,197,94,0.9)", fontSize: "0.82rem", fontWeight: 700, background: "rgba(34,197,94,0.1)", padding: "3px 10px", borderRadius: 12 }}>
                                🟢 {lang === "ka" ? "24/7 ხელმისაწვდომი" : lang === "ru" ? "24/7 доступно" : "24/7 Available"}
                            </span>
                        </div>
                        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)", fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.25 }}>
                            {c.h1}
                        </h1>
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <a href="tel:+995568834707" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--yellow)", color: "#000", padding: "12px 24px", borderRadius: 10, fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                                ☎ {c.ctaBtn}
                            </a>
                            <a href="https://wa.me/995568834707" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.15)", color: "rgba(34,197,94,0.9)", border: "1px solid rgba(34,197,94,0.3)", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                                💬 {c.ctaWa}
                            </a>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "36px 32px 50px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                        <p style={{ fontSize: "1.12rem", marginBottom: 20, color: "rgba(255,255,255,0.95)" }}>{c.intro1}</p>
                        <p style={{ marginBottom: 36 }}>{c.intro2}</p>

                        {/* Symptoms */}
                        <h2 style={h2style}>{c.h2_symptoms}</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
                            {c.symptoms.map((s, i) => (
                                <div key={i} style={{ ...card, borderLeft: "4px solid rgba(245,197,24,0.6)" }}>
                                    <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{s.icon}</div>
                                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{s.title}</h3>
                                    <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Peremichka vs Booster */}
                        <h2 style={h2style}>{c.h2_peremichka_vs_booster}</h2>
                        <p style={{ marginBottom: 16 }}>{c.peremichka_text}</p>
                        <div style={{ padding: "16px 20px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 12, marginBottom: 20 }}>
                            <div style={{ fontWeight: 700, color: "rgba(239,68,68,0.9)", marginBottom: 8 }}>⚠️ {lang === "ka" ? "პერემიჩკის რისკი" : lang === "ru" ? "Риски прикуривания" : "Jumper cable risks"}</div>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "0.97rem" }}>{c.peremichka_risk}</p>
                        </div>
                        <div style={{ padding: "16px 20px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 12, marginBottom: 32 }}>
                            <div style={{ fontWeight: 700, color: "rgba(34,197,94,0.9)", marginBottom: 8 }}>✅ {lang === "ka" ? "ბუსტერის უპირატესობა" : lang === "ru" ? "Преимущество бустера" : "Booster advantage"}</div>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "0.97rem" }}>{c.booster_advantage}</p>
                        </div>

                        {/* Comparison Table */}
                        <div style={{ overflowX: "auto", marginBottom: 44 }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                                <thead>
                                    <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                                        {c.comparisonTable.headers.map((h, i) => (
                                            <th key={i} style={{ padding: "12px 16px", textAlign: "left", color: "var(--yellow)", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {c.comparisonTable.rows.map((row, i) => (
                                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                            {row.map((cell, j) => (
                                                <td key={j} style={{ padding: "11px 16px", color: "rgba(255,255,255,0.82)" }}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Automatic */}
                        <h2 style={h2style}>{c.h2_automatic}</h2>
                        <p style={{ marginBottom: 36 }}>{c.automatic_text}</p>

                        {/* Districts */}
                        <h2 style={h2style}>{c.h2_districts}</h2>
                        <p style={{ marginBottom: 16 }}>{c.districts_text}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
                            {DISTRICTS_KA.map((d, i) => (
                                <span key={i} style={{ background: "rgba(245,197,24,0.12)", color: "var(--yellow)", border: "1px solid rgba(245,197,24,0.25)", padding: "5px 14px", borderRadius: 20, fontSize: "0.88rem", fontWeight: 600 }}>
                                    📍 {d}
                                </span>
                            ))}
                        </div>

                        {/* Price */}
                        <h2 style={h2style}>{c.h2_price}</h2>
                        <p style={{ marginBottom: 16 }}>{c.price_text}</p>
                        <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
                            {c.price_factors.map((f, i) => (
                                <li key={i} style={{ padding: "12px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 10, color: "rgba(255,255,255,0.85)" }}>{f}</li>
                            ))}
                        </ul>

                        {/* What if */}
                        <h2 style={h2style}>{c.h2_what_if}</h2>
                        <p style={{ marginBottom: 16 }}>{c.what_if_text}</p>
                        <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                            {c.what_if_steps.map((s, i) => (
                                <li key={i} style={{ padding: "12px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 10, color: "rgba(255,255,255,0.85)" }}>{s}</li>
                            ))}
                        </ul>
                        <div style={{ padding: "20px 24px", background: "linear-gradient(135deg, rgba(245,197,24,0.1) 0%, rgba(26,86,219,0.1) 100%)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: 12, marginBottom: 44 }}>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.98rem" }}>💡 {c.what_if_conclusion}</p>
                        </div>

                        {/* Internal Link */}
                        <div style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, marginBottom: 44 }}>
                            <p style={{ margin: "0 0 8px", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                                🔋{" "}
                                <Link href={getPath("/services/battery-charging")} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    {c.ctaService}
                                </Link>
                                {" "}→{" "}
                                <Link href={getPath("/services/evacuator")} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    {lang === "ka" ? "ევაკუატორი" : lang === "ru" ? "Эвакуатор" : "Tow Truck"}
                                </Link>
                            </p>
                        </div>

                        {/* FAQ */}
                        <h2 style={h2style}>{c.faqTitle}</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 44 }}>
                            {c.faq.map((item, idx) => (
                                <div key={idx} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10 }}>
                                    <h3 style={{ color: "#fff", margin: "0 0 8px", fontSize: "1.06rem", fontWeight: 700 }}>{item.q}</h3>
                                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.96rem" }}>{item.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{ padding: "36px 32px", background: "linear-gradient(135deg, #111a33 0%, #0d1222 100%)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: 16, textAlign: "center" }}>
                            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 12 }}>{c.ctaTitle}</h2>
                            <p style={{ color: "var(--text-muted)", maxWidth: 540, margin: "0 auto 28px", fontSize: "1.02rem" }}>{c.ctaDesc}</p>
                            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                                <a href="tel:+995568834707" className="btn-yellow" style={{ fontSize: "1rem", padding: "14px 28px" }}>{c.ctaBtn}</a>
                                <a href="https://wa.me/995568834707" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                                    💬 {c.ctaWa}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
