package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchPage {
	
private static By searchLoc=By.xpath("//input[@type='text']");
private static By searchboxLoc=By.xpath("(//button[@type='button'])[4]");
private static By addtoCartloc=By.linkText("Add to Cart");
private static By invalidsearchLoc=By.xpath("//p[text()='There is no product that matches the search criteria.']");

public static void searchText(WebDriver driver,String productname)
{
	driver.findElement(searchLoc).sendKeys(productname);
}

public static void searchBox(WebDriver driver)
{
	driver.findElement(searchboxLoc).click();
}

public static String getSearchRelatedTitle(WebDriver driver)
{
	String actualTitle=driver.findElement(By.xpath("//h2[text()='Products meeting the search criteria']")).getText();
	return actualTitle;
}

public static String getinvalidSearchRelatedTitle(WebDriver driver)
{
	String actualTitle=driver.findElement(invalidsearchLoc).getText();
	return actualTitle;
}



public static void addtoCart(WebDriver driver)
{
	driver.findElement(addtoCartloc).click();
}
}
