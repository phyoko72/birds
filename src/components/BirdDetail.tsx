import Link from "next/link"
import ContentIcon from "./ContentIcon"

export default function BirdDetail({bird}: {bird: DataType}) {
    return (
        <div className=" relative box bg-container">
            <ContentIcon />
            <div className=" mt-16 flex flex-col gap-5 items-start">
                <h1 className=" text-4xl font-semibold">
                    {bird.BirdMyanmarName} ({bird.BirdEnglishName})
                </h1>
                <p className=" text-text">{bird.Description}</p>
                <Link href={"/birds"} className="btn">
                    Back
                </Link>
            </div>
        </div>
    )
}
