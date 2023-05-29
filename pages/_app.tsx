import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";

export function reportWebVitals(metaric: NextWebVitalsMetric) {
  switch (metaric.name) {
    case "FCP":
      console.log(`FCP: ${Math.round(metaric.value * 10) / 10}`);
      break;
    case "LCP":
      console.log(`LCP: ${Math.round(metaric.value * 10) / 10}`);
      break;
    case "TTFB":
      console.log(`TTFB: ${Math.round(metaric.value * 10) / 10}`);
      break;
    case "Next.js-hydration":
      console.log(
        `Hydration: ${Math.round(metaric.startTime * 10) / 10} -> ${
          Math.round((metaric.startTime + metaric.value) * 10) / 10
        }`
      );
      break;
    default:
      break;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
