import { Story } from '../models/Story';

export class StoryService {
  public async getAllStories(): Promise<Story[]> {
    let mock = [
      {
        id: '1',
        title: 'title 1',
        preview_image_url: 'url 1',
        description: 'description 1',
        pages: [
          {
            text: 'Texto da pagina 1',
            image_url: 'url 1'
          },
          {
            text: 'Texto da pagina 2',
            image_url: 'url 2'
          }
        ]
      },
      {
        id: '2',
        title: 'title 2',
        preview_image_url: 'url 2',
        description: 'description 2',
        pages: [
          {
            text: 'Texto da pagina 1',
            image_url: 'url 1'
          },
          {
            text: 'Texto da pagina 2',
            image_url: 'url 2'
          }
        ]
      }
    ];

    return mock;
  }

  public async getStoryById(id: string): Promise<Story> {
    let mock = {
      id: '1',
      title: 'title 1',
      preview_image_url: 'url 1',
      description: 'description 1',
      pages: [
        {
          text: 'Texto da pagina 1',
          image_url: 'url 1'
        },
        {
          text: 'Texto da pagina 2',
          image_url: 'url 2'
        }
      ]
    };

    return mock;
  }
}
