import Boxes_of_Fuchers from "./Boxes_of_Fuchers";
import { SiEasyeda } from "react-icons/si";
import { MdAvTimer } from "react-icons/md";
import { BsFire } from "react-icons/bs";
function Cred_of_fucher() {
  return (
    <div className="flex flex-wrap  justify-evenly ">
      <Boxes_of_Fuchers word="Easy">
        <SiEasyeda />
      </Boxes_of_Fuchers>

      <Boxes_of_Fuchers word="Time">
        <MdAvTimer />
      </Boxes_of_Fuchers>

      {/* <Boxes_of_Fuchers word="Fast">
        <div className="text-base   ">
          <BsFire />
        </div>
      </Boxes_of_Fuchers> */}
    </div>
  );
}

export default Cred_of_fucher;
