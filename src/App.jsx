import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerMain from "./route";

function App() {
  const router = createBrowserRouter(routerMain);
  return <RouterProvider router={router} />;
}

export default App;
