export enum PostStatus {
	DRAFTED = "drafted",
	DELETED = "deleted",
	PUBLISHED = "published",
}

export interface User {
	avatar: string;
	name: string;
	surname: string;
	username: string;
}

export interface Post {
	id: string;
	images: string | null;
	message: string;
	likes: string[];
	author: User;
	created_at: string;
	location: string;
	status: PostStatus;
}

export interface Data {
	posts: Post[];
}
