function Button({
  children,
  onClick,
  type = "button",
  variant = "dark",
}) {
    const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
        "bg-gray-200 hover:bg-gray-300 text-gray-900",

    success:
        "bg-green-500 hover:bg-green-600 text-white",

    danger:
        "bg-red-500 hover:bg-red-600 text-white",

    warning:
        "bg-yellow-400 hover:bg-yellow-500 text-black",

    dark:
        "bg-transparent hover:bg-slate-800 font-bold",
    };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-3
        py-1
        text-sm
        rounded-xl
        transition-all
        duration-300
        cursor-pointer
        flex
        aligne-center
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;