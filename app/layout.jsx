import "./globals.scss";
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "프론트엔드 김지은 - 포트폴리오",
  description: "프론트엔드 김지은 - 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        <AnimatedCursor
          outerSize={20}
          outerScale={3}
          trailingSpeed={6}
          showSystemCursor={true}
          outerStyle={{
            backgroundColor: "#c6cbef67",
            zIndex: "9999",
          }}
          innerStyle={{
            display: "none",
          }}
        />
        {children}
      </body>
    </html>
  );
}
