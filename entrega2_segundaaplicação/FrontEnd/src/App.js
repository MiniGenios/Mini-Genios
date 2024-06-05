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
import DisciplinaMatematica from './Pages/DisciplinaMatematica/index.jsx'
import TextMatematica1 from './Pages/TextMatematica1/index.jsx';
import TextMatematica2 from './Pages/TextMatematica2/index.jsx';
import TextMatematica3 from './Pages/TextMatematica3/index.jsx';
import DisciplinaGeografia from './Pages/DisciplinaGeografia/index.jsx';
import TextDisciplina2 from './Pages/TextDisciplina2/index.jsx';
import TextDisciplina3 from './Pages/TextDisciplina3/index.jsx';
import Sobre from './Pages/Sobre/index.jsx';
import TextGeografia1 from './Pages/TextGeografia1/index.jsx';
import TextGeografia2 from './Pages/TextGeografia2/index.jsx';
import TextGeografia3 from './Pages/TextGeografia3/index.jsx';
import DisciplinaCiencias from './Pages/DisciplinaCiencias/index.jsx';
import TextCiencias1 from './Pages/TextCiencias1/index.jsx';
import TextCiencias2 from './Pages/TextCiencias2/index.jsx';
import TextCiencias3 from './Pages/TextCiencias3/index.jsx';

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
        <Route path="/disciplinaMatematica" element={<DisciplinaMatematica />} />
        <Route path="/TextMatematica1" element={<TextMatematica1 />} />
        <Route path="/DisciplinaGeografia" element={<DisciplinaGeografia />} />
        <Route path="/TextMatematica2" element={<TextMatematica2 />} />
        <Route path="/TextMatematica3" element={<TextMatematica3 />} />
        <Route path="/TextDisciplina2" element={<TextDisciplina2 />} />
        <Route path="/TextDisciplina3" element={<TextDisciplina3 />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/TextGeografia1" element={<TextGeografia1 />} />
        <Route path="/TextGeografia2" element={<TextGeografia2 />} />
        <Route path="/TextGeografia3" element={<TextGeografia3 />} />
        <Route path="/DisciplinaCiencias" element={<DisciplinaCiencias />} />
        <Route path="/TextCiencias1" element={<TextCiencias1 />} />
        <Route path="/TextCiencias2" element={<TextCiencias2 />} />
        <Route path="/TextCiencias3" element={<TextCiencias3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
