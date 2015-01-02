
var controller;

$(document).ready(function($) {
	controller = new ScrollMagic();
		// build tween
		var tween1 = TweenMax.to("#firstResponse", 0.2, {backgroundColor: "rgba(4, 99, 117, .8)"});

		// build scene
		var scene = new ScrollScene({triggerElement: "#Trigger"})
						.setTween(tween1)
						.addTo(controller);

		var tween2 = TweenMax.to("#secondResponse", 0.2, {backgroundColor: "rgba(28, 109, 33, .8)"});

		var scene2 = new ScrollScene({triggerElement: "#Trigger"}).setTween(tween2).addTo(controller);

		var tween3 = TweenMax.to("#thirdResponse", 0.2, {backgroundColor: "rgba(68, 28, 93, 0.8)"});

		var scene3 = new ScrollScene({triggerElement: "#Trigger"}).setTween(tween3).addTo(controller);

		new ScrollScene({triggerElement: "#parallax",triggerHook: "onEnter", duration: $(window).height()*1.5})
								.setTween(TweenMax.to("#parallax > div", 2, {top: "125%", ease: Linear.easeNone}))
								.addTo(controller);

		var tween4 = TweenMax.staggerTo(".responseCard", 1, {scale: 0.8, rotation:360, y:100}, 0.5);

		new ScrollScene({triggerElement: "#Trigger", triggerHook: "onLeave"}).setTween(tween4).addTo(controller);

		var head = $("#content"),
			c1 = $("#content h1"),
			c2 = $("#content h2"),
			c3 = $("#content span"),
			c4 = $("#content p");
	});