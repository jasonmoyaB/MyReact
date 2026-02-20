interface NameProps {
  name?: string;
  last_name?: string;
}

export const ListNames = ({ name, last_name }: NameProps) => {
  return (
    <div className="mt-3">
      <h2>I will show you the names</h2>

      <p>Name: {name || "No name yet"}</p>

      {last_name && <p>Last Name: {last_name}</p>}
    </div>
  );
};