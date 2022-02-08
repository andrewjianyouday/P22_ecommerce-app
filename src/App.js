import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'


// import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HomePage = (props) => {
  console.log(' HomePage', props)
  return(
  <div>
    <Link to='/topics'>Topics</Link>
    <button onClick={() => props.history.push('/topics')}> Topics </button>
    <h1>Home Page</h1>
  </div>
  );
};

const TopicssList = (props) => {
  console.log(' TopicssList', props)
  return(
  <div>
    <h1>TopicssList Page</h1>
  </div>)
  
};
const TopicDetail = (props) => {
  console.log(' TopicDetail', props)
  return(
  <div>
    <h1>TopicDetailPage: {props.match.params.subpageId}</h1>
  </div>)
  
};

function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />        
        <Route exact path="/topics" component={TopicssList}/>
        <Route path="/topics/:topicId" component={TopicDetail}/>
      </Switch>
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <HomePage />
//       </div>
//     );
//   }
// }

export default App;
