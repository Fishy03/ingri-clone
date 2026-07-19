export const getToken = () => {
  return localStorage.getItem("adminToken");
};

export const setToken = (token) => {
  localStorage.setItem("adminToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("adminToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("adminToken");
};
