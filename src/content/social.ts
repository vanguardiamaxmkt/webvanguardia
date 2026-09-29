import { site } from "./site";

/**
 * Redes sociales oficiales con su ícono (paths monocromo, heredan el color
 * del enlace). Se usan en el pie de página y en la página de contacto.
 */
export const SOCIAL: {
  key: keyof typeof site.social;
  label: string;
  path: string;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    path: "M14 8.5h2V6h-2c-1.9 0-3 1.3-3 3v1.5H9V13h2v6h2.5v-6H16l.5-2.5h-3V9c0-.4.2-.5.5-.5z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M7.5 3h9A4.5 4.5 0 0121 7.5v9A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm0 2A2.5 2.5 0 005 7.5v9A2.5 2.5 0 007.5 19h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0016.5 5h-9zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17 6.3a1 1 0 110 2 1 1 0 010-2z",
  },
  {
    key: "tiktok",
    label: "TikTok",
    path: "M15 3c.3 2 1.5 3.4 3.5 3.7V9.3c-1.3 0-2.5-.4-3.5-1.1v5.9a5.1 5.1 0 11-5.1-5.1c.3 0 .5 0 .8.1v2.6a2.5 2.5 0 102.3 2.5V3H15z",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "M6.5 8.5h-3V20h3V8.5zM5 4A1.75 1.75 0 105 7.5 1.75 1.75 0 005 4zm5.5 4.5h-3V20h3v-6c0-1.7 2.5-1.9 2.5 0v6h3v-6.4c0-3.7-3.9-3.6-5.5-1.8V8.5z",
  },
];
