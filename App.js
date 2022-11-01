import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";

function App() {
  let Todos =[
    {
        sno: 1,
        title: "go to the market",
        desc: "yo need to go to the market to get this job done"
    },
    {
        sno: 2,
        title: "go to the mall",
        desc: "yo need to go to the market to get this job done"
    },
    {
        sno: 3,
        title: "go to the camp",
        desc: "yo need to go to the market to get this job done"
    },
]
  return (
    <>
       <Header title="My Todos List"/> 
       <Todos Todos = {Todos}/>
       <footer/>

    </>
  );
}

export default App;
