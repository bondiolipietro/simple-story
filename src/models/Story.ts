export type Story = {
  id: string;
  title: string;
  preview_image_url: string;
  description: string;
  pages: StoryPage[];
};

type StoryPage = {
  text: string;
  image_url: string;
};
