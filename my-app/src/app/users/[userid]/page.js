"use client"
import { useParams,usePathname } from "next/navigation";

export default function usersProfile(){

   const params = useParams();
   const path = usePathname();  
   console.log(params);
   console.log(path);

    return(
        <h1>users profile </h1>
    )
}