import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex py-[10px] px-[10px] md:px-[20px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] loading-none">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-0 md:py-1 md:px-[10px]">
        <div className="flex justify-center flex-wrap">
          {quickLinks.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] loading-none p-[5px] cursor-pointer hover:underline md:p-[10px]"
            >
              {menu}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] loading-none p-[10px] cursor-pointer hover:underline md:p-[10px]"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
