import { MdOutlineArrowDownward } from "react-icons/md";

const Header = () => {
  return (
    <header className=" border-b-2 border-slate-200   py-6">
      <div className="mx-auto w-[1200px] flex items-center justify-between">
        <p className="text-3xl text-slate-200 font-bold">About me</p>
        <a
          className="text-2xl text-slate-200 cursor-pointer font-bold border-[1px] px-3 py-2 hover:bg-slate-200/20 flex items-center gap-4 group transition-all duration-300 active:bg-slate-200/20  focus:bg-slate-200/20"
          id="#projekti"
        >
          Check my projects{" "}
          <MdOutlineArrowDownward className="group-hover:translate-y-1 group-active:translate-y-1  group-focus:translate-y-1  transition-all duration-300" />
        </a>
      </div>
    </header>
  );
};

export default Header;
