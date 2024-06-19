import React, { useEffect } from "react";
import './ToDoApp.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from "../../Data/titleSlice";
import { setDescription } from "../../Data/descriptionSlice";
import { setAllCard } from "../../Data/allcardSlice";

export function ToDoApp() {

  const { rtitle } = useSelector((state) => state.title)
  const { rdescription } = useSelector((state) => state.description)
  const { rcards } = useSelector((state) => state.allcards)

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/api/card")
      .then((res) => {
        const cards = res.data;
        dispatch(setAllCard(cards));
      })
      .catch((err) => {
        console.log("error", err);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveIcon = (id) => {
    axios.delete(`http://localhost:3001/api/card/${id}`)
      .then(res => {
        if (res.data.success) {
          dispatch(setAllCard(rcards.filter((card) => card.id !== id)));
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
    let newCard = {
      id: Date.now(),
      rtitle,
      rdescription,
      isComplete: false
    };

    const api_endpoint = "http://localhost:3001/api/card";

    axios.post(api_endpoint, newCard)
      .then(response => {
        dispatch(setAllCard([...rcards, newCard]));
        dispatch(setTitle(""));
        dispatch(setDescription(""));
      })
      .catch(error => {
        console.error(error);
      });


  }

  const handleCardClick = (id) => {

    const updatedCards = rcards.map((card) =>
      card.id === id ? { ...card, isComplete: !card.isComplete } : card);

    const updatedCard = updatedCards.find((card) => card.id === id);

    axios
      .put(`http://localhost:3001/api/card/${id}`, updatedCard)
      .then(() => {
        dispatch(setAllCard(updatedCards));
      }).then(() => {
        console.log(rcards)
      })
      .catch((error) => {
        console.error("Failed to update the card:", error);
      });

  };

  return (
    <>
      <div className="container my-5">

        <div className="row mb-5">
          <div className="col-12">
            <form onSubmit={handleAdd} className="todo_form">
              <input
                type="text"
                className="todo_input todo_title_input"
                value={rtitle}
                placeholder="Enter Title"
                onChange={(e) => dispatch(setTitle(e.target.value))}
                required
              />
              <input
                type="text"
                value={rdescription}
                onChange={(e) => dispatch(setDescription(e.target.value))}
                className="todo_input"
                placeholder="Enter Description"
                required
              />
              <button type="submit" className="todo_add_btn">
                Add
              </button>
            </form>
          </div>
        </div>

        <div className="row row-gap-4">
          {rcards.map((card) => (<div key={card.id} className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className={`card-title text-black ${card.isComplete ? 'text-decoration-line-through' : ''}`}>{card.rtitle}</h5>
                <p className={`card-text ${card.isComplete ? 'text-decoration-line-through' : ''}`}>{card.rdescription}</p>
                <button className="btn btn-success me-1" onClick={() => handleCardClick(card.id)}><i className="fa-solid fa-check-double"></i></button>
                <button className="btn btn-danger ms-1" onClick={() => handleRemoveIcon(card.id)}><i className="fa fa-times" aria-hidden="true" ></i></button>
              </div>
            </div>
          </div>))}
        </div>
      </div >
    </>
  );
}


