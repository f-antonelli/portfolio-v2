import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <main>
      <Navbar />
      <MainPage />
      <ProjectsPage />
      <Footer />
    </main>
  );
};

export default App;
