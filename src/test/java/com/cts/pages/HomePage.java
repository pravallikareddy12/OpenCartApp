package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

public class HomePage {

	private static By myAccLocator = (By.xpath("//a[@title='My Account']"));
	private static By RegisterLocator = (By.xpath("//a[text()='Register']"));
	private static By LoginLocator = (By.xpath("//a[text()='Login']"));

	public static void clickOnMyAccount(WebDriver driver) 
	{
		driver.findElement(myAccLocator).click();
	}

	public static void clickOnRegister(WebDriver driver) 
	{
		driver.findElement(RegisterLocator).click();

	}
	
	public static String getRegisterTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h1[text()='Your Account Has Been Created!']")).getText();
		return actualTitle;
	}
	
	public static String getInvalidRegisterTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		return actualTitle;
	}
	
	public static String getInvalidLoginTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		return actualTitle;
	}

	
	
	public static void clickOnLogin(WebDriver driver) 
	{
		driver.findElement(LoginLocator).click();

	}
	
	public static String getCurrentTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.linkText("My Account")).getText();
		return actualTitle;
	}
	
	public static void clickOnDesktops(WebDriver driver)
	{
		driver.findElement(By.xpath("(//a[@class='dropdown-toggle'])[2]")).click();
	}
	
	
	public static void clickOnseeall(WebDriver driver)
	{
		Actions actions =new Actions(driver);
	     actions.moveToElement(driver.findElement(By.xpath("//a[@class='see-all']"))).pause(1000).doubleClick().build().perform();
	}
	
	public static String getDesktopTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.linkText("Desktops")).getText();
		return actualTitle;
	}
	
	
	
	public static void clickOnLaptopsandNotebooks(WebDriver driver)
	{
		driver.findElement(By.linkText("Laptops & Notebooks")).click();
	}
	

	public static void clickOnShowAll(WebDriver driver)
	{
		Actions actions =new Actions(driver);
	     actions.moveToElement(driver.findElement(By.linkText("Show All Laptops & Notebooks"))).pause(1000).doubleClick().build().perform();
	}
	
	public static String getLaptopTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='Laptops & Notebooks']")).getText();
		return actualTitle;
	}
	
	
	public static void clickOnComponents(WebDriver driver)
	{
		driver.findElement(By.linkText("Components")).click();
	}
	
	
	public static void clickOnMonitors(WebDriver driver)
	{
		Actions actions =new Actions(driver);
	     actions.moveToElement(driver.findElement(By.linkText("Monitors (2)"))).pause(1000).doubleClick().build().perform();
	}
	
	public static String getComponentsTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='Monitors']")).getText();
		return actualTitle;
	}
	
	public static void clickOnAddtoCart(WebDriver driver)
	{
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[7]")).click();
	}
	
	public static void clickOnTablets(WebDriver driver)
	{
		driver.findElement(By.linkText("Tablets")).click();
	}
	
	public static String getTabletsTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='Tablets']")).getText();
		return actualTitle;
	}
	
	public static void clickOnSoftware(WebDriver driver)
	{
		driver.findElement(By.linkText("Software")).click();
	}
	
	public static String getSoftwareTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//p[text()='There are no products to list in this category.']")).getText();
		return actualTitle;
	}
	
	
	
	public static void clickOnPhones(WebDriver driver)
	{
		driver.findElement(By.linkText("Phones & PDAs")).click();
	}
	
	public static String getPhonesTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='Phones & PDAs']")).getText();
		return actualTitle;
	}
	
	public static void clickOnCameras(WebDriver driver)
	{
		driver.findElement(By.linkText("Cameras")).click();
	}
	public static String getCameraTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='Cameras']")).getText();
		return actualTitle;
	}
	
	
	public static void clickOnMP3Players(WebDriver driver)
	{
		driver.findElement(By.linkText("MP3 Players")).click();
	}
	
	
	public static void clickOnAllMP3(WebDriver driver)
	{
		Actions actions =new Actions(driver);
	     actions.moveToElement(driver.findElement(By.linkText("Show All MP3 Players"))).pause(1000).doubleClick().build().perform();
	}
	
	public static String getAllMP3Title(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='MP3 Players']")).getText();
		return actualTitle;
	}
	
	public static void clickOnipodCart(WebDriver driver)
	{
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[10]")).click();
	}
	
	public static void clickOnipodTouchWishList(WebDriver driver)
	{
		driver.findElement(By.xpath("(//button[@type='button'])[19]"));
	}
	
	
	
	public static void contactForm(WebDriver driver)
	{
		driver.findElement(By.xpath("//i[@class='fa fa-phone']")).click();
	}
	
	public static String getContactFormTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h1[text()='Contact Us']")).getText();
		return actualTitle;
	}
	
	
	
	public static void clickOnlaptopWishList(WebDriver driver)
	{
		driver.findElement(By.xpath("(//button[@type='button'])[21]")).click();
	}
	
	public static void CheckInWishList(WebDriver driver)
	{
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[4]")).click();
	}
	
	public static String getWishListTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h2[text()='My Wish List']")).getText();
		return actualTitle;
	}
	
	public static void ClickOnShoppingCart(WebDriver driver)

	{
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[5]")).click();
	}
	
	public static String getShoppingCartTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.linkText("iPod Touch")).getText();
		return actualTitle;
	}
	
	
	
	public static void CheckOut(WebDriver driver)
	{
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[6]")).click();
	}
	
	public static String getCheckOutTitle(WebDriver driver)
	{
		String actualTitle=driver.findElement(By.xpath("//h1[text()='Checkout']")).getText();
		return actualTitle;
	}
	
	public static void currencyClick(WebDriver driver)
	{ 
		driver.findElement(By.xpath("(//span[@class='hidden-xs hidden-sm hidden-md'])[1]")).click();
	}
	
	public static void usdClick(WebDriver driver)
	{
	  driver.findElement(By.xpath("//button[@name='USD']")).click();
	}

	
	}
		
	
	
	
	
	
	
	
	
	
	
	

