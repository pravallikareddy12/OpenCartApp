package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegisterPage {

	private static By firstnameLocator = By.id("input-firstname");
	private static By LastNameLocator = By.id("input-lastname");
	private static By emailLocator = By.id("input-email");
	private static By telephoneLocator = By.id("input-telephone");
	private static By addressLocator = By.id("input-address-1");
	private static By cityLocator = By.id("input-city");
	private static By postcodeLocator = By.id("input-postcode");
	private static By countryLocator = By.id("input-country");
	private static By countryLoc = By.id("input-country");
	private static By RegionLocator = By.id("input-zone");
	private static By regionLoc = By.id("input-zone");
	private static By passwordLocator = By.id("input-password");
	private static By confirmpasswordLocator = By.id("input-confirm");
	private static By checkLocator = By.xpath("//input[@name='agree']");
	private static By ContinueLocator = By.xpath("//input[@value='Continue']");

	public static void enterfirstname(WebDriver driver, String firstname) {
		driver.findElement(firstnameLocator).sendKeys(firstname);
	}

	public static void enterlastname(WebDriver driver, String lastname) {
		driver.findElement(LastNameLocator).sendKeys(lastname);
	}

	public static void enteremail(WebDriver driver, String email) {
		driver.findElement(emailLocator).sendKeys(email);
	}

	public static void entertelephone(WebDriver driver, String telephone) {
		driver.findElement(telephoneLocator).sendKeys(telephone);
	}

	public static void enteraddress(WebDriver driver, String address) {
		driver.findElement(addressLocator).sendKeys(address);
	}

	public static void entercity(WebDriver driver, String city) {
		driver.findElement(cityLocator).sendKeys(city);
	}

	public static void postcode(WebDriver driver, String postcode) {
		driver.findElement(postcodeLocator).sendKeys(postcode);
	}

	public static void explicitWait(WebDriver driver)
	{
		WebElement country = driver.findElement(countryLoc);
		WebDriverWait wait=new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(countryLoc));
		
	}
	public static void country(WebDriver driver, String countryname) {
		WebElement country = driver.findElement(countryLocator);
		Select selectCountry = new Select(country);
		selectCountry.selectByVisibleText(countryname);
	}

	public static void explicitWaiting(WebDriver driver)
	{
		WebElement country = driver.findElement(regionLoc);
		WebDriverWait wait=new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(regionLoc));
		
	}
	public static void Region(WebDriver driver, String RegionName) {
		WebElement region = driver.findElement(RegionLocator);
		Select selectRegion = new Select(region);
		selectRegion.selectByVisibleText(RegionName);
	}

	public static void password(WebDriver driver, String password) {
		driver.findElement(passwordLocator).sendKeys(password);
	}

	public static void confirmpassword(WebDriver driver, String cnfrmpwd) {
		driver.findElement(confirmpasswordLocator).sendKeys(cnfrmpwd);
	}

	public static void checkbox(WebDriver driver) {
		WebElement checkEle = driver.findElement(checkLocator);
		if (!(checkEle.isSelected()))
			checkEle.click();
	}

	public static void Continue(WebDriver driver) {
		driver.findElement(ContinueLocator).click();
	}
}
