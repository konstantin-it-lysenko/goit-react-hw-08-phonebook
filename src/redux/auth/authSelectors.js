export const selectUsername = ({ auth }) => auth.user.name;
export const selectLoggedIn = ({ auth }) => auth.isLoggedIn;
