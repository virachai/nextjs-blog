import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link'; // Link is imported from Next.js
import Date from '@/components/date';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ProductArea from '@/components/layout/ProductArea/ProductArea';
import CategorieArea from '@/components/layout/CategorieArea/CategorieArea';
import { GetStaticProps } from 'next'; // Import GetStaticProps type

type Post = {
  id: string;
  date: string;
  title: string;
};

type HomeProps = {
  allPostsData: Post[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle ? `${siteTitle} - Home` : 'Home'}</title>
      </Head>
      <HeroSection />
      <ProductArea />
      <CategorieArea />

      {/* About Section */}
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Virachai</strong>. I’m a software engineer and a
          blogger. You can contact me on{' '}
          <Link
            href="https://twitter.com/wvirachai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <Link
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            our Next.js tutorial
          </Link>
          .)
        </p>
        <p>
          <Link
            href="https://toyplusplus.vercel.app()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toy Plus Plus
          </Link>
        </p>
      </section>

      {/* Blog Section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
