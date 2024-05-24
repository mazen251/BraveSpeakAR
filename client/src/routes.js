import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";

var routes = [
  {
    path: "/Icons",
    name: "Homepage",
    rtlName: "الرموز",
    icon: "tim-icons icon-bank",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Patients List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-single-02",
    component: <TableList />,
    layout: "/admin",
  },
];
export default routes;
