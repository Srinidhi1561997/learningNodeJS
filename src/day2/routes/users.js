const validation = require('../services/validation');
const handlers = require('../services/middleware');

const userRoutes = (app, fs) => {
    app.get('/users/getUser/:email?', validation.validateGet, handlers.getUserMethod);
    app.post('/users/createUser', validation.validateCreate, handlers.createUserMethod);
    app.put('/users/updateUser/:email', validation.validateUpdate, handlers.updateUserMethod);
    app.delete('/users/removeUser/:email', validation.validateDelete, handlers.removeUserMethod);
};

module.exports = userRoutes;


