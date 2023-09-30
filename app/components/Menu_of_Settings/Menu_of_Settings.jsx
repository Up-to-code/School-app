import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Icone_style_none } from "./Icone_style";
import Icone_style from "./Icone_style";
function Menu_of_Settings() {
  return (
    <div>
      <div className=" t-all   bg-zinc-50 w-16 py-3 fixed bottom -0 h-full cleick flex flex-col gap-2">
        <Icone_style_none>
          <RiMenu2Fill />
        </Icone_style_none>

        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
        <Icone_style href={"Account"}>
          <MdOutlineAccountCircle />
        </Icone_style>
      </div>
    </div>
  );
}

export default Menu_of_Settings;
