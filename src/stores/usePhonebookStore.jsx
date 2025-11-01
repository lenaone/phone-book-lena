import { create } from "zustand";

const usePhonebookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber) => set((state) => ({ phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }] })),
    editContact: (id, updatedContact) => set((state) => ({ phoneBook: state.phoneBook.map( contact => contact.id === id ? {...contact, ...updatedContact} : contact ) })),
    removeContact: (id) => set((state) => ({ phoneBook: state.phoneBook.filter(contact => contact.id !== id) })),
}));

export default usePhonebookStore;
