import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Image from "next/image";
import { inter } from "/app/ui/fonts";
// if (inter) {
// }

/*
http://localhost:3000/posts/first-post
*/
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
        <Image
          priority
          src="/images/hero-desktop.png"
          width={1000}
          height={760}
          className="md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <div className={`${inter.className} antialiased`}>
        Google Icons from Google Fonts with Nextjs
      </div>
    </Layout>
  );
}
