var index =0;
var movieTitle = ["Star Wars VII: The Last Jedi", "Dunkirk", "Valerian", "Thor: Ragnarok", "Blade Runner 2049"];
var movieImage = ["starwarsthelastjedi.jpg", "dunkirkimage.jpg", "valerian.jpg", "thorragnarok.jpg", "bladerunner2049.jpg"];
var movieTrailer = ["https://www.youtube.com/embed/zB4I68XVPzQ", "https://www.youtube.com/embed/F-eMt3SrfFU" , "https://www.youtube.com/embed/cPeqNTqZNN0", "https://www.youtube.com/embed/ue80QwXMRHg", "https://www.youtube.com/embed/gCcx85zbxz4"];
var cast = ["daisyridley.jpg", "Daisy Ridley", "Rey", "johnboyega.jpg", "John Boyega", "Finn", "markhamill.jpg", "Mark Hamill", "Luke Skywalker", "carriefisher.jpg", "Carrie Fisher", "Leia Organa", "adamdriver.jpg", "Adam Driver", "Kylo Ren", "oscarisaac.jpg", "Oscar Isaac", "Poe Dameron", "lupitanyongo.jpg", "Lupita Nuyong'o", "Maz Kanata",
"harrystyles.jpg", "Harry Stlyes", "Alex", "tomhardy.jpg", "Tom Hardy", "Farrier", "cillianmurphy.jpg", "Cillian Murphy", "Soldier", "markrylance.jpg", "Mark Rylance", "Civillian", "kennethbranagh.jpg", "Kenneth Branagh", "Navy Captain", "fionnwhitehead.jpg", "Fionn Whitehead", "Tommy", "jacklowden.jpg", "Jack Lowden", "Collins",
"caradelevigne.jpg", "Cara Delevigne", "Laureline", "danedehaan.jpg", "Dane DeHaan", "Valerian", "rihanna.jpg", "Rihanna", "Bubble", "cliveowen.jpg", "Clive Owen", "Commander Filitt", "ethanhawke.jpg", "Ethan Hawke", "Jolly The Pimp", "kriswu.jpg", "Kris Wu", "Sergeant Neza","samspruell.jpg", "Sam Spruell", "General Okto Bar",
"chrishemsworth.jpg", "Chris Hemsworth", "Thor", "tomhiddleston.jpg", "Tom Hiddleston", "Loki", "cateblanchett.jpg", "Cate Blanchett", "Hela", "markruffalo.jpg", "Mark Ruffalo", "Hulk", "taikawaititi.jpg", "Taika Waititi", "Korg", "tessathompson.jpg", "Tessa Thompson", "Valkyrie", "jaimealexander.jpg", "Jaime Alexander", "Sif",
"harrisonford.jpg", "Harrison Ford", "Rick Deckard", "ryangosling.jpg", "Ryan Gosling", "Officer K", "jaredleto.jpg", "Jared Leto", "", "robinwright.jpg", "Robin Wright", "", "davebautista.jpg", "Dave Bautista", "", "anadearmas.jpg", "Ana de Armas", "Joi", "mackenziedavis.jpg", "Mackenzie Davis", ""];

var currentTrailerIndex = 0;
var otherVideo1Index = 1;
var otherVideo2Index = 2;
var tmp;

var starWarsVideo = ["https://www.youtube.com/embed/zB4I68XVPzQ", "https://www.youtube.com/embed/ye6GCY_vqYk", "https://www.youtube.com/embed/b89T74ToK9E"];
var starWarsThumbnail = ["https://i.ytimg.com/vi/zB4I68XVPzQ/maxresdefault.jpg", "https://i.ytimg.com/vi/ye6GCY_vqYk/maxresdefault.jpg", "https://i.ytimg.com/vi/b89T74ToK9E/maxresdefault.jpg"];
var starWarsVideoTitle = ["Star Wars: The Last Jedi Official Teaser", "Star Wars: The Last Jedi Behind The Scenes", "Star Wars THE LAST JEDI Trailer Breakdown - Easter Eggs & Predictions"];

var dunkirkVideo = ["https://www.youtube.com/embed/F-eMt3SrfFU", "https://www.youtube.com/embed/SrDFsvUYrP8", "https://www.youtube.com/embed/2SglFUPQVnM"]; 
var dunkirkThumbnail = ["https://i.ytimg.com/vi/F-eMt3SrfFU/maxresdefault.jpg", "https://i.ytimg.com/vi/_cmgiys2n1o/maxresdefault.jpg", "https://i.ytimg.com/vi/2SglFUPQVnM/maxresdefault.jpg"];
var dunkirkVideoTitle = ["Dunkirk - Trailer 1 [HD]", "Dunkirk Trailer #2 (2017) | Movieclips Trailers", "Dunkirk - Movie Review"];

