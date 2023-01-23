import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateForm from "../components/CreateForm/CreateForm";
import EditForm from "../components/EditForm/EditForm";
import Main from "../Pages/Main";

const RoutesComp = ({ data }) => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/create" element={<CreateForm />}></Route>
          <Route path="/edit/:id" element={<EditForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
