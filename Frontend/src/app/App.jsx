import { RouterProvider } from "react-router";
import { router } from "./app.routes";

function App() {
  return (
    <RouterProvider router={router}>
      <h1>home</h1>
    </RouterProvider>
  );
}

export default App;
