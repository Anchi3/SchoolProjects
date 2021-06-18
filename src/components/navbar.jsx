import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light" style={{textAlign: 'center', alignItems: 'center'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <b>Doctor's Patient Intake Form</b> {props.totalItemsNumber}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;