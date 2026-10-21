import Link from "next/link"

export default function Header(){
    return(
        <>
         <div className="border-2 flex justify-middle align-middle gap-50 m-2 p-2 rounded-2xl" >
            <h3>Student-Directory</h3>

            <nav className="flex justify-center gap-11" >
                <Link href="/" >Students</Link>
                <Link href="/departments" >departments</Link>
                <Link href="/about" >About</Link>
            </nav>
         </div>
        </>
    )
}