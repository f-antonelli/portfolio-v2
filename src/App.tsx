import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <main>
      <MainPage />
      <ProjectsPage />
      <Navbar />
    </main>
  );
};

export default App;
