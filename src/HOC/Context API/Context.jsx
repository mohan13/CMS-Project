import React, { useEffect, createContext, useState } from "react";
import {db} from '../../Components/pages/firebase/FirebaseConfig'
import { collection, getDocs,addDoc } from "firebase/firestore";
export const TestContext = createContext();

const TestContextProvider = ({ children }) => {
  const [Users, setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    const createUser = async () => {
        await addDoc(userCollectionRef, { Name: newName });
      };
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
//   const [Students, setStudents] = useState([
//     {
//       sn: "1",
//       fullName: "Ram Bahadur Thapaliya",
//       email: "phalano@gmail.com",
//       phone: "986754321",
//       address: "Sunwal-13",
//     },
//   ]);
  return (
    <TestContext.Provider value={{ Users,createUser,setNewName }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
