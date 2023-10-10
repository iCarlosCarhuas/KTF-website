import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

let gifAnimation = document.getElementById("gif-snapping");

if(gifAnimation){

}

function App() {
  return (
    <main className="container">
      <Navbar></Navbar>
      <Header></Header>
      <div className="smooth-container">
      <Content></Content>
      <Footer></Footer>
      </div>
    </main>
  )
}

export default App
