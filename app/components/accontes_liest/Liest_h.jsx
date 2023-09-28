"use client"
import Acoooent_lg from "./Acoooent_lg"
import { Users_Images } from "@/public/M_images"
import { useContext } from "react";
import { UserContext } from "@/app/context/User_Deta";
function Liest_h() {
    const UserPhto = useContext(UserContext);

  return (
    <div className="my-5  flex gap-4 px-10 flex-wrap justify-between">
        <Acoooent_lg SRC={UserPhto?.photoURL}/>
        <Acoooent_lg SRC={Users_Images.user_1}/>
        <Acoooent_lg SRC={Users_Images.user_2}/>
        <Acoooent_lg SRC={Users_Images.user_3}/>
        <Acoooent_lg SRC={Users_Images.user_4}/>
        <Acoooent_lg SRC={Users_Images.user_5}/>
        <Acoooent_lg SRC={Users_Images.user_6}/>
        <Acoooent_lg SRC={Users_Images.user_7}/>
        <Acoooent_lg SRC={Users_Images.user_3}/>
        <Acoooent_lg SRC={Users_Images.user_6}/>
        <Acoooent_lg SRC={Users_Images.user_7}/>
    </div>
  )
}

export default Liest_h