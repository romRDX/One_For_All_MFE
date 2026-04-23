export type User = {
  id: string;
  name: string;
  email: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};
