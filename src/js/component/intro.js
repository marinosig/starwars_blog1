import React from "react";
import { Link } from "react-router-dom";
import "../../styles/intro.css";

export const Intro = () => {
  return (
    <div className="text-warning" id="titles">
      <div id="titlecontent">
        <p>
          "It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
          During the battle, Rebel spies managed to steal secret plans to the
          Empireâ€™s ultimate weapon, the DEATH STAR, and space station with
          enough power to destroy an entire planet. Pursued by the Empireâ€™s
          sinister agents, Princess Leia races home aboard her starship,
          custodian of the stolen plans that can save her people and restore
          freedom to the galaxy"
        </p>
      </div>
    </div>
  );
};
