import Head from "next/head";
import Link from "next/link";
import { SFProRegular, SFProBold } from "../styles/fonts";

export default function Home() {
  return (
    <>
      <Head>
        <title>audio2subs - easy single word captioning</title>
        <meta name="description" content="easy single word captioning" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-center bg-cover pb-20"
        style={{
          backgroundImage: `url('/wallpaper.gif')`,
          filter: `saturate(0)`,
        }}
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1
            className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
            style={SFProBold.style}
          >
            audio2subs
          </h1>
          <h1
            style={SFProRegular.style}
            className="text-lg uppercase tracking-[0.5rem] text-white"
          >
            Easy Single Word Captioning
          </h1>
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"
            style={SFProRegular.style}
          >
            <Link
              className="rounded-lg bg-white/10 px-4 py-2 text-center text-xl text-white hover:bg-white/20"
              href={""}
            >
              See Demo
            </Link>
            <Link
              className="rounded-lg bg-white/10 px-4 py-2 text-center text-xl text-white hover:bg-white/20"
              href={""}
            >
              Book Demo
            </Link>
          </div>
        </div>
        <h1
          className="rounded-2xl bg-white px-4 py-2 text-lg"
          style={SFProRegular.style}
        >
          the web app will soon be available. don{"'"}t worry 🙂
        </h1>
        <footer
          className="absolute bottom-2 text-center text-xl text-white"
          style={SFProRegular.style}
        >
          Made with ❤ by{" "}
          <a
            href={"https://saudhashmi.com"}
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={SFProBold.style}
          >
            saud
          </a>
        </footer>
      </main>
    </>
  );
}
