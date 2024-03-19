import { FaMoneyBills } from "react-icons/fa6";
import {
  MdContactSupport,
  MdElectricMeter,
  MdHistoryToggleOff,
} from "react-icons/md";

export const links = [
  {
    path: "home",
    text: "home",
  },
  {
    path: "meter-request",
    text: "Meter Request",
  },
  {
    path: "billing",
    text: "billing",
    child: [
      {
        path: "billing/generate-bill",
        text: "generate bill",
      },
      {
        path: "billing/bill-history",
        text: "View Billing History",
      },
    ],
  },
  {
    path: "payments",
    text: "payments",
    child: [
      {
        path: "payments/bill-pay",
        text: "Bill Pay",
      },
      {
        path: "payments/transaction-history",
        text: "View Transaction History",
      },
    ],
  },
  {
    path: "support",
    text: "help and support",
  },
];

export const pointers = [
  {
    icon: <MdElectricMeter className="me-5 fs-4" />,
    title: "Meter Management",
    text: "Register a new meter or update your existing meter information.",
  },
  {
    icon: <FaMoneyBills className="me-5 fs-4" />,
    title: "Bill View & Pay",
    text: "View your current bill and pay conveniently through our secure online system.",
  },
  {
    icon: <MdHistoryToggleOff className="me-5 fs-4" />,
    title: "Track History",
    text: "Access and track your past bill payments and consumption history.",
  },
  {
    icon: <MdContactSupport className="me-5 fs-4" />,
    title: "Contact Us",
    text: "Our customer support team is available 24/7 to assist you with any questions.",
  },
];

export default links;
