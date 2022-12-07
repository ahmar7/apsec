import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Decor from "./components/decor";
import Founded from "./components/founded";
import AuditForm from "./components/auditForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Decor />
      <Founded />
      <AuditForm />
    </div>
  );
}

export default App;
