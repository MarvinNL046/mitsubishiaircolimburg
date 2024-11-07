import { memo } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd = memo(function JsonLd({ data }: JsonLdProps) {
  if (!data || typeof data !== 'object') {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
});