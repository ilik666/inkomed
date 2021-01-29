document.addEventListener('DOMContentLoaded', () => {
	// polyfill flat
	// if (!Array.prototype.flat) Array.prototype.flat = function () {
	// 	return (function f(arr) {
	// 	return arr.reduce(
	// 			(a, v) =>
	// 	Array.isArray(v)
	// 				? a.concat(f(v))
	// 				: a.concat(  v )
	// 			, []
	// 		)
	// 	})(this)
    // };

	// function createRipple(e) {
	// 	const button = e.target.closest('.g-btn');
	// 	const ripple = document.querySelectorAll(".ripple");

	// 	if (ripple) ripple.forEach( el => el.remove() )

	// 	const circle = document.createElement("span");
	// 	const diameter = Math.max(button.clientWidth, button.clientHeight);
	// 	const radius = diameter / 2;
	  
	// 	circle.style.width = circle.style.height = `${diameter}px`;
	// 	circle.style.left = `${e.offsetX - radius }px`;
	// 	circle.style.top = `${e.offsetY - radius }px`;
	// 	circle.classList.add("ripple");

	// 	button.appendChild(circle);
	// }
	
	// const buttons = document.querySelectorAll('.g-btn');
	// if(buttons.length) buttons.forEach( el => el.addEventListener('click', createRipple) )
	

	const mobileMenuList = document.querySelector('.mobile__change')
	const burgerBtn = document.querySelector('.hide-nav');
	const headerUserBlock = document.querySelector('.header__user');
	const headerNavBlock = document.querySelector('.nav');
	const headerContainer = document.querySelector('.header .container');
	const footerContainer = document.querySelector('.footer .container');

	burgerBtn && burgerBtn.addEventListener('click', function() {
		this.classList.toggle('active');
		headerNavBlock.classList.toggle('active');
		document.body.classList.toggle('active');
	})

	// Сорри дизайн непредсказуемый )
	if(document.documentElement.clientWidth	< 992) {
		(headerNavBlock && headerUserBlock) && headerNavBlock.insertAdjacentElement('afterbegin', headerUserBlock);
		(headerNavBlock && mobileMenuList) && headerNavBlock.insertAdjacentElement('beforeend', mobileMenuList);
	} else {
		(headerContainer && headerUserBlock) && headerContainer.insertAdjacentElement('beforeend', headerUserBlock);
		(footerContainer && mobileMenuList) && footerContainer.insertAdjacentElement('afterbegin', mobileMenuList);
	}

	window.addEventListener('resize', function() {
		if(document.documentElement.clientWidth	< 992) {
			(headerNavBlock && headerUserBlock) && headerNavBlock.insertAdjacentElement('afterbegin', headerUserBlock);
			(headerNavBlock && mobileMenuList) && headerNavBlock.insertAdjacentElement('beforeend', mobileMenuList);
		} else {
			(headerContainer && headerUserBlock) && headerContainer.insertAdjacentElement('beforeend', headerUserBlock);
			(footerContainer && mobileMenuList) && footerContainer.insertAdjacentElement('afterbegin', mobileMenuList);
		}
	})

	/**
	 * Stop auto play for sliders
	 * @returns null
	 * @readonly
	 */
	function init() {
		let _this = this;
		this.el.addEventListener('mouseenter', function () {
			_this.autoplay.stop();
		});
		this.el.addEventListener('mouseleave', function () {
			_this.autoplay.start();
		});
	}

	let professionalsSlider = new Swiper('.professionals-js', {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		slidesPerView: 6,
		spaceBetween: 25,
		on: { init: init },
		breakpoints: {
			320: {slidesPerView: 1 },
			360: {slidesPerView: 2, spaceBetween: 5},
			450: {slidesPerView: 2,spaceBetween: 5},
			600: {slidesPerView: 3, spaceBetween: 15},
			768: {slidesPerView: 4, spaceBetween: 15},
			1200: {slidesPerView: 6, spaceBetween: 15}
		}
	})
	
	let newsSlider;
	let enableNewsSlider = function() {
		newsSlider = new Swiper('.news-js', {
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			slidesPerView: 2,
			spaceBetween: 25,
			breakpoints: {
				320: {slidesPerView: 1},
				576: {slidesPerView: 2},
			}
		})
	}

	const breakpointForNews = window.matchMedia( '(min-width:768px)' );
	let checkerBreakpointForNewsSlider = function() {
		if(breakpointForNews.matches === true) {
			if(newsSlider !== undefined && newsSlider.initialized ) {
				newsSlider.destroy(true, true);
			}
			return
		} else if(breakpointForNews.matches === false) {
			return enableNewsSlider();
		}
	}
	breakpointForNews.addListener(checkerBreakpointForNewsSlider);
	checkerBreakpointForNewsSlider();

	let parthnersSlider = new Swiper('.parthners-js', {
		loop: true,
		on: { init: init },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		slidesPerView: 6,
		spaceBetween: 15,
		breakpoints: {
			320: {slidesPerView: 2},
			360: {slidesPerView: 3},
			600: {slidesPerView: 4},
			768: {slidesPerView: 5},
			1200: {slidesPerView: 6}
		}
	})

	let servicesSlider = new Swiper('.services-js', {
		breakpoints: {
			320: {slidesPerView: 1, spaceBetween: 15},
			576: {slidesPerView: 2, spaceBetween: 15},
			768: {slidesPerView: 3, spaceBetween: 5},
			1200: {slidesPerView: 4, spaceBetween: 25},
		}
	})

	let interfaceSlider = new Swiper('.interface-js', {
		spaceBetween: 35,
		loop: true,
		on: { init: init },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		navigation: {
			prevEl: '.interface__arrow-l',
			nextEl: '.interface__arrow-r',
		},
	})
	
	let licenseSlider = new Swiper('.license-js', {
		observer: true,
		observeParents: true,
		spaceBetween: 15,
		on: { init: init },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {slidesPerView: 2},
			576: {slidesPerView: 3},
			768: {slidesPerView: 4},
		}
	})

	
    var galleryThumbs = new Swiper('.gallery-thumbs', {
		
		slidesPerView: 4,
		// loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: { spaceBetween: 15 },
			1199: { spaceBetween: 25 }
		}
	  });

	  var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		// loop: true,
		loopedSlides: 5,
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });


	const sliderInput = document.querySelector('.range-filter')
	/**
	 * Input range slider at two prices
	 */
	if(sliderInput) {
		let _min = +sliderInput.dataset['min'];
		let _max = +sliderInput.dataset['max'];

		let prevInput = sliderInput.previousElementSibling
		prevInput = prevInput.querySelector('input')

		let nextInput = sliderInput.nextElementSibling
		nextInput = nextInput.querySelector('input')

		let inputs = [prevInput, nextInput]

		noUiSlider.create(sliderInput, {
			format: {
				to: function (value) {
					return Math.round(value);
				},
				from: function (value) {
					return Number(Math.round(value));
				}
			},
			start: [_min, _max],
			connect: true,
			step: 1,
			range: {
				'min': _min,
				'max': _max
			}
		});

		sliderInput.noUiSlider.on('update', function(values, handle) {
			inputs[handle].value = values[handle]
		})

		inputs.forEach(function (input, handle) {

			input.addEventListener('change', function () {
				sliderInput.noUiSlider.setHandle(handle, this.value);
			});
		
			input.addEventListener('keydown', function (e) {
		
				var values = sliderInput.noUiSlider.get();
				var value = Number(values[handle]);
				var steps = sliderInput.noUiSlider.steps();
				var step = steps[handle];
				var position;

				switch (e.which) {
					case 13:
						sliderInput.noUiSlider.setHandle(handle, this.value);
						break;
		
					case 38:
						position = step[1];
						if (position === false) {
							position = 1;
						}
						if (position !== null) {
							sliderInput.noUiSlider.setHandle(handle, value + position);
						}
						break;
		
					case 40:
						position = step[0];
						if (position === false) {
							position = 1;
						}
						if (position !== null) {
							sliderInput.noUiSlider.setHandle(handle, value - position);
						}
						break;
				}
			});
		});
	}

	/**
	 * Tab functions
	 * @returns null
	 */
	const tab = function () {
		let tabNav = document.querySelectorAll('.tabs-nav__item'), // Выбираем элементы навигации табов
			tabContent = document.querySelectorAll('.tabs-content__item'), // Выбираем самы табы
			tabName; // Переменная для имени таба
	
		// Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
		tabNav.forEach((item) => {
			item.addEventListener('click', selectTabNav)
		});
	
		function selectTabNav() {
			tabNav.forEach((item) => {
				// Удаляем активный класс у всех элементов навигации табов
				item.classList.remove('is-active');
			});
			this.classList.add('is-active');  // Добавляем активный укласс у элемента по которому кликнули
			tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
			selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
		}
		/**
		 * 
		 * @param { NodeList }
		 */
		function selectTabContent(tab) {
			// Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
			tabContent.forEach((item) => {
				let classList = item.classList;
				classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
				setTimeout( () => {
					classList.contains(tab) ? classList.add('show') : classList.remove('show');
				}, 100)
			});
		}
	};
	
	tab();

	let testObjMapMark = {
		title: 'ЛОК "Солнечная"',
		address: 'Краснодарский край, г. Геленджик, ул. Туристическая, 19 '
	}

	const createMarkForMap = (options) => {
		return `
			<div class='map-content'>
				<a href='#'>${options.title} </a>
				<p> ${options.address}</p>
			</div>
		`
	}
	
	// Яндекс метки - а дальше см )
	let mapId = document.querySelector('#map')
	mapId && ymaps.ready(initMap);
	// Тут нужно будет допилить функцию с аякс запросом по фильтру
	function initMap() {
		let myMap = new ymaps.Map(mapId, {
			center: [44.58704957458791,38.045314],
			zoom: 10,
			controls: ['smallMapDefaultSet']
		});
		
        let myPlacemark2 = new ymaps.Placemark([44.58704957458791,38.045314], {
			balloonContentBody: createMarkForMap(testObjMapMark),
			hintContent: testObjMapMark.title
        }, {
            iconLayout: 'default#imageWithContent',
            // iconImageClipRect: [[34,0], [62, 46]],
            iconImageHref: './web/images/general/hotel.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-26, -46]
		});
		
		
		myMap.geoObjects.add(myPlacemark2)
	}
	
	const accrordionItem = document.querySelectorAll('.accordion__col span');
	const accordionWrapper = document.querySelector('.accordion')
	/**
	 * Masonry grid settings
	 */
	let msnry
	if(accordionWrapper) {
		msnry = new Masonry(accordionWrapper, {
			columnWidth: '.accordion__col',
			itemSelector: '.accordion__col',
			horizontalOrder: true,
			gutter: 15
		})
	}
	
	accrordionItem && accrordionItem.forEach(el => el.addEventListener('click', function(e) {
		const parentElement = this.closest('.accordion__col')
		parentElement.classList.toggle('show')
		msnry.layout()
	}))

	const calcTitle = document.querySelector('.calculator__title');
	const calcSecondsTitle = document.querySelector('.calculator__seconds');
	const calcCountRecords = document.querySelector('.calculator__count');
	const calcPrice = document.querySelector('.calculator__total-price');
	const calcAlertText = document.querySelector('.calculator__alert');
	const calcInputSlider = document.querySelector('.slider-calc');

	// Такие параметры ожидаются при формирование параметров калькулятора
	const paramsForRange = {
		300: {
			records: 'не ограничено',
			title: 'Самостоятельное внесение данных о Вашем здоровье',
			second: 'Рекомендуем для уверенных пользователей',
			aletText: ''
		},
		1000: {
			records: '15',
			title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
			second: 'Рекомендуем на начальном этапе использования ЭМК',
			aletText: ''
		 },
		2000: {
			records: '35',
			title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
			second: 'Рекомендуем на начальном этапе использования ЭМК',
			aletText: 'Количество записей внесенных самостоятельно не ограничено'
		},
		3000: {
			records: '60',
			title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
			second: 'Рекомендуем на начальном этапе использования ЭМК',
			aletText: 'Количество записей внесенных самостоятельно не ограничено'
		},
		4000: {
			records: '85',
			title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
			second: 'Рекомендуем на начальном этапе использования ЭМК',
			aletText: ''
		},
		5000: {
			records: 'не ограничено',
			title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
			second: 'Соберем и внесем в ЭМК всю историю Вашего здоровья',
			aletText: ''
		}
	}

	//General object for range slider
	const _objKeysParams = Object.keys(paramsForRange); // keys 
	let _minValRangeSlider = +_objKeysParams[0]; // min
	let _maxValRangeSlider = +_objKeysParams[_objKeysParams.length - 1]; //max
	let _totalPriceInCalculate = _maxValRangeSlider - _minValRangeSlider //

	/**
	 * Creat new Params for range slider
	 * @param {Object} obj 
	 * @param {number} total
	 * @returns Object
	 */
	const creatObjectForRangeSlider = (obj, total) => {
		let range = {};

		Object.keys(obj).forEach( (item, idx, arr) => {
			let percent;
			idx === 0 ? percent = 'min' : percent = parseInt( (item / total ) * 100) + '%';
			idx === arr.length - 1 ? percent = 'max' : true;
			range[percent] = +item
		})

		return range;
	}

	let _obj = {
		start: 2000,
		snap: true,
		connect: [true, false],
		range: creatObjectForRangeSlider(paramsForRange, _totalPriceInCalculate)
	};

	calcInputSlider && noUiSlider.create(calcInputSlider, _obj);
	
	calcInputSlider && calcInputSlider.noUiSlider.on('update', function (values, handle) {
		let keyCalcParam = paramsForRange[+values[handle]]

		calcTitle.textContent = keyCalcParam.title
		calcSecondsTitle.textContent = keyCalcParam.second
		calcAlertText.textContent = keyCalcParam.aletText
		calcCountRecords.textContent = keyCalcParam.records

		calcPrice.textContent = values[handle]
									.split('')
									.reverse()
									.join('')
									.replace(/(.{3})/g, '$1 ')
									.split('')
									.reverse()
									.join('')
									.replace(/\.\d+/, '')

	});

	let showHiddenBlock = document.querySelector('.show-block')
	let hiddenBlock = document.querySelector('.hidden')
	showHiddenBlock && showHiddenBlock.addEventListener('click', function (e) {
		e.preventDefault();
		hiddenBlock.classList.toggle('show')
		this.classList.toggle('active')
	})

	let showPasswordBtns = document.querySelectorAll('.checked-password')

	showPasswordBtns && showPasswordBtns.forEach( el => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let inputPassword = e.target.closest('button').previousElementSibling;
			inputPassword.type == 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password'
		})
	})

})


$(document).ready(function() {
	$('a[data-rel^=lightcase]').lightcase({
		maxWidth: 1850,
		maxHeight: 1000
	  });
})
 















































// Держись мужик )