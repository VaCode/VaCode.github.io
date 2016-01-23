$(document).ready(function(){
    // Variables
    var seconde = 90;
    var score = 0;
    
    // Lancement du jeux
    $('#start').click(function(){
        $('.header_preface').hide();
        $(this).fadeOut('fast');
        $('.header_game').show();
        function timer() {
            setTimeout(timer, 1000);
            $('.time_number').html(seconde);
            seconde--;
            if(seconde<0) {
                $('.time_number').html('<span class="red">FIN</span>');
                $('.end').show();
                $('.end_resulat').append(score + 'pts');
                if(score>2015) {
                    $('.end_winorloose').append('Gagné !')
                } else {
                    $('.end_winorloose').append('Perdu !')
                }
                seconde = 'FIN';
            }
        }
        timer();
        generateBubbles();
        generateBubblesBlue();
        generateBubblesGreen();
    });
    
    // Génération des bulles orange
    function generateBubbles() {
        var randomNumber1 = Math.floor((Math.random() * 100) + 15);
        var randomNumber2 = Math.floor(Math.random() * 100);
        var randomNumber3 = Math.floor((Math.random() * 100) + 15);
        var randomNumber4 = Math.floor(Math.random() * 100);
        var randomNumber5 = Math.floor((Math.random() * 100) + 15);
        var randomNumber6 = Math.floor(Math.random() * 100);
        $('.container_game').append('<span class="bubbles" style="top: '+ randomNumber1 +'%; left: '+ randomNumber2 +'%"></span><span class="bubbles" style="top: '+ randomNumber3 +'%; left: '+ randomNumber4 +'%"></span></span><span class="bubbles" style="top: '+ randomNumber5 +'%; left: '+ randomNumber6 +'%"></span>');
        
        $('.bubbles').delay('4000').fadeOut('fast');
        setTimeout(generateBubbles, 1000);
        
        $('.bubbles').click(function(){
            $(this).hide();
            $('.score_number').show(function(){
                score = score - 6;
                $(this).html(score);
                score = score;
            });
        });
    }
    
    // Génération des bulles bleu
    function generateBubblesBlue() {
        var randomNumber1 = Math.floor((Math.random() * 100) + 15);
        var randomNumber2 = Math.floor(Math.random() * 100);
        var randomNumber3 = Math.floor((Math.random() * 100) + 15);
        var randomNumber4 = Math.floor(Math.random() * 100);
        $('.container_game').append('<span class="bubbles_blue" style="top: '+ randomNumber1 +'%; left: '+ randomNumber2 +'%"></span><span class="bubbles_blue" style="top: '+ randomNumber3 +'%; left: '+ randomNumber4 +'%">');
        
        $('.bubbles_blue').delay('1250').fadeOut('fast');
        setTimeout(generateBubblesBlue, 1000);
        
        $('.bubbles_blue').click(function(){
            $(this).hide();
            $('.score_number').show(function(){
                score += 12;
                $(this).html(score);
                score = score;
            });
        });
    }
    
    // Génération des bulles verte
    function generateBubblesGreen() {
        var randomNumber1 = Math.floor((Math.random() * 100) + 15);
        var randomNumber2 = Math.floor(Math.random() * 100);
        var randomNumber3 = Math.floor((Math.random() * 100) + 15);
        var randomNumber4 = Math.floor(Math.random() * 100);
        $('.container_game').append('<span class="bubbles_green" style="top: '+ randomNumber1 +'%; left: '+ randomNumber2 +'%"></span><span class="bubbles_green" style="top: '+ randomNumber3 +'%; left: '+ randomNumber4 +'%">');
        
        $('.bubbles_green').delay('2500').fadeOut('fast');
        setTimeout(generateBubblesGreen, 1000);
        
        $('.bubbles_green').click(function(){
            $(this).hide();
            $('.time_number').show(function(){
                seconde = seconde;
                seconde = seconde -5;
                $(this).html(seconde);
                seconde = seconde;
            });
        });
    }
});

