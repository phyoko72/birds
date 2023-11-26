export default function Hamburger({
    isOpen,
    closeNav,
}: {
    isOpen: boolean
    closeNav: () => void
}) {
    return (
        <div onClick={closeNav} className=" md:hidden">
            <span
                className={`bg-white block mb-1 w-8 h-1 transition-all duration-500 ${
                    isOpen && "rotate-45 translate-y-2"
                }`}
            ></span>
            <span
                className={`bg-white block mb-1 w-8 h-1 transition-all duration-500 ${
                    isOpen && "opacity-0"
                }`}
            ></span>
            <span
                className={`bg-white block mb-1 w-8 h-1 transition-all duration-500 ${
                    isOpen && "-rotate-45 -translate-y-2"
                }`}
            ></span>
        </div>
    )
}
