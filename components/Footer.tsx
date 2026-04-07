export default function Footer() {
  return (
    <footer className="bg-cream py-section flex flex-col items-center gap-6 text-stone/70">
      <p className="font-display font-semibold tracking-[0.25em] text-lg">
        AZZOY
      </p>
      <p className="font-body text-label uppercase tracking-[0.12em]">
        Cairo
      </p>
      <div className="w-10 h-px bg-stone/35" />
      <p className="font-body text-label">azzoy.co</p>
      <a
        href="https://instagram.com/azzoy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-stone transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </footer>
  );
}
