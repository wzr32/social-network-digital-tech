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
	images: string | string[];
	message: string;
	likes: string[];
	author: User;
	created_at: Date;
	location: string;
	status: PostStatus;
}

export interface Data {
	posts: Post[];
}
