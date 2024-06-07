"use client"
import { useParams,usePathname } from "next/navigation"
export default function postData(){
    const params = useParams();
    const path = usePathname();
    console.log(params);
    console.log(path);
    return(
        <h1>post data pages</h1>
    )
}