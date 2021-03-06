import React, { Component } from "react";
import List from "./listcomponent";
import { format } from "path";
import FlipMove from "react-flip-move";

class Pending extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-center p-3 text-primary">Pending Activities</h2>
          <p className="text-center text-secondary">{this.props.empty}</p>
          <span className="text-center" id="empty" />
          <FlipMove duration={250} easing="ease-out">
            {this.props.pending.map(pending => (
              <div id="pending">
                <List
                  data={pending}
                  deleteList={() => this.props.deleteList({ pending })}
                  completeList={() => this.props.completeList({ pending })}
                />
              </div>
            ))}
          </FlipMove>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Pending;
