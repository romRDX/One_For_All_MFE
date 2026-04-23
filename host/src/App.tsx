import React, { Suspense, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { storeApi } from "./store/storeApi";
// import type { StoreApi } from "@client-mf/shared-types/store";
// import type { StoreApi } from "@client-mf/shared-types/store";
import type { StoreApi } from "@client-mf/shared-types/store";
// import type { StoreApi } from "shared-types/store";

const RemoteHome = React.lazy(() => import("mfe_home/Home"));
const RemoteDashboard = React.lazy(() => import("mfe_dashboard/Dashboard"));
const RemoteSidebar = React.lazy(
  () => import("mfe_sidebar/Sidebar"),
) as React.ComponentType<{ storeApi: StoreApi }>;

const RemoteContent = React.lazy(
  () => import("mfe_content/Content"),
) as React.ComponentType<{ storeApi: StoreApi }>;

function App() {
  useEffect(() => {
    storeApi.dispatch(
      storeApi.user.setUser({
        id: "1",
        name: "Rômullo",
        email: "romullo@email.com",
      }),
    );
  }, []);

  return (
    <div>
      <h1>HOST APP</h1>

      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/app">App</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <RemoteHome />
            </Suspense>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <RemoteDashboard />
            </Suspense>
          }
        />

        <Route
          path="/app"
          element={
            <div style={{ display: "flex" }}>
              <Suspense fallback={<div>Loading Sidebar...</div>}>
                <RemoteSidebar storeApi={storeApi} />
              </Suspense>

              <Suspense fallback={<div>Loading Content...</div>}>
                <RemoteContent storeApi={storeApi} />
              </Suspense>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
