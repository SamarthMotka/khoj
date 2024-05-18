import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div>
   <Body/>
   <Home/>
   </div>
  );
}

export default App;
