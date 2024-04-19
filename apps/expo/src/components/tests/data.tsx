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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
        value: 1.5,
      },
      {
        id: 4,
        ans: "Nearly everyday",
        value: 2,
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
];
