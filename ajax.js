/*!
 * Expanable Search
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */;

var default_content="";
jQuery(document).ready(function(){
	checkURL();
	jQuery('a').click(function (e){
		checkURL(this.hash);
	});
	default_content = jQuery('#ajax_load').html();
	setInterval("checkURL()",250000);
});
var lasturl="";
function checkURL(hash){
	if(!hash) hash=window.location.hash;
	if(hash != lasturl)	{
		lasturl=hash;
		if(hash=="")
		jQuery('#ajax_load').html(default_content);
		else
		loadPage(hash);
	}
}
function loadPage(url) {
	url=url.replace('#page','');
	jQuery('#loader').css('visibility','visible');
	jQuery.ajax({
		type: "POST",
		url: "load.php",
		data: 'page='+url,
		dataType: "html",
		success: function(msg){
			if(parseInt(msg)!=0)
			{
				jQuery('#ajax_load').html(msg);
				jQuery('#loader').css('visibility','hidden');
			}
		}
	});
}
