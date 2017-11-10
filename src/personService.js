/**
 *
 * @returns {Promise.<Array>} Persons as JSON wrapped in a Promise
 */
export const fetchPersons = () => {
  return fetch("http://localhost:3333/persons/")
    .then(response => response.json() )
    .catch(error => {
      console.log("There has been a problem with your fetch operation", error.message);
      return [];
    })
};
