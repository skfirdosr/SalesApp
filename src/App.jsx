import Button from "react-bootstrap/Button";
import { Caros } from "./components/Caros";
import { Cards } from "./components/Cards";
import ClassComp from "./components/classcomp/ClassComp";

const App = () => {
  return (
    <div>
      {/* <Caros /> */}
      <Cards />
      <ClassComp />
    </div>
  );
};

export default App;
