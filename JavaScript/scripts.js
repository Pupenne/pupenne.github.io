"use strict";
 
$('.career__item__bloc').on('click', function(e) {
	e.preventDefault();

	var 
		$this = $(this),
		itemBlock = $this.closest('.career__item__bloc'),
		conteiners = $this.closest('.career__item').siblings('.career__item');

		itemBlock.addClass('career__item_activ');
		conteiners.children()
			.removeClass('career__item_activ');
})

$('#linkContats').on('click',function (e) {
	e.preventDefault();
	
	var 
		$this = $(this),
		lincContact = $this.closest('.contact__link'),
		dropContactList = lincContact.siblings('.contacts__dropdown');
		
		lincContact.toggleClass('contact__link_activ');
		dropContactList.toggleClass('contacts__dropdown_activ');
})





















// function dropListContats() {
// 	if(document.querySelector('.contacts__dropdown').matches('.contacts__dropdown_activ')){
// 		document.getElementById("dropContactList").classList.remove('contacts__dropdown_activ');
// 		document.getElementById("linkContats_phones").classList.remove('contacts__link_phones_activ');
// 		document.getElementById("linkContats").classList.remove('contact__link_activ');
// 	}else{
// 		document.getElementById("dropContactList").classList.add('contacts__dropdown_activ');
// 		document.getElementById("linkContats_phones").classList.add('contacts__link_phones_activ');
// 		document.getElementById("linkContats").classList.add('contact__link_activ');
// 	};
//  }

// function careerClassSwich(event) {
// 	// console.log(event.target.closest('.career__item__bloc'))
// 	if( !event.target.classList.contains('career__item_activ') ){
// 		for(var i=0; i<document.querySelectorAll('.career__item__bloc').length; i++){
// 			document.querySelectorAll('.career__item__bloc')[i].classList.remove('career__item_activ');
// 		}
// 		event.target.closest('.career__item__bloc').classList.add('career__item_activ');	
// 	}
// }


// window.onload = function(){
// 	document.getElementById("linkContats").addEventListener( 'click', dropListContats);
// 	document.getElementById("linkContats_phones").addEventListener( 'click', dropListContats);
// 	for(var i=0; i<document.querySelectorAll('.career__item__bloc').length; i++){
// 		document.querySelectorAll('.career__item__bloc')[i].addEventListener( 'click', careerClassSwich);
// 	}
// }

