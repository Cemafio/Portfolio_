function MenuBar() {
    const menuItems = [
        "Accueil",
        "Projets",
        "Expérience",
    ];

    return <nav>
        <ul className="flex items-center gap-8">
        {menuItems.map((item) => (
            <li key={item}>
            <a
                href={`#${item
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
                className="relative text-sm font-medium transition duration-300 hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
                {item}
            </a>
            </li>
        ))}
        </ul>
    </nav>
}

export default MenuBar;