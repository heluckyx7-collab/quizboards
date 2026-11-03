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

    let pool = bank.filter(q =>
      (subject === "All" || q.subject === subject) &&
      (q.language || "hi") === language &&
      (board === "All" || q.board === board || q.board === "All India") &&
      (cls === "All" || q.class === cls)
    );
    let note = "";
    if (pool.length < SIZE) {
      $("status").textContent = language === "en"
        ? "इस विषय और English भाषा में अभी 10 प्रश्न उपलब्ध नहीं हैं। English question bank बढ़ाया जा रहा है। फिलहाल Hindi चुनें या English subject चुनें।"
        : "इस चयन में अभी 10 प्रश्न उपलब्ध नहीं हैं। कृपया All Subjects चुनें।";
      $("quiz").hidden = true;
      return;
    }
    if (pool.length < SIZE) {
      $("status").textContent = "इस विषय में अभी 10 प्रश्न उपलब्ध नहीं हैं। कृपया All Subjects चुनें।";
      return;
    }

    let seen = getSeen();
    let unseen = pool.filter(q => !seen.includes(q.id));
    if (unseen.length < SIZE) {
      const ids = new Set(pool.map(q => q.id));
      seen = seen.filter(id => !ids.has(id));
      unseen = pool;
    }
    quiz = shuffle(unseen).slice(0, SIZE);
    localStorage.setItem(SEEN_KEY, JSON.stringify([...new Set([...seen, ...quiz.map(q => q.id)])]));
    answers = {};
    submitted = false;
    $("result").hidden = true;
    $("quiz").hidden = false;
    $("progress").textContent = "10 Questions";
    $("score-live").textContent = "अंक: 0";
    $("status").textContent = note;
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
    line.textContent = "आपका स्कोर: " + score + " / " + SIZE;
    const again = document.createElement("button");
    again.type = "button";
    again.textContent = "नया Quiz शुरू करें";
    again.addEventListener("click", startQuiz);
    $("result").append(title, line, again);
    $("finish").disabled = true;
    $("result").scrollIntoView({behavior:"smooth",block:"center"});
  }
  $("start").addEventListener("click", startQuiz);
  $("finish").addEventListener("click", finishQuiz);
  if (bank.length < SIZE) {
    $("start").disabled = true;
    $("status").textContent = "Question bank में कम से कम 10 प्रश्न होने चाहिए।";
  }
});