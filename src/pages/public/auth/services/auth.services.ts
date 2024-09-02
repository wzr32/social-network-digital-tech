import { LoginType, RegisterType } from "../schemas";

import { useStore } from "@/store/";

const currentState = useStore.getState();

export const loginService = (body: LoginType): void => {
	const { username } = body;
	currentState.loginUser(username);
};

export const registerService = (body: RegisterType): void => {
	currentState.registerUser(body);
};
