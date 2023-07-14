let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

const data2 = {
    id : 2,
    name : 'muhammad fajar adammullah',
    username : 'adam',
    email : 'mfajaradam@gmail.com',
    address : {
        street : 'pramuka',
        housing : 'gang.jembar',
        city : 'kuningan',
        postCode : 45512,
    },
    phone : '0878-4705-4357',
    website : null,
    hobby : 'badminton',
}

let newData = {...data,...data2};
let {street,city} = newData.address;
let massege = 'i live in ' + city + ' on ' + street + '.'; 

console.log(newData);
console.log(massege);