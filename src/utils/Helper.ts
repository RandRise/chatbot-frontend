export const getRolesFromLocalStorage = () => localStorage.getItem("role")?.split(',');
export const getTokenFromLocalStorage = () => localStorage.getItem('token');
