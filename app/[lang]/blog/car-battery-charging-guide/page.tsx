import { locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;

    const titles: Record<string, string> = {
        ka: "დამჯდარი აკუმულატორის დამუხტვა და დატენვა | mdzgholi.ge",
        en: "Dead Battery Charging & Jump Start Guide | mdzgholi.ge",
        ru: "Зарядка и запуск севшего аккумулятора | mdzgholi.ge",
    };

    const metaDescs: Record<string, string> = {
        ka: "დაჯდა აკუმულატორი? გაიგეთ, როგორ ხდება დამჯდარი აკუმულატორის დამუხტვა და დატენვა უსაფრთხოდ, რატომ ჯდება ბატარეა და როგორ გამოვიძახოთ ოსტატი. ☎ 568 83 47 07",
        en: "Dead battery? Learn how to safely charge and jump start a dead car battery, why batteries drain, and when to call mobile assistance in Tbilisi. ☎ 568 83 47 07",
        ru: "Сел аккумулятор? Узнайте, как правильно зарядить и запустить севший аккумулятор, почему садится АКБ и как вызвать помощь в Тбилиси. ☎ 568 83 47 07",
    };

    return {
        title: titles[lang] ?? titles.ka,
        description: metaDescs[lang] ?? metaDescs.ka,
        alternates: {
            canonical: lang === "ka"
                ? "https://www.mdzgholi.ge/blog/car-battery-charging-guide"
                : `https://www.mdzgholi.ge/${lang}/blog/car-battery-charging-guide`,
            languages: {
                ka: "https://www.mdzgholi.ge/blog/car-battery-charging-guide",
                en: "https://www.mdzgholi.ge/en/blog/car-battery-charging-guide",
                ru: "https://www.mdzgholi.ge/ru/blog/car-battery-charging-guide",
                "x-default": "https://www.mdzgholi.ge/blog/car-battery-charging-guide",
            },
        },
        openGraph: {
            title: titles[lang] ?? titles.ka,
            description: metaDescs[lang] ?? metaDescs.ka,
            url: lang === "ka"
                ? "https://www.mdzgholi.ge/blog/car-battery-charging-guide"
                : `https://www.mdzgholi.ge/${lang}/blog/car-battery-charging-guide`,
            images: [
                {
                    url: "https://www.mdzgholi.ge/images/blog/car-battery-charging-guide.jpg",
                    width: 1200,
                    height: 900,
                    alt: "დამჯდარი აკუმულატორის დამუხტვა და დატენვა თბილისში",
                },
            ],
        },
    };
}

export default async function CarBatteryChargingGuidePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const getPath = (p: string) => (lang === "ka" ? p : `/${lang}${p}`);

    const content = {
        ka: {
            title: "დამჯდარი აკუმულატორის დამუხტვა და დატენვა: სრული გზამკვლევი",
            badge: "ავტო რჩევები • mdzgholi.ge",
            date: "2026 წლის ოქტომბერი",
            intro1: "დილას ჩაჯექით ავტომობილში, გადაატრიალეთ გასაღები ან დააჭირეთ დაქოქვის ღილაკს და ძრავის ხმის ნაცვლად მხოლოდ უსიამოვნო წკაპუნი ისმის? დამჯდარი აკუმულატორი ერთ-ერთი ყველაზე გავრცელებული პრობლემაა, რომელსაც ნებისმიერი მძღოლი შეიძლება შეეჯახოს ყველაზე მოულოდნელ მომენტში.",
            intro2: "ბევრს ჰგონია, რომ ერთადერთი გამოსავალი მეზობლის პოვნა და ჩვეულებრივი სადენებით („პერემიჩკით“) დაქოქვაა. სინამდვილეში, თანამედროვე ავტომობილებში არასწორმა დამუხტვამ შეიძლება სერიოზულად დააზიანოს ბორტ-კომპიუტერი და ძვირადღირებული ელექტრონიკა. ამ სტატიაში დეტალურად განვიხილავთ, თუ რატომ ჯდება აკუმულატორი, როგორ ხდება აკუმულატორის უსაფრთხო დატენვა და როდის არის საჭირო სპეციალისტის გამოძახება ადგილზე.",

            h2_reasons: "ტოპ 5 მიზეზი: რატომ ჯდება ავტომობილის აკუმულატორი?",
            reasons: [
                {
                    title: "1. ჩართული დარჩენილი ფარები ან სალონის განათება",
                    desc: "ყველაზე ხშირი მიზეზი, განსაკუთრებით ღამით დატოვებულ ავტომობილებზე. თუნდაც მცირე ნათურამ რამდენიმე საათში შეიძლება მთლიანად დაცალოს აკუმულატორის მუხტი."
                },
                {
                    title: "2. დაბალი ტემპერატურა და ზამთრის ყინვა",
                    desc: "ყინვის დროს ქიმიური პროცესები აკუმულატორში ნელდება, ხოლო ძრავის ზეთი სქელდება, რის გამოც დასაქოქად გაცილებით მეტი სასტარტო ენერგიაა საჭირო. შესუსტებული აკუმულატორი ყინვას ხშირად ვერ უძლებს."
                },
                {
                    title: "3. აკუმულატორის სიძველე და რესურსის ამოწურვა",
                    desc: "საშუალო საავტომობილო აკუმულატორის სამუშაო ვადა 3-დან 5 წლამდეა. დროთა განმავლობაში ფირფიტები სულფატირდება და ბატარეა ვეღარ ინარჩუნებს მუხტს."
                },
                {
                    title: "4. გენერატორის (დინამოს) გაუმართაობა",
                    desc: "თუ გენერატორი არასაკმარის ძაბვას გამოიმუშავებს, ავტომობილის მოძრაობისას აკუმულატორი არ იტენება, არამედ პირიქით — იცლება. შედეგად, ძრავის გამორთვის შემდეგ მანქანა აღარ იქოქება."
                },
                {
                    title: "5. ავტომობილის ხანგრძლივი უმოქმედობა",
                    desc: "როდესაც ავტომობილი კვირების განმავლობაში დგას, სიგნალიზაცია, საათი და საბორტო სისტემები მუდმივად მოიხმარენ მცირე დენს („პარაზიტული დანაკარგი“), რაც თანდათან სრულად ცლის ბატარეას."
                }
            ],

            h2_safety: "დამჯდარი აკუმულატორის დამუხტვა: რატომ არის სახიფათო მოძველებული „პერემიჩკა“?",
            safety_p1: "წლების განმავლობაში დამჯდარი აკუმულატორის დამუხტვა სხვა ავტომობილიდან კაბელების გადაბმით („პერემიჩკით“) ჩვეულებრივი ამბავი იყო. თუმცა თანამედროვე ავტომობილები (განსაკუთრებით 2010 წლის შემდგომი მოდელები, ჰიბრიდები და პრემიუმ კლასის მანქანები) გადატვირთულია მგრძნობიარე მიკროპროცესორებითა და ელექტრონული ბლოკებით (ECU).",
            safety_p2: "მოძველებული კაბელებით დაქოქვისას წარმოიქმნება ძაბვის მკვეთრი ნახტომი (Voltage Spike), რომელმაც შეიძლება წამიერად დაწვას ავტომობილის კომპიუტერი, მულტიმედიის სისტემა ან ABS-ის ბლოკი, რისი შეკეთებაც ათასობით ლარი ჯდება.",
            safety_highlight: "სწორედ ამიტომ, mdzgholi.ge-ის სპეციალისტები იყენებენ მხოლოდ თანამედროვე ციფრულ ბუსტერებს (Jump Starter), რომლებსაც გააჩნია ინტეგრირებული დაცვა ძაბვის ნახტომისგან, მოკლე ჩართვისა და პოლარობის შეცდომისგან. ჩვენთან აკუმულატორის დატენვა 100%-ით უსაფრთხოა თქვენი ავტომობილისთვის!",

            h2_stepbystep: "როგორ ხდება დამჯდარი აკუმულატორის დამუხტვა ეტაპობრივად?",
            steps: [
                "1. ვიზუალური შემოწმება: სპეციალისტი ათვალიერებს აკუმულატორის ტერმინალებს (კლემებს) დაჟანგვაზე ან დაზიანებაზე.",
                "2. სწორი პოლარობით მიერთება: წითელი კაბელი უერთდება დადებით (+) პოლუსს, ხოლო შავი — უარყოფით (-) პოლუსს ან ავტომობილის კორპუსის მასას.",
                "3. ძაბვის გაზომვა: მოწმდება აკუმულატორის რეალური დარჩენილი ვოლტაჟი.",
                "4. ბუსტერის ჩართვა და ძრავის დაქოქვა: იმპულსური დენის მიწოდების შემდეგ ძრავი იქოქება წამებში.",
                "5. გენერატორის მუშაობის ტესტირება: დაქოქვის შემდეგ სპეციალისტი ამოწმებს, სწორად ტენის თუ არა გენერატორი აკუმულატორს."
            ],

            h2_service: "აკუმულატორის დატენვა თბილისში 24/7 — mdzgholi.ge",
            service_desc: "თუ თბილისში ან მის შემოგარენში აღმოჩნდით დამჯდარი აკუმულატორით, ნუ დაკარგავთ დროს გამვლელების ძებნაში. mdzgholi.ge-ს მობილური ჯგუფი მზად არის გამოცხადდეს თქვენს ლოკაციაზე 15-20 წუთში. ჩვენი სერვისი გამორიცხავს ევაკუატორის გამოძახების აუცილებლობას და გაძლევთ საშუალებას მინიმალურ დროში გააგრძელოთ გზა.",

            faqTitle: "ხშირად დასმული კითხვები აკუმულატორის დატენვის შესახებ",
            faq: [
                {
                    q: "რამდენ ხანს უნდა იმუშაოს ძრავმა დატენვის შემდეგ, რომ აკუმულატორი ისევ არ დაჯდეს?",
                    a: "დაქოქვის შემდეგ რეკომენდებულია ავტომობილმა იმუშაოს ან იმოძრაოს მინიმუმ 25-30 წუთის განმავლობაში, რათა გენერატორმა მოასწროს ბატარეის საკმარის დონეზე შევსება."
                },
                {
                    q: "შესაძლებელია თუ არა ჰიბრიდული მანქანის აკუმულატორის დატენვა?",
                    a: "დიახ. ჰიბრიდულ ავტომობილებს აქვთ ჩვეულებრივი 12-ვოლტიანი დამხმარე აკუმულატორი, რომლის დაჯდომისას სისტემა არ ირთვება. ჩვენი ბუსტერებით ჰიბრიდის დაქოქვა სრულიად უსაფრთხოდ ხორციელდება."
                },
                {
                    q: "რა ღირს აკუმულატორის დატენვა თბილისში?",
                    a: "მომსახურების ფასი ხელმისაწვდომია და თანხმდება წინასწარ ოპერატორთან ლოკაციის მიხედვით. არანაირი მოულოდნელი ან ფარული დანამატი."
                },
                {
                    q: "რა ხდება, თუ დამუხტვამ არ უშველა და აკუმულატორი გაფუჭებულია?",
                    a: "ჩვენ შეგვიძლია ადგილზევე მოგაწოდოთ ახალი აკუმულატორი გარანტიით და შეგიცვალოთ ძველი, ან საჭიროების შემთხვევაში მანქანა გადავიყვანოთ ჩვენივე ევაკუატორით."
                },
                {
                    q: "მუშაობთ თუ არა ღამით ან უქმე დღეებში?",
                    a: "დიახ, mdzgholi.ge-ის აკუმულატორის დატენვის სამსახური მორიგეობს 24 საათი, კვირაში 7 დღე."
                }
            ],

            ctaTitle: "დაგიჯდათ აკუმულატორი? ჩვენ მოვალთ 15-20 წუთში!",
            ctaDesc: "დაგვირეკეთ ნომერზე +995 568 83 47 07 და ჩვენი ოსტატი უახლესი ბუსტერით სწრაფად და უსაფრთხოდ დაქოქავს თქვენს მანქანას.",
            ctaBtn: "☎ დარეკვა: 568 83 47 07",
            ctaWa: "WhatsApp-ით დაკავშირება",
        },
        en: {
            title: "Dead Car Battery Charging & Jump Start: Complete Guide",
            badge: "Car Tips • mdzgholi.ge",
            date: "October 2026",
            intro1: "You enter your vehicle in the morning, push the Start button, and hear nothing but a dry clicking noise? A dead car battery is one of the most frustrating and common automotive emergencies.",
            intro2: "Many vehicle owners think the only solution is looking for jumper cables and asking random passersby. However, improper jump-starting on modern vehicles can severely damage delicate engine computers and electronics. In this guide, we explore why car batteries die, how safe jump-starting works, and when to call professional mobile assistance.",

            h2_reasons: "Top 5 Reasons Why Car Batteries Die",
            reasons: [
                {
                    title: "1. Headlights or interior lights left on",
                    desc: "The most frequent culprit. Even small interior bulbs or headlight relays can completely drain a healthy battery overnight."
                },
                {
                    title: "2. Freezing winter temperatures",
                    desc: "Cold temperatures slow down chemical reactions in lead-acid batteries while thickening engine oil, demanding significantly higher cranking amps."
                },
                {
                    title: "3. Old battery exceeding its lifespan",
                    desc: "The typical lifespan of a car battery is 3 to 5 years. Over time, internal plates sulfatize, losing the ability to hold charge."
                },
                {
                    title: "4. Faulty alternator or charging system",
                    desc: "If your alternator produces insufficient voltage, the battery drains while driving instead of recharging, leaving you stranded after shutting off."
                },
                {
                    title: "5. Parasitic draw during long periods of inactivity",
                    desc: "Alarms, clocks, and onboard telematics continuously draw small currents. Vehicles parked for weeks will inevitably suffer battery depletion."
                }
            ],

            h2_safety: "Dead Battery Charging: Why Are Old-Fashioned Jumper Cables Risky?",
            safety_p1: "For decades, jumper cables connected between two running cars were standard practice. But modern vehicles manufactured with complex ECUs, microprocessors, and sensors are vulnerable to transient voltage spikes.",
            safety_p2: "Traditional jump starting can create massive voltage transients that can fry onboard computers, infotainment modules, or ABS units, resulting in thousands in repair expenses.",
            safety_highlight: "That is why mdzgholi.ge technicians exclusively use industrial micro-controlled digital jump starters equipped with reverse-polarity, short-circuit, and anti-surge protection. Your car electronics are 100% safe with us.",

            h2_stepbystep: "How Does Professional Battery Charging Work?",
            steps: [
                "1. Visual inspection: Terminals are inspected for corrosion, oxidation, or loose connections.",
                "2. Polarity alignment: Positive (+) clamp connects to the positive post, negative (-) clamp connects to ground or negative terminal.",
                "3. Voltage measurement: Rest voltage is diagnosed using calibrated digital meters.",
                "4. Booster activation: Surge-protected peak cranking amperage is delivered to safely start the engine.",
                "5. Alternator charge check: After cranking, alternator charging output is verified to ensure battery replenishment."
            ],

            h2_service: "On-Site Battery Charging in Tbilisi 24/7 — mdzgholi.ge",
            service_desc: "If you find yourself stuck with a dead battery in Tbilisi or nearby suburbs, do not waste time hunting for cables. mdzgholi.ge mobile assistance arrives within 15-20 minutes with professional equipment, getting you back on the road without needing a tow truck.",

            faqTitle: "Frequently Asked Questions About Battery Charging",
            faq: [
                {
                    q: "How long should I drive the car after jump starting?",
                    a: "Drive or keep the engine running for at least 25-30 minutes so that the alternator has adequate time to recharge the battery."
                },
                {
                    q: "Can you jump start hybrid vehicles?",
                    a: "Yes. Hybrid cars have an auxiliary 12V battery that activates the main hybrid system. Our boosters safely power this 12V circuit."
                },
                {
                    q: "How much does roadside battery jump starting cost?",
                    a: "Pricing is transparent and agreed upon upfront with our dispatcher depending on your location, with no hidden surprises."
                },
                {
                    q: "What if the battery is permanently damaged?",
                    a: "We can deliver and install a brand-new battery on the spot with warranty, or arrange towing if extensive electrical work is needed."
                },
                {
                    q: "Do you operate during nighttime hours and weekends?",
                    a: "Yes, our mobile emergency team operates around the clock 24/7 in all weather conditions."
                }
            ],

            ctaTitle: "Car Battery Dead? We Arrive in 15-20 Minutes!",
            ctaDesc: "Call us at +995 568 83 47 07 and our technician will safely jump start your car using modern booster equipment.",
            ctaBtn: "☎ Call Now: +995 568 83 47 07",
            ctaWa: "WhatsApp Assistance",
        },
        ru: {
            title: "Зарядка и запуск севшего аккумулятора авто: Полный гид",
            badge: "Автосоветы • mdzgholi.ge",
            date: "Октябрь 2026",
            intro1: "Садитесь утром в машину, поворачиваете ключ или нажимаете кнопку Start, а в ответ слышите лишь глухие щелчки? Севший автомобильный аккумулятор — одна из самых частых и досадных проблем для любого водителя.",
            intro2: "Многие думают, что единственный выход — искать провода («прикуриватель») и просить случайных водителей во дворе. Однако на современных машинах неправильный запуск может сжечь бортовой компьютер и дорогую электронику. В этой статье мы расскажем, почему садится АКБ, как правильно запустить мотор бустером и когда лучше вызвать специалиста на место.",

            h2_reasons: "Топ-5 причин, почему садится аккумулятор автомобиля",
            reasons: [
                {
                    title: "1. Забытые фары, габариты или освещение салона",
                    desc: "Самая частая причина. Даже небольшая лампочка в салоне за ночь способна полностью разрядить исправный аккумулятор."
                },
                {
                    title: "2. Зимние морозы и перепады температуры",
                    desc: "На холоде химические процессы в батарее замедляются, а моторное масло густеет, требуя в разы больше пускового тока для прокрутки стартера."
                },
                {
                    title: "3. Износ и естественное старение аккумулятора",
                    desc: "Срок службы автомобильного аккумулятора составляет 3-5 лет. Со временем пластины сульфатируются, и батарея перестает держать заряд."
                },
                {
                    title: "4. Неисправность генератора (нет зарядки)",
                    desc: "Если генератор выдает слабый ток, машина во время движения питается от аккумулятора, полностью его опустошая."
                },
                {
                    title: "5. Долгий простой автомобиля (утечка тока)",
                    desc: "Сигнализация, часы и мультимедиа потребляют фоновый ток. За несколько недель стоянки аккумулятор может разрядиться в ноль."
                }
            ],

            h2_safety: "Запуск севшего аккумулятора: Чем опасен обычный «прикуриватель»?",
            safety_p1: "Десятилетиями запуск авто проводами от другой заведенной машины был нормой. Но современные автомобили оснащены сложными блоками управления (ЭБУ) и чувствительными датчиками.",
            safety_p2: "При кустарном прикуривании возникают импульсные скачки напряжения, которые способны мгновенно вывести из строя микросхемы бортового компьютера или блок ABS.",
            safety_highlight: "Именно поэтому специалисты mdzgholi.ge используют сертифицированные цифровые бустеры с интеллектуальной защитой от перегрузок и переполюсовки. Это на 100% безопасно для электроники вашего авто.",

            h2_stepbystep: "Как правильно запустить и зарядить севший аккумулятор?",
            steps: [
                "1. Осмотр клемм: Проверка контактов на предмет окисления и надежности фиксации.",
                "2. Подключение бустера: Красный зажим на плюс (+), черный на минус (-) или массу кузова.",
                "3. Контроль напряжения: Замер остаточного уровня заряда аккумулятора цифровым прибором.",
                "4. Подача пускового тока: Безопасный запуск двигателя мощным импульсом.",
                "5. Диагностика генератора: Контроль зарядного напряжения после пуска двигателя."
            ],

            h2_service: "Зарядка аккумулятора и запуск авто в Тбилиси 24/7 — mdzgholi.ge",
            service_desc: "Если в Тбилиси или окрестностях у вас сел аккумулятор, не тратьте время на поиски проводов во дворе. Мобильная техпомощь mdzgholi.ge прибудет за 15-20 минут с профессиональным оборудованием и заведет ваш автомобиль без вызова эвакуатора.",

            faqTitle: "Часто задаваемые вопросы о зарядке аккумулятора",
            faq: [
                {
                    q: "Сколько нужно ездить после запуска, чтобы аккумулятор зарядился?",
                    a: "Рекомендуется не глушить автомобиль и совершить поездку продолжительностью не менее 25-30 минут для восполнения заряда генератором."
                },
                {
                    q: "Заводите ли вы гибридные автомобили?",
                    a: "Да, у гибридов есть обычный 12-вольтовый аккумулятор, запускающий гибридную систему. Наши бустеры идеально подходят для таких авто."
                },
                {
                    q: "Сколько стоит запуск севшего аккумулятора в Тбилиси?",
                    a: "Цена доступна и согласуется заранее с диспетчером в зависимости от района. Никаких скрытых доплат."
                },
                {
                    q: "Что если аккумулятор окончательно вышел из строя?",
                    a: "Мы можем привезти и установить новую батарею с гарантией прямо на месте или предоставить эвакуатор."
                },
                {
                    q: "Работаете ли вы ночью и в выходные дни?",
                    a: "Да, служба помощи mdzgholi.ge работает круглосуточно 24/7 в любую погоду."
                }
            ],

            ctaTitle: "Сел аккумулятор? Приедем за 15-20 минут!",
            ctaDesc: "Звоните по номеру +995 568 83 47 07 — мастер быстро и безопасно заведет авто профессиональным бустером.",
            ctaBtn: "☎ Позвонить: +995 568 83 47 07",
            ctaWa: "Написать в WhatsApp",
        }
    };

    const c = content[lang as keyof typeof content] || content.ka;

    return (
        <>
            <JsonLd data={faqSchema(c.faq)} />

            <article style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px 120px" }}>
                <div style={{ maxWidth: 860, margin: "0 auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                    
                    {/* Header Image */}
                    <div style={{ position: "relative", width: "100%", height: "420px", backgroundColor: "#141a2e" }}>
                        <Image 
                            src="/images/blog/car-battery-charging-guide.jpg" 
                            alt="დამჯდარი აკუმულატორის დამუხტვა და დატენვა თბილისში"
                            width={1000}
                            height={420}
                            priority
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.95) 100%)" }} />
                    </div>

                    {/* Body */}
                    <div style={{ padding: "36px 32px 50px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                        
                        {/* Meta badge */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                            <span style={{ display: "inline-block", background: "rgba(245,197,24,0.15)", color: "var(--yellow)", padding: "4px 14px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 700 }}>
                                {c.badge}
                            </span>
                            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{c.date}</span>
                        </div>

                        {/* H1 */}
                        <h1 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: 24, lineHeight: 1.25 }}>
                            {c.title}
                        </h1>

                        <p style={{ fontSize: "1.12rem", marginBottom: 20, color: "rgba(255,255,255,0.95)" }}>{c.intro1}</p>
                        <p style={{ marginBottom: 36 }}>{c.intro2}</p>

                        {/* Reasons */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_reasons}
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                            {c.reasons.map((r, idx) => (
                                <div key={idx} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 12, borderLeft: "4px solid var(--yellow)" }}>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
                                        {r.title}
                                    </h3>
                                    <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "0.98rem" }}>
                                        {r.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Safety & Modern Booster */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_safety}
                        </h2>
                        <p style={{ marginBottom: 16 }}>{c.safety_p1}</p>
                        <p style={{ marginBottom: 20 }}>{c.safety_p2}</p>

                        {/* Highlight Box */}
                        <div style={{ padding: "24px 28px", background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(26,86,219,0.12) 100%)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: 14, marginBottom: 36 }}>
                            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--yellow)", marginBottom: 8 }}>
                                ⚡ უსაფრთხოების გარანტია
                            </div>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.98rem" }}>
                                {c.safety_highlight}
                            </p>
                        </div>

                        {/* Step by step */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_stepbystep}
                        </h2>
                        <ul style={{ paddingLeft: 24, marginBottom: 40, display: "flex", flexDirection: "column", gap: 12 }}>
                            {c.steps.map((step, idx) => (
                                <li key={idx} style={{ color: "rgba(255,255,255,0.85)" }}>
                                    {step}
                                </li>
                            ))}
                        </ul>

                        {/* Service Promotion with Rich Internal Linking */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_service}
                        </h2>
                        <p style={{ marginBottom: 24 }}>
                            {c.service_desc}
                        </p>
                        <p style={{ marginBottom: 36, color: "rgba(255,255,255,0.8)" }}>
                            გაეცანით ჩვენს სპეციალურ გვერდს:{" "}
                            <Link href={getPath("/services/battery-charging")} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                {lang === "ka" ? "აკუმულატორის დატენვა და დამუხტვა ადგილზევე" : lang === "ru" ? "Услуга зарядки аккумулятора" : "On-site Battery Charging Service"}
                            </Link>
                            , ასევე საჭიროების შემთხვევაში ჩვენთან ხელმისაწვდომია{" "}
                            <Link href={getPath("/services/tire-change")} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                {lang === "ka" ? "საბურავის შეცვლა" : lang === "ru" ? "замена шин" : "mobile tire change"}
                            </Link>{" "}
                            და{" "}
                            <Link href={getPath("/services/evacuator")} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                {lang === "ka" ? "ევაკუატორი თბილისში" : lang === "ru" ? "эвакуатор" : "tow truck service"}
                            </Link>
                            .
                        </p>

                        {/* FAQ Block */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.faqTitle}
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 44 }}>
                            {c.faq.map((item, idx) => (
                                <div key={idx} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10 }}>
                                    <h4 style={{ color: "#fff", margin: "0 0 8px", fontSize: "1.08rem", fontWeight: 700 }}>
                                        {item.q}
                                    </h4>
                                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.96rem" }}>
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Box */}
                        <div style={{ padding: "36px 32px", background: "linear-gradient(135deg, #111a33 0%, #0d1222 100%)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: 16, textAlign: "center" }}>
                            <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 12 }}>
                                {c.ctaTitle}
                            </h3>
                            <p style={{ color: "var(--text-muted)", maxWidth: 540, margin: "0 auto 28px", fontSize: "1.02rem" }}>
                                {c.ctaDesc}
                            </p>
                            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                                <a href="tel:+995568834707" className="btn-yellow" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                                    {c.ctaBtn}
                                </a>
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
