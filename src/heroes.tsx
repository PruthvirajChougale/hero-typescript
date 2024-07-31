import Fetchdata from './usefetch';
import {Link} from 'react-router-dom';

interface heroes{
    id:number;
    name:string;
    advantage:string;


}
const Heroes = () => {
    const {data:heroes,pending,error}=Fetchdata<heroes[]>('http://localhost:8000/Heroes');
    if(pending){
       return <h1>Loading..</h1>
    }
    if(error){
        return <div>{error}</div>

    }
    return ( 
        <div className="hero-main">
             {heroes && heroes.map(hero=>(
            <div className="display-hero" key={hero.id}>
                <div className="imageinfo-hero">
                <img src={require(`./images/${hero.id}.png`)} />
                </div>
               
                <div className="info">
                <h1>{ hero.name }</h1>
                <h3>{hero.advantage}</h3>
                <Link to={`/Edit/${hero.id}`}   style={{
                        color:'black',
                        textDecoration:'none'
                     }}>edit</Link>


                </div>
                
            </div>
          ))}
        </div>
     );
}
 
export default Heroes;