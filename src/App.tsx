import './App.css';
import Card from './Components/Card/Card.tsx';

const App = () => {
    return (
        <div className="playingCards faceImages">
            <Card rank="9" suit="spades"/>
            <Card rank="K" suit="hearts"/>
            <Card rank="Q" suit="clubs"/>
            <Card rank="A" suit="diams"/>
        </div>
    );
};

export default App;
