import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.onChangeSelectedProfile = this.onChangeSelectedProfile.bind(this);

    this.state = {
      users: [],
      username: "",
      selectedProfile: "",
      profileData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeSelectedProfile(e) {
    this.setState({
      selectedProfile: e.target.value,
    }, () => {
      axios
        .get("http://localhost:5000/items/" + this.state.selectedProfile)
        .then(response => {
          console.log(response);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    })
}

  render() {
    return (
      <div className="seller-div">
        <h3 className="heading-item">Select a Profile</h3>
        <select
          onChange={this.onChangeSelectedProfile}
          className="form-select-profile"
          aria-label="Default select example"
        >
          <option defaultValue>select from menu</option>
          {this.state.users.map(function (user) {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
        </select>
        {/* <div className="card-group"> */}
        {/* {this.state.profileData.map((item, index) => (
            <div className="col-sm-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"http://localhost:5000/" + item.selectedPic}
                  alt="error"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">Ad by {item.author}</small>
                  </p>
                  <p className="card-text-three">
                    {item.category + " | " + item.date + " | " + item.quality}
                  </p>
                  <p className="card-text-price">{"£" + item.price}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Date Posted: {item.createdAt.slice(0, 10)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default Profile;
