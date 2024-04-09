const numero = document.querySelector("#numero");
const mensagem = document.querySelector("#mensagem");

function gerarLink() {
    const paisSelecionado = document.getElementById("pais").value;
    const codigoPais = obterCodigoPais(paisSelecionado);
    const numeroInput = document.getElementById("numero").value;
    const numeroFormatado = numeroInput.replace(/\D/g, ""); 

    let espaço = "&text=";

    const mensagemInput = document.getElementById("mensagem").value;
    const mensagemFormatada = mensagemInput.replaceAll(" ", "%20");

    if (mensagemInput == "") {
        espaço = "";
    }

    if (numeroFormatado.length !== 11) {
        mostrarErro("Insira um número de telefone válido.");
    } else {
        const link = "https://api.whatsapp.com/send?phone=" + codigoPais + numeroFormatado + espaço + mensagemFormatada;

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

function obterCodigoPais(paisSelecionado) {
    switch (paisSelecionado) {
        case "BR":
            return "55";
        case "US":
            return "1";
        case "UK":
            return "44";
        default:
            return "";
    }
}



function mostrarErro(mensagem) {
    let erro = document.querySelector('.erro');
    erro.querySelector('p').textContent = mensagem;
    erro.style.opacity = "1";
    erro.style.display = "flex";

    setTimeout(() => {
        erro.style.opacity = "0";
        setTimeout(() => {
            erro.style.display = "none"
        }, 500)
    }, 1500)
}





function direcionarParaWhatsApp() {
    const link = document.getElementById("link").value;
    window.open(link, "_blank");
}

const botaoDirecionar = document.getElementById("botao-direcionar");
botaoDirecionar.addEventListener("click", direcionarParaWhatsApp);




function copyText() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    $('.link-copiado').css("display", "block");
  }

  function gerarOutroLink(){
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

function abrirMenu(){
    $(".menu-navegacao").css("display", "flex")
    unloadScrollBars()
}

function fecharMenu(){
    $(".menu-navegacao").css("display", "none")
    reloadScrollBars()
}



window.addEventListener("DOMContentLoaded", function() {
    const botaoDirecionar = document.getElementById("botao-direcionar");
    botaoDirecionar.style.display = "none";
});
