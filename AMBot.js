/*
 * Antimatter Dimensions bot
 * technodestructo
 * 09/02/17
 */

var intervals = [];

//var amBot = document.createElement('script');
//amBot.src = "//code.jquery.com/jquery-3.2.1.min.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#body").append('<div id="AMBotContainer" style="background-color:#29333d; width:105px; height:40px; position:absolute; top:0px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#AMBotContainer").append('<button id="AMBotStartStop" style="height:80%; background-color:#c6d9ec; width:45px;">Start</button>');
	
	$("#AMBotStartStop").bind('click', function() {
		if($(this).html() === "Start") {
			startAMBot();
			$(this).html("Stop");
		}
		else {
			stopAMBot();
			$(this).html("Start");
		}
	});
	
	clearInterval(GUIsetup);
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; left:0; top:0; bottom:0; width:45px">');
	$("#AMBotTitleTab").append('<p style="position:absolute; right:0; top:0; bottom:0; font-family:Helvetica; font-weight:Light; font-size:14pt; color:#c6d9ec;">ambot&nbsp</p>');
	$("#AMBotContainer").append('<br> <input type="checkbox" id="Shift" name="Shift" checked> <label for="Shift">Shift</label>');
	$("#AMBotContainer").append('<br> <input type="checkbox" id="Galaxy" name="Galaxy" checked> <label for="Galaxy">Galaxy</label>');
	/*$("#dimensions").prepend('<div id="thisInfinity">');
	$("#dimensions").prepend('<div id="bestInfinity">');
	$("#dimensions").prepend('<div id="infinitied">');*/
	$shiftt = el("Shift");
	$galaxy = el("Galaxy");
}

function el(id) {
	return document.getElementById(id);
}

var $maxall = el("maxall");
var $secondResetLabel = el("secondResetLabel");
var $secondSoftReset = el("secondSoftReset");
var $resetLabel = el("resetLabel");
var $softReset = el("softReset");
var $first = el("first");
var $shiftt = null;
var $galaxy = null;


function startAMBot() {
	intervals = [
		setInterval(clickInfinity, 50),
		setInterval(clickMaxAll, 50),
		setInterval(clickSingles, 50),
		setInterval(clickMaxes, 50),
		setInterval(clickInfDims, 50),
		setInterval(clickReplicanti, 50),
		setInterval(clickTheorem, 50),
		setInterval(function () {
			if(! $galaxy.checked)
				return;
			//var second_html = $secondResetLabel.innerHTML;
			var reset_html = $resetLabel.innerHTML;
			var reset_num = reset_html.replace(/^\D+|\D+$/g, "");
			//if(second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
				clickGalaxy();
			//}
			if(parseInt(reset_num) > 500) {
				clickBoost();
			}
		}, 50), 
		setInterval(function() {
			if($shiftt.checked)
			{
				clickBoost();
			}
		}, 50)
	];
}
	
function stopAMBot() {
	intervals.forEach(function (interval) { clearInterval(interval); });
}

//var $replicantiunlock = el("replicantiunlock");
var $replicantichance = el("replicantichance");
var $replicantiinterval = el("replicantiinterval");
var $replicantimax = el("replicantimax");
var $replicantireset = el("replicantireset");

function clickReplicanti(){
	//$replicantiunlock.click();
	$replicantichance.className==="storebtn" && $replicantichance.click();
	$replicantiinterval.className==="storebtn" && $replicantiinterval.click();
	$replicantimax.className==="storebtn" && $replicantimax.click();
	$replicantireset.className==="storebtn" && $replicantireset.click();
}

var $theoremam = el("theoremam");
var $theoremip = el("theoremip");

function clickTheorem(){
	$theoremam.className==="timetheorembtn" && $theoremam.click();
	$theoremip.className==="timetheorembtn" && $theoremip.click();
}

function clickMaxAll() {
	$maxall.click();
}

function clickGalaxy() {
	$secondSoftReset.click();
}

function clickBoost() {
	if (!$softReset.classList.contains("unavailablebtn"))
	{
		$softReset.click();
		$first.click();
	}
}

var $tickSpeed = el("tickSpeed");

function clickSingles() {
	$tickSpeed.click();
}

var $tickSpeedMax = el("tickSpeedMax");
var $eightMax = el("M8");
var $seventhMax = el("M7");
var $sixthMax = el("M6");
var $fifthMax = el("M5");
var $fourthMax = el("M4");
var $thirdMax = el("M3");
var $secondMax = el("M2");
var $firstMax = el("M1");
var $newDim = el("newDimensionButton");

function clickMaxes() {
	$tickSpeedMax.click();
	if($eightMax != null)
		$eightMax.className==="storebtn" && $eightMax.click();
	if($firstMax != null)
		$firstMax.className==="storebtn" && $firstMax.click();
	if($seventhMax != null)
		$seventhMax.className==="storebtn" && $seventhMax.click();
	if($sixthMax != null)
		$sixthMax.className==="storebtn" && $sixthMax.click();
	if($fifthMax != null)
		$fifthMax.className==="storebtn" && $fifthMax.click();
	if($fourthMax != null)
		$fourthMax.className==="storebtn" && $fourthMax.click();
	if($thirdMax != null)
		$thirdMax.className==="storebtn" && $thirdMax.click();
	if($secondMax != null)
		$secondMax.className==="storebtn" && $secondMax.click();
	//$newDim.click();
	
	//$softReset.click();
	// this is somehow buggy
	//buyOneDimension(1);
	
}

var $infDim1 = el("infMax1");
var $infDim2 = el("infMax2");
var $infDim3 = el("infMax3");
var $infDim4 = el("infMax4");
var $infDim5 = el("infMax5");
var $infDim6 = el("infMax6");
var $infDim7 = el("infMax7");
var $infDim8 = el("infMax8");

function clickInfDims(){
	$infDim8.className==="storebtn" && $infDim8.click();
	$infDim7.className==="storebtn" && $infDim7.click();
	$infDim6.className==="storebtn" && $infDim6.click();
	$infDim5.className==="storebtn" && $infDim5.click();
	$infDim4.className==="storebtn" && $infDim4.click();
	$infDim3.className==="storebtn" && $infDim3.click();
	$infDim2.className==="storebtn" && $infDim2.click();
	$infDim1.className==="storebtn" && $infDim1.click();
}

var $bigcrunch = el("bigcrunch");

function clickInfinity() {
	$bigcrunch.style.display === "inline-block" && $bigcrunch.click();
}

//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);
