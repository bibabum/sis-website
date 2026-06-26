'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      name: 'ЖК "River Stone"',
      location: 'Київ, вул. Днепровська Набережна, 14',
      image: 'https://images.unsplash.com/photo-1512207736139-afb2dcc54e72?w=500&h=400&fit=crop',
      area: '95 м²',
      units: '2 квартири',
      investment: '$130,000',
      roi: '10%',
      status: 'Завершено',
      timeline: '6 місяців',
    },
    {
      id: 2,
      name: 'ЖК "Варшавський"',
      location: 'Київ, вул. Всеволода Змієнко, 34/21',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
      area: '40 м²',
      units: '1 квартира',
      investment: '$56,000',
      roi: '6.5%',
      status: 'Завершено',
      timeline: '4 місяці',
    },
    {
      id: 3,
      name: 'Сталинка в центрі',
      location: 'Київ, вул. Тарасовська, 2/21',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=400&fit=crop',
      area: '50 м²',
      units: '1 квартира',
      investment: '$100,000',
      roi: '10.5%',
      status: 'Завершено',
      timeline: '6 місяців',
    },
    {
      id: 4,
      name: 'Квартири на Академмістечку',
      location: 'Київ, вул. Осіння, 33',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
      area: '56 м²',
      units: '2 квартири',
      investment: '$60,000',
      roi: '20%',
      status: 'Завершено',
      timeline: '5 місяців',
    },
    {
      id: 5,
      name: 'Квартира на Академмістечку',
      location: 'Київ, вул. Осіння, 33',
      image: 'https://images.unsplash.com/photo-1512207736139-afb2dcc54e72?w=500&h=400&fit=crop',
      area: '55 м²',
      units: '1 квартира',
      investment: '$60,000',
      roi: '25%',
      status: 'Завершено',
      timeline: '1 місяць',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Інвестування в проєкти',
      description: 'Приєднайтесь до готових проектів з повним супроводом',
      features: [
        'Мінімальна сума входу $50K+',
        'до 30% очікувана ROI',
        'Повна правова захист',
        'Регулярна звітність',
      ],
      icon: '📊',
    },
    {
      id: 2,
      title: 'Персональна консультація',
      description: 'Експертний аналіз вашого фінансового стану і оцінка ваших можливостей',
      features: [
        'Індивідуальний план розвитку',
        'Податкова оптимізація',
        'Зменшення податкового навантаження',
        'Легальна перевірка угод',
        'Бізнес-стратегія',
      ],
      icon: '👨‍💼',
    },
    {
      id: 3,
      title: 'Управління активами',
      description: 'Ми управляємо вашою нерухомістю для максимальної прибутковості',
      features: [
        'Купівля-продаж',
        'Оренда',
        'Технічне обслуговування',
        'Юридичний супровід',
        'Страхування',
        'Фінансова звітність',
      ],
      icon: '🏢',
    },
  ];

  const teamMembers = [
    {
      name: 'Ігор',
      title: 'Засновник & Інвестиційний консультант',
      bio: 'Розпочав у фінансах, став експертом в нерухомості. Всі проекти SIS — його особисті інвестиції.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: 'Перша консультація',
      description: 'Розмова про ваші цілі та можливості. Обговорення стратегії розвитку.',
    },
    {
      num: 2,
      title: 'Аналіз ситуації',
      description: 'Детальний огляд ваших поточних активів та потенціалу.',
    },
    {
      num: 3,
      title: 'Пропозиція плану',
      description: 'Аналітичний відділ створює найкращий сценарій для вас.',
    },
    {
      num: 4,
      title: 'Договір',
      description: 'Юридичне оформлення всіх умов та термінів.',
    },
    {
      num: 5,
      title: 'Підготовка',
      description: 'Ремонт, оформлення документів, готування до реалізації.',
    },
    {
      num: 6,
      title: 'Реалізація',
      description: 'Пошук орендарів та максимізація результатів.',
    },
    {
      num: 7,
      title: 'Управління',
      description: 'Постійний контроль, звітність та оптимізація.',
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Problems Section */}
      <section className="py-3xl bg-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center"
          >
            <div>
              <motion.h2 variants={itemVariants} className="mb-3xl">
                Ваша ситуація
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {[
                  '💰 Ваші заощадження знецінюються у зв\'язку з інфляцією',
                  '🌍 Заради зменшення ризиків, ви хочете диверсифікувати ваш капітал',
                  '❓ Ви чули про інвестування за кордоном, але не знаєте з чого почати',
                  '⏰ Ви хочете отримувати пасивний дохід',
                ].map((problem, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-lg rounded-lg bg-navy-50 border border-navy-100"
                  >
                    <p className="text-text-secondary">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="lg:pl-2xl">
              <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl p-2xl text-white space-y-2xl">
                <h3 className="text-white text-2xl font-bold">SIS вирішує це</h3>
                <div className="space-y-lg">
                  {[
                    { icon: '📈', title: 'Реальний трекрекорд', desc: 'Завершені проекти по Україні та за кордоном з документально підтвердженими результатами' },
                    { icon: '🛡️', title: 'Юридичний захист', desc: 'Допомога кваліфікованих юристів' },
                    { icon: '🤝', title: 'Гроші в грі', desc: 'В усі рекомендовані проекти SIS залучає власні інвестиції в розмірі не менше ніж 50% від проектної вартості' },
                    { icon: '🗺️', title: 'Під ключ', desc: 'Розробка індивідуальних інвестиційних проектів — від вибору об\'єкту до отримання доходу з повним супроводом' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-md items-start">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-bold text-gold-400">{item.title}</p>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Безкоштовна консультація
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-3xl bg-gradient-to-br from-navy-50 to-cream">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
              <h2 className="mb-lg">Наші послуги</h2>
              <p className="text-lg text-text-secondary">
                Три шляхи до зростання вашого капіталу
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {services.map((service, idx) => (
                <motion.button
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => setSelectedService(service.id.toString())}
                  className="card-base p-lg text-left h-full hover:border-gold-600 group cursor-pointer flex flex-col overflow-visible"
                >
                  <div className="text-4xl mb-md">{service.icon}</div>
                  <h3 className="mb-md group-hover:text-gold-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-text-secondary mb-lg">{service.description}</p>
                  <ul className="space-y-sm text-sm flex-grow mb-lg">
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-sm text-text-secondary">
                        <span className="text-gold-600 flex-shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary w-full text-center mt-auto">
                    Дізнатись більше
                  </Link>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-3xl bg-gradient-to-br from-navy-700 to-navy-800 text-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-md py-sm rounded-full bg-gold-400/20 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-widest mb-lg">
                КЕЙС-СТАДІ
              </span>
              <h2 className="text-white mb-md">
                Як $410,000 перетворились на $540,000 за 6 місяців
              </h2>
              <p className="text-white/70 max-w-2xl">
                Реальний проект у Варшаві. Всі документи, дозволи та контракти у нас є.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-start">
              <motion.div variants={itemVariants} className="space-y-lg">
                {[
                  {
                    label: 'СИТУАЦІЯ',
                    text: 'Інвестор з Києва мав $100K заощаджень у доларах на депозиті. Гроші втрачали реальну вартість. Хотів диверсифікуватися за кордон, але не знав польської мови та правової бази.',
                  },
                  {
                    label: 'ВИКЛИК',
                    text: 'Не знав польської. Не розумів процесу оформлення угод. Боявся шахрайства. Запитував: чи реальні ці 30%+ ROI, чи це просто маркетинг?',
                  },
                  {
                    label: 'ЩО МИ ЗРОБИЛИ',
                    text: 'Разом з юридичним партнером Mitrax знайшли земельну ділянку у Варшаві. Отримали дозвіл на будівництво. Збудували 4-квартирний будинок за 6 місяців. Продали всі квартири з прибутком.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-gold-400 pl-lg">
                    <h4 className="text-gold-400 text-xs font-bold tracking-wider mb-sm">{item.label}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-2xl border border-white/20 space-y-lg">
                  <h3 className="text-white text-center">Результат: Будинок №1</h3>
                  <div className="grid grid-cols-2 gap-lg">
                    {[
                      { label: 'Інвестовано', value: '$410,000' },
                      { label: 'Отримано', value: '$540,000' },
                      { label: 'ROI', value: '32%' },
                      { label: 'Термін', value: '6 міс.' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-3xl font-serif font-bold text-gold-400">{stat.value}</p>
                        <p className="text-white/60 text-xs mt-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/20 pt-md">
                    <p className="text-white/60 text-xs text-center mb-md">
                      Юридичний партнер: Mitrax · Всі договори нотаріально засвідчені
                    </p>
                  </div>
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Обговорити схожий проект
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-3xl bg-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.h2 variants={itemVariants}>Наші проєкти</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="card-base overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-navy-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 px-md py-sm bg-gold-600 text-white rounded-full text-xs font-bold">
                      {project.roi} ROI
                    </div>
                  </div>

                  <div className="p-lg space-y-md">
                    <div>
                      <h3 className="text-navy-600">{project.name}</h3>
                      <p className="text-sm text-text-secondary">{project.location}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-sm py-md border-y border-border text-sm">
                      <div>
                        <p className="text-text-secondary text-xs">Площа</p>
                        <p className="font-bold text-navy-600">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-xs">Одиниці</p>
                        <p className="font-bold text-navy-600">{project.units}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-xs">Інвестиція</p>
                        <p className="font-bold text-navy-600">{project.investment}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-xs">Термін</p>
                        <p className="font-bold text-navy-600">{project.timeline}</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-3xl bg-navy-50">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.h2 variants={itemVariants}>Процес роботи</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  variants={itemVariants}
                  className="card-base p-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-600 text-white flex-center text-lg font-bold mb-md">
                    {step.num}
                  </div>
                  <h4 className="mb-sm">{step.title}</h4>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-3xl bg-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="mb-lg">Про засновника</h2>
              <div className="space-y-md text-text-secondary">
                <p>
                  Більше 20 років у сфері фінансів. Очолював будівельний холдинг ТОВ «Будівельний Холдинг „Шевченківський"» та за 4 роки збільшив оборот компанії до 300 млн грн на рік.
                </p>
                <p>
                  Ігор почав у фінансах, але зрозумів, що найкращі інвестиції — це нерухомість, яку можна побачити й торкнутися.
                </p>
                <p>
                  Засновуючи SIS, він вирішив просту річ: я будую проекти, які інвестую сам. Це означає, що мої клієнти завжди мають консультанта зі своїми грошима в грі.
                </p>
                <p>
                  Кожен завершений проект на варшавській вулиці Miła або в київському River Stone — це не просто портфелем для клієнтів. Це його особиста репутація.
                </p>
              </div>
              <Link href="/about" className="btn-primary mt-2xl block w-fit">
                Повна історія
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src="/igor.png?v=20260624"
                  alt="Igor"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-2xl bg-navy-50 border-y border-border">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2xl"
          >
            <motion.p variants={itemVariants} className="text-center text-xs font-bold tracking-widest uppercase text-text-secondary">
              Партнери та гарантії
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2xl text-center">
              {[
                { icon: '⚖️', title: 'Mitrax', desc: 'Юридичний партнер' },
                { icon: '📋', title: 'Нотаріат', desc: 'Всі договори засвідчені' },
                { icon: '🏛️', title: 'Польська юрисдикція', desc: 'Реєстрація та захист' },
                { icon: '🔒', title: 'Повна прозорість', desc: 'Всі документи доступні' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center gap-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-bold text-navy-600 text-sm">{item.title}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-3xl bg-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
              <h2 className="mb-lg">Що кажуть наші клієнти</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {[
                {
                  text: 'Ігор провів нас через весь процес — від пошуку об\'єкту до підписання контракту. Ми нічого не розуміли в польському ринку, але він пояснив усе кроково. Реальний ROI 28% — підтверджено документами.',
                  name: 'Дмитро К.',
                  city: 'Київ',
                  tag: 'Будинок №1',
                },
                {
                  text: 'Я живу у Варшаві вже 3 роки і хотів інвестувати тут, але не розумів польського податкового закону. Консультація з Ігором відкрила очі на стратегії, про які я навіть не знав. Зекономив значну суму вже в перший рік.',
                  name: 'Олена М.',
                  city: 'Варшава',
                  tag: 'Податкова оптимізація',
                },
                {
                  text: 'Скептично ставився до 30%+ ROI — думав, це маркетинг. Але Ігор показав усі документи, дозволи, контракти. Юридичний партнер Mitrax дав впевненість. Вклав $75K — результатом дуже задоволений.',
                  name: 'Сергій В.',
                  city: 'Дніпро',
                  tag: 'Інвестиційне партнерство',
                },
              ].map((testimonial, idx) => (
                <motion.div key={idx} variants={itemVariants} className="card-base p-lg flex flex-col gap-md">
                  <div className="text-gold-500 text-4xl leading-none font-serif">&ldquo;</div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">{testimonial.text}</p>
                  <div className="border-t border-border pt-md">
                    <p className="font-bold text-navy-600">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.city}</p>
                    <span className="inline-block mt-sm text-xs px-sm py-xs bg-gold-100 text-gold-700 rounded-full font-medium">{testimonial.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-3xl bg-gradient-to-br from-gold-50 to-cream">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-lg"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-md py-sm rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold tracking-widest mb-lg">
                БЕЗКОШТОВНО
              </span>
              <h2 className="mb-md">5 речей, які треба знати перед інвестицією в нерухомість Польщі</h2>
              <p className="text-text-secondary">
                Практичний гайд для українців: юридична база, податкові стратегії та типові помилки, яких варто уникати.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-base p-2xl space-y-md">
              <div className="flex flex-col sm:flex-row gap-md">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="input-base flex-grow"
                  aria-label="Email для отримання гайду"
                />
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Отримати гайд
                </Link>
              </div>
              <p className="text-xs text-text-secondary">
                Надсилаємо одразу. Жодного спаму — тільки корисні матеріали про інвестиції.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3xl bg-gradient-to-br from-navy-600 to-navy-800 text-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.h2 variants={itemVariants} className="text-white mb-lg">
              Готові до розмови?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-white/80 mb-lg">
              Перша консультація даром. 15-20 хвилин для розуміння ваших цілей.
            </motion.p>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-sm bg-white/10 border border-white/20 rounded-lg px-md py-sm mb-2xl">
              <span className="w-2 h-2 rounded-full bg-green flex-shrink-0 animate-pulse"></span>
              <span className="text-sm text-white/80">Зараз приймаємо 3 нових інвестиційних партнери для проекту Q3 2026</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Записатися
              </Link>
              <a href="https://t.me/+380960082884" className="btn-base border-2 border-white text-white bg-transparent hover:bg-white/15">
                Телеграм
              </a>
              <a href="https://wa.me/380960082884" className="btn-base border-2 border-white text-white bg-transparent hover:bg-white/15">
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-3xl bg-white">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.div variants={itemVariants} className="flex-between">
              <h2>Корисні матеріали</h2>
              <a href="#" className="text-sm text-gold-600 hover:text-gold-700 font-medium transition-colors">
                Всі статті →
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {[
                {
                  title: 'Повний гайд: як українцю купити нерухомість у Польщі 2026',
                  category: 'Правова база',
                  readTime: '7 хв',
                  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
                },
                {
                  title: 'Реальний ROI у Варшаві: чого очікувати від інвестицій у нерухомість',
                  category: 'Аналіз ринку',
                  readTime: '5 хв',
                  img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=200&fit=crop',
                },
                {
                  title: '5 податкових пасток для українців при інвестиціях за кордоном',
                  category: 'Податки',
                  readTime: '6 хв',
                  img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
                },
              ].map((article, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  variants={itemVariants}
                  className="card-base overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden bg-navy-100">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-lg space-y-sm">
                    <div className="flex gap-sm items-center">
                      <span className="text-xs font-bold text-gold-600 bg-gold-50 px-sm py-xs rounded-full">{article.category}</span>
                      <span className="text-xs text-text-secondary">{article.readTime}</span>
                    </div>
                    <h4 className="text-navy-600 group-hover:text-gold-600 transition-colors leading-snug">{article.title}</h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-3xl bg-cream">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3xl"
          >
            <motion.h2 variants={itemVariants} className="text-center">
              Часті запитання
            </motion.h2>

            <div className="max-w-2xl mx-auto space-y-md">
              {[
                {
                  q: 'Чи можу я як українець купити нерухомість за кордоном?',
                  a: 'Так. Українці можуть купувати нерухомість за кордоном. Придбання земельних ділянок — залежно від законодавства конкретної країни.',
                },
                {
                  q: 'Яка мінімальна сума для інвестування?',
                  a: 'Готові проекти SIS — від $50,000. Якщо це індивідуальний проект — сума прораховується індивідуально.',
                },
                {
                  q: 'Скільки часу потрібно від рішення до першого доходу?',
                  a: 'Від 6 місяців — залежно від проекту. Ви отримуєте детальний план для кожного.',
                },
                {
                  q: 'Який юридичний захист я маю як інвестор?',
                  a: 'Всі інвестиції оформлюються належним юридичним чином.',
                },
                {
                  q: 'Як оподатковується нерухомість за кордоном?',
                  a: 'Нерухомість за кордоном оподатковується згідно з місцевим законодавством. Діють міжнародні договори про уникнення подвійного оподаткування.',
                },
                {
                  q: 'Чи можу я переглянути проекти перед тим, як інвестувати?',
                  a: 'Так, приїхати та подивитися на об\'єкти можна без будь-яких проблем.',
                },
              ].map((item, idx) => (
                <motion.details
                  key={idx}
                  variants={itemVariants}
                  className="card-base p-lg cursor-pointer group"
                >
                  <summary className="font-bold text-navy-600 group-hover:text-gold-600 transition-colors">
                    {item.q}
                  </summary>
                  <p className="text-text-secondary mt-md text-sm">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
