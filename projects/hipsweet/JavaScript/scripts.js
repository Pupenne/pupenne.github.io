"use strict";

//preloader

(function(){
	$(window).bind('load', function(){
   		$('.preloader').fadeOut();
	});
})();

//slide-triangle

(function(){
	$('.header__list').children('.header__item').hover(
		function(){
			var nomer = (($(this).index()-1)*34+38) + 'px';
			$('.slide-triangle').css('top', nomer);
		},
		function(){
			$('.slide-triangle').css('top', '38px');
		});

})();

//compani list

(function(){
	$('.header__list.compani').children('.header__item').on("click", function(){
		var nomer = $(this).index(),
			scroll = $('body').children('div')[nomer];
			console.log(scroll);
		$('html, body').animate({ scrollTop: $(scroll).offset().top }, 500);
	

	});
})();

//login

(function(){
	$('.heder-link_login').on('click', function(){
		$('.header__login_bg').css("display", "flex")
    						  .hide()
   							  .fadeIn();
	});

	$('.header__login_bg, .header__form_close, .hed__login_submit').on('click', function(){
		$('.header__login_bg').fadeOut();
	});

	//отменяем событие родителя

	$('.header__warp_login_form').on('click',function(e){  
		e.stopPropagation();
	});

	$('.hed__login_submit').on('click', function(e){
		e.preventDefault();

		var loginForm = $('.header__form-login'),
			commandForm = $('.command__form');
			
			commandForm.children('.name').val(loginForm.children('.name').val());
			commandForm.children('.email').val(loginForm.children('.email').val());
			loginForm.children('.name').val('');
			loginForm.children('.email').val('');

	});
})();

//search

(function(){
	var form 	= $('.form__search'), 		// тут указываем оболочку
		input 	= $('.hed__search_input'), 	// сам элемент
		btn 	= $('.hed__search_submit');	// кнопка

	input.addClass('inactiv');

	btn.on('click', function(e){
		e.preventDefault();

		if( (input.hasClass('inactiv')) ){			// если input не активен
			input.removeClass('inactiv').focus();	// активируем его и вешаем фокус
		} else {									// иначе
			if(input.val().length === 0){			// если input пуст
				input.addClass('inactiv').blur();	// скрываем его и убираем фокус
			} else {								// иначе
				form.submit();						// выполняем поиск
				input.val('') 
					.addClass('inactiv').blur();	
			}		
		}
	});

	//removing focus when clicking outside the form

	$(document).mouseup(function (e){ 			// событие клика по веб-документу	
		if (!form.is(e.target)					// если клик был не по нашему блоку
		    && form.has(e.target).length === 0 	// и не по его дочерним элементам
		    && input.val().length === 0) { 		// и в input нет текста
			input.addClass('inactiv').blur(); 	// скрываем его и убираем фокус
		}
	});
})();

//slider

(function(){
	
	$('.first-page__slider_nav, .header__list.sweet').children('li').on('click', function(){
		var nomer = $(this).index()-1;
		slider(nomer);
	})
})();

	//slide back
	
(function(){
	$('.first-page__slider__control_back').on('click', function(){
		var sliderBack = ($('.first-page__slider_item').closest('.activ').index()+3) % 4;
		slider(sliderBack);
	})
})();

	//slide forvard

(function(){
	$('.first-page__slider__control_forvard').on('click', function(){
		var sliderforvard = ($('.first-page__slider_item').closest('.activ').index()+1) % 4;
		slider(sliderforvard);
	})
})();


var go = true;
	
