function checkAnswer() {
    // تحديد الإجابة الصحيحية
    const correctAnswer = "4";

    // تحديد إجابة المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // مقارنة إجابة المستخدم بالصحيحة وعرض التغذية الراجعة
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// إضافة event listener على الزر للتنفيذ عند النقر عليه
document.getElementById('submit-answer').addEventListener('click', checkAnswer);