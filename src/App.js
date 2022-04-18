import React from 'react';
import { Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.shop';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component';

import './App.css';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
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
