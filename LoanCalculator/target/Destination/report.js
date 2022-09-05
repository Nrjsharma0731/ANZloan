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
    },
    {
      "cells": [
        "0",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 19,
      "id": "borrowing-power;borrow-power-with-some-details;;3"
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
  "duration": 19134866000,
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
  "duration": 309830900,
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
  "duration": 269691700,
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
  "duration": 284036000,
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
  "duration": 201371000,
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
  "duration": 207372000,
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
  "duration": 205305400,
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
  "duration": 270095500,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_click_on_borrow_button()"
});
formatter.result({
  "duration": 200349000,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_is_able_see_the_amount_can_be_borrowed()"
});
formatter.result({
  "duration": 3653838700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Borrow Power with some details",
  "description": "",
  "id": "borrowing-power;borrow-power-with-some-details;;3",
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
  "name": "user enter annual income \"0\" amount",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter other income \"0\" amount",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter living expenses \"1\" amount",
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
  "name": "user enter other loan repayment \"0\" amount",
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
  "name": "user enter credit card limit \"0\" amount",
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
  "duration": 11893641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "BorrowPower.user_enter_annual_income_amount(String)"
});
formatter.result({
  "duration": 237132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "BorrowPower.user_enter_other_income_amount(String)"
});
formatter.result({
  "duration": 132606600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "BorrowPower.user_enter_living_expenses_amount(String)"
});
formatter.result({
  "duration": 128719900,
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
  "duration": 122280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 33
    }
  ],
  "location": "BorrowPower.user_enter_other_loan_repayment_amount(String)"
});
formatter.result({
  "duration": 119506700,
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
  "duration": 127586100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "BorrowPower.user_enter_credit_card_limit_amount(String)"
});
formatter.result({
  "duration": 127396400,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_click_on_borrow_button()"
});
formatter.result({
  "duration": 114876300,
  "status": "passed"
});
formatter.match({
  "location": "BorrowPower.user_is_able_see_the_amount_can_be_borrowed()"
});
formatter.result({
  "duration": 1680686900,
  "status": "passed"
});
});