// Import Fonts
import { primary } from "./configs/fonts";
import Script from 'next/script'
// Import Components
import ConditionalLayout from "./ConditionalLayout";
// Import Css
import "./global.css";
// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "Your Vision Coupled with Creative Excellence",
  description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
  // Canonical
  alternates: { canonical: 'https://infinityanimationspro.com/' },
  // OG Metas
  openGraph: {
    title: "Your Vision Coupled with Creative Excellence",
    description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
    url: 'https://infinityanimationspro.com/',
    siteName: 'InFinity Animation',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex "></meta>
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af" />
    </html>
  );
}
