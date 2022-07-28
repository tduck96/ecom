# Pretty Prints #
 ### Ecommerce project, online marketspace to sell photography shots. ###

## TechStack: ##
-React
-Node
-Express
-MYSQL

Payment portal integrated from Stripe API. I have payment system set up with the test API key right now. To simulate an actual sale use a repeated 42 for card data. 

FINAL THOUGHTS : 


I built a simple login form but I disabled it for ease of use for those viewing this application. I plan on developing this authorization/authenticiation system. I've considered integrating web-tokens. 

I would like integrate a more complex database system to handle orders in future. I'm interested in learning more about database design. My plan when I started this project was to reach that level of complexity. That's why I used mySQL instead of something more simple like Firebase. 

I could build an administrative site. I could build it out like Etsy, where individual users can POST new products into the marketplace. 

With a growing number of products, I could then build out a pagination feature, and of course both a filter and search component. 

If I started this project over I would begin with adding some sort of state management like Redux, as I'm going to have to reconfigure the project to develop it any further. 

I had some problems with CORS after deployment that I hadn't encountered in the past. I learned a lot about custom OPTIONS requests.   

Deployed on Heroku: 

https://katiesprettyprints.herokuapp.com/