function slider (newNum){
	var	sliderItem 	= $('.first-page__slider_item'),
		newNumber	= newNum,
		befoNumber	= $('.first-page__slider_nav').children('.activ').index()-1,
		navList		= $('.first-page__slider_nav').children('li'),
		navDot		= $('.header__list.sweet').children('li'),
		duration	= 1000
		;
	if(newNumber != befoNumber && go){
		go = false;
		navList.eq(newNumber).addClass('activ');
		navList.eq(befoNumber).removeClass('activ');
		navDot.eq(newNumber).addClass('activ');
		navDot.eq(befoNumber).removeClass('activ');

		if(newNumber > befoNumber){
			sliderItem.eq(newNumber).css('left', '1080px').addClass('activ');
			sliderItem.eq(befoNumber).animate({ left: '0px' }, duration);
			sliderItem.eq(newNumber).animate({ left: '0px' }, duration, 
				function(){
					sliderItem.eq(befoNumber).removeClass('activ');
					sliderItem.eq(newNumber).css('left', '1080px');
					befoNumber = newNumber;		
					go = true;
				});	
		}else{
			sliderItem.eq(newNumber).css('left', '0px').addClass('activ');

			sliderItem.eq(befoNumber).css('left', '0px').animate({ left: '1080px' }, duration);
			sliderItem.eq(newNumber).animate({ left: '1080px' }, duration, 
				function(){
					sliderItem.eq(befoNumber).removeClass('activ');
					sliderItem.eq(newNumber).css('left', '1080px').addClass('activ');
					befoNumber = newNumber;
					go = true;
				});
		}
	}	
};

//recipe

(function(){
	var form =	$('.slider_recipe'),
		list =	$('.recipe__list'),
		link =  $('.heder-link_recipe')
	;

	link.on('click', function(e){
		list.fadeToggle();
		link.toggleClass('activ');
	});

	$(document).mouseup(function (e){ 				
		if (!form.is(e.target)					
		    && form.has(e.target).length === 0){   
				link.removeClass('activ');
				list.fadeOut();
		}
	});
})();

//command toggle

$('.command__item').on('click', commandToggle);

$('.header__list').closest('.command')
				.children('.header__item')
				.on('click', commandToggle)
				.on('click', function(){
					$('html, body').animate({ scrollTop: 2650 }, 500);
				});

function commandToggle(e) {
	e.preventDefault();

	var
		$this = $(this),
		commandItems = $('.header__list').closest('.command').children('.header__item'),
		commandBlocks = $('.command__item'),
		biographi = $('.command__biographi-item'),
		descPost = $('.command__desc_post_item'),
		nomer = $this.index()-1
		;
		
	for(var i=0 ; i < commandItems.length; i++){
		commandItems.eq(i).removeClass('activ');
		commandBlocks.eq(i).removeClass('activ');
		biographi.eq(i).removeClass('activ');
		descPost.eq(i).removeClass('activ');

		if(nomer == i){
			commandItems.eq(i).addClass('activ');
			commandBlocks.eq(i).addClass('activ');				
			biographi.eq(i).addClass('activ').hide().fadeIn(300);				
			descPost.eq(i).addClass('activ').hide().fadeIn(300);				
		}		
	}
};

//telfon mask

$(".command__form_input").siblings('.tel').mask("8(999)-999-99-99"); //номер телефона

//accordion

(function(){

	var flag = true;
	$('.question__item').children('p').slideUp(0);


	$('.qustion__acco_triger').on('click', function(e){
		e.preventDefault();

		var	$this 			= $(this),
			allContainers 	= $('.question__item'),
			conteiner 		= $this.closest('.question__item'),
			allContents		= $('.question__item').children('.question__content'),
			currentContent 	= conteiner.children('.question__content'),
			duration		= 400
			;

		if(flag){
			flag = false;
			if(!conteiner.hasClass('activ')){

				allContents.slideUp(duration);
				allContainers.removeClass('activ');
				conteiner.addClass('activ');				
				currentContent.slideDown(duration, function (){
					flag = true;
				});
				
			}else{
				conteiner.removeClass('activ');
				currentContent.slideUp(duration, function (){
					flag = true;
				});
				
			}
		}

	});

})();

//map

(function(){
	$(window).bind('load', function(){
		ymaps.ready(init);
		function init() {
    	var myMap = new ymaps.Map("map", {
            center: [53.355084, 83.769948],
            zoom: 13,
            controls: ['zoomControl', 'searchControl', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark([53.354799, 83.776972], {
            hintContent: 'Мой дом',
            balloonContent: 'Советская 4'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/Layer.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-21, -59]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
		}
	});
})();