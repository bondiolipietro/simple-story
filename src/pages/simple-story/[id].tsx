import type { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { StoryService } from '../../services/StoryService';
import { Story } from '../../models/Story';
const storyService = new StoryService();

type Props = {
  story: Story[];
};

type RouteParams = {
  id: string;
};

const SimpleStory: NextPage<Props> = (props) => {
  const { story } = props;

  console.log(story);

  return (
    <div>
      <Head>
        <title>Simple History</title>
        <meta name="description" content="A page with a simple story." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{JSON.stringify(story)}</main>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await storyService.getAllStories();

  const paths = response.map((story) => {
    return {
      params: { id: story.id }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<RouteParams>
) {
  const id = context.params?.id;

  try {
    const response = await storyService.getStoryById(id || '');

    return {
      props: {
        story: response
      }
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
}

export default SimpleStory;
