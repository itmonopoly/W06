<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
<?php  

// $_GET, $_POST, $_FILES, $_SERVER, $_REQUEST

$a = 10;
$b = 20;
$c = $a + $b;

echo $c;
echo "<br>";
// var_dump - подробный анализ содержимого.
var_dump($_GET);
echo "<br>";
echo $_GET["apple"];

echo "<br>";
$array = Array(10, 20, 30, "Moscow" => 17000000);
var_dump($array);

?>

</body>
</html>