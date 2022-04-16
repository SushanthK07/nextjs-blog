type Post = {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
};

type Posts = Post[];

export type { Post, Posts };
