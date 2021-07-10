Amazon Scraper using Scraper API

JavaScript API with Node and Express

Website: https://amazon-product-scraper.herokuapp.com/

Goal: To create endpoints for the following:
       1. Product Details:
       2. Product Reviews
       3. Product Offers
       4. Implement Search Query 

Application Deployed on: Heroku

Dependencies Required for Node Backend Server: 
       1. express
       2. request
       3. request-promise 
       4. nodemon



// CREATE NODE, EXPRESS BACKEND JS SERVER   //

1. Generate package.json file
   npm init -y 

2. In package.json, replace 
   "test": "echo \"Error: no test specified\" && exit 1" 
     with
   "start": "node index.js"   

3. Install dependencies 
   npm install express request request-promise nodemon
   npm install -g nodemon
   npm install express
   npm install request-promise

   express - backend framework for nodeJS
   request- promise - to make API request 
   nodemon - to reload terminal everytime when changes are made in the code. 


4. Add installed packages under scripts in package.json file.
   "dev": "nodemon index.js",

5. Create index.js file (API)

6. Run Application
   npm run dev

7. In browser type the following URL:
   localhost:5000

8. Use Scraper API 
   - used to scrape HTML of any website and turn it into useful json information.


//  ADD ROUTES / ENDPOINTS  //


//  Test routes: //

Product Name: 2021 11.6 inch Laptop, HD Display, Intel 64-bit Quad-core celeron_j3455 Processor, 8GB RAM, 128GB M.2 SSD, scalable 256GB M.2 SSD Solid State Drive, 5000mAh high Battery Life, Windows 10 Pro

1. Product Details:
   http://localhost:5000/products/B08RXR363N

2. Product Reviews
   http://localhost:5000/products/B08RXR363N/reviews

3. Product Offers
   http://localhost:5000/products/B08RXR363N/offers

4. Implement Search Query
   http://localhost:5000/search/macbook%20air


//  Remove api key 


//  DEPLOYMENT ON HEROKU & HOSTING

1. Sign Up or Login with your credentials.
2. Create App
3. App name: amazon-product-scraper
   Choose a region: Europe
   Create app
4. Download and Install Heroku CLI


// Git Repository

Inside Terminal:
Create a new Git repository
Initialize a git repository in a new or existing directory

> cd amazon_scrapper
> git init
> heroku git:remote -a amazon-product-scraper


Add .gitignore file
Add node_modules to the ignore list so as to avoid pushing it 



Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

> git add .
> git commit -am "Amazon Scraper using Scraper API"
> git push heroku master


// RapidAPI Marketplace
1. SignUp/Login with your credentials.
2. Click on My APIs
3. Add New API 
   API Name: Amazon Product Scraper
   Short Description: 'Amazon Product Scraper' is the easiest way to get access to product, 
   price, sales rank and reviews from Amazon.com in JSON Format.  
   Category: eCommerce
   Specify Using: UI 
   Add API

   Long Description: [OPTIONAL]
   Upload Image: amazon.png
   Website: https://amazon-product-scraper.herokuapp.com/
   Terms of Use: [OPTIONAL]
   Save

4. Add Base URL
   Configure
   URL: https://amazon-product-scraper.herokuapp.com/  (Same as Website)
   Save

5. Specify Endpoints:
   Endpoints
   Create REST Endpoints 

   Endpoints to be added are as follows:
   1. Get Amazon Product Details
      Name: Get Amazon Product Details
      Description:https://amazon-product-scraper.herokuapp.com/products/B08RXR363N 
      GET: /products/{productId}

      Name: ProductId
      Type: STRING
      Example Value: B08RXR363N
      Save To Test Endpoint 
      Test Endpoint 

   Specify API key:
   Query
   Name: api_key 
   Type: STRING
   Example Value:
   Required: Check the box

   Response:
   Example Responses
   Add New Response Code 
   Code: 200
   Add Response Code

   Example Responses
   Body: Copy Response
   Generate Schema
   Payload Description: MacBook Air Product Details
   Example: MacBook Air Product Details

   Save


2. Get Amazon Search Results
      Name: Get Amazon Search Results
      Description:https://amazon-product-scraper.herokuapp.com/search/macbook%20air 
      GET: /search/{searchQuery}

      Name: SearchQuery
      Type: STRING
      Example Value: macbook air 
      Save To Test Endpoint 
      Test Endpoint 

Specify API key:
   Query
   Name: api_key 
   Type: STRING
   Example Value:
   Required: Check the box

   Response:
   Example Responses
   Add New Response Code 
   Code: 200
   Add Response Code

   Example Responses
   Body: Copy Response
   Generate Schema
   Payload Description: MacBook Air Product Details
   Example: MacBook Air Product Details

   Save

3. Get Amazon Product Reviews
      Name: Get Amazon Product Reviews
      Description:https://amazon-product-scraper.herokuapp.com/products/B08RXR363N/reviews 
      GET: /products/{productId}/reviews

      Name: SearchQuery
      Type: STRING
      Example Value: macbook air 
      Save To Test Endpoint 
      Test Endpoint 

Specify API key:
   Query
   Name: api_key 
   Type: STRING
   Example Value:
   Required: Check the box

   Response:
   Example Responses
   Add New Response Code 
   Code: 200
   Add Response Code

   Example Responses
   Body: Copy Response
   Generate Schema
   Payload Description: MacBook Air Product Reviews
   Example: MacBook Air Product Reviews
   Save

4. Get Amazon Product Offers
      Name: Get Amazon Product Offers
      Description:https://amazon-product-scraper.herokuapp.com/products/B08RXR363N/offers 
      GET: /products/{productId}/offers

      Name: SearchQuery
      Type: STRING
      Example Value: macbook air 
      Save To Test Endpoint 
      Test Endpoint 

Specify API key:
   Query
   Name: api_key 
   Type: STRING
   Example Value:
   Required: Check the box

   Response:
   Example Responses
   Add New Response Code 
   Code: 200
   Add Response Code

   Example Responses
   Body: Copy Response
   Generate Schema
   Payload Description: MacBook Air Product Offers
   Example: MacBook Air Product Offers
   Save



// Set the Pricing Tiers
1. Plans and pricing (based on the number of requests made)
2. BASIC Plan 
   Object Name: Requests 
   Quota Type: Monthly
   Quota Limit: 1000
   Limit Type: Hard Limit
   Save

3. PRO Plan
   Object Name: Requests 
   Quota Type: Monthly
   Quota Limit: 10000
   Limit Type: Soft Limit
   Overages: $0.01
   Save

3. ULTRA Plan
   Object Name: Requests 
   Quota Type: Monthly
   Quota Limit: 50000
   Limit Type: Soft Limit
   Overages: $0.01
   Save

// Start Selling

//  Make your API public 
1. Click toggle switch to 'public' mode.
2. View in marketplace. (Top right corner)



