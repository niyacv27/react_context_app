import React from "react";


function DeepChild({ message }) {
  return <p>DeepChild got: {message}</p>;
}


function Middle({ message }) {
  return (
    <div>
      <p>
        Middle component: I don't use 'message', but I must receive and pass it.
      </p>
      <DeepChild message={message} />
    </div>
  );
}


function Parent({ message }) {
  return (
    <div className="card">
      <h3>Props Drilling Example</h3>
      <Middle message={message} />
    </div>
  );
}

function PropsDrillingExample() {
  const msg = "Hello from Parent via props!";
  return <Parent message={msg} />;
}

export default PropsDrillingExample;
