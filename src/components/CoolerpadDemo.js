import { useState, useEffect } from 'react';
import j from '../coolerpads.json';

export default function CoolerpadDemo (){
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);  
  const [sizes, setSizes] = useState([]);
  const [currentMake, setCurrentMake] = useState('');
  const [currentModel, setCurrentModel] = useState('');

  useEffect(()=>{
    const coolerpad = j.cooler_pads;
    const makeSet = new Set();
    for (const pad of coolerpad){
      makeSet.add (pad.make)
    }
    setMakes (Array.from(makeSet));
    console.log(makeSet);
  },[]);

  const handleMakeSelect = (text)=>{
    const coolerpad = j.cooler_pads;
    const models = [];
    for (const pad of coolerpad){
      if (pad.make === text){
        models.push (pad.model);
      }
    }
    console.log (models);
    setCurrentMake (text);
    setModels (models);
    setSizes ([]);
    setCurrentModel ('');
  }
  const handleModelSelect = (text)=>{
    const coolerpad = j.cooler_pads;
    const sizes = [];
    for (const pad of coolerpad){
      if (pad.model === text){
        if (typeof (pad.size) === "object")
          sizes.push (...pad.size);
        else 
          sizes.push (pad.size);
      }
    }
    console.log(sizes)
    setCurrentModel (text);
    setSizes (sizes)
  }
  
  return (
    <div className='coolerpad-container'>
      {makes.length>0 && <MakeList cur={currentMake} makes={makes} onSelect={handleMakeSelect}/>}
      {currentMake && models.length>0 && <ModelList cur={currentModel} models={models} onSelect={handleModelSelect}/>}
      {currentModel && sizes.length>0 && <SizeList sizes={sizes}/>} 
    </div>
  )
}

const MakeList = ({cur, makes, onSelect})=>{
  console.log(makes);
  return ( 
    <div  className='collerpad-list'>
      <ul>
        {makes.map((text)=>(<DisplayItem selected={cur===text} id={text} text={text} onSelect={onSelect}/>))}
      </ul>
    </div>
  )
}

const ModelList = ({cur, models, onSelect})=>{
  return ( 
    <div  className='collerpad-list'>
      <ul>
        {models.map((text)=>(<DisplayItem selected={cur===text} id={text} text={text} onSelect={onSelect}/>))}
      </ul>
    </div>
  )
}

const SizeList = ({sizes})=>{
  return ( 
    <div  className='collerpad-list'>
      <ul>
        {sizes.map((text)=>(<DisplayItem id={text} text={text}/>))}
      </ul>
    </div>
  )
}

const DisplayItem = ({text, onSelect, selected}) =>{
  const className = selected ? 'display-item-selected' : 'display-item'
  return (
    <li>
      <div onClick={()=>onSelect(text)} className={className}>
        {text}
      </div>
    </li>
  )
}

