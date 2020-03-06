import React from "react";
import "./Balloon.scss";

interface Props {
  direction: "left" | "right";
  children: string[];
}

const FC: React.FC<Props> = ({ children, direction }) => (
  <div>
    <div className={["balloon", direction].join(" ")}>
      {children.map(item => (
        <p>
          {item.split("\n").map((line, index, { length }) => (
            <>
              {line}
              {index !== length - 1 ? <br /> : ""}
            </>
          ))}
        </p>
      ))}
    </div>
  </div>
);

export default FC;
