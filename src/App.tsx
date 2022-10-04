import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import CoursesPage from './pages/CoursesPage';

const App = () => {
  return (
    <main>
      <Navbar />
      <MainPage />
      <CoursesPage />
      <ProjectsPage />
      <Footer />
    </main>
  );
};

export default App;
