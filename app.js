document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const bank = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const SIZE = 10;
  const SEEN_KEY = "quizboard_seen_v1";
  let quiz = [];
  let answers = {};
  let submitted = false;

  function shuffle(list) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function getSeen() {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) || "[]"); }
    catch (_) { return []; }
  }
  function startQuiz() {
    $("status").textContent = "";
    const board = $("board").value;
    const language = $("language").value;
    const cls = $("class").value;
    const subject = $("subject").value;
    const scienceBranch = $("science-branch").value;

    let pool = bank.filter(q =>
      (subject === "All" || q.subject === subject) &&
      (subject !== "Science" || scienceBranch === "All" || q.scienceBranch === scienceBranch) &&
      (q.language || "hi") === language &&
      (board === "All" || q.board === board || q.board === "All India") &&
      (cls === "All" || q.class === cls)
    );
    if (pool.length < SIZE) {
      $("status").textContent = language === "en"
        ? "There are not 10 questions for this selection yet. Choose All Subjects or another subject."
        : "इस चयन में अभी 10 प्रश्न उपलब्ध नहीं हैं। कृपया All Subjects या दूसरा विषय चुनें।";
      $("quiz").hidden = true;
      return;
    }

    let seen = getSeen();
    let unseen = pool.filter(q => !seen.includes(q.id));

    // Start a fresh round only after every question in this selection has appeared.
    if (unseen.length === 0) {
      const poolIds = new Set(pool.map(q => q.id));
      seen = seen.filter(id => !poolIds.has(id));
      localStorage.setItem(SEEN_KEY, JSON.stringify(seen));
      unseen = [...pool];
      $("status").textContent = language === "en"
        ? "Great! You completed this question set. A fresh round has started."
        : "बहुत अच्छा! इस चयन के सभी प्रश्न पूरे हुए। अब नया राउंड शुरू हो रहा है।";
    }

    // The final round may contain fewer than 10 questions; do not repeat early.
    quiz = shuffle(unseen).slice(0, SIZE);
    localStorage.setItem(SEEN_KEY, JSON.stringify([...seen, ...quiz.map(q => q.id)]));
    answers = {};
    submitted = false;
    $("result").hidden = true;
    $("finish").disabled = false;
    $("quiz").hidden = false;
    $("progress").textContent = quiz.length + " Questions";
    $("score-live").textContent = "अंक: 0";
    $("status").textContent = "";
    renderQuestions();
    $("quiz").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function renderQuestions() {
    const list = $("question-list");
    list.replaceChildren();
    quiz.forEach((q, index) => {
      const card = document.createElement("article");
      card.className = "question-card";
      const heading = document.createElement("h3");
      heading.textContent = (index + 1) + ". " + q.question;
      const options = document.createElement("div");
      options.className = "options";
      q.options.forEach((value, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.textContent = String.fromCharCode(65 + optionIndex) + ". " + value;
        button.addEventListener("click", () => choose(index, optionIndex));
        options.appendChild(button);
      });
      const explanation = document.createElement("p");
      explanation.className = "explanation";
      explanation.hidden = true;
      explanation.id = "explanation-" + index;
      card.append(heading, options, explanation);
      list.appendChild(card);
    });
  }
  function choose(questionIndex, optionIndex) {
    if (submitted || Object.prototype.hasOwnProperty.call(answers, questionIndex)) return;
    answers[questionIndex] = optionIndex;
    const q = quiz[questionIndex];
    const card = $("question-list").children[questionIndex];
    [...card.querySelectorAll("button")].forEach((button, i) => {
      button.disabled = true;
      if (i === q.answer) button.classList.add("correct");
      if (i === optionIndex && optionIndex !== q.answer) button.classList.add("wrong");
    });
    const explanation = $("explanation-" + questionIndex);
    explanation.hidden = false;
    explanation.textContent = (optionIndex === q.answer ? "सही जवाब! " : "गलत जवाब। सही उत्तर: " + q.options[q.answer] + ". ") + (q.explanation || "व्याख्या उपलब्ध नहीं है।");
    const currentScore = quiz.reduce((total, item, i) => total + (answers[i] === item.answer ? 1 : 0), 0);
    $("score-live").textContent = "अंक: " + currentScore;
  }
  function finishQuiz() {
    if (submitted) return;
    const unanswered = quiz.length - Object.keys(answers).length;
    if (unanswered > 0 && !confirm(unanswered + " प्रश्न अभी बाकी हैं। फिर भी Submit करना है?")) return;
    submitted = true;
    const score = quiz.reduce((total, item, i) => total + (answers[i] === item.answer ? 1 : 0), 0);
    $("result").hidden = false;
    $("result").replaceChildren();
    const title = document.createElement("h2");
    title.textContent = "Quiz पूरा हुआ!";
    const line = document.createElement("p");
    line.textContent = "आपका स्कोर: " + score + " / " + quiz.length;
    const again = document.createElement("button");
    again.type = "button";
    again.textContent = "नया Quiz शुरू करें";
    again.addEventListener("click", startQuiz);
    $("result").append(title, line, again);
    $("finish").disabled = true;
    $("result").scrollIntoView({behavior:"smooth",block:"center"});
  }
  $("subject").addEventListener("change", () => {
    $("science-branch-label").hidden = $("subject").value !== "Science";
  });
  $("start").addEventListener("click", startQuiz);
  $("finish").addEventListener("click", finishQuiz);
  if (bank.length < SIZE) {
    $("start").disabled = true;
    $("status").textContent = "Question bank में कम से कम 10 प्रश्न होने चाहिए।";
  }
});