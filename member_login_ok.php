<?php
if (!isset($_POST['id']) || !isset($_POST['password'])) exit;

	$user_id = $_POST['id'];
	$user_pw = $_POST['password'];
	$members = array(
		'korean'=>array('password'=>'12345','name'=>'김대한'),
		'seoul'=>array('password'=>'56789','name'=>'이서울')
	);

if (isset( $members[$user_id]) && $members[$user_id]['password'] == $user_pw) {
    echo '{"user_id":"'.$user_id.'","user_name": "'.$members[$user_id]['name'].'"}';
}
?>
