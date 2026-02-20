import { ListNames } from "./ListNames"
import { useState } from "react";

export const Name = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");



  return (
    <div>
        <h1>Hello i will show you your names</h1>
        <input type="text"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <ListNames name={name} last_name={lastName} />
    </div>
  )
}

