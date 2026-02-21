interface NameProps {
  name?: string;
  last_name?: string;
  edad?: number;
}

export const ListNames = ({ name, last_name,edad }: NameProps) => {
  return (
    <div className="mt-3">
      <h2>Names;</h2>

      <p>Name: {name?.toLowerCase() || "No name yet"}</p>
      {last_name?.toLowerCase() && <p>Last Name: {last_name.toLowerCase()}</p>}
      <p>Age: {edad || "No age yet"}</p>
    </div>
  );
};