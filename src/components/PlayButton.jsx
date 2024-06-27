import ReactPlayer from 'react-player';
import './PlayButton.css';
import { useParams } from 'react-router-dom';


export default function PlayerButton(){
    let params = useParams();
    let key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://www.youtube.com/watch?v=${key}`} 
      width = '100%' height='100%' />:null}
    </div>
  )
}