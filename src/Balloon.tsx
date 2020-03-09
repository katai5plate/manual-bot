import React from "react";
import "./Balloon.scss";

interface Props {
  direction: "left" | "right";
  children: string[];
  isButtons?: boolean;
}

const FC: React.FC<Props> = ({ children, direction, isButtons }) => (
  <div>
    <div className={["balloon", direction].join(" ")}>
      {children.map((item, i) => (
        <p key={i}>
          {item.split("\n").map((line, index, { length }) => {
            const Content: React.FC = () => (
              <>
                {line}
                {index !== length - 1 ? <br /> : ""}
              </>
            );
            return isButtons ? (
              <button key={index}>
                <Content />
              </button>
            ) : (
              <Content key={index} />
            );
          })}
        </p>
      ))}
    </div>
  </div>
);

export default FC;
