import Link from 'next/link';
import type { BreadcrumbItem } from '@/types';

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://dentalmeetup.co.uk${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs-list">
          {items.map((item, index) => (
            <li key={item.href} className="breadcrumbs-item">
              {index < items.length - 1 ? (
                <>
                  <Link href={item.href}>{item.label}</Link>
                  <span className="breadcrumbs-sep" aria-hidden="true">›</span>
                </>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
