//Here begins a new quest to spread Legends knowledge. We fight together!!

//Necessary parameters...
//
//name (Episode Name)
//shortName (Picture URL accessor, like "Jewel-Encrusted Egg")
//number (Episode number from 1-120)
//letter (Production letter, if it is known)
//season (Season the episode was taped in)
//layout (Layout within the season)
//artifactRoom (Room in which the artifact is hidden)
//rjMoatPerformance (How the Red Jaguars did in the Moat (1st, 2nd, etc.; DNQ)
//bbMoatPerformance
//gmMoatPerformance
//oiMoatPerformance
//ppMoatPerformance
//ssMoatPerformance
//moatPic1Num (The number at the end of the Moat's 1st image's URL)
//moatPic2Num
//moatPic3Num
//moatSummary (The summary of the Moat round)
//stepsTeam1 (The initials of the 1st Steps team)
//stepsTeam2
//stepsTeam3
//stepsTeam4
//team1StepsPerformance (How the first team did in the Steps (1st, 2nd, 2 correct, etc.)
//team2StepsPerformance
//team3StepsPerformance
//team4StepsPerformance
//legendPicNum (The number at the end of the Legend's image URL)
//stepsPic2Num (The number at the end of the Steps' second image URL)
//stepsPic3Num
//stepsLegend
//stepsSummary (The summary of the Steps round)
//gamesTeam1 (The initials of the first Games team)
//team1GirlName (The girl's name on team1, always listed before boy's)
//team1BoyName
//team1Pendants
//team1Game1Performance ("W," "L," or "T"--the outcome of the first Game for the first team)
//team1Game2Performance
//team1Game3Performance
//gamesTeam2
//team2GirlName
//team2BoyName
//team2Pendants
//gamesPic1Num
//gamesPic2Num
//gamesPic3Num
//team1BreakerPerformance
//breakerPic1Num
//breakerPic2Num
//breakerPic3Num
//breakerQuestion
//breakerSummary
////teamTemple (The initials of the team that made it to the temple)
//templeOutcome ("Win," "3 Guards," or "Out of Time," but NOT the time left)
//timeLeft
//templePic1Num
//templePic2Num
//templePic3Num
//roomsEntered
//guardLocations
//halfPendantLocation
//summaryArray (I'll explain it later)



