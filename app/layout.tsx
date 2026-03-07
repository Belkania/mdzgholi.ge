import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeDrive",
  description: "SafeDrive — Professional driver services in Georgia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
