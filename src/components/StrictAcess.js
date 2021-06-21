import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class StrictAcess extends Component {
  render() {
    const { user } = this.props;
    
    if ( user.username === 'joao' && user.password === '1234') {
      return <p>Welcome Joao</p>
    } alert ('Acess Denied')

    return (
      <Redirect to='/'/>
    )
  }
}
