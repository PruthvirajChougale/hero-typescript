import Fetchdata from './usefetch';
import {useState,useEffect} from 'react';

 interface IHeroes {
    id:number;
    name:string;
    advantage:string;
    
 }
const Home:React.FC = () => {
    
    const {data:heroes,pending,error}=Fetchdata<IHeroes[]>('http://localhost:8000/Heroes');
    if(pending){
       return <h1>Loding..</h1>
    }
    if(error){
        return <div>{error}</div>

    }
    return ( 
       
        <div id="main"> 
          {heroes && heroes.slice(0,4).map(hero=>(
            <div className="display" key={hero.id}>
                <div className="imageinfo">
                <img src={require(`./images/${hero.id}.png`)} />
                </div>
               
                <div className="info">
                <h1 id="name-hero">{ hero.name }</h1>

                </div>
                
            </div>
          ))}
           
        </div>
     );
}
 
export default Home;