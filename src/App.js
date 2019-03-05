import React, { Component } from "react";
import "./App.css";
import HouseContainer from "./Containers/HouseContainer";
import PuppyContainer from "./Containers/PuppyContainer";
import NewPuppyForm from "./Components/NewPuppyForm";
import NavBar from "./Components/NavBar";

class App extends Component {
  state = {
    houses: [],
    puppies: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3005/puppies")
      .then(res => res.json())
      .then(puppies => this.setState({puppies}));

    fetch("http://localhost:3005/houses")
      .then(res => res.json())
      .then(res =>
        res.map(function(name) {
          return name.name;
        })
      )
      .then(house => this.setState({ houses: house }));
  }

  houseChange = (puppy, newHouse) => {
    fetch(`http://localhost:3005/puppies/${puppy.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ house: newHouse })
    })
      .then(res => res.json())
      .then(updatedPuppy => {
        const updatedArray = this.state.puppies.map(puppy => {
          if (puppy.id === updatedPuppy.id) {
            return updatedPuppy;
          } else {
            return puppy;
          }
        });
        this.setState({ puppies: updatedArray });
      });
  };

  addPuppy = puppyObj => {
  	console.log(puppyObj)
  	let houseId = () => {if(puppyObj.house === 'Gryffindog'){return {name:puppyObj.name, house_id: 1, age:puppyObj.age, image1:puppyObj.image1, image2:puppyObj.image2}}else if (puppyObj.house === 'Rufflepuff'){return {name:puppyObj.name, house_id: 2, age:puppyObj.age, image1:puppyObj.image1, image2:puppyObj.image2}}else if(puppyObj.house === 'Roverclaw'){return {name:puppyObj.name, house_id: 3, age:puppyObj.age, image1:puppyObj.image1, image2:puppyObj.image2}}else if(puppyObj.house === 'Slobberin'){return {name:puppyObj.name, house_id: 4, age:puppyObj.age, image1:puppyObj.image1, image2:puppyObj.image2}}}
	    fetch("http://localhost:3005/puppies/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(houseId())
    })
      .then(res => res.json())
      .then(puppy => {
        const newArray = [...this.state.puppies, puppy];
        this.setState({
          puppies: newArray
        });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filteredPuppies = () => {
    return this.state.puppies.filter(char => {
      return (
        char.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        char.house.toLowerCase().includes(this.state.searchTerm.toLowerCase())
	      
      );
    });
  };

  render() {
    return (
      <div className="app">
	      <NavBar /><br />
        <NewPuppyForm addPuppy={this.addPuppy} houses={this.state.houses} />
        <hr />
        <section className="search-form">
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />{" "}
        </section>

        <hr />
        <PuppyContainer
          puppies={this.filteredPuppies()}
          houses={this.state.houses}
          houseChange={this.houseChange}
        />
        <HouseContainer
          puppies={this.filteredPuppies()}
          houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
