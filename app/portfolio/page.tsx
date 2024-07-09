


export default function Home()
{  var count=0

 const decrement =() => {
   count=(count-1)
}
const increment =() =>
{
   count = (count+1)
}

    return (<> <p className=" text-lg"> hello world! portfolio </p> 
    <button onClick={(e) => {increment();}}> + </button>
    <button onClick={(e) => {decrement();}}> - </button>
    
    </> );
  }
  