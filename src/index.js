import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Layout from './Components/layout';
//import * as serviceworker from './serviceworker';

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceworker.unregister();

/*function DisplayEmployeeInfo(employee){
  return <div>
    <h1>Employee Details</h1>
  <p>
    <label>Employee ID : <b>employee.Id</b></label>
  </p>
  <p>
    <label>Employee Name : <b>employee.Name</b></label>
  </p>
  
  </div>;
}
*/

//const element = <DisplayEmployeeInfo Id= "101" Name= "Michael"></DisplayEmployeeInfo>

