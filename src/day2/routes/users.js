const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/users.json';
  
    // READ
    app.get('/getUsers', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });


    app.get('/user/:email?', (req, res) =>{
        // First retrieve existing user list
        console.log('create new user');
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(req.params.email){
                const user = JSON.parse(data).find(c => c.email === req.params.email);
                if (!user) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
                res.send( JSON.stringify(user));
            } else res.send(JSON.parse(data));
           
        });
     });

    
    //The addUser endpoint
    app.post('/addUser',(req, res)=>{
        fs.readFile(dataPath, 'utf8', (err, data)=>{
            const addUser = JSON.parse(data);
            addUser.push(req.body);
            fs.writeFile(dataPath, JSON.stringify(addUser), (errWrite)=> {
                if (errWrite) throw errWrite;
                console.log('user is added successfully.');
              })
            res.end(data);
        });
    });

    //UPDATE Request Handler
    app.put('/editUser/:email', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
                const user = JSON.parse(data).find(c => c.email === req.params.email);
                if (!user) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant edit what you are looking for!</h2>');
                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                const updatedUser = JSON.parse(data).map((item, index)=>{
                    if(item.id==user.id){
                        if(user.firstname) item.firstname=user.firstname;
                        if(user.lastname) item.lastname=user.lastname;
                        return item;
                    } return item;
                });
                fs.writeFile(dataPath, JSON.stringify(updatedUser), (errWrite)=> {
                      if (errWrite) throw errWrite;
                      console.log('File is updated successfully.');
                    })
                res.send(user);
        });
    });


    app.delete('/deleteUser/:email', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            const deletedUser = JSON.parse(data).filter((item, index)=>item.email !== req.params.email)
            console.log('deleted user is', deletedUser, JSON.parse(data))
            fs.writeFile(dataPath, JSON.stringify(deletedUser), (errDelete)=> {
                    if (errDelete) throw errDelete;
                    console.log('user deleted successfully.');
                })
            res.send(data);
        });
    });
  };
  
  module.exports = userRoutes;