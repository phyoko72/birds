import Image from "next/image"
import icon from "@/../public/icon2.png"
export default function ContentIcon() {
    return (
        <Image
            src={icon}
            alt="icon"
            width={30}
            height={30}
            className=" absolute top-0 "
        />
    )
}
