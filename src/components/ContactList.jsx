import React, { useState } from 'react';
import usePhonebookStore from '../stores/usePhonebookStore.jsx';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button } from '@mui/material';

const ContactList = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { phoneBook, editContact, removeContact } = usePhonebookStore();

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRemoveContact = (id) => {
    removeContact(id);
  };

  const handleEditContact = (id) => {
    const updatedName = prompt('Enter new name:');
    const updatedPhoneNumber = prompt('Enter new phone number:');

    if (!updatedName?.trim() || !updatedPhoneNumber?.trim()) return;

    if (!/^\d+$/.test(updatedPhoneNumber)) {
      alert('Phone number must contain only numbers!');
      return;
    }

    editContact(id, { name: updatedName, phoneNumber: updatedPhoneNumber });
  };

  return (
    <div>
      <Box sx={{ width: '100%', display: 'flex', gap: 1, flexWrap: 'nowrap' marginBottom: '20px'}}>
        <input
          className="search-input"
          placeholder="Search by name or number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
      {phoneBook
        .filter(
          (contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phoneNumber.includes(searchTerm)
        )
        .map((contact) => (
          <Box
            key={contact.id}
            mb={2}
            p={2}
            sx={{
              backgroundColor: 'white',
              border: '1px solid rgb(224, 224, 224)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PersonIcon />
              </Box>
              <Box>
                <h3 className="contact-name">{contact.name}</h3>
                <p className="contact-phone">{contact.phoneNumber}</p>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditContact(contact.id)}
              >
                수정
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveContact(contact.id)}
              >
                삭제
              </Button>
            </Box>
          </Box>
        ))}
    </div>
  );
};

export default ContactList;
