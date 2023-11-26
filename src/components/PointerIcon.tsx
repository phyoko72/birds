import Image from "next/image"
import icon from "@/../public/icon.svg"
export default function PointerIcon() {
    return (
        <Image
            src={icon}
            alt="icon"
            className=" opacity-40 group-hover:opacity-100 transition-opacity duration-100"
        />
    )
}
