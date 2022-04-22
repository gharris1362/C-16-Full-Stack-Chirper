import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "babel-polyfill";

const Creator = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const postChirp = async () => {
    try {
      const add = await fetch("/api/chirps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, content: message }),
      });
    } catch (err) {
      if (err) throw err;
    }
  };

  return (
    <>
      <div className="container">
        <form className="m-1"  onSubmit={postChirp} >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Chirp</label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-check"></div>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Creator;
