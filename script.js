const faker = require("faker");
const fs = require("fs");

const amountOfUsers = 15;

const users = [];

for (let i = 0; i <= amountOfUsers; i++) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    card: faker.helpers.createCard(),
    company: faker.company.companyName(),
  };

  users.push(user);
}

fs.writeFile("./users.json", JSON.stringify(users), (err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully created users");
});
