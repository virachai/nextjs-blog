import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "@/components/date";
import HeroSection from "@/components/layout/HeroSection/HeroSection";

// import { inter } from "@/app/ui/fonts";
// import TopNavBar from "@/components/TopNavbar/TopNavbar.js";
/*
- https://github.com/vercel/next-learn
- https://next-seo-starter.vercel.app/
- https://m3.material.io/
- https://fonts.google.com/icons
- https://material-foundation.github.io/material-theme-builder/

- https://nextjs.org/learn
- https://nextjs.org/learn/dashboard-app/css-styling
  - https://www.npmjs.com/package/clsx
- https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
  - https://vercel.com/blog/how-core-web-vitals-affect-seo
*/

// pages/_app.js

// import TopNavBar from '../components/NavBar';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <NavBar />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>
      <HeroSection />
      <section className={`${utilStyles.headingMd} hidden`}>
        <p>
          Hello, I’m <strong>Virachai</strong>. I’m a software engineer and a
          blogger. You can contact me on{" "}
          <a href="https://twitter.com/wvirachai">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <a href="https://toyplusplus.vercel.app/">Toy Plus Plus</a>
        </p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} hidden`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
