export type StoreApi = {
  getState: () => any;
  dispatch: (action: any) => void;
  subscribe: (listener: () => void) => () => void;
  actions: {
    setPage: (page: string) => any;
  };
};
