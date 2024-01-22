import "./App.css";
import list from "./components/orderedList.jsx";
const App = () => {
  return (
    <>
    <div id='list'>
    <p style ={{color : 'purple' , fontWeight: 'bold'}}>2024 To-do List</p>
      <ol style ={{color : 'pink' , fontWeight: 'bold'}}>
        <li>{"Stronger relationship with God"}</li>
        <li>{"Spoil loved ones:my mother"}</li>
        <li>{"Buy my sisters shoes that I promised them ages ago"}</li>
        <li>{"Become better and consistent at coding"}</li>
        <li>{"Get better hair products"}</li>
        <li>{"LIVE LIFE "}</li>
        
      </ol>
    </div>
    
    </>
  );
};

export default App;
