import { useEffect, useState } from "react";
import { ReactComponent as Scroll } from "./assets/scroll.svg";
import "./First.css";

const matrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

const colors = ["#FF577F", "#FF884B", "#FFC764"];

function First() {
  const [ij, setIj] = useState({
    i: Math.round(Math.random() * matrix.length - 1),
    j: Math.round(Math.random() * matrix[0].length - 1),
  });
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newi, newj;

      newi = Math.round(Math.random() * matrix.length - 1);
      newj = Math.round(Math.random() * matrix[0].length - 1);
      if (newi === ij.i && newj === ij.j) {
        newi = (newi + 1) % matrix.length;
      }
      setIj({
        i: newi,
        j: newj,
      });
      setColorIndex((color) => (color + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="first">
      <div className="matrix">
        {matrix.map((row, i) => (
          <div className="row">
            {row.map((el, j) => {
              return (
                <div
                  className="jd"
                  style={{
                    color:
                      i === ij.i && j === ij.j
                        ? colors[colorIndex]
                        : "rgba(0,0,0,0.17)",
                    textShadow:
                      i === ij.i && j === ij.j
                        ? `0px 0px 20px ${colors[colorIndex]}`
                        : "unset",
                  }}
                >
                  Juicy Duicy
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="circle">
        <div className="juice-it">Juice it, til you lose it.</div>
      </div>
      <Scroll className="scroll" />
    </div>
  );
}

export default First;
