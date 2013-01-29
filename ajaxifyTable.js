jQuery.fn.ajaxifyTable = function(link,onLoadFunction) {
		var div = $(this);
		if(arguments.length == 2) {
		$(this).load(link, function() {
			
			onLoadFunction();
			$(this).find('.pagelinks a, th a').each( function() {
				var href = $(this).attr('href');
				$(this).attr('href','#placeholder');
				$(this).click( function() {
					div.ajaxifyTable(href,onLoadFunction);
				});

			});
			
		});
		}
		if(arguments.length == 1) {
		$(this).load(link, function() {
				
				$(this).find('.pagelinks a, th a').each( function() {
					var href = $(this).attr('href');
					$(this).attr('href','#placeholder');
					$(this).click( function() {
						div.ajaxifyTable(href);
					});

				});
				
			});
			
		}
		else {
			$(this).find('.pagelinks a, th a').each( function() {
				var href = $(this).attr('href');
				$(this).attr('href','#placeholder');
				$(this).click( function() {
					div.ajaxifyTable(href);
				});

			});
		}
	};