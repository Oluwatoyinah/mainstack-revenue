import { NavLink } from "react-router-dom";
import { INavItem } from "types/nav";

interface NavItemProps {
  data: INavItem;
}

const NavItem = ({ data: { name, icon, uri } }: NavItemProps) => {
  return (
    <NavLink
      to={uri}
      className={({ isActive }) =>
        isActive
          ? "text-white  bg-[#131316] p-[5px] pl-3 pr-4.5 rounded-full trans"
          : "text-[#56616B] p-[4px] pl-2 pr-3.5 rounded-full trans"
      }
    >
      <span className="flex gap-1 items-center">
        <span className="">
          <img className="w-[13px]" src={icon} alt="icon" />
        </span>
        <span className="text-[15px] tracking-[0.5px] leading-[24px] pt-[0.5px]">{name}</span>
      </span>
    </NavLink>
  );
};

export default NavItem;
