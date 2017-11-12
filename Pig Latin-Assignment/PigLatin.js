//Assign Prompt Value(Originam Name) to Variable ProVale
var ProVale = prompt("Enter Word to change to Pig Latin");
//Print the Orignal Name to Table Data elemet (ORName)
document.getElementById('ORName').innerHTML=ProVale
//print the Pig latin name to Table Data elemet (PLName)
document.getElementById('PLName').innerHTML=ProVale.slice(1)+ProVale.charAt(0)+"ay";