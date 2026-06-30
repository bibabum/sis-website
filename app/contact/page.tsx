'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type FormData = {
  serviceType: string;
  budgetRange: string;
  properties: string;
  name: string;
  contact: string;
  contactMethod: string;
  preferredTime: string;
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Send to email service (configure your endpoint)
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setStep(1), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Помилка при відправці. Спробуйте ще раз.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-surface pt-20 pb-3xl">
      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-3xl">
            <h1 className="mb-lg">Запишіться на консультацію</h1>
            <p className="text-lg text-text-secondary">
              Перша консультація даром. 15-20 хвилин щоб зрозуміти ваші цілі.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              variants={itemVariants}
              className="card-base p-3xl text-center"
            >
              <div className="text-5xl mb-lg">✓</div>
              <h2 className="text-navy-600 mb-lg">Спасибі!</h2>
              <p className="text-text-secondary mb-lg">
                Ігор зв'яжеться з вами протягом 24 годин через обраний вами канал.
              </p>
              <p className="text-sm text-text-secondary mb-2xl">
                Примітка: перша розмова — 15–20 хвилин, щоб зрозуміти ваші цілі.
              </p>
              <Link href="/" className="btn-primary">
                Повернутися на головну
              </Link>
            </motion.div>
          ) : (
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit(onSubmit)}
              className="card-base p-2xl space-y-2xl"
            >
              {/* Progress indicator */}
              <div className="flex justify-between mb-3xl">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1 rounded-full mx-sm transition-colors ${
                      s <= step ? 'bg-gold-600' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              {/* Step 1: Service Type */}
              {step === 1 && (
                <motion.div
                  variants={itemVariants}
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-lg"
                >
                  <h3>Що вас цікавить?</h3>
                  {[
                    { value: 'invest', label: 'Інвестувати в проєкт' },
                    { value: 'consultation', label: 'Консультація по моїм інвестиціям' },
                    { value: 'tax', label: 'Податкова оптимізація' },
                    { value: 'management', label: 'Управління нерухомістю' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center p-md rounded-lg border-2 border-border hover:border-gold-300 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register('serviceType', { required: true })}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="ml-md font-medium text-text">{option.label}</span>
                    </label>
                  ))}
                </motion.div>
              )}

              {/* Step 2: Budget or Properties */}
              {step === 2 && (
                <motion.div
                  variants={itemVariants}
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-lg"
                >
                  {watch('serviceType') === 'management' ? (
                    <>
                      <h3>Скільки у вас нерухомостей?</h3>
                      <select
                        {...register('properties', { required: true })}
                        className="input-base"
                      >
                        <option value="">Виберіть кількість</option>
                        <option value="1">1 нерухомість</option>
                        <option value="2-3">2-3 нерухомості</option>
                        <option value="4-5">4-5 нерухомостей</option>
                        <option value="more">Більше 5</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <h3>Приблизний бюджет?</h3>
                      <select
                        {...register('budgetRange', { required: true })}
                        className="input-base"
                      >
                        <option value="">Виберіть діапазон</option>
                        <option value="under-50k">До $50,000</option>
                        <option value="50-150k">$50,000 - $150,000</option>
                        <option value="150-500k">$150,000 - $500,000</option>
                        <option value="over-500k">$500,000+</option>
                        <option value="exploring">Тільки розглядаю</option>
                      </select>
                    </>
                  )}
                </motion.div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <motion.div
                  variants={itemVariants}
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-lg"
                >
                  <h3>Ваші дані</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-sm">
                      Ім'я
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Обов\'язкове поле' })}
                      className="input-base"
                      placeholder="Ваше ім'я"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-sm">
                      Телефон або мессенджер
                    </label>
                    <input
                      type="text"
                      {...register('contact', { required: 'Обов\'язкове поле' })}
                      className="input-base"
                      placeholder="+38 (0XX) XXX-XX-XX або @telegram"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-sm">
                      Спосіб зв'язку
                    </label>
                    <select {...register('contactMethod', { required: true })} className="input-base">
                      <option value="">Виберіть спосіб</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="viber">Viber</option>
                      <option value="phone">Дзвінок</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-sm">
                      Удобний час
                    </label>
                    <select {...register('preferredTime', { required: true })} className="input-base">
                      <option value="">Виберіть час</option>
                      <option value="morning">Ранок (9-12)</option>
                      <option value="afternoon">День (12-18)</option>
                      <option value="evening">Вечір (18-21)</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Buttons */}
              <div className="flex gap-md pt-lg">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const serviceType = watch('serviceType');
                      if (step === 3 && serviceType === 'tax') {
                        setStep(1);
                      } else {
                        setStep(step - 1);
                      }
                    }}
                    className="btn-secondary flex-1"
                  >
                    Назад
                  </button>
                )}
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      const serviceType = watch('serviceType');
                      if (serviceType === 'tax') {
                        setStep(3);
                      } else {
                        setStep(2);
                      }
                    }}
                    className="btn-primary flex-1"
                  >
                    Далі
                  </button>
                ) : step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn-primary flex-1"
                  >
                    Далі
                  </button>
                ) : (
                  <button type="submit" className="btn-primary flex-1">
                    Відправити
                  </button>
                )}
              </div>

              <p className="text-center text-xs text-text-secondary">
                Ми поважаємо вашу приватність. Дані не передаються третім сторонам.
              </p>
            </motion.form>
          )}

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-3xl"
          >
            {[
              { icon: '📞', label: 'Телефон', value: '+38 096 008-28-84', href: 'tel:+380960082884' },
              { icon: '✉️', label: 'Email', value: 'mail@sis.pl.ua', href: 'mailto:mail@sis.pl.ua' },
              { icon: '📍', label: 'Адреса', value: 'м. Київ, вул. Володимирська, 4', href: '#' },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="card-base p-lg text-center hover:border-gold-600 transition-colors"
              >
                <div className="text-3xl mb-sm">{contact.icon}</div>
                <p className="text-sm text-text-secondary mb-sm">{contact.label}</p>
                <p className="font-medium text-navy-600">{contact.value}</p>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
