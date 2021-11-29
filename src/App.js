import './components/sass/App.sass'
import Header from './components/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer';
import Banner from './components/Banner'
import './icofont/icofont/icofont.min.css'

function App() {
  return (
    <div className="App">
      <Header/> 
      <Banner/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
