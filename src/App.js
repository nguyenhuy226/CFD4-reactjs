import { BrowserRouter , Route , Routes} from 'react-router-dom';
import './App.scss'
import Home from './pages/home';
import Profile from './pages/profile';
import Project from './pages/project';
import Register from './pages/register';
import Team from './pages/team';
import Pays from './pages/pays';
import Courses from './pages/courses';
import Cooperate from './pages/cooperate';
import Fag from './pages/fag';
import Email from './pages/email';
import Detail from './pages/detail';
import Fail from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';
import Tag1 from './pages/profile/component/Tag1';
import Tag2 from './pages/profile/component/Tag2';
import Tag3 from './pages/profile/component/Tag3';
import Tag4 from './pages/profile/component/Tag4';
import Tag5 from './pages/profile/component/Tag5';
import Loading from './components/Loading';


function App() {
  return (
  <BrowserRouter>
    <Header />
    <Loading />
    <Routes>
        <Route  path='/thong-tin-ca-nhan/*' element={<Profile />}/>
        <Route  path='/' element={<Home />}/>
        <Route  path='/du-an' element={<Project />}/>
        <Route  path='/dang-ky' element={<Register />}/>
        <Route  path='/thanh-toan' element={ <Pays />}/>
        <Route  path='/khoa-hoc' element={<Courses />}/>
        <Route  path='/hop-tac' element={<Cooperate />}/>
        <Route  path='/fag' element={<Fag /> }/>
        <Route  path='/email' element={<Email /> }/>
        <Route  path='/chi-tiet' element={<Detail />}/>
        <Route  path='/team' element={<Team /> }/>
        <Route  path='*' element={<Fail /> }/>
      </Routes>
    <Footer />
  </BrowserRouter>

  );
}

export default App;
