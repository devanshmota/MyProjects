import React, { useState, useEffect } from "react";
import './ToDoApp.css';
import axios from 'axios';

export function ToDoApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allcards, setAllCard] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3001/api/card")
      .then((res) => {
        const cards = res.data;
        setAllCard(cards);
      })
      .catch((err) => {
        console.log("error", err);
      })


  }, []);


  const handleRemoveIcon = (id) => {
    axios.delete(`http://localhost:3001/api/card/${id}`)
      .then(res => {
        if (res.data.success) {
          // console.log(res.data.success);
          setAllCard(allcards.filter((card) => card.id !== id));
        } else {
          console.error(res.data.error);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (title && description) {
      let newCard = {
        id: Date.now(),
        title: title,
        description: description,
        isComplete: false
      };

      const api_endpoint = "http://localhost:3001/api/card";

      axios.post(api_endpoint, newCard)
        .then(response => {
          console.log(response.data);
          setAllCard([...allcards, newCard]);
          setTitle("");
          setDescription("");

        })
        .catch(error => {
          console.error(error);
        });


    }
    else {
      alert("Please Fill The Deatils");
    }
  }

  const handleCardClick = (id) => {

    allcards.map((card) => {
      if (card.id === id) {
        const updatedCard = { ...card, isComplete: !card.isComplete };
        axios.put(`http://localhost:3001/api/card/${id}`, updatedCard)
          .then(() => {
            // If the update is successful, update the state
            setAllCard(allcards.map((c) => (c.id === id ? updatedCard : c)));
          })
          .catch((error) => {
            console.error("Failed to update the card:", error);
          });
        return updatedCard;
      } else {
        return card;
      }
    })
  };

  return (
    <>
      <div className="container-fluid todoapp-full">
        <div className="row mt-5">
          <div className="col-sm-8 offset-sm-2 text-center">
            <div className="row">
              <div className="col-sm-5">
                <form onSubmit={handleAdd}>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    placeholder="Enter Title"
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
                </form>
              </div>
              <div className="col-sm-5">
                <form onSubmit={handleAdd}>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    className="form-control"
                    placeholder="Enter Description"
                  />
                </form>
              </div>
              <div className="col-sm-2">
                <button type="submit" className="todoapp btn btn-primary" onClick={handleAdd}>
                  Add
                </button>
              </div>
            </div>
            <div className="row mt-3">
              {allcards.map((card) => (<div key={card.id} className="col-sm-6 mt-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className={`card-title text-black ${card.isComplete ? 'text-decoration-line-through' : ''}`}>{card.title}</h5>
                    <p className={`card-text ${card.isComplete ? 'text-decoration-line-through' : ''}`}>{card.description}</p>
                    <button className="btn btn-success me-1" onClick={() => handleCardClick(card.id)}><i className="fa-solid fa-check-double"></i></button>
                    <button className="btn btn-danger ms-1" onClick={() => handleRemoveIcon(card.id)}><i className="fa fa-times" aria-hidden="true" ></i></button>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}


