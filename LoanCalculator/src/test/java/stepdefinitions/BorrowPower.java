package stepdefinitions;

import java.time.Instant;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.anz.pages.Baseclass;
import com.anz.pages.Dropdowns;
import com.anz.pages.ScreenShothandle;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class BorrowPower extends Baseclass
{

	public BorrowPower() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Given("^user is on LoanCalc page$")
	public void user_is_on_LoanCalc_page() throws InterruptedException  {
		Baseclass.launchApp();
		String actualtitle= driver.getTitle();
		if(actualtitle.equalsIgnoreCase(pr.getProperty("expectedtitle")))
		{
			System.out.println("you are on "+actualtitle+"page");
		}
		else 
		{
			System.out.println("something is wrong, you are on incorrect page");
		}
		Thread.sleep(1000);
		driver.findElement(By.xpath(pr.getProperty("single"))).click();
		WebElement dep= driver.findElement(By.xpath(pr.getProperty("dependants")));
		Dropdowns.handlebyindex(dep, 0);
		driver.findElement(By.xpath(pr.getProperty("home"))).click();
	    
	}

	@Given("^user enter annual income \"(.*?)\" amount$")
	public void user_enter_annual_income_amount(String AnnualIncome)  {
		driver.findElement(By.xpath(pr.getProperty("annaulincome"))).sendKeys(AnnualIncome);	    
	}

	@Given("^user enter other income \"(.*?)\" amount$")
	public void user_enter_other_income_amount(String OtherIncome)  {
		driver.findElement(By.xpath(pr.getProperty("otherincome"))).sendKeys(OtherIncome);	    
	}

	@Given("^user enter living expenses \"(.*?)\" amount$")
	public void user_enter_living_expenses_amount(String livingExpense)  {
		driver.findElement(By.xpath(pr.getProperty("expenses"))).sendKeys(livingExpense);
	    
	}

	@Given("^user enter home loan repayment \"(.*?)\" amount$")
	public void user_enter_home_loan_repayment_amount(String HomeLoanRepay)  {
		driver.findElement(By.xpath(pr.getProperty("homeLoanRepay"))).sendKeys(HomeLoanRepay);	    
	}

	@Given("^user enter other loan repayment \"(.*?)\" amount$")
	public void user_enter_other_loan_repayment_amount(String OtherLoanRepay)  {
		driver.findElement(By.xpath(pr.getProperty("otherLoanRepay"))).sendKeys(OtherLoanRepay);	    
	}

	@Given("^user enter monthly commitments \"(.*?)\" amount$")
	public void user_enter_monthly_commitments_amount(String monthlyCommitments)  {
		driver.findElement(By.xpath(pr.getProperty("commitments"))).sendKeys(monthlyCommitments);		 
	}

	@Given("^user enter credit card limit \"(.*?)\" amount$")
	public void user_enter_credit_card_limit_amount(String CreditCardLimit)  {
		driver.findElement(By.xpath(pr.getProperty("CreditLimit"))).sendKeys(CreditCardLimit); 
	}

	@When("^user click on borrow button$")
	public void user_click_on_borrow_button()  {
		driver.findElement(By.xpath(pr.getProperty("BorrowCalc"))).click();
	   
	}

	@Then("^User is able see the amount can be borrowed$")
	public void user_is_able_see_the_amount_can_be_borrowed() throws Exception  {
		Thread.sleep(1000);	
	
		if(driver.findElement(By.xpath(pr.getProperty("verifytext"))).isDisplayed()==true)
		{
			String actualtext=driver.findElement(By.xpath(pr.getProperty("verifytext"))).getText();
			String amnt=driver.findElement(By.xpath(pr.getProperty("amount"))).getText();
			System.out.println(actualtext+amnt);
			ScreenShothandle.takeSS("Result"+ Math.random());
			driver.findElement(By.xpath(pr.getProperty("startOver"))).click();
			Thread.sleep(1000);
			ScreenShothandle.takeSS("Reset"+ Math.random());
			
		}
		else
		{
			String errortext=driver.findElement(By.xpath("//div[@class='borrow__error__text']")).getText();
			System.out.println(errortext);
			ScreenShothandle.takeSS("Result"+ Math.random());
		}
		 
		driver.close();
	    
	}
	

}
