import './App.css';
import illustrationHero from "./assets/images/illustration-hero.svg";
import musicIllustration from "./assets/images/icon-music.svg";
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card illustrationHero={illustrationHero} musicIllustration={musicIllustration} />
    </div>
  );
}

export default App;
