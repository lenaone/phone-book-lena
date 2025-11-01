import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import usePhonebookStore from '../stores/usePhonebookStore.jsx';

const ContactForm = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const { addContact } = usePhonebookStore();

    const handleAddContact = () => {
        if (!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
        setName('');
        setPhoneNumber('');
    }

  return (
    <Box border='1px solid #e0e0e0' borderRadius='8px' marginBottom='24px' padding='24px' display="flex" flexDirection="column" gap={2}>
      <h2>새 연락처 추가</h2>
      <TextField id="name" label="이름" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField 
        id="phone-number" 
        type="number" 
        label="전화번호" 
        variant="standard" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)}
        helperText="'-' 없이 숫자만 입력해주세요"
      />
      <Button variant="contained" onClick={handleAddContact}>추가</Button>
    </Box>
  )
}

export default ContactForm