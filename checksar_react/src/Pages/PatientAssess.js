import React from 'react'
import {useState} from 'react'
import '../Styles/Patient.css'


const PatientAssess = (props) => {
    const tempItems = (props.data.length > 0) ? props.data : ['Check Pulse', 'Check Breathing', "Check Airway", "Check For Shock", "Check For Hypothermia"];
    const [checkItems, setCheckItems] = useState(tempItems);
    const arr = []
    for (let i = 0;i<checkItems.length;i++){
      arr.push(false)
    }

    const arr2 = (props.states.length > 0) ? props.states : arr;
    const [checkedItems,setCheckedItems] = useState(arr2);
    console.log(props);

    const [isEditing, setIsEditing] = useState(false); //If use is in editing mode, clicking on a list item will delete it

    const toggleStrike = (item) =>{
      console.log(item);
      let elem = document.getElementById(item);
      const index = checkItems.indexOf(item);
      if (isEditing){
        checkItems.splice(index,1);
        checkedItems.splice(index,1);
        setCheckItems(checkItems);
      }
      else{
        elem.classList.toggle("strike");
        checkedItems[index] = !checkedItems[index];
      }
      setCheckedItems(checkedItems);
      props.setter(checkItems, checkedItems);
      console.log(checkedItems);
    }

    const handleEdit = () => {
      setIsEditing(!isEditing);
      let elem = document.getElementById("edit");
      elem.textContent = !isEditing ? "Stop Edit" : "Edit";
    }

    return (
        <div>

          <button id="edit" onClick={handleEdit}>Edit</button>

          <h1 class="f">
            Patient Assessment Checklist:
          </h1>

          <ul>
            {checkItems.map(item => <li><p class={checkedItems[checkItems.indexOf(item)] ? "strike" : ""} id={item} onClick={() => {toggleStrike(item)}} key={item}>{item}</p></li>)}
          </ul>
        </div>
      );
}

export default PatientAssess;
