function highestScore(score) {
    let maxIam = scores[0];
    for(let i = 1; i<scores.length ; i++) {
        if(maxIam < scores [i]) {
            maxIam = scores[i];
        }
    }
    return maxIam
}

let scores = [21,43,54,100];
let maxScores =  highestScore(scores);
console.log(maxScores); 





function highestScorer (score) {
    let highestS = playersInfo[0][0];
    let hightNumber = playersInfo[0][1];

    for(let x = 1; x < playersInfo.length; x++){

        if(hightNumber < playersInfo[x][1]){
            highestS = playersInfo[x][1];
            hightNumber = playersInfo[x][0];
        }

    }

    return highestScorer; 
    
}

let playersInfo = [
    ["Ashraful",9],
    ["Jamal",20],
    ["Kamal",109],
    ["Ashraful",30],
];

let name =  highestScorer(playersInfo);

console.log(name);





//@Object practice*********
// Object Literals

const mySym = Symbol("Key1");

const jsUser = {
    name: "Foysal",
    "full Name": "Foysal Hossain",
    [mySym]: "myKey1",
    age: 21,
    location: "Manikgonj",
    email: "fh@google.com"
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);

jsUser.email = "Tomal@gmail.com";
Object.freeze(jsUser);
jsUser.email= "Tomal@microsoft.com";
console.log(jsUser);



//   *This [signal tran ] Object*

// (const tinderUser = {}) *This is [none signal] tran Object*

const tinderUser = {}

tinderUser.id = "12356"
tinderUser.name = "Foysal"
tinderUser.address = "Bangladesh"

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Foysal",
            lastName: "Hossain"
        }
    }
}

console.log(regularUser.fullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1,obj2,obj3);

// const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


const users = [
    {
        ids: 1,
        email: "Foysal@gmail.com",
    },
    {
        ids: 1,
        email: "Foysal@gmail.com",
    },
    {
        ids: 1,
        email: "Foysal@gmail.com",
    },
    {
        ids: 1,
        email: "Foysal@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));


