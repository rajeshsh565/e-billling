import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Homepage,
  LandingPage,
  Login,
  Register,
  Error,
  DashboardLayout,
  GenerateBill,
  BillingHistory,
  BillPayment,
  TransactionHistory,
  DashboardHome,
  Profile,
  Help,
  MeterRequest,
  ChangePassword,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index:true,
            element: <DashboardHome />,
          },
          {
            path:"home",
            element: <DashboardHome />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "meter-request",
            element: <MeterRequest />,
          },
          {
            path: "support",
            element: <Help />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "billing/generate-bill",
            element: <GenerateBill />,
          },
          {
            path: "billing/bill-history",
            element: <BillingHistory />,
          },
          {
            path: "payments/bill-pay",
            element: <BillPayment />,
          },
          {
            path: "payments/transaction-history",
            element: <TransactionHistory />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
