import "../css/header.css";
import Button from "./button";
import MenuBar from "./menu";
import {
  Phone
} from "lucide-react";

function Header() {
  function clickAction() {
    console.log('Click');
  }

  const Icon = Phone;


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex h-14 bg-slate-900/80 backdrop-blur border border-slate-800 items-center justify-between px-8 rounded-3xl m-4 mx-20 text-slate-200">
        <span className="m-2 font-bold font-['Space_Grotesk',sans-serif] text-white">
          C-sarm
        </span>
        <MenuBar />
        <Button
          onClick={clickAction}
          className="flex items-center gap-2"
        >
            <Icon
            size={17}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:scale-110 menuIcon"
          />
          <span className="textMenu">
           Me contacter
          </span>
        </Button>
      </div>
    </header>
  )
}

export default Header