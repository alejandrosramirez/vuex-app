export const increment = (state) => {
	state.count++;
	state.lastMutation = "increment";
};

export const incrementBy = (state, value) => {
	state.count += value;
	state.lastMutation = `incrementBy ${value}`;
	state.isLoading = false;
	state.lastRandomInt = value;
};

export const setIsLoading = (state, value) => {
	state.isLoading = value;
	state.lastMutation = `setIsLoading ${value}`;
};
