const number = document.querySelector("#numero");
const message = document.querySelector("#mensagem");

function generateLink() {
    const selectedCountry = document.getElementById("pais").value;
    const countryCode = obtainCountryCode(selectedCountry);
    const inputNumber = document.getElementById("numero").value;
    const formattedNumber = inputNumber.replace(/\D/g, ""); 

    let space = "&text=";

    const messageInput = document.getElementById("mensagem").value;
    const formattedMessage = messageInput.replaceAll(" ", "%20");

    if (messageInput == "") {
        space = "";
    }

    if (formattedNumber.length !== 11) {
        showError("Insira um número de telefone válido.");
    } else {
        const link = "https://api.whatsapp.com/send?phone=" + countryCode + formattedNumber + space + formattedMessage;

        $('.formulario').css("display", "none");
        $('.input-link').css("display", "flex");
        $("#link").val(link);
        $('#botao-gerar').css("display", "none");
        $('#botao-copiar-link').css("display", "inline-block");
        $('#botao-gerar-outro').css("display", "inline-block");
        $('#botao-direcionar').css("display", "inline-block");
        $('.aviso').css("display", "none");
    }
}

function obtainCountryCode(selectedCountry) {
    switch (selectedCountry) {
        case "BR":
            return "55";
        case "US":
            return "1";
        case "UK":
            return "44";
        default:
            return "55";
    }
}


function showError(message) {
    let erro = document.querySelector('.erro');
    erro.querySelector('p').textContent = message;
    erro.style.opacity = "1";
    erro.style.display = "flex";

    setTimeout(() => {
        erro.style.opacity = "0";
        setTimeout(() => {
            erro.style.display = "none"
        }, 500)
    }, 1500)
}





function redirectFromWhatsapp() {
    const link = document.getElementById("link").value;
    window.open(link, "_blank");
}

const redirectButton = document.getElementById("botao-direcionar");
redirectButton.addEventListener("click", redirectFromWhatsapp);




function copyText() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    $('.link-copiado').css("display", "block");
  }

  function generateOtherLink(){
    $('.formulario').css("display", "block");
    $('.input-link').css("display", "none");
    $('#link').val("");
    $('#numero').val(""); 
    $('#mensagem').val("");
    $('#botao-gerar').css("display", "block");
    $('#botao-copiar-link').css("display", "none");
    $('#botao-gerar-outro').css("display", "none");
    $('#botao-direcionar').css("display", "none");
    $('.aviso').css("display", "block");
    $('#auto-wpp-header-number').text("(XX) X XXXX-XXXX"); 
    $('#balao-fala-wpp p').text("Sua mensagem aparecerá aqui!")
    $('#balao-fala-wpp p').css("color", "#707070");
    $('.link-copiado').css("display", "none");

    $('#numero').mask('(99) 9 9999-9999');
    $('.erro').css("display", "none");
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

function menuOpen(){
    $(".menu-navegacao").css("display", "flex")
    unloadScrollBars()
}

function menuClose(){
    $(".menu-navegacao").css("display", "none")
    reloadScrollBars()
}



window.addEventListener("DOMContentLoaded", function() {
    const redirectButton = document.getElementById("botao-direcionar");
    redirectButton.style.display = "none";
});
