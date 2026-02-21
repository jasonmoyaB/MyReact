import { ListNames } from "./ListNames"
import { useState } from "react";

export const Name = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [edad, setEdad] = useState(0);
    
    const handleLimitAge = (age: number) => {
      if (age == 0) {
        setEdad(0);
      } else if (age < 0) {
        setEdad(0);
      } else {
        setEdad(age);
      }
    }
  return (
    <div>
        <h1>Hello i will show you your names and your age</h1>
        <input type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />

        <input type="number"
        placeholder="edad" 
        value={edad}
        onChange={(e) => {
          const value = Number(e.target.value);
          handleLimitAge(value);
        }}
        />


        <ListNames name={name} last_name={lastName} edad={edad} />
    </div>
  )
}

