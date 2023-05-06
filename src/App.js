import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import ResultBlock from './components/ResultBlock';
import InputBlock from './components/InputBlock';

function App() {


  const [inputVal, setInputVal] = useState('')

  
  const onInputClick = (inputValue) =>{

    let finalInputValue

       
    if(inputValue==='C'){
      finalInputValue = ''
      setInputVal(finalInputValue)
    }else{
      if(inputValue==='='){
        finalInputValue = inputVal
  
        if(finalInputValue[0]==='0' || finalInputValue[0]==='+' || finalInputValue[0]==='-' || finalInputValue[0]==='*' || finalInputValue[0]==='/'){
          finalInputValue = finalInputValue.substring(1)
        }
        let stringLastIndex = finalInputValue.length - 1
        if(finalInputValue[stringLastIndex]==='+' || finalInputValue[stringLastIndex]==='-' || finalInputValue[stringLastIndex]==='*' || finalInputValue[stringLastIndex]==='/'){
          finalInputValue = finalInputValue.substring(0, stringLastIndex)
        }
        //string To Math Expression
        finalInputValue = math.evaluate(finalInputValue)
        console.log(finalInputValue[0])
        
      }else{
        finalInputValue = inputVal+''+inputValue
      }
      setInputVal(finalInputValue)
    }
    
    
  }


  return (
    <div className="container">
      <div className='calc-container'>
        <ResultBlock inputVal={inputVal}/>
        <InputBlock onInputClick={onInputClick}/>
        
      </div>
    </div>
  );
}

export default App;
