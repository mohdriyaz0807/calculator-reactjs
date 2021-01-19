import './App.css';
import {useState} from 'react'
import Button from './components/button'
import Display from './components/display'

function App() {
  const [result,setResult] = useState('')

  const Output=(val)=>{
    switch(val){
      case 'AC':
          setResult('')
          break;
      case 'C':
        if(typeof(result)==='number'){
          setResult('')
        }else{
          let clear=result.split('').slice(0,result.length-1).join('')
          setResult(clear)
        }
        break;
      case '√X':
          setResult(Math.sqrt(result))
          break;
      case '=':
          let ans=eval(result)
          setResult(ans)
          break;
      default:
        if(typeof(result)==='number'){
          setResult('')
          setResult(val)
        }else{
          setResult(result + val)
      }
    }
  }

  return (
    <div className='container'>
      <Display value={result}  />
      <div className='grid-container'>
      <Button label={'AC'} show={Output}/>
      <Button label={'C'} show={Output}/>
      <Button label={'√X'} show={Output}/>
      <Button label={'/'} show={Output}/>
      <Button label={'7'} show={Output}/>
      <Button label={'8'} show={Output}/>
      <Button label={'9'} show={Output}/>
      <Button label={'*'} show={Output}/>
      <Button label={'4'} show={Output}/>
      <Button label={'5'} show={Output}/>
      <Button label={'6'} show={Output}/>
      <Button label={'-'} show={Output}/>
      <Button label={'1'} show={Output}/>
      <Button label={'2'} show={Output}/>
      <Button label={'3'} show={Output}/>
      <Button label={'+'} show={Output}/>
      <Button label={'%'} show={Output}/>
      <Button label={'0'} show={Output}/>
      <Button label={'.'} show={Output}/>
      <Button label={'='} show={Output}/>
      </div>
    </div>
  )
}

export default App;
