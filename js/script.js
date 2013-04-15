/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
						
	// Cache the Window object
	$window = $(window);
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});

    $("#infra").click(function () {
        $("#thePlaceText").text("Braamfontein has an almost embarrassing abundance of infrastructure. Numerous property developers together with the City of Johannesburg (CoJ) have, over the past few years, started the process of refurbishing countless local buildings.The transportation infrastructure is the best on the continent. Broadband services are also set to explode, with all the major telco’s and the CoJ laying down fibre in and around Braamfontein.");
        $("#titleDiv").text("Infrastructure");
    });
    $("#quality").click(function () {
        $("#thePlaceText").text("Not only has office space been upgraded but so too has accommodation, catering for both students and professionals. Lifestyle options are also provided for by the numerous hotels, bars, coffee shops, restaurants, clothing stores, art galleries and general retail stores that continue to launch in Braamfontein. Add to this the numerous sports facilities in and around Braamfontein, and the necessity to ever leave the neighbourhood becomes minimal.");
        $("#titleDiv").text("Quality");
    });
    $("#talent").click(function () {
        $("#thePlaceText").text("Bordering Braamfontein are two of South Africa’s oldest universities, producing some of the country’s most talented individuals. Wits University has a proud history in research and is ranked in the top 1% worldwide in several fields, producing international-level talent each year. The University of Johannesburg, meanwhile, has significantly grown their research investment over the past 4 years, resulting in several more research centres. In addition to the universities, there are also numerous other tertiary education institutions and schools located nearby.");
        $("#titleDiv").text("Talent");
    });
    $("#industry").click(function () {
        $("#thePlaceText").text("Although Braamfontein is not currently home to many technology-focused companies, several of South Africa’s largest software services and development firms are located within close proximity. However, located in and around Braamfontein are the banking, insurance, mining, media, manufacturing and government clusters who have IT departments consisting of several hundred IT professionals. These clusters collectively spend several billion Rand each year on IT-related services and solutions.");
        $("#titleDiv").text("Industry");
    });
    $("#capital").click(function () {
        $("#thePlaceText").text("Though not many of the investment houses or venture capitalistsare located close to Braamfontein, many of South Africa’s most established industries are. Banking, insurance, mining, manufacturing, media and government are all situated within a two kilometre radius, and are all either currently big users of IT or are looking to significantly increase their usage of IT to improve their levels of efficiency and service.");
        $("#titleDiv").text("Capital");
    });
    $("#gov").click(function () {
        $("#thePlaceText").text("The national and local governments have several department head offices located within Braamfontein and nearby, and both have several programmes aimed at significant investment in building skills, generating jobs and creating new organisations in the IT field. These investments are set to grow as the Government looks to the ICT sector as a significant source of future economic growth and job creation through the National Development Plan.");
        $("#titleDiv").text("Government");
    });
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
	
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '100% '+ (yPos*1.4) + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

}); // document ready