function Episode(name, shortName, number, letter, season, layout, artifactRoom, rjMoatPerformance, bbMoatPerformance, gmMoatPerformance, oiMoatPerformance, ppMoatPerformance, ssMoatPerformance, moatPic1Num, moatPic2Num, moatPic3Num, moatSummary, stepsTeam1, stepsTeam2, stepsTeam3, stepsTeam4, team1StepsPerformance, team2StepsPerformance, team3StepsPerformance, team4StepsPerformance, stepsLegend, stepsSummary, gamesTeam1, team1GirlName, team1BoyName, team1Pendants, team1Game1Performance, team1Game2Performance, team1Game3Performance, gamesTeam2, team2GirlName, team2BoyName, team2Pendants, gamesPic1Num, gamesPic2Num, gamesPic3Num, gamesSummary, team1BreakerPerformance, breakerPic1Num, breakerPic2Num, breakerPic3Num, breakerQuestion, breakerSummary, teamTemple, templeOutcome, timeLeft, templePic1Num, templePic2Num, templePic3Num, roomsEntered, guardLocations, halfPendantLocations, summaryArray) {
this.name = name;
this.shortName = shortName;
this.number = number;
this.letter = letter;
this.season = season;
this.layout = layout;
this.artifactRoom = artifactRoom;
this.rjMoatPerformance = rjMoatPerformance;
this.bbMoatPerformance = bbMoatPerformance;
this.gmMoatPerformance = gmMoatPerformance;
this.oiMoatPerformance = oiMoatPerformance;
this.ppMoatPerformance = ppMoatPerformance;
this.ssMoatPerformance = ssMoatPerformance;
this.moatPic1Num = moatPic1Num;
this.moatPic2Num = moatPic2Num;
this.moatPic3Num = moatPic3Num;
this.moatSummary = moatSummary;
this.stepsTeam1 = stepsTeam1;
this.stepsTeam2 = stepsTeam2;
this.stepsTeam3 = stepsTeam3;
this.stepsTeam4 = stepsTeam4;
this.team1StepsPerformance = team1StepsPerformance;
this.team2StepsPerformance = team2StepsPerformance;
this.team3StepsPerformance = team3StepsPerformance;
this.team4StepsPerformance = team4StepsPerformance;
this.legendPicNum = legendPicNum;
this.stepsPic2Num = stepsPic2Num;
this.stepsPic3Num = stepsPic3Num;
this.stepsLegend = stepsLegend;
this.stepsSummary = stepsSummary;
this.gamesTeam1 = gamesTeam1;
this.team1GirlName = team1GirlName;
this.team1BoyName = team1BoyName;
this.team1Pendants = team1Pendants;
this.team1Game1Performance = team1Game1Performance;
this.team1Game2Performance = team1Game2Performance;
this.team1Game3Performance = team1Game3Performance;
this.gamesTeam2 = gamesTeam2;
this.team2GirlName = team2GirlName;
this.team2BoyName = team2BoyName;
this.team2Pendants = team2Pendants;
this.gamesPic1Num = gamesPic1Num;
this.gamesPic2Num = gamesPic2Num;
this.gamesPic3Num = gamesPic3Num;
this.gamesSummary = gamesSummary;
this.team1BreakerPerformance = team1BreakerPerformance;
this.breakerPic1Num = breakerPic1Num;
this.breakerPic2Num = breakerPic2Num;
this.breakerPic3Num = breakerPic3Num;
this.breakerQuestion = breakerQuestion;
this.breakerSummary = breakerSummary;
this.teamTemple = teamTemple;
this.templeOutcome = templeOutcome;
this.timeLeft = timeLeft;
this.templePic1Num = templePic1Num;
this.templePic2Num = templePic2Num;
this.templePic3Num = templePic3Num;
this.summaryArray = summaryArray;
this.roomsEntered = roomsEntered;
this.guardLocations = guardLocations;
this.halfPendantLocation = halfPendantLocation;

this.templeTeamGirlName = null;
this.templeTeamBoyName = null;

}

//Gives "win" if given Moat performance qualifies for next round, "" if doesn't.
function moatOutcome(performance) {
var hasNumber = /\d/.test(performance);
if (hasNumber && !contains(performance, "*"))
  return "win";
if (!hasNumber && contains(performance, "*"))
  return "win";
return "";
}

//Gives "win" if given Stps performance qualifies for next round, "" if doesn't.
function stepsOutcome(performance) {
if (!contains(performance, "correct"))
  return "win";
return "";
}

//Gives "win" if given Gmes performance qualifies for next round, "" if doesn't.
function gamesOutcome(pendantsNom, pendantsOther) {
if (convertPendants(pendantsNom) >= convertPendants(pendantsOther))
  return "win";
return "";
}

function convertPendants(pendantText) {
pendants = 0;
if (pendantText.length == 1 || pendantText.length > 3)
  pendants += parseInt(pendantText.substring(0,1));
if (contains(pendantText, "1/2"))
  pendants += 0.5;
return pendants;
}

//Gives "win" if given Brkr performance qualifies for next round, "" if doesn't.
function breakerOutcome(performance) {
if (performance == "Won")
  return "win";
return "";
}

//Gives "win" if given Brkr performance qualifies for next round, "" if doesn't.
function templeOutcomeMethod(performance) {
if (contains(performance, "Won"))
  return "win";
return "";
}

function addS(number) {
if (number == "1/2" || number == "1")
  return "";
return "s";
}

