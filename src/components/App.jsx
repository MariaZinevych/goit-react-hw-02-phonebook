import { Component } from 'react';
import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newQuiz],
      };
    });
  };

  // onChangeFilter = event => {
  //   this.setState({ filter: event.target.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onAdd={this.addQuiz} />
        <h2>Contacts</h2>

        <Filter
        // value={this.state.filter}
        // onChange={this.state.onChangeFilter}
        />
        <ContactList
          onValues={this.state.contacts}
          onFind={this.getVisibleContacts}
        />
        <GlobalStyle />
      </>
    );
  }
}
