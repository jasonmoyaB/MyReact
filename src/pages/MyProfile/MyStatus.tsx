import { statusOptions, users } from "../../components/constants";

export const MyStatus = () => {
  return (
    <div>
      <h1 style={{
        color: "Black",
        fontSize: "24px",
        fontWeight: "bold",
        marginLeft: "40%",
      }}>
        Status and users</h1>
      <br />
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gmail</th>
            <th scope="col">Age</th>
            <th scope="col">Status</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{users[0].name}</td>
            <td>{users[0].LastName}</td>
            <td>{users[0].email}</td>
            <td>{users[0].age}</td>
            <td>{statusOptions[0].label}</td>
            <td>
              <img src={users[0].imageUrl} alt={users[0].name} className="rounded-circle" style={{ width: "30px", height: "30px" }} />
            </td>
          </tr>
          <tr>

            <td>{users[1].name}</td>
            <td>{users[1].LastName}</td>
            <td>{users[1].email}</td>
            <td>{users[1].age}</td>
            <td>{statusOptions[1].label}</td>
            <td>
              <img src={users[1].imageUrl} alt={users[1].name} className="rounded-circle" style={{ width: "30px", height: "30px" }} />
            </td>
          </tr>
          <tr>
            <td>{users[2].name}</td>
            <td>{users[2].LastName}</td>
            <td>{users[2].email}</td>
            <td>{users[2].age}</td>
            <td>{statusOptions[2].label}</td>
            <td>
              <img src={users[2].imageUrl} alt={users[2].name} className="rounded-circle" style={{ width: "30px", height: "30px" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
