import React, {useMemo} from "react";
import MiniDrawer from "../../components/DrawerMenu/drawer";
import { useRouter } from "../../context/ContextRouter";
import "./styles.css";


function Home() {
 
  const { routerComponent, selectedItemOnMenu  } = useRouter()
  
  const memoizoidDrawer = useMemo(()=><MiniDrawer/>, [])
  
  
  return (
    <div className="background">
      
     {memoizoidDrawer}
        

      <div className="right-main-container">

        {routerComponent(selectedItemOnMenu.title)}

      </div>

    </div>
  );
}

export default Home;
