"use client";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { stressTestData } from "@/helpers/stressTestData";

import { Serializer } from "survey-core";

// Add a custom `score` property to choice options
Serializer.addProperty("itemvalue", {
  name: "score:number",
});

export default function StressSurvey() {
  const survey = new Model(stressTestData);

  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  function calculateTotalScore(data) {
    var totalScore = 0;
    data.forEach((item) => {
      const question = survey.getQuestionByValueName(item.name);
      const qValue = item.value;
      if (question.choices) {
        const selectedChoice = question.choices.find(choice => choice.value === qValue);
        if (selectedChoice) {
          totalScore += selectedChoice.score;
        }
      }
      if (question.rateValues) {
        const selectedRate = question.rateValues.find(rate => rate.value === qValue);
        if (selectedRate) {
          totalScore += selectedRate.score;
        }
      }
      if (question.getType() === "matrix") {
        item.data.forEach((dataItem) => {
          if (!!dataItem.value) {
            totalScore += dataItem.score;
          }
        });
      }
    });
    return totalScore;
  }

  survey.onCompleting.add((sender) => {  
    // Get survey results as a flat data array
    const plainData = sender.getPlainData({
      // Include `score` values into the data array
      calculations: [{ propertyName: "score" }]
    });
    const totalScore = calculateTotalScore(plainData);
  
    // Save the scores in survey results
    sender.setValue("totalScore", totalScore);
  });

  return <Survey model={survey} />;
}
