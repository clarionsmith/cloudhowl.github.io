(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/atabag.png", id:"atabag"},
		{src:"images/bag.png", id:"bag"},
		{src:"images/bag2.png", id:"bag2"},
		{src:"images/belni1.png", id:"belni1"},
		{src:"images/belni2.png", id:"belni2"},
		{src:"images/chakki.png", id:"chakki"},
		{src:"images/chalni.png", id:"chalni"},
		{src:"images/chalni_mask.png", id:"chalni_mask"},
		{src:"images/COIN_00000.png", id:"COIN_00000"},
		{src:"images/COIN_00001.png", id:"COIN_00001"},
		{src:"images/COIN_00002.png", id:"COIN_00002"},
		{src:"images/COIN_00003.png", id:"COIN_00003"},
		{src:"images/COIN_00004.png", id:"COIN_00004"},
		{src:"images/COIN_00005.png", id:"COIN_00005"},
		{src:"images/COIN_00006.png", id:"COIN_00006"},
		{src:"images/COIN_00007.png", id:"COIN_00007"},
		{src:"images/COIN_00008.png", id:"COIN_00008"},
		{src:"images/COIN_00009.png", id:"COIN_00009"},
		{src:"images/COIN_00010.png", id:"COIN_00010"},
		{src:"images/COIN_00011.png", id:"COIN_00011"},
		{src:"images/COIN_00012.png", id:"COIN_00012"},
		{src:"images/COIN_00013.png", id:"COIN_00013"},
		{src:"images/COIN_00014.png", id:"COIN_00014"},
		{src:"images/COIN_00015.png", id:"COIN_00015"},
		{src:"images/COIN_00016.png", id:"COIN_00016"},
		{src:"images/COIN_00017.png", id:"COIN_00017"},
		{src:"images/COIN_00018.png", id:"COIN_00018"},
		{src:"images/COIN_00019.png", id:"COIN_00019"},
		{src:"images/COIN_00020.png", id:"COIN_00020"},
		{src:"images/COIN_00021.png", id:"COIN_00021"},
		{src:"images/COIN_00022.png", id:"COIN_00022"},
		{src:"images/COIN_00023.png", id:"COIN_00023"},
		{src:"images/COIN_00024.png", id:"COIN_00024"},
		{src:"images/COIN_00025.png", id:"COIN_00025"},
		{src:"images/COIN_00026.png", id:"COIN_00026"},
		{src:"images/COIN_00027.png", id:"COIN_00027"},
		{src:"images/COIN_00028.png", id:"COIN_00028"},
		{src:"images/COIN_00029.png", id:"COIN_00029"},
		{src:"images/COIN_00030.png", id:"COIN_00030"},
		{src:"images/COIN_00031.png", id:"COIN_00031"},
		{src:"images/COIN_00032.png", id:"COIN_00032"},
		{src:"images/COIN_00033.png", id:"COIN_00033"},
		{src:"images/COIN_00034.png", id:"COIN_00034"},
		{src:"images/COIN_00035.png", id:"COIN_00035"},
		{src:"images/COIN_00036.png", id:"COIN_00036"},
		{src:"images/COIN_00037.png", id:"COIN_00037"},
		{src:"images/COIN_00038.png", id:"COIN_00038"},
		{src:"images/COIN_00039.png", id:"COIN_00039"},
		{src:"images/COIN_00040.png", id:"COIN_00040"},
		{src:"images/COIN_00041.png", id:"COIN_00041"},
		{src:"images/COIN_00042.png", id:"COIN_00042"},
		{src:"images/COIN_00043.png", id:"COIN_00043"},
		{src:"images/COIN_00044.png", id:"COIN_00044"},
		{src:"images/COIN_00045.png", id:"COIN_00045"},
		{src:"images/COIN_00046.png", id:"COIN_00046"},
		{src:"images/COIN_00047.png", id:"COIN_00047"},
		{src:"images/COIN_00048.png", id:"COIN_00048"},
		{src:"images/COIN_00049.png", id:"COIN_00049"},
		{src:"images/COIN_00050.png", id:"COIN_00050"},
		{src:"images/COIN_00051.png", id:"COIN_00051"},
		{src:"images/COIN_00052.png", id:"COIN_00052"},
		{src:"images/COIN_00053.png", id:"COIN_00053"},
		{src:"images/COIN_00054.png", id:"COIN_00054"},
		{src:"images/COIN_00055.png", id:"COIN_00055"},
		{src:"images/COIN_00056.png", id:"COIN_00056"},
		{src:"images/COIN_00057.png", id:"COIN_00057"},
		{src:"images/COIN_00058.png", id:"COIN_00058"},
		{src:"images/COIN_00059.png", id:"COIN_00059"},
		{src:"images/COIN_00060.png", id:"COIN_00060"},
		{src:"images/COIN_00061.png", id:"COIN_00061"},
		{src:"images/COIN_00062.png", id:"COIN_00062"},
		{src:"images/COIN_00063.png", id:"COIN_00063"},
		{src:"images/COIN_00064.png", id:"COIN_00064"},
		{src:"images/COIN_00065.png", id:"COIN_00065"},
		{src:"images/COIN_00066.png", id:"COIN_00066"},
		{src:"images/COIN_00067.png", id:"COIN_00067"},
		{src:"images/COIN_00068.png", id:"COIN_00068"},
		{src:"images/COIN_00069.png", id:"COIN_00069"},
		{src:"images/COIN_00070.png", id:"COIN_00070"},
		{src:"images/COIN_00071.png", id:"COIN_00071"},
		{src:"images/COIN_00072.png", id:"COIN_00072"},
		{src:"images/COIN_00073.png", id:"COIN_00073"},
		{src:"images/COIN_00074.png", id:"COIN_00074"},
		{src:"images/COIN_00075.png", id:"COIN_00075"},
		{src:"images/COIN_00076.png", id:"COIN_00076"},
		{src:"images/COIN_00077.png", id:"COIN_00077"},
		{src:"images/COIN_00078.png", id:"COIN_00078"},
		{src:"images/COIN_00079.png", id:"COIN_00079"},
		{src:"images/COIN_00080.png", id:"COIN_00080"},
		{src:"images/COIN_00081.png", id:"COIN_00081"},
		{src:"images/COIN_00082.png", id:"COIN_00082"},
		{src:"images/COIN_00083.png", id:"COIN_00083"},
		{src:"images/COIN_00084.png", id:"COIN_00084"},
		{src:"images/COIN_00085.png", id:"COIN_00085"},
		{src:"images/COIN_00086.png", id:"COIN_00086"},
		{src:"images/COIN_00087.png", id:"COIN_00087"},
		{src:"images/COIN_00088.png", id:"COIN_00088"},
		{src:"images/COIN_00089.png", id:"COIN_00089"},
		{src:"images/COIN_00090.png", id:"COIN_00090"},
		{src:"images/COIN_00091.png", id:"COIN_00091"},
		{src:"images/COIN_00092.png", id:"COIN_00092"},
		{src:"images/COIN_00093.png", id:"COIN_00093"},
		{src:"images/COIN_00094.png", id:"COIN_00094"},
		{src:"images/COIN_00095.png", id:"COIN_00095"},
		{src:"images/COIN_00096.png", id:"COIN_00096"},
		{src:"images/COIN_00097.png", id:"COIN_00097"},
		{src:"images/COIN_00098.png", id:"COIN_00098"},
		{src:"images/COIN_00099.png", id:"COIN_00099"},
		{src:"images/COIN_00100.png", id:"COIN_00100"},
		{src:"images/coin_back.png", id:"coin_back"},
		{src:"images/confetti_00061.png", id:"confetti_00061"},
		{src:"images/confetti_00062.png", id:"confetti_00062"},
		{src:"images/confetti_00063.png", id:"confetti_00063"},
		{src:"images/confetti_00064.png", id:"confetti_00064"},
		{src:"images/confetti_00065.png", id:"confetti_00065"},
		{src:"images/confetti_00066.png", id:"confetti_00066"},
		{src:"images/confetti_00067.png", id:"confetti_00067"},
		{src:"images/confetti_00068.png", id:"confetti_00068"},
		{src:"images/confetti_00069.png", id:"confetti_00069"},
		{src:"images/confetti_00070.png", id:"confetti_00070"},
		{src:"images/confetti_00071.png", id:"confetti_00071"},
		{src:"images/confetti_00072.png", id:"confetti_00072"},
		{src:"images/confetti_00073.png", id:"confetti_00073"},
		{src:"images/confetti_00074.png", id:"confetti_00074"},
		{src:"images/confetti_00075.png", id:"confetti_00075"},
		{src:"images/confetti_00076.png", id:"confetti_00076"},
		{src:"images/confetti_00077.png", id:"confetti_00077"},
		{src:"images/confetti_00078.png", id:"confetti_00078"},
		{src:"images/confetti_00079.png", id:"confetti_00079"},
		{src:"images/confetti_00080.png", id:"confetti_00080"},
		{src:"images/confetti_00081.png", id:"confetti_00081"},
		{src:"images/confetti_00082.png", id:"confetti_00082"},
		{src:"images/confetti_00083.png", id:"confetti_00083"},
		{src:"images/confetti_00084.png", id:"confetti_00084"},
		{src:"images/confetti_00085.png", id:"confetti_00085"},
		{src:"images/confetti_00086.png", id:"confetti_00086"},
		{src:"images/confetti_00087.png", id:"confetti_00087"},
		{src:"images/confetti_00088.png", id:"confetti_00088"},
		{src:"images/confetti_00089.png", id:"confetti_00089"},
		{src:"images/confetti_00090.png", id:"confetti_00090"},
		{src:"images/confetti_00091.png", id:"confetti_00091"},
		{src:"images/confetti_00092.png", id:"confetti_00092"},
		{src:"images/confetti_00093.png", id:"confetti_00093"},
		{src:"images/confetti_00094.png", id:"confetti_00094"},
		{src:"images/confetti_00095.png", id:"confetti_00095"},
		{src:"images/confetti_00096.png", id:"confetti_00096"},
		{src:"images/confetti_00097.png", id:"confetti_00097"},
		{src:"images/confetti_00098.png", id:"confetti_00098"},
		{src:"images/confetti_00099.png", id:"confetti_00099"},
		{src:"images/confetti_00100.png", id:"confetti_00100"},
		{src:"images/confetti_00101.png", id:"confetti_00101"},
		{src:"images/confetti_00102.png", id:"confetti_00102"},
		{src:"images/confetti_00103.png", id:"confetti_00103"},
		{src:"images/confetti_00104.png", id:"confetti_00104"},
		{src:"images/confetti_00105.png", id:"confetti_00105"},
		{src:"images/confetti_00106.png", id:"confetti_00106"},
		{src:"images/confetti_00107.png", id:"confetti_00107"},
		{src:"images/confetti_00108.png", id:"confetti_00108"},
		{src:"images/confetti_00109.png", id:"confetti_00109"},
		{src:"images/FINALGRAINS2_00100.png", id:"FINALGRAINS2_00100"},
		{src:"images/FINALGRAINS2_00101.png", id:"FINALGRAINS2_00101"},
		{src:"images/FINALGRAINS2_00102.png", id:"FINALGRAINS2_00102"},
		{src:"images/FINALGRAINS2_00103.png", id:"FINALGRAINS2_00103"},
		{src:"images/FINALGRAINS2_00104.png", id:"FINALGRAINS2_00104"},
		{src:"images/FINALGRAINS2_00105.png", id:"FINALGRAINS2_00105"},
		{src:"images/FINALGRAINS2_00106.png", id:"FINALGRAINS2_00106"},
		{src:"images/FINALGRAINS2_00107.png", id:"FINALGRAINS2_00107"},
		{src:"images/FINALGRAINS2_00108.png", id:"FINALGRAINS2_00108"},
		{src:"images/FINALGRAINS2_00109.png", id:"FINALGRAINS2_00109"},
		{src:"images/FINALGRAINS2_00110.png", id:"FINALGRAINS2_00110"},
		{src:"images/FINALGRAINS2_00111.png", id:"FINALGRAINS2_00111"},
		{src:"images/FINALGRAINS2_00112.png", id:"FINALGRAINS2_00112"},
		{src:"images/FINALGRAINS2_00113.png", id:"FINALGRAINS2_00113"},
		{src:"images/FINALGRAINS2_00114.png", id:"FINALGRAINS2_00114"},
		{src:"images/FINALGRAINS2_00115.png", id:"FINALGRAINS2_00115"},
		{src:"images/FINALGRAINS2_00116.png", id:"FINALGRAINS2_00116"},
		{src:"images/FINALGRAINS2_00117.png", id:"FINALGRAINS2_00117"},
		{src:"images/FINALGRAINS2_00118.png", id:"FINALGRAINS2_00118"},
		{src:"images/FINALGRAINS2_00119.png", id:"FINALGRAINS2_00119"},
		{src:"images/FINALGRAINS2_00120.png", id:"FINALGRAINS2_00120"},
		{src:"images/FINALGRAINS2_00121.png", id:"FINALGRAINS2_00121"},
		{src:"images/FINALGRAINS2_00122.png", id:"FINALGRAINS2_00122"},
		{src:"images/FINALGRAINS2_00123.png", id:"FINALGRAINS2_00123"},
		{src:"images/FINALGRAINS2_00124.png", id:"FINALGRAINS2_00124"},
		{src:"images/FINALGRAINS2_00125.png", id:"FINALGRAINS2_00125"},
		{src:"images/FINALGRAINS2_00126.png", id:"FINALGRAINS2_00126"},
		{src:"images/FINALGRAINS2_00127.png", id:"FINALGRAINS2_00127"},
		{src:"images/FINALGRAINS2_00128.png", id:"FINALGRAINS2_00128"},
		{src:"images/FINALGRAINS2_00129.png", id:"FINALGRAINS2_00129"},
		{src:"images/FINALGRAINS2_00130.png", id:"FINALGRAINS2_00130"},
		{src:"images/FINALGRAINS2_00131.png", id:"FINALGRAINS2_00131"},
		{src:"images/FINALGRAINS2_00132.png", id:"FINALGRAINS2_00132"},
		{src:"images/FINALGRAINS2_00133.png", id:"FINALGRAINS2_00133"},
		{src:"images/FINALGRAINS2_00134.png", id:"FINALGRAINS2_00134"},
		{src:"images/FINALGRAINS2_00135.png", id:"FINALGRAINS2_00135"},
		{src:"images/FINALGRAINS2_00136.png", id:"FINALGRAINS2_00136"},
		{src:"images/FINALGRAINS2_00137.png", id:"FINALGRAINS2_00137"},
		{src:"images/FINALGRAINS2_00138.png", id:"FINALGRAINS2_00138"},
		{src:"images/FINALGRAINS2_00139.png", id:"FINALGRAINS2_00139"},
		{src:"images/FINALGRAINS2_00140.png", id:"FINALGRAINS2_00140"},
		{src:"images/FINALGRAINS2_00141.png", id:"FINALGRAINS2_00141"},
		{src:"images/FINALGRAINS2_00142.png", id:"FINALGRAINS2_00142"},
		{src:"images/FINALGRAINS2_00143.png", id:"FINALGRAINS2_00143"},
		{src:"images/FINALGRAINS2_00144.png", id:"FINALGRAINS2_00144"},
		{src:"images/FINALGRAINS2_00145.png", id:"FINALGRAINS2_00145"},
		{src:"images/FINALGRAINS2_00146.png", id:"FINALGRAINS2_00146"},
		{src:"images/FINALGRAINS2_00147.png", id:"FINALGRAINS2_00147"},
		{src:"images/FINALGRAINS2_00148.png", id:"FINALGRAINS2_00148"},
		{src:"images/FINALGRAINS2_00149.png", id:"FINALGRAINS2_00149"},
		{src:"images/FINALGRAINS2_00150.png", id:"FINALGRAINS2_00150"},
		{src:"images/FINALGRAINS_00000.png", id:"FINALGRAINS_00000"},
		{src:"images/FINALGRAINS_00001.png", id:"FINALGRAINS_00001"},
		{src:"images/FINALGRAINS_00002.png", id:"FINALGRAINS_00002"},
		{src:"images/FINALGRAINS_00003.png", id:"FINALGRAINS_00003"},
		{src:"images/FINALGRAINS_00004.png", id:"FINALGRAINS_00004"},
		{src:"images/FINALGRAINS_00005.png", id:"FINALGRAINS_00005"},
		{src:"images/FINALGRAINS_00006.png", id:"FINALGRAINS_00006"},
		{src:"images/FINALGRAINS_00007.png", id:"FINALGRAINS_00007"},
		{src:"images/FINALGRAINS_00008.png", id:"FINALGRAINS_00008"},
		{src:"images/FINALGRAINS_00009.png", id:"FINALGRAINS_00009"},
		{src:"images/FINALGRAINS_00010.png", id:"FINALGRAINS_00010"},
		{src:"images/FINALGRAINS_00011.png", id:"FINALGRAINS_00011"},
		{src:"images/FINALGRAINS_00012.png", id:"FINALGRAINS_00012"},
		{src:"images/FINALGRAINS_00013.png", id:"FINALGRAINS_00013"},
		{src:"images/FINALGRAINS_00014.png", id:"FINALGRAINS_00014"},
		{src:"images/FINALGRAINS_00015.png", id:"FINALGRAINS_00015"},
		{src:"images/FINALGRAINS_00016.png", id:"FINALGRAINS_00016"},
		{src:"images/FINALGRAINS_00017.png", id:"FINALGRAINS_00017"},
		{src:"images/FINALGRAINS_00018.png", id:"FINALGRAINS_00018"},
		{src:"images/FINALGRAINS_00019.png", id:"FINALGRAINS_00019"},
		{src:"images/FINALGRAINS_00020.png", id:"FINALGRAINS_00020"},
		{src:"images/FINALGRAINS_00021.png", id:"FINALGRAINS_00021"},
		{src:"images/FINALGRAINS_00022.png", id:"FINALGRAINS_00022"},
		{src:"images/FINALGRAINS_00023.png", id:"FINALGRAINS_00023"},
		{src:"images/FINALGRAINS_00024.png", id:"FINALGRAINS_00024"},
		{src:"images/FINALGRAINS_00025.png", id:"FINALGRAINS_00025"},
		{src:"images/FINALGRAINS_00026.png", id:"FINALGRAINS_00026"},
		{src:"images/FINALGRAINS_00027.png", id:"FINALGRAINS_00027"},
		{src:"images/FINALGRAINS_00028.png", id:"FINALGRAINS_00028"},
		{src:"images/FINALGRAINS_00029.png", id:"FINALGRAINS_00029"},
		{src:"images/FINALGRAINS_00030.png", id:"FINALGRAINS_00030"},
		{src:"images/FINALGRAINS_00031.png", id:"FINALGRAINS_00031"},
		{src:"images/FINALGRAINS_00032.png", id:"FINALGRAINS_00032"},
		{src:"images/FINALGRAINS_00033.png", id:"FINALGRAINS_00033"},
		{src:"images/FINALGRAINS_00034.png", id:"FINALGRAINS_00034"},
		{src:"images/FINALGRAINS_00035.png", id:"FINALGRAINS_00035"},
		{src:"images/FINALGRAINS_00036.png", id:"FINALGRAINS_00036"},
		{src:"images/FINALGRAINS_00037.png", id:"FINALGRAINS_00037"},
		{src:"images/FINALGRAINS_00038.png", id:"FINALGRAINS_00038"},
		{src:"images/FINALGRAINS_00039.png", id:"FINALGRAINS_00039"},
		{src:"images/FINALGRAINS_00040.png", id:"FINALGRAINS_00040"},
		{src:"images/FINALGRAINS_00041.png", id:"FINALGRAINS_00041"},
		{src:"images/FINALGRAINS_00042.png", id:"FINALGRAINS_00042"},
		{src:"images/FINALGRAINS_00043.png", id:"FINALGRAINS_00043"},
		{src:"images/FINALGRAINS_00044.png", id:"FINALGRAINS_00044"},
		{src:"images/FINALGRAINS_00045.png", id:"FINALGRAINS_00045"},
		{src:"images/FINALGRAINS_00046.png", id:"FINALGRAINS_00046"},
		{src:"images/FINALGRAINS_00047.png", id:"FINALGRAINS_00047"},
		{src:"images/FINALGRAINS_00048.png", id:"FINALGRAINS_00048"},
		{src:"images/FINALGRAINS_00049.png", id:"FINALGRAINS_00049"},
		{src:"images/fullbag.png", id:"fullbag"},
		{src:"images/grain2.png", id:"grain2"},
		{src:"images/graindust.png", id:"graindust"},
		{src:"images/graindust2.png", id:"graindust2"},
		{src:"images/indiamap.png", id:"indiamap"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/loose_ata1.png", id:"loose_ata1"},
		{src:"images/loose_ata2.png", id:"loose_ata2"},
		{src:"images/loose_ata3.png", id:"loose_ata3"},
		{src:"images/loose_ata4.png", id:"loose_ata4"},
		{src:"images/modak.png", id:"modak"},
		{src:"images/modakplate.png", id:"modakplate"},
		{src:"images/MUTTHIBHAR_UNIT.png", id:"MUTTHIBHAR_UNIT"},
		{src:"images/roti_plate.png", id:"roti_plate"},
		{src:"images/rotikachha.png", id:"rotikachha"},
		{src:"images/rotisingle.png", id:"rotisingle"},
		{src:"images/stove.png", id:"stove"}
	]
};



// symbols:



