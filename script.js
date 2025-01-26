const correctAnswers = {
    answer1: "Fuerza",
    answer2: "Midiclorianos",
    answer3: "Kyber",
    answer4: "Coruscant",
    answer5: "Ahch-To",
    answer6: "Verde",
    answer7: "Morado",
    answer8: "Obi-wan Kenobi",
    answer9: "Darth Vader",
    answer10: "Telequinesis",
    answer11: "Sith",
    answer12: "Rojo",
    answer13: "Guerras Clon",
    answer14: "Orden 66",
};

const explanations = {
    answer1: "¡Correcto! La Fuerza es una energía mística que existe en el universo y conecta todos los seres vivos; una presencia omnipresente, que puede ser utilizada por aquellos que tienen la habilidad de sentirla o canalizarla.<img src='img/force.webp' class='image' />",
    answer2: "Así es. Cuanto más nivel de midiclorianos por célula tiene un ser vivo, más aptitud tiene para usar la Fuerza.",
    answer3: "Correcto. Como parte de su entrenamiento, los jóvenes Jedi son enviados al helado planeta de Ilum para extraer los cristales y después construir su propio sable de luz.<img src='img/crystal.webp' class='image' />",
    answer4: "¡Sí! Coruscant es uno de los planetas más importantes de la galaxia. Es conocido por ser el centro político, económico y cultural de la misma.<img src='img/c.jpg' class='image' />",
    answer5: "Correcto. Fue el lugar de nacimiento de la Orden Jedi y albergaba los antiguos textos Jedi.<img src='img/ahch.webp' class='image' />",
    answer6: "Es correcto. Se dice que el color azul va ligado a la valentía o la rectitud, mientras que el color verde se asocia a la armonía, la espiritualidad o la buena voluntad.<img src='img/saber.jpg' class='image' />",
    answer7: "¡Muy bien! A Samuel L. Jackson (actor que interpreta a Windu) le parecía muy <em>badass</em> tener un sable morado y le pidió permiso a George Lucas. Fin de la historia.<img src='img/mace.png' class='image' /><a href='https://www.youtube.com/watch?v=QuM9EmDmEX0' target='_blank'>Aquí tienes el momento.</a>",
    answer8: "Correcto. El maestro original de Anakin fue Qui-Gon Jinn. Sin embargo, tras su muerte, fue Obi-Wan Kenobi quien asumió el rol de mentor durante la mayor parte de su vida.<img src='img/obi.webp' class='image' />",
    answer9: "Esta era fácil. Darth Vader es el título le otorga Darth Sidious (también conocido como el Emperador Palpatine), a Anakin tras su caída al lado oscuro de la Fuerza.<img src='img/darth.gif' class='image' />",
    answer10: "Exacto. El nivel de habilidad varía según la experiencia del Jedi, y se utiliza tanto en combate como para otros fines. Requiere de una gran concentración y control.<img src='img/rey.gif' class='image' />",
    answer11: "Efectivamente. A diferencia de los Jedi, los Sith rechazan la idea de la autocontención y creen que los sentimientos intensos, como la ira y el odio, son herramientas poderosas. Sus principales objetivos son destruir a los Jedi y gobernar la galaxia.<img src='img/m.gif' class='image' />",
    answer12: "Correcto. Los sables de luz rojos de los Sith se deben a que utilizan cristales Kyber sintéticos o corrompidos, a diferencia de los Jedi que usan cristales naturales.<img src='img/red.jpg' class='image' />",
    answer13: "¡Sí! La guerra resultó en el ascenso del malvado Canciller Palpatin como Emperador y la conversión de Anakin Skywalker en Darth Vader, tras unirse al lado oscuro. Los Jedi fueron prácticamente aniquilados, marcando el fin de la República y el inicio del Imperio Galáctico.<img src='img/clone.jpg' class='image' />",
    answer14: "¡Exacto! Dicho decreto ordenaba a los soldados clon ejecutar a todos los Jedi como traidores a la República. Aunque la mayoría fueron exterminados, algunos sobrevivieron, como Obi-Wan Kenobi y Yoda, quienes luego lucharon contra el Imperio en los eventos posteriores."
};

let currentQuestion = 1;

function startQuiz() {
    document.getElementById('welcomeScreen').classList.add('hidden');

    document.getElementById('quizForm').classList.remove('hidden');

    document.getElementById('question1').classList.remove('hidden');
}

function showCode() {
    document.getElementById('finalText').classList.remove('hidden');
}

function checkAnswer(questionNumber) {
    document.getElementById('retryMessage').classList.add('hidden');

    const userAnswer = document.getElementById('answer' + questionNumber).value.trim().toLowerCase();
    const correctAnswer = correctAnswers['answer' + questionNumber].toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('message' + questionNumber).classList.remove('hidden');
        document.getElementById('message' + questionNumber).innerHTML = explanations['answer' + questionNumber];

        const nextButton = document.createElement('button');
        nextButton.classList.add('nextButton');
        nextButton.innerHTML = '→';
        nextButton.onclick = function () {
            document.getElementById('message' + questionNumber).classList.add('hidden');
            nextButton.remove();
            document.getElementById('question' + questionNumber).classList.add('hidden');
            currentQuestion++;

            if (currentQuestion <= 14) {
                document.getElementById('question' + currentQuestion).classList.remove('hidden');
            } else {
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('title').classList.add('hidden');
            }
        };

        document.getElementById('message' + questionNumber).appendChild(nextButton);
    } else {
        document.getElementById('retryMessage').classList.remove('hidden');
    }

    document.getElementById('answer' + questionNumber).value = '';
}
