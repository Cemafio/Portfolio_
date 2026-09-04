import "../css/header.css";
import Button from "./button";
import MenuBar from "./menu";

function Header() {
  function clickAction() {
    console.log('Click');
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex h-14 bg-slate-900/80 backdrop-blur border border-slate-800 items-center justify-between px-8 rounded-3xl m-4 mx-20 text-slate-200">
        <span className="m-2 font-bold font-['Space_Grotesk',sans-serif] text-white">
          C-sarm
        </span>
        <MenuBar />
        <Button
          onClick={clickAction}
          className="bg-teal-400 text-slate-950 hover:bg-teal-300 rounded-full px-4 py-1.5 font-medium transition-colors"
        >
          Me contacter
        </Button>
      </div>
    </header>
  )
}

export default Header