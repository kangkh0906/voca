import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
