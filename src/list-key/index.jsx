import { useState } from "react";

export default function ListKey() {
  const [fruit, setFruit] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 2, name: "Grape" },
  ]);

  const renderListFruit = () => {
    const listLi = fruit.map((fruit) => {
      return (
        <li key={fruit.id}>
          {/* có key để react biết index */}
          id: {fruit.id} - name: {fruit.name}
        </li>
      );
    });

    return listLi;
  };

  const renderTbody = () => {
    return fruit.map((fruit) => {
      return (
        <tr>
          <td>{fruit.name}</td>
          <td>{fruit.id}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>ListKey</h1>
      <ul>
        {/* {fruit.map((fruit) => {
          return (
            <li key={fruit.id}>
              id: {fruit.id} - name: {fruit.name}
            </li>
          );
        })} */}

        {renderListFruit()}
      </ul>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}
