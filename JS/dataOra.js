//funzione per la data
function displayDate() {
    document.getElementById("demo").innerHTML="<p> Current Date and Time" + Date() + "</p>";
}
var d =new Date();
var theDay= d.getDay();
var theDay=d.getDate();
switch (theDay)
{
    case 5:
        document.write ("<b> Finally friday</b>");
        break;
        case 6:
            document.write("<b> Super saturday </b>");
            break;
            case 7:
                document.write("<b> sleepy sunday </b>");
                break;
                default:
                    document.write("<b> i'm really looking forward </b>")

}
(i=0);
while (i<=5) {

    document.write("the number is" +i);
    document.write("<br />");
    i++;
}





/*
commento su 
pi
righe
*/

