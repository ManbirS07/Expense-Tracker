import Addtransaction from "./components/Addtransaction";
import Balance from "./components/balance";
import Header from "./components/header";
import Incomebox from "./components/Incomebox";
import Transactionlist from "./components/Transactionlist";
import { Globalprovider } from "./globalcontext/context";
import './usecss.css' 

function App() {
  return (
  
  <Globalprovider>
         <Header></Header>
    <div className="container">
        <Balance></Balance>
        <Incomebox></Incomebox>
        <Transactionlist></Transactionlist>
        <Addtransaction></Addtransaction>
    </div>
  </Globalprovider>
  );
}

export default App;
