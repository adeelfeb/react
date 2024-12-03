import React from "react";

const Summary = ({ data }) => {
  return (
    <div>
      <h4 className="font-semibold text-lg">Summary</h4>
      <p><strong>English:</strong> {data?.english || "Not yet provided"}</p>
      <p><strong>Hindi:</strong> {data?.hindi || "Not yet provided"}</p>
      <p><strong>Urdu:</strong> {data?.urdu || "Not yet provided"}</p>
    </div>
  );
};

export default Summary;
