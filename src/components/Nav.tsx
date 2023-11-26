"use client"
import {useState} from "react"
import Link from "next/link"
import Hamburger from "./Hamburger"
import BirdLogo from "./BirdLogo"
import {usePathname} from "next/navigation"
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const links = [
        {href: "/", title: "Home"},
        {href: "/birds", title: "Birds"},
    ]
    const closeNav = () => setIsOpen((prev) => !prev)
    return (
        <div className=" h-20 flex justify-center relative mb-8">
            <div className=" flex-between w-full ">
                <BirdLogo />
                <nav
                    className={` navbar ${
                        isOpen && "max-md:translate-y-[200px]"
                    } `}
                >
                    <ul className=" flex max-md:flex-col justify-between max-md:items-center gap-4 max-md:py-2">
                        {links.map((link) => (
                            <li
                                key={link.title}
                                onClick={closeNav}
                                className={`${
                                    link.href === pathname
                                        ? "text-white"
                                        : " text-white/30"
                                }`}
                            >
                                {" "}
                                <Link href={link.href} className=" text-xl">
                                    {link.title}
                                </Link>{" "}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Hamburger isOpen={isOpen} closeNav={closeNav} />
                <Link href={"/birds"} className="max-md:hidden btn">
                    Let&apos;s Fly
                </Link>
            </div>
        </div>
    )
}
