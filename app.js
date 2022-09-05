function submitAnswer() {
    var total = 4
    var score = 0

    var q1 = document.forms['quizform']['q1'].value
    var q2 = document.forms['quizform']['q2'].value
    var q3 = document.forms['quizform']['q3'].value
    var q4 = document.forms['quizform']['q4'].value


    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == null || eval("q" + i) == "") {
            alert('you havent selected anything for question ' + i + "!")
            return false;
        }

    }
    var answers = ["b", "a", "d", "b"]

    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == answers[i - 1]) {
            score++
        }
    }
    var result = document.getElementById('results')
    result.innerHTML =
        '<h3>You scored <sapn>' + score + '</span>out of <span>'
        + total + '</span>'

    alert('you scored ' + score + ' out of ' + total)

}
