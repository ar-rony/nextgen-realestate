import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verity & Co Homes | Your Dream Home Awaits",
  description: "Family‑built homes in Yorkshire & Lancashire since 1986.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans text-gray-800 bg-[#F8F5F0]"
        suppressHydrationWarning   // ← add this
      >
        {children}
      </body>
    </html>
  );
}