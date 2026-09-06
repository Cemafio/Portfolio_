import {
  Home,
  FolderKanban,
  Briefcase,
} from "lucide-react";

function MenuBar() {

  const menuItems = [
    {
      name: "Accueil",
      icon: Home,
    },
    {
      name: "Projets",
      icon: FolderKanban,
    },
    {
      name: "Expérience",
      icon: Briefcase,
    },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-8">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const href = `#${item.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <li key={item.name}>
              <a
                href={href}
                className="
                  group relative
                  flex items-center gap-2
                  text-sm font-medium
                  transition duration-300
                  hover:text-cyan-400
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                <Icon
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110 menuIcon"
                />

                <span className="textMenu">
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}

      </ul>
    </nav>
  );
}

export default MenuBar;