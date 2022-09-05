package com.anz.pages;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class ScreenShothandle extends Baseclass
{
	public ScreenShothandle() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	public static void takeSS(String file) throws IOException
	{
		File filename=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		File destination=new File("src/main/java/Screenshots/"+file+".jpg");
		FileUtils.copyFile(filename, destination);
	}

}
