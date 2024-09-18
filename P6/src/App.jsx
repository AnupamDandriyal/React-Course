import Dashboard from "./pages/Dashboard/Dashboard"
import Support from "./pages/Support/Support"
import Transactions from "./pages/Transaction/Transactions"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard /> ,
  },
  {
    path: "/transactions",
    element: <Transactions /> ,
  },
  {
    path: "/support",
    element: <Support /> ,
  },
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
