import BirdDetail from "@/components/BirdDetail"
import Image from "next/image"
import birds from "@/data/Birds.json"
import {notFound} from "next/navigation"
export default function BirdData({
    params: {birdId},
}: {
    params: {birdId: string}
}) {
    const bird = birds.Tbl_Bird.find((bd) => bd.Id === Number(birdId))
    if (!bird) notFound()
    return (
        <main className=" animate-scaling">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className=" box bg-container p-5 h-fit ">
                    <div className="max-w-full h-[250px] relative rounded-2xl overflow-hidden">
                        <Image
                            src={`/${bird.ImagePath}`}
                            alt={bird.BirdEnglishName}
                            fill
                            style={{objectFit: "cover"}}
                        />
                    </div>
                </div>
                <div className=" lg:col-span-2">
                    <BirdDetail bird={bird} />
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return birds.Tbl_Bird.map((bird) => ({
        birdId: bird.Id.toString(),
    }))
}
