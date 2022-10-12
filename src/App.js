import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import {PageLoading} from './Components'

const Home = React.lazy(() => import("./Pages/Home"))


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={
            <React.Suspense fallback={<PageLoading/>}>
              <Home/>
            </React.Suspense> 
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
