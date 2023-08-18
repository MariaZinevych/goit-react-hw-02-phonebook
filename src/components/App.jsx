import { Component } from 'react';
import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newQuiz],
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onAdd={this.addQuiz} />
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
        <GlobalStyle />
      </>
    );
  }
}
