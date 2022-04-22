import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillTrashFill } from "react-icons/Bs";
import Moment from "react-moment";

const Timeline = () => {
  const [chirps, setChirps] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    fetch("/api/chirps")
      .then((data) => data.json())
      .then((data) => setChirps(data));
  }, []);

  // const deleteChirp = async (id) => {
  //   console.log("Test");
  //   try {
  //     const add = await fetch(`/api/chirps/${id}`, { method: "DELETE" }).then(
  //       () => {
  //         console.log("successfully deleted!");
  //         location.reload();
  //       }
  //     );
  //   } catch (err) {
  //     if (err) throw err;
  //   }
  // };

  const editChirp = (chirpContent, chirpId) => {
    Swal.fire({
      title: "Edit Chirp!",
      input: "textarea",
      inputPlaceholder: "Your Chirp",
      inputValue: chirpContent,
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
      const add = await fetch(`/api/chirps/${chirpId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(nav(0));
      console.log(data);
    }
    });
  };

  const deletedChirp = (id) => {
    // Swal.bindClickHandler();

    // Swal.mixin({
    //   toast: true,
    //   title: "Are you sure you want to delete?",
    //   showCancelButton: true,
    //     confirmButtonColor: '#007BFF'
    // }).bindClickHandler('data-swal-toast-template')

    Swal.fire({
      title: "Are you sure you want to delete?",
      toast: true,
      showCancelButton: true,
      confirmButtonColor: "#007BFF",
    }).then(async (data) => {
      if (data.isConfirmed) {
        try {
          const add = await fetch(`/api/chirps/${id}`, {
            method: "DELETE",
          })
          .then(nav(0))
          .then(() => {
            console.log("successfully deleted!");
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Chirp Deleted!",
            })
          });
        } catch (err) {
          if (err) throw err;
        }
      }
    });
  };

  return (
    <>
      <div className="container mt-5">
        {chirps.reverse().map((chirp) => {
          const dateToFormat = chirp._created;
          return (
            <div className="card m-1" key={chirp.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{chirp.name}</h5>
                  {/* <button
                  className="btn btn-primary m-1"
                  onClick={() => deleteChirp(chirp.id)}
                  type="submit"
                >
                  Delete Chirp
                </button> */}
                  <BsFillTrashFill
                    data-swal-template="#trash"
                    onClick={() => deletedChirp(chirp.id)}
                  />
                </div>
                <h6 className="card-subtitle mb-2 text-muted">
                  <Moment format="h:mm A - MMMM D">{dateToFormat}</Moment>
                </h6>
                <p className="card-text">{chirp.content}</p>
                {/* <Link to={`/Edit/${chirp.id}`}>Edit chirp</Link> */}
                <div className="d-flex flex-row align-items-center">
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => editChirp(chirp.content, chirp.id)}
                  >
                    Edit Chirp
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
