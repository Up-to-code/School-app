import Hero from "../components/Hero/Hero";
import "dotenv/config"
import Cred_of_fucher from "../components/Cred_of_fucher/Cred_of_fucher";
import Grid_of_cards from "../components/Cads/Grid_of_cards";
import { Route_t } from "../components/ruotes_t/Ruotes_t";
function Index() {
  return (
    <>
        <Route_t/>
      <Hero />
      <Cred_of_fucher/>
      <Grid_of_cards/>
    </>
  );
}

export default Index;
