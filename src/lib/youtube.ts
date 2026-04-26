import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['yt:videoId'],
  },
});

export type YouTubeVideo = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
};

export async function getLatestVideos(channelId: string, limit: number = 2): Promise<YouTubeVideo[]> {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    
    // Fetch with ISR: revalidate every hour (3600 seconds)
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      console.error(`Failed to fetch YouTube RSS feed: ${response.statusText}`);
      return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    const videos = feed.items.slice(0, limit).map((item: any) => {
      const videoId = item['yt:videoId'] || item.id?.split(':').pop();
      
      return {
        id: videoId || '',
        title: item.title || '',
        link: item.link || '',
        thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        pubDate: item.pubDate || '',
      };
    });

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}
