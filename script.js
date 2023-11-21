$('.financeiro').click(function(){
    $('.menuprincipal ul .itensfinanceiro').slideToggle('fast');
    $('.menuprincipal ul .itensfinanceiro').toggleClass('mostrar');
    $('.menuprincipal ul .seta1').toggleClass('gira');
});
$('.funcionarios').click(function(){
    $('.menuprincipal ul .itensfuncionarios').slideToggle('fast');
    $('.menuprincipal ul .itensfuncionarios').toggleClass('mostrar');
    $('.menuprincipal ul .seta2').toggleClass('gira');
});
$('.obras').click(function(){
    $('.menuprincipal ul .itensobras').slideToggle('fast');
    $('.menuprincipal ul .itensobras').toggleClass('mostrar');
    $('.menuprincipal ul .seta3').toggleClass('gira');
});

// Funcão para abrir a barra lateral

$('.btnabrir').click(function(){
    $('.menuprincipal').toggleClass('mostrar');
});

$('.btnfechar').click(function(){
    $('.menuprincipal').toggleClass('mostrar');
});

// animação das setas


    
