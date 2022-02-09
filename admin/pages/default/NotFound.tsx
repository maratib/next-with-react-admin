import React from "react";

type Props = {
  name?: string;
};

const NotFound = ({ name }: Props) => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
