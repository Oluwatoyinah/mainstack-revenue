import { IMAGES } from "@constants/index";
import NavList from "./NavList";
import ProfileSection from "./ProfileSection";
import { useQuery } from "@tanstack/react-query";
import useReqData from "@hooks/data-hook";

const Navbar = () => {
  const { getUserFn } = useReqData();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getUserFn,
  });

  return (
    <nav className="w-full min-h-10 rounded-full nav-shadow flex item-center justify-between gap-3 px-5 py-2 pl-6  sticky top-4 bg-white z-4">
      <div>
        <span>
          <img src={IMAGES.MainstackLogo} alt="logo" />
        </span>
      </div>
      <div className="flex-grow">
        <NavList />
      </div>
      <div>
        <ProfileSection data={data} />
      </div>
    </nav>
  );
};

export default Navbar;
