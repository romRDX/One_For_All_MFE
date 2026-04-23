import { useEffect, useState } from "react";
import type { StoreApi } from "@client-mf/shared-types";

type Props = {
  storeApi: StoreApi;
};

export default function Content({ storeApi }: Props) {
  const [page, setPage] = useState(storeApi.getState().navigation.page);
  const [userData, setUserData] = useState(storeApi.getState().user.user);

  useEffect(() => {
    const unsubscribe = storeApi.subscribe(() => {
      setPage(storeApi.getState().navigation.page);
      setUserData(storeApi.getState().user.user);
    });

    return unsubscribe;
  }, []);

  console.log("User data:", userData);

  return (
    <div>
      {page === "home" && <p>APP Home</p>}
      {page === "profile" && <p>APP Profile</p>}
    </div>
  );
}
