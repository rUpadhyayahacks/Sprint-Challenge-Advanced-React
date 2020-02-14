import React from 'react';
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage'
import PlayerCard from './PlayerCard'
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      playerText: ''
    };
  // state = {
  //   players: [],
  //   playerText: ''
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // res.data.message
        this.setState({
          players: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render(){
    console.log(this.state)
  
    return (
      <div>
      <Navbar />
      
      <section className='card-container'>
        <PlayerCard players={this.state.players} />
        {this.state.players.map((playerText, i) => {
          return <PlayerCard key ={i} players={playerText} />
        })}
      </section>
      </div>
      
    );
  };
}
export default App;

 // handleChanges = e => {
  //   this.setState({
  //     playerText: e.target.value
  //   });
  // };

  // fetchPlayers = e => {
  //   e.preventDefault();
  //   axios
  //     .get('http://localhost:5000/api/players')
  //     .then(res => {
  //       // res.data.message
  //       this.setState({
  //         players: res.data
  //       });
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Players</h1>
  //       <input
  //         type="text"
  //         value={this.state.playerText}
  //         onChange={this.handleChanges}
  //       />
  //       <button onClick={this.fetchPlayers}>Players</button>
  //       <div >
  //         {this.state.players.map(player => (
  //           <img width="200" src={player} key={player} alt={player} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
