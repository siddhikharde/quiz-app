import React from 'react'
import "./App.css"
import { useState } from 'react'
import quetionData from "./Data"
import { ArrowBigLeft, ArrowBigRight  } from 'lucide-react';



function App() {
    const [QuetionIndex, setQuetionIndex] = useState(0)
  return (
    <div className=' flex flex-col items-center justify-center py-[25px] gap-[10px] bg-amber-100   '>
        <h1 className='text-4xl font-bold  text-blue-600  '>
            Simple Quiz App
        </h1>
        <p className='text-[20px] font-bold text-gray-700 '>
            Question : {QuetionIndex+1}
        </p>
        <div className=' flex flex-row justify-around bg-amber-50 w-[100px]'>
           <p><ArrowBigLeft onClick={()=>{
             if(QuetionIndex>0){
                setQuetionIndex(QuetionIndex-1);
           } }}/> </p> 
           <p><ArrowBigRight onClick={()=>{
             if(quetionData.length>QuetionIndex){
                setQuetionIndex(QuetionIndex+1);
             }
                else{   setQuetionIndex(0);

                }
           }
           }/></p>
        </div>
        

      
    </div>
  )
}

export default App
