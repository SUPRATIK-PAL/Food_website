
import './App.scss';
import Header from "./components/Header/Header"
import MealDetails from "./pages/MealDetailsPage/MealDetailsPage"
import Error from "./pages/ErrorPage/ErrorPage"
import Category from "./pages/CategoryPage/CategoryPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./pages/HomePage/HomePage"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal/:id' element={<MealDetails/>}/>
      <Route path='/meal/category/:name' element={<Category/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
