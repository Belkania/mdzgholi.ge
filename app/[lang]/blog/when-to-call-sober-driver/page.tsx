import { getDictionary, locales } from "@/dictionaries";
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
        ka: "როდის არის საჭირო ფხიზელი მძღოლი? სიტუაციები, რესტორნიდან გამოძახება და ფასები | mdzgholi.ge",
        en: "When to Hire a Sober Driver? Situations, Restaurant Pickup & Pricing | mdzgholi.ge",
        ru: "Когда нужен трезвый водитель? Ситуации, вызов из ресторана и цены | mdzgholi.ge",
    };

    const metaDescs: Record<string, string> = {
        ka: "რა სიტუაციებშია ეფექტური ფხიზელი მძღოლის გამოძახება? რესტორანი, წვეულება, გადაღლილობა. საწყისი ფასი 40 ლარიდან შეთანხმებით. მძღოლის მოსვლა 15-20 წუთში: ☎ +995 568 83 47 07",
        en: "In what situations do you need a sober driver? Restaurants, parties, fatigue. Starting price from 40 GEL by agreement. Driver arrives in 15-20 min: ☎ +995 568 83 47 07",
        ru: "В каких ситуациях нужен трезвый водитель? Рестораны, праздники, усталость. Начальная цена от 40 лари по договоренности. Приезд за 15-20 минут: ☎ +995 568 83 47 07",
    };

    return {
        title: titles[lang] ?? titles.ka,
        description: metaDescs[lang] ?? metaDescs.ka,
        alternates: {
            canonical: lang === "ka"
                ? "https://www.mdzgholi.ge/blog/when-to-call-sober-driver"
                : `https://www.mdzgholi.ge/${lang}/blog/when-to-call-sober-driver`,
            languages: {
                ka: "https://www.mdzgholi.ge/blog/when-to-call-sober-driver",
                en: "https://www.mdzgholi.ge/en/blog/when-to-call-sober-driver",
                ru: "https://www.mdzgholi.ge/ru/blog/when-to-call-sober-driver",
                "x-default": "https://www.mdzgholi.ge/blog/when-to-call-sober-driver",
            },
        },
        openGraph: {
            title: titles[lang] ?? titles.ka,
            description: metaDescs[lang] ?? metaDescs.ka,
            url: lang === "ka"
                ? "https://www.mdzgholi.ge/blog/when-to-call-sober-driver"
                : `https://www.mdzgholi.ge/${lang}/blog/when-to-call-sober-driver`,
            images: [
                {
                    url: "https://www.mdzgholi.ge/images/blog/when-to-call-sober-driver.jpg",
                    width: 1200,
                    height: 675,
                    alt: "ფხიზელი მძღოლი რესტორნიდან გამოძახებით თბილისში",
                },
            ],
        },
    };
}

export default async function WhenToCallSoberDriverPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);

    const content = {
        ka: {
            title: "როდის არის საჭირო ფხიზელი მძღოლი? სიტუაციები, რესტორნიდან გამოძახება და ფასები",
            badge: "სასარგებლო გზამკვლევი • mdzgholi.ge",
            date: "2026 წლის სექტემბერი",
            intro1: "საკუთარი ავტომობილით გადაადგილება უდიდესი კომფორტია, თუმცა ცხოვრებაში უამრავი გაუთვალისწინებელი ან დაგეგმილი სიტუაცია ხდება, როდესაც საჭესთან დაჯდომა არც მიზანშეწონილია და არც უსაფრთხო. ასეთ დროს საუკეთესო გამოსავალი ფხიზელი მძღოლის გამოძახებაა.",
            intro2: "ბევრს ჰგონია, რომ ეს სერვისი მხოლოდ ძლიერი ალკოჰოლური თრობის დროს გამოიყენება. სინამდვილეში, პროფესიონალი მძღოლის დახმარება გაცილებით ფართო სპექტრის საჭიროებებს აკმაყოფილებს. განვიხილოთ, რა სიტუაციებშია ყველაზე ეფექტური mdzgholi.ge-ის სერვისით სარგებლობა და როგორ განისაზღვრება მომსახურების ღირებულება.",
            
            h2_1: "ტოპ სიტუაციები, როდესაც ფხიზელი მძღოლი აუცილებელია",
            situations: [
                {
                    title: "1. რესტორანი, ქეიფი, კორპორატიული საღამო ან მეგობრებთან შეხვედრა",
                    desc: "ყველაზე კლასიკური და ხშირი შემთხვევა: სამსახურის შემდეგ წახვედით რესტორანში ან მეგობრის დაბადების დღეზე თქვენივე მანქანით და გადაწყვიტეთ ერთი-ორი ჭიქა ღვინის დალევა. მანქანის რესტორნის პარკინგზე დატოვება ნიშნავს, რომ მეორე დღეს მოგიწევთ უკან დაბრუნება, საცობებში დგომა, ტაქსის ზედმეტი ხარჯი და დროის დაკარგვა. mdzgholi.ge-ს მძღოლი მოვა პირდაპირ რესტორანთან 15-20 წუთში, ჩაუჯდება თქვენს მანქანას და თქვენსავე კომფორტულ ავტომობილში უსაფრთხოდ მიგიყვანთ სახლამდე."
                },
                {
                    title: "2. გადაღლილობა, ძილის ნაკლებობა და სტრესი",
                    desc: "მძიმე სამუშაო დღის, გადატვირთული შეხვედრების ან ღამის ცვლის შემდეგ ორგანიზმი გამოფიტულია. სამედიცინო კვლევებით დადასტურებულია, რომ გადაღლილი მძღოლის რეაქციის სიჩქარე ზუსტად ისეთივე დაბალია, როგორიც ნასვამი მძღოლის. ნუ გარისკავთ — როცა გრძნობთ, რომ თვალები გეხუჭებათ ან ყურადღებას ვერ იკრებთ, უმჯობესია საჭე გამოცდილ პროფესიონალს ანდოთ."
                },
                {
                    title: "3. სამედიცინო პროცედურები და შეუძლოდ ყოფნა",
                    desc: "კლინიკაში ვიზიტის შემდეგ (მაგალითად, ოფთალმოლოგთან გუგების გაფართოების წვეთების შემდეგ, სტომატოლოგიური ანესთეზიის ან წამლების მიღებისას, რომლებიც ძილიანობას იწვევს) ავტომობილის მართვა კატეგორიულად იკრძალება. ფხიზელი მძღოლი მოგაკითხავთ სამედიცინო დაწესებულებასთან და მშვიდად მიგიყვანთ სახლამდე."
                },
                {
                    title: "4. ავტომობილის გადაყვანა სერვისცენტრში ან სამრეცხაოზე",
                    desc: "თუ დაკავებული ხართ და არ გაქვთ დრო, რომ თქვენი ავტომობილი წაიყვანოთ გეგმიურ ტექდათვალიერებაზე, ხელოსანთან ან სამრეცხაოზე, ჩვენი მძღოლი თავად უზრუნველყოფს მანქანის გადაყვანას და სასურველ ადგილზე დაბრუნებას."
                },
                {
                    title: "5. საქმიანი შეხვედრები და უცხოელი სტუმრები",
                    desc: "როდესაც მნიშვნელოვან ზარებს ახორციელებთ, გჭირდებათ დოკუმენტებზე მუშაობა ლეპტოპით გზაში, ან გსურთ უცხოელ პარტნიორებსა და სტუმრებს მაღალი დონის მომსახურება დაახვედროთ."
                }
            ],

            h2_pricing: "რა ღირს ფხიზელი მძღოლის მომსახურება? (ფასების პოლიტიკა)",
            pricing_intro: "ფხიზელი მძღოლის მომსახურება არ არის ჩვეულებრივი ტაქსი — აქ საქმე ეხება თქვენი პირადი, ძვირადღირებული ავტომობილის მართვას მაქსიმალური სიფრთხილითა და პასუხისმგებლობით. ამიტომ, მომსახურების ღირებულება არ იზომება ავტომატური კილომეტრაჟით, წუთობრივი ტაქსომეტრით ან ამინდის გაუგებარი კოეფიციენტებით.",
            pricing_highlight: "თბილისის მასშტაბით ფხიზელი მძღოლის საწყისი ფასი შეადგენს 40 ლარიდან.",
            pricing_details: "საბოლოო ღირებულება განისაზღვრება ოპერატორთან წინასწარი, სიტყვიერი შეთანხმებით. როდესაც გვირეკავთ ან გვწერთ, ასახელებთ თქვენს ზუსტ ლოკაციას (მაგ. რესტორანს) და დანიშნულების წერტილს. ჩვენ წინასწარ გითანხმებთ სამართლიან, გამჭვირვალე ფასს, ყოველგვარი ფარული დამატებითი გადასახადების გარეშე.",

            h2_steps: "როგორ გამოვიძახოთ მძღოლი რესტორნიდან? (3 მარტივი ნაბიჯი)",
            steps: [
                "1. დაგვიკავშირდით: დარეკეთ ნომერზე +995 568 83 47 07 ან მოგვწერეთ პირდაპირ WhatsApp-ში.",
                "2. გაგვიზიარეთ ლოკაცია: გვითხარით რესტორნის/ლოკაციის სახელი და სად გსურთ წასვლა.",
                "3. დაელოდეთ 15-20 წუთი: ჩვენი გამოცდილი მძღოლი მოვა თქვენს ავტომობილთან და უსაფრთხოდ მიგიყვანთ სახლამდე."
            ],

            faqTitle: "ხშირად დასმული კითხვები (FAQ)",
            faq: [
                {
                    q: "ვარ ნასვამი რესტორანში და მინდა ჩემი მანქანით სახლში წამიყვანონ. როგორ მოვიქცე?",
                    a: "დაგვირეკეთ ნომერზე +995 568 83 47 07 ან მოგვწერეთ WhatsApp-ში. უთხარით ოპერატორს რესტორნის მისამართი და ჩვენი მძღოლი 15-20 წუთში მოგაკითხავთ თქვენს მანქანასთან და უსაფრთხოდ მიგიყვანთ სახლში."
                },
                {
                    q: "რა არის ფხიზელი მძღოლის საწყისი ფასი თბილისში?",
                    a: "თბილისის ფარგლებში ფხიზელი მძღოლის მომსახურების საწყისი ფასი იწყება 40 ლარიდან. საბოლოო ღირებულება ეფუძნება წინასწარ სიტყვიერ შეთანხმებას მარშრუტის მიხედვით."
                },
                {
                    q: "რატომ არ იზომება ფასი ტაქსომეტრით ან კილომეტრაჟით?",
                    a: "ჩვენი სერვისი პერსონალიზებულია და გულისხმობს კლიენტის პირადი ავტომობილის მართვას. ფასი თანხმდება სიტყვიერად ოპერატორთან, რათა თავიდან აირიდოთ მოულოდნელი საცობის ან ამინდის გაზრდილი ტარიფები."
                },
                {
                    q: "რამდენ ხანში მოდის მძღოლი გამოძახების შემდეგ?",
                    a: "ჩვენი მძღოლები თბილისის მასშტაბით გამოძახებიდან საშუალოდ 15-20 წუთში ჩამოდიან მითითებულ ლოკაციაზე."
                },
                {
                    q: "მუშაობთ თუ არა 24/7 რეჟიმში?",
                    a: "დიახ, mdzgholi.ge მუშაობს 24 საათი კვირაში 7 დღე, დღესასწაულებისა და უქმეების ჩათვლით."
                }
            ],

            ctaTitle: "გჭირდებათ მძღოლი ახლავე?",
            ctaDesc: "ნუ გარისკავთ საჭესთან. ენდეთ mdzgholi.ge-ის პროფესიონალებს — 15-20 წუთში თქვენთან ვართ.",
            ctaBtn: "☎ დარეკვა: 568 83 47 07",
            ctaWa: "WhatsApp-ით დაკავშირება",
        },
        en: {
            title: "When to Hire a Sober Driver? Situations, Restaurant Pickup & Pricing",
            badge: "Helpful Guide • mdzgholi.ge",
            date: "September 2026",
            intro1: "Driving your own car offers great freedom, but unexpected moments arise when getting behind the wheel is neither wise nor safe. In such cases, calling a professional sober driver is the optimal solution.",
            intro2: "Many assume this service is strictly for heavy alcohol consumption. In reality, professional drivers cater to a wide array of situations. Let's explore when hiring mdzgholi.ge is most beneficial and how pricing is determined.",
            
            h2_1: "Top Situations When You Need a Sober Driver",
            situations: [
                {
                    title: "1. Restaurants, celebrations, corporate evenings, or dining out",
                    desc: "The classic scenario: you drove to an upscale dinner or gathering and had a glass of wine. Leaving your car overnight means paying for parking, taking morning cabs, and returning through traffic. Our driver arrives at the restaurant in 15-20 min and navigates your vehicle safely home."
                },
                {
                    title: "2. Exhaustion, lack of sleep, or high stress",
                    desc: "After long flights, strenuous shifts, or stressful days, driver reaction times drop as drastically as when intoxicated. Never risk fatigue — let our seasoned driver take the wheel."
                },
                {
                    title: "3. Post-medical procedures and doctor visits",
                    desc: "Pupil dilation, dental anaesthesia, or prescription sedatives impair motor coordination. A designated sober driver guarantees a peaceful drive back."
                },
                {
                    title: "4. Vehicle relocations to service centers or car wash",
                    desc: "When your schedule is packed, we can pick up your vehicle, take it for scheduled maintenance or detailing, and return it safely."
                },
                {
                    title: "5. Executive business transit & foreign guests",
                    desc: "Focus on business calls, prepare presentations on your laptop, and provide esteemed partners with a seamless transit experience."
                }
            ],

            h2_pricing: "How Much Does a Sober Driver Cost? (Pricing Policy)",
            pricing_intro: "A sober driver is not an ordinary taxi — it involves operating your private vehicle with utmost care and responsibility. Therefore, pricing is not dictated by rigid algorithmic surge pricing or weather multipliers.",
            pricing_highlight: "In Tbilisi, our sober driver service starts from 40 GEL.",
            pricing_details: "Final rates are agreed verbally and transparently with our dispatcher based on your route and specific requirements, eliminating any surprise charges.",

            h2_steps: "How to Call a Driver from a Restaurant? (3 Simple Steps)",
            steps: [
                "1. Contact us: Call +995 568 83 47 07 or message via WhatsApp.",
                "2. Share location: Provide your restaurant or venue name and your destination.",
                "3. Wait 15-20 min: Our vetted driver arrives at your car and escorts you safely home."
            ],

            faqTitle: "Frequently Asked Questions (FAQ)",
            faq: [
                {
                    q: "I drank at a restaurant and need my car driven home. What should I do?",
                    a: "Call +995 568 83 47 07 or WhatsApp us. State the restaurant address and our driver will arrive in 15-20 minutes to drive you and your vehicle home."
                },
                {
                    q: "What is the starting price for a sober driver in Tbilisi?",
                    a: "Starting price in Tbilisi starts from 40 GEL, determined via clear verbal agreement with our operator."
                },
                {
                    q: "Why isn't pricing based on a rigid taximeter?",
                    a: "Our service is tailored to your personal vehicle. Fixed verbal agreement protects you from surprise surge multipliers or traffic jam inflations."
                },
                {
                    q: "How fast does the driver arrive?",
                    a: "Average arrival time across Tbilisi is 15-20 minutes."
                },
                {
                    q: "Do you operate 24/7?",
                    a: "Yes, mdzgholi.ge is fully active 24 hours a day, 7 days a week."
                }
            ],

            ctaTitle: "Need a Driver Right Now?",
            ctaDesc: "Do not risk driving under the influence or fatigue. Rely on mdzgholi.ge — with you in 15-20 minutes.",
            ctaBtn: "☎ Call: +995 568 83 47 07",
            ctaWa: "Connect via WhatsApp",
        },
        ru: {
            title: "Когда нужен трезвый водитель? Ситуации, вызов из ресторана и цены",
            badge: "Полезный гид • mdzgholi.ge",
            date: "Сентябрь 2026",
            intro1: "Передвижение на собственном автомобиле — это максимальный комфорт, однако бывают ситуации, когда садиться за руль нежелательно и небезопасно. В таких случаях вызов трезвого водителя — оптимальное решение.",
            intro2: "Многие считают, что эта услуга нужна только при употреблении алкоголя. На самом деле профессиональный водитель выручает во множестве других ситуаций. Разберем, когда вызов mdzgholi.ge наиболее эффективен и как формируется стоимость.",
            
            h2_1: "Топ ситуаций, когда необходим трезвый водитель",
            situations: [
                {
                    title: "1. Ресторан, застолье, корпоратив или встреча с друзьями",
                    desc: "Классический сценарий: вы поехали в ресторан на своей машине и выпили бокал вина. Оставлять авто на парковке означает тратить время на утреннее такси и возврат за машиной. Водитель mdzgholi.ge приедет прямо к ресторану за 15-20 минут и отвезет вас домой на вашем же автомобиле."
                },
                {
                    title: "2. Сильная усталость, недосып и стресс",
                    desc: "После тяжелого рабочего дня реакция водителя снижается так же сильно, как и в состоянии опьянения. Не рискуйте — доверьте руль профессионалу."
                },
                {
                    title: "3. Медицинские процедуры и недомогание",
                    desc: "После капель у офтальмолога, анестезии у стоматолога или приема лекарств вождение запрещено. Трезвый водитель безопасно доставит вас домой."
                },
                {
                    title: "4. Перегон автомобиля на сервис или мойку",
                    desc: "Если у вас нет времени отогнать машину на ТО или мойку, наш водитель сделает это за вас."
                },
                {
                    title: "5. Деловые встречи и важные поездки",
                    desc: "Работайте с документами или проводите телефонные переговоры на заднем сиденье без отвлечения на дорогу."
                }
            ],

            h2_pricing: "Сколько стоит услуга трезвого водителя? (Ценовая политика)",
            pricing_intro: "Услуга трезвого водителя — это не обычное такси, а ответственное управление вашим личным автомобилем. Поэтому цена не зависит от автоматических повышающих коэффициентов погоды или таксометра.",
            pricing_highlight: "По Тбилиси начальная цена услуги трезвого водителя составляет от 40 лари.",
            pricing_details: "Итоговая стоимость определяется по предварительной устной договоренности с оператором при звонке, без скрытых переплат.",

            h2_steps: "Как вызвать водителя из ресторана? (3 простых шага)",
            steps: [
                "1. Свяжитесь с нами: позвоните по номеру +995 568 83 47 07 или напишите в WhatsApp.",
                "2. Укажите местоположение: назовите ресторан и куда необходимо ехать.",
                "3. Подождите 15-20 минут: опытный водитель прибудет к вашей машине и доставит вас домой."
            ],

            faqTitle: "Часто задаваемые вопросы (FAQ)",
            faq: [
                {
                    q: "Я выпил в ресторане и хочу поехать домой на своей машине. Что делать?",
                    a: "Позвоните на +995 568 83 47 07 или напишите в WhatsApp. Назовите адрес ресторана, и наш водитель приедет за 15-20 минут, чтобы отвезти вас и вашу машину домой."
                },
                {
                    q: "Какова начальная цена услуги в Тбилиси?",
                    a: "По Тбилиси стартовая цена начинается от 40 лари по предварительной устной договоренности с диспетчером."
                },
                {
                    q: "Почему цена не считается по таксометру?",
                    a: "Мы управляем вашим персональным автомобилем. Устная предварительная договоренность защищает вас от внезапных повышающих коэффициентов в пробках или плохую погоду."
                },
                {
                    q: "Как быстро приезжает водитель?",
                    a: "Среднее время подачи по Тбилиси составляет 15-20 минут."
                },
                {
                    q: "Работаете ли вы 24/7?",
                    a: "Да, сервис mdzgholi.ge работает круглосуточно, 7 дней в неделю."
                }
            ],

            ctaTitle: "Нужен водитель прямо сейчас?",
            ctaDesc: "Не рискуйте за рулем. Доверьтесь профессионалам mdzgholi.ge — приедем за 15-20 минут.",
            ctaBtn: "☎ Позвонить: +995 568 83 47 07",
            ctaWa: "Написать в WhatsApp",
        }
    };

    const c = content[lang as keyof typeof content] || content.ka;

    return (
        <>
            {/* FAQ Structured Data for AI & Search Engines */}
            <JsonLd data={faqSchema(c.faq)} />

            <article style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px 120px" }}>
                <div style={{ maxWidth: 860, margin: "0 auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                    
                    {/* Header Image */}
                    <div style={{ position: "relative", width: "100%", height: "420px", backgroundColor: "#141a2e" }}>
                        <Image 
                            src="/images/blog/when-to-call-sober-driver.jpg" 
                            alt="ფხიზელი მძღოლი რესტორნიდან გამოძახებით თბილისი"
                            fill
                            priority
                            style={{ objectFit: "cover", objectPosition: "center" }}
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

                        {/* Top Situations */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_1}
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                            {c.situations.map((sit, idx) => (
                                <div key={idx} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 12, borderLeft: "4px solid var(--yellow)" }}>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
                                        {sit.title}
                                    </h3>
                                    <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "0.98rem" }}>
                                        {sit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Pricing Block */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_pricing}
                        </h2>
                        <p style={{ marginBottom: 20 }}>{c.pricing_intro}</p>

                        {/* Starting Price Box */}
                        <div style={{ padding: "24px 28px", background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(26,86,219,0.12) 100%)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: 14, marginBottom: 24 }}>
                            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--yellow)", marginBottom: 8 }}>
                                💰 {c.pricing_highlight}
                            </div>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.98rem" }}>
                                {c.pricing_details}
                            </p>
                        </div>

                        {/* Steps */}
                        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", marginTop: 44, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
                            {c.h2_steps}
                        </h2>
                        <ul style={{ paddingLeft: 24, marginBottom: 40, display: "flex", flexDirection: "column", gap: 12 }}>
                            {c.steps.map((step, idx) => (
                                <li key={idx} style={{ color: "rgba(255,255,255,0.85)" }}>
                                    {step}
                                </li>
                            ))}
                        </ul>

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
                        <div style={{ padding: "36px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, textAlign: "center", marginTop: 40 }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 10 }}>
                                {c.ctaTitle}
                            </h3>
                            <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 24px", fontSize: "1rem" }}>
                                {c.ctaDesc}
                            </p>
                            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                                <a href="tel:+995568834707" className="btn-yellow" style={{ textDecoration: "none", padding: "14px 28px", fontWeight: 800 }}>
                                    {c.ctaBtn}
                                </a>
                                <a href="https://wa.me/995568834707" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none", padding: "14px 28px", fontWeight: 700 }}>
                                    {c.ctaWa}
                                </a>
                            </div>
                        </div>

                        {/* Back Link */}
                        <div style={{ textAlign: "center", marginTop: 36 }}>
                            <Link href={`/${lang}/blog`} style={{ color: "var(--yellow)", textDecoration: "none", fontWeight: 600 }}>
                                ← {lang === "ka" ? "ბლოგზე დაბრუნება" : lang === "ru" ? "Вернуться в блог" : "Back to Blog"}
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </>
    );
}
