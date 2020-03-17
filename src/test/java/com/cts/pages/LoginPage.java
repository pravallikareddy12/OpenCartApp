package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

	private static By emailLocator=By.id("input-email");
	private static By passwordLocator=By.id("input-password");
	private static By LoginLocator=By.xpath("//input[@value='Login']");



	public static void enteremail(WebDriver driver,String email)
	{
	driver.findElement(emailLocator).sendKeys(email);
	}

	public static void enterpassword(WebDriver driver,String password)
	{
	driver.findElement(passwordLocator).sendKeys(password);
	}

	public static void clickOnLogin(WebDriver driver)
	{
	driver.findElement(LoginLocator).click();
	}
	}

