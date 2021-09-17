const swiper = new Swiper(".mySwiper", {
	// infinity: false,
	// slidesPerView: 3,
	// spaceBetween: 0,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// effect: "cards",
	//     grabCursor: true,
	//     cubeEffect: {
	//       shadow: true,
	//       slideShadows: true,
	//       shadowOffset: 20,
	//       shadowScale: 0.94,
	//     },
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
		//    clickable: true,
		//    dynamicBullets: true,
		// renderBullet: function (index, clasName) {
		// 	return '<span class="' + clasName + '">' + (index + 1) + "</span>"
		// },
		renderFraction: function (curenClass, totalClass) {
			return (
				'text <span class="' +
				curenClass +
				'" ></span>' +
				" ta " +
				'<span class="' +
				totalClass +
				'"></span>'
			)
		},
		// type: 'progressbar'
	},
	scrollbar: {
		el: ".swiper-scrollbar",
		dragfable: true,
	},
	simulateTouch: true,
	touchRatio: 2,
	touchAngle: 45,
	grabCurso: true,
	slideToClickedSlide: true,

	hashNavigation: {
		watchState: true,
	},

	//klaviatura bilan yoki mishka bilan boshqarish ucun
	keyboard: {
		enabled: true, //yoqish o'chirish
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventTarget: '.swiper__card'
	},
	autioHeight: true,
	slidesPerView: 3, //nechra slide qilish uchun
	spaceBetween: 30, //sliderlar orasiga margen berish uchun
	slidesPerGroup: 1, // slider larni guruhlab o'tkazadi
	//centeredSlides: true, // elementni markazga yaqinlashtiradi
	watchOverflow: true, // slide qilish ga file qolmasa slide ni o'chiradi

	initialSlide: 0, 
})
