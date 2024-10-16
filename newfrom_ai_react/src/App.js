import Demo from "./container/Demo.js";
import Error from "./container/error/404error.js";
import AiDataLeran from "./container/AiDataLeran.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./container/Test.js"
import AICCWrap from "./container/chat/AICCWrap.js";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Demo/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/popup" element={<AICCWrap/>}></Route>
        <Route path="/learn" element={<AiDataLeran/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App;
