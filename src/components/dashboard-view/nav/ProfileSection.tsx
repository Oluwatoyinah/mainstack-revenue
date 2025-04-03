import { ICONS } from "@constants/index";
import CustomButton from "../shared/CustomButton";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";

const ProfileSection = ({ data }: { data: { first_name: string; email: string; last_name: string } }) => {
  const { first_name, last_name, email } = data ?? {};
  return (
    <div className="flex gap-2 items-center">
      <button className="p-2">
        <img src={ICONS.Notificiation} alt="notification" />
      </button>
      <button className="p-2">
        <img src={ICONS.Chat} alt="chat" />
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <CustomButton variant="grey" size="custom" className="flex gap-2.5 items-center rounded-full !p-1 !pr-3">
            <span className="size-8 grid place-content-center profile-gradient rounded-full text-white">
              <span className="text-[14px]">
                {first_name?.charAt(0)}
                {last_name?.charAt(0)}
              </span>
            </span>
            <span>
              <img src={ICONS.Menu} className="w-[16px]" alt="menu" />
            </span>
          </CustomButton>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] popup-shadow mt-2 mr-2 border-[#f6f6f6] p-5  radius-[12px]">
          <div className="w-full min-h-25 rounded">
            <div className="flex gap-3 items-center">
              <span className="size-16 grid place-content-center profile-gradient rounded-full text-white">
                <span className="text-[28px]">
                  {first_name?.charAt(0)}
                  {last_name?.charAt(0)}
                </span>
              </span>
              <div>
                <p className="fontsemibold text-[24px] leading-[150%]">
                  {first_name} {last_name}
                </p>
                <p className="text-[16px] leading-[16px] font-normal text-[#56616B]">{email}</p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProfileSection;
