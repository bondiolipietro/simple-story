import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { StoryService, Story } from '../../services/StoryService';
const storyService = new StoryService();

type Props = {
  stories: Story[];
};

const Home: NextPage<Props> = (props) => {
  const { stories } = props;

  return (
    <div>
      <Head>
        <title>Simple Stories</title>
        <meta name="description" content="A page with simple stories." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {stories.map((story) => {
          return (
            <>
              <div>{story.id}</div>
              <div>{story.title}</div>
              <div>{story.description}</div>
              <div>{story.preview_image_url}</div>
            </>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await storyService.getAllStories();

  return {
    props: {
      stories: response
    }
  };
}

export default Home;
