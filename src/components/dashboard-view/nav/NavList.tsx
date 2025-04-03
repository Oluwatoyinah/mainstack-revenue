import { NAV_LINK_DATA } from "@constants/index";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <div className="flex gap-10 justify-center items-center ">
      {NAV_LINK_DATA.map((_) => (
        <NavItem data={_} />
      ))}
    </div>
  );
};

export default NavList;
