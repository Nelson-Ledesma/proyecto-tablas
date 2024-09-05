let correctAnswer;

        function generateQuestion() {
            const tableSelect = document.getElementById('tableSelect').value;
            const number1 = tableSelect === "0" ? Math.floor(Math.random() * 10) + 1 : parseInt(tableSelect);
            const number2 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = number1 * number2;

            document.getElementById('question').innerText = `¿Cuánto es ${number1} x ${number2}?`;

            const options = document.querySelectorAll('.option-button');
            const correctOptionIndex = Math.floor(Math.random() * 4);

            options.forEach((button, index) => {
                // Resetear botones
                button.classList.remove('correct', 'incorrect');
                button.disabled = false;

                if (index === correctOptionIndex) {
                    button.innerText = correctAnswer;
                } else {
                    let wrongAnswer;
                    do {
                        wrongAnswer = Math.floor(Math.random() * 100) + 1;
                    } while (wrongAnswer === correctAnswer);
                    button.innerText = wrongAnswer;
                }
            });

            document.getElementById('feedback').innerText = '';
        }

        function checkAnswer(button) {
            const options = document.querySelectorAll('.option-button');
            options.forEach(btn => btn.disabled = true); // Deshabilitar todos los botones después de la selección

            if (parseInt(button.innerText) === correctAnswer) {
                button.classList.add('correct');
                document.getElementById('feedback').innerText = '¡Correcto!';
            } else {
                button.classList.add('incorrect');
                document.getElementById('feedback').innerText = `Incorrecto. La respuesta es ${correctAnswer}`;
            }

            setTimeout(generateQuestion, 2000);
        }

        // Inicializa con una pregunta
        generateQuestion();