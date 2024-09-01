import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Data, Post, User } from "../src/types/global.types";

const STORAGE_KEY = "dt_user_storage";

const initialUserState: User = {
	avatar: "",
	name: "",
	surname: "",
	username: "",
};
const initialDataState: Data = {
	posts: [],
};

type UserStoreType = {
	user: User;
	data: Data;
	isAuth: boolean;
	loginUser: (username: string) => void;
	registerUser: (user: User) => void;
	logoutUser: () => void;
	createPost: (post: Post | Post[]) => void;
	getUserPosts: (username: string) => Post[];
	setLike: (postId: string, username: string) => void;
};

export const useStore = create<UserStoreType>()(
	persist(
		(set, get) => ({
			user: initialUserState,
			data: initialDataState,
			isAuth: false,
			loginUser: (username: string) => {
				set({ user: { ...get().user, username }, isAuth: true });
			},
			registerUser: (user: User) => {
				set({ user, isAuth: true });
			},
			logoutUser: () => {
				set({ user: initialUserState, isAuth: false });
			},
			createPost: (post: Post | Post[]) => {
				const posts = Array.isArray(post) ? post : [post];
				set({ data: { posts: [...get().data.posts, ...posts] } });
			},
			getUserPosts: (username: string) => {
				return get().data.posts.filter(
					(post) => post.author.username === username,
				);
			},
			setLike: (postId: string, username: string) => {
				const post = get().data.posts.find((post) => post.id === postId);
				if (!post) return;

				const isLiked = post.likes.includes(username);

				isLiked
					? post.likes.splice(post.likes.indexOf(username), 1)
					: post.likes.push(username);

				return set({ data: { posts: [...get().data.posts] } });
			},
		}),
		{
			name: STORAGE_KEY,
			storage: createJSONStorage(() => localStorage),
		},
	),
);
