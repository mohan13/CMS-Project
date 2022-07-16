import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import TestContextProvider, {
  TestContext,
} from "../../../HOC/Context API/Context";
// import { db } from "./FirebaseConfig";
// import { collection, getDocs, addDoc } from "firebase/firestore";
const Firebase = () => {
//   const [Users, setUsers] = useState([]);
//   const [newName, setNewName] = useState("");
//   const userCollectionRef = collection(db, "users");
//   const createUser = async () => {
//     await addDoc(userCollectionRef, { Name: newName });
//   };
//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(userCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getUsers();
//   }, []);
  return (
    <TestContextProvider>
      <TestContext>
      {({Users,createUser,setNewName})=>{
        return(<div>
          <input placeholder="Name..."   onChange={(event) => {setNewName(event.target.value);}} />
      <button onClick={createUser}>Add User</button>
      {Users.map((user) => {
        return (
          <div>
            <h1>Name:{user.Name}</h1>
          </div>
        )
       
      })}; </div>
        )
      }}
      
      </TestContext>
    </TestContextProvider>
    
  );
};

export default Firebase;
