const person = {
    user: 'John',
    age: 30,
    city: 'New York'
}

console.log(person.user)

// Destructuring
const { user, age, city } = person
console.log(user, age, city)

// Destructuring with a function    

// country: default value
const returnPerson = ({ user, age, city, country = 'USA' }) => {
    console.log(user, age, city, country)
}

returnPerson(person)