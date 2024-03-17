// Optional Chaining

// Optional chaining is a new feature in JavaScript that allows you to access deeply nested object properties without worrying if the property exists or not. It is a safe way to access deeply nested properties of an object.


const user = {
    name: 'John Doe',
    personalInfo: {
        age: 25,
        hobbies: ['reading', 'travelling']
    }
};

const age = user?.personalInfo?.age;
console.log(age);

// React

function Avatar({ user }) {
    const name = user?.name ?? "Stranger";
    return <img src={user?.avatarURL} alt={name} />;
}
