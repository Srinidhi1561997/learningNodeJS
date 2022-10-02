const service = require("./service");
const dataPath = "./data/users.json";

const userList = service.readFile(true, dataPath);
const writeUserList = (data) => service.writeFile(data, dataPath);

const userExist = (email) => {
  const users = userList;
  if (email) {
    const user = users.find((c) => c.email === email);
    if (!user) return [];
    else return [user];
  } else return users;
};

exports.getUserMethod = (req, res, next) => {
  const { email } = req?.params;
  if (!req?.params?.email) {
    const users = userList;
    res.status(200).send(users);
  } else {
    const user = userExist(email);
    if (user.length > 0) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not exist");
    }
  }
};

exports.createUserMethod = (req, res, next) => {
  const users = userList;
  users.push(req?.body);
  writeUserList(users);
  res.status(200).send("User created successfully");
};

exports.removeUserMethod = (req, res, next) => {
  const { email } = req?.params;
  if (!req?.params?.email) {
    res.status(404).send("Please enter valid email");
  } else {
    const user = userExist(email);
    console.log("lenth of iuser is", user);
    if (user.length === 1) {
      const deletedUser = userList.filter(
        (item, index) => item.email !== email
      );
      writeUserList(deletedUser);
      res.status(200).send("User removed successfully");
    } else {
      res.status(400).send("User does not exist");
    }
  }
};
exports.updateUserMethod = (req, res, next) => {
  const { email } = req?.params;
  if (!req?.params?.email) {
    res.status(404).send("Please enter valid email");
  } else {
    const updatedUser = userList.map((item, index) => {
      if (item.email == email) {
        if (req.body.firstname) item.firstname = req.body.firstname;
        if (req.body.lastname) item.lastname = req.body.lastname;
        if (req.body.age) item.age = req.body.age;
        return item;
      } else {
        return item;
      }
    });
    writeUserList(updatedUser);
    res.status(200).send("User updated successfully");
  }
};
