var i,j;
for(i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0) 
    {
        document.write(i + " Marco! Polo! <br>");
    }else if(i%3==0)
    {document.write(i + " Marco!<br>");}
    else if(i%5==0){
        document.write(i + " Polo! <br>");
    } else {
        window.document.write(i + "<br>");
    }
}
