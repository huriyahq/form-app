import './App.css';
import Form from "./components/Form";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <h1>Cohort 9 work</h1>
      <Form />
      <Accordion title="How do I contact you?" />
      <Accordion title="What is the best way to use your product?"/>
      <Accordion title="Is there a phone number?"/>
    </div>
  );
}

export default App;
