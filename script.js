// DIGITAL AWARENESS QUIZ
const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const answers = {
            q1: "b",
            q2: "a",
            q3: "c",
            q4: "b",
            q5: "c"
        };

        const formData = new FormData(quizForm);
        let score = 0;

        for (const question in answers) {
            if (formData.get(question) === answers[question]) {
                score++;
            }
        }

        const result = document.getElementById("quizResult");
        let message = "";

        if (score === 5) {
            message = "Excellent! You have a strong understanding of digital safety.";
        } else if (score >= 3) {
            message = "Good effort! Review the lessons to improve your knowledge.";
        } else {
            message = "Keep learning! Visit the Learn and Online Safety pages and try again.";
        }

        result.textContent =
            "Your score: " + score + " out of 5. " + message;

        result.hidden = false;
    });

    quizForm.addEventListener("reset", function () {
        const result = document.getElementById("quizResult");
        result.hidden = true;
        result.textContent = "";
    });
}


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const result = document.getElementById("contactResult");

        if (!name) {
            result.textContent = "Please enter your name.";
            result.hidden = false;
            return;
        }

        result.textContent =
            "Thank you, " + name +
            "! Your form was validated successfully. " +
            "This demo has not sent or saved your feedback.";

        result.hidden = false;
        contactForm.reset();
    });
}
