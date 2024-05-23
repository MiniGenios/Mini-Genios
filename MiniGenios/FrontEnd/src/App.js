import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/index.jsx';
import Questoes from './Pages/Questoes';
import Disciplinas from './Pages/Discipinas';
import QuestionPage from './Pages/QuestionPage/QuestionPage';
import SpecificVideos from './Pages/SpecificVideos/SpecificVideos';
import Videos from './Pages/VideoPage/VideoPage';
import Genio from './Pages/Genio/Genio';
import TextDisciplina from './Pages/TextDisciplina/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questoes" element={<Questoes />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/specificvideos" element={<SpecificVideos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/genio" element={<Genio />} />
        <Route path="/textdisciplina" element={<TextDisciplina />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
