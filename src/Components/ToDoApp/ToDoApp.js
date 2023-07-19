import React, { useEffect } from "react";
import './ToDoApp.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import titleSlice from "../../Data/titleSlice";
import descriptionSlice from "../../Data/descriptionSlice";
import allcardSlice from "../../Data/allcardSlice";

export function ToDoApp() {

  const { rtitle } = useSelector((state) => state.title)
  const { rdescription } = useSelector((state) => state.description)
  const { rcards } = useSelector((state) => state.allcards)

  const { setTitle } = titleSlice.actions
  const { setDescription } = descriptionSlice.actions
  const { setAllCard } = allcardSlice.actions

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

    if (rtitle && rdescription) {
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
    else {
      alert("Please Fill The Deatils");
    }
  }

  const handleCardClick = (id) => {

    const updatedCards = rcards.map((card) =>
      card.id === id ? { ...card, isComplete: !card.isComplete } : card);

    const updatedCard = updatedCards.find((card) => card.id === id);

    axios
      .put(`http://localhost:3001/api/card/${id}`, updatedCard)
      .then(() => {
        dispatch(setAllCard(updatedCards));
      })
      .catch((error) => {
        console.error("Failed to update the card:", error);
      });
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
                    value={rtitle}
                    placeholder="Enter Title"
                    // onChange={(e) => { setTitle(e.target.value) }}
                    onChange={(e) => dispatch(setTitle(e.target.value))}
                  />
                </form>
              </div>
              <div className="col-sm-5">
                <form onSubmit={handleAdd}>
                  <input
                    type="text"
                    value={rdescription}
                    // onChange={(e) => { setDescription(e.target.value) }}
                    onChange={(e) => dispatch(setDescription(e.target.value))}
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
              {rcards.map((card) => (<div key={card.id} className="col-sm-6 mt-4">
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
          </div>
        </div>
      </div >
    </>
  );
}


