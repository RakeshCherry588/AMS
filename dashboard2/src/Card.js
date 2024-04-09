import "./App.css";
import { useEffect, useState } from "react";

function Card({ title, total, remaining }) {
  const [backgroundColor, setBackgroundColor] = useState(
    "conic-gradient(blue 100%, white 0%)"
  );

  useEffect(() => {
    if (total === remaining) {
      setBackgroundColor("conic-gradient(blue 100%)");
      console.log("Hello");
    } else {
      const percentage = ((total - remaining) / total) * 100;
      setBackgroundColor(
        `conic-gradient(blue ${percentage}%, white ${percentage}%)`
      );
    }
  }, [remaining, total]);

  return (
    <div className="container">
      <div className="d-flex justify-content-start" id="carditem">
        <div className="col-5">
          <div
            className={`outer-circle ${
              total === remaining ? "total-equal" : ""
            }`}
            style={{ background: backgroundColor }}
          >
            <div className="inner-circle">
              <div className="font-weight-bold">
                0{total}/0{remaining}
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto col-7">
          <h4>{title} leave</h4>
          <div>
            <div>
              <span id="dot" className="bg-secondary"></span>
              Remaining -
            </div>
            <div>
              <span id="dot" className="bg-primary"></span>
              Used -
            </div>
            <div>
              <span id="dot" className="bg-dark"></span>
              Total -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
