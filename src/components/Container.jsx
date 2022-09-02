import React from "react";

const Container = ({children}) => {
  return (
    <div className="my-10 sm:my-24 px-3">
      <div className="w-full max-w-xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
