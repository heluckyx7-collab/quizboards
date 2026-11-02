// Starter question bank: 500 entries. Review and expand with board-wise syllabus questions before production use.\nconst QUIZ_QUESTIONS = [
  {
    "id": "qp001",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp002",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp003",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp004",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp005",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp006",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp007",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp008",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp009",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp010",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp011",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp012",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp013",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp014",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp015",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp016",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp017",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp018",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp019",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp020",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp021",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp022",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp023",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp024",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp025",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp026",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp027",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp028",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp029",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp030",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp031",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp032",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp033",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp034",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp035",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp036",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp037",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp038",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp039",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp040",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp041",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp042",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp043",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp044",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp045",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp046",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp047",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp048",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp049",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp050",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp051",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp052",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp053",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp054",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp055",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp056",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp057",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp058",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp059",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp060",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp061",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp062",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp063",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp064",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp065",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp066",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp067",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp068",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp069",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp070",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp071",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp072",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp073",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp074",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp075",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp076",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp077",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp078",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp079",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp080",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp081",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp082",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp083",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp084",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp085",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp086",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp087",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp088",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp089",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp090",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp091",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp092",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp093",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp094",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp095",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp096",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp097",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp098",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp099",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp100",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp101",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp102",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp103",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp104",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp105",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp106",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp107",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp108",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp109",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp110",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp111",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp112",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp113",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp114",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp115",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp116",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp117",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp118",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp119",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp120",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp121",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp122",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp123",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp124",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp125",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp126",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp127",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp128",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp129",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp130",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp131",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp132",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp133",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp134",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp135",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp136",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp137",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp138",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp139",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp140",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp141",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp142",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp143",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp144",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp145",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp146",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp147",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp148",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp149",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp150",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp151",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp152",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp153",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp154",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp155",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp156",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp157",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp158",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp159",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp160",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp161",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp162",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp163",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp164",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp165",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp166",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp167",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp168",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp169",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp170",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp171",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp172",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp173",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp174",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp175",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp176",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp177",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp178",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp179",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp180",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp181",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp182",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp183",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp184",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp185",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp186",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp187",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp188",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp189",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp190",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp191",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp192",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp193",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp194",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp195",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp196",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp197",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp198",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp199",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp200",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp201",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp202",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp203",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp204",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp205",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp206",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp207",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp208",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp209",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp210",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp211",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp212",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp213",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp214",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp215",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp216",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp217",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp218",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp219",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp220",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp221",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp222",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp223",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp224",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp225",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp226",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp227",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp228",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp229",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp230",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp231",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp232",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp233",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp234",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp235",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp236",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp237",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp238",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp239",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp240",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp241",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp242",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp243",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp244",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp245",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp246",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp247",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp248",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp249",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp250",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp251",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp252",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp253",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp254",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp255",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp256",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp257",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp258",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp259",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp260",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp261",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp262",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp263",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp264",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp265",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp266",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp267",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp268",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp269",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp270",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp271",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp272",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp273",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp274",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp275",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp276",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp277",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp278",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp279",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp280",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp281",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp282",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp283",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp284",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp285",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp286",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp287",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp288",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp289",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp290",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp291",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp292",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp293",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp294",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp295",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp296",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp297",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp298",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp299",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp300",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp301",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp302",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp303",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp304",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp305",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp306",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp307",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp308",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp309",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp310",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp311",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp312",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp313",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp314",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp315",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp316",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp317",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp318",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp319",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp320",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp321",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp322",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp323",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp324",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp325",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp326",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp327",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp328",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp329",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp330",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp331",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp332",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp333",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp334",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp335",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp336",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp337",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp338",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp339",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp340",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp341",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp342",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp343",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp344",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp345",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp346",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp347",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp348",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp349",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp350",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp351",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp352",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp353",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp354",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp355",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp356",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp357",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp358",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp359",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp360",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp361",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp362",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp363",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp364",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp365",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp366",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp367",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp368",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp369",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp370",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp371",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp372",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp373",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp374",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp375",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp376",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp377",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp378",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp379",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp380",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp381",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp382",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp383",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp384",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp385",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp386",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp387",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp388",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp389",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp390",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp391",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp392",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp393",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp394",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp395",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp396",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp397",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp398",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp399",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp400",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp401",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp402",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp403",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp404",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp405",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp406",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp407",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp408",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp409",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp410",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp411",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp412",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp413",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp414",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp415",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp416",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp417",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp418",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp419",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp420",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp421",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp422",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp423",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp424",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp425",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp426",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp427",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp428",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp429",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp430",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp431",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp432",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp433",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp434",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp435",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp436",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp437",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp438",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp439",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp440",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp441",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp442",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp443",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp444",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp445",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp446",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp447",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp448",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp449",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp450",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp451",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp452",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp453",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp454",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp455",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp456",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp457",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp458",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp459",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp460",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp461",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp462",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp463",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp464",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp465",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp466",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp467",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp468",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp469",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp470",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp471",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp472",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp473",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp474",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp475",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp476",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp477",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp478",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp479",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp480",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp481",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp482",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp483",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp484",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp485",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp486",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp487",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp488",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp489",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp490",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    "id": "qp491",
    "board": "CBSE",
    "class": "10",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत की राजधानी क्या है?",
    "options": [
      "दिल्ली",
      "मुंबई",
      "कोलकाता",
      "चेन्नई"
    ],
    "answer": 0,
    "explanation": "नई दिल्ली भारत की राजधानी है।"
  },
  {
    "id": "qp492",
    "board": "Bihar",
    "class": "12",
    "subject": "Science",
    "chapter": "Chemistry",
    "question": "जल का रासायनिक सूत्र क्या है?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "answer": 1,
    "explanation": "जल हाइड्रोजन और ऑक्सीजन से बनता है।"
  },
  {
    "id": "qp493",
    "board": "UP",
    "class": "10",
    "subject": "Maths",
    "chapter": "Arithmetic",
    "question": "7 × 8 कितना होता है?",
    "options": [
      "54",
      "56",
      "64",
      "48"
    ],
    "answer": 1,
    "explanation": "7 को 8 से गुणा करने पर 56 मिलता है।"
  },
  {
    "id": "qp494",
    "board": "MP",
    "class": "12",
    "subject": "Social Science",
    "chapter": "Civics",
    "question": "भारत का संविधान कब लागू हुआ?",
    "options": [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "2 अक्टूबर 1949",
      "26 नवंबर 1949"
    ],
    "answer": 1,
    "explanation": "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    "id": "qp495",
    "board": "All India",
    "class": "10",
    "subject": "Hindi",
    "chapter": "Grammar",
    "question": "संज्ञा किसे कहते हैं?",
    "options": [
      "काम बताने वाला शब्द",
      "नाम बताने वाला शब्द",
      "गुण बताने वाला शब्द",
      "जोड़ने वाला शब्द"
    ],
    "answer": 1,
    "explanation": "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं।"
  },
  {
    "id": "qp496",
    "board": "CBSE",
    "class": "12",
    "subject": "English",
    "chapter": "Grammar",
    "question": "What is the plural of 'child'?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "answer": 1,
    "explanation": "The plural form of child is children."
  },
  {
    "id": "qp497",
    "board": "Bihar",
    "class": "10",
    "subject": "Science",
    "chapter": "Biology",
    "question": "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
    "options": [
      "श्वसन",
      "प्रकाश संश्लेषण",
      "वाष्पोत्सर्जन",
      "पाचन"
    ],
    "answer": 1,
    "explanation": "हरे पौधे सूर्य के प्रकाश की मदद से भोजन बनाते हैं।"
  },
  {
    "id": "qp498",
    "board": "UP",
    "class": "12",
    "subject": "Maths",
    "chapter": "Number System",
    "question": "12 और 18 का HCF क्या है?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "12 और 18 दोनों को 6 से पूरी तरह भाग दिया जा सकता है।"
  },
  {
    "id": "qp499",
    "board": "MP",
    "class": "10",
    "subject": "Social Science",
    "chapter": "History",
    "question": "1857 का विद्रोह कहाँ से शुरू हुआ?",
    "options": [
      "दिल्ली",
      "कानपुर",
      "मेरठ",
      "लखनऊ"
    ],
    "answer": 2,
    "explanation": "1857 का विद्रोह मेरठ से शुरू हुआ था।"
  },
  {
    "id": "qp500",
    "board": "All India",
    "class": "12",
    "subject": "General Knowledge",
    "chapter": "India",
    "question": "भारत का राष्ट्रीय पशु कौन है?",
    "options": [
      "शेर",
      "बाघ",
      "हाथी",
      "मोर"
    ],
    "answer": 1,
    "explanation": "बाघ भारत का राष्ट्रीय पशु है।"
  }
];