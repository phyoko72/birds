import Image from "next/image"
import Link from "next/link"
import PointerIcon from "./PointerIcon"

export default function BirdInfo({data}: {data: DataType}) {
    return (
        <Link href={`/birds/${data.Id}`} className="self-stretch">
            <div className="box bg-container h-full animate-scaling group flex flex-col justify-between">
                <div className="max-w-full h-[200px] relative rounded-2xl overflow-hidden">
                    <Image
                        src={`/${data.ImagePath}`}
                        alt={data.BirdEnglishName}
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
                <div className=" flex-between mt-2">
                    <div>
                        <h3 className=" text-text text-base">
                            {data.BirdEnglishName}
                        </h3>
                        <h1 className=" text-xl">{data.BirdMyanmarName}</h1>
                    </div>
                    <div className=" self-end">
                        <PointerIcon />
                    </div>
                </div>
            </div>
        </Link>
    )
}
