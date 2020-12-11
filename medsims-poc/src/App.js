import React from 'react'
import Practice from './Components/Practice';
import Todolist from './Components/Todolist';
import Datafetching from './Components/Datafetching';
import Dataposting from './Components/Dataposting';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 


function App() { 
  return (
   <Router>
    <div className="App">
          <Route path="/" exact component={Practice}/>
          <Route path="/to-do"  component={Todolist}/>
          <Route path="/data-fetch" component={Datafetching}/>
          <Route path="/post-data" component={Dataposting}/>
    </div>
  </Router>
  );
}

export default App;
