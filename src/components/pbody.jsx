import React from "react";

const PBody = ({ title, children }) => {
  return (
    <main>
      <h1>{title}</h1>
      <section>{children}</section>
    </main>
  );
};

export default PBody;
