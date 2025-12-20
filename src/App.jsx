import React, { useEffect } from 'react'
import "./App.css"
import { useState } from 'react'
import questionData from "./Data"
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { toast } from 'react-hot-toast';


const startIndex = 0;
    const randomNumber = Math.floor(Math.random() * questionData.length-startIndex+1)+startIndex;
    const  questionSet=questionData.slice(randomNumber,randomNumber+10);
function App() {
   
    const [QuestionIndex, setQuestionIndex] = useState(0);
    const [answerd , setAnswerd] = useState(false);
    const currentQuestion = questionSet[QuestionIndex];
    const [selectedOptionStyle, setSelectedOptionStyle] = useState({});
    const [score , setScore] = useState(0);
     const checkAnswer = (selectedOption, correctAnswer, index) => {
        if (answerd) return; 
        setAnswerd(true);
        if (selectedOption === correctAnswer) {
           
            setSelectedOptionStyle({
                ...selectedOptionStyle,
                [index]: "bg-green-500 text-white"
                
            })
            setScore(score+1);

        } else {
           
            setSelectedOptionStyle({
                ...selectedOptionStyle,
                [index]: "bg-red-500 text-white"
            })
        }
     }
   
      useEffect(()=>{
        setSelectedOptionStyle({});
        setAnswerd(false);
    },[QuestionIndex]);

    const resetQuiz = ()=>{
        setQuestionIndex(0);
        setScore(0);

    }  
    
    return (
        
        <div className=' flex flex-col items-center justify-center py-[25px] gap-[15px] bg-amber-100 p-[20px]  '>
            <h1 className='text-3xl lg-4xl font-bold  text-blue-600 text-center '>
                Simple Quiz App </h1>
            <p className='text-[20px] font-bold text-gray-700 '> Question : {QuestionIndex + 1} </p>
            <p className='text-[20px] font-bold text-green-500'>Score:{score}</p>


            <div className='px-[25px] py-[20px] md:px-[35px] w-auto md:w-[550px] lg:px-[50px] h-auto bg-white rounded-lg shadow-md flex flex-col items-center justify-center  '>
                <h2 className=' text-1.5xl text-[23px] text-center font-semibold text-gray-800 '> {currentQuestion.question} </h2> 
                <div className=' flex flex-col gap-[10px] mt-[20px] w-full '>
                    {currentQuestion.option.map((option, index) => (
                        <p key={index}
                         className={`text-center w-[100%] rounded-md p-[10px] text-[15px] lg:text-[18px] cursor-pointer border border-gray-300 hover:bg-gary-500 
                         ${selectedOptionStyle[index] || ""}`}
                         
                        onClick={()=>{
                            checkAnswer(option, currentQuestion.answer, index);
                        }} 
                        >
                            {option}
                        </p>
                    ))}
                    </div>
            </div>
            <div className=' flex flex-row justify-around w-[400px] lg:w-[500px]  '>
               
                <p><ArrowBigRight className='cursor-pointer h-[50px]'   onClick={() => {
                    if (questionSet.length-1 > QuestionIndex) {
                        setQuestionIndex(QuestionIndex + 1);
                       ;
                    }
                    else{
                        toast.success("Quiz Completed! Restarting the Quiz.");
                        resetQuiz();
                        
                    }
                  
                }
                } /></p>
            </div>




        </div>
    )
}

export default App
