import getRandomInt from "@/helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
	commit("setIsLoading", true);
	const random = await getRandomInt();
	commit("incrementBy", random);
	commit("setIsLoading", false);
};
