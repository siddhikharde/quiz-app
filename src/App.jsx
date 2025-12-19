import React from 'react'
import "./App.css"
import { useState } from 'react'
import questionData from "./Data"
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { toast } from 'react-hot-toast';



function App() {
    
    const [QuestionIndex, setQuestionIndex] = useState(0);
    const currentQuestion = questionData[QuestionIndex];
     const checkAnswer = (selectedOption, correctAnswer) => {
        if (selectedOption === correctAnswer) {
            toast.success("Correct Answer!");
        } else {
            toast.error("Wrong Answer!");
        }
     }
   
    return (
        
        <div className=' flex flex-col items-center justify-center py-[25px] gap-[10px] bg-amber-100   '>
            <h1 className='text-4xl font-bold  text-blue-600  '>
                Simple Quiz App </h1>
            <p className='text-[20px] font-bold text-gray-700 '> Question : {QuestionIndex + 1} </p>


            <div className=' w-[700px] h-auto bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-[20px] '>
                <h2 className=' text-2xl font-semibold text-gray-800 '> {currentQuestion.question} </h2> 
                <div className=' flex flex-col gap-[10px] mt-[20px] w-full '>
                    {currentQuestion.option.map((option, index) => (
                        <p key={index}
                         className='text-center w-[100%] rounded-md py-[10px] text-[18px] cursor-pointer hover:bg-amber-50 hover:text-blue-600'
                        onClick={()=>{
                            checkAnswer(option, currentQuestion.answer);
                        }} 
                        >
                            {option}
                        </p>
                    ))}
                    </div>
            </div>
            <div className=' flex flex-row justify-around w-[600px]'>
                <p><ArrowBigLeft onClick={() => {
                    if (QuestionIndex > 0) {
                        setQuestionIndex(QuestionIndex - 1);
                    }
                }} className='cursor-pointer h-[50px]' /> </p>
                <p><ArrowBigRight className='cursor-pointer h-[50px]'   onClick={() => {
                    if (questionData.length-1 > QuestionIndex) {
                        setQuestionIndex(QuestionIndex + 1);
                    }
                    else{
                        setQuestionIndex(0);
                    }
                  
                }
                } /></p>
            </div>




        </div>
    )
}

export default App
