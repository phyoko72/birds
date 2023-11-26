import Image from "next/image"
import people from "@/../public/people.svg"
import facebook from "@/../public/facebook.svg"
import feather from "@/../public/feather.png"
import PointerIcon from "./PointerIcon"
import Link from "next/link"
export default function Info() {
    return (
        <div className=" flex-1 flex flex-col gap-5 overflow-hidden">
            <div className="bg-container box">
                <div className=" max-w-full overflow-hidden">
                    <div className="whitespace-nowrap w-fit text-text animate-marquee ">
                        <span>
                            ငှက်သည် အမွှေးအတောင်ရှိသော ကျောရိုးရှိသတ္တဝါဖြစ်၏။
                            သို့သော် အခြားကျောရိုးရှိသတ္တဝါများဖြစ်သော
                            တွားသွားသတ္တဝါ၊ နို့တိုက်သတ္တဝါတို့နှင့်ကား မတူချေ။
                            ထိုတွားသွားသတ္တဝါနှင့် နို့တိုက်သတ္တဝါတို့တွင်
                            အရေပြား၌ အကြေးခွံနှင့် အမွှေးအမှင်တို့ ရှိကြသည်။
                            ငှက်မှာမူ လေထဲတွင် ပျံသန်းရသော တိရစ္ဆာန်
                            ဖြစ်ခြင်းကြောင့် အရေပြားမှ အမွှေးအတောင်များ
                            ဆန်းကြယ်စွာ ပေါက်လျက်ရှိသည်။ ကမ္ဘာပေါ်တွင်
                            ငှက်မျိုးပေါင်းမှာ ၁၃ဝဝဝ နှင့် ၁၄ဝဝဝ အကြားတွင်
                            ရှိသည်။ ငှက်တို့ကို (မျိုးစိတ်၊ မျိုးစု၊ မျိုးရင်း၊
                            မျိုးစဉ်၊ မျိုးပေါင်း)ဟူ၍ အဆင့်ဆင့် ခွဲခြား ထားသည်။
                            ဤသို့ ခွဲခြား၍ကြည့်လိုက်သော်၊ ငှက်မျိုးပေါင်းသည်
                            ကျောရိုးရှိ မျိုးပေါင်းစုတွင် အပါအဝင် ဖြစ်သည်ကို
                            တွေ့ရလေသည်။ ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)
                            ၈၆၀၀-ကျော်အား မျိုးစု ၁၆၀၀-ခု၊ မျိုးရင်း ၁၅၅-ခု၊
                            မျိုးစဉ် ၂၇-ခု၊ မျိုးပေါင်း ၁-ခု အဖြစ်
                            သတ်မှတ်ထားသည်။
                        </span>
                    </div>
                </div>
            </div>

            <div className=" flex max-md:flex-col gap-3 ">
                <Link
                    href={
                        "https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA"
                    }
                    target="_blank"
                >
                    <div className=" flex-1 bg-container box group">
                        <div>
                            <Image
                                src={feather}
                                alt="feather"
                                width={150}
                                height={100}
                                className=" m-auto"
                            />
                            <div className=" flex justify-between items-center">
                                <h2>Wikipedia</h2>
                                <PointerIcon />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className=" flex-1 flex flex-col gap-3 justify-evenly bg-container box">
                    <div className=" flex-center gap-4 bg-fade box">
                        <Link
                            href={
                                "https://www.facebook.com/profile.php?id=100064810986327"
                            }
                            target="_blank"
                        >
                            <div className=" w-24 h-24 rounded-full bg-white/70 hover:bg-white flex justify-center items-center">
                                <Image src={people} alt="people" width={40} />
                            </div>
                        </Link>
                        <Link
                            href={"https://www.facebook.com/bin.birdsinnature"}
                            target="_blank"
                        >
                            <div className=" w-24 h-24 rounded-full bg-white/70 hover:bg-white flex justify-center items-center">
                                <Image
                                    src={facebook}
                                    alt="facebook"
                                    width={40}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className=" flex-between group">
                        <h1>Birds in Nature</h1>
                        <PointerIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
