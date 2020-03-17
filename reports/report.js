$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/OpenCart.feature");
formatter.feature({
  "name": "OpenCartApplication",
  "description": "  In order to create a webpage\n  As a e-commerce vendor\n  I want to get access to the portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "ValidRegisterCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cfirstname\u003e\u0027 and \u0027\u003clastname\u003e\u0027 and \u0027\u003cemail\u003e\u0027 and \u0027\u003ctelephone\u003e\u0027 and enter \u0027\u003caddress\u003e\u0027 and \u0027\u003ccity\u003e\u0027 and \u0027\u003cpostcode\u003e\u0027 and \u0027\u003ccountry\u003e\u0027 and \u0027\u003cregion\u003e\u0027 and enter \u0027\u003cpassword\u003e\u0027 and \u0027\u003cpasswordconfirm\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "my account has created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "address",
        "city",
        "postcode",
        "country",
        "region",
        "password",
        "passwordconfirm"
      ]
    },
    {
      "cells": [
        "lill",
        "chintabathina",
        "lil902@gmail.com",
        "7232548101",
        "sidharthanagar",
        "podalada",
        "530244",
        "India",
        "Andhra Pradesh",
        "komali1234",
        "komali1234"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidRegisterCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027lill\u0027 and \u0027chintabathina\u0027 and \u0027lil902@gmail.com\u0027 and \u00277232548101\u0027 and enter \u0027sidharthanagar\u0027 and \u0027podalada\u0027 and \u0027530244\u0027 and \u0027India\u0027 and \u0027Andhra Pradesh\u0027 and enter \u0027komali1234\u0027 and \u0027komali1234\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_and_and_and_enter_and_and_and_and_and_enter_and(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account has created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.my_account_has_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "InValidRegisterCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \u0027\u003cfirstname\u003e\u0027 and \u0027\u003clastname\u003e\u0027 and \u0027\u003cemail\u003e\u0027 and \u0027\u003ctelephone\u003e\u0027 and \u0027\u003caddress\u003e\u0027 and \u0027\u003ccity\u003e\u0027 and \u0027\u003cpostcode\u003e\u0027 and \u0027\u003ccountry\u003e\u0027 and \u0027\u003cregion\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 and \u0027\u003cpasswordconfirm\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I get Invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "address",
        "city",
        "postcode",
        "country",
        "region",
        "password",
        "passwordconfirm"
      ]
    },
    {
      "cells": [
        "lilly",
        "chintabathina",
        "s0nii12@gmail.com",
        "9052349765",
        "sidharthanagar",
        "podalada",
        "532243",
        "India",
        "Delhi",
        "komali1234",
        "komali1234"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "InValidRegisterCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \u0027lilly\u0027 and \u0027chintabathina\u0027 and \u0027s0nii12@gmail.com\u0027 and \u00279052349765\u0027 and \u0027sidharthanagar\u0027 and \u0027podalada\u0027 and \u0027532243\u0027 and \u0027India\u0027 and \u0027Delhi\u0027 and \u0027komali1234\u0027 and \u0027komali1234\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.user_enter_and_and_and_and_and_and_and_and_and_and(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get Invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_get_Invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ValidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should access to the portal with title with My Account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.555"
      ]
    },
    {
      "cells": [
        "pravallika12@gmail.com",
        "sunny123"
      ]
    },
    {
      "cells": [
        "s0nii03021998@gmail.com",
        "christ@07"
      ]
    },
    {
      "cells": [
        "manasapokanati@gmail.com",
        "manasa.123"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027anjanipriya123@gmail.com\u0027 and password \u0027anju.555\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal with title with My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_access_to_the_portal_with_title_with_My_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027pravallika12@gmail.com\u0027 and password \u0027sunny123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal with title with My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_access_to_the_portal_with_title_with_My_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027s0nii03021998@gmail.com\u0027 and password \u0027christ@07\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal with title with My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_access_to_the_portal_with_title_with_My_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027manasapokanati@gmail.com\u0027 and password \u0027manasa.123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal with title with My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_access_to_the_portal_with_title_with_My_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "InvalidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \u0027\u003cusername\u003e\u0027 and Password \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should  not  get access to the portal",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.554"
      ]
    },
    {
      "cells": [
        "s0nii03021998@gmail.com",
        "christ@08"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "InvalidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \u0027anjanipriya123@gmail.com\u0027 and Password \u0027anju.554\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.user_enter_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should  not  get access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_not_get_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "InvalidLoginCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter \u0027s0nii03021998@gmail.com\u0027 and Password \u0027christ@08\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.user_enter_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should  not  get access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_not_get_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "SearchValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search the product as \u0027\u003cproduct name\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the products",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product name"
      ]
    },
    {
      "cells": [
        "samsung"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "cameras"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search the product as \u0027samsung\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_search_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the products",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_the_products()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search the product as \u0027iphone\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_search_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the products",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_the_products()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search the product as \u0027cameras\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_search_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the products",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_the_products()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "SearchInValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for the product as \u0027\u003cproduct name\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should get message as There is no product that matches the search criteria",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product name"
      ]
    },
    {
      "cells": [
        "ring"
      ]
    },
    {
      "cells": [
        "cars"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchInValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for the product as \u0027ring\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_search_for_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get message as There is no product that matches the search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_message_as_There_is_no_product_that_matches_the_search_criteria()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SearchInValidCredential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for the product as \u0027cars\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_search_for_the_product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get message as There is no product that matches the search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_message_as_There_is_no_product_that_matches_the_search_criteria()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnDesktops",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Desktops",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Desktops()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Desktops",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Desktops()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnLaptops and Notebooks",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Laptops and Notebooks",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Laptops_and_Notebooks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Laptops and Notebooks",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Laptops_and_Notebooks()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnComponents",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Components",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Components()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Components",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Components()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnTablets",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Tablets",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Tablets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Tablets",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Tablets()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnSoftware",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Software",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Software()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_the_text()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnPhones and PDAs",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Phones and PDAs",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Phones_and_PDAs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Phones and PDAs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Phones_and_PDAs()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnCameras",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product Cameras",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_Cameras()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all Cameras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_Cameras()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnMP3 Players",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product MP3 Players",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_the_product_MP3_Players()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all MP3 Players",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_all_MP3_Players()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnContact Us",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Contact us",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_Contact_us()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get Contact Form",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_Contact_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ClickOnWishList",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 and click on WishList",
  "keyword": "When "
});
formatter.step({
  "name": "I should get My WishList",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.555"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnWishList",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027anjanipriya123@gmail.com\u0027 and \u0027anju.555\u0027 and click on WishList",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_and_click_on_WishList(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get My WishList",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_My_WishList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ClickOnShopping Cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 click on shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the products which I added into the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.555"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnShopping Cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027anjanipriya123@gmail.com\u0027 and \u0027anju.555\u0027 click on shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_click_on_shopping_cart(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the products which I added into the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_get_the_products_which_I_added_into_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnCurrency",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on currency",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_click_on_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to select the currency",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_able_to_select_the_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ClickOnCheckOut",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 click on CheckOut",
  "keyword": "When "
});
formatter.step({
  "name": "I should navigate to payment page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.555"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnCheckOut",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027anjanipriya123@gmail.com\u0027 and \u0027anju.555\u0027 click on CheckOut",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_click_on_CheckOut(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should navigate to payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_navigate_to_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ClickOnLogout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 and click on logout",
  "keyword": "When "
});
formatter.step({
  "name": "I should logout from the page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anjanipriya123@gmail.com",
        "anju.555"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnLogout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027anjanipriya123@gmail.com\u0027 and \u0027anju.555\u0027 and click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_and_click_on_logout(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should logout from the page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_logout_from_the_page()"
});
formatter.result({
  "status": "passed"
});
});