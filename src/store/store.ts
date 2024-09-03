import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

import { Data, Post, User } from "../types/global.types";

const STORAGE_KEY = "DIGITAL_TECH_STORE";

const initialUserState: User = {
	avatar: "",
	name: "",
	surname: "",
	username: "",
};

const initialUsersState: User[] = [];

const initialDataState: Data = {
	posts: [],
};

interface UserStoreType {
	users: User[];
	user: User;
	data: Data;
	isAuth: boolean;
	loginUser: (username: string) => void;
	registerUser: (user: User) => void;
	logoutUser: () => void;
	createPost: (post: Post) => void;
	getUserPosts: (username: string) => Post[];
	setLike: (postId: string, username: string) => void;
}

export const useStore = create<UserStoreType>()(
	persist(
		(set, get) => ({
			users: initialUsersState,
			user: initialUserState,
			data: initialDataState,
			isAuth: false,
			loginUser: (username: string) => {
				const user = get().users.find((u) => u.username === username);

				if (!user) {
					toast.error("User not found");
					return;
				}
				toast.success("User logged in successfully");
				set({ user: { ...user }, isAuth: true });
			},
			registerUser: (user: User) => {
				const users = get().users;

				if (users.some((u) => u.username === user.username)) {
					toast.error("Username already in use");
					return;
				}

				set({ users: [...get().users, user] });
				toast.success("User registered successfully");
			},
			logoutUser: () => {
				set({ isAuth: false, user: { ...initialUserState } });
				toast.success("User logged out successfully");
			},
			createPost: (post: Post) => {
				set({
					data: {
						posts: [
							...get().data.posts,
							{ ...post, author: { ...post.author } },
						],
					},
				});
			},
			getUserPosts: (username: string) =>
				get().data.posts.filter((post) => post.author.username === username),
			setLike: (postId: string, username: string) => {
				const post = get().data.posts.find((post) => post.id === postId);
				if (!post) {
					toast.error("Something went wrong");
					return;
				}

				const isLiked = post.likes.includes(username);

				if (isLiked) {
					post.likes.splice(post.likes.indexOf(username), 1);
				} else {
					post.likes.push(username);
				}

				set({ data: { posts: [...get().data.posts] } });
			},
		}),
		{
			name: STORAGE_KEY,
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => (state) => {
				if (!state) {
					localStorage.setItem(
						STORAGE_KEY,
						JSON.stringify({
							state: {
								users: initialUsersState,
								user: initialUserState,
								data: initialDataState,
								isAuth: false,
							},
						}),
					);
				}
			},
		},
	),
);

if (!localStorage.getItem(STORAGE_KEY)) {
	localStorage.setItem(
		STORAGE_KEY,
		JSON.stringify({
			state: {
				users: initialUsersState,
				user: initialUserState,
				data: initialDataState,
				isAuth: false,
			},
		}),
	);
}
