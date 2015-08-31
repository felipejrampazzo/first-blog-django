//ROLAGEM SUAVE ENTRE ANCORAS
$(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });
});
//FIM ROLAGEM SUAVE ENTRE ANCORAS


//SUMIR COM O MENU E BOTAO VOLTAR AO TOPO
function url_blog(){
    var path = window.location.pathname;
    return path.indexOf('/blog/') > -1;
}

$(document).ready(function () {
    var lastScrollTop = 0;
    var header = $("#header_top");
    var icon_menu=$("#icon_menu");
    if(url_blog()){
        header.addClass('bg-grey');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#button_top").removeClass('hidden');
            header.addClass('bg-grey');
            $('#name_top').removeClass('hidden');
        } else {
            $("#button_top").addClass('hidden');
            if(!url_blog()){
                header.removeClass('bg-grey');
            }
            $('#name_top').addClass('hidden');
        }

        var st = $(this).scrollTop();
        if (st < lastScrollTop) {
            header.fadeIn();
            icon_menu.fadeIn();
        } else {
            header.fadeOut();
            icon_menu.fadeOut();
        }
        lastScrollTop = st;
    });
});
//FIM SUMIR COM O MENU E BOTAO VOLTAR AO TOPO

//APARECER MENU PARA MOBILE
function openMenu(){
    $("#icon_menu").removeClass("close_menu").addClass("open_menu");
    $("#ul_nav li").css("visibility","visible");
    $("#ul_nav").animate({
        height: 150
    }, 350).addClass("bg-grey");
}

function closeMenu(){
    $("#icon_menu").removeClass("open_menu").addClass("close_menu");
    $("#ul_nav li").css("visibility","hidden");
    $("#ul_nav").animate({
        height: 0
    }, 350);
}


$(function () { 
    $("#icon_menu").click(function () {
        if( $("#icon_menu").hasClass("close_menu") ){
            openMenu();
        }
        else {
            closeMenu();
        }
    });
});  


$(window).resize(function(){
    if($(window).width() > 883){
        if($("#icon_menu").hasClass("open_menu")){
            closeMenu();
        }
        $("#ul_nav li").css("visibility","visible");
    }
    else{
        if($("#icon_menu").hasClass("open_menu")){ 
            $("#ul_nav li").css("visibility","visible");
        }
        if($("#icon_menu").hasClass("close_menu")){ 
            $("#ul_nav li").css("visibility","hidden");
        }   
    }
});
//FIM MENU MOBILE


//ENVIO CONTATOS 
jQuery(document).ready(function(){
    $('.invalid_input').hover(function(){
        $(this).css('display','none');
    });
    jQuery("#form_contact").submit(function(){
        if($('#captcha').val() == ''){
            var name=$('#name').val();
            var email=$('#email').val();
            var message=$('#message').val();

            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            
            var valid=true;

            if(name==''){
                $('#error_name').css('display','block');
                $('#error_name').html('Ops cowboy, esqueceu seu nome...');
                valid=false;
            }
            else if(name.length <= 7){
                $('#error_name').css('display','block');
                $('#error_name').html('Seu nome inteiro tem menos que 8 letras?');
                valid=false;
            }
            if(email==''){
                $('#error_email').css('display','block');
                $('#error_email').html('Não esqueça seu email!');
                valid=false;
            }
            else if (!filter.test(email)){
                $('#error_email').css('display','block');
                $('#error_email').html('Esse email não está correto...');
                valid=false;
            }
            if(message==''){
                $('#error_msg').css('display','block');
                $('#error_msg').html('Nenhuma mensagem para mim?');
                valid=false;
            }
            else if(message.length <= 10){
                $('#error_msg').css('display','block');
                $('#error_msg').html('Escreva mais para mim, por favor!');
                valid=false;
            }

            if(valid){
                var dados = jQuery(this).serialize();
                $.ajax({
                    beforeSend: function(){
                        $('#loading_ajax').addClass('loader_ajax');
                    },
                    type: "POST",
                    url: "contact-form.php",
                    data: dados,
                    dataType: 'json', 
                    encode: true,
                    success: function(data) {
                        if(data['success'] == true){
                            $('#form_contact').hide();
                            $('#contact section').html(data['message']);
                        }
                        else{
                            $('#form_contact').hide();
                            $('#contact section').html(data['message']);
                        }
                    },
                    complete: function(){
                        $('#loading_ajax').removeClass('loader_ajax');
                    }
                });
            }
            return false;
        }
    });
});






