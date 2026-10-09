import Link from "next/link";
import { ArrowIcon } from "./components/icons";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>迷</span>
      <p className="eyebrow">404 · A page has wandered away</p>
      <h1>Lost between<br /><em>the pages.</em></h1>
      <Link href="/" className="button primary-button">Return home <ArrowIcon /></Link>
    </main>
  );
}
