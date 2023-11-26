import Image from "next/image"
import bird from "@/../public/logo.png"
export default function BirdLogo() {
    return (
        <Image src={bird} alt="bird" width={40} height={40} className=" z-20" />
    )
}
