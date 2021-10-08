var integer1 = window.prompt("Enter a integer 1");

var integer2 = window.prompt("Enter a integer 2");

if (integer1 == integer2) {
    document.write("Both the numbers are equal.<br>");
} else if(integer1 > integer2) {
    document.write("Largest number :"+ integer1 + ".<br>");
}
else{
    document.write("Largest number :"+ integer2 + ".<br>");
}
