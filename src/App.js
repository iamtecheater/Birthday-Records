import React, { Component } from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";
import createStore from "./store/store";
import { Provider } from "react-redux";
import './index.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <center>
            <h1 className="birthday-records">Birthday Records</h1>
          </center>
          <Filter />
          <RecordTable />
        </div>
      </Provider>
    );
  }
}

export default App;
