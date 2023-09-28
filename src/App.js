import { useEffect, useState } from 'react';
import './App.css';
import { Button,  Container,Input} from 'reactstrap';

function App() {
 let [number,setnumber]=useState('');
 let [randomnum,setrandomnum]=useState(Math.floor((Math.random()*100)+1));
 let [attempt,setattempt]=useState(1);

 const resetGame=()=>{
  setnumber('');
  setrandomnum(Math.floor((Math.random()*100)+1));
  setattempt(1);

  document.querySelector("#showresult").innerHTML=''
 }
 
 const checkNumber=()=>{
  
  
  if(number===''){
    document.querySelector("#showresult").innerHTML="<h4>Please Enter Number<h4/>"
   }

   else if(number<0 || number>100){
      console.log("wrong"+number)
      setnumber('');
      document.querySelector("#showresult").innerHTML="<h4>please select number between 1 to 100<h4/>"
    }
    
   else if(randomnum==number){

    
    console.log("you guess right")
    setrandomnum(Math.floor((Math.random()*100)+1));
    document.querySelector("#showresult").innerHTML="<h4>Congratulation:you guess right<h4/>:<br/><span>Attempt:<span/>"+attempt
  
  }

  else if(randomnum<number){
    
    setattempt(attempt+1)

     console.log("result is less than:"+number)
     setnumber('');
     document.querySelector("#showresult").innerHTML="<h4>Number is Less than: "+number;
  }
  
  else if(randomnum>number){

    setattempt(attempt+1)

    console.log("result is greater than:"+number)
    setnumber('');
    document.querySelector("#showresult").innerHTML="<h4>Number is Greater than: "+number;
  }
    

  }

  const userinput=(e)=>{
    
    setnumber(document.querySelector(".userinp").value);
    
   }
  

  return (
    <>
    <Container >

      
    
     <h1 className="text-center my-4" id='text-top'>NUMBER GUESSER GAME:1 to 100 </h1>

    <div className='inside'>
      
     <div className="inputb" >

      <div id='indiin'>
         <Input type="number" className="userinp" id='userinput' value={number} onChange={userinput} placeholder='guess-num'></Input>
      </div>
         
         <div className="submitbox">
           <Button className="submitbtn"  onClick={checkNumber}>done</Button>
           <Button className="submitbtn"  onClick={resetGame}>restart</Button>
           
       </div>

        {/* for showing result */}
        <div id='showresult' style={{marginTop:"10%",textAlign:"center",color:"black"}}>
      
        </div> 

     </div>
     
     
    </div>
    
    
    </Container>

    
    </>
  );
}

export default App;
