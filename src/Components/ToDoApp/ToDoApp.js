import React, { useState } from "react";
import './ToDoApp.css';

export function ToDoApp() {
  // const [showCard, setShowCard] = useState(true);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [allcards, setAllCard] = useState([]);


  const handleRemoveIcon = (id) => {
    setAllCard((allcards) => allcards.filter((card) => card.id !== id))
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (title && description) {
      const newCard = {
        id: Date.now(),
        title: title,
        description: description,
        isClicked: false
      };
      setAllCard([...allcards, newCard]);
      setTitle("");
      setDescription("");
    }
    else {
      alert("Please Fill The Deatils");
    }
  }

  const handleCardClick = (id) => {
    setAllCard((allcards) =>
      allcards.map((card) =>
        card.id === id ? { ...card, isClicked: !card.isClicked } : card)

    );
  };

  return (
    <>
      <div className="container-fluid todoapp">
        {/* <div className="row">
          <div

            className="col-sm-12 text-white p-4 text-center h2 bgcolor"
          >
            ToDo App
          </div>
        </div> */}
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
                <button type="submit" className="btn btn-primary" onClick={handleAdd}>
                  Add
                </button>
              </div>
            </div>
            <div className="row mt-3">
              {allcards.map((card) => (<div key={card.id} className="col-sm-6 mt-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className={`card-title text-black ${card.isClicked ? 'text-decoration-line-through' : ''}`}>{card.title}</h5>
                    <p className={`card-text ${card.isClicked ? 'text-decoration-line-through' : ''}`}>{card.description}</p>
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


