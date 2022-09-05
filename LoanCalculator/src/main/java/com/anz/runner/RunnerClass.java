package com.anz.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=("src/main/java/Features"),
		glue= ("stepdefinitions"),
		dryRun = false,
		tags= "@tag1",
		format = {"pretty", "html:target/Destination"}
		)

public class RunnerClass  {

}
