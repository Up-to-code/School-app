import Image from "next/image"
function Acoooent_lg({SRC}) {
  return (
    <div className="rounded-full w-16 h-16 overflow-hidden flex justify-center items-center bg-zinc-50 shadow ">
        <Image src={SRC} alt="name"  height={"64"} width={"64"}  />
    </div>
  )
}

export default Acoooent_lg