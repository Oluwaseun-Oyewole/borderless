import Logo from "../../assets/svg/state.svg";
import { sidebarLinks } from "../../helper/ constants";
import useToggle from "../../hooks/useToggle";

const Sidebar = () => {
  const toggle = useToggle();
  return (
    <aside
      className={`bg-white fixed lg:relative top-[65px] lg:top-0 left-0 pt-8 h-full w-full shadow-md transform transition-transform lg:transform-none duration-300 ease-in-out ${
        toggle?.open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img src={Logo} alt="logo image" />
        </div>
        <ul className="pt-28 flex flex-col items-center justify-center gap-10 text-gray_primary">
          {sidebarLinks?.map((sideItem, index) => {
            return (
              <li key={index} className="flex gap-2 items-center">
                <sideItem.icon />
                <a href="#" className="font-medium">
                  {sideItem?.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-16  bg-gradient-to-br from-[#3579DC] from-60% to-[#95D9FF] pt-14 pb-6 px-5 text-white rounded-lg">
          <h3 className="pb-2">GET more with PRO</h3>
          <p>Upgrade to pro subscription for $9/month</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
