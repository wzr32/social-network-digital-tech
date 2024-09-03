import { v4 as uuidv4 } from "uuid";

import { useStore } from "@/store";
import { Post, PostStatus } from "@/types";

const { user, createPost, setLike } = useStore.getState();

export const createPostService = (data: Pick<Post, "images" & "message">) => {
	const initialObject: Post = {
		id: uuidv4(),
		images: null,
		message: "",
		likes: [],
		author: user,
		created_at: String(new Date()),
		location: "",
		status: PostStatus.PUBLISHED,
	};
	const auxObj = { ...initialObject, ...data };

	createPost(auxObj);
};

export const likePostService = (postId: string, username: string) => {
	setLike(postId, username);
};
