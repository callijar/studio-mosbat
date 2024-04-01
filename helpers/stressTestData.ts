export const stressTestData = {
  "locale": "fa",
  "title": "تست استرس ادراک شده",
  "description": "با توجه به احساسات خود در یک ماه گذشته، به سوالات زیر پاسخ دهید.",
  "completedHtmlOnCondition": [{
    "expression": "{totalScore} < 20",
    "html": "اسطح استرس شما پایین در نظر گرفته می شود . شاید این تست را از روی کنجکاوی انجام داده اید. شما احتمالاً یک زندگی رضایت بخش و عمدتاً بدون استرس دارید - برای شما خوب است!"
  }, {
    "expression": "(20 <= {totalScore} <= 30",
    "html": "سطح استرس شما متوسط ​​در نظر گرفته می شود . شما اغلب نگران چیزهایی هستید که خارج از کنترل شما هستند، اما سعی می کنید اجازه ندهید استرس شما را تحت تاثیر قرار دهد."
  }, {
    "expression": "31 < {totalScore})",
    "html": "سطح استرس شما بالا در نظر گرفته می شود . احتمالاً زمان زیادی را صرف نگرانی در مورد آینده می کنید و افکار منفی بدون اجاره در ذهن شما زندگی می کنند. اگر از علائم خاص افسردگی یا دوره های اضطراب ناتوان کننده رنج می برید، با یک متخصص تماس بگیرید."
  }],
  "pages": [
   {
    "name": "stressTest",
    "elements": [
     {
      "type": "rating",
      "name": "question1",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": " به دلیل اتفاقی که غیرمنتظره رخ داده است ناراحت شده اید "
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question2",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس کرده اید که نمی توانید چیزهای مهم زندگی خود را کنترل کنید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question3",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس عصبی و \"استرس\" داشته اید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question4",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "متوجه شده اید که نمی توانید با تمام کارهایی که باید انجام می دادید کنار بیایید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question5",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "به دلیل اتفاقاتی که خارج از کنترل شما بوده است عصبانی شده اید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question6",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "در مورد کارهایی که باید انجام دهید فکر می کنید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question7",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس کردید که مشکلات آنقدر زیاد شده اند که نتوانید بر آنها غلبه کنید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "0",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "4",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question8",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "با مشکلات آزاردهنده زندگی به طور موفقیت آمیزی برخورد کرده اید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question9",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس کرده اید که به طور موثر با تغییرات مهمی که در زندگی شما رخ می دهد کنار می آیید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question10",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "نسبت به توانایی خود در رسیدگی به مشکلات شخصی خود اطمینان داشته اید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question11",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس کردید که همه چیز بر وفق مراد شما پیش می رود"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question12",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "توانسته اید اتفاقات ناخوشایند زندگی خود را کنترل کنید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question13",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "احساس کردید که از برنامه خود جلو هستید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     },
     {
      "type": "rating",
      "name": "question14",
      "title": {
       "default": "حال شما چطور است؟",
       "fa": "توانسته اید نحوه وقت گذراندن خود را به دلخواه خود کنترل کنید"
      },
      "description": {
       "default": "Display mode = Auto",
       "fa": " "
      },
      "isRequired": true,
      "autoGenerate": false,
      "rateValues": [
       {
        "value": "4",
        "text": {
         "fa": "0"
        }
       },
       {
        "value": "3",
        "text": {
         "fa": "1"
        }
       },
       {
        "value": "2",
        "text": {
         "fa": "2"
        }
       },
       {
        "value": "1",
        "text": {
         "fa": "3"
        }
       },
       {
        "value": "0",
        "text": {
         "fa": "4"
        }
       }
      ],
      "minRateDescription": {
       "default": "Not satisfied",
       "fa": "هرگز"
      },
      "maxRateDescription": {
       "default": "Completely satisfied",
       "fa": "همیشه"
      },
      "displayRateDescriptionsAsExtremeItems": true,
      "displayMode": "buttons"
     }
    ]
   }
  ],
  
  "questionTitlePattern": "numTitle",
  "questionsOnPageMode": "singlePage",
  "widthMode": "responsive",
  "width": "750px"
 }