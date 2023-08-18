import { Component } from 'react';
import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return (
      <>
        <Phonebook />

        <GlobalStyle />
      </>
    );
  }
}
