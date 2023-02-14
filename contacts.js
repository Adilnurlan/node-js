const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

// listContacts();

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const result = JSON.parse(data);

    const found = result.find((contact) => contact.id === contactId);
    console.table(found);
  } catch (error) {
    console.log(error);
  }
}

// getContactById(5);

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const result = JSON.parse(data);

    const deleteContact = result.filter((contact) => contactId !== contact.id);
    console.table(deleteContact);
  } catch (error) {
    console.log(error);
  }
}

// removeContact(5);

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const result = JSON.parse(data);

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    result.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(result), "utf-8");
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

// addContact("adil", "dafsfdf@fdsf.com", "44544545454");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
