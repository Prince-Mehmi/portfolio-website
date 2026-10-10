export type PersonalLink = {
  label: string;
  href: string;
};

export const siteContent = {
  name: "Prince Mehmi",
  firstName: "Prince",
  role: "Backend engineer",
  personality: "INTJ",
  location: "Patiala, Punjab, India",
  coordinates: {
    display: "30.3432° N · 76.4523° E",
    full: "30.343182302657038, 76.45227842596694",
  },
  intro:
    "I build backend systems, enjoy understanding how things work, and try to get a little better at life along the way.",
  about:
    "I tend to approach things analytically, whether I am solving a technical problem or making an everyday decision. Away from the work itself, I am interested in health, fitness, self-improvement, and the useful questions technology makes us ask.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prince-mehmi/",
    },
    {
      label: "GitHub",
      href: "https://github.com/Prince-Mehmi/",
    },
    {
      label: "Email",
      href: "mailto:princemehmi111@gmail.com",
    },
  ] satisfies PersonalLink[],
} as const;
