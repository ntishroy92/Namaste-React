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

===========================================================================

episode -3
-----------
--npx is execution the parcel package  and we gave source file as index.html

--you can configure the npx command in package.json under script object. you can specify the command which you will be running under that special key. like "start":"parcel index.html".
--- and you cn run that script using npm followed by the script you want to run. like npm run start .
---you can run npm run start or npm start to run the development server and you are good to go.
---but you can run npm start command by ommitiing run  only if you are running development server but if you are running build you have to use run also like npm run build start.
 --- React Element are kind of equall to dom element.
---  React Element is not a plain element. It's a object but when we render that element then it converts to the element.
--- JSX is not HTML inside Javascript. Its HTML/xml like syntax.
--- JSX behind the secene converted into object(reactElement).

--- As we write code in jsx then parcel using babel job to convert this jsx file  into to format that browser will understand and displayed on browser(js engine).this conversion is known as transpiling.
jsx=>react.rectElement=>convered to js element and rendered as html. This covrsion is done by babel.
--- In jsx if we write attribute we should use camlecase like className,tabIndex etc. So we can it is not hmtl but html like structure.
--- if you write jsx in sigle line you can write simple but for multiline you have to use paranthesis.

=================
 React Components
=================
1. Class component --> Old way of writing cooe
2. Fuctional Component --> New way of writing code
--- React Fuctional  Component is just a Normal function of javascript which return some pice of jsx code.
--- The function which return some jsx or React Element is called as functinal component.
--- component composition When you composing two component into one another.

--- we can write any experssion of javascript inside JSX usinf curly braces {};


