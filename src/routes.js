
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Loan from "./views/examples/Loan";
import SendLoan from "./views/examples/SendLoan";
import ApproveLoan from "./views/examples/ApproveLoan";

var routes = [
  {
    path: "/tables",
    name: "Зээлийн хүсэлт",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/loan",
    name: "Хүсэлт үүсгэх",
    icon: "ni ni-planet text-blue",
    component: <Loan />,
    layout: "/admin",
  },
  {
    path: "/sendLoan",
    name: "Зээл илгээх",
    icon: "ni ni-tv-2 text-primary",
    component: <SendLoan />,
    layout: "/admin",
  },
  {
    path: "/approveLoan",
    name: "Зээл шийдвэрлэх",
    icon: "ni ni-check-bold text-success",
    component: <ApproveLoan />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Профайл",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Нэвтрэх",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Бүртгүүлэх",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
