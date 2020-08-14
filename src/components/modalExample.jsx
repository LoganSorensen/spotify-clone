import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="add-playlist-btn" onClick={toggle}>
        <i className="fas fa-plus-circle"></i>New Playlist
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create Playlist</ModalHeader>
        <ModalBody>
            <div className="choose-img"><i class="fas fa-music"></i>Choose image</div>
          <div className="playlist-inputs">
            <label htmlFor="playlist-name">Name</label>
            <input type="text" id="playlsit-name" placeholder="My Playlist" />
            <label htmlFor="playlist-desc">Description</label>
            <textarea
              type="text"
              id="playlist-desc"
              placeholder="Give your playlist a catchy description."
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            CREATE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