function contains(string, substring) {
return (string.indexOf(substring) != -1);
}

function expandTeam(teamInitials) {
if (teamInitials == "rj")
  return "Jaguars";
if (teamInitials == "bb")
  return "Barracudas";
if (teamInitials == "gm")
  return "Monkeys";
if (teamInitials == "oi")
  return "Iguanas";
if (teamInitials == "pp")
  return "Parrots";
if (teamInitials == "ss")
  return "Snakes";
if (teamInitials == "cc")
  return "Crocodiles";
return "Bad team!";
}

Episode.prototype.getCode = function()
{
return (this.getHeaderCode() + this.getMoatCode() + this.getStepsCode() + this.getGamesCode() + this.getBreakerCode() + this.getTempleCode());
}

Episode.prototype.getHeaderCode = function() {
var headerString = "";

headerString += "<a class='biglink' href='http://nicklegends.elfractal.com/episodelist.html'>Back to Episode List</a>";

headerString += "<div align='center' class='epdivplacemat'>";
headerString += "<table class='epheading'>";
headerString += "<tr><td colspan='2' class='eptitle'>";
headerString += this.name;
headerString += "</td></tr><tr><td class='epnumber'>";
headerString += ("Episode Number: " + this.number + " ");
headerString += ("(" + (this.season*100 + ((this.number-1)%40+1)) + this.letter +")");
headerString += "</td><td class='layoutnumber'>";
headerString += "<a href='http://nicklegends.elfractal.com/templelayouts2.html'>";
headerString += "Temple Layout: ";
headerString += (this.season + "-" + this.layout);
headerString += "</a></td></tr></table></div>";
headerString += "<div align='center'>"
headerString += "<a href='http://i20.photobucket.com/albums/b210/lotht/LOTHT%20Season%20";
headerString += (this.season + "/" + this.shortName + "/" + "artifact.jpg'>");
headerString += "<img src='http://i20.photobucket.com/albums/b210/lotht/LOTHT%20Season%20";
headerString += (this.season + "/" + this.shortName + "/" + "artifact.jpg' ");
headerString += "style='width: 300; border-width: 0px;'></a></div><p>";
return headerString;
}

Episode.prototype.getMoatCode = function() {
var moatString = "";
moatString += "<div align='center' class='epdivplacemat'>";
moatString += "<table class='epdiv'>";
moatString += "<tr><td colspan='2' class='epdivhead'>The Moat</td></tr>";
moatString += "<tr><td rowspan='6' class='photobox'>";
moatString += this.getPictureCode("moat",this.moatPic1Num);
moatString += this.getPictureCode("moat",this.moatPic2Num);
moatString += this.getPictureCode("moat",this.moatPic3Num);
moatString += "</td>";
moatString += this.getTeamBoxCode("rj", moatOutcome(this.rjMoatPerformance), this.rjMoatPerformance);
moatString += "<tr>";
moatString += this.getTeamBoxCode("bb", moatOutcome(this.bbMoatPerformance), this.bbMoatPerformance);
moatString += "<tr>";
moatString += this.getTeamBoxCode("gm", moatOutcome(this.gmMoatPerformance), this.gmMoatPerformance);
moatString += "<tr>";
moatString += this.getTeamBoxCode("oi", moatOutcome(this.oiMoatPerformance), this.oiMoatPerformance);
moatString += "<tr>";
moatString += this.getTeamBoxCode("pp", moatOutcome(this.ppMoatPerformance), this.ppMoatPerformance);
moatString += "<tr>";
moatString += this.getTeamBoxCode("ss", moatOutcome(this.ssMoatPerformance), this.ssMoatPerformance);

if (this.moatSummary!= "" && this.moatSummary != "Insert Moat Summary Here") {
   moatString += "<tr><td class='summary' colspan='2'>";
   moatString += "<div class='summarytitle'>Summary</div>";
   moatString += this.moatSummary;
}

moatString += "</td></tr></table></div>";
return moatString;
}

