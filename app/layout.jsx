import "./globals.scss";
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "JIEUN PORTFOLIO",
  description: "Generated by create next app",
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
