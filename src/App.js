import React, { Component } from "react";
import "./App.css";
import HouseContainer from "./Containers/HouseContainer";
import PuppyContainer from "./Containers/PuppyContainer";
import NewPuppyForm from "./Components/NewPuppyForm";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    houses: [],
    puppies: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3005/puppies")
      .then(res => res.json())
      .then(puppies => this.setState({ puppies }));

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
    // console.log((newHouse))
    fetch(`http://localhost:3005/puppies/${puppy.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ house_id: newHouse })
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
    console.log(puppyObj);
    let houseId = () => {
      if (puppyObj.house === "Gryffindog") {
        return {
          name: puppyObj.name,
          house_id: 1,
          age: puppyObj.age,
          image1: puppyObj.image1,
          image2: puppyObj.image2
        };
      } else if (puppyObj.house === "Rufflepuff") {
        return {
          name: puppyObj.name,
          house_id: 2,
          age: puppyObj.age,
          image1: puppyObj.image1,
          image2: puppyObj.image2
        };
      } else if (puppyObj.house === "Roverclaw") {
        return {
          name: puppyObj.name,
          house_id: 3,
          age: puppyObj.age,
          image1: puppyObj.image1,
          image2: puppyObj.image2
        };
      } else if (puppyObj.house === "Slobberin") {
        return {
          name: puppyObj.name,
          house_id: 4,
          age: puppyObj.age,
          image1: puppyObj.image1,
          image2: puppyObj.image2
        };
      }
    };
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
    return this.state.puppies.filter(pup => {
      return (
        pup.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) ||
        pup.house.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
      );
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Switch>
	        <Route
		        path="/:house"
	            render={(routerProps) => {
	            	let foo = routerProps.match.params.house
		            let bar = this.state.houses.find(house1 => house1 === foo)
		            console.log(bar)
		           return <div className="app"> <HouseContainer
			            puppies={this.filteredPuppies()}
			            houses={[bar]}
			            houseChange={this.houseChange}
		           /></div>
	            }}
	        />
          <Route
            path="/"
            render={(routerProps) => {
              return (<>
		              {/*{routerProps.location.pathname === `/Gryffindog`}*/}
	              <center>
		              <NewPuppyForm addPuppy={this.addPuppy} houses={this.state.houses} />
		              <section className="search-form">
			              <input
				              type="text"
				              name="searchTerm"
				              placeholder="Search the Pups"
				              value={this.state.searchTerm}
				              onChange={this.handleChange}
			              />{" "}
		              </section>
	              </center>
	              <div className="app">
		            <PuppyContainer
	            puppies={this.filteredPuppies()}
	            houses={this.state.houses}
	            houseChange={this.houseChange}
	            />
	            <HouseContainer
		            puppies={this.filteredPuppies()}
		            houses={this.state.houses}
		            houseChange={this.houseChange}
	            />
	            </div>
              </>
              
              )
            }}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
