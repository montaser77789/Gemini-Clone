import Main from "./Components/Main/Main";
import Sidepar from "./Components/Sidepar/Sidepar";

const App = () => {
  return (
    <div className="flex space-x-5">
      <Sidepar />
      <Main />
    </div>
  );
};

export default App;
