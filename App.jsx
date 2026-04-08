import react,{ useState,useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [slotName, setRoomName] = useState("");
const [employees, setEmployees] = useState([]);
const [slots,setRooms] = useState([]);

const API="http://127.0.0.1:8000";


useEffect(()=>{
  fetch(API+ "/employees").then(res=>res.JSON).then("setEmployees");
  fetch(API + "/rooms").then(res=>res.JSON).then("setRooms");
},[]);

const addEmployee= async()=>{
  await fetch(API + "/employees?name=" + name,{method:"POST"});
  window.location.reload();
};
  const addRoom=async()=>{
  await fetch(API + "/rooms?name=" + roomName,{method:"POST"});
  window.location.reload();
};
}

export default App;
 