var valerianVideo = ["https://www.youtube.com/embed/cPeqNTqZNN0", "https://www.youtube.com/embed/NNrK7xVG3PM", "https://www.youtube.com/embed/K8oVfkZM3pA"];
var valerianThumbnail = ["https://i.ytimg.com/vi/cPeqNTqZNN0/maxresdefault.jpg", "https://i.ytimg.com/vi/NNrK7xVG3PM/maxresdefault.jpg", "https://i.ytimg.com/vi/Bi-r0qIYcso/maxresdefault.jpg"];
var valerianVideoTitle = ["Valerian and the City of a Thousand Planets Official Trailer 2", "Valerian and the City of a Thousand Planets Official Teaser Trailer", "Valerian and the City of a Thousand Planets Final Trailer"];

var thorVideo = ["https://www.youtube.com/embed/ue80QwXMRHg", "https://www.youtube.com/embed/v7MGUNV8MxU", "https://www.youtube.com/embed/T_5KFZddL2I"];
var thorThumbnail = ["https://i.ytimg.com/vi/ue80QwXMRHg/maxresdefault.jpg", "https://i.ytimg.com/vi/v7MGUNV8MxU/maxresdefault.jpg", "https://i.ytimg.com/vi/T_5KFZddL2I/maxresdefault.jpg"];
var thorVideoTitle = ["Thor: Ragnarok Official Trailer", "Thor: Ragnarok Official Teaser", "Thor: Ragnarok Officail Trailer Easter Eggs"];

var bladeRunnerVideo = ["https://www.youtube.com/embed/gCcx85zbxz4", "https://www.youtube.com/embed/dZOaI_Fn5o4", "https://www.youtube.com/embed/haXvp8M9Cog"];
var bladeRunnerThumbnail = ["https://i.ytimg.com/vi/gCcx85zbxz4/maxresdefault.jpg", "https://i.ytimg.com/vi/dZOaI_Fn5o4/maxresdefault.jpg", "https://i.ytimg.com/vi/haXvp8M9Cog/maxresdefault.jpg"];
var bladeRunnerVideoTitle = ["Blade Runner 2049 Official Trailer", "Blade Runner 2049 Official Trailer 2", "Blade Runner 2049 Official Announcement"];



function changeMovie() {
	if( index == movieTitle.length - 1 ) index = 0;
	else index +=1;
	
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	if(index == 0){
		document.getElementById("trailer").src = "" + starWarsVideo[0] + "";
		document.getElementById("otherVideoImage2").src = "" + starWarsThumbnail[2] + "";
		document.getElementById("currentVideoTitle").innerHTML = starWarsVideoTitle[0];
		document.getElementById("otherVideoTitle2").innerHTML = starWarsVideoTitle[2];
		document.getElementById("otherVideoImage1").src = "" + starWarsThumbnail[1] + "";
		document.getElementById("otherVideoTitle1").innerHTML = starWarsVideoTitle[1];
	}
	else if(index == 1){
		document.getElementById("trailer").src = "" + dunkirkVideo[0] + "";
		document.getElementById("otherVideoImage2").src = "" + dunkirkThumbnail[2] + "";
		document.getElementById("currentVideoTitle").innerHTML = dunkirkVideoTitle[0];
		document.getElementById("otherVideoTitle2").innerHTML = dunkirkVideoTitle[2];
		document.getElementById("otherVideoImage1").src = "" + dunkirkThumbnail[1] + "";
		document.getElementById("otherVideoTitle1").innerHTML = dunkirkVideoTitle[1];
	}
	else if(index == 2){
		document.getElementById("trailer").src = "" + valerianVideo[0] + "";
		document.getElementById("otherVideoImage2").src = "" + valerianThumbnail[2] + "";
		document.getElementById("currentVideoTitle").innerHTML = valerianVideoTitle[0];
		document.getElementById("otherVideoTitle2").innerHTML = valerianVideoTitle[2];
		document.getElementById("otherVideoImage1").src = "" + valerianThumbnail[1] + "";
		document.getElementById("otherVideoTitle1").innerHTML = valerianVideoTitle[1];
	}
	else if(index == 3){
		document.getElementById("trailer").src = "" + thorVideo[0] + "";
		document.getElementById("otherVideoImage2").src = "" + thorThumbnail[2] + "";
		document.getElementById("currentVideoTitle").innerHTML = thorVideoTitle[0];
		document.getElementById("otherVideoTitle2").innerHTML = thorVideoTitle[2];
		document.getElementById("otherVideoImage1").src = "" + thorThumbnail[1] + "";
		document.getElementById("otherVideoTitle1").innerHTML = thorVideoTitle[1];
	}
	else if(index == 4){
		document.getElementById("trailer").src = "" + bladeRunnerVideo[0] + "";
		document.getElementById("otherVideoImage2").src = "" + bladeRunnerThumbnail[2] + "";
		document.getElementById("currentVideoTitle").innerHTML = bladeRunnerVideoTitle[0];
		document.getElementById("otherVideoTitle2").innerHTML = bladeRunnerVideoTitle[2];
		document.getElementById("otherVideoImage1").src = "" + bladeRunnerThumbnail[1] + "";
		document.getElementById("otherVideoTitle1").innerHTML = bladeRunnerVideoTitle[1];
	}
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
	
}

