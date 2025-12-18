import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiago Rodrigues | Software Engineer & DevOps",
  description:
    "FullStack Developer and DevOps specialist with 14+ years of experience. Expert in Go, Python, Kubernetes, AWS, and GCP.",
  keywords: [
    "Software Engineer",
    "DevOps",
    "SRE",
    "Kubernetes",
    "AWS",
    "GCP",
    "Go",
    "Python",
    "React",
    "Full Stack Developer",
  ],
  authors: [{ name: "Thiago Rodrigues" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Thiago Rodrigues | Software Engineer & DevOps",
    description:
      "FullStack Developer and DevOps specialist with 14+ years of experience.",
    url: "https://thiago.social",
    siteName: "Thiago Rodrigues",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Rodrigues | Software Engineer & DevOps",
    description:
      "FullStack Developer and DevOps specialist with 14+ years of experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
