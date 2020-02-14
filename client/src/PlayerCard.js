import React, { Component } from 'react'

class PlayerCard extends Component{
    render() {
    return (
       <section className='playercard'>
         
               <h1>{this.props.players.name}</h1>
               <h6>{this.props.players.country}</h6>
         
       </section>
    )
    }
}

export default PlayerCard