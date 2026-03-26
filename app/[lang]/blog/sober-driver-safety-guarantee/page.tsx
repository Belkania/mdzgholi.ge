import { getDictionary, locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    
    const metaDescs: Record<string, string> = {
        ka: "ეძებთ ფხიზელ მძღოლს? mdzgholi.ge გთავაზობთ პროფესიონალი მძღოლების გამოძახების სერვისს 24/7. უსაფრთხოება, კომფორტი და დაბალი ფასები. დაგვიკავშირდით!",
        en: "Looking for a sober driver in Georgia? mdzgholi.ge offers professional driver on call services 24/7. Safety, comfort, and affordable prices. Contact us!",
        ru: "Ищете трезвого водителя в Грузии? mdzgholi.ge предлагает услуги профессиональных водителей 24/7. Безопасность, комфорт и доступные цены. Звоните!"
    };

    const titles: Record<string, string> = {
        ka: "ფხიზელი მძღოლის მომსახურება | ბლოგი | mdzgholi.ge",
        en: "Sober Driver Service | Blog | mdzgholi.ge",
        ru: "Услуга трезвого водителя | Блог | mdzgholi.ge",
    };

    return { 
        title: titles[lang] ?? titles.ka, 
        description: metaDescs[lang] ?? metaDescs.ka,
        alternates: {
            canonical: `https://www.mdzgholi.ge/${lang}/blog/sober-driver-safety-guarantee`,
            languages: {
                ka: "https://www.mdzgholi.ge/ka/blog/sober-driver-safety-guarantee",
                en: "https://www.mdzgholi.ge/en/blog/sober-driver-safety-guarantee",
                ru: "https://www.mdzgholi.ge/ru/blog/sober-driver-safety-guarantee",
                "x-default": "https://www.mdzgholi.ge/ka/blog/sober-driver-safety-guarantee",
            },
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);

    const content = {
        ka: {
            title: "ფხიზელი მძღოლის მომსახურება: რატომ არის ეს თქვენი უსაფრთხოების გარანტია?",
            intro1: "დღევანდელ დინამიკურ სამყაროში, სადაც დრო ყველაზე ძვირფასი რესურსია, კომფორტი და უსაფრთხოება პრიორიტეტული ხდება. ხშირად ხდება სიტუაციები, როდესაც საკუთარი ავტომობილით გადაადგილება აუცილებელია, თუმცა გარკვეული მიზეზების გამო საჭესთან დაჯდომას ვერ ახერხებთ. სწორედ აქ შემოდის ასპარეზზე ფხიზელი მძღოლის მომსახურება — სერვისი, რომელიც საქართველოში სულ უფრო პოპულარული ხდება.",
            intro2: "ამ სტატიაში დეტალურად განვიხილავთ, თუ რა უპირატესობები აქვს ამ სერვისს, როდის უნდა ისარგებლოთ მძღოლის გამოძახებით და რატომ არის mdzgholi.ge საუკეთესო არჩევანი თქვენი მშვიდი მგზავრობისთვის.",
            h2_1: "რა არის ფხიზელი მძღოლის სერვისი?",
            p_1: <>ბევრს ჰგონია, რომ ფხიზელი მძღოლი მხოლოდ ალკოჰოლის მიღების შემთხვევაშია საჭირო. სინამდვილეში, ეს არის პროფესიონალური <Link href={`/${lang}/#services`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>მომსახურება</Link>, რომელიც გულისხმობს კვალიფიციური მძღოლის მოსვლას თქვენს მისამართზე, რომელიც თქვენივე ავტომობილით მიგიყვანთ დანიშნულების ადგილამდე.</>,
            h2_2: "ძირითადი მიზეზები, რის გამოც ადამიანები იძახებენ ფხიზელ მძღოლს:",
            list_1: [
                "ალკოჰოლის მიღება: ყველაზე გავრცელებული მიზეზი. წვეულების, დაბადების დღის ან კორპორატიული საღამოს შემდეგ საჭესთან დაჯდომა არა მხოლოდ კანონდარღვევა, არამედ სიცოცხლისთვის საშიშია.",
                "დაღლილობა ან სტრესი: მძიმე სამუშაო დღის შემდეგ კონცენტრაციის უნარი ქვეითდება.",
                "ჯანმრთელობის მდგომარეობა: მოულოდნელი შეუძლოდ ყოფნა ან მედიკამენტების მიღება, რომლებიც ძილიანობას იწვევს.",
                "გამოუცდელობა რთულ მარშრუტებზე: როდესაც გიწევთ გადაადგილება რთულ რელიეფზე ან ღამის საათებში, სადაც მეტი პროფესიონალიზმია საჭირო."
            ],
            h2_3: "რატომ უნდა აირჩიოთ mdzgholi.ge?",
            p_2: "როდესაც საქმე თქვენს ავტომობილს და უსაფრთხოებას ეხება, შემთხვევით პირებს არ უნდა ენდოთ. mdzgholi.ge გთავაზობთ გამოცდილ მძღოლთა ბაზას, რომლებიც პასუხისმგებელნი არიან თქვენს კომფორტზე.",
            h3_1: "ჩვენი სერვისის უპირატესობები:",
            list_2: [
                "პროფესიონალიზმი: ჩვენი მძღოლები ფლობენ მართვის მრავალწლიან გამოცდილებას სხვადასხვა ტიპის (ავტომატიკა, მექანიკა) ავტომობილებზე.",
                "სისწრაფე: გამოძახებიდან უმოკლეს დროში მძღოლი თქვენთან იქნება.",
                "ხელმისაწვდომი ფასი: ჩვენ გთავაზობთ კონკურენტულ ტარიფებს, რაც სერვისს ყველასთვის ხელმისაწვდომს ხდის.",
                "24/7 მომსახურება: ჩვენ ვმუშაობთ ნებისმიერ დროს, დღისით თუ ღამით."
            ],
            h2_4: "უსაფრთხოება — ჩვენი მთავარი პრიორიტეტი",
            p_3: "სტატისტიკა აჩვენებს, რომ ავტოსაგზაო შემთხვევების დიდი ნაწილი სწორედ არაფხიზელ მდგომარეობაში მართვის ან გადაღლილობის შედეგია. ფხიზელი მძღოლის გამოძახებით თქვენ იცავთ:",
            list_3: [
                "საკუთარ სიცოცხლეს და ჯანმრთელობას.",
                "თქვენს ავტომობილს დაზიანებისგან.",
                "სხვა მგზავრებსა და ქვეითებს.",
                "მართვის მოწმობას და ფინანსებს (ჯარიმების თავიდან აცილება)."
            ],
            p_4: "იცოდით თუ არა? საქართველოში კანონმდებლობა საკმაოდ მკაცრია არაფხიზელ მდგომარეობაში მართვაზე. ჯარიმები მაღალია, ხოლო განმეორების შემთხვევაში მართვის უფლების ჩამორთმევა გარდაუვალია. ფხიზელი მძღოლის მომსახურება ბევრად უფრო იაფია, ვიდრე ნებისმიერი ჯარიმა.",
            h2_5: "როგორ მუშაობს სერვისი? (ნაბიჯ-ნაბიჯ ინსტრუქცია)",
            p_5: <><Link href={`/${lang}/services/sober-driver`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>mdzgholi.ge-ზე მძღოლის დაქირავების</Link> პროცესი მაქსიმალურად გამარტივებულია:</>,
            list_4: [
                "შედით საიტზე ან დარეკეთ: აირჩიეთ თქვენთვის სასურველი მძღოლი ან დაუკავშირდით ოპერატორს.",
                "მიუთითეთ ლოკაცია: გვითხარით სად იმყოფებით და სად გსურთ წასვლა.",
                "დაელოდეთ მძღოლს: მძღოლი მოვა მითითებულ მისამართზე მაქსიმუმ 15-20 წუთში.",
                "იმგზავრეთ მშვიდად: გადაეცით გასაღები პროფესიონალს და დატკბით მგზავრობით თქვენივე მანქანის უკანა სავარძლიდან."
            ],
            h2_6: "ხშირად დასმული კითხვები (FAQ)",
            faq: [
                { q: "1. რა ღირს ფხიზელი მძღოლის მომსახურება?", a: "ფასი დამოკიდებულია მანძილზე და დღის მონაკვეთზე. mdzgholi.ge-ზე ფასები გამჭვირვალეა და წინასწარ გეცოდინებათ მგზავრობის ღირებულება." },
                { q: "2. რამდენად გამოცდილები არიან მძღოლები?", a: "ჩვენს პლატფორმაზე რეგისტრირებული ყველა მძღოლი გადის მკაცრ შერჩევას. მათ აქვთ მინიმუმ 5-7 წლიანი უწყვეტი მართვის გამოცდილება." },
                { q: "3. შესაძლებელია თუ არა მძღოლის წინასწარ დაჯავშნა?", a: "დიახ, შეგიძლიათ დაგვიკავშირდეთ და წინასწარ დაჯავშნოთ მძღოლი კონკრეტული საათისთვის, რათა დარწმუნებული იყოთ, რომ დაგეგმილ დროს ტრანსპორტირება გარანტირებული გექნებათ." }
            ],
            h2_7: "დასკვნა",
            p_6: "ავტომობილის მართვა დიდი პასუხისმგებლობაა. ნუ დააყენებთ საფრთხის ქვეშ საკუთარ თავს და სხვებს. ფხიზელი მძღოლი არ არის ფუფუნება, ეს არის თანამედროვე, პასუხისმგებლიანი ადამიანის არჩევანი.",
            p_7: <>გახსოვდეთ, მძღოლის გამოძახება ყოველთვის უფრო გონივრული გადაწყვეტილებაა, ვიდრე რისკზე წასვლა. <Link href={`/${lang}/#contact`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>დაგვიკავშირდით</Link> mdzgholi.ge-ს და მიიღეთ უმაღლესი ხარისხის მომსახურება დღესვე!</>,
            internalLinkText: "იხილეთ ჩვენი სხვა სერვისები ან დაგვიკავშირდით პირდაპირ.",
            internalLink1: "ჩვენი სერვისები",
            internalLink2: "კონტაქტი"
        },
        en: {
            title: "Sober Driver Service: Why It Is Your Safety Guarantee",
            intro1: "In today's dynamic world, where time is the most valuable resource, comfort and safety become a priority. Situations often arise where traveling in your own car is necessary, but for certain reasons, you cannot literally get behind the wheel. This is where the sober driver service comes into play — a service that is becoming increasingly popular in Georgia.",
            intro2: "In this article, we will discuss in detail what advantages this service provides, when you should use a driver on call, and why mdzgholi.ge is the best choice for a peaceful journey.",
            h2_1: "What is a sober driver service?",
            p_1: <>Many think that a sober driver is only needed after consuming alcohol. In reality, it is a professional <Link href={`/${lang}/#services`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>service</Link> that involves a qualified driver arriving at your location to drive you to your destination in your own car.</>,
            h2_2: "Primary reasons why people call a sober driver:",
            list_1: [
                "Alcohol consumption: The most common reason. Driving after a party, birthday, or corporate evening is not just a violation of the law, but life-threatening.",
                "Fatigue or stress: After a hard day's work, concentration levels drop significantly.",
                "Health conditions: Sudden illness or taking medication that causes drowsiness.",
                "Inexperience on difficult routes: When you have to navigate difficult terrain or drive at night, where greater professionalism is required."
            ],
            h2_3: "Why choose mdzgholi.ge?",
            p_2: "When it comes to your car and safety, you shouldn't trust random people. mdzgholi.ge offers a curated database of experienced drivers who take full responsibility for your comfort.",
            h3_1: "Advantages of our service:",
            list_2: [
                "Professionalism: Our drivers possess years of driving experience across various vehicle types (automatic, manual).",
                "Speed: From the moment you call, a driver will be with you in the shortest possible time.",
                "Affordable Pricing: We offer competitive rates, making the service accessible to everyone.",
                "24/7 Service: We operate at any time, day or night."
            ],
            h2_4: "Safety — Our Top Priority",
            p_3: "Statistics show that a large portion of traffic accidents are the result of driving under the influence or fatigue. By calling a sober driver, you protect:",
            list_3: [
                "Your own life and health.",
                "Your car from damage.",
                "Other passengers and pedestrians.",
                "Your driver's license and finances (avoiding steep fines)."
            ],
            p_4: "Did you know? Legislation in Georgia is quite strict regarding driving under the influence. Fines are high, and in the case of a repeat offense, the revocation of driving privileges is inevitable. A sober driver service is far cheaper than any fine.",
            h2_5: "How does the service work? (Step-by-step guide)",
            p_5: <>The process of hiring a <Link href={`/${lang}/services/sober-driver`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>driver on mdzgholi.ge</Link> is maximally simplified:</>,
            list_4: [
                "Visit the site or call: Choose your preferred service or contact a dispatcher directly.",
                "Specify your location: Tell us where you are and where you want to go.",
                "Wait for the driver: A driver will arrive at your specified address in a maximum of 15-20 minutes.",
                "Travel peacefully: Hand over the key to a professional and enjoy the ride from the back seat of your own car."
            ],
            h2_6: "Frequently Asked Questions (FAQ)",
            faq: [
                { q: "1. How much does a sober driver service cost?", a: "The price depends on the distance and the time of day. On mdzgholi.ge, prices are transparent, and you will know the cost of the trip in advance." },
                { q: "2. How experienced are the drivers?", a: "All drivers registered on our platform pass a strict selection process. They have a minimum of 5-7 years of continuous driving experience." },
                { q: "3. Is it possible to book a driver in advance?", a: "Yes, you can contact us and book a driver in advance for a specific hour to ensure guaranteed transportation at your planned time." }
            ],
            h2_7: "Conclusion",
            p_6: "Driving a car is a huge responsibility. Do not put yourself and others at risk. A sober driver is not a luxury; it is the choice of a modern, responsible person.",
            p_7: <>Remember, calling a driver is always a much wiser decision than taking a risk. <Link href={`/${lang}/#contact`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>Contact mdzgholi.ge</Link> and receive the highest quality service today!</>,
            internalLinkText: "View our other services or contact us directly.",
            internalLink1: "Our Services",
            internalLink2: "Contact"
        },
        ru: {
            title: "Услуга трезвого водителя: Почему это гарантия вашей безопасности",
            intro1: "В современном динамичном мире, где время — самый ценный ресурс, комфорт и безопасность выходят на первый план. Часто возникают ситуации, когда поездка на собственном автомобиле необходима, но по определенным причинам вы физически не можете сесть за руль. Именно здесь приходит на помощь услуга трезвого водителя — сервис, который становится все более популярным в Грузии.",
            intro2: "В этой статье мы подробно рассмотрим, какие преимущества дает этот сервис, когда стоит вызывать водителя и почему mdzgholi.ge — лучший выбор для спокойной поездки.",
            h2_1: "Что такое услуга трезвого водителя?",
            p_1: <>Многие думают, что трезвый водитель нужен только после употребления алкоголя. На самом деле это профессиональная <Link href={`/${lang}/#services`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>услуга</Link>, заключающаяся в том, что квалифицированный водитель приезжает к вам и доставляет вас к месту назначения на вашем же автомобиле.</>,
            h2_2: "Основные причины, почему люди вызывают трезвого водителя:",
            list_1: [
                "Употребление алкоголя: Самая частая причина. Вождение после вечеринки, дня рождения или корпоратива не только незаконно, но и опасно для жизни.",
                "Усталость или стресс: После тяжелого рабочего дня концентрация внимания заметно снижается.",
                "Состояние здоровья: Внезапное недомогание или прием лекарств, вызывающих сонливость.",
                "Неопытность на сложных маршрутах: Когда нужно передвигаться по сложной местности или ночью, где требуется больший профессионализм."
            ],
            h2_3: "Почему стоит выбрать mdzgholi.ge?",
            p_2: "Когда речь идет о вашем автомобиле и безопасности, нельзя доверять случайным людям. mdzgholi.ge предлагает базу опытных водителей, которые несут ответственность за ваш комфорт.",
            h3_1: "Преимущества нашего сервиса:",
            list_2: [
                "Профессионализм: Наши водители имеют многолетний опыт вождения автомобилей различных типов (автоматическая, механическая коробка передач).",
                "Скорость: С момента звонка водитель будет у вас в кратчайшие сроки.",
                "Доступная цена: Мы предлагаем конкурентоспособные тарифы, делая услугу доступной каждому.",
                "Круглосуточное обслуживание: Мы работаем в любое время суток, днем и ночью."
            ],
            h2_4: "Безопасность — наш главный приоритет",
            p_3: "Статистика показывает, что значительная часть ДТП происходит именно из-за вождения в нетрезвом виде или от усталости. Вызывая трезвого водителя, вы защищаете:",
            list_3: [
                "Свою жизнь и здоровье.",
                "Свой автомобиль от повреждений.",
                "Других пассажиров и пешеходов.",
                "Свои водительские права и финансы (избежание крупных штрафов)."
            ],
            p_4: "Знаете ли вы? Законодательство в Грузии довольно строго относится к вождению в нетрезвом виде. Штрафы высоки, а при повторном нарушении лишение водительских прав неизбежно. Услуга трезвого водителя обходится гораздо дешевле любого штрафа.",
            h2_5: "Как работает сервис? (Пошаговая инструкция)",
            p_5: <>Процесс найма <Link href={`/${lang}/services/sober-driver`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>водителя на mdzgholi.ge</Link> максимально упрощен:</>,
            list_4: [
                "Зайдите на сайт или позвоните: Выберите подходящую услугу или свяжитесь с оператором.",
                "Укажите местоположение: Скажите, где вы находитесь и куда хотите поехать.",
                "Дождитесь водителя: Водитель прибудет по указанному адресу максимум через 15-20 минут.",
                "Путешествуйте спокойно: Передайте ключи профессионалу и наслаждайтесь поездкой с заднего сиденья."
            ],
            h2_6: "Часто задаваемые вопросы (FAQ)",
            faq: [
                { q: "1. Сколько стоит услуга трезвого водителя?", a: "Цена зависит от расстояния и времени суток. На mdzgholi.ge цены прозрачны, и вы заранее будете знать стоимость поездки." },
                { q: "2. Насколько опытны водители?", a: "Все водители, зарегистрированные на нашей платформе, проходят строгий отбор. Они имеют минимум 5-7 лет непрерывного стажа вождения." },
                { q: "3. Можно ли забронировать водителя заранее?", a: "Да, вы можете связаться с нами и забронировать водителя на определенное время, чтобы гарантировать транспорт в нужное вам время." }
            ],
            h2_7: "Заключение",
            p_6: "Вождение автомобиля — это огромная ответственность. Не подвергайте опасности себя и других. Трезвый водитель — это не роскошь, это выбор современного, ответственного человека.",
            p_7: <>Помните, что вызов водителя всегда более разумное решение, чем риск. <Link href={`/${lang}/#contact`} style={{ textDecoration: "underline", color: "var(--yellow)" }}>Свяжитесь с mdzgholi.ge</Link> и получите высококачественный сервис уже сегодня!</>,
            internalLinkText: "Распространяется на все наши услуги или свяжитесь с нами напрямую.",
            internalLink1: "Наши услуги",
            internalLink2: "Контакты"
        }
    };

    const c = content[lang as keyof typeof content] || content.ka;

    // Alt text mapping requested by user
    const altText = ["fxizeli mdzgoli", "მძღოლის გამოძახება", "mdzgoli ge"].join(", ");

    return (
        <article style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px 120px" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, overflow: "hidden" }}>
                {/* Image Header with user requested alt text */}
                <div style={{ position: "relative", width: "100%", height: "400px", backgroundColor: "#1e2439" }}>
                    <Image 
                        src="/images/blog/sober-driver.jpg" 
                        alt={altText}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>

                {/* Article Content */}
                <div style={{ padding: "40px 32px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                    <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: 24, lineHeight: 1.3 }}>
                        {c.title}
                    </h1>

                    <p style={{ marginBottom: 20 }}>{c.intro1}</p>
                    <p style={{ marginBottom: 40 }}>{c.intro2}</p>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_1}</h2>
                    <p style={{ marginBottom: 40 }}>{c.p_1}</p>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_2}</h2>
                    <ul style={{ paddingLeft: 24, marginBottom: 40 }}>
                        {c.list_1.map((item, i) => <li key={`l1-${i}`} style={{ marginBottom: 12 }}>{item}</li>)}
                    </ul>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_3}</h2>
                    <p style={{ marginBottom: 20 }}>{c.p_2}</p>

                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--yellow)", marginTop: 24, marginBottom: 16 }}>{c.h3_1}</h3>
                    <ul style={{ paddingLeft: 24, marginBottom: 40 }}>
                        {c.list_2.map((item, i) => <li key={`l2-${i}`} style={{ marginBottom: 12 }}>{item}</li>)}
                    </ul>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_4}</h2>
                    <p style={{ marginBottom: 20 }}>{c.p_3}</p>
                    <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
                        {c.list_3.map((item, i) => <li key={`l3-${i}`} style={{ marginBottom: 12 }}>{item}</li>)}
                    </ul>
                    <div style={{ padding: 20, background: "rgba(245,197,24,0.1)", borderLeft: "4px solid var(--yellow)", borderRadius: "0 8px 8px 0", marginBottom: 40 }}>
                        <p style={{ margin: 0, color: "#fff", fontSize: "0.95rem" }}>{c.p_4}</p>
                    </div>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_5}</h2>
                    <p style={{ marginBottom: 20 }}>{c.p_5}</p>
                    <ul style={{ paddingLeft: 24, marginBottom: 40, listStyleType: "decimal" }}>
                        {c.list_4.map((item, i) => <li key={`l4-${i}`} style={{ marginBottom: 12 }}>{item}</li>)}
                    </ul>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_6}</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                        {c.faq.map((item, i) => (
                            <div key={`faq-${i}`}>
                                <h4 style={{ color: "#fff", margin: "0 0 8px", fontSize: "1.1rem" }}>{item.q}</h4>
                                <p style={{ margin: 0, color: "var(--text-muted)" }}>{item.a}</p>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: 40, marginBottom: 16 }}>{c.h2_7}</h2>
                    <p style={{ marginBottom: 20 }}>{c.p_6}</p>
                    <p style={{ marginBottom: 40, fontWeight: 600, color: "#fff" }}>{c.p_7}</p>

                    {/* Internal Links Block */}
                    <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.1)", margin: "40px 0" }} />
                    <div style={{ textAlign: "center" }}>
                        <p style={{ marginBottom: 20 }}>{c.internalLinkText}</p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href={`/${lang}/#services`} className="btn-outline" style={{ textDecoration: "none", display: "inline-flex", padding: "12px 24px" }}>
                                {c.internalLink1}
                            </Link>
                            <Link href={`/${lang}/#contact`} className="btn-yellow" style={{ textDecoration: "none", display: "inline-flex", padding: "12px 24px" }}>
                                {c.internalLink2}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
