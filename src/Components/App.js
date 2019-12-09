// import React from 'react';
// import NavBar from './NavBar';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { browserHistory } from 'react-router';

import React from 'react';
import Navbar from './NavBar';
import Routes from '../Routes/Routes';

const App = () => (
  <>
    <Navbar />
    <Routes />
  </>
);

export default App;


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <NavBar />
//       <Route name="home" exact path="/" component={HomePage} />
//     </div>
//     </Router>
//   );
// }

// export default App;
