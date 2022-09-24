import Navbar from './components/Navbar';
import MainPage from './pages/Main';
import ProjectsPage from './pages/Projects';

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
