import { Route, Routes } from 'react-router-dom';
import TodoContainer from '../src/functionBased/components/TodoContainer';
import About from '../src/functionBased/components/pages/About';
import NoMatch from '../src/functionBased/components/pages/NotMatch';
import Navbar from '../src/functionBased/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
