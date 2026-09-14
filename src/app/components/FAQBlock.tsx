import type { FAQItem } from '@/types';

interface Props {
  items: FAQItem[];
  heading?: string;
}

export default function FAQBlock({
  items,
  heading = 'Frequently Asked Questions',
}: Props) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <h2 id="faq-heading">{heading}</h2>
        <dl className="faq-list">
          {items.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="faq-question">{item.question}</dt>
              <dd className="faq-answer">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
