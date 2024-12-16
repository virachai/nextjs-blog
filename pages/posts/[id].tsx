import Layout from '../../components/layout';
// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Date from '../../components/date';

// Define the types for the props
interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

interface PostProps {
  postData: PostData;
}

// `getStaticProps` function with types
export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (params?.id) {
    const postData = await getPostData(params.id as string); // Type-cast params.id
    return {
      props: {
        postData
      }
    };
  }

  return {
    notFound: true
  };
};

// `getStaticPaths` function with types
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      {/* Optional display of post info */}
      <Date dateString={postData.date} />
      <br />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;
