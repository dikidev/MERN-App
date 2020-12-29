
# MERN-App
Project showcasing the MERN tech stack using Mac 
![mern-architecture](https://user-images.githubusercontent.com/8579501/70398555-6ca69980-1a68-11ea-91fb-71fc7aa16486.png)

Mongo | Node | Express | React

### Tools:

* VS Code 
* Node (_check the version:_ `node -v`
* Robo3T (database in visual perspective)
* Postman - frontend requests to backend
* Homebrew

# Getting Started: 
1. `brew tap mongodb/brew`
`brew install mongodb-community`
2. Create Database path on Mac OS Catalina
`sudo mkdir -p /System/Volumes/Data/data/db`
3. Find out Mac Username
`whoami`
4. Change Ownership in to writeonly mode for MongoDB 
`sudo chown -R d /System/Volumes/Data/data/db `

Potential Errors:

Resolves Datapath of folder error:
`mongod --dbpath /System/Volumes/Data/data/db` 
Default path 
`brew services start mongodb-community`

Terminal will run and then not open, CMD + N 
`mongo` and hit enter

**Here are some db cmds in mongo:**

_adds mongoDB as services into brew system when ever needed_
`brew services start mongodb-community` 

Making a alias mongod command of:
typing mongo in terminal should result in running command below
`sudo mongod --dbpath /System/Volumes/Data/data/db`

1. `cd`
2. `sudo vim .zshrc`
3. i for insert mode 
4. `alias mongod= "mongod --dbpath /System/Volumes/Data/data/db"`
5. Press esc :wq for write & quit

### MAC OS

# Check status

`brew services list`

Something like:

`Name    Status  User Plist
mongodb stopped`
start it

`brew services start mongodb`

Try it again

`mongo or mongo --port 27017`


### Mongoose Schema
<a href="https://mongoosejs.com/docs/guide.html">Mongoose Documentation</a>

Getting the id property of the user. "Virtual attributes" (as commonly defined in JS, anyway) is a property that looks like an attribute, but may be computed (via setting, getting, or both).

Virtul Setters & Getters
<a href="https://mongoosejs.com/docs/api.html#schema_Schema-virtual">Virtual field which uses salt cryptography stored securely in DB</a>

<a href="">UUID</a>
![uuid](https://cdn.journaldev.com/wp-content/uploads/2017/11/java-uuid.png.webp)

#### 'npm crypto' 
https://nodejs.org/api/crypto.html#crypto_class_hash

#### All modules are created now Database Connectivity
https://mongoosejs.com/docs/connections.html

Common in JavaScript is to keep it chaining
`myfun.run().then().catch()`

`mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });`
  
  
  
  






