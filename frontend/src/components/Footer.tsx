
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <div className="flex  justify-between m-5 p-3 bg-blue-400" >
            <p>All copyrights are reserved 2026</p>
            <div className="gap-10 flex">
                <Link href="/">Home</Link>
                <Link href="/departments">Department</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
        </>
    )
}