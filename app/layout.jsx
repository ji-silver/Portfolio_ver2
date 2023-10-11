import "./globals.scss";
import Layout from "../components/layout/Layout";

export const metadata = {
  title: "JIEUN PORTFOLIO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
