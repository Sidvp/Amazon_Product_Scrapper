const express = require('express'); // express - used to create backend application
const request = require('request-promise'); // request-promise - used to make API request 

// Initialize Application
const app = express();
const PORT = process.env.PORT || 5000;   // Constant  (will be replaced by dynamic port at later stages)

// api key

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`
app.use(express.json()); // allows application to parse json input. 

// every express application needs atleast one route.
app.get('/', (req, res) =>{
    // Callback function
    res.send('Welcome to Amazon Scrapper API.'); // when user visits url or api at '/'
});

// ROUTES:
// GET Product Details
app.get('/products/:productId', async(req, res)=>{
    // Callback Function
    const { productId } = req.params;
    const { api_key } = req.query;

    try{
        // const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});


// GET Product Reviews
app.get('/products/:productId/reviews', async(req, res)=>{
    // Callback Function
    const { productId } = req.params;
    const { api_key } = req.query;

    try{
        // const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);

        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});


// GET Product Offers
app.get('/products/:productId/offers', async(req, res)=>{
    // Callback Function
    const { productId } = req.params;
    const { api_key } = req.query;

    try{
        // const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});


// GET Search Results
app.get('/search/:searchQuery', async(req, res)=>{
    // Callback Function
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    try{
        // const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);

        res.json(JSON.parse(response));
    }catch(error){
        res.json(error);
    }
});



// to start the server and check for the requests at specific port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


