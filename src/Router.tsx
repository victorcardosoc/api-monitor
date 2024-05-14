import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { APIListView } from "./pages/APIListView/APIListView";
import { ActualShowModeProvider } from "./contexts/showListModeContext";

export function Router() {
  return (
    <ActualShowModeProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<APIListView />} />
        </Route>
      </Routes>
    </ActualShowModeProvider>
  );
}
