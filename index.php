<?
session_start();

//no mySQL server

//start redirect

if ($_SERVER['REDIRECT_URL'] == '' ) $page = 'home';
else {
	$page = (substr($_SERVER['REDIRECT_URL'], 1));
//	if ( preg_match('/^[A-z0-9]{3,15}$/', $page)) exit('error page');
}
if (file_exists('all/'.$page.'.php')) {
	include 'all/'.$page.'.php';
}
else if ( $_SESSION['id'] and file_exists('auth/'.$page.'.php')) {
	include 'aunth/'.$page.'.php';
}
// $_SESSION['id']
else if ( file_exists('guest/'.$page.'.php')) {
	include 'guest/'.$page.'.php';
}
else include 'all/404.html';

include 'all/page.html';
?>