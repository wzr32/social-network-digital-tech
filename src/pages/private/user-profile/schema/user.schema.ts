import { z } from "zod";

import { PostStatus } from "@/types";

const userSchema = z.object({
	avatar: z.string().trim(),
	name: z.string().trim(),
	surname: z.string().trim(),
	username: z.string().trim(),
});

const postSchema = z.object({
	id: z.string().trim(),
	images: z.string().nullable(),
	message: z.string().trim(),
	author: userSchema,
	likes: z.array(z.string().trim()),
	created_at: z.string().datetime(),
	location: z.string().trim(),
	status: z.enum([
		PostStatus.DELETED,
		PostStatus.DRAFTED,
		PostStatus.PUBLISHED,
	]),
});

export const userPostsArraySchema = z.array(postSchema);
