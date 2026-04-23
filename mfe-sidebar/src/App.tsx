import type { StoreApi } from "@client-mf/shared-types";

type Props = {
  storeApi: StoreApi;
};

export default function Sidebar({ storeApi }: Props) {
  const handleClick = (page: string) => {
    storeApi.navigation.setPage(page);
  };

  return (
    <div style={{ width: 200, background: "#eee", padding: 20 }}>
      <h3>Sidebar (Redux)</h3>

      <button onClick={() => handleClick("home")}>Home</button>
      <br />
      <button onClick={() => handleClick("profile")}>Profile</button>
    </div>
  );
}
