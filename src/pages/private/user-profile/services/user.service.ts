import { useStore } from "@/store";
import { Post } from "@/types";

export const getUserPostsService = (): Post[] => {
	const { getUserPosts, user } = useStore.getState();
	return getUserPosts(user.username);
};