Episode.prototype.getStepsCode = function() {
var stepsString = "";
stepsString += "<div align='center' class='epdivplacemat'>";
stepsString += "<table class='epdiv'>";
stepsString += "<tr><td colspan='2' class='epdivhead'>The Steps of Knowledge</td></tr>";
stepsString += "<tr><td rowspan='4' class='photobox'>";
stepsString += this.getPictureCode("legend",this.legendPicNum);
stepsString += this.getPictureCode("steps",this.stepsPic2Num);
stepsString += this.getPictureCode("steps",this.stepsPic3Num);
stepsString += "</td>";
stepsString += this.getTeamBoxCode(this.stepsTeam1, stepsOutcome(this.team1StepsPerformance), this.team1StepsPerformance);
stepsString += "<tr>";

stepsString += this.getTeamBoxCode(this.stepsTeam2, stepsOutcome(this.team2StepsPerformance), this.team2StepsPerformance);
stepsString += "<tr>";

stepsString += this.getTeamBoxCode(this.stepsTeam3, stepsOutcome(this.team3StepsPerformance), this.team3StepsPerformance);
stepsString += "<tr>";

stepsString += this.getTeamBoxCode(this.stepsTeam4, stepsOutcome(this.team4StepsPerformance), this.team4StepsPerformance);

if ((this.stepsLegend != "" && this.stepsLegend != "Insert Legend Here") || (this.stepsSummary != "" && this.stepsSummary != "Insert Steps Summary Here"))
stepsString += "<tr><td class='summary' colspan='2'>";

if (this.stepsLegend != "" && this.stepsLegend != "Insert Legend Here") {
   stepsString += "<div class='summarytitle'>Legend</div>";
   stepsString += this.stepsLegend;
}

if (this.stepsSummary != "" && this.stepsSummary != "Insert Steps Summary Here") {
  stepsString += "<div class='summarytitle'>Summary</div>";
  stepsString += this.stepsSummary;
}

stepsString += "</td></tr></table></div>";
return stepsString;
}

Episode.prototype.getGamesCode = function() {
var gamesString = "";
gamesString += "<div align='center' class='epdivplacemat'>";
gamesString += "<table class='epdiv'>";
gamesString += "<tr><td colspan='2' class='epdivhead'>The Temple Games</td></tr>";
gamesString += "<tr><td rowspan='2' class='photobox'>";
gamesString += this.getPictureCode("game",this.gamesPic1Num);
gamesString += this.getPictureCode("game",this.gamesPic2Num);
gamesString += this.getPictureCode("game",this.gamesPic3Num);
gamesString += ("</td><td class='team " + this.gamesTeam1 + " ");
gamesString += (gamesOutcome(this.team1Pendants, this.team2Pendants) + "'>");
gamesString += (expandTeam(this.gamesTeam1) + ": ");
gamesString += (this.team1Pendants + " ")
gamesString += ("pdt" + addS(this.team1Pendants) + "<br>");
gamesString += (this.getAllGamesCode(1) + "<br>");
gamesString +=  this.getNameCode(this.team1GirlName, this.team1BoyName);
gamesString +=  "</td></tr>";

gamesString += ("<tr><td class='team " + this.gamesTeam2 + " ");
gamesString += (gamesOutcome(this.team2Pendants, this.team1Pendants) + "'>");
gamesString += (expandTeam(this.gamesTeam2) + ": ");
gamesString += (this.team2Pendants + " ")
gamesString += ("pdt" + addS(this.team2Pendants) + "<br>");
gamesString += (this.getAllGamesCode(2) + "<br>");
gamesString +=  this.getNameCode(this.team2GirlName, this.team2BoyName);
gamesString +=  "</td></tr>";

if (this.gamesSummary != "" && this.gamesSummary != "Insert Games Summary Here") {
   gamesString += "<tr><td class='summary' colspan='2'>";
   gamesString += "<div class='summarytitle'>Summary</div>";
   gamesString += this.gamesSummary;
}

gamesString += "</td></tr></table></div>";
return gamesString;
}

