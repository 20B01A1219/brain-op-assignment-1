import { useState } from 'react';
import './App.css';
import Barchart from './Barchart';
import Noid from './Noid';

function App() {
  const [id, setId] = useState('');
  const [submitid, setSubmitId] = useState('');
  const changeid = (e) => {
        setSubmitId('');
         setId(e.target.value);
      };
      const submit=(e)=>{
        if(id >= 1 && id <= 382){
          setSubmitId(true)
        }
        else{
          setSubmitId(false)
        }
       
      }
  return (
    <div className="App">
      <input type="number" name="" placeholder='Enter your ID' value={id} onChange = {changeid}/>
      <button onClick = {submit}>Submit</button>
      {submitid === false && <Noid/> }
      {id !== '' && submitid && <Barchart pid = {id}/>}
    </div>
  );
}

export default App;
