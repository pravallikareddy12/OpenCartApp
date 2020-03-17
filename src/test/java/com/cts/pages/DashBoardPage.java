package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DashBoardPage {
	
	private static By logoutLocator=By.linkText("Logout");
	
	public static void clickOnLogout(WebDriver driver)
	{
		driver.findElement(logoutLocator).click();
	}
}