Episode.prototype.getBreakerCode = function() {
if (this.team1Pendants != this.team2Pendants)
  return "";

var breakerString = "";
breakerString += "<div align='center' class='epdivplacemat'>";
breakerString += "<table class='epdiv'>";
breakerString += "<tr><td colspan='2' class='epdivhead'>The Tiebreaker</td></tr>";
breakerString += "<tr><td rowspan='2' class='photobox'>";
breakerString += this.getPictureCode("tie",this.breakerPic1Num);
breakerString += this.getPictureCode("tie",this.breakerPic2Num);
breakerString += this.getPictureCode("tie",this.breakerPic3Num);
breakerString += ("</td><td class='team " + this.gamesTeam1 + " ");
breakerString += (breakerOutcome(this.team1BreakerPerformance) + "'>");
breakerString += (expandTeam(this.gamesTeam1) + ": ");
breakerString += (this.team1BreakerPerformance + "<br>")
breakerString +=  this.getNameCode(this.team1GirlName, this.team1BoyName);
breakerString +=  "</td></tr>";
breakerString += ("</td><td class='team " + this.gamesTeam2 + " ");
breakerString += (breakerOutcome(oppositeOutcome(this.team1BreakerPerformance)) + "'>");
breakerString += (expandTeam(this.gamesTeam2) + ": ");
breakerString += (oppositeOutcome(this.team1BreakerPerformance) + "<br>")
breakerString +=  this.getNameCode(this.team2GirlName, this.team2BoyName);
breakerString +=  "</td></tr>";

if ((this.breakerQuestion != "" && this.breakerQuestion != "Insert Tiebreaker Question Here") || (this.breakerSummary != "" && this.breakerSummary != "Insert Breaker Summary Here"))
breakerString += "<tr><td class='summary' colspan='2'>";

if (this.breakerQuestion != "" && this.breakerQuestion != "Insert Tiebreaker Question Here") {
   breakerString += "<div class='summarytitle'>Question:</div>";
   breakerString += this.breakerQuestion;
}

if (this.breakerSummary != "" && this.breakerSummary != "Insert Breaker Summary Here") {
   breakerString += "<div class='summarytitle'>Summary:</div>";
   breakerString += this.breakerSummary;
}

breakerString += "</td></tr></table></div>";
return breakerString;
}

Episode.prototype.getTempleCode = function() {
this.setTempleTeam();
var templeString = "";
templeString += "<div align='center' class='epdivplacemat'>";
templeString += "<table class='epdiv'>";
templeString += "<tr><td colspan='2' class='epdivhead'>Olmec's Temple</td></tr>";
templeString += "<tr><td rowspan='1' class='photobox'>";
templeString += this.getPictureCode("temple",this.templePic1Num);
templeString += this.getPictureCode("temple",this.templePic2Num);
templeString += this.getPictureCode("temple",this.templePic3Num);
templeString += ("</td><td class='team " + this.teamTemple + " ");
templeString += (templeOutcomeMethod(this.templeOutcome) + "'>");
templeString += (expandTeam(this.teamTemple) + ":<br>");
templeString += (this.templeOutcome + "! " + formatTime(this.timeLeft) + "<br>")
templeString +=  this.getNameCode(this.templeTeamGirlName, this.templeTeamBoyName);
templeString += "</td></tr>";

//DIAGRAM PART
templeString += "<tr><td class='diagramplacemat' colspan='2'>";
templeString += "<table width='100%' class='diagramtable'><tr>";
templeString += "<td class='diagrambox'>";
templeString += "<img src='http://i20.photobucket.com/albums/b210/lotht/LOTHT%20Season%20";
templeString += (this.season + "/" + this.shortName + "/diagram.jpg' ");
templeString += "class='diagram' alt='Temple Diagram'>";
templeString += "</td>"
templeString += "<td class='diagrambox' colspan='2'>";

templeString += "<span style='font-weight: bold'>";
templeString += ("Artifact Location:</span> " + this.artifactRoom);
templeString += "<br><span style='font-weight: bold'>";
templeString += ("Outcome:</span> " + this.templeOutcome + "! " + formatTime(this.timeLeft));
templeString += "<br><span style='font-weight: bold'>";
templeString += ("Rooms Entered:</span> " + this.roomsEntered);
templeString += "<br><span style='font-weight: bold'>";
templeString += ("Guard Locations:</span> " + this.guardLocations);
templeString += "<br><span style='font-weight: bold'>";
templeString += ("Half-Pendant Location:</span> " + this.halfPendantLocation);
templeString += "</td></tr></table></td></tr>";

templeString += "<tr><td class='summary' colspan='2'>";
templeString += "<div class='summarytitle' style='margin-bottom: 10px;'>Contributed Summaries and Notes</div>";
templeString += this.getSummariesCode();
templeString += "</td></tr></table></div>";

templeString += "<a class='biglink' href='http://nicklegends.elfractal.com/episodelist.html'>Back to Episode List</a>";

return templeString;
}

