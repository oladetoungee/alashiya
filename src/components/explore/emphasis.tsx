// Bolds the Figma's emphasised phrases inside a string, mirroring the
// withEmphasis helper in about/exhibition-route. Phrases are escaped so
// punctuation (":", "/", "(") is treated literally.
function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function withEmphasis(text: string, phrases?: string[]) {
  if (!phrases?.length) return text;
  const pattern = new RegExp(`(${phrases.map(escapeRegExp).join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? (
      <strong key={i} className="font-semibold text-ink/85">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