(lib.atabag = function() {
	this.initialize(img.atabag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,763);


(lib.bag = function() {
	this.initialize(img.bag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.bag2 = function() {
	this.initialize(img.bag2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.belni1 = function() {
	this.initialize(img.belni1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3585,485);


(lib.belni2 = function() {
	this.initialize(img.belni2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1410,957);


(lib.chakki = function() {
	this.initialize(img.chakki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,840,839);


(lib.chalni = function() {
	this.initialize(img.chalni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2141,1166);


(lib.chalni_mask = function() {
	this.initialize(img.chalni_mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2130,802);


(lib.COIN_00000 = function() {
	this.initialize(img.COIN_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00001 = function() {
	this.initialize(img.COIN_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00002 = function() {
	this.initialize(img.COIN_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00003 = function() {
	this.initialize(img.COIN_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00004 = function() {
	this.initialize(img.COIN_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00005 = function() {
	this.initialize(img.COIN_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00006 = function() {
	this.initialize(img.COIN_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00007 = function() {
	this.initialize(img.COIN_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00008 = function() {
	this.initialize(img.COIN_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00009 = function() {
	this.initialize(img.COIN_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00010 = function() {
	this.initialize(img.COIN_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00011 = function() {
	this.initialize(img.COIN_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00012 = function() {
	this.initialize(img.COIN_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00013 = function() {
	this.initialize(img.COIN_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00014 = function() {
	this.initialize(img.COIN_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00015 = function() {
	this.initialize(img.COIN_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00016 = function() {
	this.initialize(img.COIN_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00017 = function() {
	this.initialize(img.COIN_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00018 = function() {
	this.initialize(img.COIN_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00019 = function() {
	this.initialize(img.COIN_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00020 = function() {
	this.initialize(img.COIN_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00021 = function() {
	this.initialize(img.COIN_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00022 = function() {
	this.initialize(img.COIN_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00023 = function() {
	this.initialize(img.COIN_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00024 = function() {
	this.initialize(img.COIN_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00025 = function() {
	this.initialize(img.COIN_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00026 = function() {
	this.initialize(img.COIN_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00027 = function() {
	this.initialize(img.COIN_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00028 = function() {
	this.initialize(img.COIN_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00029 = function() {
	this.initialize(img.COIN_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00030 = function() {
	this.initialize(img.COIN_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00031 = function() {
	this.initialize(img.COIN_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00032 = function() {
	this.initialize(img.COIN_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00033 = function() {
	this.initialize(img.COIN_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00034 = function() {
	this.initialize(img.COIN_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00035 = function() {
	this.initialize(img.COIN_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00036 = function() {
	this.initialize(img.COIN_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00037 = function() {
	this.initialize(img.COIN_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00038 = function() {
	this.initialize(img.COIN_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00039 = function() {
	this.initialize(img.COIN_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00040 = function() {
	this.initialize(img.COIN_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00041 = function() {
	this.initialize(img.COIN_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00042 = function() {
	this.initialize(img.COIN_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00043 = function() {
	this.initialize(img.COIN_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00044 = function() {
	this.initialize(img.COIN_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00045 = function() {
	this.initialize(img.COIN_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00046 = function() {
	this.initialize(img.COIN_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00047 = function() {
	this.initialize(img.COIN_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00048 = function() {
	this.initialize(img.COIN_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00049 = function() {
	this.initialize(img.COIN_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00050 = function() {
	this.initialize(img.COIN_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00051 = function() {
	this.initialize(img.COIN_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00052 = function() {
	this.initialize(img.COIN_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00053 = function() {
	this.initialize(img.COIN_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00054 = function() {
	this.initialize(img.COIN_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00055 = function() {
	this.initialize(img.COIN_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00056 = function() {
	this.initialize(img.COIN_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00057 = function() {
	this.initialize(img.COIN_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00058 = function() {
	this.initialize(img.COIN_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00059 = function() {
	this.initialize(img.COIN_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00060 = function() {
	this.initialize(img.COIN_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00061 = function() {
	this.initialize(img.COIN_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00062 = function() {
	this.initialize(img.COIN_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00063 = function() {
	this.initialize(img.COIN_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00064 = function() {
	this.initialize(img.COIN_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00065 = function() {
	this.initialize(img.COIN_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00066 = function() {
	this.initialize(img.COIN_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00067 = function() {
	this.initialize(img.COIN_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00068 = function() {
	this.initialize(img.COIN_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00069 = function() {
	this.initialize(img.COIN_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00070 = function() {
	this.initialize(img.COIN_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00071 = function() {
	this.initialize(img.COIN_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00072 = function() {
	this.initialize(img.COIN_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00073 = function() {
	this.initialize(img.COIN_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00074 = function() {
	this.initialize(img.COIN_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00075 = function() {
	this.initialize(img.COIN_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00076 = function() {
	this.initialize(img.COIN_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00077 = function() {
	this.initialize(img.COIN_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00078 = function() {
	this.initialize(img.COIN_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00079 = function() {
	this.initialize(img.COIN_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00080 = function() {
	this.initialize(img.COIN_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00081 = function() {
	this.initialize(img.COIN_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00082 = function() {
	this.initialize(img.COIN_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00083 = function() {
	this.initialize(img.COIN_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00084 = function() {
	this.initialize(img.COIN_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00085 = function() {
	this.initialize(img.COIN_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00086 = function() {
	this.initialize(img.COIN_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00087 = function() {
	this.initialize(img.COIN_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00088 = function() {
	this.initialize(img.COIN_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00089 = function() {
	this.initialize(img.COIN_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00090 = function() {
	this.initialize(img.COIN_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00091 = function() {
	this.initialize(img.COIN_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00092 = function() {
	this.initialize(img.COIN_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00093 = function() {
	this.initialize(img.COIN_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00094 = function() {
	this.initialize(img.COIN_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00095 = function() {
	this.initialize(img.COIN_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00096 = function() {
	this.initialize(img.COIN_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00097 = function() {
	this.initialize(img.COIN_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00098 = function() {
	this.initialize(img.COIN_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00099 = function() {
	this.initialize(img.COIN_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.COIN_00100 = function() {
	this.initialize(img.COIN_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.coin_back = function() {
	this.initialize(img.coin_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1080);


(lib.confetti_00061 = function() {
	this.initialize(img.confetti_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00062 = function() {
	this.initialize(img.confetti_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00063 = function() {
	this.initialize(img.confetti_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00064 = function() {
	this.initialize(img.confetti_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00065 = function() {
	this.initialize(img.confetti_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00066 = function() {
	this.initialize(img.confetti_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00067 = function() {
	this.initialize(img.confetti_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00068 = function() {
	this.initialize(img.confetti_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00069 = function() {
	this.initialize(img.confetti_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00070 = function() {
	this.initialize(img.confetti_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00071 = function() {
	this.initialize(img.confetti_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00072 = function() {
	this.initialize(img.confetti_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00073 = function() {
	this.initialize(img.confetti_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00074 = function() {
	this.initialize(img.confetti_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00075 = function() {
	this.initialize(img.confetti_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00076 = function() {
	this.initialize(img.confetti_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00077 = function() {
	this.initialize(img.confetti_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00078 = function() {
	this.initialize(img.confetti_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00079 = function() {
	this.initialize(img.confetti_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00080 = function() {
	this.initialize(img.confetti_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00081 = function() {
	this.initialize(img.confetti_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00082 = function() {
	this.initialize(img.confetti_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00083 = function() {
	this.initialize(img.confetti_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00084 = function() {
	this.initialize(img.confetti_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00085 = function() {
	this.initialize(img.confetti_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00086 = function() {
	this.initialize(img.confetti_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00087 = function() {
	this.initialize(img.confetti_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00088 = function() {
	this.initialize(img.confetti_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00089 = function() {
	this.initialize(img.confetti_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00090 = function() {
	this.initialize(img.confetti_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00091 = function() {
	this.initialize(img.confetti_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00092 = function() {
	this.initialize(img.confetti_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00093 = function() {
	this.initialize(img.confetti_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00094 = function() {
	this.initialize(img.confetti_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00095 = function() {
	this.initialize(img.confetti_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00096 = function() {
	this.initialize(img.confetti_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00097 = function() {
	this.initialize(img.confetti_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00098 = function() {
	this.initialize(img.confetti_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00099 = function() {
	this.initialize(img.confetti_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00100 = function() {
	this.initialize(img.confetti_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00101 = function() {
	this.initialize(img.confetti_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00102 = function() {
	this.initialize(img.confetti_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00103 = function() {
	this.initialize(img.confetti_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00104 = function() {
	this.initialize(img.confetti_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00105 = function() {
	this.initialize(img.confetti_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00106 = function() {
	this.initialize(img.confetti_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00107 = function() {
	this.initialize(img.confetti_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00108 = function() {
	this.initialize(img.confetti_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.confetti_00109 = function() {
	this.initialize(img.confetti_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.FINALGRAINS2_00100 = function() {
	this.initialize(img.FINALGRAINS2_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00101 = function() {
	this.initialize(img.FINALGRAINS2_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00102 = function() {
	this.initialize(img.FINALGRAINS2_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00103 = function() {
	this.initialize(img.FINALGRAINS2_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00104 = function() {
	this.initialize(img.FINALGRAINS2_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00105 = function() {
	this.initialize(img.FINALGRAINS2_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00106 = function() {
	this.initialize(img.FINALGRAINS2_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00107 = function() {
	this.initialize(img.FINALGRAINS2_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00108 = function() {
	this.initialize(img.FINALGRAINS2_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00109 = function() {
	this.initialize(img.FINALGRAINS2_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00110 = function() {
	this.initialize(img.FINALGRAINS2_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00111 = function() {
	this.initialize(img.FINALGRAINS2_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00112 = function() {
	this.initialize(img.FINALGRAINS2_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00113 = function() {
	this.initialize(img.FINALGRAINS2_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00114 = function() {
	this.initialize(img.FINALGRAINS2_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00115 = function() {
	this.initialize(img.FINALGRAINS2_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00116 = function() {
	this.initialize(img.FINALGRAINS2_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00117 = function() {
	this.initialize(img.FINALGRAINS2_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00118 = function() {
	this.initialize(img.FINALGRAINS2_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00119 = function() {
	this.initialize(img.FINALGRAINS2_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00120 = function() {
	this.initialize(img.FINALGRAINS2_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00121 = function() {
	this.initialize(img.FINALGRAINS2_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00122 = function() {
	this.initialize(img.FINALGRAINS2_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00123 = function() {
	this.initialize(img.FINALGRAINS2_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00124 = function() {
	this.initialize(img.FINALGRAINS2_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00125 = function() {
	this.initialize(img.FINALGRAINS2_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00126 = function() {
	this.initialize(img.FINALGRAINS2_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00127 = function() {
	this.initialize(img.FINALGRAINS2_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00128 = function() {
	this.initialize(img.FINALGRAINS2_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00129 = function() {
	this.initialize(img.FINALGRAINS2_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00130 = function() {
	this.initialize(img.FINALGRAINS2_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00131 = function() {
	this.initialize(img.FINALGRAINS2_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00132 = function() {
	this.initialize(img.FINALGRAINS2_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00133 = function() {
	this.initialize(img.FINALGRAINS2_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00134 = function() {
	this.initialize(img.FINALGRAINS2_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00135 = function() {
	this.initialize(img.FINALGRAINS2_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00136 = function() {
	this.initialize(img.FINALGRAINS2_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00137 = function() {
	this.initialize(img.FINALGRAINS2_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00138 = function() {
	this.initialize(img.FINALGRAINS2_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00139 = function() {
	this.initialize(img.FINALGRAINS2_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00140 = function() {
	this.initialize(img.FINALGRAINS2_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00141 = function() {
	this.initialize(img.FINALGRAINS2_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00142 = function() {
	this.initialize(img.FINALGRAINS2_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00143 = function() {
	this.initialize(img.FINALGRAINS2_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00144 = function() {
	this.initialize(img.FINALGRAINS2_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00145 = function() {
	this.initialize(img.FINALGRAINS2_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00146 = function() {
	this.initialize(img.FINALGRAINS2_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00147 = function() {
	this.initialize(img.FINALGRAINS2_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00148 = function() {
	this.initialize(img.FINALGRAINS2_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00149 = function() {
	this.initialize(img.FINALGRAINS2_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS2_00150 = function() {
	this.initialize(img.FINALGRAINS2_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00000 = function() {
	this.initialize(img.FINALGRAINS_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00001 = function() {
	this.initialize(img.FINALGRAINS_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00002 = function() {
	this.initialize(img.FINALGRAINS_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00003 = function() {
	this.initialize(img.FINALGRAINS_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00004 = function() {
	this.initialize(img.FINALGRAINS_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00005 = function() {
	this.initialize(img.FINALGRAINS_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00006 = function() {
	this.initialize(img.FINALGRAINS_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00007 = function() {
	this.initialize(img.FINALGRAINS_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00008 = function() {
	this.initialize(img.FINALGRAINS_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00009 = function() {
	this.initialize(img.FINALGRAINS_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00010 = function() {
	this.initialize(img.FINALGRAINS_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00011 = function() {
	this.initialize(img.FINALGRAINS_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00012 = function() {
	this.initialize(img.FINALGRAINS_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00013 = function() {
	this.initialize(img.FINALGRAINS_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00014 = function() {
	this.initialize(img.FINALGRAINS_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00015 = function() {
	this.initialize(img.FINALGRAINS_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00016 = function() {
	this.initialize(img.FINALGRAINS_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00017 = function() {
	this.initialize(img.FINALGRAINS_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00018 = function() {
	this.initialize(img.FINALGRAINS_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00019 = function() {
	this.initialize(img.FINALGRAINS_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00020 = function() {
	this.initialize(img.FINALGRAINS_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00021 = function() {
	this.initialize(img.FINALGRAINS_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00022 = function() {
	this.initialize(img.FINALGRAINS_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00023 = function() {
	this.initialize(img.FINALGRAINS_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00024 = function() {
	this.initialize(img.FINALGRAINS_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00025 = function() {
	this.initialize(img.FINALGRAINS_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00026 = function() {
	this.initialize(img.FINALGRAINS_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00027 = function() {
	this.initialize(img.FINALGRAINS_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00028 = function() {
	this.initialize(img.FINALGRAINS_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00029 = function() {
	this.initialize(img.FINALGRAINS_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00030 = function() {
	this.initialize(img.FINALGRAINS_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00031 = function() {
	this.initialize(img.FINALGRAINS_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00032 = function() {
	this.initialize(img.FINALGRAINS_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00033 = function() {
	this.initialize(img.FINALGRAINS_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00034 = function() {
	this.initialize(img.FINALGRAINS_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00035 = function() {
	this.initialize(img.FINALGRAINS_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00036 = function() {
	this.initialize(img.FINALGRAINS_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00037 = function() {
	this.initialize(img.FINALGRAINS_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00038 = function() {
	this.initialize(img.FINALGRAINS_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00039 = function() {
	this.initialize(img.FINALGRAINS_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00040 = function() {
	this.initialize(img.FINALGRAINS_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00041 = function() {
	this.initialize(img.FINALGRAINS_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00042 = function() {
	this.initialize(img.FINALGRAINS_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00043 = function() {
	this.initialize(img.FINALGRAINS_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00044 = function() {
	this.initialize(img.FINALGRAINS_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00045 = function() {
	this.initialize(img.FINALGRAINS_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00046 = function() {
	this.initialize(img.FINALGRAINS_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00047 = function() {
	this.initialize(img.FINALGRAINS_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00048 = function() {
	this.initialize(img.FINALGRAINS_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.FINALGRAINS_00049 = function() {
	this.initialize(img.FINALGRAINS_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.fullbag = function() {
	this.initialize(img.fullbag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1918,2140);


(lib.grain2 = function() {
	this.initialize(img.grain2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,832,458);


(lib.graindust = function() {
	this.initialize(img.graindust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1571,296);


(lib.graindust2 = function() {
	this.initialize(img.graindust2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1571,296);


(lib.indiamap = function() {
	this.initialize(img.indiamap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1476,1676);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,664);


(lib.loose_ata1 = function() {
	this.initialize(img.loose_ata1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2126,2126);


(lib.loose_ata2 = function() {
	this.initialize(img.loose_ata2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2126,2126);


(lib.loose_ata3 = function() {
	this.initialize(img.loose_ata3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2126,2126);


(lib.loose_ata4 = function() {
	this.initialize(img.loose_ata4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2126,2126);


(lib.modak = function() {
	this.initialize(img.modak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,373);


(lib.modakplate = function() {
	this.initialize(img.modakplate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,227);


(lib.MUTTHIBHAR_UNIT = function() {
	this.initialize(img.MUTTHIBHAR_UNIT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1024);


(lib.roti_plate = function() {
	this.initialize(img.roti_plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,270);


(lib.rotikachha = function() {
	this.initialize(img.rotikachha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2285,1698);


(lib.rotisingle = function() {
	this.initialize(img.rotisingle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1310,983);


(lib.stove = function() {
	this.initialize(img.stove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,3701);


(lib.YELLOWPATCH = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E21836").s().p("Ag/BAQgcgbAAglQAAglAcgaQAagcAlAAQAlAAAbAcQAbAaAAAlQAAAlgbAbQgbAbglAAQglAAgagbg");
	this.shape.setTransform(9.2,9.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,18.4);


(lib.Tween83 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Tween78 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("AQTFoMgglAAAAwSlnMAglAAA");
	this.shape.setTransform(33.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(137.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-104.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.9,-67.1,276.8,134.3);


(lib.Tween77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("AwSlnMAglAAAAQTFoMgglAAA");
	this.shape.setTransform(33.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(137.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-104.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.9,-67.1,276.8,134.3);


(lib.Tween76 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("AQTFoMgglAAAAwSlnMAglAAA");
	this.shape.setTransform(33.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(137.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-104.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.9,-67.1,276.8,134.3);


(lib.Tween69 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("WELL DONE!\n         ROTIS* WILL BE DONATED TO THE NGO AKSHAYA PATRA, THANE\nON YOUR BEHALF.", "bold 28px 'Arial'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 257;
	this.text.setTransform(85,-315.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-315.7,261.1,365.7);


(lib.Tween53 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.indiamap();
	this.instance.setTransform(-326.9,-367.4,0.437,0.437);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-326.9,-367.4,645.3,732.7);


(lib.Tween41 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bag();
	this.instance.setTransform(-338.5,-407.6,0.959,0.959);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338.5,-407.6,863,863);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("FOR THE CITY OF MUMBAI,\nAASHIRVAAD ATTA COMES FROM THE\nSTATE OF\nMADHYA PRADESH (M.P.)", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 201;
	this.text.setTransform(-29.1,-489.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.4,-489.3,204.8,288.8);


(lib.Tween32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiHE4QgIgJAAgMQAAgMAIgKQAJgIAMgBQANABAIAIQAJAKAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAAQDqQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgNAAgIgJgADKDWQgIgIAAgNQAAgMAIgJQAJgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAKgMgBQgNABgJgKgAm0CuQgIgJAAgNQAAgMAIgJQAJgJANABQAMgBAJAJQAJAJAAAMQAAANgJAJQgJAJgMAAQgNAAgJgJgAnLBGQgIgIAAgNQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAKgNgBQgMABgJgKgAGhAvQgJgJAAgNQAAgLAJgJQAJgIANABQAMgBAJAIQAJAJgBALQABANgJAJQgJAJgMAAQgNAAgJgJgABni2QgIgKAAgMQAAgMAIgJQAJgJANAAQAMAAAJAJQAJAJAAAMQAAAMgJAKQgJAJgMAAQgNAAgJgJgAAlkNQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(-21.2,-12.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF5000").s().p("Al/JDIgOgCIgFAAQgGACgFgFQgFgFgCgGIAIgEIAAgGQAAgDgDgCIgBgEQABgFgEgDIgBgCQgCgEgEgDIgIgEIgDgBIgFAAIgFgCIgFgCIgIAAIgHgBIgJAAQgGAAgDABIgFAAQgIAAgHACQgFACgEgCQgFgDgDADQgEACgFgCIgJgCIgKAAIgBABIgCAAIgFABIgCgEIgDAAIgHACIgBgBIgDgDIgEAAQgFABgEgBIgIgEIgIgFIgFgHIgBgCIgBgCIgDgGQgDgDgDgCIgMgFIgKgEQgHgDgHACIgKABIgCAAIgDAAIgIgCIgFgCQgHgGgLgDQgGgBgCgEIgCgCQgDgCgBgEIgCgGQAAgEABgCQACgDAAgEIAAgOIgEgCIgGgDQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgDgIAAgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgGADgEAEQgEAFgFgBIgDABIgCADQgBADgDABIgHABIgFAAIgFgBIgCgCIgCgEIgBgDIgFgDQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAFgFQADgEABgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgEgBQgBgEABgDQACgEgCgCQgCgCAAgEQAAgDgDgCIgEgCIAAgCQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgDgEACgFIABgGQABgEADgCQADAAAEADQAFAEACABIADgCIAGgFIAEgEIADgCIADgCIgFgHQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgJABQgFABgFgBQgBgDgGgGQgFgFgCgEIABgBIACgBQACgBADABIAJAFIACgBIACgBIAEgFIAGgEIADgCQgBgEADgDIAGgEIANADQAFABACgGIACgKQAAgFADgDIAEgIIAEgHIAEgIQgDgFAAgEQAAgDgDgCIgDACIgFACIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgFgLIAAgDIABgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgBgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAIgGQACgBAEABIADACIAGACIAGAAQAEgBACgDQAFgGAHgCQAEgCAFgEQADgDAEAAIAFgCIADgBIABgBIABgBIABgDIgDgBIgCABIgBgBIABgDIgBgDQgDgDgDAAIgFAAQgDAAgDgCQgEgCgDgBIgHABIgCgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgFQADgDAAgEQABgDACgCIAFgHQAFgBAIgFIAIgEIAIgFIACgBQAEACADgDIAFgEIAEgGQABgCADgBIAEgCIADgDIgBgEIgCgIIACgGQAEgFgCgHIgEgGIgCgDIABgEIgBgFIABgEIADgKIABgCIAFgGIADgFQACgDgBgEIgEgIIgDgGIgEgHIgCgDIgEgDIAAgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgDIgCgEIgDgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEABIgMgCIgBgBQAAgDADgBQADgBAAgDQAAgGACgFIAGgIIADgEIgBgDQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBIgBgEIgDgCIgBAAIgHAAIgGgCIAFgHQABgCgBgGIADgDQAEgCgCgEIAHgGIgCgDIgEgCIAAgJQABgEACgEIACACIAAACQAAAHAGAGIAFAFIAEADIAEACIAEgDIADgEIACgCIADgDIADgCIgBgFIAFgFIgBgEQgBgDgCgBIgHACQgGABgEgDQgEgDgFACIgBAAIgBAAIACgEIgBgDIAAgBQAAgHgFgFIgBgDIABgEIAAgCIABgBIADgBQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAHAHACIARAEQAAABABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQADAAAEgDQACgEAAgGQAAgFAEgCIAFgDIAAgIIACAAIACgBIAGAAIAHgBIAFAAIAFAAIADACIgFADIAEAIQgBAFgDAEIgBgGIgFgCIgBABIAAABIABAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgCADADADIAEAFIAFgBIAFAAIAFgBQADgBACABIgCACQgEAEgGACIgFAAIgDgCIgEgCIgFgDIgDgFIgDAAIgCABQAAAEACACIAGAEIgEAEIgFACIgBADIgBAEQAAAEADABIAEACQAKAEAOADIAIACIAIABQAFAAADgBIAHgBIAHAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAIAEABIAFgCIASgJIAEgCIAHACIAHACIAAANIADACIgBAEIgBAEIAAACIAAACIAFAAIAJAHIAAAAIAAACIAAABIgBAJIgBAJQgBAEgFADIgEABIgDgDIgBgDIgGgCQgDAAgDACIAAACIAAADIgBACIgCACIAAAMQAAAGAFACIAGACIACAFIAAAFIgCACIgDACIgEADIgDAFIgCAEIACAEIAGAFQADADAEABIABABIABABIgBAEIgEABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgBAFgDAEIgHAEQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgCIgCgDIgBgCIgDgCIgEAFQgEACgEgCIgPgDIgFADIgEAGIgBAFIgCAFIAGAFIAFADIAFADQAEACABACIgDAEQAAABABABQAAAAAAABQAAAAABABQAAAAABAAIAEABIAFAAQAGAAADAFQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIABgFIADgCQACgDABgCQAAgCgBgEIgCgEIADAAQACAHAFACIAFgDQAFgEAFAAQAGAAAGgDIAIgDQADgCACgDQABgDgBgFIgCgFIgBgCIAGgDIAGgDIAGgDIAGgCIAEgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgFIgBgGQgCgGAEgEIACgHQAAgGAEgJIABgBIACAAIAAADIAAACQgCAJAIAHIADACIADAAIACAAIACgBIAFgEQAFgDAFADIACABQAEADADgBIAEAAQAGAAAEACIACAFQADAGAHgBQAEgBABgDIgBgFIABgBIABgBIAEgFIAFgDIAFgCIAEgBIABAGIgDAIIADAEQABADADABIAFgBQAEABABACIACADQADAEAFgCQAEgBAFABQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIADgEIABgBQAAgFAFgDIABgCQAAgCgDgDIgEgEIgGgFQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgDIgCgCIgDgGIABgCQABAAAAgBQAAAAAAAAQABgBAAgBQgBAAAAgBQgCgFACgHQACgFgDgEIgDgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIADAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABACIADAAIACgBIABABIABAIIACAFQAFABAFgCIAIgFIABgBQAAgEAEgBIADgCIABgDQADgHgDgKIgDgLQgCgFgFgBQgEgBgCgDIgCgDIgCgCIgEABQgIADgGgGIgEgFIgDgFIADgCIADAAIACAAIAHgBIAGgEQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgCIABgEIgFgFQgIgHAFgJIAEgGIABAAIACAAQAGAAAEgDQAEgDAEACIAIABIAIgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIADgCIAEgBIADgEIABAAIACAAQADABADgBIADAAIAEAAQADAAACACIADADIACgBIAGgDIAGgDQAEgBgBgFIgBgDIADgEIACgFQgBgDgDgEIgGgGIABgDQACgEgBgCIgDgGIAAgHIACgGQgGgGgGgBQgHADgFAGQgEADABAEIAAAFIgEACQgFADgDgBQgDAAgDgDQgDgCgDAAQgEAAgDACIgJAFIgIAFQgFACgFgCIgEgFQgEgFgCAAIgHABQgEABgFAAIgBgBQgCgHgHABIgEAAIgDAAIgDgDIgDgCQgFgCgCgGQgBgDgDgBQgEgDAAgEIgBgDIgDgFIgCgFIgCgMIAAgBQABgDgBgEIgCgGIgCgDQgCgCABgDIAFgDQAEgDgBgEQgCgKAHgHIACgDIACgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABABIAAAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgCQABgEADgBQACgBADAAIABABQAGACAHgEQAHgDACgFIAEgJQACgEAEgBIADgCIACgDIADgGQACgCAFgCIAHgEIAGgEIACgDIADgEIADAAIADgBIADgBIACgCIAAgBIABAAQADgEADgCQAEgCAEABQADABADgCQAIgDAGgGIAEgFIADgEIABgBQAEgFACgBQADgCAGABIAEABIADgBIAAgDIgBgEIAEgBIAEAAQAEABAEgCQAEgBABgCQABgDAEgBQAGgBAEgGQAEgGAHABQAGAAACgEIAEgFIAHAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgCQAAgEAFgBQAIgEAMgJIAHgEIAFACQAEACADAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQABgCAAgDIgBgEIADgDIABgCIgBgFQgBgEAEAAIADABQADABAEgBIAAgHIACgBIADAAIAFACQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQABgDAEgBIAFgCIAGAAIABACIAAACQAAAAABABQAAABAAAAQAAABABAAQAAAAABABIADABIADABIAEADQADAEAHABQAHABADADIADABQADACADgCIABgBIACgBIACgCIACABQADABADgDQACgDAEgBIADAEIADgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQADAEAFAAQADAAABADQACAFAFAEQACABAFgBQAEgBADABIAAAFIACACIACAAIADgBIACAAIABAHQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgCAEIACADIABABIAAABQABADACACIAEAFQADADAAAEIAAAFIAEADIAEgBIAAAEQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIAAAEIAAAFIACAEIADACIACACIgGAMIgDgEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABIgBACQgBACABADQACADgEACIgCACIgBADIgGAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAABABIACADIgCACIgDABIgDACIgBADIAKALQgBADgEACIgFAEQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAAGgDAGQgDAGgEACIgBACQgBACgDADIgEAEIAAABIACAEIAAAFIgDgCIgDgCQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIACADIgGAHIgGAIIACACIACABQAHAGAAAJIAAADQgCACgEABIgFADQgFgDgFAEIgDADIgEAEIgEgBIgDgDIgCABIgCABQgDADgEgCIgOgGQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIgCADQgFAGAAAJQAAAEgEACIgFADIgDAEIgEAGIgFAGIAFAGIAAAFIAEAGQABAIAFAFIABACIABAEQABAFAFACIAAABIAAAGIgEAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgBACIgCABIgFAEIgBADIgBAKQAAAGgGAFIgHAFIgGAGIgDACQgFADgCAEIAFAKQAHAHAAAJIABAHIACAHIACALQABAGgBAFIgEADIgDAFIADAFQABADADABIABADIAAACIAPALQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIgBAEIgDADQgCACACADIAEAFQACACADABQABAAAAABQABAAAAAAQABAAAAgBQABAAAAAAIADgGIALgPIACgBQAKADAEAGIAEAGIAEAGIAAABIABAAIAEACIADAEIACACIAEAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAGgBIADAIQACAEACACQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBQABgDAFgBIAEgCIACgDIACgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIABgDQADgHAEgDQAEgEABgFIACgFIABgFIAAgCIgBgCIgCAAQgDABgEgDIgEgCIgCgDIAAgCIABgBIABAAIAGABIABgDIgBgCIAAgBIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgEgFIgCgCIgCgEIgBgCIgCgCQgEgCgFADIgEACQgDACgEgBQgDgCgCgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIADgCIABgEQADgEgCgFQgCgEADgEQABgDgBgFIgBgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgCgDgCIgJgEIAAgBIgEgCIgEgGIgFgGIAAgFQAAgDACgCQADgCAAgCQAAgCgBgEQgCgDgDgCQgEgBAAgFIgBgLIgBgCIgBgCQgCgCAAgFIgCgGQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAIgFgCIgEgCIgDAAIgCgBIACgDIABAAIAEADIAEgDIACgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgBgCIAAgCIACABIAEABIADgEIgBgDIAAgBQAEAAABgEIAEAAIACgCIADgFIAAADQgBAIAHACQADABACACIACACQADADADgCQADgCgBgDIAAgEIgBgEIAFAAQADgBACgDIgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEACIgEgDIgEgCIACgFIADACQABAAAAAAQABABAAAAQABAAAAAAQABgBAAAAIAGAAIAFADIgCABQAAAEADACIACgCIADgHIgBgEIgCgCQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIALgHIAEAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADIgDACIgCABIADAFQADAEgEADIgDADQACADADAAIAFAAIADAKIgHAFQgDAAgCgCIAFgCQADgBABgCIgDgDQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABIgEABQgIACgCAIQAAADgDABIgDABIgCABQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIgBACIAEACQAAAEACAEIAGAFIAFgJQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgEQABgEAEAAIAHAAIADAHIAAAEIgDABIgCAAIgCAAIgDABQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgCABIgEACIACAGIgDAFIACADQACADADgDIAEgEIAEgDIADgBIADACQABACAEABQABgDgBgEIgBgDIgCgDQABgDADgBIACAFIADADIACADIgCAEQgDAEABAGIABACIACABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIADgDQABgDADgBQADABABADIABAIIACACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIACgBIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgBIAAgCIAEAEQABABAFAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgCgDQACgCAEABIgBAFIABACIACAAIADgBQAFgCABgDQABgCgEgFQgDgDABgDIABgBIAAgBIAEACIADACIACAAIAAgHIgCgHIgBAAIgCAAQgDgDgFACIAAAAIgBgBIABgEIACgFQADgCAEABIABACIAAACIACAFIADAEIACgBIACgCIABAAQAEACABABIACACIACACIAAAIIgDAAIgDABQgFAHACAHIABAEQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAEgDIADADIAEgBIABADIACACQABAAAAABQAAAAAAAAQABAAAAAAQAAgBABAAIAEAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIACgGIADgHIADADIAEACIACABIADACIAJgBQAEgBAFABIAIABIAHAEIABABIACAAIABgBIABgBIAAgFIACgEIABgDIgBgCIAAgCIABgLQAGABAEgBQAIgBAEgGIADgFIADgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIADgBIAEgBIADAAQAGAAAHgEIAFgDQACgCABgDIAFABIAEgDQADgCADADQAEADAAAEIABAOQAAADADACIAFAFQACAEADAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIABADIABAEIAAAEIgDADIgCABQgHACgEAIIgCAEIgEAFIgEAGIAEADIAFABIAGAAIAEgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABgDACgCQACgCADgCIAHAEIAEABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgBgCIgBgBIABgCIAHAIIAGgDIAFACIACgDIgCgFQgBgEACgCIADABIAAACQgBABAAABQgBAAAAABQAAABABAAQAAAAABABIADABIABADQABACADABIAFABIABAAIACAAIAFgBIAGAAIABgBIACgBIgDgEIgFgBIAAgDIgBgCIgBgCIgCgCIACAAIABABQADABADgBQAFgCADAFIACACQAEgBAAgDIAAgIIABgDIAEgBIAEAAIAAADIgBADQgCABgBAEIgBAFIAAABIAAAFIgBAEIgCACIgDAEIACAGIAAADIgEACIgBAAIgCACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAIAGAAIAGgBIAGgCIADgBIACAEIAFABIAFgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAHgCAFAGIAFAFQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIABgFIACgCIAEAFIAFgCIAAgEIAAgEQgBgEAEgDQAFgFgBgHIAAgHQAAgFAEgFIADAEQABAEADAAIABgCIAAgDIABgGIACACIABABQACADADABIAFACIACAAIABADIACACIAEABIADADQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgCIACgBIgEgHIAGgEIAAgCIAAgDIACgCQAEgCADACIAGAEIgBADQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAAAIACAEIABAAIAAACIgBADIABACQAAAAABABQAAAAABAAQAAABABAAQABgBAAAAIAGAAIAEAFIAFACIAFACIADAAIACABQAHADAGgBIADABQAFACADgDIACAGQAAACgDAEIgCACIABACIACAFQAEAHAFACIABAEQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAFgBQAEgDAFADIAIACIAFABIAFADIACABIACgBIAEgCIABAAIABABIAAACQABAEgBADIAAACIABACQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgCIACgCIACAAQABAHgBAFIgBADQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAgBAAAAIABAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAEACADQAGAAADADQABACAEAAIADABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIgBgGIAAgGIAAgDIABgBIABAAIADADQABADAEAAIADAAQAGgBACAFIADABIAEgBIAPgGQADgBACABIABAGQACACADAAIAGAAIADAFQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIACAIQgCACgEgBIgEgBQgEgBgCAEIACAEIABAEIAAAJIgDAMQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAHAAIgBAGQgBAEACADIgBAGIgCAGIgBACIgDACIAAAQIgIAGQAAAEAEAAIADABIADACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgCAGIAKADIAAAEIACAEQgCADgEABIgHACIgJACQgCAAgCACQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAFIgKAEIgFADQgCABgDgBIgBAFIgBABQgGABgEgCQgEgDgFABIgOAAIgEAAQgFACgFgDQgDgCgDABIgCgBIgCgBIgDgDIgEACQgFAEgHAAIgDAAQgIAAgGgGIgDgDQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFAAQgEgBgDADIgCADQgDACgDAAQgDAAgEAEQgCACgDgCIgGgDIgGgEIgDgCIgCgDIgEgJQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgDAAIgGACIgDACIAAAEIgBADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIADAEIADABIABAIIACAEIACABIABACIACAEQABADgBACIgDACIgCACIgBACIgCABIgEACIgCACIgBAHQgBADgEABIAAAGIAFAFIACAFQABACACACQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIACgEIADABQADABADgDIAHgGIACACIADABIADAAIADABQACAGAGABQADAAADgCIAEgEIABABIABABIAEAFIACAEIADAFIACAFQACADADAAIAEAAIAAAEQAAABABABQAAAAABABQAAAAABAAQAAAAABAAIAFgBIADgBIABABIABABIACAFIAEABIADAAIAFAGIAAAIIgHAHIAAAJQgBAFADAEIgGAHIgGAAQgEAAgCADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgGAAQgDgBgEACQgEABgCADQgCADABADIACAEIABABIAAAHQgGAGgEADIgEACQgEAFgGACIgFACIgCACQgBAFABAEIACADQACAEgDAFIgEAEIACAFQABAEgBAEIgBACIgBABIgDgDQgEAEgDABIgEACIgDADQgBAAAAABQAAAAgBAAQAAABAAABQAAAAABABIABADIgKAHIgFgCIgDACIgCADIgDABIgDABIgGADIgGADIgEADQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABIgBAAIgBABIgCgBIgBgEQAAgFgFgCIgEgCQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgBAEQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgBACQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgEABgDgCIgFgDIgDACIgEACIgCACQgFADgBAEQgBADABAGQADALgEALQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAIgGABQgFACgBAFIAAAEIABAFIAAADIAAACIgEABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAIACAFIADAEIgEAFIgDgGIgDgGIgDAAQgEgBgCAFIgCAEQAAAEgDADQgFAFACAGQACAEgEAFQgCADAAAFIABAHQABAGgCAFIgCAFQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABIgFABIgCAAIgFgCIgBABQgEADACAEQABADgCADQgCAFACAFIABACIgCAEIAAAEIABAEIgBAEQgBAGACAFIAAAEIAAAEIAAACIgDAGIgCAFIgDAGIgDAFIgKAAIgDgBIgBgCIgHgHIgEgDQgDgCgDABIgCAAQgFgBgCAEIgCABIgBABIgCgBIgCgEIADgEQACgEgCgDIgCgBIgEgGIgBgGIgEgCQgDgCgBgEIAAgCIgCgCIgCAAIgFgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgFgEIgIgDIgEACQgEAEgEAAIgDABIgKAJQgGgBgGAEQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIgDgDQgDAAgCACIgCAFQgKACgHgHIgIgHQgDgDgFABQgIABgFAEQgEADgDAAQgDgBgDACIgHABIgBAAIgBgBIgCgDIgCgCIgDgDIABgEIABgDIgEgIIgCgDIgHgCIgHAAIgIACIgBAAIgHgBIgGAAIgCgDIgCgDQgDgCgDAEIgDAEQgBADACADIgCAAIgCABQgEgBgEACQgDACgCAAQgFAAgCAEQgCAFgHgCIgEgBIgFgBQgEgBgEADIgIAEIgDADIgCAGIAFAEIAFAEIgCABIgCgBQgGgDgGACIgGABIgGACIgBABIgFAAIgEgBIgEABIgEgBQgFgBgDABIgCAAIgDAAQgFAAgDgFQgDgGgGACIgIAEQgDACgEgCIgCgFIAAgEIAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgDgBgDACQgCABgBAEIgMAAIgFABIgFACIgLAAIgBADIAAACIAAACIgBAEIgDAEQgNAIgJACIgHADQgHAEgIAAIgHAAIgHgBIgEAAIgDABQgDADgFABIgJACIgFAAIgFgCIgGgBQgEAAgDABIgPABQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgEIgBgDIgBgDIgCgDQgFgDABgGIAAgEQADgCAEAAIAIABIAGACIADAAIAFAAIAAgCIgEgKIgBgEIADgEIgCgEIgGgIIgLgOQgDgCgDABIgGABIgEAAIgFAAQgJgCgGAIQgDADgEAAIgIABIgDgDQgFADgEgCIgCAAIgMABIgDACIgKAIIgGAFIgHAFIgGACIgGgCIgDACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCACQgDAEAAACIAAAEIgBADIABACQACAGgBACIgFAGQgDACgBADQgBAEgEACIgHAEIgFACIgCABIgBADIACACIABACQAEAEgBAGIgBADIgBACIgCADIgCADIgDABIgCgBQgFgCgHADQgCABgDgBQgGAGgBAGQgBACgDACIgIAFQgEACgFAAIgDAAg");
	this.shape_1.setTransform(-5.1,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.3,-57.9,160.5,115.9);


(lib.Tween30 = function() {
	this.initialize();

	// Layer 1
	this.t = new cjs.Text("AASHIRVAAD COLLECTS BEST QUALITY  WHEAT GRAINS FROM ITS\n6500 COLLECTION\nCENTRES\nACROSS INDIA.", "24px 'Arial'", "#333333");
	this.t.name = "t";
	this.t.textAlign = "center";
	this.t.lineHeight = 34;
	this.t.lineWidth = 201;
	this.t.setTransform(3.4,-239.2);

	this.addChild(this.t);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.1,-239.2,205.1,421);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgQzAqNQitgugDirMAAAhRAMAnHAAAMAAABQ6QgKC/ikAgg");
	this.shape.setTransform(32.2,-381.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93,-651.9,250.5,540.4);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgnAAQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQg");
	this.shape.setTransform(-79.1,-27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_1.setTransform(-79.1,-27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgnAAQAAgPAMgMQAMgMAPAAQARAAAKAMQANAMAAAPQAAAQgNAMQgKAMgRAAQgPAAgMgMQgMgMAAgQg");
	this.shape_2.setTransform(-102.5,-8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_3.setTransform(-102.5,-8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAbAcQgKAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAAKAMQANAMAAAPQAAAQgNAMg");
	this.shape_4.setTransform(-120.4,-62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_5.setTransform(-120.4,-62.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_6.setTransform(-113.6,-52.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_7.setTransform(-113.6,-52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAAKAMQANAMAAAPQAAAQgNAMQgKAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_8.setTransform(-123,-7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_9.setTransform(-123,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_10.setTransform(-140,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_11.setTransform(-140,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_12.setTransform(44.5,52.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_13.setTransform(44.5,52.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_14.setTransform(-189.2,106.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_15.setTransform(-189.2,106.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAAKAMQANAMAAAPQAAAQgNAMQgKAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_16.setTransform(-102.5,101.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_17.setTransform(-102.5,101.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAnAAQAAAQgMAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMQAMAMAAAPg");
	this.shape_18.setTransform(-35.5,98.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_19.setTransform(-35.5,98.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLALgRAAQgPAAgMgLQgMgMAAgQQAAgPAMgMg");
	this.shape_20.setTransform(183.2,-5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_21.setTransform(183.2,-5.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAbgbQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMg");
	this.shape_22.setTransform(196.9,-37.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_23.setTransform(196.9,-37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_24.setTransform(212.1,-71.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_25.setTransform(212.1,-71.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_26.setTransform(187.6,-68.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_27.setTransform(187.6,-68.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_28.setTransform(165.1,-54.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_29.setTransform(165.1,-54.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgLgMAAgQQAAgPALgMg");
	this.shape_30.setTransform(61.9,-21.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_31.setTransform(61.9,-21.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgmQARAAAKALQANAMAAAPQAAAQgNAMQgKAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgLAPAAg");
	this.shape_32.setTransform(67.7,12.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_33.setTransform(67.7,12.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");
	this.shape_34.setTransform(20.3,13.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_35.setTransform(20.3,13.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMg");
	this.shape_36.setTransform(-22.5,52.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_37.setTransform(-22.5,52.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAbAcQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMQANAMAAAPQAAAQgNAMg");
	this.shape_38.setTransform(-38,20.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_39.setTransform(-38,20.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_40.setTransform(-127.8,58.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_41.setTransform(-127.8,58.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_42.setTransform(-151.1,87.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_43.setTransform(-151.1,87.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_44.setTransform(-203.5,70);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_45.setTransform(-203.5,70);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMg");
	this.shape_46.setTransform(-257.5,31.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_47.setTransform(-257.5,31.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_48.setTransform(-253.1,13.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_49.setTransform(-253.1,13.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_50.setTransform(-253.1,-13.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_51.setTransform(-253.1,-13.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_52.setTransform(-222.5,2.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_53.setTransform(-222.5,2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_54.setTransform(-219,23.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_55.setTransform(-219,23.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgLAPAAQARAAALALg");
	this.shape_56.setTransform(-199.8,12.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_57.setTransform(-199.8,12.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_58.setTransform(-182.2,33.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_59.setTransform(-182.2,33.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");
	this.shape_60.setTransform(-173.2,-13.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_61.setTransform(-173.2,-13.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_62.setTransform(-159.1,48.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_63.setTransform(-159.1,48.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMQANAMAAAPg");
	this.shape_64.setTransform(-115.8,17.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_65.setTransform(-115.8,17.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgLAPAAQAQAAALALQANAMAAAPg");
	this.shape_66.setTransform(-161.8,12.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_67.setTransform(-161.8,12.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcAcQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMg");
	this.shape_68.setTransform(-153,-42.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_69.setTransform(-153,-42.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMQANAMAAAPg");
	this.shape_70.setTransform(-126.3,-33.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_71.setTransform(-126.3,-33.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_72.setTransform(-87.9,10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_73.setTransform(-87.9,10.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_74.setTransform(-65.7,-8.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_75.setTransform(-65.7,-8.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_76.setTransform(-48.4,-47.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_77.setTransform(-48.4,-48);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_78.setTransform(-41.7,-21.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_79.setTransform(-41.7,-21.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAAnQgPAAgMgLQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMALgQAAg");
	this.shape_80.setTransform(-18,-34.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_81.setTransform(-18,-34.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_82.setTransform(10.1,-13.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_83.setTransform(10.1,-13.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAAoQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAg");
	this.shape_84.setTransform(42.7,-60.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_85.setTransform(42.7,-60.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_86.setTransform(-14.5,-60.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_87.setTransform(-14.5,-60.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgnAAQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQg");
	this.shape_88.setTransform(-27.8,-82.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_89.setTransform(-27.8,-82.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_90.setTransform(-56.4,-68.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_91.setTransform(-56.4,-68.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQAMAMAAAPQAAAQgMAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_92.setTransform(-63.3,-96.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_93.setTransform(-63.3,-96.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMg");
	this.shape_94.setTransform(-181.2,-235.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_95.setTransform(-181.2,-235.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_96.setTransform(-159.1,-232.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_97.setTransform(-159.1,-232.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");
	this.shape_98.setTransform(-133.2,-215.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_99.setTransform(-133.2,-215.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_100.setTransform(-154.9,-186.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_101.setTransform(-154.9,-186.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_102.setTransform(-127.8,-191);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_103.setTransform(-127.8,-191);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_104.setTransform(-95.9,-161.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_105.setTransform(-95.9,-161.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_106.setTransform(-156.5,-137.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_107.setTransform(-156.5,-137.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_108.setTransform(-138.8,-161.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_109.setTransform(-138.8,-161.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");
	this.shape_110.setTransform(-197,-137.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_111.setTransform(-197,-137.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgnAAQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQg");
	this.shape_112.setTransform(-181.2,-164.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_113.setTransform(-181.2,-164.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcAcQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMg");
	this.shape_114.setTransform(-261.1,-85.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_115.setTransform(-261.1,-86);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_116.setTransform(-225.1,-99.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_117.setTransform(-225.1,-99.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_118.setTransform(-185.1,-116);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_119.setTransform(-185.1,-116.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAbgbQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAALAMg");
	this.shape_120.setTransform(-135.8,-128.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_121.setTransform(-135.8,-128.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQAQAAALAMQANAMAAAPQAAAQgNAMQgLAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_122.setTransform(-98.8,-114);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_123.setTransform(-98.8,-114.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_124.setTransform(-94.4,-84);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_125.setTransform(-94.4,-84);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMg");
	this.shape_126.setTransform(-151.1,-84);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_127.setTransform(-151.1,-84);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_128.setTransform(-167.9,-64.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgNAAgKgKg");
	this.shape_129.setTransform(-167.9,-64.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAcgbQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMg");
	this.shape_130.setTransform(-195.5,-82.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_131.setTransform(-195.5,-82.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_132.setTransform(-227,-56.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_133.setTransform(-227,-56.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAoAAQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPg");
	this.shape_134.setTransform(-175.9,-25.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAAKAKQALAKAAANQAAAOgLAKQgKAKgNAAQgMAAgLgKg");
	this.shape_135.setTransform(-175.9,-25.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AgbgbQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMg");
	this.shape_136.setTransform(-207.8,-39.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CC0000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQANAAALAKQAKAKAAANQAAAOgKAKQgLAKgNAAQgMAAgLgKg");
	this.shape_137.setTransform(-207.8,-40);

	this.addChild(this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266.1,-240.4,483.2,352.3);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MUTTHIBHAR_UNIT();
	this.instance.setTransform(-161.8,-161.8,0.316,0.316);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.8,-161.8,323.6,323.6);


(lib.textbg_yellow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("EggSgFnMBAlAAAEAgTAFoMhAlAAA");
	this.shape.setTransform(-99.5,105.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlmIAALO");
	this.shape_1.setTransform(107.7,105.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-339.8,105.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-373.4,38.3,482.1,134.3);


(lib.textbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgScAu+Qi+gugCisMAAAhahMAq5AAAMAAABacQgKC+i1Ahg");
	this.shape.setTransform(0,30.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-269.9,274.8,601.3);


(lib.Symbol114 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol112 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol111 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol109 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol108 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-29.2,-27.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-27.3,58.6,54.8);


(lib.Symbol107 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.roti_plate();
	this.instance.setTransform(-59.6,-47.5,0.352,0.352);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.6,-47.5,119.3,95);


(lib.Symbol106 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.roti_plate();
	this.instance.setTransform(-79.9,-63.6,0.471,0.471);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.9,-63.6,159.8,127.3);


(lib.Symbol105 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("\nYOUR DAANE DAANE MEIN AASHIRVAAD CERTIFICATE WILL BE EMAILED TO YOU SHORTLY IF YOU HAVE PROVIDED YOUR EMAIL ID.", "bold 24px 'Myriad Pro'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 307;
	this.text.setTransform(-2,-95.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.3,-95.5,310.7,272.3);


(lib.Symbol104 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("THANK YOU\nFOR YOUR PARTICIPATION.", "bold 32px 'Myriad Pro'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-2,-41.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-195.9,-41.6,391.9,83.3);


(lib.Symbol103 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CONGRATULATIONS!!", "bold 32px 'Myriad Pro'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 326;
	this.text.setTransform(-2.1,-21.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.1,-21.8,330.3,43.7);


(lib.Symbol102 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE WON AN AASHIRVAAD MICRO GANESHA. \nYOUR DAANE DAANE MEIN AASHIRVAAD CERTIFICATE  WILL BE EMAILED TO YOU SHORTLY IF YOU HAVE PROVIDED YOUR EMAIL ID.", "24px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 321;
	this.text.setTransform(-2.1,-113.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.5,-113.5,325,304.8);


(lib.Symbol100 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.coin_back();
	this.instance.setTransform(-334,-281.8,0.522,0.522);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-334,-281.8,668.2,563.8);


(lib.Symbol97 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("SUBMIT", "bold 22px 'Myriad Pro'");
	this.text.lineHeight = 22;
	this.text.setTransform(-40,-15.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,207,207,0)").ss(1,1,1).p("AsLkXIYXAAIAAIvI4XAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE216").s().p("AsLEYIAAovIYXAAIAAIvg");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-29,158.1,58.1);


(lib.Symbol96 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AphDNIqUj5IAAiqMAnXgAdIAUB3Ij6CfInWC+IpWATg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127,-24.5,254.1,49);


(lib.Symbol85 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CLICK HERE TO KNOW\nWHAT HAVE YOU WON.", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 18;
	this.text.lineWidth = 325;
	this.text.setTransform(-148.4,-27.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("A2+mkMAt9AAAAW/GlMgt9AAA");
	this.shape.setTransform(-0.9,8,1,1,0,0,0,16.7,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAmiIAANF");
	this.shape_1.setTransform(130,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AmQAAIMhsiIAAZFg");
	this.shape_2.setTransform(-205.5,0);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.7,-80.3,426.6,160.8);


(lib.Symbol83 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU NOW HAVE\n30 SECONDS.", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 233;
	this.text.setTransform(-2,-43);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.3,-43,236.7,104.6);


(lib.Symbol79 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TAP ON THE MODAK AND THEN ROLL THE ROLLING PIN ON THE BASE TO MAKE ROTIS.", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 27;
	this.text.lineWidth = 490;
	this.text.setTransform(-191.7,-25.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("A8ymGIAAByMBEWAAAIAAKbMhPHAAAIAAsN");
	this.shape.setTransform(51.7,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE216").s().p("AFIFMIqvAAIkxAAIKYqXIKZKXg");
	this.shape_1.setTransform(-165.5,-76.3);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-232.1,-109.5,538,183.6);


(lib.Symbol78 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AASHIRVAAD ATTA PACKAGING ENSURES THAT THE NUTRITION OF THE ATTA REMAINS LOCKED TILL THE END\nFOR YOU TO MAKE HEALTHY ROTIS. ", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 245;
	this.text.setTransform(-2,-136.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-136.8,249.1,362.5);


(lib.Symbol76 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.atabag();
	this.instance.setTransform(-157.4,-211.8,0.555,0.555);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-211.8,314.8,423.6);


(lib.Symbol74 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grain2();
	this.instance.setTransform(474.8,-9.6,1,1,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-474.7,-406.3,949.6,812.7);


(lib.Symbol73 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bag();
	this.instance.setTransform(265.5,0,0.417,0.417,135);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-265.4,-265.4,530.9,530.9);


(lib.Symbol70 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU NOW HAVE\n30 SECONDS\nTO GRIND THE\nGRAINS INTO ATTA.", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 246;
	this.text.setTransform(-2,-65.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.8,-65.1,249.6,141.4);


(lib.Symbol69 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CHURN THE CHAKKI BY MOVING\nIT IN A CIRCULAR MOTION.", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 22;
	this.text.lineWidth = 368;
	this.text.setTransform(-78.3,-34.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("A+ElnMA8JAAAAeFFoMg8JAAA");
	this.shape.setTransform(100.4,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(293,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-125.7,-3.9);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.2,-71,453.4,134.3);


(lib.Symbol68 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("GRIND THE GRAINS TO MAKE ROTIS & GET A CHANCE TO WIN EXCITING PRIZES!", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 28;
	this.text.lineWidth = 458;
	this.text.setTransform(-162,-12);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("EAleAFoMhK7AAAEgldgFnMBK7AAA");
	this.shape.setTransform(71.3,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(311.8,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-202.2,12.6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-235.8,-54.5,548.6,135.8);


(lib.Symbol67 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("MOVE THE SIEVE IN A LEFT-RIGHT MOTION TO CLEAN THE GRAINS", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 24;
	this.text.lineWidth = 379;
	this.text.setTransform(-154.8,-28.9);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE216").ss(1,1,1).p("AeFFoMg8JAAAA+ElnMA8JAAA");
	this.shape.setTransform(33.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE216").ss(1,1,1).p("AAAlnIAALP");
	this.shape_1.setTransform(226.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE216").s().p("AlOAAIKdqeIAAU9g");
	this.shape_2.setTransform(-192.5,0);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-226.1,-67.1,454.2,134.3);


(lib.Symbol66 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CHOOSE", "bold 22px 'Arial'", "#FFE216");
	this.text.lineHeight = 32;
	this.text.setTransform(-134.5,-19.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.5,-19.8,99.5,33.8);


(lib.Symbol63 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grain2();
	this.instance.setTransform(-163.3,-89.9,0.393,0.393);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.3,-89.9,326.7,179.9);


(lib.Symbol58 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Symbol52 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NAME:\nMOBILE:\nEMAIL:", "22px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 92;
	this.text.setTransform(-54.9,-113.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-113.4,93.4,223.4);


(lib.Symbol51 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("*Terms and conditions apply", "16px 'Arial'");
	this.text.lineHeight = 16;
	this.text.setTransform(-100.9,9.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,9.2,206.2,23.3);


(lib.Symbol50 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MUTTHIBHAR_UNIT();
	this.instance.setTransform(-288,-288,0.563,0.563);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-288,576,576);


(lib.Symbol46 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOUR\nTIME IS UP", "bold 42px 'Arial'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.setTransform(-2,-78.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.9,-78.3,225.8,110.1);


(lib.Symbol45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E21836").ss(1,1,1).p("A5H0BMAyPAAAA5HUCICoAAIBPAAMAqYAAAIEAAA");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2fUBIBPAAQgWACgTAAQgUAAgSgCgA1QUBIhPAAQh8gPgsh3MAAAgl9MAyPAAAMAAAAldQgxCcjQAKgA2fUBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.8,-129.3,323.7,258.5);


(lib.Symbol44 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Symbol42 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOUR\nTIME\nIS UP", "bold 32px 'Arial'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 144;
	this.text.setTransform(-6,-82);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-82,148.1,164.1);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.ground_text = new cjs.Text("30 GM\nOF ATTA", "bold 50px 'Arial'", "#E21836");
	this.ground_text.name = "ground_text";
	this.ground_text.textAlign = "center";
	this.ground_text.lineHeight = 52;
	this.ground_text.lineWidth = 227;
	this.ground_text.setTransform(-2,-24.3);

	this.addChild(this.ground_text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.3,-24.3,230.7,202.4);


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AASHIRVAAD CLEANS THE  GRAINS USING\nA 3-STEP CLEANING PROCESS.", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 170;
	this.text.setTransform(-2,-113.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.2,-113.5,174.5,252);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("GREAT !\nYOUR GRAINS\nARE NOW CLEAN\nAND READY!", "bold 30px 'Arial'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 243;
	this.text.setTransform(-2.3,-224.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.5,-224.9,246.5,222.8);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fullbag();
	this.instance.setTransform(-150,-191.3,0.144,0.144);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-191.3,275.7,307.6);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grain2();
	this.instance.setTransform(-79.9,-23.4,0.246,0.246);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.9,-23.4,204.6,112.7);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.graindust2();
	this.instance.setTransform(-115.7,-64.3,0.147,0.147);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.7,-64.3,231.4,43.6);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.graindust();
	this.instance.setTransform(-103,-55.3,0.138,0.138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103,-55.3,216.8,40.8);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CHOOSE ANY ONE COLLECTION\nCENTRE FROM MADHYA PRADESH.", "22px 'Arial'", "#FFE216");
	this.text.lineHeight = 24;
	this.text.lineWidth = 424;
	this.text.setTransform(-289.5,-69.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-289.5,-69.1,427.6,88.6);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACvAAQAABIg1AzQgzA0hHAAQhIAAg0g0QgygzAAhIQAAhHAyg0QA0gzBIAAQBHAAAzAzQA1A0AABHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhpBpQgrgsAAg9QAAg8ArgsQAtgsA8AAQA9AAArAsQAtAsAAA8QAAA9gtAsQgrAsg9AAQg8AAgtgsg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("ACJAAQAAA4gqAoQgnApg4AAQg4AAgpgpQgngoAAg4QAAg3AngpQApgoA4AAQA4AAAnAoQAqApAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AhSBSQgigiAAgwQAAgvAigiQAjgiAvAAQAwAAAiAiQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgjgjg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.4,29.4);


(lib.neemuch = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nNEEMUCH", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 205;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.5,-60.6,209.2,125.6);


(lib.MOV1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		/* stop();
		
		//MovieClip(root).top_grain.visible = false;
		//MovieClip(root).top_bag.visible = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgHFAhlMABThJSIE4gEIEdAEMADjBJxQhrFglBAOQlXgQiIl9g");
	mask.setTransform(-69.9,-146.1);

	// Layer 5
	this.instance = new lib.FINALGRAINS_00000();
	this.instance.setTransform(-730,-400);

	this.instance_1 = new lib.FINALGRAINS_00001();
	this.instance_1.setTransform(-730,-400);

	this.instance_2 = new lib.FINALGRAINS_00002();
	this.instance_2.setTransform(-730,-400);

	this.instance_3 = new lib.FINALGRAINS_00003();
	this.instance_3.setTransform(-730,-400);

	this.instance_4 = new lib.FINALGRAINS_00004();
	this.instance_4.setTransform(-730,-400);

	this.instance_5 = new lib.FINALGRAINS_00005();
	this.instance_5.setTransform(-730,-400);

	this.instance_6 = new lib.FINALGRAINS_00006();
	this.instance_6.setTransform(-730,-400);

	this.instance_7 = new lib.FINALGRAINS_00007();
	this.instance_7.setTransform(-730,-400);

	this.instance_8 = new lib.FINALGRAINS_00008();
	this.instance_8.setTransform(-730,-400);

	this.instance_9 = new lib.FINALGRAINS_00009();
	this.instance_9.setTransform(-730,-400);

	this.instance_10 = new lib.FINALGRAINS_00010();
	this.instance_10.setTransform(-730,-400);

	this.instance_11 = new lib.FINALGRAINS_00011();
	this.instance_11.setTransform(-730,-400);

	this.instance_12 = new lib.FINALGRAINS_00012();
	this.instance_12.setTransform(-730,-400);

	this.instance_13 = new lib.FINALGRAINS_00013();
	this.instance_13.setTransform(-730,-400);

	this.instance_14 = new lib.FINALGRAINS_00014();
	this.instance_14.setTransform(-730,-400);

	this.instance_15 = new lib.FINALGRAINS_00015();
	this.instance_15.setTransform(-730,-400);

	this.instance_16 = new lib.FINALGRAINS_00016();
	this.instance_16.setTransform(-730,-400);

	this.instance_17 = new lib.FINALGRAINS_00017();
	this.instance_17.setTransform(-730,-400);

	this.instance_18 = new lib.FINALGRAINS_00018();
	this.instance_18.setTransform(-730,-400);

	this.instance_19 = new lib.FINALGRAINS_00019();
	this.instance_19.setTransform(-730,-400);

	this.instance_20 = new lib.FINALGRAINS_00020();
	this.instance_20.setTransform(-730,-400);

	this.instance_21 = new lib.FINALGRAINS_00021();
	this.instance_21.setTransform(-730,-400);

	this.instance_22 = new lib.FINALGRAINS_00022();
	this.instance_22.setTransform(-730,-400);

	this.instance_23 = new lib.FINALGRAINS_00023();
	this.instance_23.setTransform(-730,-400);

	this.instance_24 = new lib.FINALGRAINS_00024();
	this.instance_24.setTransform(-730,-400);

	this.instance_25 = new lib.FINALGRAINS_00025();
	this.instance_25.setTransform(-730,-400);

	this.instance_26 = new lib.FINALGRAINS_00026();
	this.instance_26.setTransform(-730,-400);

	this.instance_27 = new lib.FINALGRAINS_00027();
	this.instance_27.setTransform(-730,-400);

	this.instance_28 = new lib.FINALGRAINS_00028();
	this.instance_28.setTransform(-730,-400);

	this.instance_29 = new lib.FINALGRAINS_00029();
	this.instance_29.setTransform(-730,-400);

	this.instance_30 = new lib.FINALGRAINS_00030();
	this.instance_30.setTransform(-730,-400);

	this.instance_31 = new lib.FINALGRAINS_00031();
	this.instance_31.setTransform(-730,-400);

	this.instance_32 = new lib.FINALGRAINS_00032();
	this.instance_32.setTransform(-730,-400);

	this.instance_33 = new lib.FINALGRAINS_00033();
	this.instance_33.setTransform(-730,-400);

	this.instance_34 = new lib.FINALGRAINS_00034();
	this.instance_34.setTransform(-730,-400);

	this.instance_35 = new lib.FINALGRAINS_00035();
	this.instance_35.setTransform(-730,-400);

	this.instance_36 = new lib.FINALGRAINS_00036();
	this.instance_36.setTransform(-730,-400);

	this.instance_37 = new lib.FINALGRAINS_00037();
	this.instance_37.setTransform(-730,-400);

	this.instance_38 = new lib.FINALGRAINS_00038();
	this.instance_38.setTransform(-730,-400);

	this.instance_39 = new lib.FINALGRAINS_00039();
	this.instance_39.setTransform(-730,-400);

	this.instance_40 = new lib.FINALGRAINS_00040();
	this.instance_40.setTransform(-730,-400);

	this.instance_41 = new lib.FINALGRAINS_00041();
	this.instance_41.setTransform(-730,-400);

	this.instance_42 = new lib.FINALGRAINS_00042();
	this.instance_42.setTransform(-730,-400);

	this.instance_43 = new lib.FINALGRAINS_00043();
	this.instance_43.setTransform(-730,-400);

	this.instance_44 = new lib.FINALGRAINS_00044();
	this.instance_44.setTransform(-730,-400);

	this.instance_45 = new lib.FINALGRAINS_00045();
	this.instance_45.setTransform(-730,-400);

	this.instance_46 = new lib.FINALGRAINS_00046();
	this.instance_46.setTransform(-730,-400);

	this.instance_47 = new lib.FINALGRAINS_00047();
	this.instance_47.setTransform(-730,-400);

	this.instance_48 = new lib.FINALGRAINS_00048();

	this.instance_49 = new lib.FINALGRAINS_00049();

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.3,-400,90.9,508.5);


(lib.LOGO = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-196.8,-84,0.29,0.29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-196.8,-84,405.4,192.3);


(lib.itclogo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABqgrIhipzIMAU9gADvKfQgSAAgPgMQgOgLgEgSIhRlGIgBgIQAAgPALgLQAKgLAPAAIAEABIDGAAIBvB8IiZAAQgGAAgFAEQgEAFAAAGQAAADACAEIAvBYQAFAKAKAGQAJAGALAAIDJAAICKCbgAjsKfIBSkSIhNAAIA9iJIDgAAIAVCJIhLAAIAAESgArGKfIFvmbICCAAIjhGbgAgIqeIhiJyIqdLLg");
	this.shape.setTransform(0,-13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGdBYQgXAAgJgNQgFgHgBgIIAAhSQAAgEgBgBIgCgBIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIABAAQAQABAMgOQAFgGAEgNQACgJAAgEIAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAABIAAABIAAApQgBAEAEAAIAeAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgdAAQAAAAgBAAQgBABAAAAQAAAAgBABQAAAAAAABIgBACIAABYIACAHQADAHAJAAQAPAAAFgRIACgQQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAMgEAKQgIAUgVAAIgBAAgAltBLQgSgKgFgKQgIgMgEgJQgGgRAAgSQABgWANgWQAKgSAMgJQAUgPAVAAQAWAAAQANQAIAGADgEQADgBABgEQACgIABAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIABA8QAAABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgBAAgDgEQgDgOgGgMQgHgOgHgHQgNgOgSABQgTABgJAMQgFAIgEAPQgGAWAAAgQADAfADAJQAKAjAegCQAfgBANgXQAJgPAAgRQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAFAAABADQAAAGgCALQgEAPgGAIQgJAKgJAEQgNAGgSABIgDAAQgRAAgTgLgAHSBEQgRgSAAgaQAAgYARgRQASgTAYAAIAZAGQAaAMABAhQgBAFgDAAIhHAAIgDABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAWACAIQAHAaAZgBQAVgBAKgQQAGgIABgIIAAgCQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAEABAAAFQgDALgGAJQgOARgcABQgZAAgRgSgAHngPQgDAGgDAQQgBAGADACIAFAAIAcAAQAMAAACgCQACgDAAgOQgBgbgXAAQgPAAgGAQgAJGBDQgPgSABgaQAAgXARgSQAQgTAWAAQAVAAAMATQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAAgvQAAgJgJgCIgPgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAwgEQAEABAAAFIAACQQAAALAIABQAGACAIgBQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgqACQgIACAAgHIAAgNQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBABQgPAUgXAAQgUAAgQgSgAJXAWQAAA4AeAAQAMAAAJgOQAIgQAAgaQAAgXgIgPQgJgQgOAAQgcAAAAA2gAEmBUQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAOgDQAJgCAAgIIAAhSQAAgIgJgBIgOgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAugCQAEABAAAEIAABhQAAAHAIACIAQACQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAgADaBUQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIALgCQAJgCAAgHIAAhFQABgGgBgHQgDgNgLAAQgTAAgMAbQgEAHgBAPIAAAuQAAAHAJACIALACQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIhHAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAMgCQAJgCAAgHIAAhFQABgGgCgHQgCgOgMABQgRABgNAaQgDAGgCAVIAAApQAAAHAJACIALACQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIhJAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAOgCQAJgCAAgHIAAhUQAAgIgJgBIgNgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAwgCQAFACAAAEIgBATIACABIAEgGQACgFAJgGQALgKAMAAQAcgBAKAXIABAEIACADQABAAADgHQAEgFAHgHQAMgKAMAAQAdgBALAWQADAGgBAQIgCA9QAAAHAKACIALACQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAgAgWBUQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAOgDQAIgCAAgIIAAhSQAAgIgIgBIgOgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAtgCQAEABAAAEIAABhQAAAHAJACIAOACQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAisBUQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAQgCQAKgCAAgJIAAiAQAAgJgKgCIgQgCQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIBWAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQgMABgHABQgKACAAAJIAACAQAAAJAKACIAMABQAYAAAMgIQAOgLAGgXIADgOIABgDQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQADAAgBAGIAAA6QABAEgEAAgAovBUQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAQgCQARgEAAgHIAAiJIgBgDIgCgBQgHgBgKADQgOAEgKAaQgFANgDAQQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAAhCICRAAIAABCQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQgCgPgGgOQgMgcgNgCIgQgCIgDAFIAACIQAAAJALACQAGABANABQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgArDBTQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAQgDQAKgCAAgIIAAiAQAAgJgKgCIgQgCQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIBRAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgQACQgKACAAAJIAACAQAAAIAKACIAQADQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAE+g4QgEgFAAgHQAAgGAEgFQAFgFAHAAQAHAAAFAFQAFAEgBAHQABAHgFAFQgFAFgHAAQgHAAgFgFgAABg4QgDgFAAgHQAAgGADgFQAEgFAHAAQAHAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgHAAQgHAAgEgFg");
	this.shape_1.setTransform(0,72.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.6,-80.9,155.3,162);


(lib.grainsstack = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grain2();
	this.instance.setTransform(-143.1,-71.9,0.192,0.179);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.1,-71.9,159.4,82.2);


(lib.grains1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAFiBEYQhDgFh0gMQhKgIhSAAQhIAAiYgUQiYgVhCAAQgrAAg7gPIhsgeQiOgohcAPQhqAShmgDQhsgDiGgbQglgHiCgWQh2gWgkgTIjHilIjYh9IhxiBIDDniIgCAAMgOgg2LMAJdg4CIU0pEMA3QABgIFSIsMgJRBtFIAAAAIgYEYIgOAtQgFANgUDkQgTDcgPARQgjAqhqAfQjDA6hAAYQiOA4hBAPIiQAaQgqAHgtgGIhKgRQhagThZApQhfAsh4ACQiFgGhJAGQhzANguADQgiADgpAAQgzAAg/gEg");
	mask.setTransform(22.4,-57);

	// Layer 2
	this.instance = new lib.FINALGRAINS_00000();
	this.instance.setTransform(-640,-400);

	this.instance_1 = new lib.FINALGRAINS_00001();
	this.instance_1.setTransform(-640,-400);

	this.instance_2 = new lib.FINALGRAINS_00002();
	this.instance_2.setTransform(-640,-400);

	this.instance_3 = new lib.FINALGRAINS_00003();
	this.instance_3.setTransform(-640,-400);

	this.instance_4 = new lib.FINALGRAINS_00004();
	this.instance_4.setTransform(-640,-400);

	this.instance_5 = new lib.FINALGRAINS_00005();
	this.instance_5.setTransform(-640,-400);

	this.instance_6 = new lib.FINALGRAINS_00006();
	this.instance_6.setTransform(-640,-400);

	this.instance_7 = new lib.FINALGRAINS_00007();
	this.instance_7.setTransform(-640,-400);

	this.instance_8 = new lib.FINALGRAINS_00008();
	this.instance_8.setTransform(-640,-400);

	this.instance_9 = new lib.FINALGRAINS_00009();
	this.instance_9.setTransform(-640,-400);

	this.instance_10 = new lib.FINALGRAINS_00010();
	this.instance_10.setTransform(-640,-400);

	this.instance_11 = new lib.FINALGRAINS_00011();
	this.instance_11.setTransform(-640,-400);

	this.instance_12 = new lib.FINALGRAINS_00012();
	this.instance_12.setTransform(-640,-400);

	this.instance_13 = new lib.FINALGRAINS_00013();
	this.instance_13.setTransform(-640,-400);

	this.instance_14 = new lib.FINALGRAINS_00014();
	this.instance_14.setTransform(-640,-400);

	this.instance_15 = new lib.FINALGRAINS_00015();
	this.instance_15.setTransform(-640,-400);

	this.instance_16 = new lib.FINALGRAINS_00016();
	this.instance_16.setTransform(-640,-400);

	this.instance_17 = new lib.FINALGRAINS_00017();
	this.instance_17.setTransform(-640,-400);

	this.instance_18 = new lib.FINALGRAINS_00018();
	this.instance_18.setTransform(-640,-400);

	this.instance_19 = new lib.FINALGRAINS_00019();
	this.instance_19.setTransform(-640,-400);

	this.instance_20 = new lib.FINALGRAINS_00020();
	this.instance_20.setTransform(-640,-400);

	this.instance_21 = new lib.FINALGRAINS_00021();
	this.instance_21.setTransform(-640,-400);

	this.instance_22 = new lib.FINALGRAINS_00022();
	this.instance_22.setTransform(-640,-400);

	this.instance_23 = new lib.FINALGRAINS_00023();
	this.instance_23.setTransform(-640,-400);

	this.instance_24 = new lib.FINALGRAINS_00024();
	this.instance_24.setTransform(-640,-400);

	this.instance_25 = new lib.FINALGRAINS_00025();
	this.instance_25.setTransform(-640,-400);

	this.instance_26 = new lib.FINALGRAINS_00026();
	this.instance_26.setTransform(-640,-400);

	this.instance_27 = new lib.FINALGRAINS_00027();
	this.instance_27.setTransform(-640,-400);

	this.instance_28 = new lib.FINALGRAINS_00028();
	this.instance_28.setTransform(-640,-400);

	this.instance_29 = new lib.FINALGRAINS_00029();
	this.instance_29.setTransform(-640,-400);

	this.instance_30 = new lib.FINALGRAINS_00030();
	this.instance_30.setTransform(-640,-400);

	this.instance_31 = new lib.FINALGRAINS_00031();
	this.instance_31.setTransform(-640,-400);

	this.instance_32 = new lib.FINALGRAINS_00032();
	this.instance_32.setTransform(-640,-400);

	this.instance_33 = new lib.FINALGRAINS_00033();
	this.instance_33.setTransform(-640,-400);

	this.instance_34 = new lib.FINALGRAINS_00034();
	this.instance_34.setTransform(-640,-400);

	this.instance_35 = new lib.FINALGRAINS_00035();
	this.instance_35.setTransform(-640,-400);

	this.instance_36 = new lib.FINALGRAINS_00036();
	this.instance_36.setTransform(-640,-400);

	this.instance_37 = new lib.FINALGRAINS_00037();
	this.instance_37.setTransform(-640,-400);

	this.instance_38 = new lib.FINALGRAINS_00038();
	this.instance_38.setTransform(-640,-400);

	this.instance_39 = new lib.FINALGRAINS_00039();
	this.instance_39.setTransform(-640,-400);

	this.instance_40 = new lib.FINALGRAINS_00040();
	this.instance_40.setTransform(-640,-400);

	this.instance_41 = new lib.FINALGRAINS_00041();
	this.instance_41.setTransform(-640,-400);

	this.instance_42 = new lib.FINALGRAINS_00042();
	this.instance_42.setTransform(-640,-400);

	this.instance_43 = new lib.FINALGRAINS_00043();
	this.instance_43.setTransform(-640,-400);

	this.instance_44 = new lib.FINALGRAINS_00044();
	this.instance_44.setTransform(-640,-400);

	this.instance_45 = new lib.FINALGRAINS_00045();
	this.instance_45.setTransform(-640,-400);

	this.instance_46 = new lib.FINALGRAINS_00046();
	this.instance_46.setTransform(-640,-400);

	this.instance_47 = new lib.FINALGRAINS_00047();
	this.instance_47.setTransform(-640,-400);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.3,-400,581.4,781.1);


(lib.Tween55 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AASHIRVAAD USES TRADITIONAL CHAKKI  METHOD TO GRIND GRAINS.", "bold 24px 'Arial'", "#E21836");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 198;
	this.text.setTransform(-2,-162.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.1,-162.3,202.4,341.5);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modakplate();
	this.instance.setTransform(-198.5,-157.9,0.283,0.283);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.5,-157.9,73.6,64.3);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE GROUND", "32px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 200;
	this.text.setTransform(-2,-102.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102,-102.1,204.1,82.9);


(lib.textbg_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgQzAu6QitgugDisMAAAhaZMAnHAAAMAAABaUQgKC+ikAhg");
	this.shape_1.setTransform(0,-30);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.2,-330.3,250.5,600.5);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.roti_plate();
	this.instance.setTransform(-79.9,-63.6,0.471,0.471);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.9,-63.6,159.8,127.3);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rotisingle();
	this.instance.setTransform(-135.1,-81.2,0.191,0.161);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.1,-81.2,250.3,158.6);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.stove();
	this.instance.setTransform(-184,-104.4,0.148,0.162);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-104.4,1027.2,600.8);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rotikachha();
	this.instance.setTransform(-37.5,-27.8,0.033,0.033);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-27.8,75,55.7);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.modak();
	this.instance.setTransform(-51.3,-48,0.258,0.258);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.3,-48,102.8,96.1);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.belni1();
	this.instance.setTransform(-243,-32.8,0.136,0.135);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-243,-32.8,486.1,65.7);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.belni2();
	this.instance.setTransform(-198.6,-134.8,0.282,0.282);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.6,-134.8,397.3,269.7);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.timer_text = new cjs.Text("00:30", "94px 'Digital-7'", "#FFFFFF");
	this.timer_text.name = "timer_text";
	this.timer_text.lineHeight = 96;
	this.timer_text.setTransform(-97.6,-48.4);

	this.addChild(this.timer_text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.6,-48.4,197.4,96.9);


(lib.Symbol5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loose_ata4();
	this.instance.setTransform(-211.8,-208.5,0.231,0.231);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.8,-208.5,491.2,491.2);


(lib.Symbol4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loose_ata3();
	this.instance.setTransform(-211.8,-208.5,0.231,0.231);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.8,-208.5,491.2,491.2);


(lib.Symbol3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loose_ata2();
	this.instance.setTransform(-211.8,-208.5,0.231,0.231);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.8,-208.5,491.2,491.2);


(lib.Symbol2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loose_ata1();
	this.instance.setTransform(-211.8,-208.5,0.231,0.231);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.8,-208.5,491.2,491.2);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chakki();
	this.instance.setTransform(-172.1,-171.9,0.41,0.41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172.1,-171.9,344.4,344);


(lib.city_vidisha = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nVIDISHA", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 202;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.1,-60.6,206.3,121.4);


(lib.city_sihore = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nSEHORE.", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 202;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.1,-60.6,206.3,121.4);


(lib.city_sagar = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nSAGAR.", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 203;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.6,-60.6,207.2,121.4);


(lib.city_nimbhera = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nNIMBHERA", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 204;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.1,-60.6,208.2,121.4);


(lib.city_mandsour = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nMANDSAUR.", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 203;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.6,-60.6,207.3,121.4);


(lib.city_datiya = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nDATIA.", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 203;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.6,-60.6,207.2,121.4);


(lib.city_dabra = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YOU HAVE SELECTED\nDABRA", "24px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 202;
	this.text.setTransform(-2,-60.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.1,-60.6,206.3,121.4);


(lib.bag2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bag2();
	this.instance.setTransform(-177.7,-217.5,0.177,0.177);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177.7,-217.5,159.3,159.3);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE216").s().p("ApFepQiIgsg6hJIhHAgQghhiAPh3QCkBWBjAEIg+AjQAqBAB1AzQA0AVBHAWIhlAtQg6gMgpgOgAWOdxQBFgWAxgVQBdgpAogxQAIgKAGgLIhAgeQBigHCahTQAZBugYBbIhJgcIgLAOQg2A8h1AoQgnANg4AOgAwMCiQiIgsg6hIIhHAfQghhfAPh4QCkBWBjAFIg+AiQAqA/B1AyQA0AWBHAWIhlAtQg6gNgpgOgAPHBrQBFgWAxgWQBdgpAoguQAIgLAGgLIhAgeQBigHCahTQAZBugYBaIhJgcIgLANQg2A9h1AoQgnAMg4AOgA4/55QiIgrg7hJIhHAgQgghiAPh3QCjBWBkAEIg+AjQApBAB1AzQA1AVBHAWIhlAtQg6gNgpgOgAGU6wQBEgWAxgWQBdgoAogxQAIgKAHgLIhAgeQBhgHCahTQAZBtgXBcIhKgcIgKAOQg2A8h2AoQgnANg4AOg");
	this.shape.setTransform(0.3,-4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.5,-203.1,377.7,397.5);


(lib._1_chalninask = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chalni_mask();
	this.instance.setTransform(-1065,-401);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1065,-401,2130,802);


(lib._1_chalni = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chalni();
	this.instance.setTransform(-1070.5,-583);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1070.5,-583,2141,1166);


(lib.Tween79 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbg_1();
	this.instance.setTransform(0,30.1);

	this.instance_1 = new lib.textbg_1();
	this.instance_1.setTransform(0,30.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.2,-300.2,250.5,600.5);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.one = new lib.Symbol7();
	this.one.setTransform(-310.4,-125.2,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.one).to({scaleX:1.64,scaleY:1.64},14).to({scaleX:1.28,scaleY:1.28},13).to({scaleX:1.64,scaleY:1.64},12).wait(1));

	// Layer 7
	this.two = new lib.Symbol6();
	this.two.setTransform(-123.7,14.1,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.two).wait(9).to({scaleX:1.64,scaleY:1.64},10).to({scaleX:1.28,scaleY:1.28},10).to({scaleX:1.64,scaleY:1.64},10).wait(1));

	// Layer 6
	this.six = new lib.Symbol5();
	this.six.setTransform(14.3,-272.3);

	this.timeline.addTween(cjs.Tween.get(this.six).to({scaleX:1.29,scaleY:1.29},14).to({scaleX:1,scaleY:1},13).to({scaleX:1.29,scaleY:1.29},12).wait(1));

	// Layer 5
	this.seven = new lib.Symbol4();
	this.seven.setTransform(-23.8,-321.2,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.seven).to({scaleX:1.64,scaleY:1.64},9).to({scaleX:1.28,scaleY:1.28},10).to({scaleX:1.64,scaleY:1.64},10).to({scaleX:1.28,scaleY:1.28},10).wait(1));

	// Layer 4
	this.three = new lib.Symbol3();
	this.three.setTransform(-296.7,-65.4,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.three).to({scaleX:1.64,scaleY:1.64},14).to({scaleX:1.28,scaleY:1.28},13).to({scaleX:1.64,scaleY:1.64},12).wait(1));

	// Layer 3
	this.four = new lib.Symbol2();
	this.four.setTransform(-35.8,-30.6,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.four).to({scaleX:1.64,scaleY:1.64},9).to({scaleX:1.28,scaleY:1.28},10).to({scaleX:1.64,scaleY:1.64},10).to({scaleX:1.28,scaleY:1.28},10).wait(1));

	// Layer 2
	this.five = new lib.Symbol1();
	this.five.setTransform(72.2,-42.3,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.five).to({scaleX:1.64,scaleY:1.64},14).to({scaleX:1.28,scaleY:1.28},13).wait(13));

	// Layer 1
	this.eight = new lib.Symbol5();
	this.eight.setTransform(195.7,-138.7);

	this.timeline.addTween(cjs.Tween.get(this.eight).to({scaleX:1.29,scaleY:1.29},9).to({scaleX:1,scaleY:1},10).to({scaleX:1.29,scaleY:1.29},10).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-338.9,541.3,370.7);


(lib.Symbol116 = function() {
	this.initialize();

	// Layer 1
	this.roti_text = new cjs.Text("", "bold 32px 'Arial'", "#E21836");
	this.roti_text.name = "roti_text";
	this.roti_text.textAlign = "center";
	this.roti_text.lineHeight = 42;
	this.roti_text.lineWidth = 32;
	this.roti_text.setTransform(-2,-21.8);

	this.instance = new lib.Tween83("synched",0);

	this.addChild(this.instance,this.roti_text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-21.8,36,43.7);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{plate1:0,plate2:9,plate3:19,plate4:29,plate5:39,plate6:49,plate7:59});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//exportRoot.series_02.visible=false;
	}
	this.frame_9 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}
	this.frame_19 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}
	this.frame_29 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}
	this.frame_39 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}
	this.frame_49 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}
	this.frame_59 = function() {
		this.stop();
		//exportRoot.series02.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(11));

	// roti_plate copy 6
	this.instance = new lib.Symbol107();
	this.instance.setTransform(-425.4,281);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:-515.3,alpha:1},10,cjs.Ease.get(0.9)).wait(1));

	// roti_plate copy 5
	this.instance_1 = new lib.Symbol106();
	this.instance_1.setTransform(-328,280,0.747,0.747);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:-386,alpha:1},10,cjs.Ease.get(1)).wait(11));

	// roti_plate copy 4
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(-127.7,285.4,0.865,0.865);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,x:-258,y:277.8,alpha:1},10,cjs.Ease.get(0.97)).wait(21));

	// roti_plate copy 3
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(-26.4,287.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,x:-130.8,y:277.8,alpha:1},10,cjs.Ease.get(0.97)).wait(31));

	// roti_plate copy 2
	this.instance_4 = new lib.Symbol17();
	this.instance_4.setTransform(97.6,287.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,x:-3.5,y:277.8,alpha:1},10,cjs.Ease.get(0.97)).wait(41));

	// roti_plate copy
	this.instance_5 = new lib.Symbol17();
	this.instance_5.setTransform(201.6,287.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,x:123.8,y:277.8,alpha:1},10,cjs.Ease.get(0.97)).wait(51));

	// roti_plate
	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(345.6,287.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.75,scaleY:0.75,x:251,y:277.8,alpha:1},9,cjs.Ease.get(0.97)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265.7,224.2,159.8,127.2);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		exportRoot.series02.visible=true;
		exportRoot.series02.gotoAndStop(2);
		console.log("Roti " + exportRoot.countRoti);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// modaksingle
	this.instance = new lib.Symbol12();
	this.instance.setTransform(-432.4,-13.6,0.591,0.591);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-33.1,y:-16.3,alpha:0},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		console.log(exportRoot.countRoti);
		console.log("Roti");
		exportRoot.series03.visible=true;
		switch(exportRoot.countRoti){
			case 1: exportRoot.series03.gotoAndPlay("plate1"); exportRoot.mod_1.visible = false; break;
			case 2: exportRoot.series03.gotoAndPlay("plate2"); exportRoot.mod_2.visible = false; break;
			case 3: exportRoot.series03.gotoAndPlay("plate3"); exportRoot.mod_3.visible = false; break;
			case 4: exportRoot.series03.gotoAndPlay("plate4"); exportRoot.mod_4.visible = false; break;
			case 5: exportRoot.series03.gotoAndPlay("plate5"); exportRoot.mod_5.visible = false; break;
			case 6: exportRoot.series03.gotoAndPlay("plate6"); exportRoot.mod_6.visible = false; break;
			case 7: exportRoot.series03.gotoAndPlay("plate7"); exportRoot.mod_7.visible = false; break;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// rotikachha
	this.instance = new lib.Symbol14();
	this.instance.setTransform(-37.6,-24.8,1.265,1.19);

	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(417.8,-5.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.96,scaleY:3.12,x:-34.2,y:-8.6},12).to({scaleX:3.81,scaleY:3,x:407.4,y:-6.5},10,cjs.Ease.get(0.98)).to({alpha:0},9).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({alpha:1},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-58,94.9,66.3);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{aata1:0,aata2:24,aata3:44});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(22).call(this.frame_66).wait(1));

	// loose_ata
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(-80.3,42.4,1,1,-9.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},22).wait(1));

	// loose_ata
	this.instance_1 = new lib.Symbol4_1();
	this.instance_1.setTransform(-50,7.3,1,1,12.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(0.96)).wait(23));

	// loose_ata
	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.setTransform(-76.9,13.6,1,1,27.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(1)).wait(23));

	// loose_ata
	this.instance_3 = new lib.Symbol2_1();
	this.instance_3.setTransform(-76.1,48.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},24).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.9,-159.7,491.2,491.2);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{congrats:0,thanks:60});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
		
		var timer1 = setInterval(updateTimer1, 10000);
		
		function updateTimer1(){
			timer1 = clearInterval(timer1);
			exportRoot.gotoAndPlay(2);
		}
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_83 = function() {
		this.stop();
		
		var timer1 = setInterval(updateTimer1, 10000);
		
		function updateTimer1(){
			timer1 = clearInterval(timer1);
			exportRoot.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(2).call(this.frame_60).wait(23).call(this.frame_83).wait(1));

	// Layer 6
	this.instance = new lib.Symbol105();
	this.instance.setTransform(-0.6,-4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({alpha:1},10).wait(14));

	// Layer 5
	this.instance_1 = new lib.Symbol104();
	this.instance_1.setTransform(-3.1,-114.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({alpha:1},10).wait(14));

	// Layer 3
	this.instance_2 = new lib.Symbol102();
	this.instance_2.setTransform(-4,16.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(25));

	// Layer 1
	this.instance_3 = new lib.Symbol103();
	this.instance_3.setTransform(-3.1,-133.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},10).to({_off:true},10).wait(25));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A/RfRQs9s8AAyVQAAyTM9s/QM+s9STAAQSVAAM9M9QM+M/AASTQAASVs+M8Qs9M/yVAAQyTAAs+s/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:4.3,y:-33.8}).wait(83));

	// Layer 2
	this.instance_4 = new lib.confetti_00061();
	this.instance_4.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_5 = new lib.confetti_00062();
	this.instance_5.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_6 = new lib.confetti_00063();
	this.instance_6.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_7 = new lib.confetti_00064();
	this.instance_7.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_8 = new lib.confetti_00065();
	this.instance_8.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_9 = new lib.confetti_00066();
	this.instance_9.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_10 = new lib.confetti_00067();
	this.instance_10.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_11 = new lib.confetti_00068();
	this.instance_11.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_12 = new lib.confetti_00069();
	this.instance_12.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_13 = new lib.confetti_00070();
	this.instance_13.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_14 = new lib.confetti_00071();
	this.instance_14.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_15 = new lib.confetti_00072();
	this.instance_15.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_16 = new lib.confetti_00073();
	this.instance_16.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_17 = new lib.confetti_00074();
	this.instance_17.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_18 = new lib.confetti_00075();
	this.instance_18.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_19 = new lib.confetti_00076();
	this.instance_19.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_20 = new lib.confetti_00077();
	this.instance_20.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_21 = new lib.confetti_00078();
	this.instance_21.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_22 = new lib.confetti_00079();
	this.instance_22.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_23 = new lib.confetti_00080();
	this.instance_23.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_24 = new lib.confetti_00081();
	this.instance_24.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_25 = new lib.confetti_00082();
	this.instance_25.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_26 = new lib.confetti_00083();
	this.instance_26.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_27 = new lib.confetti_00084();
	this.instance_27.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_28 = new lib.confetti_00085();
	this.instance_28.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_29 = new lib.confetti_00086();
	this.instance_29.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_30 = new lib.confetti_00087();
	this.instance_30.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_31 = new lib.confetti_00088();
	this.instance_31.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_32 = new lib.confetti_00089();
	this.instance_32.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_33 = new lib.confetti_00090();
	this.instance_33.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_34 = new lib.confetti_00091();
	this.instance_34.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_35 = new lib.confetti_00092();
	this.instance_35.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_36 = new lib.confetti_00093();
	this.instance_36.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_37 = new lib.confetti_00094();
	this.instance_37.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_38 = new lib.confetti_00095();
	this.instance_38.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_39 = new lib.confetti_00096();
	this.instance_39.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_40 = new lib.confetti_00097();
	this.instance_40.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_41 = new lib.confetti_00098();
	this.instance_41.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_42 = new lib.confetti_00099();
	this.instance_42.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_43 = new lib.confetti_00100();
	this.instance_43.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_44 = new lib.confetti_00101();
	this.instance_44.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_45 = new lib.confetti_00102();
	this.instance_45.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_46 = new lib.confetti_00103();
	this.instance_46.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_47 = new lib.confetti_00104();
	this.instance_47.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_48 = new lib.confetti_00105();
	this.instance_48.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_49 = new lib.confetti_00106();
	this.instance_49.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_50 = new lib.confetti_00107();
	this.instance_50.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_51 = new lib.confetti_00108();
	this.instance_51.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_52 = new lib.confetti_00109();
	this.instance_52.setTransform(-565.8,-331.7,0.538,0.538);

	this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[]},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol86 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol85();
	this.instance.setTransform(2.4,0,1,1,0,0,0,0.3,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-243.6,-80.3,426.6,160.8);


(lib.Symbol84 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbg();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,30.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-300.6,274.8,601.3);


(lib.Symbol81 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbg();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,30.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-300.6,274.8,601.3);


(lib.Symbol80 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol79();
	this.instance.setTransform(-24.7,41.2,1,1,0,0,0,0.3,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.1,-68.3,537.5,183.6);


(lib.Symbol77 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbg();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,30.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-300.6,274.8,601.3);


(lib.Symbol75 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol74();
	this.instance.setTransform(0,0,0.278,0.278,-12.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153.2,-138.7,306.4,277.5);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween76("synched",0);
	this.instance.setTransform(175.1,-0.7);

	this.instance_1 = new lib.Tween77("synched",0);
	this.instance_1.setTransform(196.7,-0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween78("synched",0);
	this.instance_2.setTransform(175.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:196.7},9).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,x:175.1},10).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol66();
	this.instance_3.setTransform(291.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:320.2},9).to({x:291.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.2,-67.9,276.8,134.3);


(lib.Symbol57 = function() {
	this.initialize();

	// Layer 1
	this.timer_text1 = new cjs.Text("00:30", "94px 'Digital-7'", "#FFFFFF");
	this.timer_text1.name = "timer_text1";
	this.timer_text1.lineHeight = 96;
	this.timer_text1.setTransform(-97.6,-48.4);

	this.instance = new lib.Symbol44();

	this.addChild(this.instance,this.timer_text1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.6,-48.4,197.4,96.9);


(lib.Symbol56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(-21.5,-17.2,0.615,0.615);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.6,-114.3,45.3,39.5);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-269.9,274.8,601.3);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grainsstack();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.1,-71.9,159.4,82.2);


(lib.coin_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		this.stop();
		
		console.log(exportRoot.result1);
		
		if(exportRoot.result1 == "1"){
			console.log('Congrats');
			exportRoot.confetti.gotoAndPlay(2);
		}
		else{
			console.log('Thanks');
			exportRoot.confetti.gotoAndPlay(62);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(1));

	// Layer 3
	this.instance = new lib.Symbol100();
	this.instance.setTransform(641,399.7,0.95,0.95,0,0,0,0.3,-0.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},10).wait(1));

	// Layer 2
	this.instance_1 = new lib.COIN_00000();

	this.instance_2 = new lib.COIN_00001();

	this.instance_3 = new lib.COIN_00002();

	this.instance_4 = new lib.COIN_00003();

	this.instance_5 = new lib.COIN_00004();

	this.instance_6 = new lib.COIN_00005();

	this.instance_7 = new lib.COIN_00006();

	this.instance_8 = new lib.COIN_00007();

	this.instance_9 = new lib.COIN_00008();

	this.instance_10 = new lib.COIN_00009();

	this.instance_11 = new lib.COIN_00010();

	this.instance_12 = new lib.COIN_00011();

	this.instance_13 = new lib.COIN_00012();

	this.instance_14 = new lib.COIN_00013();

	this.instance_15 = new lib.COIN_00014();

	this.instance_16 = new lib.COIN_00015();

	this.instance_17 = new lib.COIN_00016();

	this.instance_18 = new lib.COIN_00017();

	this.instance_19 = new lib.COIN_00018();

	this.instance_20 = new lib.COIN_00019();

	this.instance_21 = new lib.COIN_00020();

	this.instance_22 = new lib.COIN_00021();

	this.instance_23 = new lib.COIN_00022();

	this.instance_24 = new lib.COIN_00023();

	this.instance_25 = new lib.COIN_00024();

	this.instance_26 = new lib.COIN_00025();

	this.instance_27 = new lib.COIN_00026();

	this.instance_28 = new lib.COIN_00027();

	this.instance_29 = new lib.COIN_00028();

	this.instance_30 = new lib.COIN_00029();

	this.instance_31 = new lib.COIN_00030();

	this.instance_32 = new lib.COIN_00031();

	this.instance_33 = new lib.COIN_00032();

	this.instance_34 = new lib.COIN_00033();

	this.instance_35 = new lib.COIN_00034();

	this.instance_36 = new lib.COIN_00035();

	this.instance_37 = new lib.COIN_00036();

	this.instance_38 = new lib.COIN_00037();

	this.instance_39 = new lib.COIN_00038();

	this.instance_40 = new lib.COIN_00039();

	this.instance_41 = new lib.COIN_00040();

	this.instance_42 = new lib.COIN_00041();

	this.instance_43 = new lib.COIN_00042();

	this.instance_44 = new lib.COIN_00043();

	this.instance_45 = new lib.COIN_00044();

	this.instance_46 = new lib.COIN_00045();

	this.instance_47 = new lib.COIN_00046();

	this.instance_48 = new lib.COIN_00047();

	this.instance_49 = new lib.COIN_00048();

	this.instance_50 = new lib.COIN_00049();

	this.instance_51 = new lib.COIN_00050();

	this.instance_52 = new lib.COIN_00051();

	this.instance_53 = new lib.COIN_00052();

	this.instance_54 = new lib.COIN_00053();

	this.instance_55 = new lib.COIN_00054();

	this.instance_56 = new lib.COIN_00055();

	this.instance_57 = new lib.COIN_00056();

	this.instance_58 = new lib.COIN_00057();

	this.instance_59 = new lib.COIN_00058();

	this.instance_60 = new lib.COIN_00059();

	this.instance_61 = new lib.COIN_00060();

	this.instance_62 = new lib.COIN_00061();

	this.instance_63 = new lib.COIN_00062();

	this.instance_64 = new lib.COIN_00063();

	this.instance_65 = new lib.COIN_00064();

	this.instance_66 = new lib.COIN_00065();

	this.instance_67 = new lib.COIN_00066();

	this.instance_68 = new lib.COIN_00067();

	this.instance_69 = new lib.COIN_00068();

	this.instance_70 = new lib.COIN_00069();

	this.instance_71 = new lib.COIN_00070();

	this.instance_72 = new lib.COIN_00071();

	this.instance_73 = new lib.COIN_00072();

	this.instance_74 = new lib.COIN_00073();

	this.instance_75 = new lib.COIN_00074();

	this.instance_76 = new lib.COIN_00075();

	this.instance_77 = new lib.COIN_00076();

	this.instance_78 = new lib.COIN_00077();

	this.instance_79 = new lib.COIN_00078();

	this.instance_80 = new lib.COIN_00079();

	this.instance_81 = new lib.COIN_00080();

	this.instance_82 = new lib.COIN_00081();

	this.instance_83 = new lib.COIN_00082();

	this.instance_84 = new lib.COIN_00083();

	this.instance_85 = new lib.COIN_00084();

	this.instance_86 = new lib.COIN_00085();

	this.instance_87 = new lib.COIN_00086();

	this.instance_88 = new lib.COIN_00087();

	this.instance_89 = new lib.COIN_00088();

	this.instance_90 = new lib.COIN_00089();

	this.instance_91 = new lib.COIN_00090();

	this.instance_92 = new lib.COIN_00091();

	this.instance_93 = new lib.COIN_00092();

	this.instance_94 = new lib.COIN_00093();

	this.instance_95 = new lib.COIN_00094();

	this.instance_96 = new lib.COIN_00095();

	this.instance_97 = new lib.COIN_00096();

	this.instance_98 = new lib.COIN_00097();

	this.instance_99 = new lib.COIN_00098();

	this.instance_100 = new lib.COIN_00099();

	this.instance_101 = new lib.COIN_00100();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.Tween82 = function() {
	this.initialize();

	// Layer 1
	this.modak_arrow = new lib.Symbol80();
	this.modak_arrow.setTransform(-22.2,-14.4);

	this.instance = new lib.Symbol80();
	this.instance.setTransform(-22.2,-14.4);

	this.addChild(this.instance,this.modak_arrow);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.3,-82.7,537.5,183.7);


(lib.Tween81 = function() {
	this.initialize();

	// Layer 1
	this.modak_arrow = new lib.Symbol80();
	this.modak_arrow.setTransform(-22.2,-14.4);
	this.modak_arrow.alpha = 0;

	this.instance = new lib.Symbol80();
	this.instance.setTransform(-22.2,-14.4);
	this.instance.alpha = 0;

	this.addChild(this.instance,this.modak_arrow);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.3,-82.7,537.5,183.7);


(lib.Symbol99 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween82("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.3,-82.7,538,183.7);


(lib.Symbol98 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween81("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.3,-82.7,538,183.7);


(lib.Symbol82 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol81();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-300.6,274.8,601.3);


// stage content:
(lib.aashirwadfinalhtml_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{checkpoint_1:90,checkpoint_2:649,checkpoint_3:774,checkpoint_4:939,checkpoint_5:1005,checkpoint_6:1105,checkpoint_chakki:1363,checkpoint_chakki01:1645,timeup:1671,belan_checkpoint:1822,belan_point:1970,belan_time_up:2251,done:2302,form:2423,form_complete:2444,result:2484});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.net.URLRequest;
		import flash.media.Sound;
		import flash.media.SoundChannel;
		
		var mySound:Sound = new snd();
		
		var myBtnSound:Sound = new btnSound();
		
		var myBtnChalni:Sound = new sndChalni();
		var channelChalni:SoundChannel =  new SoundChannel();
		
		var myBtnStone:Sound = new btnStone();
		var channelStone:SoundChannel =  new SoundChannel();
		
		playSound();
		
		function playSound():void
		{
		    var channel:SoundChannel = mySound.play();
			var st:SoundTransform=channel.soundTransform;
			st.volume=.5;
			channel.soundTransform=st;
		    channel.addEventListener(Event.SOUND_COMPLETE, onComplete);
		}
		
		function onComplete(event:Event):void
		{
		    SoundChannel(event.target).removeEventListener(event.type, onComplete);
		    playSound();
		}
		
		logo.addEventListener(MouseEvent.CLICK, myClickLogo);
		
		function myClickLogo (e:MouseEvent):void{
			gotoAndPlay(2);
		}*/
		
		
		/********************* HTML 5 *********************/
		
		this.logo.addEventListener("click", myClickLogo.bind(this));
		
		function myClickLogo(e){
			this.gotoAndPlay(2);
		}
	}
	this.frame_90 = function() {
		/************************* HTML 5 ****************************/
		
		this.stop();
		
		this.intro_btn.addEventListener("click", myClickReaction.bind(this));
		
		function myClickReaction(e){
			this.intro_btn.removeEventListener("click", myClickReaction);
			this.gotoAndPlay(220);
		}
	}
	this.frame_649 = function() {
		/************************* HTML 5 ****************************/
		
		this.stop();
		
		this.dotsglow.one.addEventListener("click", myClick1.bind(this));
		this.dotsglow.two.addEventListener("click", myClick2.bind(this));
		this.dotsglow.three.addEventListener("click", myClick3.bind(this));
		this.dotsglow.four.addEventListener("click", myClick4.bind(this));
		this.dotsglow.five.addEventListener("click", myClick5.bind(this));
		this.dotsglow.six.addEventListener("click", myClick6.bind(this));
		this.dotsglow.seven.addEventListener("click", myClick7.bind(this));
		this.dotsglow.eight.addEventListener("click", myClick8.bind(this));
		
		this.text01.visible = false;
		this.text02.visible = false;
		this.text03.visible = false;
		this.text04.visible = false;
		this.text05.visible = false;
		this.text06.visible = false;
		this.text07.visible = false;
		this.text08.visible = false;
			
		function myClick1 (e){
			this.text01.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
			
		}
		
		function myClick2 (e){
			this.text07.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick3 (e){
			this.text06.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick4 (e){
			this.text04.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick5 (e){
			this.text08.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick6 (e){
			this.text05.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick7 (e){
			this.text03.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
		
		function myClick8 (e){
			this.text02.visible = true;
			this.dotsglow.one.removeEventListener("click", myClick1);
			this.dotsglow.two.removeEventListener("click", myClick2);
			this.dotsglow.three.removeEventListener("click", myClick3);
			this.dotsglow.four.removeEventListener("click", myClick4);
			this.dotsglow.five.removeEventListener("click", myClick5);
			this.dotsglow.six.removeEventListener("click", myClick6);
			this.dotsglow.seven.removeEventListener("click", myClick7);
			this.dotsglow.eight.removeEventListener("click", myClick8);
			//myBtnSound.play();
			this.gotoAndPlay(650);
		}
	}
	this.frame_774 = function() {
		this.stop();
		
		this.sack.addEventListener("click", mySack.bind(this));
		
		this.sack_grains.addEventListener("click", mySack.bind(this));
		
		function mySack (e){
			//myBtnSound.play();
			this.gotoAndPlay(846);
		}
	}
	this.frame_939 = function() {
		/* import flash.events.MouseEvent;
		import fl.transitions.*;
		import fl.transitions.easing.*;
		*/
		this.stop();
		
		this.channi_click01.addEventListener("click", onChanniClick01.bind(this));
		function onChanniClick01(e){
			console.log("clicked");
			//channelChalni = myBtnChalni.play();
			this.channi_click01.removeEventListener("click", onChanniClick01);
			this.gotoAndPlay(954);	
		}
	}
	this.frame_1005 = function() {
		/* import flash.events.MouseEvent; 
		
		this.channelChalni.stop();
		
		*/
		
		this.stop();
		
		this.chtwo.addEventListener("click", clickTwo.bind(this));
		
		function clickTwo(e){
			console.log("clicked");
			//channelChalni = myBtnChalni.play();
			this.chtwo.removeEventListener("click", clickTwo);
			this.gotoAndPlay(1054);	
		}
	}
	this.frame_1105 = function() {
		/* import flash.events.MouseEvent; */
		
		this.stop();
		
		//this.channelChalni.stop();
		
		this.channi_click03.addEventListener("click", onChanniClick03.bind(this));
		function onChanniClick03(e){
			console.log("clicked");
			//channelChalni = myBtnChalni.play();
			this.channi_click03.removeEventListener("click", onChanniClick03);
			this.gotoAndPlay(1154);	
		}
	}
	this.frame_1206 = function() {
		/* channelChalni.stop();*/
	}
	this.frame_1355 = function() {
		this.stop();
		
		this.sack_click.addEventListener("click", sackClick01.bind(this));
		
		function sackClick01 (e){
			//this.myBtnSound.play();
			//gotoAndPlay("checkpoint_chakki");
			this.sack_click.removeEventListener("click", sackClick01);
			this.play();
		}
	}
	this.frame_1645 = function() {
		//import flash.events.MouseEvent;
		//import fl.transitions.*;
		//import fl.transitions.easing.*;
		//
		this.stop();
		//
		//var clock = setInterval(showRemaining.call(this), 1000);
		//
		var num = 30;
		var rot = 0;
		this.gramsText = 0;
		var aataFlag = 0;
		var musicFlag = 0;
		var chakkiNum = 0;
		var timer_text_str = "";
		var flag = false;
		var flagOnce = false;
		
		var mc2 = this.ground_grams.ground_text;
		var mc1 = this.clock_demo.timer_text;
		var timer;
		var self = this;
		
		function timerDone(){
			console.log("Timer finishing!");
			//this.chakki.removeEventListener("click", onClick);
			//this.chakki.removeEventListener("pressmove", onMove);
			//chakki.removeEventListener(MouseEvent.MOUSE_OUT, onMouseOut);
			//chakki.visible = false;
			mc2.text = self.gramsText + " GMS \n OF ATTA.";
			self.gotoAndPlay("timeup");
			//play();
			//TransitionManager.start(new_loose_aata, {type:Fade, direction:Transition.OUT, duration:2, easing:Strong.easeOut});
			//TransitionManager.start(chakki, {type:Fade, direction:Transition.OUT, duration:2, easing:Strong.easeOut});
		}
		
		
		function updateTime(){	
			num -= 1; 
			timer_text_str = num;
			console.log(mc1.text);
			
			if(num < 10){
				mc1.text = "00:0" + timer_text_str;
			}else{
				mc1.text = "00:" + timer_text_str;
			}
			
			if(num <= 0){
				timer = clearInterval(timer);
				timerDone();
			}
		}
		
		
		this.chakki.addEventListener("click", onClick.bind(this));
		
		function onClick(e){
				if(flagOnce==false){
					timer = setInterval(updateTime, 1000);
					//TransitionManager.start(chakki_arrow, {type:Fade, direction:Transition.OUT, duration:2, easing:Strong.easeOut});
					this.chakki.addEventListener("pressmove", onMove.bind(this));
					//chakki.addEventListener(MouseEvent.MOUSE_OUT, onMouseOut);
					console.log('Start');
					flagOnce = true;
				}
				
				if (musicFlag == 0){
					//myBtnStone.play();
					musicFlag = 1;
				}
		}
		
		//function onMouseOut(e:MouseEvent){
		//	if(musicFlag == 1){
		//		//channelStone.stop();
		//		musicFlag = 0;
		//		trace("test");	
		//	}	
		//}
		
		function onMove(e){
			var dx = e.stageX - this.chakki.x;
			var dy = e.stageY - this.chakki.y;
				
			var angle = Math.atan2(dy, dx);
			var deg = Math.floor(angle * 180 / Math.PI);
				
			if (deg < 0 && deg > -180){
				this.chakki.rotation = deg + 360;
			}else if(deg >= 0 && deg < 180){
				this.chakki.rotation = deg; 
			}
		    
			
			if(deg > 0){
				if(flag==false){
					flag = true;
					chakkiNum += 1
				}
			}
			
			if(deg < 0){
				flag=false;
			}
			
			console.log(chakkiNum);
			
			if (aataFlag == 0){
				
				if (chakkiNum == 8 ){
					this.new_loose_aata.gotoAndPlay("aata1");
					aataFlag = 1;
					this.gramsText = 25;
					this.grams.text = this.gramsText; 
				}
			}
			
			
			if (chakkiNum == 9 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 16 ){
					this.new_loose_aata.gotoAndPlay("aata2");
					aataFlag = 1;
					this.gramsText = 50;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 17 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 24 ){
					this.new_loose_aata.gotoAndPlay("aata3");
					aataFlag = 1;
					this.gramsText = 75;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 25 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 32 ){
					aataFlag = 1;
					this.gramsText = 100;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 33 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 40 ){
					aataFlag = 1;
					this.gramsText = 125;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 41 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 48 ){
					aataFlag = 1;
					this.gramsText = 150;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 49 ){
				aataFlag = 0;
			}
			
			if (aataFlag == 0){
				if (chakkiNum == 56 ){
					aataFlag = 1;
					this.gramsText = 175;
					this.grams.text = this.gramsText;
				}
			}
			
			if (chakkiNum == 57 ){
				aataFlag = 0;
			}	
		}
	}
	this.frame_1671 = function() {
		/* channelStone.stop();*/
	}
	this.frame_1816 = function() {
		this.gotoAndPlay("belan_checkpoint");
	}
	this.frame_1822 = function() {
		this.mod_1.visible=false;
		this.mod_2.visible=false;
		this.mod_3.visible=false;
		this.mod_4.visible=false;
		this.mod_5.visible=false;
		this.mod_6.visible=false;
		this.mod_7.visible=false;
		
		console.log(this.gramsText);
		
		switch((this.gramsText)/25){
			case 1: this.mod_1.visible=true; break;
			case 2: this.mod_1.visible=true; this.mod_2.visible=true; break;
			case 3: this.mod_1.visible=true; this.mod_2.visible=true; this.mod_3.visible=true; break;
			case 4: this.mod_1.visible=true; this.mod_2.visible=true; this.mod_3.visible=true; this.mod_4.visible=true; break;
			case 5: this.mod_1.visible=true; this.mod_2.visible=true; this.mod_3.visible=true; this.mod_4.visible=true; this.mod_5.visible=true; break;
			case 6: this.mod_1.visible=true; this.mod_2.visible=true; this.mod_3.visible=true; this.mod_4.visible=true; this.mod_5.visible=true; this.mod_6.visible=true; break;
			case 7: this.mod_1.visible=true; this.mod_2.visible=true; this.mod_3.visible=true; this.mod_4.visible=true; this.mod_5.visible=true; this.mod_6.visible=true; this.mod_7.visible=true; break;
		}
	}
	this.frame_1970 = function() {
		/*
		import flash.utils.Timer;
		import fl.transitions.*;
		import fl.transitions.easing.*;
		*/
		
		this.stop();
		
		this.modak_plate.addEventListener("click", onModakPlateClick.bind(this));
		
		var num1 = 30;
		var timer_text_str1 = "";
		var modak = false;
		var modak_pos = false;
		var count = 0;
		this.countRoti = 0;
		var clockFlag = false;
		var countFlag = false;
		var timer1;
		var self = this;
		
		var modaks = (this.gramsText)/25;
		this.series02.visible=false;
		this.series03.visible=false;
		
		function onModakPlateClick(e){
			console.log("On Modak Plate Click");
			if (clockFlag==false){
				//myBtnSound.play();
				//clock1.start();
				clockFlag=true;
				//TransitionManager.start(modak_arrow, {type:Fade, direction:Transition.OUT, duration:2, easing:Strong.easeOut});
				timer1 = setInterval(updateTime1, 1000);			
			}
			
			if (countFlag==false){
				this.belan.addEventListener("pressmove", onBelanMove.bind(this));
				console.log("On Belan Move");
				this.countRoti += 1;
				switch(this.countRoti){
					case 1: this.mod_1.visible = false; break;
					case 2: this.mod_2.visible = false; break;
					case 3: this.mod_3.visible = false; break;
					case 4: this.mod_4.visible = false; break;
					case 5: this.mod_5.visible = false; break;
					case 6: this.mod_6.visible = false; break;
					case 7: this.mod_7.visible = false; break;
				}
				this.series01.play();		
				countFlag = true;
			}
			
		}
		
		function onBelanMove(e){
		
			if (countFlag == true){
				var dy = e.stageY;
				
				if(Math.floor(this.belan.y) < 330){
					dy = 330;
				}else if(Math.floor(this.belan.y) > 440){
					dy = 440;
				}else if(Math.floor(this.belan.y) > 345 && Math.floor(this.belan.y) < 350 ){
					if(modak_pos == false){
						count += 1;
						modak_pos = true;
					}
				}else if(Math.floor(this.belan.y) > 420 && Math.floor(this.belan.y) < 430 ){
					if(modak_pos == true){
						count += 1;
						modak_pos = false;
					}
				}	
				
				this.belan.y = dy
				
				console.log(count);
				
				if(count >= 4 ){
					
					this.belan.removeEventListener("pressmove", onBelanMove);
					this.series02.play();
								
					count=0;
					
					if(this.countRoti < modaks){
						countFlag = false;	
					}else{
						//timerDone1();
						console.log("done roti");
					}
					
				}
			}	
		}
		
		function timerDone1(){
			console.log("Timer finishing!");
			self.belan.removeEventListener("pressmove", onBelanMove);
			self.modak_plate.removeEventListener("click", onModakPlateClick);
			self.gotoAndPlay("belan_time_up");
		}
		
		function updateTime1(){	
			num1 -= 1; 
			timer_text_str1 = num1;
			
			if(num1 < 10){
				self.clock_demo1.timer_text1.text = "00:0" + timer_text_str1;
			}else{
				self.clock_demo1.timer_text1.text = "00:" + timer_text_str1;
			}
			
			if(num1 <= 0){
				timer1 = clearInterval(timer1);
				timerDone1();
			}
		}
	}
	this.frame_2315 = function() {
		var rotiCount = exportRoot.countRoti;
		this.mc_roti.roti_text.text = rotiCount;
	}
	this.frame_2423 = function() {
		/* 
		import fl.managers.StyleManager;
		import fl.controls.TextInput;
		import flash.events.Event;
		import flash.events.MouseEvent;
		*/
		
		this.stop();
		
		//var tf:TextFormat = new TextFormat();
		//tf.size = 24;
		//StyleManager.setComponentStyle(TextInput, "textFormat", tf);
		
		//var tf2:TextFormat = new TextFormat();
		//tf2.size = 18;
		//StyleManager.setComponentStyle(TextInput, "textFormat", tf2);
		
		var urlLink = "http://breakfree.in/aashirvaad/";
		var text_name=null;
		var text_mobile=null;
		var text_email=null;
		var message=null;
		var uploadURL=null;
		
		uploadURL = urlLink + "data.php";
		
		function validateEmail(emailAddress){
			             
		    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		     
		    return (mailformat.test(emailAddress));
		}
		
		function validateMobile(phoneNumber){
			
			var phoneno = /^\d{10}$/;  
			var sub = phoneNumber.substr(0, 1);
		    if(sub == '7' || sub == '8' || sub == '9'){
				return (phoneNumber.match(phoneno));
			}else{
				return(false);	
			}
		    
		}
		
		function showResult (event){		 		 
			var result = event.target.data.result;
			if(result == "true"){
				console.log('Done');
				gotoAndPlay("form_complete");
			}
			else{
				console.log('Error');
			}
		}
		    
		var input1 = document.createElement('input');
		
		input1.type = 'text';
		input1.style.position = 'fixed';
		input1.style.left = '850px';
		input1.style.top = '248px';
		input1.style.height = '25px';
		input1.style.width = '250px';
		input1.name = "fitst_name";
		
		document.body.appendChild(input1);
		
		input1.focus();
		
		hasInput = true;
		
		var input2 = document.createElement('input');
		    
		input2.type = 'tel';
		input2.style.position = 'fixed';
		input2.style.left = '850px';
		input2.style.top = '340px';
		input2.style.height = '25px';
		input2.style.width = '250px';
		input2.maxLength = 10;
		input2.name = "telephone";
		
		document.body.appendChild(input2);
		hasInput = true;
		
		var input3 = document.createElement('input');
		    
		input3.type = 'email';
		input3.style.position = 'fixed';
		input3.style.left = '850px';
		input3.style.top = '433px';
		input3.style.height = '25px';
		input3.style.width = '250px';
		input3.name = "email";
		
		
		document.body.appendChild(input3);
		hasInput = true;
		
		var btn = document.createElement('button');
		    
		btn.type = 'submit';
		btn.style.position = 'fixed';
		btn.style.left = '905px';
		btn.style.top = '520px';
		btn.style.height = '50px';
		btn.style.width = '150px';
		btn.style.background = '#FFE216';
		btn.style.color = '#000000';
		btn.style.border = 0;
		btn.name = "submit";
		btn.innerHTML = "SUBMIT";
		btn.style.textAlign = "center";
		document.body.appendChild(btn);
		
		btn.addEventListener("click", onBtnClick);
		
		function onBtnClick(e){
			console.log("Clicked");
			
			text_name = input1.value;
			text_mobile = input2.value;
			text_email = input3.value;
			
			console.log(text_name + " " + text_mobile + " " + text_email);
			
			if(text_name == "" || text_mobile == ""){
				message = "Please enter all fields.";
				exportRoot.error_msg.text = message;
			}else if(validateMobile(text_mobile) == false || text_mobile.length < 10){
				message = "Please enter a valid mobile no.";
				exportRoot.error_msg.text = message;
			}else if( text_email != "" ){
				if(validateEmail(text_email) == false){
					message = "Please enter a valid email address.";
					exportRoot.error_msg.text = message;
				}else{
					message = "";
					exportRoot.error_msg.text = message;			
					
					var http = new XMLHttpRequest();
					var url = uploadURL;
					var params = "systemCall=aashirwad&codeName="+text_name+"&codeMobile="+text_mobile+"&codeEmail="+text_email;
					http.open("POST", url, true);
		
					//Send the proper header information along with the request
					http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
					http.onreadystatechange = function() {//Call a function when the state changes.
						if(http.readyState == 4 && http.status == 200) {
							var result = http.responseText;
							if(result == "true"){
								console.log('Done');
								document.body.removeChild(input1);
								document.body.removeChild(input2);
								document.body.removeChild(input3);
								document.body.removeChild(btn);
								exportRoot.gotoAndPlay("form_complete");
							}
							else{
								console.log('Error');
							}
						}
					}
					http.send(params);
				}
			}else{
				message = "";
				exportRoot.error_msg.text = message;
				
				var http1 = new XMLHttpRequest();
					var url1 = uploadURL;
					var params1 = "systemCall=aashirwad&codeName="+text_name+"&codeMobile="+text_mobile+"&codeEmail="+text_email;
					http1.open("POST", url1, true);
		
					//Send the proper header information along with the request
					http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
					http1.onreadystatechange = function() {//Call a function when the state changes.
						if(http1.readyState == 4 && http1.status == 200) {
							var result1 = http1.responseText.search("true");
							
							if(result1 != 0){
								console.log('Done');
								document.body.removeChild(input1);
								document.body.removeChild(input2);
								document.body.removeChild(input3);
								document.body.removeChild(btn);
								exportRoot.gotoAndPlay("form_complete");
							}
							else{
								console.log('Error');
							}
						}
					}
					http1.send(params1);
			}
		}
	}
	this.frame_2484 = function() {
		this.stop();
		
		var urlLink1 = "http://breakfree.in/aashirvaad/";
		var uploadURL1=null;
		var result1=null;
		
		this.flip_btn1.addEventListener("click", myFlipBtn.bind(this));
		
		//trace(MovieClip(root).text_name + ' ' + MovieClip(root).text_mobile + ' ' + countRoti + ' ' + MovieClip(root).text_email);
		
		function myFlipBtn (e){
			console.log("Flipped");
			console.log(exportRoot.rotiCount);
			this.flip_btn1.visible = false;
			//myBtnSound.play();
			this.coin.gotoAndPlay(2);
			
			var codeRoti = (exportRoot.rotiCount == 0)?1:exportRoot.rotiCount;
			
			uploadURL1 = urlLink1 + "email.php";
				
			var http1 = new XMLHttpRequest();
			var url1 = uploadURL1;
			var params1 = "systemCall1=aashirwad&code1Name="+exportRoot.text_name+"&code1Mobile="+exportRoot.text_mobile+"&code1Email="+exportRoot.text_email+"&code1Roti="+codeRoti;
			http1.open("POST", url1, true);
		
			//Send the proper header information along with the request
			http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
			http1.onreadystatechange = function() {//Call a function when the state changes.
				if(http1.readyState == 4 && http1.status == 200) {
					result11 = http1.responseText.search("1");
					if(result11 > 0)
						result1 = "1";
					
					result = http1.responseText.search("0");
					if(result12 > 0)
						result1 = "0";
					
					console.log(result1 + " " + http1.responseText)
				}
			}
			http1.send(params1);
		}
	}
	this.frame_2545 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(559).call(this.frame_649).wait(125).call(this.frame_774).wait(165).call(this.frame_939).wait(66).call(this.frame_1005).wait(100).call(this.frame_1105).wait(101).call(this.frame_1206).wait(149).call(this.frame_1355).wait(290).call(this.frame_1645).wait(26).call(this.frame_1671).wait(145).call(this.frame_1816).wait(6).call(this.frame_1822).wait(148).call(this.frame_1970).wait(345).call(this.frame_2315).wait(108).call(this.frame_2423).wait(61).call(this.frame_2484).wait(61).call(this.frame_2545).wait(625));

	// ITC LOGO
	this.instance = new lib.itclogo();
	this.instance.setTransform(59,58.3,0.322,0.322);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({alpha:1},14).to({_off:true},2626).wait(470));

	// LOGO
	this.logo = new lib.LOGO();
	this.logo.setTransform(794.5,436.2,1.672,1.672,0,0,0,98.2,33.7);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).to({scaleX:1.91,scaleY:1.91,x:816.1,y:441.3,alpha:1},10).wait(50).to({regY:33.8,scaleX:0.85,scaleY:0.85,x:1175.4,y:734.8},14,cjs.Ease.get(1)).wait(165).to({_off:true},2461).wait(470));

	// Layer 36
	this.instance_1 = new lib.Symbol86();
	this.instance_1.setTransform(1152.7,382.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2468).to({_off:false},0).to({x:1062.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},170).wait(521));

	// error_text
	this.error_msg = new cjs.Text("", "18px 'Arial'", "#FFE216");
	this.error_msg.name = "error_msg";
	this.error_msg.textAlign = "center";
	this.error_msg.lineHeight = 20;
	this.error_msg.lineWidth = 406;
	this.error_msg.setTransform(1013.2,590.6);
	this.error_msg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.error_msg).wait(2423).to({_off:false},0).to({_off:true},16).wait(731));

	// btn
	this.btn_submit = new lib.Symbol97();
	this.btn_submit.setTransform(1012.2,542.1);
	this.btn_submit.alpha = 0;
	this.btn_submit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_submit).wait(2408).to({_off:false},0).to({_off:true},10).wait(21).to({_off:false,alpha:1},0).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(721));

	// Layer 25
	this.instance_2 = new lib.Symbol52();
	this.instance_2.setTransform(759.8,358);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2408).to({_off:false},0).to({alpha:1},10).wait(21).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(721));

	// Layer 24
	this.instance_3 = new lib.Symbol51();
	this.instance_3.setTransform(1097.6,435.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2323).to({_off:false},0).to({x:1097.7,y:364.3,alpha:1},8,cjs.Ease.get(1)).wait(50).to({y:428.3},0).to({x:1097.6,y:251.4,alpha:0},10).to({_off:true},1).wait(778));

	// text-on-text
	this.mc_roti = new lib.Symbol116();
	this.mc_roti.setTransform(1022.3,118.5);
	this.mc_roti._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_roti).wait(2315).to({_off:false},0).wait(66).to({x:1016.3,y:124.5},0).to({x:1028.3,y:112.5},10).to({_off:true},1).wait(778));

	// text
	this.instance_4 = new lib.Tween69("synched",0);
	this.instance_4.setTransform(1010.7,370.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2310).to({_off:false},0).to({y:378.3,alpha:1},13,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({y:370.8,alpha:0},10).to({_off:true},58).wait(721));

	// confetti
	this.confetti = new lib.Symbol88();
	this.confetti.setTransform(407.1,422.3);
	this.confetti._off = true;

	this.timeline.addTween(cjs.Tween.get(this.confetti).wait(2484).to({_off:false},0).to({_off:true},171).wait(515));

	// logo
	this.flip_btn1 = new lib.Symbol50();
	this.flip_btn1.setTransform(410.9,390.7,0.745,0.745);
	this.flip_btn1.alpha = 0;
	this.flip_btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flip_btn1).wait(2297).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(0.83)).wait(81).to({scaleX:0.87,scaleY:0.87},8).to({x:341.4},9).wait(40).to({x:410.9},10).to({scaleX:1,scaleY:1},10).wait(16).to({_off:true},165).wait(521));

	// COIN
	this.coin = new lib.coin_mov();
	this.coin.setTransform(-348.7,-62.8,1.172,1.158);
	this.coin._off = true;

	this.timeline.addTween(cjs.Tween.get(this.coin).wait(2484).to({_off:false},0).to({_off:true},171).wait(515));

	// Layer 35
	this.instance_5 = new lib.Symbol84();
	this.instance_5.setTransform(1098.3,-32.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2297).to({_off:false},0).to({y:183.5,alpha:1},13,cjs.Ease.get(1)).wait(71).to({y:35.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},118).wait(661));

	// Layer 14
	this.instance_6 = new lib.Symbol46();
	this.instance_6.setTransform(1098.6,128.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2257).to({_off:false},0).to({y:138,alpha:1},11).wait(18).to({y:128.2,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(872));

	// Layer 13
	this.instance_7 = new lib.Symbol45();
	this.instance_7.setTransform(1099.3,43.2,0.773,1,0,0,0,0,-0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2246).to({_off:false},0).to({y:104.7,alpha:1},11,cjs.Ease.get(1)).wait(29).to({y:43.2,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(872));

	// TIMER
	this.clock_demo1 = new lib.Symbol57();
	this.clock_demo1.setTransform(1095.9,100.8);
	this.clock_demo1.alpha = 0;
	this.clock_demo1._off = true;

	this.instance_8 = new lib.Symbol44();
	this.instance_8.setTransform(1095.9,100.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock_demo1).wait(1960).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).to({_off:true},316).wait(884));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2286).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(872));

	// belni
	this.belan = new lib.Symbol11();
	this.belan.setTransform(1220.3,388.8,0.813,0.812);
	this.belan.alpha = 0;
	this.belan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.belan).wait(1898).to({_off:false},0).to({x:604.3,alpha:1},10).wait(378).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(872));

	// hide-belan
	this.hide_belan = new lib.Symbol96();
	this.hide_belan.setTransform(606.1,319.8,1,1,0,180,0);
	this.hide_belan.alpha = 0;

	this.show_belan = new lib.Symbol96();
	this.show_belan.setTransform(606.1,470.6);
	this.show_belan.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show_belan},{t:this.hide_belan}]},1970).to({state:[]},13).to({state:[]},635).wait(552));

	// new-plate
	this.series03 = new lib.Symbol95();
	this.series03.setTransform(638.6,398.6);
	this.series03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.series03).wait(1970).to({_off:false},0).to({_off:true},51).wait(1149));

	// new-modak
	this.series01 = new lib.Symbol94();
	this.series01.setTransform(636,400);
	this.series01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.series01).wait(1970).to({_off:false},0).to({_off:true},15).wait(1185));

	// new-rotikachha
	this.series02 = new lib.Symbol93();
	this.series02.setTransform(640.2,396.7);
	this.series02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.series02).wait(1970).to({_off:false},0).to({_off:true},57).wait(1143));

	// stove
	this.instance_9 = new lib.Symbol15();
	this.instance_9.setTransform(1346.5,297.2,0.338,0.353,0,0,0,-86.3,-87.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1898).to({_off:false},0).to({x:904,alpha:1},10,cjs.Ease.get(0.99)).wait(378).to({alpha:0},11).wait(40).to({regX:-88,regY:-84.5,scaleX:0.55,scaleY:0.57,x:184.9,y:250.2,alpha:1},0).to({alpha:0},11).to({_off:true},14).wait(808));

	// Layer 33
	this.instance_10 = new lib.Symbol83();
	this.instance_10.setTransform(1098.1,110.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1928).to({_off:false},0).wait(32).to({y:97.1,alpha:0},10,cjs.Ease.get(1)).to({_off:true},648).wait(552));

	// textbg
	this.instance_11 = new lib.Symbol82();
	this.instance_11.setTransform(1099.3,-198.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1918).to({_off:false},0).to({y:-103.2,alpha:1},10).wait(32).to({y:-128.7,alpha:0},10,cjs.Ease.get(1)).to({_off:true},648).wait(552));

	// arrow
	this.modak_arrow = new lib.Symbol98();
	this.modak_arrow.setTransform(412.4,629.7);
	this.modak_arrow._off = true;

	this.modak_arrow_1 = new lib.Symbol99();
	this.modak_arrow_1.setTransform(412.4,629.7);
	this.modak_arrow_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.modak_arrow).wait(1908).to({_off:false},0).to({_off:true},10).wait(1252));
	this.timeline.addTween(cjs.Tween.get(this.modak_arrow_1).wait(1908).to({_off:false},10).wait(42).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(1199));

	// singlemodak7
	this.mod_6 = new lib.Symbol114();
	this.mod_6.setTransform(673.9,364.6);
	this.mod_6.alpha = 0;
	this.mod_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_6).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:199.7,y:338.2},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak6
	this.mod_3 = new lib.Symbol114();
	this.mod_3.setTransform(732.4,387.1);
	this.mod_3.alpha = 0;
	this.mod_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_3).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:245.4,y:359.7},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak5
	this.mod_2 = new lib.Symbol112();
	this.mod_2.setTransform(627.3,405.3);
	this.mod_2.alpha = 0;
	this.mod_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_2).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:153.1,y:363.3},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak4
	this.mod_1 = new lib.Symbol111();
	this.mod_1.setTransform(687.1,430);
	this.mod_1.alpha = 0;
	this.mod_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_1).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:202.1,y:388},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak3
	this.mod_4 = new lib.Symbol108();
	this.mod_4.setTransform(739.8,458);
	this.mod_4.alpha = 0;
	this.mod_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_4).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:244.8,y:414.1},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak2
	this.mod_5 = new lib.Symbol109();
	this.mod_5.setTransform(632.7,464.2);
	this.mod_5.alpha = 0;
	this.mod_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_5).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:155.7,y:418.2},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// singlemodak1
	this.mod_7 = new lib.Symbol110();
	this.mod_7.setTransform(683.4,498.1);
	this.mod_7.alpha = 0;
	this.mod_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mod_7).wait(1817).to({_off:false},0).to({alpha:1},10).wait(71).to({scaleX:0.72,scaleY:0.72,x:203.4,y:441.1},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},511).wait(363));

	// modakplate
	this.modak_plate = new lib.Symbol56();
	this.modak_plate.setTransform(1583.9,1133.5,7.424,7.424);
	this.modak_plate.alpha = 0;
	this.modak_plate._off = true;

	this.timeline.addTween(cjs.Tween.get(this.modak_plate).wait(1817).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(71).to({scaleX:5.66,scaleY:5.66,x:880.8,y:926.1},9,cjs.Ease.get(0.95)).wait(378).to({alpha:0},11).to({_off:true},19).wait(855));

	// chakla
	this.instance_12 = new lib.Symbol10();
	this.instance_12.setTransform(1053.9,390.5,0.814,0.814);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1898).to({_off:false},0).to({x:602.5,y:405,alpha:1},9,cjs.Ease.get(0.82)).wait(378).to({alpha:0},11).to({_off:true},19).wait(855));

	// packshot
	this.instance_13 = new lib.Symbol76();
	this.instance_13.setTransform(253.1,429.1,0.953,0.953);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1817).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(71).to({scaleX:1,scaleY:1,x:347.3,alpha:0},9,cjs.Ease.get(1)).to({_off:true},710).wait(553));

	// Layer 28
	this.instance_14 = new lib.Symbol78();
	this.instance_14.setTransform(1099.4,167.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1827).to({_off:false},0).to({y:183.9,alpha:1},9,cjs.Ease.get(1)).wait(51).to({y:167.9,alpha:0},11,cjs.Ease.get(1)).to({_off:true},720).wait(552));

	// Layer 23
	this.instance_15 = new lib.Symbol77();
	this.instance_15.setTransform(1099.4,-65.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1827).to({_off:false},0).to({y:97.9,alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},11,cjs.Ease.get(0.98)).to({_off:true},720).wait(552));

	// time-up
	this.instance_16 = new lib.Symbol42();
	this.instance_16.setTransform(1097.8,127.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1666).to({_off:false},0).to({y:144.1,alpha:1},11).wait(42).to({alpha:0},11).to({_off:true},1).wait(1439));

	// TEXT30
	this.ground_grams = new lib.Symbol36();
	this.ground_grams.setTransform(1097.8,244.1);
	this.ground_grams.alpha = 0;
	this.ground_grams._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ground_grams).wait(1640).to({_off:false},0).wait(121).to({y:174.6},0).to({alpha:1},12,cjs.Ease.get(1)).wait(34).to({alpha:0},9).to({_off:true},1).wait(1353));

	// TEXT
	this.instance_17 = new lib.Tween3("synched",0);
	this.instance_17.setTransform(1097.8,333);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1750).to({_off:false},0).to({y:172,alpha:1},11,cjs.Ease.get(0.98)).wait(46).to({startPosition:0},0).to({y:153,alpha:0},9).to({_off:true},1).wait(1353));

	// TIME
	this.clock_demo = new lib.Symbol8();
	this.clock_demo.setTransform(1097.8,100.8);
	this.clock_demo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock_demo).wait(1645).to({_off:false},0).wait(21).to({alpha:0},11).wait(97).to({alpha:1},0).to({alpha:0},11).wait(31).to({_off:true},1).wait(1353));

	// MOV
	this.instance_18 = new lib.MOV1();
	this.instance_18.setTransform(640,400);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1381).to({_off:false},0).wait(50).to({_off:true},1).wait(1738));

	// Layer 34
	this.instance_19 = new lib.Symbol70();
	this.instance_19.setTransform(1097.8,115.3);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1574).to({_off:false},0).to({y:131.8,alpha:1},11).wait(45).to({alpha:0},10).wait(176).to({_off:true},1).wait(1353));

	// CHAKKI
	this.chakki = new lib.Symbol1_1();
	this.chakki.setTransform(567.8,464.5);
	this.chakki.alpha = 0;
	this.chakki._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chakki).wait(1370).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(426).to({alpha:0},9).to({_off:true},1).wait(1353));

	// text_grams
	this.text = new cjs.Text("\n\n\ngrams", "80px 'Arial'", "#FFE216");
	this.text.lineHeight = 82;
	this.text.lineWidth = 234;
	this.text.setTransform(52,197.9);

	this.grams = new cjs.Text("0", "80px 'Arial'", "#FFE216");
	this.grams.name = "grams";
	this.grams.lineHeight = 82;
	this.grams.lineWidth = 348;
	this.grams.setTransform(52,369.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.grams},{t:this.text}]},1645).to({state:[]},112).to({state:[]},1032).wait(381));

	// new_loose aata
	this.new_loose_aata = new lib.Symbol91();
	this.new_loose_aata.setTransform(625.2,385);
	this.new_loose_aata._off = true;

	this.timeline.addTween(cjs.Tween.get(this.new_loose_aata).wait(1592).to({_off:false},0).wait(165).to({alpha:0},10).to({_off:true},1).wait(1402));

	// btn_churn
	this.instance_20 = new lib.Symbol69();
	this.instance_20.setTransform(1025.9,467.2,1,1,0,0,0,0.3,0);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1433).to({_off:false},0).to({x:953.7,alpha:1},10,cjs.Ease.get(1)).wait(47).to({alpha:0},16,cjs.Ease.get(1)).to({_off:true},2).wait(1662));

	// TEXT
	this.instance_21 = new lib.Tween55("synched",0);
	this.instance_21.setTransform(1097.8,104.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1506).to({_off:false},0).to({y:188.8,alpha:1},11,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({y:130.9,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(1595));

	// MULTITEXTBG
	this.instance_22 = new lib.textbg_1();
	this.instance_22.setTransform(1097.8,-65.8);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween79("synched",0);
	this.instance_23.setTransform(1097.8,46.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1506).to({_off:false},0).to({y:15.7,alpha:1},11,cjs.Ease.get(0.99)).wait(113).to({y:-24.3,alpha:0},10,cjs.Ease.get(1)).wait(26).to({y:-4.3,alpha:1},11).wait(43).to({alpha:0},11).wait(13).to({y:-96.3},0).to({_off:true,y:46.2,alpha:1,mode:"synched",startPosition:0},11).wait(1415));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1744).to({_off:false},11).wait(52).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(1353));

	// Layer 31
	this.instance_24 = new lib.Symbol68();
	this.instance_24.setTransform(980.7,347.8);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1301).to({_off:false},0).to({x:914.7,alpha:1},11,cjs.Ease.get(0.99)).wait(32).to({alpha:0},11).to({_off:true},16).wait(1799));

	// TEXT1
	this.instance_25 = new lib.Symbol31();
	this.instance_25.setTransform(1098.1,228.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1240).to({_off:false},0).to({y:273.9,alpha:1},10,cjs.Ease.get(1)).wait(51).to({y:230.4,alpha:0},11,cjs.Ease.get(0.99)).to({_off:true},1).wait(1857));

	// Layer 7
	this.instance_26 = new lib.Symbol30();
	this.instance_26.setTransform(1097.8,-108.6);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1230).to({_off:false},0).to({y:-48.4,alpha:1},10,cjs.Ease.get(1)).wait(61).to({y:-142.4,alpha:0},11,cjs.Ease.get(0.98)).to({_off:true},1).wait(1857));

	// Layer 27
	this.btn_choose = new lib.Symbol64();
	this.btn_choose.setTransform(805.1,547.1,0.765,0.765);
	this.btn_choose._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_choose).wait(774).to({_off:false},0).to({_off:true},1).wait(2395));

	// Layer 6
	this.sack_click = new lib.Symbol29();
	this.sack_click.setTransform(485.3,651,1,1,0,0,0,0,0.2);
	this.sack_click._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sack_click).wait(1230).to({_off:false},0).to({regX:0.1,scaleX:1.45,scaleY:1.45,x:455.1,y:506.6},14).wait(115).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(1799));

	// Layer 12
	this.instance_27 = new lib.Symbol75();
	this.instance_27.setTransform(488.8,-7.8);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(847).to({_off:false},0).to({alpha:1},8).wait(39).to({alpha:0},11).to({_off:true},519).wait(1746));

	// hrains_mov
	this.sack_grains = new lib.Symbol63();
	this.sack_grains.setTransform(590.7,560.5);
	this.sack_grains.alpha = 0;
	this.sack_grains._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sack_grains).wait(724).to({_off:false},0).to({alpha:1},50).wait(71).to({alpha:0},9).to({_off:true},577).wait(1739));

	// MOV
	this.instance_28 = new lib.grains1();
	this.instance_28.setTransform(570.3,311.4,0.667,0.779);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(724).to({_off:false},0).wait(48).to({_off:true},1).wait(2397));

	// 3_chalnimask copy 2
	this.channi_click03 = new lib._1_chalninask();
	this.channi_click03.setTransform(662.1,608.2,0.117,0.117);
	this.channi_click03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.channi_click03).wait(855).to({_off:false},0).wait(250).to({_off:true},1).wait(48).to({_off:false,x:662.4},0).to({x:702.4},5).to({x:662.4},5).to({x:702.4},5).to({x:662.4},5).to({x:702.4},5).to({x:662.4},5).to({x:702.4},5).to({x:662.4},5).wait(10).to({x:662.1},0).wait(26).to({x:662.4,y:610.1,alpha:0},14,cjs.Ease.get(1)).to({_off:true},67).wait(1859));

	// Layer 5
	this.instance_29 = new lib.Symbol28();
	this.instance_29.setTransform(688.9,709.3);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1174).to({_off:false},0).to({alpha:1},30).wait(26).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},67).wait(1859));

	// 3_grainstack copy 2
	this.instance_30 = new lib.Symbol24();
	this.instance_30.setTransform(747,604.1,1.297,1.297);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1086).to({_off:false},0).to({alpha:1},18).wait(50).to({x:790.5},5).to({x:747},5).to({x:790.5},5).to({x:747},5).to({x:790.5},5).to({x:747,y:604.2,alpha:0.66},5).to({x:790.5,y:604.1,alpha:1},5).to({x:747,y:604.2,alpha:0.328},5).to({y:604.1,alpha:0},10).to({_off:true},1).wait(1965));

	// Layer 11
	this.instance_31 = new lib.Symbol58();
	this.instance_31.setTransform(1081.7,67.6);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(905).to({_off:false},0).to({x:957.2,y:206.5,alpha:1},10,cjs.Ease.get(1)).wait(290).to({x:1081.7,y:134.4},0).to({y:152.6,alpha:0},10,cjs.Ease.get(1)).wait(15).to({x:1064.7},0).wait(14).to({_off:true},179).wait(1747));

	// Layer 9
	this.instance_32 = new lib.arrow();
	this.instance_32.setTransform(608.6,469.3);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(893).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(14).to({_off:true},23).wait(2230));

	// 3_anim_mask copy 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1154 = new cjs.Graphics().p("Aj9LaIiggmIiHg2QhKgUgygJQgWgEgsgZIg0geQgxgdg5g2Ig9g7IgbgcIhXn0IBPnOIAeAFIAcAFICQA4IDaAcIDIAKICxgBICdgHICTgKIC3gSIDJgxICOguIBzg8IBjhHIB6CwIAcAtIAeBbIASCEQgCANARAtQAPAqgIAeQgCAHgGAvQgEAhgHAFQgGAEgFA2QgGA6gOAZQgOAYgKC+QgKC0giAiQhFBDgxAQQgoANgvAOQgwAOgLACIg6AZQg8AagqAHQgLABhMAXQgyAPg+gDQglgChdAFQhcAFgrgDIisAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1154).to({graphics:mask_graphics_1154,x:686.9,y:702.5}).wait(2016));

	// 3_anim copy 3
	this.instance_33 = new lib.FINALGRAINS2_00100();
	this.instance_33.setTransform(128,120);

	this.instance_34 = new lib.FINALGRAINS2_00101();
	this.instance_34.setTransform(128,120);

	this.instance_35 = new lib.FINALGRAINS2_00102();
	this.instance_35.setTransform(128,120);

	this.instance_36 = new lib.FINALGRAINS2_00103();
	this.instance_36.setTransform(128,120);

	this.instance_37 = new lib.FINALGRAINS2_00104();
	this.instance_37.setTransform(128,120);

	this.instance_38 = new lib.FINALGRAINS2_00105();
	this.instance_38.setTransform(128,120);

	this.instance_39 = new lib.FINALGRAINS2_00106();
	this.instance_39.setTransform(128,120);

	this.instance_40 = new lib.FINALGRAINS2_00107();
	this.instance_40.setTransform(128,120);

	this.instance_41 = new lib.FINALGRAINS2_00108();
	this.instance_41.setTransform(128,120);

	this.instance_42 = new lib.FINALGRAINS2_00109();
	this.instance_42.setTransform(128,120);

	this.instance_43 = new lib.FINALGRAINS2_00110();
	this.instance_43.setTransform(128,120);

	this.instance_44 = new lib.FINALGRAINS2_00111();
	this.instance_44.setTransform(128,120);

	this.instance_45 = new lib.FINALGRAINS2_00112();
	this.instance_45.setTransform(128,120);

	this.instance_46 = new lib.FINALGRAINS2_00113();
	this.instance_46.setTransform(128,120);

	this.instance_47 = new lib.FINALGRAINS2_00114();
	this.instance_47.setTransform(128,120);

	this.instance_48 = new lib.FINALGRAINS2_00115();
	this.instance_48.setTransform(128,120);

	this.instance_49 = new lib.FINALGRAINS2_00116();
	this.instance_49.setTransform(128,120);

	this.instance_50 = new lib.FINALGRAINS2_00117();
	this.instance_50.setTransform(128,120);

	this.instance_51 = new lib.FINALGRAINS2_00118();
	this.instance_51.setTransform(128,120);

	this.instance_52 = new lib.FINALGRAINS2_00119();
	this.instance_52.setTransform(128,120);

	this.instance_53 = new lib.FINALGRAINS2_00120();
	this.instance_53.setTransform(128,120);

	this.instance_54 = new lib.FINALGRAINS2_00121();
	this.instance_54.setTransform(128,120);

	this.instance_55 = new lib.FINALGRAINS2_00122();
	this.instance_55.setTransform(128,120);

	this.instance_56 = new lib.FINALGRAINS2_00123();
	this.instance_56.setTransform(128,120);

	this.instance_57 = new lib.FINALGRAINS2_00124();
	this.instance_57.setTransform(128,120);

	this.instance_58 = new lib.FINALGRAINS2_00125();
	this.instance_58.setTransform(128,120);

	this.instance_59 = new lib.FINALGRAINS2_00126();
	this.instance_59.setTransform(128,120);

	this.instance_60 = new lib.FINALGRAINS2_00127();
	this.instance_60.setTransform(128,120);

	this.instance_61 = new lib.FINALGRAINS2_00128();
	this.instance_61.setTransform(128,120);

	this.instance_62 = new lib.FINALGRAINS2_00129();
	this.instance_62.setTransform(128,120);

	this.instance_63 = new lib.FINALGRAINS2_00130();
	this.instance_63.setTransform(128,120);

	this.instance_64 = new lib.FINALGRAINS2_00131();
	this.instance_64.setTransform(128,120);

	this.instance_65 = new lib.FINALGRAINS2_00132();
	this.instance_65.setTransform(128,120);

	this.instance_66 = new lib.FINALGRAINS2_00133();
	this.instance_66.setTransform(128,120);

	this.instance_67 = new lib.FINALGRAINS2_00134();
	this.instance_67.setTransform(128,120);

	this.instance_68 = new lib.FINALGRAINS2_00135();
	this.instance_68.setTransform(128,120);

	this.instance_69 = new lib.FINALGRAINS2_00136();
	this.instance_69.setTransform(128,120);

	this.instance_70 = new lib.FINALGRAINS2_00137();
	this.instance_70.setTransform(128,120);

	this.instance_71 = new lib.FINALGRAINS2_00138();
	this.instance_71.setTransform(128,120);

	this.instance_72 = new lib.FINALGRAINS2_00139();
	this.instance_72.setTransform(128,120);

	this.instance_73 = new lib.FINALGRAINS2_00140();
	this.instance_73.setTransform(128,120);

	this.instance_74 = new lib.FINALGRAINS2_00141();
	this.instance_74.setTransform(128,120);

	this.instance_75 = new lib.FINALGRAINS2_00142();
	this.instance_75.setTransform(128,120);

	this.instance_76 = new lib.FINALGRAINS2_00143();
	this.instance_76.setTransform(128,120);

	this.instance_77 = new lib.FINALGRAINS2_00144();
	this.instance_77.setTransform(128,120);

	this.instance_78 = new lib.FINALGRAINS2_00145();
	this.instance_78.setTransform(128,120);

	this.instance_79 = new lib.FINALGRAINS2_00146();
	this.instance_79.setTransform(128,120);

	this.instance_80 = new lib.FINALGRAINS2_00147();
	this.instance_80.setTransform(128,120);

	this.instance_81 = new lib.FINALGRAINS2_00148();
	this.instance_81.setTransform(128,120);

	this.instance_82 = new lib.FINALGRAINS2_00149();
	this.instance_82.setTransform(128,120);

	this.instance_83 = new lib.FINALGRAINS2_00150();
	this.instance_83.setTransform(128,120);

	this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},1154).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[]},1).wait(1965));

	// 3_anim_mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1054 = new cjs.Graphics().p("ArwM8QmwhBgYgOQgXgOhfjVIhZjTIBKptICFkSIACggIABiGICQAoIDbAhIDIANICxAAICdgFICUgKIC1gYICZghICggwICSg5IBYgwIJbGgICjFGIBSFMIgWD1QjmDPg7AmQgsAcjuBXQjtBXgtAGQg8AHsmAAQjTgdjYghg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1054).to({graphics:mask_1_graphics_1054,x:662.5,y:544.7}).wait(2116));

	// 3_anim copy 2
	this.instance_84 = new lib.FINALGRAINS2_00100();
	this.instance_84.setTransform(108,0);

	this.instance_85 = new lib.FINALGRAINS2_00101();
	this.instance_85.setTransform(108,0);

	this.instance_86 = new lib.FINALGRAINS2_00102();
	this.instance_86.setTransform(108,0);

	this.instance_87 = new lib.FINALGRAINS2_00103();
	this.instance_87.setTransform(108,0);

	this.instance_88 = new lib.FINALGRAINS2_00104();
	this.instance_88.setTransform(108,0);

	this.instance_89 = new lib.FINALGRAINS2_00105();
	this.instance_89.setTransform(108,0);

	this.instance_90 = new lib.FINALGRAINS2_00106();
	this.instance_90.setTransform(108,0);

	this.instance_91 = new lib.FINALGRAINS2_00107();
	this.instance_91.setTransform(108,0);

	this.instance_92 = new lib.FINALGRAINS2_00108();
	this.instance_92.setTransform(108,0);

	this.instance_93 = new lib.FINALGRAINS2_00109();
	this.instance_93.setTransform(108,0);

	this.instance_94 = new lib.FINALGRAINS2_00110();
	this.instance_94.setTransform(108,0);

	this.instance_95 = new lib.FINALGRAINS2_00111();
	this.instance_95.setTransform(108,0);

	this.instance_96 = new lib.FINALGRAINS2_00112();
	this.instance_96.setTransform(108,0);

	this.instance_97 = new lib.FINALGRAINS2_00113();
	this.instance_97.setTransform(108,0);

	this.instance_98 = new lib.FINALGRAINS2_00114();
	this.instance_98.setTransform(108,0);

	this.instance_99 = new lib.FINALGRAINS2_00115();
	this.instance_99.setTransform(108,0);

	this.instance_100 = new lib.FINALGRAINS2_00116();
	this.instance_100.setTransform(108,0);

	this.instance_101 = new lib.FINALGRAINS2_00117();
	this.instance_101.setTransform(108,0);

	this.instance_102 = new lib.FINALGRAINS2_00118();
	this.instance_102.setTransform(108,0);

	this.instance_103 = new lib.FINALGRAINS2_00119();
	this.instance_103.setTransform(108,0);

	this.instance_104 = new lib.FINALGRAINS2_00120();
	this.instance_104.setTransform(108,0);

	this.instance_105 = new lib.FINALGRAINS2_00121();
	this.instance_105.setTransform(108,0);

	this.instance_106 = new lib.FINALGRAINS2_00122();
	this.instance_106.setTransform(108,0);

	this.instance_107 = new lib.FINALGRAINS2_00123();
	this.instance_107.setTransform(108,0);

	this.instance_108 = new lib.FINALGRAINS2_00124();
	this.instance_108.setTransform(108,0);

	this.instance_109 = new lib.FINALGRAINS2_00125();
	this.instance_109.setTransform(108,0);

	this.instance_110 = new lib.FINALGRAINS2_00126();
	this.instance_110.setTransform(108,0);

	this.instance_111 = new lib.FINALGRAINS2_00127();
	this.instance_111.setTransform(108,0);

	this.instance_112 = new lib.FINALGRAINS2_00128();
	this.instance_112.setTransform(108,0);

	this.instance_113 = new lib.FINALGRAINS2_00129();
	this.instance_113.setTransform(108,0);

	this.instance_114 = new lib.FINALGRAINS2_00130();
	this.instance_114.setTransform(108,0);

	this.instance_115 = new lib.FINALGRAINS2_00131();
	this.instance_115.setTransform(108,0);

	this.instance_116 = new lib.FINALGRAINS2_00132();
	this.instance_116.setTransform(108,0);

	this.instance_117 = new lib.FINALGRAINS2_00133();
	this.instance_117.setTransform(108,0);

	this.instance_118 = new lib.FINALGRAINS2_00134();
	this.instance_118.setTransform(108,0);

	this.instance_119 = new lib.FINALGRAINS2_00135();
	this.instance_119.setTransform(108,0);

	this.instance_120 = new lib.FINALGRAINS2_00136();
	this.instance_120.setTransform(108,0);

	this.instance_121 = new lib.FINALGRAINS2_00137();
	this.instance_121.setTransform(108,0);

	this.instance_122 = new lib.FINALGRAINS2_00138();
	this.instance_122.setTransform(108,0);

	this.instance_123 = new lib.FINALGRAINS2_00139();
	this.instance_123.setTransform(108,0);

	this.instance_124 = new lib.FINALGRAINS2_00140();
	this.instance_124.setTransform(108,0);

	this.instance_125 = new lib.FINALGRAINS2_00141();
	this.instance_125.setTransform(108,0);

	this.instance_126 = new lib.FINALGRAINS2_00142();
	this.instance_126.setTransform(108,0);

	this.instance_127 = new lib.FINALGRAINS2_00143();
	this.instance_127.setTransform(108,0);

	this.instance_128 = new lib.FINALGRAINS2_00144();
	this.instance_128.setTransform(108,0);

	this.instance_129 = new lib.FINALGRAINS2_00145();
	this.instance_129.setTransform(108,0);

	this.instance_130 = new lib.FINALGRAINS2_00146();
	this.instance_130.setTransform(108,0);

	this.instance_131 = new lib.FINALGRAINS2_00147();
	this.instance_131.setTransform(108,0);

	this.instance_132 = new lib.FINALGRAINS2_00148();
	this.instance_132.setTransform(108,0);

	this.instance_133 = new lib.FINALGRAINS2_00149();
	this.instance_133.setTransform(108,0);

	this.instance_134 = new lib.FINALGRAINS2_00150();
	this.instance_134.setTransform(108,0);

	this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.instance_92.mask = this.instance_93.mask = this.instance_94.mask = this.instance_95.mask = this.instance_96.mask = this.instance_97.mask = this.instance_98.mask = this.instance_99.mask = this.instance_100.mask = this.instance_101.mask = this.instance_102.mask = this.instance_103.mask = this.instance_104.mask = this.instance_105.mask = this.instance_106.mask = this.instance_107.mask = this.instance_108.mask = this.instance_109.mask = this.instance_110.mask = this.instance_111.mask = this.instance_112.mask = this.instance_113.mask = this.instance_114.mask = this.instance_115.mask = this.instance_116.mask = this.instance_117.mask = this.instance_118.mask = this.instance_119.mask = this.instance_120.mask = this.instance_121.mask = this.instance_122.mask = this.instance_123.mask = this.instance_124.mask = this.instance_125.mask = this.instance_126.mask = this.instance_127.mask = this.instance_128.mask = this.instance_129.mask = this.instance_130.mask = this.instance_131.mask = this.instance_132.mask = this.instance_133.mask = this.instance_134.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_84}]},1054).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[]},1).wait(2065));

	// 3_chalni copy 2
	this.instance_135 = new lib._1_chalni();
	this.instance_135.setTransform(662.1,586.8,0.117,0.117,0,0,0,0,-4.3);
	this.instance_135._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(855).to({_off:false},0).wait(299).to({x:702.1},5).to({x:662.1},5).to({x:702.1},5).to({x:662.1},5).to({x:702.1},5).to({x:662.1},5).to({x:702.1},5).to({x:662.1},5).wait(36).to({alpha:0},14).to({_off:true},1).wait(1925));

	// 2_chalnimask copy
	this.chtwo = new lib._1_chalninask();
	this.chtwo.setTransform(613.7,427.6,0.117,0.117);
	this.chtwo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chtwo).wait(939).to({_off:false},0).wait(115).to({x:614.2,y:427.5},0).to({x:668},6).to({x:614.2},5).to({x:668},5).to({x:614.2},5).to({x:668},5).to({x:614.2},5).to({x:668},5).to({x:614.2},6).wait(134).to({alpha:0},14).to({_off:true},1).wait(1925));

	// Layer 3
	this.instance_136 = new lib.Symbol26();
	this.instance_136.setTransform(615.4,433.8);
	this.instance_136.alpha = 0;
	this.instance_136._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(1075).to({_off:false},0).to({alpha:1},29).wait(126).to({alpha:0},14).to({_off:true},67).wait(1859));

	// 2_grainstack copy
	this.instance_137 = new lib.Symbol24();
	this.instance_137.setTransform(710.2,429.6,1.473,1.473);
	this.instance_137.alpha = 0;
	this.instance_137._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(986).to({_off:false},0).to({alpha:1},18).wait(50).to({x:755.2},6).to({x:710.2},5).to({x:755.2},5).to({x:710.2},5).to({x:755.2},5).to({x:710.2,alpha:0.66},5).to({x:755.2,alpha:1},5).to({x:710.2,alpha:0.281},6).to({alpha:0},8).to({_off:true},1).wait(2065));

	// 2_anim_mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_954 = new cjs.Graphics().p("ArwODQmwhBgYgOQgXgOhfjVIhZjTIBKptICFkSIACggIABiSICQAcIDbAPIDIAIICxgFICdgFICUgOIC1ggICZgnICgg0ICShYIBYhVIJbIuICjFGIBSFMIgWD1QjmDPg7AmQgsAbjuBYQjtBXgtAFQg8AIsmAAQjTgejYggg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(954).to({graphics:mask_2_graphics_954,x:614.5,y:365}).wait(2216));

	// 2_anim copy
	this.instance_138 = new lib.FINALGRAINS2_00100();
	this.instance_138.setTransform(108,0);

	this.instance_139 = new lib.FINALGRAINS2_00101();
	this.instance_139.setTransform(108,0);

	this.instance_140 = new lib.FINALGRAINS2_00102();
	this.instance_140.setTransform(108,0);

	this.instance_141 = new lib.FINALGRAINS2_00103();
	this.instance_141.setTransform(108,0);

	this.instance_142 = new lib.FINALGRAINS2_00104();
	this.instance_142.setTransform(108,0);

	this.instance_143 = new lib.FINALGRAINS2_00105();
	this.instance_143.setTransform(108,0);

	this.instance_144 = new lib.FINALGRAINS2_00106();
	this.instance_144.setTransform(108,0);

	this.instance_145 = new lib.FINALGRAINS2_00107();
	this.instance_145.setTransform(108,0);

	this.instance_146 = new lib.FINALGRAINS2_00108();
	this.instance_146.setTransform(108,0);

	this.instance_147 = new lib.FINALGRAINS2_00109();
	this.instance_147.setTransform(108,0);

	this.instance_148 = new lib.FINALGRAINS2_00110();
	this.instance_148.setTransform(108,0);

	this.instance_149 = new lib.FINALGRAINS2_00111();
	this.instance_149.setTransform(108,0);

	this.instance_150 = new lib.FINALGRAINS2_00112();
	this.instance_150.setTransform(108,0);

	this.instance_151 = new lib.FINALGRAINS2_00113();
	this.instance_151.setTransform(108,0);

	this.instance_152 = new lib.FINALGRAINS2_00114();
	this.instance_152.setTransform(108,0);

	this.instance_153 = new lib.FINALGRAINS2_00115();
	this.instance_153.setTransform(108,0);

	this.instance_154 = new lib.FINALGRAINS2_00116();
	this.instance_154.setTransform(108,0);

	this.instance_155 = new lib.FINALGRAINS2_00117();
	this.instance_155.setTransform(108,0);

	this.instance_156 = new lib.FINALGRAINS2_00118();
	this.instance_156.setTransform(108,0);

	this.instance_157 = new lib.FINALGRAINS2_00119();
	this.instance_157.setTransform(108,0);

	this.instance_158 = new lib.FINALGRAINS2_00120();
	this.instance_158.setTransform(108,0);

	this.instance_159 = new lib.FINALGRAINS2_00121();
	this.instance_159.setTransform(108,0);

	this.instance_160 = new lib.FINALGRAINS2_00122();
	this.instance_160.setTransform(108,0);

	this.instance_161 = new lib.FINALGRAINS2_00123();
	this.instance_161.setTransform(108,0);

	this.instance_162 = new lib.FINALGRAINS2_00124();
	this.instance_162.setTransform(108,0);

	this.instance_163 = new lib.FINALGRAINS2_00125();
	this.instance_163.setTransform(108,0);

	this.instance_164 = new lib.FINALGRAINS2_00126();
	this.instance_164.setTransform(108,0);

	this.instance_165 = new lib.FINALGRAINS2_00127();
	this.instance_165.setTransform(108,0);

	this.instance_166 = new lib.FINALGRAINS2_00128();
	this.instance_166.setTransform(108,0);

	this.instance_167 = new lib.FINALGRAINS2_00129();
	this.instance_167.setTransform(108,0);

	this.instance_168 = new lib.FINALGRAINS2_00130();
	this.instance_168.setTransform(108,0);

	this.instance_169 = new lib.FINALGRAINS2_00131();
	this.instance_169.setTransform(108,0);

	this.instance_170 = new lib.FINALGRAINS2_00132();
	this.instance_170.setTransform(108,0);

	this.instance_171 = new lib.FINALGRAINS2_00133();
	this.instance_171.setTransform(108,0);

	this.instance_172 = new lib.FINALGRAINS2_00134();
	this.instance_172.setTransform(108,0);

	this.instance_173 = new lib.FINALGRAINS2_00135();
	this.instance_173.setTransform(108,0);

	this.instance_174 = new lib.FINALGRAINS2_00136();
	this.instance_174.setTransform(108,0);

	this.instance_175 = new lib.FINALGRAINS2_00137();
	this.instance_175.setTransform(108,0);

	this.instance_176 = new lib.FINALGRAINS2_00138();
	this.instance_176.setTransform(108,0);

	this.instance_177 = new lib.FINALGRAINS2_00139();
	this.instance_177.setTransform(108,0);

	this.instance_178 = new lib.FINALGRAINS2_00140();
	this.instance_178.setTransform(108,0);

	this.instance_179 = new lib.FINALGRAINS2_00141();
	this.instance_179.setTransform(108,0);

	this.instance_180 = new lib.FINALGRAINS2_00142();
	this.instance_180.setTransform(108,0);

	this.instance_181 = new lib.FINALGRAINS2_00143();
	this.instance_181.setTransform(108,0);

	this.instance_182 = new lib.FINALGRAINS2_00144();
	this.instance_182.setTransform(108,0);

	this.instance_183 = new lib.FINALGRAINS2_00145();
	this.instance_183.setTransform(108,0);

	this.instance_184 = new lib.FINALGRAINS2_00146();
	this.instance_184.setTransform(108,0);

	this.instance_185 = new lib.FINALGRAINS2_00147();
	this.instance_185.setTransform(108,0);

	this.instance_186 = new lib.FINALGRAINS2_00148();
	this.instance_186.setTransform(108,0);

	this.instance_187 = new lib.FINALGRAINS2_00149();
	this.instance_187.setTransform(108,0);

	this.instance_188 = new lib.FINALGRAINS2_00150();
	this.instance_188.setTransform(108,0);

	this.instance_138.mask = this.instance_139.mask = this.instance_140.mask = this.instance_141.mask = this.instance_142.mask = this.instance_143.mask = this.instance_144.mask = this.instance_145.mask = this.instance_146.mask = this.instance_147.mask = this.instance_148.mask = this.instance_149.mask = this.instance_150.mask = this.instance_151.mask = this.instance_152.mask = this.instance_153.mask = this.instance_154.mask = this.instance_155.mask = this.instance_156.mask = this.instance_157.mask = this.instance_158.mask = this.instance_159.mask = this.instance_160.mask = this.instance_161.mask = this.instance_162.mask = this.instance_163.mask = this.instance_164.mask = this.instance_165.mask = this.instance_166.mask = this.instance_167.mask = this.instance_168.mask = this.instance_169.mask = this.instance_170.mask = this.instance_171.mask = this.instance_172.mask = this.instance_173.mask = this.instance_174.mask = this.instance_175.mask = this.instance_176.mask = this.instance_177.mask = this.instance_178.mask = this.instance_179.mask = this.instance_180.mask = this.instance_181.mask = this.instance_182.mask = this.instance_183.mask = this.instance_184.mask = this.instance_185.mask = this.instance_186.mask = this.instance_187.mask = this.instance_188.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_138}]},954).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[]},1).wait(2165));

	// 2_chalni copy
	this.instance_189 = new lib._1_chalni();
	this.instance_189.setTransform(614.1,405.6,0.117,0.117,0,0,0,0,-4.3);
	this.instance_189._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_189).wait(855).to({_off:false},0).wait(199).to({x:669.1},6).to({x:614.1},5).to({x:669.1},5).to({x:614.1},5).to({x:669.1},5).to({x:614.1},5).to({x:669.1},5).to({x:614.1},6).wait(134).to({alpha:0},14).to({_off:true},1).wait(1925));

	// 1_chalnimask
	this.channi_click01 = new lib._1_chalninask();
	this.channi_click01.setTransform(554,251.4,0.117,0.117);
	this.channi_click01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.channi_click01).wait(855).to({_off:false},0).wait(99).to({x:609,y:251.7},5).to({x:554},5).to({x:609},5).to({x:555.4,y:251},5).to({x:609,y:251.7},5).to({x:555.4,y:251},5).to({x:609,y:251.7},5).to({x:555.4,y:251},5).wait(236).to({x:556.4,y:251.7,alpha:0},14).to({_off:true},1).wait(1925));

	// Layer 2
	this.instance_190 = new lib.Symbol25();
	this.instance_190.setTransform(558.9,253.5);
	this.instance_190.alpha = 0;
	this.instance_190._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_190).wait(975).to({_off:false},0).to({alpha:1},29).wait(226).to({alpha:0},14).to({_off:true},67).wait(1859));

	// 1_grainstack
	this.instance_191 = new lib.Symbol24();
	this.instance_191.setTransform(651,246.8,1.355,1.354);
	this.instance_191.alpha = 0;
	this.instance_191._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_191).wait(887).to({_off:false},0).to({alpha:1},18).wait(49).to({x:700.5},5).to({x:651},5).to({x:700.5},5).to({x:651},5).to({x:700.5},5).to({x:651},5).to({x:700.5},5).to({x:651},5).to({alpha:0},10).wait(226).to({scaleX:0.79,scaleY:0.79,x:549.5,y:203.3},0).wait(14).to({_off:true},1).wait(1925));

	// 1_anim_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_855 = new cjs.Graphics().p("ArwVOQmwhBgYgOQgXgNhfjWIhZjSIBKpvICFkRIAIjBICjkaIBZjXICrjQICUhYIDXjuIFsiNQgDADDGFlIDLFnIEhFAIIWGzICjFHIBSFOIgWD0QjmDPg7AmQgsAbjuBYQjtBXgtAFQg8AIsmAAQjTgejYgggAgy2LIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(855).to({graphics:mask_3_graphics_855,x:555.5,y:142.1}).wait(2315));

	// 1_anim
	this.instance_192 = new lib.FINALGRAINS2_00100();
	this.instance_192.setTransform(108,0);

	this.instance_193 = new lib.FINALGRAINS2_00101();
	this.instance_193.setTransform(108,0);

	this.instance_194 = new lib.FINALGRAINS2_00102();
	this.instance_194.setTransform(108,0);

	this.instance_195 = new lib.FINALGRAINS2_00103();
	this.instance_195.setTransform(108,0);

	this.instance_196 = new lib.FINALGRAINS2_00104();
	this.instance_196.setTransform(108,0);

	this.instance_197 = new lib.FINALGRAINS2_00105();
	this.instance_197.setTransform(108,0);

	this.instance_198 = new lib.FINALGRAINS2_00106();
	this.instance_198.setTransform(108,0);

	this.instance_199 = new lib.FINALGRAINS2_00107();
	this.instance_199.setTransform(108,0);

	this.instance_200 = new lib.FINALGRAINS2_00108();
	this.instance_200.setTransform(108,0);

	this.instance_201 = new lib.FINALGRAINS2_00109();
	this.instance_201.setTransform(108,0);

	this.instance_202 = new lib.FINALGRAINS2_00110();
	this.instance_202.setTransform(108,0);

	this.instance_203 = new lib.FINALGRAINS2_00111();
	this.instance_203.setTransform(108,0);

	this.instance_204 = new lib.FINALGRAINS2_00112();
	this.instance_204.setTransform(108,0);

	this.instance_205 = new lib.FINALGRAINS2_00113();
	this.instance_205.setTransform(108,0);

	this.instance_206 = new lib.FINALGRAINS2_00114();
	this.instance_206.setTransform(108,0);

	this.instance_207 = new lib.FINALGRAINS2_00115();
	this.instance_207.setTransform(108,0);

	this.instance_208 = new lib.FINALGRAINS2_00116();
	this.instance_208.setTransform(108,0);

	this.instance_209 = new lib.FINALGRAINS2_00117();
	this.instance_209.setTransform(108,0);

	this.instance_210 = new lib.FINALGRAINS2_00118();
	this.instance_210.setTransform(108,0);

	this.instance_211 = new lib.FINALGRAINS2_00119();
	this.instance_211.setTransform(108,0);

	this.instance_212 = new lib.FINALGRAINS2_00120();
	this.instance_212.setTransform(108,0);

	this.instance_213 = new lib.FINALGRAINS2_00121();
	this.instance_213.setTransform(108,0);

	this.instance_214 = new lib.FINALGRAINS2_00122();
	this.instance_214.setTransform(108,0);

	this.instance_215 = new lib.FINALGRAINS2_00123();
	this.instance_215.setTransform(108,0);

	this.instance_216 = new lib.FINALGRAINS2_00124();
	this.instance_216.setTransform(108,0);

	this.instance_217 = new lib.FINALGRAINS2_00125();
	this.instance_217.setTransform(108,0);

	this.instance_218 = new lib.FINALGRAINS2_00126();
	this.instance_218.setTransform(108,0);

	this.instance_219 = new lib.FINALGRAINS2_00127();
	this.instance_219.setTransform(108,0);

	this.instance_220 = new lib.FINALGRAINS2_00128();
	this.instance_220.setTransform(108,0);

	this.instance_221 = new lib.FINALGRAINS2_00129();
	this.instance_221.setTransform(108,0);

	this.instance_222 = new lib.FINALGRAINS2_00130();
	this.instance_222.setTransform(108,0);

	this.instance_223 = new lib.FINALGRAINS2_00131();
	this.instance_223.setTransform(108,0);

	this.instance_224 = new lib.FINALGRAINS2_00132();
	this.instance_224.setTransform(108,0);

	this.instance_225 = new lib.FINALGRAINS2_00133();
	this.instance_225.setTransform(108,0);

	this.instance_226 = new lib.FINALGRAINS2_00134();
	this.instance_226.setTransform(108,0);

	this.instance_227 = new lib.FINALGRAINS2_00135();
	this.instance_227.setTransform(108,0);

	this.instance_228 = new lib.FINALGRAINS2_00136();
	this.instance_228.setTransform(108,0);

	this.instance_229 = new lib.FINALGRAINS2_00137();
	this.instance_229.setTransform(108,0);

	this.instance_230 = new lib.FINALGRAINS2_00138();
	this.instance_230.setTransform(108,0);

	this.instance_231 = new lib.FINALGRAINS2_00139();
	this.instance_231.setTransform(108,0);

	this.instance_232 = new lib.FINALGRAINS2_00140();
	this.instance_232.setTransform(108,0);

	this.instance_233 = new lib.FINALGRAINS2_00141();
	this.instance_233.setTransform(108,0);

	this.instance_234 = new lib.FINALGRAINS2_00142();
	this.instance_234.setTransform(108,0);

	this.instance_235 = new lib.FINALGRAINS2_00143();
	this.instance_235.setTransform(108,0);

	this.instance_236 = new lib.FINALGRAINS2_00144();
	this.instance_236.setTransform(108,0);

	this.instance_237 = new lib.FINALGRAINS2_00145();
	this.instance_237.setTransform(108,0);

	this.instance_238 = new lib.FINALGRAINS2_00146();
	this.instance_238.setTransform(108,0);

	this.instance_239 = new lib.FINALGRAINS2_00147();
	this.instance_239.setTransform(108,0);

	this.instance_240 = new lib.FINALGRAINS2_00148();
	this.instance_240.setTransform(108,0);

	this.instance_241 = new lib.FINALGRAINS2_00149();
	this.instance_241.setTransform(108,0);

	this.instance_242 = new lib.FINALGRAINS2_00150();
	this.instance_242.setTransform(108,0);

	this.instance_192.mask = this.instance_193.mask = this.instance_194.mask = this.instance_195.mask = this.instance_196.mask = this.instance_197.mask = this.instance_198.mask = this.instance_199.mask = this.instance_200.mask = this.instance_201.mask = this.instance_202.mask = this.instance_203.mask = this.instance_204.mask = this.instance_205.mask = this.instance_206.mask = this.instance_207.mask = this.instance_208.mask = this.instance_209.mask = this.instance_210.mask = this.instance_211.mask = this.instance_212.mask = this.instance_213.mask = this.instance_214.mask = this.instance_215.mask = this.instance_216.mask = this.instance_217.mask = this.instance_218.mask = this.instance_219.mask = this.instance_220.mask = this.instance_221.mask = this.instance_222.mask = this.instance_223.mask = this.instance_224.mask = this.instance_225.mask = this.instance_226.mask = this.instance_227.mask = this.instance_228.mask = this.instance_229.mask = this.instance_230.mask = this.instance_231.mask = this.instance_232.mask = this.instance_233.mask = this.instance_234.mask = this.instance_235.mask = this.instance_236.mask = this.instance_237.mask = this.instance_238.mask = this.instance_239.mask = this.instance_240.mask = this.instance_241.mask = this.instance_242.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_192}]},855).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).to({state:[{t:this.instance_213}]},1).to({state:[{t:this.instance_214}]},1).to({state:[{t:this.instance_215}]},1).to({state:[{t:this.instance_216}]},1).to({state:[{t:this.instance_217}]},1).to({state:[{t:this.instance_218}]},1).to({state:[{t:this.instance_219}]},1).to({state:[{t:this.instance_220}]},1).to({state:[{t:this.instance_221}]},1).to({state:[{t:this.instance_222}]},1).to({state:[{t:this.instance_223}]},1).to({state:[{t:this.instance_224}]},1).to({state:[{t:this.instance_225}]},1).to({state:[{t:this.instance_226}]},1).to({state:[{t:this.instance_227}]},1).to({state:[{t:this.instance_228}]},1).to({state:[{t:this.instance_229}]},1).to({state:[{t:this.instance_230}]},1).to({state:[{t:this.instance_231}]},1).to({state:[{t:this.instance_232}]},1).to({state:[{t:this.instance_233}]},1).to({state:[{t:this.instance_234}]},1).to({state:[{t:this.instance_235}]},1).to({state:[{t:this.instance_236}]},1).to({state:[{t:this.instance_237}]},1).to({state:[{t:this.instance_238}]},1).to({state:[{t:this.instance_239}]},1).to({state:[{t:this.instance_240}]},1).to({state:[{t:this.instance_241}]},1).to({state:[{t:this.instance_242}]},1).to({state:[]},1).wait(2264));

	// 1_chalni
	this.instance_243 = new lib._1_chalni();
	this.instance_243.setTransform(555.1,228.6,0.117,0.117,0,0,0,0,-4.3);
	this.instance_243._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_243).wait(855).to({_off:false},0).wait(99).to({x:610.1},5).to({x:555.1},5).to({x:610.1},5).to({x:555.1},5).to({x:610.1},5).to({x:555.1},5).to({x:610.1},5).to({x:555.1},5).wait(236).to({alpha:0},14).to({_off:true},1).wait(1925));

	// TEXT
	this.instance_244 = new lib.Symbol32();
	this.instance_244.setTransform(1097.8,5.4);
	this.instance_244.alpha = 0;
	this.instance_244._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_244).wait(865).to({_off:false},0).to({y:179.9,alpha:1},11).wait(44).to({y:61.4,alpha:0},9).to({_off:true},1).wait(2240));

	// TEXTBG
	this.instance_245 = new lib.textbg();
	this.instance_245.setTransform(1097.8,-264.5);
	this.instance_245.alpha = 0;
	this.instance_245._off = true;

	this.instance_246 = new lib.Symbol67();
	this.instance_246.setTransform(1080.8,205.4,1,1,0,0,0,0.3,0);
	this.instance_246.alpha = 0;
	this.instance_246._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_245).wait(855).to({_off:false},0).to({y:31.5,alpha:1},10,cjs.Ease.get(0.98)).wait(64).to({_off:true},1).wait(2240));
	this.timeline.addTween(cjs.Tween.get(this.instance_246).wait(930).to({_off:false},0).to({x:1008.3,alpha:1},9,cjs.Ease.get(0.98)).to({_off:true},21).wait(2210));

	// Layer 8
	this.instance_247 = new lib.Symbol73();
	this.instance_247.setTransform(376.5,-127,1.121,1.121);
	this.instance_247.alpha = 0;
	this.instance_247._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_247).wait(847).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(44).to({alpha:0},10).to({_off:true},514).wait(1747));

	// BAG
	this.sack = new lib.Tween41();
	this.sack.setTransform(529.7,987.7,0.687,0.687);
	this.sack.alpha = 0;
	this.sack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sack).wait(711).to({_off:false},0).to({x:527.7,y:768,alpha:1},13).wait(121).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(2315));

	// BAG2
	this.instance_248 = new lib.bag2_1();
	this.instance_248.setTransform(443.8,1279.9,2.739,2.739,0,0,180);
	this.instance_248._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_248).wait(855).to({_off:false},0).wait(375).to({alpha:0},14).to({_off:true},67).wait(1859));

	// YELLOW_PATCH                         
	this.instance_249 = new lib.YELLOWPATCH();
	this.instance_249.setTransform(547.2,581,1,1,0,0,0,9.2,9.2);
	this.instance_249.alpha = 0;
	this.instance_249._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_249).wait(696).to({_off:false},0).to({scaleX:37.7,scaleY:37.7,x:584.3,y:508.6,alpha:1},6).to({scaleX:92.74,scaleY:92.74,x:640,y:400},9).wait(599).to({scaleX:92.8,scaleY:92.8,x:640.6,y:401.9},571).to({scaleX:92.77,scaleY:92.77,x:640.7,y:400},89).to({scaleX:92.78,scaleY:92.78,x:640.4,y:401.4},854).wait(155).to({_off:true},1).wait(190));

	// textcity_neemuch
	this.text01 = new lib.neemuch();
	this.text01.setTransform(1097.8,129.3);
	this.text01.alpha = 0;
	this.text01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text01).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Dabra
	this.text02 = new lib.city_dabra();
	this.text02.setTransform(1097.8,129.3);
	this.text02.alpha = 0;
	this.text02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text02).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Nimbhera
	this.text03 = new lib.city_nimbhera();
	this.text03.setTransform(1097.8,129.3);
	this.text03.alpha = 0;
	this.text03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text03).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Vidisha
	this.text04 = new lib.city_vidisha();
	this.text04.setTransform(1097.8,129.3);
	this.text04.alpha = 0;
	this.text04._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text04).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Datiya
	this.text05 = new lib.city_datiya();
	this.text05.setTransform(1097.8,129.3);
	this.text05.alpha = 0;
	this.text05._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text05).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Mandsour
	this.text06 = new lib.city_mandsour();
	this.text06.setTransform(1097.8,129.3);
	this.text06.alpha = 0;
	this.text06._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text06).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_Sihore
	this.text07 = new lib.city_sihore();
	this.text07.setTransform(1097.8,129.4);
	this.text07.alpha = 0;
	this.text07._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text07).wait(602).to({_off:false},0).wait(58).to({y:129.3,alpha:1},15).to({_off:true},636).wait(1859));

	// textcity_sagar
	this.text08 = new lib.city_sagar();
	this.text08.setTransform(1097.8,129.3);
	this.text08.alpha = 0;
	this.text08._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text08).wait(602).to({_off:false},0).wait(58).to({alpha:1},15).to({_off:true},636).wait(1859));

	// textcity1
	this.instance_250 = new lib.Symbol23();
	this.instance_250.setTransform(1075.4,123);
	this.instance_250.alpha = 0;
	this.instance_250._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_250).wait(590).to({_off:false},0).to({x:1063.4,y:175,alpha:1},11,cjs.Ease.get(1)).wait(38).to({x:1075.4,y:177},0).to({y:115.1,alpha:0},10,cjs.Ease.get(1)).to({_off:true},662).wait(1859));

	// TEXT
	this.instance_251 = new lib.Tween36("synched",0);
	this.instance_251.setTransform(1124.8,505.1);
	this.instance_251.alpha = 0;
	this.instance_251._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_251).wait(501).to({_off:false},0).to({y:556.9,alpha:1},13,cjs.Ease.get(1)).wait(65).to({startPosition:0},0).to({alpha:0},11,cjs.Ease.get(1)).wait(119).to({x:1096.6,y:567.1,alpha:1},0).wait(13).to({startPosition:0},0).to({_off:true},338).wait(2110));

	// TEXTBG_YELLOW
	this.instance_252 = new lib.textbg_yellow();
	this.instance_252.setTransform(1068.4,-5.8);
	this.instance_252.alpha = 0;
	this.instance_252._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_252).wait(590).to({_off:false},0).to({y:32.2,alpha:1},11,cjs.Ease.get(0.88)).wait(38).to({y:5.2,alpha:0},10,cjs.Ease.get(1)).to({_off:true},774).wait(1747));

	// Layer 1
	this.instance_253 = new lib.textbg_1();
	this.instance_253.setTransform(1097.2,-221.9,1,1,0,0,0,0,-30.1);
	this.instance_253.alpha = 0;
	this.instance_253._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_253).wait(650).to({_off:false},0).to({x:1097.8,y:-44.9,alpha:1},10,cjs.Ease.get(1)).to({_off:true},763).wait(1747));

	// TEXTBG
	this.whitetextbg2 = new lib.Tween28();
	this.whitetextbg2.setTransform(1097.5,-197.6,1,1,0,0,0,31.9,-354.2);
	this.whitetextbg2.alpha = 0;
	this.whitetextbg2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.whitetextbg2).wait(486).to({_off:false},0).to({y:160.6,alpha:1},15,cjs.Ease.get(1)).wait(78).to({y:160.7},0).to({y:-8.8,alpha:0},11).wait(121).to({x:1068.2,y:300.4,alpha:1},0).wait(13).to({_off:true},336).wait(2110));

	// DOTS BLUR
	this.dotsglow = new lib.Tween34();
	this.dotsglow.setTransform(574.8,483);
	this.dotsglow.alpha = 0;
	this.dotsglow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dotsglow).wait(472).to({_off:false},0).to({alpha:1},14).wait(15).to({_off:true},533).wait(2136));

	// MP_MAP
	this.instance_254 = new lib.Tween32("synched",0);
	this.instance_254.setTransform(502.4,393.1,1.095,1.095);
	this.instance_254.alpha = 0;
	this.instance_254._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_254).wait(415).to({_off:false},0).to({alpha:1},15).to({startPosition:0},23).to({scaleX:5.76,scaleY:5.76,x:639.9,y:400},19).to({_off:true},562).wait(2136));

	// SLIDE 9_TEXT
	this.instance_255 = new lib.Tween30("synched",0);
	this.instance_255.setTransform(1092.4,305.8);
	this.instance_255.alpha = 0;
	this.instance_255._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_255).wait(286).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(100).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.get(0.98)).to({_off:true},619).wait(2136));

	// PATCH 1
	this.instance_256 = new lib.Tween28("synched",0);
	this.instance_256.setTransform(1065.6,7.5);
	this.instance_256.alpha = 0;
	this.instance_256._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_256).wait(276).to({_off:false},0).to({y:563,alpha:1,mode:"independent"},10,cjs.Ease.get(1)).wait(114).to({y:546,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(2754));

	// DOTS 1
	this.instance_257 = new lib.Tween24("synched",0);
	this.instance_257.setTransform(606.7,410);
	this.instance_257.alpha = 0;
	this.instance_257._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_257).wait(240).to({_off:false},0).to({alpha:1},16).wait(209).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},575).wait(2123));

	// indiamap
	this.instance_258 = new lib.Tween53("synched",0);
	this.instance_258.setTransform(588,421.5);
	this.instance_258.alpha = 0;
	this.instance_258._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_258).wait(240).to({_off:false},0).to({alpha:1},16).wait(209).to({startPosition:0},0).to({alpha:0},7).to({_off:true},562).wait(2136));

	// MUTHI UNIT
	this.intro_btn = new lib.Tween22();
	this.intro_btn.setTransform(640,418.3,1.091,1.091);
	this.intro_btn.alpha = 0;
	this.intro_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.intro_btn).wait(75).to({_off:false},0).to({scaleX:1.44,scaleY:1.44,y:400,alpha:1},15,cjs.Ease.get(-1)).wait(135).to({scaleX:1.07,scaleY:1.07,alpha:0,mode:"synched",startPosition:0},15).to({_off:true},845).wait(2085));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ehj6g+aMDH1AAAMAAAB81MjH1AAAg");
	this.shape.setTransform(639.5,399.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E21836").s().p("Ehj6A+bMAAAh81MDH0AAAMAAAB81g");
	this.shape_1.setTransform(639.5,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},204).wait(2966));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639,399,1281,801);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;