import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Layout() {
  // const navigation = useNavigation();

  
  return (
    <>
      <MainNavigation />
      <main className="content">
        {/* {navigation.state === 'loading' && <p>Loading...</p> } */}
        <Outlet />
      </main>
    </>
  );
}
