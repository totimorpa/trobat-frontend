import React from "react";
import { Button } from "@mui/material";
import "./LostObjectModal.css";

class LostObjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>Open Modal</Button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-content">
              <Button onClick={this.toggleModal}>x</Button>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your name" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default LostObjectModal;
