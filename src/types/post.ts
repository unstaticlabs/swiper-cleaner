import type { AppBskyFeedPost } from '@atproto/api';
import type { PostView } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

export type PostData = PostView & {
  record: AppBskyFeedPost.Record;
  cardUri: string;
  isRepost?: boolean;
  reply?: {
    parent?: PostView;
    root?: PostView;
  };
};
export type TriagedPostsMap = Map<string, string>; // <uri, timestamp>

export type MemoizedCardProps = {
  postData: PostData;
  renderPostImage: (img: unknown, index: number) => React.ReactNode;
  renderPostStats: (postData: PostData) => React.ReactNode;
};
