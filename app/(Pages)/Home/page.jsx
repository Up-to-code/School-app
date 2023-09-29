import Grid_of_cards from "@/app/components/Cads/Grid_of_cards";
import Liest_h from "@/app/components/accontes_liest/Liest_h";
import { MenuProvider } from "@/context/chick";
import { Route_t } from "@/app/components/ruotes_t/Ruotes_t";

function page() {
 
  return (
    <div>
  
      <MenuProvider>
        <Route_t/>
        <Liest_h />
        <Grid_of_cards />
      </MenuProvider>
    </div>
  );
}

export default page;
