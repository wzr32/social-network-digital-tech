import { v4 as uuidv4 } from "uuid";

import { useStore } from "@/store";
import { Post, PostStatus } from "@/types";

const { createPost, setLike } = useStore.getState();

export const createPostService = (
	data: Pick<Post, "images" | "message" | "author">,
) => {
	const initialObject: Omit<Post, "images" | "message" | "author"> = {
		id: uuidv4(),
		likes: [],
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
