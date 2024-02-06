import React from "react";

import logo from "./../assets/logo.png";

const Error: React.FC = () => {
  return (
    <div>
      <h1>404</h1>
      <img src={logo} alt="logo" width={400} height={400} />
    </div>
  );
};

export default Error;
