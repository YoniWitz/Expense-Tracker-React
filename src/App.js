import React from 'react';
import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from './components/ExpenseTracker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseTracker />
      </header>
    </div>
  );
}

export default App;
