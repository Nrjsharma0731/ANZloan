package com.anz.pages;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Baseclass 
{
	public static Properties pr;
	public static WebDriver driver;
	
	public Baseclass() throws Exception
	{
		pr=new Properties();
		FileInputStream file= new FileInputStream("src/main/java/com/anz/config/config.properties");
		
		pr.load(file);
	}
public static void launchApp() 
{
	String browsername=pr.getProperty("browser");
	String projectpath=System.getProperty("user.dir");
	System.out.println(projectpath);
	if(browsername.equals("chrome"))
	{
		System.setProperty("webdriver.chrome.driver", "src/main/java/Drivers/chromedriver.exe");
		driver= new ChromeDriver();
	}
	else if(browsername.equals("IE"))
	{
		System.setProperty("webdriver.ie.driver", "src/main/java/Drivers/IEDriverServer.exe");
		InternetExplorerOptions capabilities = new InternetExplorerOptions();
		capabilities.ignoreZoomSettings();
		driver = new InternetExplorerDriver(capabilities);
			
	}
	
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.get(pr.getProperty("URL"));
	
}
}
