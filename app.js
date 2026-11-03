document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const startButton = $("start");
  const nextButton = $("next");
  const questionBank = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const SEEN_KEY = "quizpath_seen_v2";
  const QUIZ_SIZE = 10;
  let round = [];
  let position = 0;
  let score = 0;
  let answered = false;

  if (!startButton || !nextButton) {
    console.error("QuizPath: start/next button element missing.");
    return;
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getSeen() {
    try {
      return JSON.parse(localStorage.getItem(SEEN_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function startQuiz() {
    if (questionBank.length < QUIZ_SIZE) {
      alert("अभी प्रश्न बैंक में 10 प्रश्न उपलब्ध नहीं हैं।");
      return;
    }

    const board = $("board")?.value || "All";
    const classValue = $("class")?.value || "All";
    const subject = $("subject")?.value || "All";

    const subjectPool = questionBank.filter(q => subject === "All" || q.subject === subject);
    const exactPool = subjectPool.filter(q =>
      (board === "All" || q.board === board || q.board === "All India") &&
      (classValue === "All" || q.class === classValue)
    );

    // Keep subject filtering strict. If a board/class combination has too few
    // questions, widen only the board/class scope, never the selected subject.
    let pool = exactPool;
    let note = "";
    if (pool.length < QUIZ_SIZE && board !== "All") {
      pool = subjectPool.filter(q => classValue === "All" || q.class === classValue);
      note = "इस बोर्ड में इस चयन के 10 प्रश्न नहीं थे, इसलिए उसी विषय के दूसरे बोर्डों के प्रश्न भी शामिल किए गए हैं।";
    }
    if (pool.length < QUIZ_SIZE && classValue !== "All") {
      pool = subjectPool;
      note = "इस चयन में 10 प्रश्न नहीं थे, इसलिए उसी विषय और दूसरे कक्षा स्तरों के प्रश्न भी शामिल किए गए हैं।";
    }
    if (pool.length < QUIZ_SIZE && subject !== "All") {
      alert("इस विषय के प्रश्न अभी 10 से कम हैं। कृपया दूसरा विषय चुनें।");
      return;
    }
    if (pool.length < QUIZ_SIZE) pool = questionBank;

    let seen = getSeen();
    let unseen = pool.filter(q => !seen.includes(q.id));
    if (unseen.length < QUIZ_SIZE) {
      // Reset only this pool's history when fewer than ten unseen questions remain.
      const poolIds = new Set(pool.map(q => q.id));
      seen = seen.filter(id => !poolIds.has(id));
      unseen = pool;
    }

    round = shuffle(unseen).slice(0, QUIZ_SIZE);
    localStorage.setItem(SEEN_KEY, JSON.stringify([...new Set([...seen, ...round.map(q => q.id)])]));
    position = 0;
    score = 0;
    $("result").hidden = true;
    $("quiz").hidden = false;
    $("feedback").textContent = note;
    showQuestion();
  }

  function showQuestion() {
    answered = false;
    const q = round[position];
    $("progress").textContent = "प्रश्न " + (position + 1) + " / 10 | अंक: " + score;
    $("question").textContent = q.question;
    if (!position) $("feedback").textContent = "";
    nextButton.hidden = true;
    $("options").replaceChildren();

    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = String.fromCharCode(65 + index) + ". " + option;
      button.addEventListener("click", () => submitAnswer(index));
      $("options").appendChild(button);
    });
  }

  function submitAnswer(selected) {
    if (answered) return;
    answered = true;
    const q = round[position];
    [...$("options").children].forEach((button, index) => {
      button.disabled = true;
      if (index === q.answer) button.style.background = "#d8f7df";
      if (index === selected && selected !== q.answer) button.style.background = "#ffe0e0";
    });

    if (selected === q.answer) score++;
    $("feedback").textContent =
      (selected === q.answer ? "सही जवाब! " : "गलत जवाब। सही उत्तर: " + q.options[q.answer] + ". ") +
      (q.explanation || "इस प्रश्न की व्याख्या उपलब्ध नहीं है।");
    nextButton.textContent = position === QUIZ_SIZE - 1 ? "परिणाम देखें" : "अगला प्रश्न";
    nextButton.hidden = false;
  }

  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    position++;
    if (position < QUIZ_SIZE) {
      showQuestion();
    } else {
      $("quiz").hidden = true;
      $("result").hidden = false;
      $("result").replaceChildren();
      const heading = document.createElement("h2");
      heading.textContent = "Quiz पूरा हुआ!";
      const scoreText = document.createElement("p");
      scoreText.textContent = "आपका स्कोर: " + score + " / " + QUIZ_SIZE;
      const restart = document.createElement("button");
      restart.type = "button";
      restart.textContent = "फिर से शुरू करें";
      restart.addEventListener("click", startQuiz);
      $("result").append(heading, scoreText, restart);
    }
  });

  if (!questionBank.length) {
    startButton.disabled = true;
    $("feedback").textContent = "प्रश्न बैंक लोड नहीं हुआ। questions.js की जाँच करें।";
  }
});