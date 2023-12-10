import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Components/Card";
import './App.scss'

const App = () => {

  const observerRef = useRef() // initiall undefined





  const [todos, setTodos] = useState([]);
  let lastIndex= 10
  const [settingTodos,setActualTodos] = useState({firstIndex:0,lastIndex:lastIndex})


  let actualTodos = todos.slice(settingTodos.firstIndex, settingTodos.lastIndex);




  // console.log("ac",actualTodos.length)



   
  const handleRef = useCallback((node)=>{
    if(observerRef.current) observerRef.current.disconnect()
    observerRef.current = new IntersectionObserver((entries)=>{
      // console.log("entries",entries)
      if(entries[0].isIntersecting){
        console.log("visible")
         lastIndex+=10
         console.log("Finally done last index",lastIndex)
         setActualTodos({firstIndex:0,lastIndex:lastIndex})
      }
    })
    if(node) observerRef.current.observe(node)

 },[todos])




  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const data = await response.json();
        // console.log(data);
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, []);









  return (
    <main>
      <div className="flexy">
           <Card actualTodos={actualTodos} handleRef={handleRef} />

      </div>
    </main>
  );
};

export default App;
