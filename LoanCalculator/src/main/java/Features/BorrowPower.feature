@tag
Feature: Borrowing Power 
@tag1
  Scenario Outline: Borrow Power with some details
    Given user is on LoanCalc page
    And user enter annual income "<AnnualIncome>" amount
    And user enter other income "<OtherIncome>" amount
    And user enter living expenses "<livingExpense>" amount
    And user enter home loan repayment "<HomeLoanRepay>" amount
    And user enter other loan repayment "<OtherLoanRepay>" amount
    And user enter monthly commitments "<monthlyCommitments>" amount
    And user enter credit card limit "<CreditCardLimit>" amount
    When user click on borrow button
    Then User is able see the amount can be borrowed
    
    Examples:
    | AnnualIncome | OtherIncome | livingExpense | HomeLoanRepay | OtherLoanRepay | monthlyCommitments | CreditCardLimit |
    | 80000 	   | 10000 		 | 500 			 | 0 			 | 100 		 	  | 0			  	   | 10000 			 |
    | 0 	   	   | 0 		     | 1 			 | 0 			 | 0 		 	  | 0			  	   | 0 			     |
 