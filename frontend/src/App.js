import { Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";

function App() {
  return (
    <>
      {/* <h1>Hello from App</h1> */}

      <Route path="/login">
        <LoginFormPage />
      </Route>
    </>
  );
}

export default App;
