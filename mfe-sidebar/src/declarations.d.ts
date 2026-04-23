declare module "host/storeApi" {
  export const storeApi: {
    getState: () => any;
    dispatch: (action: any) => void;
    subscribe: (listener: () => void) => () => void;
    actions: {
      setPage: (page: string) => any;
    };
  };
}

// PADRÃO EM MFE, POIS O MODULO NÃO EXISTE EM DEV, MAS EXISTE EM RUNTIME
