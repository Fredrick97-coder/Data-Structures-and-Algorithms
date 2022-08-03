const person = ['John', 'Doe', 'sallah'];

function checkPerson(name) {
  if (person.includes(name)) {
    return true;
  } else {
    return false;
  }
}

console.log(`Fist check: ${checkPerson('John')}`);
console.log(`Second check ${checkPerson('Fred')}`);
