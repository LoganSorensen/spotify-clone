import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PlaylistModal = () => {
  // const [formData, setFormData] = useState({
  //   id: playlists.length + 1,
  //   name: `My playlist #${playlists.length + 1}`,
  //   description: "",
  // });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    //   console.log(e.target.name,e.target.value)
    //   setFormData({...formData, [e.target.name]: e.target.value})
  };

  const createPlaylist = (e) => {
    e.preventDefault();
    // playlists.push(formData);
  };

  return (
    <div>
      <button className="add-playlist-btn" onClick={toggle}>
        <i className="fas fa-plus-circle"></i>New Playlist
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Playlist</ModalHeader>
        <ModalBody>
          <form onSubmit={createPlaylist}>
            <div className="playlist-form">
              <div className="choose-img">
                <i className="fas fa-music"></i>Choose image
              </div>
              <div className="playlist-inputs">
                <label htmlFor="playlist-name">Name</label>
                <input
                  type="text"
                  id="playlist-name"
                  name="name"
                  placeholder={`My playlist #1`}
                  onChange={handleChange}
                />
                <label htmlFor="playlist-desc">Description</label>
                <textarea
                  type="text"
                  id="playlist-desc"
                  name="description"
                  placeholder="Give your playlist a catchy description."
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button type="submit">CREATE</Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default PlaylistModal;
