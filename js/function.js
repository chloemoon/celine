$(function() {
	const $indicators = $('section>.slides_indicator>li>a');
	const $slides = $('section > .slides');
	let nowIdx = 0;
	let intervalID = null;

	//함수 선언부
	const moveFn = function() {
		//썸네일활성화
		$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너이동
		$slides.stop().animate(
			{
				left: nowIdx * -800
			},
			500
		);
	};
	//이벤트구문

	$indicators.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $indicators.index(this);
		moveFn();
	});
	//자동실행
	$('.play').on('click', function() {
		clearInterval(intervalID);
		intervalID = setInterval(function() {
			if (nowIdx < 7) {
				nowIdx++;
			} else {
				nowIdx = 0;
			}
			moveFn();
		}, 1500);
	});

	//자동멈춤
	$('.pause').on('click', function() {
		clearInterval(intervalID);
	});

	//이전버튼

	$('.prev').on('click', function(evt) {
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 7;
		}
		moveFn();
		evt.preventDefault();
	});
	$('.next').on('click', function(evt) {
		if (nowIdx < 7) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}
		moveFn();
		evt.preventDefault();
	});
});
