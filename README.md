
# MERN-App
Project showcasing the MERN tech stack using Mac 

Mongo | Node | Express | React

# Tools:

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




