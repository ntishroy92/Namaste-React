Episode-2

---package.json is the configuration file of npm.

---most common package in you project is bundler.
Bundler  compresses our code and bundle together to make our code production to ready.

---create react app is uses babel and webpack to build things up.
---parcel we will usig in this project.
---two type od depedencies. dev-dependencies and norma devendencies
dev dependencies are the dependencies that are require for development of an application. normal dependencies are required for production.

^ (carrot)sign is 
~(tild)
package.json ==> it's a configuration for npm and keep gtrack of version of package. if carrot (^) sign is there then it will update minor version of package automatically and if ~(tild) sign is there it will update major version of that package automatically.
package-lock.json ==>It keep track the exact version of package installed in application. package version in package-lock.json file will not contain any sign i.e ~ or ^.

--- transitive dependencies are the dependencies which are dependent of other dependencies and other dependencies has dependent of one more dependencies and this cycle continues until the last dependencies does not have any more dependencies.

--- we shouldn't commit the code to github or any other repository with node_modules. but we should have package.json and package-lock.json with our code in github. Because if we have both file we can regenerate node_module once we run the command npm install.


#parcel is doing some amazing thing for us 
  --dev build
  -- creating local server
  --doing HMR = Hot Module Replacement
  -- it is using File wathcing Algorithm which is written in c++
  -- It is giving faster build by caching
  -- It is also doing imaze optimization
  --It does minify our app
  -- It is also compress our file.
  -- it also uses continuous hashing
  === code splitting
  ---- deffrential bundling- to support older browsers
  --- Diagnose
  --- Good error handling
  --- https
  --- it does tree shaking also.(remove unused code)
  and it doesno do all thing by itself but it uses different packages to do all those tasks.