import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import WeightDistribution from "views/WeightDistribution.js";

var routes = [
  {
    path: "/Icons",
    name: "Homepage",
    icon: "tim-icons icon-bank",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Patients List",
    icon: "tim-icons icon-single-02",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "weight distribution",
    icon: "tim-icons icon-chart-bar-32",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Survey",
    icon: "tim-icons icon-notes",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Video Upload",
    icon: "tim-icons icon-video-66",
    component: <TableList />,
    layout: "/admin",
  },
];
export default routes;