Episode.prototype.getSummariesCode = function()
{
  summariesString = "";
  for (var i=0; i<(this.summaryArray.length-1); i=i+2) {
    summariesString += ("<div class='name'>" +this.summaryArray[i] + ":</div>");
    summariesString+=("<div class='comment'>"+this.summaryArray[i+1]+"</div>");
  }
return summariesString;
}

Episode.prototype.getAllGamesCode = function(team)
{
if (team == 1)
  return (this.team1Game1Performance + "-" + this.team1Game2Performance + "-" + this.team1Game3Performance)

if (team == 2)
  return (oppositeOutcome(this.team1Game1Performance) + "-" + oppositeOutcome(this.team1Game2Performance) + "-" + oppositeOutcome(this.team1Game3Performance));
}

function oppositeOutcome(string)
{
if (string == "Won")
  return "Lost";
if (string == "Lost")
  return "Won";
if (string == "Tied")
  return "Tied";
return "?";
}

Episode.prototype.setTempleTeam = function()
{
if (this.teamTemple == this.gamesTeam1)
  {
    this.templeTeamGirlName = this.team1GirlName;
    this.templeTeamBoyName = this.team1BoyName;
  }
else
  {
    this.templeTeamGirlName = this.team2GirlName;
    this.templeTeamBoyName = this.team2BoyName;
  }
}

Episode.prototype.getPictureCode = function(prefix, number) {
var pictureString = "";
pictureString += "<a href='http://i20.photobucket.com/albums/b210/lotht/LOTHT%20Season%20";
pictureString += (this.season + "/" + this.shortName + "/");
pictureString += (prefix + number + ".jpg'>");
pictureString += "<img src='http://i20.photobucket.com/albums/b210/lotht/LOTHT%20Season%20";
pictureString += (this.season + "/" + this.shortName + "/");
pictureString += ("th_" + prefix + number + ".jpg' class='epdivpic' ");
pictureString += ("alt='" + prefix + number + "'></a>");
return pictureString;
}

Episode.prototype.getNameCode = function(nameGirl, nameBoy) {
return ("(" + nameGirl + " & " + nameBoy + ")");
}

Episode.prototype.getTeamBoxCode = function(team, condition, performance) {
var teamBoxString = "";
teamBoxString += ("<td class='team " + team + " ");
teamBoxString += (condition + "'>");
teamBoxString += (expandTeam(team) + ": ");
teamBoxString += (performance + "</td></tr>");
return teamBoxString;
}

function formatTime(time) {
if (time != "")
  return (time + " left");
return time;
}