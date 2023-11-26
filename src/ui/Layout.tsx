import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import React from "react"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className=" max-w-screen-xl m-auto p-5">
            <Nav />
            <div className=" my-32">{children}</div>
            <Footer />
        </div>
    )
}
