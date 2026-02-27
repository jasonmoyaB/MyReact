
import type { NameProps } from "../../interfaces/names";

export const ListNames = ({ name, last_name,edad }: NameProps) => {

  return (
    <div className="mt-3">
      <h2>Names;</h2>

      <p>Name: {name?.toLowerCase() || "No name yet"}</p>
      {last_name?.toLowerCase() && <p>Last Name: {last_name.toLowerCase()}</p>}
      <p>Age: {edad || "No age yet"}</p>
      {status && <p className="badge bg-success">{status}</p>}
    </div>
  );
};