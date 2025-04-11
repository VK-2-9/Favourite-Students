import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Favourite from "./pages/Favourite";
import ListContextProvider from "./components.js/ListContext";
import Header from "./components.js/Header";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
        <ListContextProvider>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/favourites" element={<Favourite />}></Route>
          </Routes>
        </ListContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
