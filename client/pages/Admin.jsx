import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Admin = () => {


    const { id } = useParams();
    const [chirp, setChirp] = useState({})


  useEffect(() => {
    fetch(`/api/chirps/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);  
        setChirp(data[0])});
  }, []);

  return (
    <>
      <div>
        <h1>This is the admin component!</h1>
        <div class="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
      </div>
    </>
  );
};

export default Admin;
