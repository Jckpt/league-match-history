import "../styles/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <meta
        name="description"
        content="MatchMaster - League of Legends match history app - Summoner Stats"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo-isolated.svg" />
      <body>{children}</body>
    </html>
  );
}
