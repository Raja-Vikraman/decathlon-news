import './App.css';
import AppHeader from './components/AppHeader.js'
import AppContent from './components/AppContent.js'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <AppHeader/>
          <Switch>
            <Route path="/bitcoin" render={(props) => <AppContent showpage="bitcoin"/>} />
            <Route path="/headlines-us" render={(props) => <AppContent showpage="headlines-us"/>} />
            <Route path="/apple" render={(props) => <AppContent showpage="apple"/>} />
            <Route path="/tech-crunch" render={(props) => <AppContent showpage="tech-crunch"/>} />
            <Route path="/" render={(props) => <AppContent showpage="apple"/>} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
