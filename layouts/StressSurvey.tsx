"use client";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { stressTestData } from "@/helpers/stressTestData";
import { surveyTheme } from "@/helpers/surveyTheme";

export default function StressSurvey() {
  const survey = new Model(stressTestData); // create survey based on JSON file
  survey.applyTheme(surveyTheme);

  /*
  // view completed survey object in console for testing
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  */

  function calculateTotalScore(data: any[]) {
    var totalScore = 0;
    data.forEach((item: { value: number }) => {
      // loops through all the questions
      const questionValue = 1 * item.value; // convert value string to number
      totalScore += questionValue; // add value to total score
    });
    return totalScore;
  }

  // default function from surveyjs.io for appending the totalScore value to JSON file for conditional rendering
  survey.onCompleting.add((sender) => {
    const plainData = sender.getPlainData({
      calculations: [{ propertyName: "totalScore" }], // Include `score` values into the data array
    });

    // calculate totalScore
    const totalScore = calculateTotalScore(plainData);

    // Save totalScore in survey results
    sender.setValue("totalScore", totalScore);
  });

  return <Survey model={survey} />;
}
