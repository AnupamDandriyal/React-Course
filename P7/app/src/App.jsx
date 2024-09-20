import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccesful from "./pages/Auth/RegisterSucces/RegisterSuccesful";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordSucces from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSucces";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>,
    },
    {
      path: "/transactions",
      element: <ProtectedRoute> <TransactionPage /> </ProtectedRoute>,
    },
    {
      path: "/support",
      element: <ProtectedRoute> <Support /> </ProtectedRoute>,
    },
    {
      path: "/signup",
      element:<AlreadySigninRoute> <Signup /> </AlreadySigninRoute> ,
    },
    {
      path: "/signin",
      element:<AlreadySigninRoute> <Signin /> </AlreadySigninRoute> ,
    },
    {
      path: "/register-email-verify/:email",
      element:<AlreadySigninRoute> <RegisterEmailVerify /> </AlreadySigninRoute> ,
    },
    {
      path: "/register-succesful/:token",
      element:<AlreadySigninRoute> <RegisterSuccesful /> </AlreadySigninRoute> ,
    },
    {
      path: "/forgot-password",
      element:<AlreadySigninRoute> <ForgotPassword /> </AlreadySigninRoute> ,
    },
    {
      path: "/forgot-password-sent/:email",
      element: <AlreadySigninRoute> <ForgotPasswordSent /> </AlreadySigninRoute> ,
    },
    {
      path: "/forgot-password-verify/:token",
      element:<AlreadySigninRoute> <ResetPassword /> </AlreadySigninRoute> ,
    },
    {
      path: "/reset-password-success",
      element:<AlreadySigninRoute> <ResetPasswordSucces /> </AlreadySigninRoute> ,
    },
  ]);
  
const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
