import React from "react";

const GameTableBody = props => {
  return (
    <tbody>
      {props.userData.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{data.Rank}</th>
            <td>{data.Name}</td>
            <td>{data.Platform}</td>
            <td>{data.Year}</td>
            <td>{data.Genre}</td>
            <td>{data.Publishers}</td>
            <td>{data.Global_Sales}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default GameTableBody;
