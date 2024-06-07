"use client"
import { useParams,usePathname } from "next/navigation"
export default function postDetails(){

    const params = useParams();
    const path = usePathname();
    console.log(params);
    console.log(path);
    return(
        <h1>user post details</h1>
    )
}