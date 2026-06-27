export interface PlacementQuestion {
  id: number
  part: "grammar" | "vocabulary" | "reading"
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
  passageId?: "A" | "B"
  question: string
  options: string[]
  answerIndex: number
}

export const QUESTIONS: PlacementQuestion[] = [
  // PART 1 — Grammar & Use of English
  { id: 1, part: "grammar", level: "A1", question: "She ___ a teacher.", options: ["am", "is", "are", "be"], answerIndex: 1 },
  { id: 2, part: "grammar", level: "A1", question: "I ___ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], answerIndex: 0 },
  { id: 3, part: "grammar", level: "A1", question: "___ you have a pen?", options: ["Does", "Do", "Are", "Is"], answerIndex: 1 },
  { id: 4, part: "grammar", level: "A1", question: "There ___ two books on the table.", options: ["is", "am", "are", "be"], answerIndex: 2 },

  { id: 5, part: "grammar", level: "A2", question: "Yesterday, we ___ to the beach.", options: ["go", "goes", "went", "going"], answerIndex: 2 },
  { id: 6, part: "grammar", level: "A2", question: "She is ___ than her sister.", options: ["tall", "taller", "tallest", "more tall"], answerIndex: 1 },
  { id: 7, part: "grammar", level: "A2", question: "You ___ smoke here. This is a hospital.", options: ["mustn't", "don't", "aren't", "not"], answerIndex: 0 },
  { id: 8, part: "grammar", level: "A2", question: "While I ___ TV, the phone rang.", options: ["watch", "watched", "was watching", "watching"], answerIndex: 2 },

  { id: 9, part: "grammar", level: "B1", question: "If it rains tomorrow, we ___ stay at home.", options: ["will", "would", "are", "did"], answerIndex: 0 },
  { id: 10, part: "grammar", level: "B1", question: "I have ___ in Jakarta since 2010.", options: ["live", "lived", "living", "lives"], answerIndex: 1 },
  { id: 11, part: "grammar", level: "B1", question: "She told me that she ___ tired.", options: ["is", "was", "are", "been"], answerIndex: 1 },
  { id: 12, part: "grammar", level: "B1", question: "This is the man ___ car was stolen.", options: ["who", "which", "whose", "whom"], answerIndex: 2 },

  { id: 13, part: "grammar", level: "B2", question: "If I ___ known, I would have helped you.", options: ["have", "had", "would", "has"], answerIndex: 1 },
  { id: 14, part: "grammar", level: "B2", question: "The report ___ by the team last week.", options: ["was written", "wrote", "has written", "writes"], answerIndex: 0 },
  { id: 15, part: "grammar", level: "B2", question: "You ___ have told me earlier; now it's too late.", options: ["should", "must", "can", "will"], answerIndex: 0 },
  { id: 16, part: "grammar", level: "B2", question: "By the time we arrived, the movie ___ already started.", options: ["has", "had", "was", "have"], answerIndex: 1 },

  { id: 17, part: "grammar", level: "C1", question: "Not only ___ late, but he also forgot the documents.", options: ["he was", "was he", "he is", "is he"], answerIndex: 1 },
  { id: 18, part: "grammar", level: "C1", question: "___ harder, she would have passed the exam.", options: ["If she studied", "Had she studied", "She had studied", "Did she study"], answerIndex: 1 },
  { id: 19, part: "grammar", level: "C1", question: "I'd rather you ___ smoke in here.", options: ["don't", "didn't", "not", "won't"], answerIndex: 1 },
  { id: 20, part: "grammar", level: "C1", question: "The new policy will come ___ effect next month.", options: ["into", "in", "on", "to"], answerIndex: 0 },

  { id: 21, part: "grammar", level: "C2", question: "___ be any problems, please contact us immediately.", options: ["Should there", "If there", "There should", "Were there"], answerIndex: 0 },
  { id: 22, part: "grammar", level: "C2", question: "Little ___ that he was being watched.", options: ["he knew", "did he know", "he did know", "knew he"], answerIndex: 1 },
  { id: 23, part: "grammar", level: "C2", question: "The decision was, ___ all accounts, deeply controversial.", options: ["by", "on", "in", "for"], answerIndex: 0 },
  { id: 24, part: "grammar", level: "C2", question: "Hardly ___ the meeting begun when the fire alarm went off.", options: ["had", "has", "did", "was"], answerIndex: 0 },

  // PART 2 — Vocabulary
  { id: 25, part: "vocabulary", level: "A1", question: 'The opposite of "big" is ___.', options: ["small", "tall", "long", "short"], answerIndex: 0 },
  { id: 26, part: "vocabulary", level: "A2", question: "I'm really ___ about the trip. I can't wait!", options: ["boring", "bored", "excited", "exciting"], answerIndex: 2 },
  { id: 27, part: "vocabulary", level: "B1", question: "Please ___ off your shoes before entering.", options: ["take", "put", "get", "bring"], answerIndex: 0 },
  { id: 28, part: "vocabulary", level: "B1", question: "She has a great ___ of humour.", options: ["sense", "feeling", "mind", "view"], answerIndex: 0 },
  { id: 29, part: "vocabulary", level: "B2", question: "The factory had to ___ down due to financial problems.", options: ["shut", "cut", "put", "turn"], answerIndex: 0 },
  { id: 30, part: "vocabulary", level: "B2", question: "His argument was very ___; nobody could disagree.", options: ["convincing", "convinced", "convince", "convincingly"], answerIndex: 0 },
  { id: 31, part: "vocabulary", level: "C1", question: "The government introduced measures to ___ the economic crisis.", options: ["tackle", "touch", "treat", "take"], answerIndex: 0 },
  { id: 32, part: "vocabulary", level: "C2", question: "The novel offers a ___ critique of modern society.", options: ["scathing", "scratching", "scared", "scaled"], answerIndex: 0 },

  // PART 3 — Reading Comprehension
  { id: 33, part: "reading", level: "A2", passageId: "A", question: "What time does the library close on weekdays?", options: ["8 a.m.", "5 p.m.", "9 p.m.", "10 a.m."], answerIndex: 2 },
  { id: 34, part: "reading", level: "A2", passageId: "A", question: "How many books can a member borrow now?", options: ["5", "10", "2", "8"], answerIndex: 1 },
  { id: 35, part: "reading", level: "B1", passageId: "A", question: "What happens if you return a book late?", options: ["Nothing", "You pay Rp2.000 per day", "You are banned", "You pay Rp5.000"], answerIndex: 1 },
  { id: 36, part: "reading", level: "B1", passageId: "A", question: "When is the library closed?", options: ["Saturdays", "Weekdays", "Sundays", "Mondays"], answerIndex: 2 },

  { id: 37, part: "reading", level: "B2", passageId: "B", question: "According to the passage, remote work is now ___.", options: ["temporary", "permanent", "declining", "banned"], answerIndex: 1 },
  { id: 38, part: "reading", level: "B2", passageId: "B", question: "What do critics say about remote work?", options: ["It increases salaries", "It erodes the sense of community", "It reduces productivity", "It is illegal"], answerIndex: 1 },
  { id: 39, part: "reading", level: "C1", passageId: "B", question: "What has happened to productivity?", options: ["It has fallen sharply", "It has not declined", "It has doubled", "It is unknown"], answerIndex: 1 },
  { id: 40, part: "reading", level: "C1", passageId: "B", question: 'The phrase "a delicate balancing act" suggests companies must ___.', options: ["stop remote work entirely", "manage two competing needs carefully", "hire more managers", "ignore employee feelings"], answerIndex: 1 },
]

export const THRESHOLD: Record<string, number> = { A1: 3, A2: 4, B1: 5, B2: 5, C1: 4, C2: 3 }
export const ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const

export const LEVEL_NAME: Record<string, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper Intermediate",
  C1: "Advanced",
  C2: "Proficient",
}

export function scorePlacement(answers: Record<number, number>): {
  level: string
  correctByLevel: Record<string, number>
  totalCorrect: number
} {
  const correctByLevel: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
  for (const q of QUESTIONS) {
    if (answers[q.id] === q.answerIndex) correctByLevel[q.level]++
  }
  let level = "A1"
  for (const lv of ORDER) {
    if (correctByLevel[lv] >= THRESHOLD[lv]) level = lv
    else break
  }
  const totalCorrect = Object.values(correctByLevel).reduce((a, b) => a + b, 0)
  return { level, correctByLevel, totalCorrect }
}
