export const selectUsername = ({ auth }) => auth.user.name;
export const selectUser = ({ auth }) => auth.user;
export const selectLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectRefreshing = ({ auth }) => auth.isRefreshing;
