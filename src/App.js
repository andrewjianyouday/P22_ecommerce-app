import React from 'react';
import { Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.shop';


import HomePage from './pages/homepage/homepage.component';

import './App.css';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
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
