# REA Challenge

### Instructions for downloading and running this app

1. Clone this repository to local computer  

```
git clone THIS_GIT_REPO_URL
```

2. Install dependencies using yarn

```
yarn install
```

3. Start development server and start coding in /app
```
yarn start
```

4. Run tests in /test
```
yarn test
```

5. Build the app for production use
```
yarn run build
```

Files are built out to the `/build` directory

---
### Approach

I am doing this REA challenge using React. 

In building this app, I started with one main class that contains all the components with some objects data that are held in an array. Then I abstracted some of the components to some separate stateless functions while the main class still holding all the states. I also abstracted the functionality of the adding property from results list to the saved list, and removing properties from saved list to state-functions file.

After finished building the app, I created test file to test my state-functions using mocha, chai. It took sometime to set up the test environment and get the expected result.


---

### Technologies used

Bundler: Webpack, Babel  
Library: React, Bootstrap, Sass, Mocha, Chai

---
