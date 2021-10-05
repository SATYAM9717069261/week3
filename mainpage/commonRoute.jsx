import { useRouter,useEffect, Router } from "next/router";
function Redirect({to}){
    const router=useRouter();
    // useEffect( ()=>{
    //     router.push(to)
    // },[to] )
    console.log("Redirect => ", to)
}

export default Redirect;