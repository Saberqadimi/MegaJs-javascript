<?php

include_once("1-connections.php");
$sql = "select fullName,age from people1";

$smtm = $mySqli->prepare($sql);
$smtm->execute();
$smtm->bind_result($fullName, $age);
while ($row = $smtm->fetch()) {
    echo "<div>$fullName :$age</div>";
}