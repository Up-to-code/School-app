import Menu_of_Settings from "@/app/components/Menu_of_Settings/Menu_of_Settings";
import User_Deta from "@/context/User_Deta";

export const metadata = {
  title: "Settings",
  description: "Settings",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-slate-100  z-0 ">
      <div className="cleick relative">
        <Menu_of_Settings />
        <User_Deta>{children}</User_Deta>
      </div>
    </div>
  );
}
