$(document).ready(function () {
    // // получить все элементы li с классом first $('li.first')
    console.log('', $('li.first'));

    // // получить последний элемент li $('li').last()
    console.log('', $('li').last());

    // // получить 5ый элемент с классом ba-menu-item $('.ba-menu-item').eq(4)
    $('.ba-menu-item').eq(4);

    console.log('', $('li').slice(3, 6));

    console.log($('.first').next());

    // $('li.first').css('border', '2px dashed tomato');

    // $('.ba-hero__title')

    $('.ba-hero__title').on('click', function () {
        console.log(this);//тот элемент на который навесили обработчик
        console.log($(this));

        $(this).next().addClass('nextH1');
    });
    // 1 
    $('#classFirst').on('click', function () {
        console.log('выбрали', $('.ba-menu-item').toggleClass("first").css('border', '2px dashed tomato'));
    });
    // 2
    $('#first').on('click', function () {
        console.log('выбрали', $('.ba-menu-item').first().toggleClass("first").css('border', '2px dashed tomato'));
    });
    // 3
    $('#five').on('click', function () {
        console.log('выбрали', $('.ba-menu-item').eq(4).toggleClass("first").css('border', '2px dashed tomato'));
    });
    // 4 
    $('#threeToFive').on('click', function () {
        console.log('выбрали', $('.ba-menu-item').slice(2, 5).toggleClass("first").css('border', '2px dashed tomato'));
    });

    // 1
    console.log($(".ba-dish__head").next().first());
    // 2
    console.log($(".ba-dish__info").prev().first());
    // 3
    console.log($(".ba-hero").nextAll());
    //4
    console.log($(".ba-menu a").parent());
    // 5
    console.log('5');
    console.log($(".ba-hero").children());
    // 6
    console.log('6');
    console.log($(".ba-menu-item").siblings(":not(.first)"));
    // 7
    console.log('7');
    console.log($("a").closest("div").addClass("parentOfLink"));
    // 8
    $('.ba-menu__link').on('click', function (e) {
        e.preventDefault();
        console.log('8');
        console.log($(this).attr("href"));
    });
    // 9
    $('.ba-dish__img').on('click', function (e) {
        // console.log('9');
        // let z = $(this).attr("src");
        // console.log(z);
        // console.log($(this).parent().siblings().find(".ba-dish__title").text(z));
        $(this).parent().siblings().find(".ba-dish__title").text($(this).attr("src"));
    });
    // dz2
    $('#loadMore').on('click', function () {
        $('.ba-menu-list').append('<li class="ba-menu-item"><div class="ba-menu-item__info"><h3 class="ba-menu-item__title">Voluptate cillum</h3></div></li>');
        // $('.ba-menu-item__title').text(prompt());
    });
    // dz3
    // console.log($('h3').next('p'));
    $('h3').next('p').hide();



});


