import { IMAGES } from "@constants/index";

const SideBar = () => {
  return (
    <div className="dashboard-side-nav fixed w-max p-1 top-[25%] left-[20px] rounded-full min-h-[200px] popup-shadow flex flex-col justify-around">
      {[IMAGES.Product1, IMAGES.Product2, IMAGES.Product3, IMAGES.Product4].map((el, i) => (
        <button className="p-2 filter grayscale hover:grayscale-0 trans" key={`product${i}`}>
          <img src={el} alt="product -img" />
        </button>
      ))}
    </div>
  );
};

export default SideBar;
