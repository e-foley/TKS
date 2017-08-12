function testMe(string, num) {
document.write(string + num);
}

function canPost(item, array)
{
  for (var i=0; i<array.length; i++)
  {
    if (item == array[i])
      return false;
  }
return true;
}

/*getCounterCode()
{
counterCode = "<font size=1 face='arial'>";
countercode += "<br><!-- Start of StatCounter Code -->";
counterCode += "<script type='text/javascript' language='javascript'>";
counterCode += "var sc_project=1984727;";
counterCode += "var sc_invisible=0;";
counterCode += "var sc_partition=18;";
counterCode += "var sc_security='6f55f429';";
counterCode += "var sc_text=2;";
counterCode += "<\/script>";

counterCode += "<script type='text/javascript' language='javascript'"; 
counterCode += " src='http://www.statcounter.com/counter/counter.js'><\/script>";
counterCode += "<noscript><a href='http://www.statcounter.com/' ";
counterCode += "target='_blank'>"
counterCode += "<img src='http://c19.statcounter.com/counter.php?sc_project=1984727&java=0&security=6f55f429&invisible=0' alt='counter statistics' border='0'></a></noscript>";
counterCode += "<!-- End of StatCounter Code --><br><a href='http://my.statcounter.com/project/standard/stats.php?project_id=1984727&guest=1'></a></font>";

return counterCode;
}*/


function placePics(galleryName, prefix, startNum, endNum, suffix, location, exclusions)
{

var COLUMNS = 3;
var PIC_WIDTH = 320;
var PIC_HEIGHT = PIC_WIDTH * 0.75;

var tableString = "<div class='title'>" + galleryName + "</div><p><div class='header'>Click on a picture to view it alone.</div><p><div align='center'>";
var curExclude = 0;

for (var i=startNum; i<=endNum; i++)
{
  if (canPost(i, exclusions))
  {
    if ((i - curExclude) == startNum)
      tableString += "<table style='border-collapse: separate;'>";
    if ((i - startNum - curExclude) % COLUMNS == 0)
      tableString += "<tr>";

    tableString += "<td style='padding: 0px;'>";
    tableString += ("<a href='" + location + prefix + i + suffix + "'>");
    tableString += ("<img src='" + location + prefix + i + suffix + "'" + " style='border-style: solid; border-width: 0px; width:" + PIC_WIDTH + "px; height:" + PIC_HEIGHT + "px;'>");
    tableString += "</a>";
    tableString += "</td>";

    if ((i - startNum - curExclude) % COLUMNS == (COLUMNS - 1))
      tableString += "</tr>";
    if (i == endNum)
      tableString += "</table>";
  }
  else
    curExclude++;    
}

tableString += "</div>";

tableString += "<p><a class='biglink' href='http://nicklegends.elfractal.com/legendssnapshots.html'>Back to <i>Legends</i> Snapshots</a>";

document.write(tableString);
}