'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { contacts } from '@/data/contacts';

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

  return (
    <div className="section bg-ivory">
      <div className="container-site">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12">
            <p className="eyebrow">Консультація</p>
            <div className="mt-4 h-px w-10 bg-brass" aria-hidden />
            <h1 className="h-section mt-6">Запишіться на консультацію</h1>
            <p className="mt-5 text-body-lg text-muted">
              Перша консультація безкоштовна. 15–20 хвилин, щоб зрозуміти ваші цілі.
            </p>
          </div>

          {submitted ? (
            // Explicit initial/animate -- the parent uses whileInView with
            // once:true, which has already fired by the time submitted flips.
            // Named variants on a child that mounts late would inherit "hidden"
            // and never animate in; the card would render at opacity 0.
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="border border-line p-10 text-center"
            >
              <div className="mx-auto h-px w-10 bg-brass" aria-hidden />
              <h2 className="h-section mt-8">Дякуємо за заявку!</h2>
              <p className="mt-5 text-muted">
                Ми зв&apos;яжемось з вами найближчим часом — Ігор особисто передзвонить
                протягом 24 годин через обраний вами канал.
              </p>
              <p className="mt-3 mb-10 text-sm text-muted">
                Перша розмова — 15–20 хвилин, щоб зрозуміти ваші цілі.
              </p>
              <Link href="/" className="btn-primary">
                Повернутися на головну
              </Link>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 border border-line p-6 sm:p-10"
            >
              {/* Progress indicator */}
              <div className="flex items-center gap-4">
                <p className="numeral text-sm text-muted">Крок {step} з 3</p>
                <div className="flex flex-1 gap-1" aria-hidden>
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-px flex-1 ${s <= step ? 'bg-navy' : 'bg-line'}`} />
                  ))}
                </div>
              </div>

              {/* Step 1: Service Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h3 className="text-[1.75rem]">Що вас цікавить?</h3>
                  {[
                    { value: 'invest', label: 'Інвестувати в проєкт' },
                    { value: 'consultation', label: 'Консультація з приводу власних інвестицій' },
                    { value: 'tax', label: 'Зменшення податкового навантаження' },
                    { value: 'management', label: 'Управління нерухомістю' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex min-h-[56px] cursor-pointer items-center rounded border border-line px-4 transition-colors hover:border-navy has-[:checked]:border-navy has-[:checked]:bg-ivory-deep"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register('serviceType', { required: true })}
                        className="h-4 w-4 cursor-pointer accent-navy"
                      />
                      <span className="ml-4 text-ink">{option.label}</span>
                    </label>
                  ))}
                </motion.div>
              )}

              {/* Step 2: Budget or Properties */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {watch('serviceType') === 'management' ? (
                    <>
                      <h3 className="text-[1.75rem]">Скільки у вас нерухомостей?</h3>
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
                      <h3 className="text-[1.75rem]">Приблизний бюджет?</h3>
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
                  key="step3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h3 className="text-[1.75rem]">Ваші дані</h3>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Ім'я
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Обов\'язкове поле' })}
                      className="input-base"
                      placeholder="Ваше ім'я"
                    />
                    {errors.name && <p className="mt-1 text-sm text-navy">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Телефон або месенджер
                    </label>
                    <input
                      type="text"
                      {...register('contact', { required: 'Обов\'язкове поле' })}
                      className="input-base"
                      placeholder="+38 (0XX) XXX-XX-XX або @telegram"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
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
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Зручний час
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
              <div className="flex gap-3 pt-2">
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

              <p className="text-center text-sm text-muted">
                Ми поважаємо вашу приватність. Дані не передаються третім сторонам.
              </p>
            </form>
          )}

          {/* Contact Info */}
          <dl className="mt-12 grid grid-cols-1 border-t border-line md:grid-cols-3">
            {[
              { label: 'Телефон', value: contacts.phone, href: contacts.phoneHref },
              { label: 'Email', value: contacts.email, href: contacts.emailHref },
              { label: 'Адреса', value: contacts.address, href: contacts.mapHref, external: true },
            ].map((c, i) => (
              <div key={c.label} className={`border-b border-line py-6 md:border-b-0 ${i > 0 ? 'md:border-l md:pl-6' : ''}`}>
                <dt className="eyebrow">{c.label}</dt>
                <dd className="mt-2">
                  <a
                    href={c.href}
                    className="link"
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
