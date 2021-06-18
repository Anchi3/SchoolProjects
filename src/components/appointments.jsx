import React, { Component } from "react";

import axios from "axios";

import Doctor from "./doctor";
import Patient from "./patient";

class Appointments extends Component {
  state = {
    state = {
        patient:{},
        currentDoctorId: 0,
        currentSymptom: ""
    }
  }
}


AddNewPatient = () => {
    let patient = Object.assign({}, this.state.patient);

    axios.post("https://localhost:5001/IntakeForms", patient).then((response) => {
      this.props.onCurrentPatient(patient);
      console.log("POST : ", response);
    });
  };

