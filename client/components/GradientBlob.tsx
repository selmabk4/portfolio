export default function GradientBlob({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M190 379C294.382 379 379 294.382 379 190C379 85.6182 294.382 1 190 1C85.6182 1 1 85.6182 1 190C1 294.382 85.6182 379 190 379Z"
        fill={`url(#${id}-0)`}
      />
      <path
        d="M190 379C294.382 379 379 294.382 379 190C379 85.6182 294.382 1 190 1C85.6182 1 1 85.6182 1 190C1 294.382 85.6182 379 190 379Z"
        fill={`url(#${id}-1)`}
      />
      <path
        d="M190 379C294.382 379 379 294.382 379 190C379 85.6182 294.382 1 190 1C85.6182 1 1 85.6182 1 190C1 294.382 85.6182 379 190 379Z"
        fill={`url(#${id}-2)`}
      />
      <path
        d="M190 379C294.382 379 379 294.382 379 190C379 85.6182 294.382 1 190 1C85.6182 1 1 85.6182 1 190C1 294.382 85.6182 379 190 379Z"
        fill={`url(#${id}-3)`}
      />
      <defs>
        <radialGradient
          id={`${id}-0`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(133.3 121.96) scale(245.7)"
        >
          <stop stopColor="#FFFCF8" stopOpacity="0.88" />
          <stop offset="0.18" stopColor="#B4D2E6" stopOpacity="0.45" />
          <stop offset="0.4" stopColor="#C8B4DC" stopOpacity="0.18" />
          <stop offset="0.65" stopColor="#96C8D2" stopOpacity="0.09" />
          <stop offset="0.85" stopColor="#AABED2" stopOpacity="0.04" />
          <stop offset="1" stopColor="#8CAAC8" stopOpacity="0.01" />
        </radialGradient>
        <radialGradient
          id={`${id}-1`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(190 190) scale(189)"
        >
          <stop offset="0.82" stopOpacity="0" />
          <stop offset="0.9" stopColor="#82AFC8" stopOpacity="0.3" />
          <stop offset="0.94" stopColor="#BE96DC" stopOpacity="0.38" />
          <stop offset="0.97" stopColor="#8CD2C3" stopOpacity="0.3" />
          <stop offset="1" stopColor="#DCB996" stopOpacity="0.22" />
        </radialGradient>
        <radialGradient
          id={`${id}-2`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(114.4 106.84) scale(83.16)"
        >
          <stop stopColor="white" stopOpacity="0.9" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id={`${id}-3`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(258.04 273.16) scale(45.36)"
        >
          <stop stopColor="#C8E6FF" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
