import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SiteChrome from "@/components/site-chrome";
import { ThemeModeProvider } from "@/components/theme-mode-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://titansmp.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TitanSMP",
    template: "%s | TitanSMP",
  },
  description:
    "TitanSMP is a synchronized Minecraft network with connected SMPs, hubs, and future duel arenas where your progress follows you everywhere.",
  keywords: [
    "TitanSMP",
    "Minecraft SMP",
    "Minecraft network",
    "synchronized SMP",
    "cross-server inventory",
    "survival multiplayer",
    "Minecraft community",
    "Minecraft server",
    "Minecraft hub",
    "Minecraft duels",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "TitanSMP",
    title: "TitanSMP | Synchronized Minecraft Network",
    description:
      "A next-generation Minecraft network with synchronized SMPs, hubs, and future duel arenas.",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "TitanSMP logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TitanSMP | Synchronized Minecraft Network",
    description:
      "A next-generation Minecraft network with synchronized SMPs, hubs, and future duel arenas.",
    images: [`${baseUrl}/logo.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};

const themeInitScript = `(() => {
  const STORAGE_KEY = "theme-mode";
  const root = document.documentElement;

  const savedMode = window.localStorage.getItem(STORAGE_KEY);
  const mode =
    savedMode === "light" || savedMode === "dark" || savedMode === "auto"
      ? savedMode
      : "auto";

  const effectiveMode =
    mode === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : mode;

  root.classList.toggle("dark", effectiveMode === "dark");
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TitanSMP",
    url: baseUrl,
    description:
      "A synchronized Minecraft network connecting SMPs, hubs, and future duel arenas.",
    sameAs: [
      "https://github.com/titansmp",
      "https://modrinth.com/organization/5c3YLzt7",
      "https://discord.gg/88k3eUvADh",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Henry",
      },
      {
        "@type": "Person",
        name: "Matti",
      },
      {
        "@type": "Person",
        name: "Joel",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head />
      <body className="min-h-full flex flex-col">
        <Analytics />
        <ThemeModeProvider>
          <SiteChrome />

          {children}
        </ThemeModeProvider>
      </body>
    </html>
  );
}
