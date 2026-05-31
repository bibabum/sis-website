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
      name: 'Будинок №1',
      location: 'Варшава, Польща',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=400&fit=crop',
      area: '284 м²',
      units: '4 квартири',
      investment: '$410,000',
      roi: '32%',
      status: 'Завершено',
      timeline: '6 місяців',
    },
    {
      id: 2,
      name: 'Апартаменти №2',
      location: 'Варшава, Польща',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
      area: '344 м²',
      units: '4 квартири',
      investment: '$450,000',
      roi: '33%',
      status: 'Завершено',
      timeline: '7 місяців',
    },
    {
      id: 3,
      name: 'River Stone Київ',
      location: 'Київ, Україна',
      image: 'https://images.unsplash.com/photo-1512207736139-afb2dcc54e72?w=500&h=400&fit=crop',
      area: '95 м²',
      units: '2 квартири',
      investment: '$60,000',
      roi: '20%',
      status: 'Активно',
      timeline: '6 місяців',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Інвестування в проєкти',
      description: 'Приєднайтесь до готових високодохідних проектів в Варшаві з повним супроводом',
      features: [
        'Мінімальна сума входу $50K+',
        '30%+ очікувана ROI',
        'Повна правова захист',
        'Регулярна звітність',
      ],
      icon: '📊',
    },
    {
      id: 2,
      title: 'Персональна консультація',
      description: 'Експертний аналіз вашої інвестиційної стратегії та оптимізація активів',
      features: [
        'Індивідуальний план розвитку',
        'Податкова оптимізація',
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
        'Пошук орендарів',
        'Технічне обслуговування',
        'Юридичний супровід',
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
            className="max-w-2xl"
          >
            <motion.h2 variants={itemVariants} className="mb-3xl">
              Ваша ситуація
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {[
                '💰 Ваші заощадження втрачають вартість до інфляції',
                '🌍 Ви хочете диверсифікувати капітал за кордон',
                '❓ Ви чули про Польщу, але не знаєте з чого почати',
                '⏰ Вам потрібна пасивна дохідність, але немає часу',
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
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Igor"
                  fill
                  className="object-cover"
                />
              </div>
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
            <motion.p variants={itemVariants} className="text-lg text-white/80 mb-2xl">
              Перша консультація даром. 15-20 хвилин для розуміння ваших цілей.
            </motion.p>
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
              Частші запитання
            </motion.h2>

            <div className="max-w-2xl mx-auto space-y-md">
              {[
                {
                  q: 'Чи можу я як українець купити нерухомість в Польщі?',
                  a: 'Так, абсолютно. Українцям дозволено купувати нерухомість у Польщі. Ми обробляємо всю правову базу.',
                },
                {
                  q: 'Яка мінімальна сума для інвестування?',
                  a: 'Від $50,000. Це залежить від проекту. Наш аналітичний відділ підберає вам оптимальний сценарій.',
                },
                {
                  q: 'Як я можу верифікувати цифри ROI?',
                  a: 'Усі проекти мають юридичного партнера (Mitrax). Усі контракти підписані. Інформація прозора.',
                },
                {
                  q: 'Скільки часу потрібно від рішення до першого доходу?',
                  a: 'Залежно від проекту — від 6 до 12 місяців. Ви отримуєте детальний план для кожного',
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
