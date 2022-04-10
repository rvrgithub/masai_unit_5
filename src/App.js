// import logo from './logo.svg';
import './App.css';

function App() {
  let mobile =["android","blackberry","ipone","windows phone"]
// let manufecture =["samsung","HTC","Micomax","Apple"]
let manufecture =[{
  name:"samsung" , style:"Square" },
{name:"HTC" ,style:"Square"},
{name:"Micomax" ,style:"circle"},
{name:"Apple"}]
  return (
  <div className='App'>
    <h1>Mobile Operating System </h1>
    {mobile.map(el=>{
      return<li>{el}</li>
  })}
   

<h1>Mobile Manufacture </h1>

    {manufecture.map((el)=>{
   return   <li className={el.style}>
        {el.name}
      </li>
})}

  </div>
  );
}

export default App;
