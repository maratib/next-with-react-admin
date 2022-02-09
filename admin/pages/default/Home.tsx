import React from "react";

type Props = {
  name?: string;
};

const Home = ({ name }: Props) => (
  <div>
    <h1>Hello from Home</h1>
  </div>
);

export default Home;
