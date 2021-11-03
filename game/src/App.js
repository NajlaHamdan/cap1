import './App.css';
import StartPage from './components/StartPage';
import EndPage from './components/EndPage';
import InstructionPage from './components/InstructionPage'
import Levels from './components/Levels';
import { Route,Router,Link, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <InstructionPage/>
      
      
        <BrowserRouter>
        <Route path="/Levels">
          <Levels />
        </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
