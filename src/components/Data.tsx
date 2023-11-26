export default function Data({total, title}: {total: string; title: string}) {
    return (
        <div className=" box flex flex-col items-center justify-around bg-fade h-40 ">
            <h1 className=" text-3xl font-semibold">{total}</h1>
            <span className=" text-text text-center">{title}</span>
        </div>
    )
}
