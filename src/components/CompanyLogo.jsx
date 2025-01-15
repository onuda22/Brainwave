import React from "react";
import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beatiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="items-center justify-center flex flex-1 h-[8.5rem]"
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
