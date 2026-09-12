/** Sello circular "Tasación certificada" (chispa cálida). Reutilizable. */
export function Seal({ text }: { text: string }) {
  return (
    <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="#E8A33D" strokeWidth="2" />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#E8A33D"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <circle cx="50" cy="50" r="26" fill="#0F2A43" />
      <path
        d="M40 50l7 7 14-15"
        fill="none"
        stroke="#E8A33D"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <path id="seal-curve" d="M50 14 a36 36 0 1 1 -0.1 0" />
      </defs>
      <text
        fontFamily="Inter,sans-serif"
        fontSize="8.2"
        fontWeight="700"
        fill="#0F2A43"
        letterSpacing="1.4"
      >
        <textPath href="#seal-curve" startOffset="2%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
