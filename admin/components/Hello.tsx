import React from "react";

type Props = {
  name?: string;
};

const Hello = ({ name }: Props) => (
  <div>
    <h1>Hello {name}</h1>
  </div>
);

export default Hello;
