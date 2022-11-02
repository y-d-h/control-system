import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import CSV from "pages/CSV";
import Tables from "pages/Tables";
import Maps from "pages/Maps";
import Login from "pages/Login";
import Test from "pages/Test";
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/CSV" component={CSV} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          <Redirect from="*" to="/" />
        </Switch>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
