"use client"
import exp from "constants";
import { useState } from "react";

export default function Home() {

    const [result, setResult] = useState("")
    const [expressions, setExpressions] = useState("")

    const handleButtonclick = (value:any) => {
      if (value === "="){
          try {
              const evalResult = eval(expressions).toString();
              setResult(evalResult)
              setExpressions(evalResult)
              
              }catch(error){
                setResult("error");
              }
              
      
      } else if (value === "C"){

        setResult("");
        setExpressions("");
      } else {
        setExpressions((prevExpression) => prevExpression + value  );
      }
    }


    const buttons = [
      '7' , '8', '9', '/',
      '4' , '5', '6', '*',
      '1' , '2', '3', '-',
      '0' , '.', '=', '+',
      'C'
    ]


  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <input 
      type="text"
      value={expressions}
      className="w-[300px]"
      readOnly
      />

      
      <input 
      type="text"
      value={result}
      className="mt-2 ml w-[300px] font-4xl h-[40px] border-1"
      readOnly
      />

      <div className="grid grid-cols-4 gap-2 mt-4 w-[300px]">
      {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonclick(btn)}
            className="text-4xl bg-gray-400 hover:bg-gray-500 rounded-lg"
          >
            {btn}
          </button>
          ))}

      </div>
    </main>
  );
}
