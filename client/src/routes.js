import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import WeightDistribution from "views/WeightDistribution.js";
import Survey from "views/Survey.js";
import UploadVideo from "views/UploadVideo.js";

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
    path: "/weight-distribution",
    name: "Weight Distribution",
    icon: "tim-icons icon-chart-bar-32",
    component: <WeightDistribution />,
    layout: "/admin",
  },
  {
    path: "/Survey",
    name: "Survey",
    icon: "tim-icons icon-notes",
    component: <Survey />,
    layout: "/admin",
  },
  {
    path: "/upload-videos",
    name: "Video Upload",
    icon: "tim-icons icon-video-66",
    component: <UploadVideo />,
    layout: "/admin",
  },
];
export default routes;
