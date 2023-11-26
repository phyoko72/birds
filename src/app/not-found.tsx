import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" min-h-[50vh] flex-center">
            <div>
                <h1 className=" text-4xl font-semibold mb-4">Page Not Found</h1>
                <h3 className=" text-xl text-center">
                    Go to{" "}
                    <Link href={"/"} className=" underline underline-offset-4">
                        Home
                    </Link>{" "}
                </h3>
            </div>
        </div>
    )
}
