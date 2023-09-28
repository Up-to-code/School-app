import Grid_of_cards from "@/app/components/Cads/Grid_of_cards";
import Liest_h from "@/app/components/accontes_liest/Liest_h";
import { MenuProvider } from "@/app/context/chick";
function page() {
  return (
    <div>
      <MenuProvider>
        <Liest_h />
        <Grid_of_cards />
      </MenuProvider>
    </div>
  );
}

export default page;
