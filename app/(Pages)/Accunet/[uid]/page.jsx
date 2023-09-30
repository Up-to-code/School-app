import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/db/db";
import Image from "next/image";
import { Users_Images } from "@/public/M_images";
// {params.uid}
const userData = async ({ params }) => {
  const docRef = doc(db, "users", params.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const user = docSnap.data();
    console.log("Document data:", docSnap.data());

    return (
      <>
        <div className=" relative h-64  bg-zinc-300 flex justify-center items-center  ">
          <div className="overflow-hidden  w-full h-full flex items-center">
            <Image
              src={Users_Images.caver}
              alt="caver"
              className="m-auto "
              height={"256"}
            />
          </div>
          <div className="flex justify-center items-end absolute w-full h-full">
            <div className="relative bottom-[-70px] flex flex-col justify-center items-center ">
              <Image
                src={user.PhtoURL}
                alt="me"
                width={"100"}
                height={"100"}
                className="rounded-full "
              />
              <h2 className="py-1 font-bold text-lg  ">
                {user?.Name}
              </h2>
            </div>
          </div>
        </div>
        <div className=" cleick py-3 px-3"></div>
      </>
    );
  } else {
    console.log("No such document!");
  }
};
export default function Page({ params }) {
  const fun = userData({ params });
  if (fun) {
    return userData({ params });
  } else {
    return <div> user : 404 </div>;
  }
}
