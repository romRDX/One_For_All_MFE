export const mockStoreApi = {
  getState: () => ({
    navigation: { page: "home" },
    user: {
      user: null,
      isAuthenticated: false,
    },
  }),

  subscribe: () => () => {},

  navigation: {
    setPage: (page: string) => {
      console.log("mock setPage:", page);
    },
  },

  user: {
    setUser: (user: any) => {
      console.log("mock setUser:", user);
    },
    logout: () => {
      console.log("mock logout");
    },
  },
};
