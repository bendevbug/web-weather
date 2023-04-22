import { globalStyles } from "@/styles/Global"

globalStyles()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
