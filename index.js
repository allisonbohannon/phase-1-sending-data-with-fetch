// Add your code here

function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        body: JSON.stringify({
            name: name, 
            email: email
        }), 
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const newUser = document.createElement('p');
        const newEmail = document.createElement('p')
        const newId = document.createElement('p')
        newUser.textContent = object.name; 
        newEmail.textContent = object.email; 
        newId.textContent = object.id; 
        document.querySelector('body').appendChild(newUser).appendChild(newEmail).appendChild(newId);

      })
      .catch(function (error) {
        const err = document.createElement('h1'); 
        err.textContent = error.message; 
        document.querySelector('body').appendChild(err);
      })
}; 

submitData('Allison', 'Allison@email.com')