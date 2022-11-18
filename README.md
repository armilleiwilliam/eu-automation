## About Eu automation project
Hi,
how are you? For this type of project I have decided to have both Laravel and React on the same application, usually I 
work having them on separate environments, like a RestFull Api where a React Website communicate with a Laravel Microservice
using axios, but for this project I realised it was more practical to have them both together. If you are interested to
see how familiar I am in working with React and Laravel in two different applications check on my github account 
(https://github.com/armilleiwilliam?tab=repositories) on the repositories volopa_front (React) and volopa_backend (Laravel), 
it's project I have worked on recently which uses tokens (sanctum) for authentication. 

Firstly I apologize if probably I was not able to find all the icons related to weather conditions (you will see what I mean when opening the project), 
I have tried my best last night to get on internet as many as I could, cropping and resizing them with photoshop, but there were too many
to find in such a little time, I have tried to cover most of conditions though.
I really enjoyed this challenge :-)
There are several things I have would have improved if I had more time though :-)
I have tried to cover the most (or all) the requirements, even responsiveness, I have used both Tailwind and Bootstrap.
The Api Weather that I have chosen is https://www.aerisweather.com/, I have created an account which is free for a month,
the credentials are already set in the project. Due to the lack of time I managed to retrieve weather conditions only
for counties, I was planning to do per city also but it was taking too long. 


### Installation
- git clone git@github.com:armilleiwilliam/eu-automation.git (repository is public no need ssh key)
- set DB connection on your env. file after creating a database for this project
- composer install (it will install both sail and breeze for authentication)
- php artisan migrate (will install the basic authentication/registration tables)
- npm install && npm run dev (this will install all dependencies and initiate vite)
- then open another terminal window (do not interrupt "vite" closing the previous one) and run php artisan serve
- click on http://127.0.0.1:8000/
- probably you will be asked to generate the app key, click then on the related button "GENERATE APP KEY" to the top 
right corner of the browser, then refresh the page

### Access
- if the procedure above have been followed correctly you will be redirected to the Login page
- click on "create account" and then create your own profile 
- once the account is created you will see the dashboard with the list of "shires" to select
- once a shire is selected the container will be populated with a weekly weather forecast by county per day
- enjoy!!  :-)

### Testing with PhpUnit:
- for testing on Laravel I have used “sqlite” and database “:memory:” (see phpunit.xml), so, there is no need to set any  
  physical database because it uses the memory of your machine. But in order to have it working you need to have
  php-sqlite3 installed, if you don’t have it run “sudo apt-get install php-sqlite3”, you might need to enable it on your
  php.ini. Otherwise, create a database for testing and add it to phpunit.xml file replacing ":memory:" line, then comment
  the DB_CONNECTION “sqlite” line.
- considering I have used Laravel backend mainly for login and registering the tests are based only on these two procedures
- just run "pnp artisan test"
- for lack of time I could not set a testing code for React part


### THE PROJECT IS WORKING ON MY MACHINE, IN CASE YOU HAVE ANY ISSUE JUST LET ME KNOW. 
(On the screenshots folder on the root of the project you can see how it looks on my machine)

