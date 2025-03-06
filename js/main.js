const reasons = [
"1: Tu sonrisa",  
"2: Tus ojos",  
"3: Tu voz",  
"4: Tu esencia",  
"5: Tus metas",  
"6: Tu Apoyo",  
"7: Tu alma",  
"8: Tu brillo",  
"9: Tu Creatividad",  
"10: Tus labios",  
"11: La forma en que te quedas",  
"12: La forma de tu cabello",  
"13: La forma de tu corazon",  
"14: La forma en que me haces sentir",  
"15: La forma en la que alegras cualquier dia",  
"16: Nuestros recuerdos",  
"17: Las pocas fotos de recuerdo",  
"18: Nuestras memorias",  
"19: Nuestra conexion",  
"20: Nuestros videos",  
"21: Nuestros planes",  
"22: Nuestros futuros hijos",  
"23: Nuestro futuro",  
"24: Nuestro amor",  
"25: Cada te amo",  
"26: Cada llamada",  
"27: Cada Mi Niña, Mi Corazon",  
"28: Cada Buenos Dias",  
"29: Cada Buenas Noches",  
"30: Cada Dia",  
"31: Cada vez que hiciste todo por mi",  
"32: Cada vez que hice todo por ti",  
"33: Cada vez que me ayudaste",  
"34: Cada vez que me perdonaste",  
"35: Cada vez que me entendiste",  
"36: Cada vez que solo fuiste tu",  
"37: Cada vez que nos ayudabamos",  
"38: Cada vez que cuidaste de mi",  
"39: Me haces reir",  
"40: Me haces soñar",  
"41: Me haces llorar",  
"42: Me siento especial",  
"43: Me siento feliz",  
"44: Me siento orgulloso de ti",  
"45: Me siento completo contigo",  
"46: No puedo estar sin ti",  
"47: Eres maravillosa",  
"48: Eres mi mundo",  
"49: Eres mi primer amor",  
"50: Eres mi alma gemela",  
"51: Eres mi confianza",  
"52: Eres mi confianza",  
"53: Eres mi lugar seguro",  
"54: Nuestros chistes internos",  
"55: La paz que me das cuando tu estas",  
"56: La paz que me das con solo hablarme",
"57: La forma en que me escuchas cuando más lo necesito",
"58: La dulzura en tus palabras",
"59: Lo bien que me siento cuando hablamos",
"60: Lo increíble que es verte sonreír en videollamadas",
"61: Lo hermoso que es cuando compartimos nuestras emociones",
"62: Lo fuerte que eres incluso en los momentos difíciles",
"63: Lo mucho que me enseñas sin darte cuenta",
"64: Lo mucho que me inspiras a ser mejor",
"65: Lo orgulloso que estoy de ti",
"66: Lo increíble que es vernos crecer juntos, aunque sea a la distancia",
"67: Tu sinceridad, incluso cuando no es fácil",
"68: Tu paciencia conmigo",
"69: Tu forma de demostrar amor a tu manera",
"70: Tu risa, que es mi sonido favorito en llamadas",
"71: Tu forma de hacer que cualquier día sea especial, aunque estemos lejos",
"72: Tu forma de hacer que me enamore de ti cada día más",
"73: Tu forma de mirarme como si fuera lo más importante",
"74: Tu forma de calmar con solo escribir",
"75: Tu forma de motivarme cuando me siento perdido",
"76: Tu apoyo en cada decisión que tomo",
"77: Tus ocurrencias que me sacan carcajadas incluso a través de mensajes",
"78: Tus mensajes inesperados que alegran mi día",
"79: Tus palabras que me llenan de confianza",
"80: Tus pequeñas acciones que significan el mundo para mí",
"81: Cada vez que me dices que me amas sin importar la distancia",
"82: Cada vez que me haces sentir que valgo la pena",
"83: Cada vez que me demuestras que estás para mí",
"84: Cada foto o video",
"85: Cada promesa que hemos hecho juntos a pesar de la distancia",
"86: Cada sueño que construimos en nuestra mente para nuestro futuro",
"87: Cada canción que me recuerda a ti",
"88: Cada momento a tu lado, aunque sea virtual, que guardo en mi corazón",
"89: Cada vez que me haces sentir afortunado de tenerte",
"90: Cada vez que nuestras palabras se encuentran y sentimos esa conexión única",
"91: Cada vez que me haces sentir que soy suficiente",
"92: Cada sacrificio que hacemos por nuestra relación",
"93: Cada detalle tuyo que me enamora más",
"94: Cada pequeño gesto que demuestra cuánto te importo",
"95: Cada instante a tu lado, aunque sea en la distancia, que se vuelve inolvidable",
"96: Cada vez que me sorprendes con algo lindo, aunque sea un simple mensaje",
"97: Porque a pesar de la distancia, nuestro amor sigue creciendo",
"98: Porque sin importar cuántos kilómetros nos separen, seguimos juntos",
"99: Porque no hay barrera que pueda vencer lo que sentimos",
"100: Porque amarte es lo más fácil y hermoso que he hecho en mi vida",


    "Para irme... a donde sea, pero siempre contigo 💖"
];

let index = 0;
const reasonText = document.getElementById("reason-text");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
    if (index < reasons.length) {
        reasonText.textContent = reasons[index];
        index++;
    } else {
        reasonText.textContent = "No sé bien cómo empezar estas palabras, porque hay tantas cosas que me gustaría decirte y otras tantas que quizá nunca encuentre la manera correcta de expresar. Pero quiero intentarlo, porque aunque nuestras vidas tomen caminos distintos, lo nuestro merece un cierre con la misma sinceridad con la que empezó.Desde el principio, nuestra relación desafió la distancia, el tiempo y las dudas. Aprendimos a querernos a través de pantallas, a extrañarnos en silencio y a celebrar cada pequeño momento como si el mundo se detuviera solo para nosotros. No fue fácil, pero cada risa, cada madrugada hablando y cada promesa compartida hicieron que valiera la pena.No me arrepiento de nada. De haberte elegido, de haber apostado por nosotros, de haber creído en lo que sentíamos. Porque aunque hoy las cosas no sean como imaginamos, todo lo que vivimos fue real. Me quedo con los recuerdos bonitos, con las lecciones aprendidas y con el cariño que aún, de alguna manera, seguirá existiendo en mí.No sé qué nos depare el futuro. Quizá el tiempo nos lleve por caminos separados o tal vez, algún día, nuestros caminos se crucen de nuevo. Pero pase lo que pase, quiero que sepas que siempre te amare con todo el corazon. Feliz cumpleaños te amo.";
        nextBtn.style.display = "none";
    }
});
