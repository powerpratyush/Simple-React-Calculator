const InputBlock = ({onInputClick }) => {

    const onSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <form onSubmit={onSubmit}>
          <div className='inputBlock'>

          <div className='inputRow'> 
              <div className='inputItem'>
                <input type='button' value='7' onClick={()=>onInputClick('7')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='8' onClick={()=>onInputClick('8')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='9' onClick={()=>onInputClick('9')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='/' onClick={()=>onInputClick('/')} />
              </div>
            </div>
            
            <div className='inputRow'>
              <div className='inputItem'>
                <input type='button' value='4' onClick={()=>onInputClick('4')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='5' onClick={()=>onInputClick('5')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='6' onClick={()=>onInputClick('6')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='*' onClick={()=>onInputClick('*')} />
              </div>
            </div>

            <div className='inputRow'>
              <div className='inputItem'>
                <input type='button' value='1' onClick={()=>onInputClick('1')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='2' onClick={()=>onInputClick('2')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='3' onClick={()=>onInputClick('3')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='-' onClick={()=>onInputClick('-')} />
              </div>
            </div>

            <div className='inputRow'>
              <div className='inputItem'>
                <input type='button' value='0' onClick={()=>onInputClick('0')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='.' onClick={()=>onInputClick('.')} />
              </div>
              <div className='inputItem'>
                <input className='clearInput' type='button' value='C' onClick={()=>onInputClick('C')} />
              </div>
              <div className='inputItem'>
                <input type='button' value='+' onClick={()=>onInputClick('+')} />
              </div>
            </div>

            <div className="inputRow">
                <div className='inputItem fullwidth'>
                    <input className='equal' type='button' value='=' onClick={()=>onInputClick('=')} />
                </div>
            </div>

          </div>
        </form>
  )
}

export default InputBlock