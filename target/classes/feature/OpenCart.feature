Feature: OpenCartApplication 
  In order to create a webpage
  As a e-commerce vendor
  I want to get access to the portal
  
  Background: these are the steps common for every scenario to be followed
  Given I have browser with opencartpage 
  
  Scenario Outline: ValidRegisterCredential
  When I enter '<firstname>' and '<lastname>' and '<email>' and '<telephone>' and enter '<address>' and '<city>' and '<postcode>' and '<country>' and '<region>' and enter '<password>' and '<passwordconfirm>'
  Then my account has created
    
  Examples:
  |firstname|lastname|email|telephone|address|city|postcode|country|region|password|passwordconfirm|
  |lill|chintabathina|lil902@gmail.com|7232548101|sidharthanagar|podalada|530244|India|Andhra Pradesh|komali1234|komali1234|
  
  Scenario Outline: InValidRegisterCredential
  When user enter '<firstname>' and '<lastname>' and '<email>' and '<telephone>' and '<address>' and '<city>' and '<postcode>' and '<country>' and '<region>' and '<password>' and '<passwordconfirm>'
  Then I get Invalid credentials 
   
  Examples:
  |firstname|lastname|email|telephone|address|city|postcode|country|region|password|passwordconfirm|
  |lilly|chintabathina|s0nii12@gmail.com|9052349765|sidharthanagar|podalada|532243|India|Delhi|komali1234|komali1234|
  
  Scenario Outline: ValidLoginCredential
 When I enter '<username>' and password '<password>'
 Then I should access to the portal with title with My Account
 
 Examples:
 |username|password|
 |anjanipriya123@gmail.com|anju.555|
 |pravallika12@gmail.com|sunny123|
 |s0nii03021998@gmail.com|christ@07|
 |manasapokanati@gmail.com|manasa.123|
 
 
 Scenario Outline: InvalidLoginCredential
 When user enter '<username>' and Password '<password>'
 Then I should  not  get access to the portal
 
 Examples:
 |username|password|
 |anjanipriya123@gmail.com|anju.554|
 |s0nii03021998@gmail.com|christ@08|
 
 Scenario Outline: SearchValidCredential
 When I search the product as '<product name>'
 Then I should get the products
 
 Examples:
 |product name|
 |samsung|
 |iphone|
 |cameras|
 
 Scenario Outline: SearchInValidCredential
 When I search for the product as '<product name>'
 Then I should get message as There is no product that matches the search criteria
 
 Examples:
 |product name|
 |ring|
 |cars|
 
  Scenario: ClickOnDesktops
   When I click on the product Desktops
   Then I should get all Desktops
   
   Scenario: ClickOnLaptops and Notebooks
   When I click on the product Laptops and Notebooks
   Then I should get all Laptops and Notebooks
   
    Scenario: ClickOnComponents
   When I click on the product Components
   Then I should get all Components
   
    Scenario: ClickOnTablets
   When I click on the product Tablets
   Then I should get all Tablets
   
     Scenario: ClickOnSoftware
   When I click on the product Software
   Then I should get the text
   
    Scenario: ClickOnPhones and PDAs
   When I click on the product Phones and PDAs
   Then I should get all Phones and PDAs
   
   Scenario: ClickOnCameras
   When I click on the product Cameras
   Then I should get all Cameras
   
   Scenario: ClickOnMP3 Players
   When I click on the product MP3 Players
   Then I should get all MP3 Players
   
   
   Scenario: ClickOnContact Us
   When I click on Contact us
   Then I should get Contact Form
   
   Scenario Outline: ClickOnWishList
   When I enter '<username>' and '<password>' and click on WishList
   Then I should get My WishList
   
   Examples:
   |username|password|
   |anjanipriya123@gmail.com|anju.555|
   
   Scenario Outline: ClickOnShopping Cart
   When I enter '<username>' and '<password>' click on shopping cart
   Then I should get the products which I added into the cart
   
   Examples:
   |username|password|
   |anjanipriya123@gmail.com|anju.555|
   
   
   Scenario: ClickOnCurrency
   When I click on currency
   Then I should able to select the currency
   
   Scenario Outline: ClickOnCheckOut
   When I enter '<username>' and '<password>' click on CheckOut
   Then I should navigate to payment page
   
   Examples:
   |username|password|
   |anjanipriya123@gmail.com|anju.555|
   
   Scenario Outline: ClickOnLogout
   When I enter '<username>' and '<password>' and click on logout
   Then I should logout from the page
   
   Examples:
   |username|password|
   |anjanipriya123@gmail.com|anju.555|
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  