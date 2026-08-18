import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

// 取全部已发布文章，按时间倒序
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

// 每个栏目一个主题色，用于卡片占位图与标签
export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    日常碎碎念: '#1F9D55',
    旅行足迹: '#0F6E56',
    读书观影: '#BA7517',
    美食厨房: '#D85A30',
    手作: '#534AB7',
  };
  return map[category] ?? '#1F9D55';
}
