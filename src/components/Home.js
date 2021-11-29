import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeState: "",
    };
  }

  updateData() {
    const data = {
      userId: "2234",
      id: "2223",
      title: "Okay dexter New",
      body: "uybjn djhfbsdinof nisusdiufj odi fsduh fsdoi fsduif siudfh siudf hsiud gfisud g",
    };

    axios
      .put("http://jsonplaceholder.typicode.com/posts/1", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  delData() {
    const data = {
      userId: "2234",
      id: "2223",
      title: "Okay dexter New",
      body: "uybjn djhfbsdinof nisusdiufj odi fsduh fsdoi fsduif siudfh siudf hsiud gfisud g",
    };

    axios
      .delete("http://jsonplaceholder.typicode.com/posts/1", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <p>Welcome to Axios Deom</p>
        <button onClick={this.postData}>Submit</button>
        <button onClick={this.updateData}>Update</button>
        <button onClick={this.delData}>Delete</button>
      </div>
    );
  }
}

export default Home;
