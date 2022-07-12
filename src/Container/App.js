import "./App.css";
import Layout from "../HOC/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoute from "../Components/AnimateRoutes/AnimateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AnimateRoute/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
