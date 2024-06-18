export const tests = [
  {
    id: 1,
    name: "Anxiety Test",
    img: require("../../../assets/imgs/tests/anxiety.png"),
    backgroundColor: "#E4EDFF",
    href: "/tests/anxiety",
  },
  {
    id: 2,
    name: "Depression Test",
    img: require("../../../assets/imgs/tests/depression.png"),
    backgroundColor: "#FFEFC6",
    href: "/tests/depression",
  },
  {
    id: 3,
    name: "Alcohol/Non-Prescribed Drug Test",
    img: require("../../../assets/imgs/tests/alcohol.png"),
    backgroundColor: "#E4EDFF",
    href: "/tests/alcohol",
  },
  {
    id: 4,
    name: "Post-traumatic disorder Test",
    img: require("../../../assets/imgs/tests/ptsd.png"),
    backgroundColor: "#F2E8FF",
    href: "/tests/ptsd",
  },
];

export const depressionTest = [
  {
    id: 1,
    shortTitle: "During the last 24 hours,",
    question:
      "Do you find little interest or pleasure in doing things ( e.g: visiting friends, exercising, going out)?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 2,
    shortTitle: "During the last 24 hours,",
    question:
      "Do you feel down, depressed, or hopeless ( ex: everything is not in your favor)?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 3,
    shortTitle: "Over the last two weeks,",
    question: "Have you been worrying too much about different things?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 4,
    shortTitle: "Over the last two weeks,",
    question: "Do you have trouble resting and relaxing?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },

  {
    id: 5,
    shortTitle: "Over the last two weeks,",
    question: "Do you get easily annoyed or irritable?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 6,
    shortTitle: "Over the last two weeks,",
    question:
      " Have you been feeling afraid as if something awful might happen?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 7,
    shortTitle: "Over the last two weeks,",
    question:
      "How difficult have these problems made for you at work, at home, or with other people?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
];

export const mentalHealthQuestions = [
  {
    id: 1,
    shortTitle: "For the past two weeks,",
    question:
      "How often have you been bothered by little interest or pleasure in doing things? ",
    shortQuestion: "(e.g: visiting friends, exercising, going out)",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 2,
    shortTitle: "For the past two weeks,",
    question: "Have you been  feeling down, depressed, or hopeless?  ",
    shortQuestion: "(ex: everything is not in your favor)",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
];

export const anxietyTest = [
  {
    id: 1,
    shortTitle: "During the last 24 hours,",
    question: "Have you been feeling nervous, anxious, or on edge?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },

  {
    id: 2,
    shortTitle: "During the last 24 hours,",
    question: "Have you being able to stop or control worrying?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 3,
    shortTitle: "Over the last two weeks,",
    question: "Have you been worrying too much about different things?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 4,
    shortTitle: "Over the last two weeks,",
    question: "Do you have trouble resting and relaxing?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 5,
    shortTitle: "Over the last two weeks,",
    question: "Do you get easily annoyed or irritable?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 6,
    shortTitle: "Over the last two weeks,",
    question:
      "Have you been feeling afraid as if something awful might happen?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 7,
    shortTitle: "Over the last two weeks,",
    question:
      "How difficult have these problems made for you at work, at home, or with other people?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
];

export const alcoholTest = [
  {
    id: 1,
    shortTitle: "Select an answer",
    question:
      "Have you ever felt/ told that you ought to cut down on your drinking or drug use?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },

  {
    id: 2,
    shortTitle: "Select an answer",
    question:
      "Have people annoyed you by criticizing your drinking or drug use?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 3,
    shortTitle: "Select an answer",
    question:
      "Have you ever felt bad or guilty about your drinking or drug use?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 4,
    shortTitle: "Select an answer",
    question:
      "Have you ever had a drink or used drugs first thing in the morning to steady your nerves or to get rid of a hangover?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 5,
    shortTitle: "Select an answer",
    question:
      "Have you ever had a drink or used drugs first thing in the morning to steady your nerves or to get rid of a hangover?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 6,
    shortTitle: "Select an answer",
    question:
      "Have you been feeling afraid as if something awful might happen?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 7,
    shortTitle: "Select an answer",
    question: "What substance or addiction are you concerned about",
    answers: [
      {
        id: 1,
        ans: "Alcohol",
        value: 0,
      },
      {
        id: 2,
        ans: "Marijuana / Cocaine",
        value: 0,
      },
      {
        id: 3,
        ans: "Heroin / Prescription Opioids",
        value: 0,
      },
      {
        id: 4,
        ans: "Other (Gambling, sex, internet, etc)",
        value: 0,
      },
      {
        id: 5,
        ans: "Self Harm/ Tobacco / Stimulants",
        value: 0,
      },
    ],
  },
];

export const ptsdTest = [
  {
    id: 1,
    shortTitle: "Select an answer",
    question:
      "Have you ever had nightmares about the event(s) or thought about the event(s) when you did not want to?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },

  {
    id: 2,
    shortTitle: "Select an answer",
    question:
      "Have you tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 3,
    shortTitle: "Select an answer",
    question:
      "Have you been constantly on guard, watchful, or easily startled?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 4,
    shortTitle: "Select an answer",
    question:
      "Did you feel numb or detached from people, activities, or surroundings?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 5,
    shortTitle: "Select an answer",
    question:
      "Ever felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 6,
    shortTitle: "Select an answer",
    question:
      "How difficult have these problems made for you at work, at home, or with other people?",
    answers: [
      {
        id: 1,
        ans: "Yes",
        value: 1,
      },
      {
        id: 2,
        ans: "No",
        value: 0,
      },
    ],
  },
  {
    id: 7,
    shortTitle: "Select an answer",
    question: "Which of these events or incidents you have faced?",
    answers: [
      {
        id: 1,
        ans: "Fire / Human Accident",
        value: 0,
      },
      {
        id: 2,
        ans: "Physical assault / sexual abuse",
        value: 0,
      },
      {
        id: 3,
        ans: "Earthquake / flood",
        value: 0,
      },
      {
        id: 4,
        ans: "A war",
        value: 0,
      },
      {
        id: 5,
        ans: "Seeing someone being killed or commiting suicide",
        value: 0,
      },
    ],
  },
];


export const panasTest = [
  {
    id: 1,
    qn: "interested?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 2,
    qn: "distressed?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 3,
    qn: "Excited?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 4,
    qn: "upset?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 5,
    qn: "strong?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 6,
    qn: "guilty?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 7,
    qn: "scared?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 8,
    qn: "hostile?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 9,
    qn: "enthusiastic?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 10,
    qn: "Proud?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 11,
    qn: "irritable?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 12,
    qn: "Alert?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 13,
    qn: "Ashamed?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
  {
    id: 14,
    qn: "inspired?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 15,
    qn: "nervous?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 16,
    qn: "Determined?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 17,
    qn: "Attentive?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 18,
    qn: "Jittery?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 19,
    qn: "Active?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  },
   {
    id: 20,
    qn: "Afraid?",
    answers: [
      {
        id: 1,
        ans: "Not at all",
        value: 0,
      },
      {
        id: 2,
        ans: "Several Days",
        value: 1,
      },
      {
        id: 3,
        ans: "More than half a day",
        value: 2,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 3,
      },
    ],
  }
]