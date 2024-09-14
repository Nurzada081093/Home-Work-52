import './App.css';
import Card from './Components/Card/Card.tsx';

const App = () => {

    return (
        <div className="playingCards faceImages">
            <Card rank='5' suit="hearts"/>
            <Card rank='K' suit="clubs"/>
            <Card rank='10' suit="spades"/>
            <Card rank='Q' suit="spades"/>
        </div>
    );
};

export default App;
