import BirdInfo from "@/components/BirdInfo"
import birds from "@/data/Birds.json"
export default function Birds() {
    return (
        <main>
            <h1 className=" text-4xl text-center font-semibold my-5 animate-scaling">
                Birds
            </h1>
            <div className=" grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                {birds.Tbl_Bird.map((bird) => (
                    <BirdInfo key={bird.Id} data={bird} />
                ))}
            </div>
        </main>
    )
}
