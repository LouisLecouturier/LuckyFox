import "../styles/globals.scss";

import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--raleway"
});

const yermo = localFont({
  src: "./font/Yermo.otf",
  variable: "--yermo"
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${raleway.variable} ${yermo.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
