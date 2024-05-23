import { BiWorld } from "react-icons/bi";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { GoPencil, GoPeople } from "react-icons/go";
import {
  IoIosArrowBack,
  IoIosRepeat,
  IoMdArrowUp,
  IoMdCheckmark,
} from "react-icons/io";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdDeleteOutline,
  MdElectricBolt,
  MdOutlineDashboard,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TiHomeOutline } from "react-icons/ti";

export const ICONS = {
  right: <IoMdCheckmark />,
  home: <TiHomeOutline />,
  dashboard: <MdOutlineDashboard />,
  write: <GoPencil />,
  analytics: <IoAnalyticsOutline />,
  audience: <GoPeople />,
  electric: <MdElectricBolt />,
  settings: <IoSettingsOutline />,
  world: <BiWorld />,
  logOut: <CgLogOut />,
  topArrow: <IoMdArrowUp />,
  copy: <FaLink />,
  link: <RiExternalLinkLine />,
  backArrow: <IoIosArrowBack />,
  eye: <MdOutlineRemoveRedEye />,
  cross: <RxCross2 />,
  profile: <CgProfile />,
  plus: <FiPlusCircle />,
  delete: <MdDeleteOutline />,
  regenerate: <IoIosRepeat />,
};
