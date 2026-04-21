'use client';

import React from 'react';
import { Input, TextArea, Button, Form, Label, TextField } from '@heroui/react';
import { useLanguage } from '@/shared/hooks';

export const ContactForm = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for sending message would go here
    alert(t('contact.form.success'));
  };

  return (
    <div className="bg-background/50 border-foreground/10 h-full rounded-3xl border p-8 backdrop-blur-sm md:p-12">
      <h3 className="mb-8 text-2xl font-bold">{t('contact.form.title')}</h3>
      <Form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TextField isRequired className="flex flex-col gap-2">
            <Label className="text-foreground/80 font-medium">
              {t('contact.form.name')}
            </Label>
            <Input
              placeholder={t('contact.form.namePlaceholder')}
              className="h-14"
            />
          </TextField>
          <TextField isRequired type="email" className="flex flex-col gap-2">
            <Label className="text-foreground/80 font-medium">
              {t('contact.form.email')}
            </Label>
            <Input
              placeholder={t('contact.form.emailPlaceholder')}
              className="h-14"
            />
          </TextField>
        </div>
        <TextField isRequired className="flex flex-col gap-2">
          <Label className="text-foreground/80 font-medium">
            {t('contact.form.subject')}
          </Label>
          <Input
            placeholder={t('contact.form.subjectPlaceholder')}
            className="h-14"
          />
        </TextField>
        <TextField isRequired className="flex flex-col gap-2">
          <Label className="text-foreground/80 font-medium">
            {t('contact.form.message')}
          </Label>
          <TextArea
            placeholder={t('contact.form.messagePlaceholder')}
            rows={6}
          />
        </TextField>
        <Button
          type="submit"
          className="bg-foreground text-background mt-4 h-12 rounded-2xl text-base font-semibold transition-transform active:scale-[0.98]"
        >
          {t('contact.form.send')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
