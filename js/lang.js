
// Language features
let language = navigator.language;
let dashIndex = language.indexOf('-');
if (dashIndex >= 0) {
    language = language.substring(0, dashIndex);
}
switch(language) {
    case "es":
        spanish_configurations();
        break;
    case "en":
        english_configurations();
        break;
    default:
        spanish_configurations();
        break;
}
function spanish_configurations() {
    $("#es_button_text").removeClass("hidden");
    $(".home_button").text("Inicio");
    $(".categories_button").text("Categorías");
    $(".about_us_button").text("Sobre Nosotros");
    $(".contact_us_button").text("Contáctanos");
    $(".review_button").text("Deja una Reseña");
    $(".chat_with_us_button").text("Chatea con Nosotros");
    $(".privacy_policy_button").text("Políticas de Privacidad");
    $("#about_us_title").text("Sobre Nosotros");
    $("#about_us_description").html(
        "Disfruta de la magia de los muñecos de lana hechos a mano meticulosamente.<br>\n" +
        "          Cada muñeca es un testimonio de cuidado y dedicación, lo que garantiza la más alta<br>\n" +
        "          calidad y un toque de encanto personalizado.<br><br>\n" +
        "          Contáctanos para solicitar una creación única, donde cada puntada cuente<br>\n" +
        "          una historia de amor y artesanía."
    );
    $("#categories_title").text("Nuestras categorías");
    $("#montessori_card_description").text("Muñecos amigurumi estilo Montessori, diseñados con fibras de lana naturales, suaves y de color neutro, ideales para estimular el desarrollo sensorial de los niños mientras fomentan la conexión con la naturaleza.");
    $("#catalog_card_title").text("Catálogo");
    $("#catalog_card_description").text("Nuestra selección de muñecas más populares, con una variedad de estilos y colores para elegir.");
    $("#custom_card_title").text("Personalizado");
    $("#custom_card_description").html("Haremos realidad tu visión de un Amigurumi hecho a medida.<br>Contáctanos para solicitar una creación única!");
    $("#for_babies_card_title").text("Para bebés");
    $("#for_babies_card_description").text(
        "Celebra cada momento, desde la alegría del recién nacido hasta el juego de los niños pequeños, con nuestras colecciones personalizadas para bautismos, baby showers y cumpleaños."
    );
    
    $("#footer_location_text").html(
        "Mendoza, Argentina.\n" +
        "          <br>\n" +
        "          <br>\n" +
        "          Envíos a todo el país.\n" +
        "          <br>\n" +
        "          <br>\n" +
        "          Consultar por envíos al exterior."
    );
    $("#footer_legals_text").text("Copyright © 2023 Normigurumi - Todos los Derechos Reservados - Insertar Patente si Corresponde");
}

function english_configurations() {
    $("#en_button_text").removeClass("hidden");
}
