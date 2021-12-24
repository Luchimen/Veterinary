import { FormPacients } from "./components/FormPacients";
import { Header } from "./components/Header";
import { ListPacients } from "./components/ListPacients";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <FormPacients />
        <ListPacients />
      </div>
    </div>
  );
}

export default App;
