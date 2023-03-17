import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4">
        <span className="text-black/[0.87] text-[13px] hover:underline cursor-pointer line-height">
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> Gmail</a>
        </span>
        <span className="text-black/[0.87] text-[13px] hover:underline cursor-pointer line-height">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
