<?php
	if(!$_POST['page']) die("0");
	$page = $_POST['page'];
	$page_location = str_replace("#", "", $page);
		if(file_exists('pages/'.$page_location.'.html')){
			echo file_get_contents('pages/'.$page_location.'.html');
			}
?>
