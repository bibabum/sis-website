import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Запис на консультацію',
  description: 'Перша консультація безкоштовна. 15–20 хвилин, щоб зрозуміти ваші цілі.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
