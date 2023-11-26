import Data from "./Data"

export default function DataGroup() {
    return (
        <div className=" box bg-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 col-span-2 ">
            <Data total="၈၆၀၀" title="ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)" />
            <Data total="၁၆၀၀" title="မျိုးစုပေါင်း" />
            <Data total="၁၅၅" title="မျိုးရင်းပေါင်း" />
            <Data total="၂၇" title="မျိုးစဉ်ပေါင်း" />
        </div>
    )
}
