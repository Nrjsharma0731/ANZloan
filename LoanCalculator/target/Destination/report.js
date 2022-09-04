$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BorrowPower.feature");
formatter.feature({
  "line": 2,
  "name": "Borrowing Power",
  "description": "",
  "id": "borrowing-power",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Borrow Power with some details",
  "description": "",
  "id": "borrowing-power;borrow-power-with-some-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on LoanCalc page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter annual income \"\u003cAnnualIncome\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter other income \"\u003cOtherIncome\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter living expenses \"\u003clivingExpense\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter home loan repayment \"\u003cHomeLoanRepay\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter other loan repayment \"\u003cOtherLoanRepay\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter monthly commitments \"\u003cmonthlyCommitments\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter credit card limit \"\u003cCreditCardLimit\u003e\" amount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on borrow button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is able see the amount can be borrowed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "borrowing-power;borrow-power-with-some-details;",
  "rows": [
    {
      "cells": [
        "AnnualIncome",
        "OtherIncome",
        "livingExpense",
        "HomeLoanRepay",
        "OtherLoanRepay",
        "monthlyCommitments",
        "CreditCardLimit"
      ],
      "line": 17,
      "id": "borrowing-power;borrow-power-with-some-details;;1"
    },
    {
      "cells": [
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000"
      ],
      "line": 18,
      "id": "borrowing-power;borrow-power-with-some-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Borrow Power with some details",
  "description": "",
  "id": "borrowing-power;borrow-power-with-some-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on LoanCalc page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter annual income \"80000\" amount",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter other income \"10000\" amount",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter living expenses \"500\" amount",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter home loan repayment \"0\" amount",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter other loan repayment \"100\" amount",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter monthly commitments \"0\" amount",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter credit card limit \"10000\" amount",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on borrow button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is able see the amount can be borrowed",
  "keyword": "Then "
});
formatter.match({
  "location": "BorrowPower.user_is_on_LoanCalc_page()"
});
formatter.result({
  "duration": 21783069000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 26
    }
  ],
  "location": "BorrowPower.user_enter_annual_income_amount(String)"
});
formatter.result({
  "duration": 301248600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 25
    }
  ],
  "location": "BorrowPower.user_enter_other_income_amount(String)"
});
formatter.result({
  "duration": 192104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 28
    }
  ],
  "location": "BorrowPower.user_enter_living_expenses_amount(String)"
});
formatter.result({
  "duration": 147933000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "BorrowPower.user_enter_home_loan_repayment_amount(String)"
});
formatter.result({
  "duration": 111606200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 33
    }
  ],
  "location": "BorrowPower.user_enter_other_loan_repayment_amount(String)"
});
formatter.result({
  "duration": 215582300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "BorrowPower.user_enter_monthly_commitments_amount(String)"
});
formatter.result({
  "duration": 123944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 30
    }
  ],
  "location": "BorrowPower.user_enter_credit_card_limit_amount(String)"
});
formatter.result({
  "duration": 194910900,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_click_on_borrow_button()"
});
formatter.result({
  "duration": 114533300,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_is_able_see_the_amount_can_be_borrowed()"
});
formatter.result({
  "duration": 2751025000,
  "status": "passed"
});
});