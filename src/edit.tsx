import {useState,useEffect} from 'react';
import Fetchdata from './usefetch';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {useParams,useNavigate} from 'react-router-dom';


interface IHeroes{
    id:number;
    name:string;
    advantage:string;
}

const Edit:React.FC = () => {
    
    const {id} = useParams<{id:string}>();
   
    const {data:hero,pending,error}=Fetchdata<IHeroes>('http://localhost:8000/Heroes/'+id);
    console.log(hero)
    // const [name,setName]=useState('');
    // const [advantage,setAdvantage]=useState('');
    const [editdata,setEditdata]=useState({name:'',advantage:''});
    const navigate=useNavigate();
    useEffect(()=>{
        // setName(heroes.name);
        // setAdvantage(heroes.advantage);
        if(hero){
            setEditdata({name:hero.name,advantage:hero.advantage})
        }
       
    },[hero])
    if(pending){
       return <h1>Loading..</h1>
    }
    if(error){
        return <div>{error}</div>

    }
    const handlechange=(e:any)=>{
        const {name,value}=e.target;
        setEditdata((edited)=>({...edited,[name]:value}))

    };
   
    const handlesubmit=(e:any)=>{
        e.preventDefault();
        fetch('http://localhost:8000/Heroes/'+id , {
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(editdata)
        })
        .then(()=>{
            navigate('/Heroes');

        })
    }
    return ( 
        <form onSubmit={handlesubmit}>
            <div className="editme">
            <h1>You are editing !!</h1>
                </div>
            <h3>Hero name</h3>
            <input type="text" name="name" value={editdata.name} onChange={handlechange}></input>
            <h3>Advantage</h3>
            <input type="text" name="advantage" value={editdata.advantage} onChange={handlechange}></input>
            <div id="div">
            <button>Submit</button>
            </div>
            
        </form>
     );
}
 
export default Edit;