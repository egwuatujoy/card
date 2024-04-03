import React from "react";
import InfoMain from "./InfoMain";
const Info = ({ infos }) => {
  return (
    <div>
      {infos.map((info, index) => (
        <InfoMain
          key={index}
          name={info.name}
          skill={info.skill}
          age={info.age}
          country={info.country}
          price={info.price}
          tech={info.tech}
        />
      ))}
    </div>
  );
};

export default Info;
