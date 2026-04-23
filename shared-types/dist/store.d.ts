export type User = {
    id: string;
    name: string;
    email: string;
};
export type NavigationState = {
    page: string;
};
export type UserState = {
    user: User | null;
    isAuthenticated: boolean;
};
export type RootState = {
    navigation: NavigationState;
    user: UserState;
};
export type StoreApi = {
    getState: () => RootState;
    subscribe: (listener: () => void) => () => void;
    navigation: {
        setPage: (page: string) => void;
    };
    user: {
        setUser: (user: User) => void;
        logout: () => void;
    };
};
