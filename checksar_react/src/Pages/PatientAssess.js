import React from 'react'
import {useState} from 'react'

const PatientAssess = () => {
    const checkItems = ['Check Pulse', 'Check Breathing', "Check Airway", "Check For Shock", "Check For Hypothermia"]
    return (
        <div>
          <h1>
            Patient Assessment Checklist:
          </h1>

          <ol>
            {checkItems.map(item => <li>{item}</li>)}
          </ol>
        </div>
      );
}

export default PatientAssess;