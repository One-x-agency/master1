import logo from './logo.svg';
import './App.scss';
import Header from './shared/components/header';
import Home from './moduals/home';
import Footer from './shared/components/footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
