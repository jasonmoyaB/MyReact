import { useState } from "react";
import  type{ Person } from "../../interfaces/person";


export const Name = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [edad, setEdad] = useState(0);
    const [people, setPeople] = useState<Person[]>([]);
    const [filter, setFilter] = useState<"all" | "adults" | "minors">("all");
    
    const handleLimitAge = (age: number) => {
      if (age == 0) {
        setEdad(0);
      } else if (age < 0) {
        setEdad(0);
      } else {
        setEdad(age);
      }
    }

    const handleAddPerson = () => {
      if (name.trim() === "" || lastName.trim() === "") {
        alert("Por favor completa nombre y apellido");
        return;
      }

      const newPerson: Person = {
        // eslint-disable-next-line react-hooks/purity
        id: Date.now(),
        name: name.trim(),
        lastName: lastName.trim(),
        edad: edad
      };

      setPeople([...people, newPerson]);
      handleReset();
    }

    const handleReset = () => {
      setName("");
      setLastName("");
      setEdad(0);
    }

    const handleDeletePerson = (id: number) => {
      setPeople(people.filter(person => person.id !== id));
    }

    const handleSortAlphabetically = () => {
      const sorted = [...people].sort((a, b) => 
        a.name.localeCompare(b.name)
      );
      setPeople(sorted);
    }

    const filteredPeople = people.filter(person => {
      if (filter === "adults") return person.edad >= 18;
      if (filter === "minors") return person.edad < 18;
      return true;
    });

  return (
    <div className="container mt-4">
        <h1>Lista de Personas</h1>
        
        <div className="row g-2 mb-3">
          <div className="col">
            <input type="text"
              className="form-control"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col">
            <input type="text"
              className="form-control"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="col">
            <input type="number"
              className="form-control"
              placeholder="Edad" 
              value={edad}
              onChange={(e) => {
                const value = Number(e.target.value);
                handleLimitAge(value);
              }} />
          </div>
        </div>

        <div className="mb-3">
          <button className="btn btn-success me-2" 
            onClick={handleAddPerson}>
            Agregar Persona
          </button>
          <button className="btn btn-secondary me-2" 
            onClick={handleReset}>
            Limpiar
          </button>
          <button className="btn btn-info" 
            onClick={handleSortAlphabetically}>
            Ordenar A-Z
          </button>
        </div>

        <div className="mb-3">
          <label className="me-2">Filtrar:</label>
          <button 
            className={`btn btn-sm me-2 ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter("all")}>
            Todos ({people.length})
          </button>
          <button 
            className={`btn btn-sm me-2 ${filter === "adults" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter("adults")}>
            Mayores ({people.filter(p => p.edad >= 18).length})
          </button>
          <button 
            className={`btn btn-sm ${filter === "minors" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter("minors")}>
            Menores ({people.filter(p => p.edad < 18).length})
          </button>
        </div>

        <div className="mt-4">
          <h3>Personas registradas: {filteredPeople.length}</h3>
          {filteredPeople.length === 0 ? (
            <p className="text-muted">No hay personas registradas</p>
          ) : (
            <ul className="list-group">
              {filteredPeople.map((person) => (
                <li key={person.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{person.name} {person.lastName}</strong>
                    <span className="ms-3 text-muted">
                      {person.edad} años
                      {person.edad >= 18 ? " [no es menor de 18]" : " [bebe]"}
                    </span>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeletePerson(person.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
  )
}

