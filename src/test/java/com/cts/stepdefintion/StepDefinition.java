package com.cts.stepdefintion;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.cts.pages.DashBoardPage;
import com.cts.pages.HomePage;
import com.cts.pages.LoginPage;
import com.cts.pages.RegisterPage;
import com.cts.pages.SearchPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {

	WebDriver driver;

	@Given("I have browser with opencartpage")
	public void i_have_browser_with_opencartpage() {

		
//		ChromeOptions options=new ChromeOptions();
//		Map<String,Object> prefs=new HashMap<String,Object>();
//		prefs.put("Your connection is not private", 0);
//		options.setExperimentalOption("prefs", prefs);
		
		System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
		ChromeOptions chrome = new ChromeOptions(); 
		chrome.setAcceptInsecureCerts(true);
		driver = new ChromeDriver(chrome);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://opencart.abstracta.us/");

	}

	@When("I enter {string} and {string} and {string} and {string} and enter {string} and {string} and {string} and {string} and {string} and enter {string} and {string}")
	public void i_enter_and_and_and_and_enter_and_and_and_and_and_enter_and(String firstname, String lastname,
			String email, String telephone, String address, String city, String postcode, String countryname,
			String Regionname, String password, String cnfrmpwd) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnRegister(driver);

		RegisterPage.enterfirstname(driver, firstname);

		RegisterPage.enterlastname(driver, lastname);

		RegisterPage.enteremail(driver, email);

		RegisterPage.entertelephone(driver, telephone);

		RegisterPage.enteraddress(driver, address);

		RegisterPage.entercity(driver, city);

		RegisterPage.postcode(driver, postcode);

		RegisterPage.country(driver, countryname);

		RegisterPage.explicitWaiting(driver);

		RegisterPage.Region(driver, Regionname);

		RegisterPage.password(driver, password);

		RegisterPage.confirmpassword(driver, cnfrmpwd);

		RegisterPage.checkbox(driver);

		RegisterPage.Continue(driver);

	}

	@Then("my account has created")
	public void my_account_has_created() {

		String actualTitle = HomePage.getRegisterTitle(driver);
		Assert.assertEquals("Your Account Has Been Created!", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("user enter {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string}")
	public void user_enter_and_and_and_and_and_and_and_and_and_and(String firstname, String lastname, String email,
			String telephone, String address, String city, String postcode, String countryname, String Regionname,
			String password, String cnfrmpwd) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnRegister(driver);

		RegisterPage.enterfirstname(driver, firstname);

		RegisterPage.enterlastname(driver, lastname);

		RegisterPage.enteremail(driver, email);

		RegisterPage.entertelephone(driver, telephone);

		RegisterPage.enteraddress(driver, address);

		RegisterPage.entercity(driver, city);

		RegisterPage.postcode(driver, postcode);

		RegisterPage.explicitWait(driver);

		RegisterPage.country(driver, countryname);

		RegisterPage.explicitWaiting(driver);

		RegisterPage.Region(driver, Regionname);

		RegisterPage.password(driver, password);

		RegisterPage.confirmpassword(driver, cnfrmpwd);

		RegisterPage.checkbox(driver);

		RegisterPage.Continue(driver);
	}

	@Then("I get Invalid credentials")
	public void i_get_Invalid_credentials() {

		String actualTitle = HomePage.getInvalidRegisterTitle(driver);
		Assert.assertEquals("Warning: E-Mail Address is already registered!", actualTitle);
		System.out.println(actualTitle);
		driver.quit();

	}

	@When("I enter {string} and password {string}")
	public void i_enter_and_password(String username, String password) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

	}

	@Then("I should access to the portal with title with My Account")
	public void i_should_access_to_the_portal_with_title_with_My_Account() {

		String actualTitle = HomePage.getCurrentTitle(driver);
		Assert.assertEquals("My Account", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("user enter {string} and Password {string}")
	public void user_enter_and_Password(String username, String password) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

	}

	@Then("I should  not  get access to the portal")
	public void i_should_not_get_access_to_the_portal() {

		String actualTitle = HomePage.getInvalidLoginTitle(driver);
		Assert.assertEquals("Warning: No match for E-Mail Address and/or Password.", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I search the product as {string}")
	public void i_search_the_product_as(String productname) {

		SearchPage.searchText(driver, productname);

		SearchPage.searchBox(driver);
	}

	@Then("I should get the products")
	public void i_should_get_the_products() {

		String actualTitle = SearchPage.getSearchRelatedTitle(driver);
		Assert.assertEquals("Products meeting the search criteria", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I search for the product as {string}")
	public void i_search_for_the_product_as(String productname) {

		SearchPage.searchText(driver, productname);

		SearchPage.searchBox(driver);
	}

	@Then("I should get message as There is no product that matches the search criteria")
	public void i_should_get_message_as_There_is_no_product_that_matches_the_search_criteria() {

		String actualTitle = SearchPage.getinvalidSearchRelatedTitle(driver);
		Assert.assertEquals("There is no product that matches the search criteria.", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Desktops")
	public void i_click_on_the_product_Desktops() {

		HomePage.clickOnDesktops(driver);

		HomePage.clickOnseeall(driver);

	}

	@Then("I should get all Desktops")
	public void i_should_get_all_Desktops() {
		String actualTitle = HomePage.getDesktopTitle(driver);
		Assert.assertEquals("Desktops", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Laptops and Notebooks")
	public void i_click_on_the_product_Laptops_and_Notebooks() {
		HomePage.clickOnLaptopsandNotebooks(driver);

		HomePage.clickOnShowAll(driver);
	}

	@Then("I should get all Laptops and Notebooks")
	public void i_should_get_all_Laptops_and_Notebooks() {
		String actualTitle = HomePage.getLaptopTitle(driver);
		Assert.assertEquals("Laptops & Notebooks", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Components")
	public void i_click_on_the_product_Components() {
		HomePage.clickOnComponents(driver);
		HomePage.clickOnMonitors(driver);
		HomePage.clickOnAddtoCart(driver);
	}

	@Then("I should get all Components")
	public void i_should_get_all_Components() {
		String actualTitle = HomePage.getComponentsTitle(driver);
		Assert.assertEquals("Monitors", actualTitle);
		System.out.println(actualTitle);
		driver.quit();

	}

	@When("I click on the product Tablets")
	public void i_click_on_the_product_Tablets() {
		HomePage.clickOnTablets(driver);
	}

	@Then("I should get all Tablets")
	public void i_should_get_all_Tablets() {
		String actualTitle = HomePage.getTabletsTitle(driver);
		Assert.assertEquals("Tablets", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Software")
	public void i_click_on_the_product_Software() {
		HomePage.clickOnSoftware(driver);
	}

	@Then("I should get the text")
	public void i_should_get_the_text() {
		String actualTitle = HomePage.getSoftwareTitle(driver);
		Assert.assertEquals("There are no products to list in this category.", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Phones and PDAs")
	public void i_click_on_the_product_Phones_and_PDAs() {
		HomePage.clickOnPhones(driver);
	}

	@Then("I should get all Phones and PDAs")
	public void i_should_get_all_Phones_and_PDAs() {
		String actualTitle = HomePage.getPhonesTitle(driver);
		Assert.assertEquals("Phones & PDAs", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product Cameras")
	public void i_click_on_the_product_Cameras() {
		HomePage.clickOnCameras(driver);
	}

	@Then("I should get all Cameras")
	public void i_should_get_all_Cameras() {
		String actualTitle = HomePage.getCameraTitle(driver);
		Assert.assertEquals("Cameras", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on the product MP3 Players")
	public void i_click_on_the_product_MP3_Players() {
		HomePage.clickOnMP3Players(driver);

		HomePage.clickOnAllMP3(driver);

		HomePage.clickOnipodCart(driver);

		HomePage.clickOnlaptopWishList(driver);
	}

	@Then("I should get all MP3 Players")
	public void i_should_get_all_MP3_Players() {
		String actualTitle = HomePage.getAllMP3Title(driver);
		Assert.assertEquals("MP3 Players", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on Contact us")
	public void i_click_on_Contact_us() {

		HomePage.contactForm(driver);

	}

	@Then("I should get Contact Form")
	public void i_should_get_Contact_Form() {
		String actualTitle = HomePage.getContactFormTitle(driver);
		Assert.assertEquals("Contact Us", actualTitle);
		System.out.println(actualTitle);
		driver.quit();

	}

	@When("I enter {string} and {string} and click on WishList")
	public void i_enter_and_and_click_on_WishList(String username, String password) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

		HomePage.clickOnMP3Players(driver);

		HomePage.clickOnAllMP3(driver);

		HomePage.clickOnipodTouchWishList(driver);

		HomePage.CheckInWishList(driver);

	}

	@Then("I should get My WishList")
	public void i_should_get_My_WishList() {
		String actualTitle = HomePage.getWishListTitle(driver);
		Assert.assertEquals("My Wish List", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I enter {string} and {string} click on shopping cart")
	public void i_enter_and_click_on_shopping_cart(String username, String password) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

		HomePage.clickOnMP3Players(driver);

		HomePage.clickOnAllMP3(driver);

		HomePage.clickOnipodCart(driver);

		HomePage.ClickOnShoppingCart(driver);

		TakesScreenshot ts = (TakesScreenshot) driver;
		File file = ts.getScreenshotAs(OutputType.FILE);
		file.renameTo(new File("image.png"));
	}

	@Then("I should get the products which I added into the cart")
	public void i_should_get_the_products_which_I_added_into_the_cart() {

		String actualTitle = HomePage.getShoppingCartTitle(driver);
		Assert.assertEquals("iPod Touch", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I click on currency")
	public void i_click_on_currency() {

		HomePage.currencyClick(driver);
		HomePage.usdClick(driver);
	}

	@Then("I should able to select the currency")
	public void i_should_able_to_select_the_currency() {

		driver.quit();
	}

	@When("I enter {string} and {string} click on CheckOut")
	public void i_enter_and_click_on_CheckOut(String username, String password) {
		
		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

		HomePage.clickOnMP3Players(driver);

		HomePage.clickOnAllMP3(driver);

		HomePage.clickOnipodCart(driver);

		HomePage.CheckOut(driver);
		
	}

	@Then("I should navigate to payment page")
	public void i_should_navigate_to_payment_page() {
		String actualTitle = HomePage.getCheckOutTitle(driver);
		Assert.assertEquals("Checkout", actualTitle);
		System.out.println(actualTitle);
		driver.quit();
	}

	@When("I enter {string} and {string} and click on logout")
	public void i_enter_and_and_click_on_logout(String username, String password) {

		HomePage.clickOnMyAccount(driver);

		HomePage.clickOnLogin(driver);

		LoginPage.enteremail(driver, username);

		LoginPage.enterpassword(driver, password);

		LoginPage.clickOnLogin(driver);

		HomePage.clickOnMyAccount(driver);

		DashBoardPage.clickOnLogout(driver);
	}

	@Then("I should logout from the page")
	public void i_should_logout_from_the_page() {

		driver.quit();
	}
}
