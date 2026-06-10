import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Component to render text with **bold** markdown support and line breaks
 * Example: "This is **bold text** and normal text" => "This is <strong>bold text</strong> and normal text"
 * Line breaks (\n) are converted to <br /> tags
 * Example: "Line one.\nLine two." => "Line one.<br />Line two."
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split text by **text** pattern and newlines
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Check if this part is bold (wrapped in **)
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2); // Remove ** from both sides
          return <strong key={index} className="font-bold text-foreground">{boldText}</strong>;
        }
        // Check if this part is a newline
        if (part === '\n') {
          return <br key={index} />;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};

export default FormattedText;
