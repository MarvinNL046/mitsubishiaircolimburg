import { memo } from 'react';

interface JsonLdProps {
  schema: Record<string, any>;
}

export const JsonLd = memo(function JsonLd({ schema }: JsonLdProps) {
  if (!schema || typeof schema !== 'object') {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
});