import toast from "react-hot-toast";

import { useStore } from "@/store";
import { Post } from "@/types";

const { getUserPosts, user, createPost } = useStore.getState();
export const getUserPostsService = (): Post[] => getUserPosts(user.username);

export const createBatchPostsService = (
	posts: Post[],
): { success: boolean; error?: unknown } => {
	try {
		posts.forEach((post) => {
			createPost(post);
		});
		return { success: true };
	} catch (error) {
		toast.error("Error creating posts");

		return { success: false, error };
	}
};
