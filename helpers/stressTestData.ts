// for future website versions: stressTestData supports adding additional languages for i18n

export const stressTestData = {
  locale: "fa",
  title: "تست استرس ادراک شده",
  description:
    "با توجه به احساسات خود در یک ماه گذشته، به سوالات زیر پاسخ دهید.",
  completedHtml: {
    default: "Thank You",
    fa: "با سپاس",
  },
  completedHtmlOnCondition: [
    {
      expression: "{totalScore} > 37",
      html: {
        default: "<h3>{totalScore} high stress</h3>",
        fa: "<h3>سطح استرس شما بالا است، میزان استرس شما {totalScore} هست که بزرگتر از 37 می باشد. احتمالا زمان زیادی را صرف نگرانی در مورد آینده می کنید و افکار منفی بدون اجاره در ذهن شما زندگی می کنند. اگر از علائم خاص افسردگی یا دوره های اضطراب ناتوان کننده رنج می برید، با یک متخصص تماس بگیرید.</h3>",
      },
    },
    {
      expression: "{totalScore} > 19",
      html: {
        default: "<h3>{totalScore} medium stress</h3>",
        fa: "<h3>سطح استرس شما مثل اغلب مردم متوسط است، میزان استرس شما {totalScore} هست که در بازه 19 تا 37 می باشد. شما اغلب نگران چیزهایی هستید که خارج از کنترل شما هستند، اما سعی می کنید اجازه ندهید استرس شما را تحت تاثیر قرار دهد.</h3>",
      },
    },
    {
      expression: "{totalScore} <= 19",
      html: {
        default: "<h3>{totalScore} low stress</h3>",
        fa: "<h3>سطح استرس شما پایین است، میزان استرس شما {totalScore} هست که کمتر از 19 می باشد. شما احتمالا زندگی رضایت بخش و عمدتا بدون استرس دارید. </h3>",
      },
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "question1",
          title: {
            default: "q1",
            fa: " به دلیل اتفاقی که غیرمنتظره رخ داده است ناراحت شده اید ",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question2",
          title: {
            default: "q2",
            fa: "احساس کرده اید که نمی توانید چیزهای مهم زندگی خود را کنترل کنید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question3",
          title: {
            default: "q3",
            fa: 'احساس عصبی و "استرس" داشته اید',
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question4",
          title: {
            default: "q4",
            fa: "متوجه شده اید که نمی توانید با تمام کارهایی که باید انجام می دادید کنار بیایید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question5",
          title: {
            default: "q5",
            fa: "به دلیل اتفاقاتی که خارج از کنترل شما بوده است عصبانی شده اید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question6",
          title: {
            default: "q6",
            fa: "در مورد کارهایی که باید انجام دهید فکر می کنید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question7",
          title: {
            default: "q7",
            fa: "احساس کردید که مشکلات آنقدر زیاد شده اند که نتوانید بر آنها غلبه کنید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "0",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "1",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "3",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "4",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question8",
          title: {
            default: "q8",
            fa: "با مشکلات آزاردهنده زندگی به طور موفقیت آمیزی برخورد کرده اید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question9",
          title: {
            default: "q9",
            fa: "احساس کرده اید که به طور موثر با تغییرات مهمی که در زندگی شما رخ می دهد کنار می آیید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question10",
          title: {
            default: "q10",
            fa: "نسبت به توانایی خود در رسیدگی به مشکلات شخصی خود اطمینان داشته اید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question11",
          title: {
            default: "q11",
            fa: "احساس کردید که همه چیز بر وفق مراد شما پیش می رود",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question12",
          title: {
            default: "q12",
            fa: "توانسته اید اتفاقات ناخوشایند زندگی خود را کنترل کنید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question13",
          title: {
            default: "q13",
            fa: "احساس کردید که از برنامه خود جلو هستید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "question14",
          title: {
            default: "q14",
            fa: "توانسته اید نحوه وقت گذراندن خود را به دلخواه خود کنترل کنید",
          },
          description: {
            default: "Display mode = Auto",
            fa: " ",
          },
          isRequired: true,
          autoGenerate: false,
          rateValues: [
            {
              value: "4",
              text: {
                fa: "هیچوقت",
              },
            },
            {
              value: "3",
              text: {
                fa: "به ندرت",
              },
            },
            {
              value: "2",
              text: {
                fa: "گاهی",
              },
            },
            {
              value: "1",
              text: {
                fa: "زیاد",
              },
            },
            {
              value: "0",
              text: {
                fa: "خیلی زیاد",
              },
            },
          ],
          displayMode: "buttons",
        },
      ],
    },
  ],

  showTitle: false,
  questionTitlePattern: "numTitle",
  questionsOnPageMode: "singlePage",
  completeText: {
    fa: "تکمیل",
  },
  widthMode: "responsive",
  width: "750px",
};
