(function() {
  

	jQuery(document).ready(function(){
		
		
		/* Carousel Display */ 
		$('.carousel').carousel({
		  interval: 30000
		})
		
		/* ToolTip */ 
		$('[data-toggle="tooltip"]').tooltip();

		/* Navigation ScrollTo */ 
		function slideUpDown(yourElement, yOffset) {

			 var yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: yCoordinate + yOffset,
				behavior: 'smooth'
			});
			clear();
			
		}
		
		function clear(){
			slideUpDown("", "");
		}
		
		
		/* Navigation ScrollTo */ 
		$(".fa-arrow-up").click(function() {
			slideUpDown(document.getElementById('sectionBanner'), -1000);
		});
		
		/* Contact Us */ 
		$("#navEmail").click(function() {
			$('#email, #name, #phone, #message').val('');
			$('.badge-warning').hide();
		});
		

		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		
	});

	
})();
