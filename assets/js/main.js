jQuery(document).ready(function( $ ) {

	$('.playvideo').click(function () {
		$(".mask").show();
		$(".playbrdr").show();
		var iframeUrl=$("iframe").attr("src");
		$("iframe").attr("src","https://www.youtube.com/embed/mUlEVP2MjgQ?autoplay=1")
	});
	$('.videoclose').click(function () {
		$(".mask").hide();
		$(".playbrdr").hide();
		var iframeUrl=$("iframe").attr("src");
		$("iframe").attr("src","https://www.youtube.com/embed/mUlEVP2MjgQ?rel=0&amp;showinfo=0")
	});

	var introCarousel = $(".carousel");
	var introCarouselIndicators = $(".carousel-indicators");
	introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
	(index === 0) ?
	introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
	introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
	});
	$(".carousel").swipe({
	swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
	  if (direction == 'left') $(this).carousel('next');
	  if (direction == 'right') $(this).carousel('prev');
	},
	allowPageScroll:"vertical"
	});
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });
	(function() {
		var throttle = function(type, name, obj) {
			obj = obj || window;
			var running = false;
			var func = function() {
				if (running) { return; }
				running = true;
				requestAnimationFrame(function() {
					obj.dispatchEvent(new CustomEvent(name));
					running = false;
				});
			};
			obj.addEventListener(type, func);
		};
		throttle("resize", "optimizedResize");
	})();

	var roadmap = (function() {
		var wrapper = document.querySelector('.js-roadmap-timeline');
		var timeframes = document.querySelectorAll('.js-roadmap-timeframe');
		var mediaQuery = window.matchMedia("(min-width: 1201px)");
		var topMaxHeight;
		var bottomMaxHeight;

		handleStyling();
		window.addEventListener("optimizedResize", handleStyling);

		function handleStyling() {
			if (mediaQuery.matches) {
				applyHeights();
				styleWrapper();
			} else {
				clearWrapperStyling();
			}
		}

		function applyHeights() {
			topMaxHeight = getMaxHeight(timeframes, 0);
			bottomMaxHeight = getMaxHeight(timeframes, 1);
		}

		function getMaxHeight(els, start) {
			var maxHeight = 0;
			var i = start;

			for (; i < els.length - 1; i = i + 2) {
				var elHeight = els[i].offsetHeight;
				maxHeight = maxHeight > elHeight ? maxHeight : elHeight;
			}

			return maxHeight;
		}

		function styleWrapper() {
			wrapper.style.paddingBottom = bottomMaxHeight + 'px';
			wrapper.style.paddingTop = topMaxHeight + 'px';
		}

		function clearWrapperStyling() {
			wrapper.style.paddingBottom = '';
			wrapper.style.paddingTop = '';
		}
	})();


let arr=[];
	$(".hideList").find("p").each(function () {
		let obj={
      ip:$(this).find(".ip").html(),
    	p1st:$(this).find(".p1st").html(),
    	p2nd:$(this).find(".p2nd").html(),
    	p3rd:$(this).find(".p3rd").html(),
    	p4th:$(this).find(".p4th").html(),
    	web:$(this).find(".web").html(),
      webName:$(this).find(".webName").html(),
			country:$(this).find(".country").html(),
    	name:$(this).find(".name").html()
		};
		arr.push(obj)
  });

  arr.shuffle();
  let str="";
 for(let i=0 ;i<arr.length;i++){
 	str+=`<p>${arr[i].ip} | (${arr[i].p1st}%-${arr[i].p2nd}%-${arr[i].p3rd}%-${arr[i].p4th}%) |&nbsp;<a href="${arr[i].web}" target="_blank">${arr[i].webName}</a> | ${arr[i].country} |&nbsp;${arr[i].name}</p>`;
 }
$(".plist").html(str);
});



Array.prototype.shuffle = function() {
  const input = this;
  for (let i = input.length-1; i >=0; i--) {
    const randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};
