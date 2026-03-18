import prologThumbnail    from "../assets/project/prolog-thumbnail.png";
import prologDes          from "../assets/project/prolog-des.png";
import dreamThumbnail     from "../assets/project/dream-thumbnail.png";
import dreamDes           from "../assets/project/dream-des.png";
import deerlakeThumbnail  from "../assets/project/deerlake-thumbnail.png";
import deerlakeDes        from "../assets/project/deerlake-des.png";
import ignitionThumbnail  from "../assets/project/ignition-thumbnail.png";
import ignitionDes        from "../assets/project/ignition-des.png";
import amThumbnail        from "../assets/project/2am-thumbnail.png";
import amDes              from "../assets/project/2am-des.png";

const projects = [
  {
    id: "deerlake",
    title: "Deer Lake",
    thumbnail: deerlakeThumbnail,
    description: deerlakeDes,
    route: "/deerlake",
  },
  {
    id: "prolog",
    title: "ProLog",
    thumbnail: prologThumbnail,
    description: prologDes,
    route: "/prolog",
  },
  {
    id: "dreamcreatives",
    title: "Dream Creatives",
    thumbnail: dreamThumbnail,
    description: dreamDes,
    route: "/dreamcreatives",
  },
  {
    id: "2am",
    title: "2AM",
    thumbnail: amThumbnail,
    description: amDes,
    route: "/2am",
  },
  {
    id: "ignition",
    title: "Ignition",
    thumbnail: ignitionThumbnail,
    description: ignitionDes,
    route: "/ignition",
  },
];

export default projects;
