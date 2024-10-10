import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
           <Route exact path="/" element={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Pages;
