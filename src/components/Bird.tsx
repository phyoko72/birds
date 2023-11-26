import Image from "next/image"
import bird from "@/../public/logo.jpg"
import PointerIcon from "./PointerIcon"
export default function Bird() {
    return (
        <div className="flex-1 p-6 rounded-3xl bg-container group">
            <div className=" flex max-md:flex-col items-center gap-6">
                <Image
                    src={bird}
                    alt="bird"
                    width={250}
                    height={200}
                    priority
                    className="rounded-2xl max-w-full"
                />
                <div className=" flex flex-col h-full gap-y-5">
                    <div className="[&>*]:mb-3">
                        <h1 className=" text-2xl text-text">Bird</h1>
                        <h1 className=" text-4xl">ငှက်</h1>
                        <p className=" text-lg text-text ">
                            ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော
                            သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
                        </p>
                    </div>
                    <div className=" self-end">
                        <PointerIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
