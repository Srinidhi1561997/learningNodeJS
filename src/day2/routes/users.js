const validation = require('../services/validation');
const handlers = require('../services/middleware');

const userRoutes = (app, fs) => {

    app.get('/users/getUser/:email?', validation.validateGet, handlers.getUserMethod);
    app.post('/users/createUser', validation.validateCreate, handlers.createUserMethod);
    app.put('/users/updateUser/:email', validation.validateUpdate, handlers.updateUserMethod);
    app.delete('/users/removeUser/:email', validation.validateDelete, handlers.removeUserMethod);
//     app.get('/getUsers', (req, res) => {
//       service.readFile(data => {
//         res.send(data);
//       },true,dataPath);
//     });

//   app.get("/user/:email?", (req, res) => {
//     service.readFile(data => {
//       if (req.params.email) {
//         const user = data.find((c) => c.email === req.params.email);
//         if (!user)
//           res
//             .status(404)
//             .send(
//               '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
//             );
//         res.send(JSON.stringify(user));
//       } else res.send(data);
//     },true,dataPath);
//   });

//   //The addUser endpoint
//   app.post("/addUser", (req, res) => {
//     service.readFile(data=> {
//       const addUser = data;
//       addUser.push(req.body);
//       service.writeFile(JSON.stringify(addUser, null, 2), () => {
//         res.status(200).send('new user added');
//       },dataPath);
//     },true,dataPath);
//   });

//   //UPDATE Request Handler
//   app.put("/editUser/:email", (req, res) => {
//     service.readFile(data => {
//       const user = data.find((c) => c.email === req.params.email);
//       if (!user)
//         res
//           .status(404)
//           .send(
//             '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant edit what you are looking for!</h2>'
//           );
//       const updatedUser = data.map((item, index) => {
//         if (item.email == user.email) {
//           if (req.body.firstname) item.firstname = req.body.firstname;
//           if (req.body.lastname) item.lastname = req.body.lastname;
//           return item;
//         }
//         return item;
//       });
//       service.writeFile(JSON.stringify(updatedUser), () => {
//         res.status(200).send(' user updated successfully');
//       },dataPath);
//       res.send(user);
//     },true,dataPath);
//   });

//   app.delete("/deleteUser/:email", (req, res) => {
//     service.readFile(data => {
//       const deletedUser = data.filter(
//         (item, index) => item.email !== req.params.email
//       );
//       service.writeFile(JSON.stringify(deletedUser), () => {
//         res.status(200).send(' user deleted successfully');
//       },dataPath);
//     },true,dataPath);
//   });
};

module.exports = userRoutes;


