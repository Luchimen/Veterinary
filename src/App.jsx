import { useState } from "react";
import { FormPacients } from "./components/FormPacients";
import { Header } from "./components/Header";
import { ListPacients } from "./components/ListPacients";

function App() {
  const [pacients, setPacients] = useState([]);
  const [pacientSelected, setpacientSelected] = useState({});
  return (
    <div>
      <Header />
      <div className="container">
        <FormPacients
          setPacients={setPacients}
          pacients={pacients}
          pacientSelected={pacientSelected}
          setpacientSelected={setpacientSelected}
        />
        <ListPacients 
         pacients={pacients}
         setPacients={setPacients} 
         pacientSelected={pacientSelected} 
         setpacientSelected={setpacientSelected} 
        />
      </div>
    </div>
  );
}

export default App;
