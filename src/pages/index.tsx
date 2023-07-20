import Head from "next/head";
import Link from "next/link";
import { SFProRegular, SFProBold } from "../styles/fonts";

export default function Home() {
  return (
    <>
      <Head>
        <title>audio2subs - easy single word captioning</title>
        <meta name="title" content="audio2subs - easy single word captioning" />
        <meta
          name="description"
          content="with audio2subs, you can transcribe your audio files and turn them into single word captions, like the ones you see in those trending reels and shorts. powered by AI, audio2subs helps you reach a pinnacle of content creation by automating single word captioning, so you don't have to sit and hard code the captions for long! 😵"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://audio2subs.vercel.app/" />
        <meta
          property="og:title"
          content="audio2subs - easy single word captioning"
        />
        <meta
          property="og:description"
          content="with audio2subs, you can transcribe your audio files and turn them into single word captions, like the ones you see in those trending reels and shorts. powered by AI, audio2subs helps you reach a pinnacle of content creation by automating single word captioning, so you don't have to sit and hard code the captions for long! 😵"
        />
        <meta
          property="og:image"
          content="/static/banner.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://audio2subs.vercel.app/" />
        <meta
          property="twitter:title"
          content="audio2subs - easy single word captioning"
        />
        <meta
          property="twitter:description"
          content="with audio2subs, you can transcribe your audio files and turn them into single word captions, like the ones you see in those trending reels and shorts. powered by AI, audio2subs helps you reach a pinnacle of content creation by automating single word captioning, so you don't have to sit and hard code the captions for long! 😵"
        />
        <meta
          property="twitter:image"
          content="/static/banner.png"
        />

        {/* Meta Tags Generated with https://metatags.io88 */}

        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-center bg-cover pb-20 text-center"
        style={{
          backgroundImage: `url('/static/wallpaper.gif')`,
          filter: `saturate(0)`,
        }}
      >
        <div className="container flex flex-col items-center gap-6 px-4 py-16 ">
          <h1
            className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
            style={SFProBold.style}
          >
            audio2subs
          </h1>
          <h1
            style={SFProRegular.style}
            className="text-lg uppercase tracking-[0.5rem] text-white text-center"
          >
            Easy Single Word Captioning
          </h1>
          <h1
            style={SFProBold.style}
            className="rounded-full bg-slate-800 px-4 py-2 text-lg text-white"
          >
            Available for English, Hindi and Urdu
          </h1>

          <div
            className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"
            style={SFProRegular.style}
          >
            <Link
              className="flex flex-col rounded-lg bg-white/20 px-4 py-2 text-center text-xl text-white hover:bg-white/30"
              href={"https://www.youtube.com/shorts/VSjNE9gI3tM"}
              target="_blank"
            >
              <span>See Demo</span>
              <span className="text-sm">
                (on <u>my content</u>)
              </span>
            </Link>
            <Link
              className="flex flex-col rounded-lg bg-white/20 px-4 py-2 text-center text-xl text-white hover:bg-white/30"
              href={"https://tally.so/r/3NDeBB"}
            >
              <span>Book Demo</span>
              <span className="text-sm">
                (on <u>your content</u>)
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="rounded-2xl bg-white px-4 py-2 text-sm mx-8"
          style={SFProRegular.style}
        >
          soon, you{`'`}ll be able to use the audio2subs without <b>saud</b>.
          don{"'"}t worry 🙂
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
