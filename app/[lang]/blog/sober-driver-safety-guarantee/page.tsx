import { locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    
    const metaDescs: Record<string, string> = {
        ka: "ფხიზელი მძღოლის გამოძახება 24/7 თბილისში — mdzgholi.ge. მძღოლი 15-20 წუთში მოვა. უსაფრთხოება და გამჭვირვალე ფასები. ☎ +995 568 83 47 07",
        en: "Sober driver in Tbilisi — mdzgholi.ge. Arrives in 15-20 min, 24/7. Safe, professional and affordable. Call: +995 568 83 47 07",
        ru: "Трезвый водитель mdzgholi.ge — приезд за 15-20 мин, 24/7. Безопасно, надежно и по доступным ценам. Звоните: +995 568 83 47 07"
    };

    const titles: Record<string, string> = {
        ka: "ფხიზელი მძღოლი: უსაფრთხოება | mdzgholi.ge",
        en: "Sober Driver: Safety Guarantee in Tbilisi | mdzgholi.ge",
        ru: "Трезвый водитель: Гарантия безопасности | mdzgholi.ge",
    };

    return { 
        title: titles[lang] ?? titles.ka, 
        description: metaDescs[lang] ?? metaDescs.ka,
        alternates: {
            canonical: lang === "ka"
                ? "https://www.mdzgholi.ge/blog/sober-driver-safety-guarantee"
                : `https://www.mdzgholi.ge/${lang}/blog/sober-driver-safety-guarantee`,
            languages: {
                ka: "https://www.mdzgholi.ge/blog/sober-driver-safety-guarantee",
                en: "https://www.mdzgholi.ge/en/blog/sober-driver-safety-guarantee",
                ru: "https://www.mdzgholi.ge/ru/blog/sober-driver-safety-guarantee",
                "x-default": "https://www.mdzgholi.ge/blog/sober-driver-safety-guarantee",
            },
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const getPath = (p: string) => (lang === "ka" ? p : `/${lang}${p}`);

    const content = {
        ka: {
            title: "ფხიზელი მძღოლის მომსახურება: რატომ არის ეს სიმშვიდის გარანტია?",
            intro1: "ალბათ ყველას გამოგვცდია სიტუაცია: სამსახურის შემდეგ მეგობრებთან ერთად რესტორანში ან წვეულებაზე აღმოჩნდით, საღამო სასიამოვნოდ გაგრძელდა, ორიოდე ჭიქა ღვინოც დალიეთ და სახლში წასვლის დრო დადგა. აქ იწყება დილემა: დატოვოთ მანქანა სადმე ქუჩაში (რაც ნიშნავს, რომ ხვალ დილით ტაქსით უნდა დაბრუნდეთ მის წამოსაყვანად), გარისკოთ და ნასვამი დაჯდეთ საჭესთან (რაც კატეგორიულად დაუშვებელია და უდიდესი საფრთხეა), თუ გამოიძახოთ ფხიზელი მძღოლი.",
            intro2: "ფხიზელი მძღოლის სერვისი სწორედ ამ დილემის საუკეთესო და უმარტივესი გამოსავალია. თქვენ ისვენებთ, მძღოლი კი თქვენივე ავტომობილით უსაფრთხოდ მიგიყვანთ სახლის კართან. მოდით, გულწრფელად ვისაუბროთ, რატომ არის ეს სერვისი დღეს აუცილებლობა და არა ფუფუნება.",
            h2_1: "რა არის სინამდვილეში ფხიზელი მძღოლის სერვისი?",
            p_1: <>ბევრს ჰგონია, რომ ეს მხოლოდ „ნასვამი მძღოლის“ სერვისია. სინამდვილეში, ეს არის თქვენი პირადი მძღოლი საჭირო მომენტში: გამოცდილი პროფესიონალი, რომელიც მოდის თქვენს მისამართზე, ჯდება თქვენს საჭესთან და მშვიდად, წესების სრული დაცვით მიჰყავხართ დანიშნულების ადგილამდე თქვენსავე <Link href={getPath("/#services")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>ავტომობილში</Link>.</>,
            h2_2: "როდის გჭირდებათ მძღოლის გამოძახება?",
            list_1: [
                "სუფრა, წვეულება ან ერთი ჭიქა ღვინოც კი: საჭესთან ალკოჰოლის მინიმალური დოზაც კი ანელებს რეაქციას. არ ღირს გარისკვა არც საკუთარი სიცოცხლის, არც სხვების და არც მართვის მოწმობის ფასად.",
                "გადაღლილობა და უძილობა: დამღლელი სამუშაო დღის ან ღამის ცვლის შემდეგ თვალები გეხუჭებათ. გადაღლილი მძღოლი საჭესთან ზუსტად ისევე საშიშია, როგორც ნასვამი.",
                "სამედიცინო პროცედურები: სტომატოლოგიური ანესთეზიის, ოფთალმოლოგთან გუგების გაფართოების ან ძლიერი მედიკამენტების მიღების შემდეგ ავტომობილის მართვა რეკომენდებული არ არის.",
                "რთული ამინდი ან უჩვეულო მარშრუტი: როცა ღამით, ძლიერ წვიმაში, თოვლში ან უცნობ გზაზე მოძრაობა გიწევთ და გირჩევნიათ საჭე უფრო თავდაჯერებულ ხელს ანდოთ."
            ],
            h2_3: "რატომ ენდობიან mdzgholi.ge-ს?",
            p_2: "როდესაც საკუთარ ავტომობილს ვინმეს ანდობთ, მთავარი ფაქტორი ნდობაა. ჩვენ ეს კარგად გვესმის. mdzgholi.ge-ში შემთხვევითი ადამიანები არ მუშაობენ — ჩვენი გუნდი დაკომპლექტებულია მძღოლებით, რომელთაც მრავალწლიანი უწყვეტი გამოცდილება აქვთ.",
            h3_1: "ჩვენი მიდგომა და სტანდარტები:",
            list_2: [
                "გამოცდილება ნებისმიერ მანქანაზე: თავისუფლად ვმართავთ როგორც მექანიკას, ისე ავტომატიკას, დიდ ჯიპებს, ჰიბრიდებსა და პრემიუმ კლასის ავტომობილებს.",
                "მოფრთხილება: თქვენს ავტომობილს ვეპყრობით ისეთივე ყურადღებით, როგორც საკუთარს — სუფთა და ფრთხილი ტარების მანერით.",
                "სწრაფი მოსვლა: თბილისის მასშტაბით მძღოლი საშუალოდ 15-20 წუთში თქვენს მანქანასთანაა.",
                "ფიქსირებული ტარიფი: ფასს წინასწარ, დარეკვისას იგებთ. გზაში საცობის ან ამინდის გამო ტარიფი აღარ გაიზრდება."
            ],
            h2_4: "უსაფრთხოება, კანონი და ფინანსები",
            p_3: "საქართველოში ნასვამ მდგომარეობაში ავტომობილის მართვაზე სანქციები ძალიან მკაცრია — მინიმუმ 700-დან 1500 ლარამდე ჯარიმა და მართვის უფლების ჩამორთმევა. მაგრამ ფინანსებზე ბევრად მნიშვნელოვანი თქვენი და გარშემომყოფების უსაფრთხოებაა. ფხიზელი მძღოლის გამოძახებით თქვენ იცავთ:",
            list_3: [
                "საკუთარ სიცოცხლეს და ჯანმრთელობას.",
                "თქვენს ავტომობილს დაზიანებისა და ავარიის რისკისგან.",
                "გზის სხვა მონაწილეებსა და ქვეითებს.",
                "მართვის მოწმობასა და უზარმაზარ ფინანსურ ჯარიმებს."
            ],
            p_4: "შედარებისთვის: ფხიზელი მძღოლის მომსახურების ღირებულება იწყება სულ რაღაც 30-40 ლარიდან, რაც შეუფასებელია იმ საფრთხესთან და ათასობით ლარის ჯარიმასთან შედარებით, რასაც ნასვამი მართვა იწვევს.",
            h2_5: "როგორ ხდება გამოძახება? (მარტივი პროცესი)",
            p_5: <>არანაირი რთული რეგისტრაციები და აპლიკაციის ძებნა — <Link href={getPath("/services/sober-driver")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>ფხიზელი მძღოლის გამოძახება</Link> ერთ ზარში წყდება:</>,
            list_4: [
                "დაგვირეკეთ ან მოგვწერეთ WhatsApp-ში: გვითხარით სად დგას თქვენი მანქანა და სად გსურთ წასვლა.",
                "ოპერატორი გითანხმებთ ფასს და დროს: მაშინვე გეცოდინებათ ზუსტი ღირებულება.",
                "მძღოლის მოსვლა 15-20 წუთში: ჩვენი გამოცდილი მძღოლი ჩაუჯდება თქვენს საჭეს.",
                "მშვიდად მისვლა სახლამდე: თქვენ ისვენებთ, მანქანა კი თქვენსავე ეზოში უსაფრთხოდ პარკინგდება."
            ],
            h2_6: "ხშირად დასმული კითხვები (FAQ)",
            faq: [
                { q: "1. როგორ ბრუნდება მძღოლი ჩემი სახლში მიყვანის შემდეგ?", a: "მძღოლი თავისი გზით (ჩვენი დამხმარე მანქანით ან ტაქსით) ბრუნდება. თქვენ ამაზე ფიქრი და დამატებითი თანხის გადახდა არ გიწევთ." },
                { q: "2. თუ მექანიკური კოლოფი მაქვს ან დიდი გაბარიტის მანქანა?", a: "ჩვენი მძღოლები მართავენ ნებისმიერი ტიპის გადაცემათა კოლოფსა და გაბარიტს — მექანიკა, ავტომატიკა, ტიპტრონიკი, სედანი თუ დიდი SUV." },
                { q: "3. წინასწარ თუ შეიძლება მძღოლის დაჯავშნა კონკრეტულ საათზე?", a: "დიახ, შეგიძლიათ წინასწარ დაგვიკავშირდეთ და შეგვიკვეთოთ მძღოლი კონკრეტულ საათზე, რათა წვეულების დასრულებისთანავე მანქანასთან დაგხვდეთ." }
            ],
            h2_7: "შეჯამება",
            p_6: "არასდროს გარისკოთ საჭესთან, როცა დაღლილი ხართ ან ალკოჰოლი გაქვთ მიღებული. ანდეთ გზა პროფესიონალს — ეს მარტივია, ხელმისაწვდომია და რაც მთავარია, უსაფრთხო.",
            p_7: <>დაგვირეკეთ <Link href={getPath("/#contact")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>mdzgholi.ge-ზე</Link> ნებისმიერ დროს — ჩვენ 24/7 თქვენს სამსახურში ვართ!</>,
            internalLinkText: "იხილეთ ჩვენი სხვა სერვისები ან დაგვიკავშირდით პირდაპირ.",
            internalLink1: "ჩვენი სერვისები",
            internalLink2: "კონტაქტი"
        },
        en: {
            title: "Sober Driver Service: Why It Is Your Safety Guarantee",
            intro1: "In today's dynamic world, where time is the most valuable resource, comfort and safety become a priority. Situations often arise where traveling in your own car is necessary, but for certain reasons, you cannot literally get behind the wheel. This is where the sober driver service comes into play — a service that is becoming increasingly popular in Georgia.",
            intro2: "In this article, we will discuss in detail what advantages this service provides, when you should use a driver on call, and why mdzgholi.ge is the best choice for a peaceful journey.",
            h2_1: "What is a sober driver service?",
            p_1: <>Many think that a sober driver is only needed after consuming alcohol. In reality, it is a professional <Link href={getPath("/#services")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>service</Link> that involves a qualified driver arriving at your location to drive you to your destination in your own car.</>,
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
            p_5: <>The process of hiring a <Link href={getPath("/services/sober-driver")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>driver on mdzgholi.ge</Link> is maximally simplified:</>,
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
            p_7: <>Remember, calling a driver is always a much wiser decision than taking a risk. <Link href={getPath("/#contact")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>Contact mdzgholi.ge</Link> and receive the highest quality service today!</>,
            internalLinkText: "View our other services or contact us directly.",
            internalLink1: "Our Services",
            internalLink2: "Contact"
        },
        ru: {
            title: "Услуга трезвого водителя: Почему это гарантия вашей безопасности",
            intro1: "В современном динамичном мире, где время — самый ценный ресурс, комфорт и безопасность выходят на первый план. Часто возникают ситуации, когда поездка на собственном автомобиле необходима, но по определенным причинам вы физически не можете сесть за руль. Именно здесь приходит на помощь услуга трезвого водителя — сервис, который становится все более популярным в Грузии.",
            intro2: "В этой статье мы подробно рассмотрим, какие преимущества дает этот сервис, когда стоит вызывать водителя и почему mdzgholi.ge — лучший выбор для спокойной поездки.",
            h2_1: "Что такое услуга трезвого водителя?",
            p_1: <>Многие думают, что трезвый водитель нужен только после употребления алкоголя. На самом деле это профессиональная <Link href={getPath("/#services")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>услуга</Link>, заключающаяся в том, что квалифицированный водитель приезжает к вам и доставляет вас к месту назначения на вашем же автомобиле.</>,
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
            p_5: <>Процесс найма <Link href={getPath("/services/sober-driver")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>водителя на mdzgholi.ge</Link> максимально упрощен:</>,
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
            p_7: <>Помните, что вызов водителя всегда более разумное решение, чем риск. <Link href={getPath("/#contact")} style={{ textDecoration: "underline", color: "var(--yellow)" }}>Свяжитесь с mdzgholi.ge</Link> и получите высококачественный сервис уже сегодня!</>,
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
                        width={1000}
                        height={400}
                        priority
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
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
                            <Link href={getPath("/#services")} className="btn-outline" style={{ textDecoration: "none", display: "inline-flex", padding: "12px 24px" }}>
                                {c.internalLink1}
                            </Link>
                            <Link href={getPath("/#contact")} className="btn-yellow" style={{ textDecoration: "none", display: "inline-flex", padding: "12px 24px" }}>
                                {c.internalLink2}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
