import { z } from "zod";

export const loginSchema = z.object({
	username: z.string().min(3).max(50),
});

export const registerSchema = z.object({
	username: z.string().min(3).max(50),
	name: z.string().min(3).max(255),
	surname: z.string().min(3).max(255),
	avatar: z.string().nullable(),
});

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
