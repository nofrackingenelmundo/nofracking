document.addEventListener("DOMContentLoaded", () => {

    // 10 Preguntas sobre el Fracking y los Páramos
    const preguntas = [
        {
            pregunta: "¿Qué porcentaje de los páramos de todo el planeta se encuentran en Colombia?",
            opciones: ["Un 10 %", "Cerca del 50 %", "El 90 %"],
            correcta: 1,
            explicacion: "¡Correcto! Colombia alberga cerca del 50 % de los páramos de todo el mundo."
        },
        {
            pregunta: "¿A qué porcentaje de la población colombiana abastecen de agua potable los páramos?",
            opciones: ["A más del 70 %", "Solo al 20 %", "Al 100 % de América Latina"],
            correcta: 0,
            explicacion: "¡Excelente! Los páramos suministran agua a más del 70 % de los colombianos."
        },
        {
            pregunta: "¿Qué porcentaje del agua que consume Bogotá proviene del páramo de Chingaza?",
            opciones: ["Entre el 10 % y el 20 %", "Entre el 70 % y el 80 %", "El 100 %"],
            correcta: 1,
            explicacion: "¡Muy bien! El páramo de Chingaza aporta entre el 70 % y el 80 % del agua de la capital."
        },
        {
            pregunta: "¿Qué porcentaje de los productos químicos usados en el fracking tienen efectos comprobados en la salud?",
            opciones: ["El 25 %", "El 50 %", "El 73 %"],
            correcta: 2,
            explicacion: "¡Exacto! El 73 % de los químicos empleados genera afectaciones documentadas en la salud humana."
        },
        {
            pregunta: "¿Cuántas sustancias químicas se mezclan aproximadamente con agua y arena en la inyección de fracking?",
            opciones: ["Menos de 10 sustancias", "Alrededor de 50 sustancias", "Más de 600 sustancias"],
            correcta: 2,
            explicacion: "¡Correcto! Se utilizan más de 600 sustancias químicas, muchas de ellas tóxicas o cancerígenas."
        },
        {
            pregunta: "¿Qué potente gas de efecto invernadero se emite durante las operaciones de fracking?",
            opciones: ["Oxígeno", "Metano", "Helio"],
            correcta: 1,
            explicacion: "¡Así es! El metano es un gas de efecto invernadero muy potente liberado en la extracción."
        },
        {
            pregunta: "¿Qué planta de los páramos actúa junto a los suelos orgánicos como esponja natural para retener la niebla?",
            opciones: ["El Eucalipto", "El Frailejón", "El Pino"],
            correcta: 1,
            explicacion: "¡Excelente! Los frailejones capturan la humedad de la niebla y regulan el flujo de agua."
        },
        {
            pregunta: "¿Cómo se llama el fluido contaminado que regresa a la superficie trayendo metales pesados y sales?",
            opciones: ["Agua pura", "Agua de retorno", "Lluvia ácida"],
            correcta: 1,
            explicacion: "¡Correcto! El agua de retorno arrastra metales pesados y sustancias nocivas del subsuelo."
        },
        {
            pregunta: "¿Cuál es el eslogan principal de nuestra campaña de protección ambiental?",
            opciones: ["Más petróleo, más riqueza", "Páramos sin fracking: futuro con agua", "Agua solo para la industria"],
            correcta: 1,
            explicacion: "¡Exacto! El lema del proyecto es 'Páramos sin fracking: futuro con agua'."
        },
        {
            pregunta: "¿Qué instituto científico del Estado colombiano elaboró la guía de criterios para delimitar los páramos?",
            opciones: ["Instituto Alexander von Humboldt", "NASA", "Ecopetrol"],
            correcta: 0,
            explicacion: "¡Muy bien! El Instituto de Investigación de Recursos Biológicos Alexander von Humboldt elaboró la guía científica."
        }
    ];

    let indicePregunta = 0;
    let aciertos = 0;

    // Referencias a elementos HTML
    const elQuestion = document.getElementById("question");
    const elOptions = document.getElementById("options");
    const elFeedback = document.getElementById("feedback");
    const elBtnNext = document.getElementById("btn-next");
    const elBtnRestart = document.getElementById("btn-restart");
    const elCurrentQuestion = document.getElementById("current-question");
    const elCorrectCount = document.getElementById("correct-count");
    const elFrailejon = document.getElementById("frailejon");
    const elGameBox = document.getElementById("game-box");
    const elFinalScreen = document.getElementById("final-screen");
    const elFinalScore = document.getElementById("final-score");
    const elFinalGrade = document.getElementById("final-grade");
    const elFinalMessage = document.getElementById("final-message");

    if (elBtnNext) elBtnNext.addEventListener("click", siguientePregunta);
    if (elBtnRestart) elBtnRestart.addEventListener("click", reiniciarJuego);

    function cargarPregunta() {
        const q = preguntas[indicePregunta];
        if (elCurrentQuestion) elCurrentQuestion.innerText = indicePregunta + 1;
        if (elQuestion) elQuestion.innerText = (indicePregunta + 1) + ". " + q.pregunta;
        
        if (elOptions) {
            elOptions.innerHTML = "";
            q.opciones.forEach((opcion, index) => {
                const btn = document.createElement("button");
                btn.innerText = opcion;
                btn.style.cssText = "padding:12px; border:2px solid #2d6a4f; border-radius:6px; background:#ffffff; cursor:pointer; font-weight:bold; color:#1b4332; text-align:left; font-size:1rem;";
                btn.addEventListener("click", () => verificarRespuesta(index));
                elOptions.appendChild(btn);
            });
        }
        
        if (elFeedback) elFeedback.innerText = "";
        if (elBtnNext) elBtnNext.style.display = "none";
    }

    function verificarRespuesta(seleccionada) {
        const q = preguntas[indicePregunta];
        const botones = elOptions.querySelectorAll("button");

        botones.forEach(btn => btn.disabled = true);

        if (seleccionada === q.correcta) {
            aciertos++;
            if (elCorrectCount) elCorrectCount.innerText = aciertos;
            if (elFeedback) {
                elFeedback.innerText = q.explicacion;
                elFeedback.style.color = "#2b9348";
            }
            if (elFrailejon) elFrailejon.innerText = "🌻";
        } else {
            if (elFeedback) {
                elFeedback.innerText = "❌ Incorrecto. " + q.explicacion;
                elFeedback.style.color = "#d90429";
            }
            if (elFrailejon) elFrailejon.innerText = "🥀";
        }

        if (elBtnNext) elBtnNext.style.display = "inline-block";
    }

    function siguientePregunta() {
        indicePregunta++;
        if (elFrailejon) elFrailejon.innerText = "🌱";

        if (indicePregunta < preguntas.length) {
            cargarPregunta();
        } else {
            mostrarBoletin();
        }
    }

    function mostrarBoletin() {
        if (elGameBox) elGameBox.style.display = "none";
        if (elFinalScreen) elFinalScreen.style.display = "block";
        
        const nota = ((aciertos / 10) * 4 + 1).toFixed(1);
        
        if (elFinalScore) elFinalScore.innerText = aciertos;
        if (elFinalGrade) elFinalGrade.innerText = nota;

        if (elFinalMessage) {
            if (nota >= 4.0) {
                if (elFrailejon) elFrailejon.innerText = "🏆";
                elFinalMessage.innerText = "¡Excelente desempeño! Demostraste un conocimiento sobresaliente en la defensa de los páramos.";
                elFinalMessage.style.color = "#2b9348";
            } else if (nota >= 3.0) {
                if (elFrailejon) elFrailejon.innerText = "🌱";
                elFinalMessage.innerText = "¡Aprobado! Tienes buen conocimiento sobre el tema, pero puedes repasar los datos clave.";
                elFinalMessage.style.color = "#1b4332";
            } else {
                if (elFrailejon) elFrailejon.innerText = "🥀";
                elFinalMessage.innerText = "Debes repasar la lección sobre el fracking y los páramos antes de volver a intentarlo.";
                elFinalMessage.style.color = "#d90429";
            }
        }
    }

    function reiniciarJuego() {
        indicePregunta = 0;
        aciertos = 0;
        if (elCorrectCount) elCorrectCount.innerText = "0";
        if (elCurrentQuestion) elCurrentQuestion.innerText = "1";
        if (elFrailejon) elFrailejon.innerText = "🌱";
        if (elGameBox) elGameBox.style.display = "block";
        if (elFinalScreen) elFinalScreen.style.display = "none";
        cargarPregunta();
    }

    // Cargar la primera pregunta
    cargarPregunta();
});