function selectStarWarsTheLastJedi() {
	index = 0;
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	document.getElementById("trailer").src = "" + starWarsVideo[0] + "";
	document.getElementById("otherVideoImage2").src = "" + starWarsThumbnail[2] + "";
	document.getElementById("currentVideoTitle").innerHTML = starWarsVideoTitle[0];
	document.getElementById("otherVideoTitle2").innerHTML = starWarsVideoTitle[2];
	document.getElementById("otherVideoImage1").src = "" + starWarsThumbnail[1] + "";
	document.getElementById("otherVideoTitle1").innerHTML = starWarsVideoTitle[1];
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
}
function selectDunkirk() {
	index = 1;
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	document.getElementById("trailer").src = "" + dunkirkVideo[0] + "";
	document.getElementById("otherVideoImage2").src = "" + dunkirkThumbnail[2] + "";
	document.getElementById("currentVideoTitle").innerHTML = dunkirkVideoTitle[0];
	document.getElementById("otherVideoTitle2").innerHTML = dunkirkVideoTitle[2];
	document.getElementById("otherVideoImage1").src = "" + dunkirkThumbnail[1] + "";
	document.getElementById("otherVideoTitle1").innerHTML = dunkirkVideoTitle[1];
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
}
function selectValerian() {
	index = 2;
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	document.getElementById("trailer").src = "" + valerianVideo[0] + "";
	document.getElementById("otherVideoImage2").src = "" + valerianThumbnail[2] + "";
	document.getElementById("currentVideoTitle").innerHTML = valerianVideoTitle[0];
	document.getElementById("otherVideoTitle2").innerHTML = valerianVideoTitle[2];
	document.getElementById("otherVideoImage1").src = "" + valerianThumbnail[1] + "";
	document.getElementById("otherVideoTitle1").innerHTML = valerianVideoTitle[1];
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
}
function selectThorRagnarok() {
	index = 3;
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	document.getElementById("trailer").src = "" + thorVideo[0] + "";
	document.getElementById("otherVideoImage2").src = "" + thorThumbnail[2] + "";
	document.getElementById("currentVideoTitle").innerHTML = thorVideoTitle[0];
	document.getElementById("otherVideoTitle2").innerHTML = thorVideoTitle[2];
	document.getElementById("otherVideoImage1").src = "" + thorThumbnail[1] + "";
	document.getElementById("otherVideoTitle1").innerHTML = thorVideoTitle[1];
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
}
function selectBladeRunner2049() {
	index = 4;
	currentTrailerIndex = 0;
	otherVideo1Index = 1;
	otherVideo2Index = 2;
	document.getElementById("trailer").src = "" + bladeRunnerVideo[0] + "";
	document.getElementById("otherVideoImage2").src = "" + bladeRunnerThumbnail[2] + "";
	document.getElementById("currentVideoTitle").innerHTML = bladeRunnerVideoTitle[0];
	document.getElementById("otherVideoTitle2").innerHTML = bladeRunnerVideoTitle[2];
	document.getElementById("otherVideoImage1").src = "" + bladeRunnerThumbnail[1] + "";
	document.getElementById("otherVideoTitle1").innerHTML = bladeRunnerVideoTitle[1];
	document.getElementById("title").innerHTML = movieTitle[index];
	document.getElementById("currMovie").style.backgroundImage = "url(" + movieImage[index] + ")";
	document.getElementById("trailer").src = "" + movieTrailer[index] + "";
	document.getElementById("image1").src = "" + cast[(21*index)] + "";
	document.getElementById("actor1").innerHTML = cast[(21*index)+1];
	document.getElementById("character1").innerHTML = cast[(21*index)+2];
	document.getElementById("image2").src = "" + cast[(21*index)+3] + "";
	document.getElementById("actor2").innerHTML = cast[(21*index)+4];
	document.getElementById("character2").innerHTML = cast[(21*index)+5];
	document.getElementById("image3").src = "" + cast[(21*index)+6] + "";
	document.getElementById("actor3").innerHTML = cast[(21*index)+7];
	document.getElementById("character3").innerHTML = cast[(21*index)+8];
	document.getElementById("image4").src = "" + cast[(21*index)+9] + "";
	document.getElementById("actor4").innerHTML = cast[(21*index)+10];
	document.getElementById("character4").innerHTML = cast[(21*index)+11];
	document.getElementById("image5").src = "" + cast[(21*index)+12] + "";
	document.getElementById("actor5").innerHTML = cast[(21*index)+13];
	document.getElementById("character5").innerHTML = cast[(21*index)+14];
	document.getElementById("image6").src = "" + cast[(21*index)+15] + "";
	document.getElementById("actor6").innerHTML = cast[(21*index)+16];
	document.getElementById("character6").innerHTML = cast[(21*index)+17];
	document.getElementById("image7").src = "" + cast[(21*index)+18] + "";
	document.getElementById("actor7").innerHTML = cast[(21*index)+19];
	document.getElementById("character7").innerHTML = cast[(21*index)+20];
}
function selectOtherVideo1() {
	if(index == 0){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo1Index;
		otherVideo1Index = tmp;
		document.getElementById("trailer").src = "" + starWarsVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage1").src = "" + starWarsThumbnail[otherVideo1Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = starWarsVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle1").innerHTML = starWarsVideoTitle[otherVideo1Index];
	}
	else if(index == 1){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo1Index;
		otherVideo1Index = tmp;
		document.getElementById("trailer").src = "" + dunkirkVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage1").src = "" + dunkirkThumbnail[otherVideo1Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = dunkirkVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle1").innerHTML = dunkirkVideoTitle[otherVideo1Index];
	}
	else if(index == 2){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo1Index;
		otherVideo1Index = tmp;
		document.getElementById("trailer").src = "" + valerianVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage1").src = "" + valerianThumbnail[otherVideo1Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = valerianVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle1").innerHTML = valerianVideoTitle[otherVideo1Index];
	}
	else if(index == 3){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo1Index;
		otherVideo1Index = tmp;
		document.getElementById("trailer").src = "" + thorVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage1").src = "" + thorThumbnail[otherVideo1Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = thorVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle1").innerHTML = thorVideoTitle[otherVideo1Index];
	}
	
	else if(index == 4){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo1Index;
		otherVideo1Index = tmp;
		document.getElementById("trailer").src = "" + bladeRunnerVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage1").src = "" + bladeRunnerThumbnail[otherVideo1Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = bladeRunnerVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle1").innerHTML = bladeRunnerVideoTitle[otherVideo1Index];
	}
}
function selectOtherVideo2() {
	if(index == 0){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo2Index;
		otherVideo2Index = tmp;
		document.getElementById("trailer").src = "" + starWarsVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage2").src = "" + starWarsThumbnail[otherVideo2Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = starWarsVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle2").innerHTML = starWarsVideoTitle[otherVideo2Index];
	}
	else if(index == 1){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo2Index;
		otherVideo2Index = tmp;
		document.getElementById("trailer").src = "" + dunkirkVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage2").src = "" + dunkirkThumbnail[otherVideo2Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = dunkirkVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle2").innerHTML = dunkirkVideoTitle[otherVideo2Index];
	}
	else if(index == 2){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo2Index;
		otherVideo2Index = tmp;
		document.getElementById("trailer").src = "" + valerianVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage2").src = "" + valerianThumbnail[otherVideo2Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = valerianVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle2").innerHTML = valerianVideoTitle[otherVideo2Index];
	}
	else if(index == 3){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo2Index;
		otherVideo2Index = tmp;
		document.getElementById("trailer").src = "" + thorVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage2").src = "" + thorThumbnail[otherVideo2Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = thorVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle2").innerHTML = thorVideoTitle[otherVideo2Index];
	}
	else if(index == 4){
		tmp = currentTrailerIndex;
		currentTrailerIndex = otherVideo2Index;
		otherVideo2Index = tmp;
		document.getElementById("trailer").src = "" + bladeRunnerVideo[currentTrailerIndex] + "";
		document.getElementById("otherVideoImage2").src = "" + bladeRunnerThumbnail[otherVideo2Index] + "";
		document.getElementById("currentVideoTitle").innerHTML = bladeRunnerVideoTitle[currentTrailerIndex];
		document.getElementById("otherVideoTitle2").innerHTML = bladeRunnerVideoTitle[otherVideo2Index];
	}
}
var scrolldelayRight;
var scrolldelayLeft;
function scrollNavBarRight() {
	var navbar = document.getElementById("navbar");
	navbar.scrollLeft +=3;
	scrolldelayRight = setTimeout('scrollNavBarRight()',25);
}
function stopScrollNavBarRight() {
	clearTimeout(scrolldelayRight);
}
function scrollNavBarLeft() {
	var navbar = document.getElementById("navbar");
	navbar.scrollLeft -=3;
	scrolldelayLeft = setTimeout('scrollNavBarLeft()',25);
}
function stopScrollNavBarLeft() {
	clearTimeout(scrolldelayLeft);
}
