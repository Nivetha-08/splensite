import React from "react";
import Practise from "./Practise";

const Rough = () => {
  console.log("Rough rendered");

  const studentMarks = [
    ["John", 85, 90, 78],
    ["Emma", 92, 88, 80],
    ["Lucas", 75, 85, 89],
  ];

  return (
    <>
      <p>TEST</p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
          </tr>
        </thead>
        <tbody>
          {studentMarks.map((student, index) => (
            <tr key={index}>
              {student.map((v, i) => (
                <td key={i} className="text-center">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Rough;
