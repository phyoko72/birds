import PointerIcon from "./PointerIcon"
import ContentIcon from "./ContentIcon"
import Link from "next/link"
export default function Explore() {
    return (
        <div className=" box bg-container relative group">
            <Link href={"/birds"}>
                <ContentIcon />
                <div className=" mt-12 flex-between">
                    <h1 className=" text-4xl font-semibold">
                        Let&apos;s <br />
                        explore{" "}
                        <span className=" text-blue-700">together.</span>{" "}
                    </h1>
                    <div className=" self-end">
                        <PointerIcon />
                    </div>
                </div>
            </Link>
        </div>
    )
}
