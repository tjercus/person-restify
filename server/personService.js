
module.exports = () => {
  const persons = [
    {id: 1, name: "John", email: "john@organisation.org"},
    {id: 2, name: "Luke", email: "luke@coolcompany.org"},
    {id: 3, name: "Alex", email: "alex@partnercompany.org"},
  ];

  return {
    getPersons: () => persons,
    findPersonByName: name => persons.find(person => person.name === name)
  }
};
