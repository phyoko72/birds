import Bird from "@/components/Bird"
import DataGroup from "@/components/DataGroup"
import Explore from "@/components/Explore"
import Info from "@/components/Info"

export default function Home() {
    return (
        <main className=" my-9">
            <div className=" flex max-lg:flex-col lg:items-center gap-5 mb-7 animate-scaling">
                <Bird />
                <Info />
            </div>
            <div className=" grid max-md:grid-cols-1 grid-cols-3 gap-5 animate-scaling mb-7">
                <DataGroup />
                <Explore />
            </div>
        </main>
    )
}
