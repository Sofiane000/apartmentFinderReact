import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 pro-image-pr">
            <div className="pro-image">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL +
                  "/img/" +
                  this.props.details[0].image_id +
                  ".jpg"
                }
              />
            </div>
          </div>
          <div className="col-sm-8">
            <span>
              <h4>{"$" + this.props.details[0].price}</h4>
            </span>
            <span>
              <h5>
                {this.props.details[0].bedrooms} Bedrooms -{" "}
                {this.props.details[0].bathrooms} Bathrooms
              </h5>
            </span>
            <span> {this.props.details[0].address},</span>
            <br />
            <span>
              {" "}
              {this.props.details[0].city}, {this.props.details[0].state}
            </span>
            <div className="row mar-top">
              <div className="btn-toolbar">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="First group"
                >
                  <button className="button btn btn-warning btn-sm">
                    Check Availability
                  </button>
                  <button className="button btn btn-info btn-sm">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
