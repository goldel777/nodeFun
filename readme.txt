
1) npm init --yes
2) npm install express # webserver
3) npm install mongodb
4) npm install nodemon # monitor server to restart when updating
5) create app.js



const express = require('express');
const app = express();

console.log("running");
app.get('/', (req, resp) => {
   resp.send("Welcome HOME!");
});


const port = process.env.PORT || 3000;
console.log("My App Running on", port);
app.listen(3000, () => {
    console.log("Starting my app");
});


5b) add to package.json
"start":"node app.js",
6) nodemon app.js
7) go to aws ELB - create application
8) also codepipeline - name, source provider, put project repo - 
9  use github - authorize aws codesuite
 OR create git repo locally

   echo "# node" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   // didn't work -> created repo on github and cloned it
   XXX git remote add origin https//gihub.com/goldel777/nodeFunToo.git
   XXX git push -u origin master
-- generate ssh key for mac to use github

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

git remote set-url origin git@github.com:goldel777/nodeFun.git


10) npx gitignore node


11) create application and env in ElasticBeanStalk - configure the port in env Configuration/Software/properties
12) create codepipeline - github 1 - skip build, add elb application as deployment, see if deploye
