/*

Implemented October 30th
GRAD TRAK PROJECT
By Jowy Curameng

*/
//MAJOR
var COEN_MAJOR = ["COEN10", "COEN11","COEN12", "COEN19", "COEN20", "COEN21", "COEN70", "COEN122", "COEN146","COEN 171", "COEN 174", "COEN 175", "COEN177", "COEN179", "COEN194", "COEN195", "COEN196"];
var elen=["ELEN50","ELEN153"];
var COEN_UPPERDIV_ELECTIVES = ["COEN120","COEN123", "COEN129", "COEN152", "COEN160", "COEN161", "COEN162", "COEN163", "COEN164", "COEN165","COEN166", "COEN169", "COEN178","COEN180"];
var writing=["ENGL181","ENGL182A","ENGL182B"];
var math=["MATH11","MATH12","MATH13","MATH14","AMTH106","AMTH108","MATH53","MATH166","AMTH118"];
var sci=["PHYS31","PHYS32","PHYS33","CHEM11"];
//CORE
var civic=["ENGR1","COEN196"];
var arts=["ENGL181","COEN196"];
var sts=["ENGL181","ENGL182","COEN196"];
var ctw1=["ENGL1A","ENGL1H","ENVS1A","PHIL1A","SPAN1A","WGST1A"];
var ctw2=["ENGL2A","ENGL2H","PHIL2A","WGST2A"];
var rtc1=["RSOC7","RSOC9","RSOC10","RSOC12","RSOC19","SCTR11","SCTR15","SCTR19","TESP2","TESP4"];
var rtc2=["ANTH150","ARAB171","CLAS12A","CLAS63","CLAS65","CLAS67","CLAS68","CLAS69","COMM175A","COMM179A","ENGL161","ENGL189","ENGR143","ENVS84","HIST16","HIST17","HIST103","HIST117","HIST120","HIST126","HIST129","HIST152","MUSC189","POLI139","PSYC193","RSOC27","RSOC33","RSOC38","RSOC46","RSOC51","RSOC54","RSOC64","RSOC67","RSOC81","RSOC85","RSOC86","RSOC87","RSOC88","RSOC90","RSOC91","RSOC96","RSOC99","SCTR26","SCTR27","SCTR28","SCTR30","SCTR33","SCTR35","SCTR39","SCTR45","SCTR48","SCTR58","SCTR65","TESP45","TESP46","TESP50","TESP60","TESP65","TESP71","TESP72","TESP77","TESP79","TESP82","TESP86","TESP88","WGST46","WGST47","WGST48"];
var rtc3=["BIOL171","ELEN160","ENVS152","ETHN129","RSOC106","RSOC111","RSOC113","RSOC115","RSOC119","RSOC121","RSOC123","RSOC130","RSOC131","RSOC134","RSOC135","RSOC136","RSOC139","RSOC140","RSOC154","RSOC157","RSOC159","RSOC168","RSOC170","RSOC174","RSOC182","RSOC184","RSOC188","RSOC190","RSOC191","RSOC194","SCTR100","SCTR110","SCTR128","SCTR132","SCTR139","SCTR157","SCTR158","SCTR165R","SCTR170","SCTR175","TESP106","TESP108","TESP109","TESP118","TESP119","TESP121","TESP124","TESP131","TESP137","TESP138","TESP143","TESP153","TESP157","TESP159","TESP163","TESP164","TESP165","TESP175","TESP176","TESP183","TESP184","TESP185","TESP187","WGST145","WGST148","WGST149","WGST151","WGST152"];
var elsj=["ANTH3","BIOL188","BUSN151B","BUSN188","BUSN189","BUSN195EL","COMM40EL","COMM107A","COMM141B","DANC59","DANC159","DANC69","DANC169","DANC189","ENGL106EL","ENGL111","ENGL145EL","ENGL150EL","ENGL176","ENGR111","ENVS131","ENVS155","ETHN60","ETHN160","ETHN161","ELSJ22","ELSJ23","ELSJ30","ELSJ50","ELSJ135","ELSJ197","ELSJ198","ELSJ199","INTL139","INTL139BF","LEAD10","LBST106","MGMT8","PHIL5A","PHIL70","POLI3","POLI158","POLI198EL","PSYC113EL","PSYC114EL","PSYC115EL","PSYC117EL","PSYC185EL","PSYC190EL","PSYC196","PHSC31","PHSC131","PHSC170","RSOC99","RSOC135","SCTR128","SOCI30","SOCI148","SOCI165","SPAN21EL","SPAN22EL","SPAN23EL","ARTS151","TESP43","TESP45","TESP46","TESP129","TESP157","TESP158","TESP183"];
var ethics=["ENGR19","MGMT6","PHIL2","PHIL3A","PHIL4A","PHIL5","PHIL5A","PHIL6","PHIL7","PHIL7B","PHIL8","PHIL9","PHIL10","PHIL111","PHIL113","PHIL115","PHIL116","PHIL121","PHIL122A","PHIL122B","PHIL123","PHSC7","PSYC114","TESP159","WGST58","WGST184","WGST189"];
var cni1=["ANTH11A","ARTH11A","ARTH11H","CLAS11A","ENGL11A","ENVS11A","GERM11A","HIST11A","ITAL11A","MUSC11A","PHIL11A","PHIL11H","SOCI11A","THTR11A","WGST11A"];
var cni2=["ANTH12A","ARTH12A","ARTH12H","CLAS12A","ENGL12A","ENVS12A","HIST12A","HIST12H","ITAL12A","MUSC12A","PHIL12A","SOCI12A","THTR12A","WGST12A"];
var cni3=["ANTH50","ANTH152","ANTH156","ANTH172","ANTH181","ANTH184","ANTH185","ANTH186","ANTH187","ANTH188","ARAB137","ARTH24","ARTH25","ARTH26","ARTH27","ARTH152","ARTH160","ARTH161","ARTH162","ARTH163","ARTH164","ARTH170","CLAS60","COMM105A","COMM183A","COMM184A","COMM187A","COMM188A","COMM189A","DANC68","ECON134","ENGR177","ENGL31A","ENGL56","ENGL66","ENGL79A","ENGL120","ENGL153","ENGL156","ENGL157","FREN111","FREN112","FREN113","FREN114","FREN174","HIST64","HIST91","HIST92","HIST95","HIST102S","HIST104","HIST107","HIST112","HIST116S","HIST122","HIST136","HIST137","HIST140S","HIST141","HIST142","HIST143S","HIST144S","HIST145","HIST146A","HIST146B","HIST147A","HIST147B","HIST150","HIST151","HIST152","HIST154B","HIST157","HIST161","HIST162","HIST163","HIST164S","HIST166","MGMT80","MUSC130","MUSC136","POLI2","POLI3","POLI50","POLI126","POLI136","POLI137","POLI140","POLI145","POLI148","RSOC136","SOCI134","SOCI135","SOCI138","SPAN112","SPAN137","SPAN147","SPAN149","TESP133","WGST104","WGST120","WGST122","WGST123","WGST124","WGST125","WGST126","WGST128","WGST172","WGST175"];
var sosh=["ANTH2","ANTH3","ANTH196","CLAS172","ECON1","ECON1E","ECON2","ECON129BF","HIST107","LBST100","POLI2","POLI40","POLI99","POLI134","POLI140","POLI143","POLI145","PSYC1","PSYC2","SOCI1"];
var diversity=["ANTH146","ANTH148","ANTH149","ANTH157","ANTH170","ARTH140","ARTH143","ARTH146","ARTH185","COMM107A","COMM121A","COMM164A","COMM168A","DANC62","DANC162","DANC66","DANC166","ECON166","ENGL31G","ENGL35","ENGL35G","ENGL36","ENGL38","ENGL39","ENGL67","ENGL68","ENGL69","ENGL79G","ENGL122","ENGL122AW","ENGL125","ENGL129","ENGL132G","ENGL135","ENGL136","ENGL138","ENGL152","ETHN5","ETHN10","ETHN20","ETHN30","ETHN35","ETHN36","ETHN40","ETHN41","ETHN50","ETHN51","ETHN65","ETHN70","ETHN95","ETHN96","ETHN120","ETHN123","ETHN125","ETHN130","ETHN132","ETHN134","ETHN135","ETHN139","ETHN141","ETHN142","ETHN144","ETHN145","ETHN149","ETHN152","ETHN153","ETHN154","ETHN155","ETHN156","ETHN157","ETHN160","ETHN161","ETHN162","ETHN163","ETHN165","ETHN178","HIST84","HIST153","HIST156A","HIST156B","HIST158","HIST172","HIST177","HIST178","HIST180","HIST181","HIST182","HIST183","HIST185","HIST187","HIST188S","ITAL185","LEAD10","LBST106","MUSC20","MUSC132","MUSC134","MUSC196","PHIL70","PHIL156","POLI134","POLI153","POLI154","POLI171","POLI195DW","PSYC156","PSYC182","PSYC189","PSYC196","SOCI33","SOCI150","SOCI153","SOCI162","SOCI175","SOCI180","SPAN176","THTR65","THTR151","THTR161","TESP65","WGST14","WGST15","WGST34","WGST50","WGST51","WGST56","WGST57","WGST101","WGST110","WGST111","WGST112","WGST113","WGST114","WGST115","WGST116","WGST117","WGST118","WGST134","WGST134AW","WGST136","WGST138","WGST144","WGST155","WGST156","WGST163","WGST164","WGST173","WGST174","WGST180","WGST188"];


//cookiestuff
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    alert(name);
    alert(value);
    alert(days);
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}



function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    alert(aString);
}




//ADDROW
function addRow() {


    //var TakenClass = document.getElementById("name");
    //alert(typeof TakenClass);
    var i,filter_flag;

    filter_flag = 1;


    //turn everything into 4char1-3int format
    var userInput = document.getElementById("name").value;
    userInput = userInput.toUpperCase();
    TakenClass = userInput.replace(/\s+/g,'');
   // alert(TakenClass);

    //is it too long?
    if ((TakenClass.length > 7) || (TakenClass.length < 5)){
      alert("Invalid entry");
      return false;
    }

    //is it an invalid class?
    var re = /\w{4}/;
    //var re = /[a-zA-Z]+/;

    //which department is it?
    var classtype = TakenClass.match(re);
    //alert(classtype);
    classtype = classtype.toString();

    //which course number?
    var re2 = /\d+[\w{1}]*/;
    var classnum = TakenClass.match(re2);

    //if it is a valid type of department and a number between 1 and 200
    if (((classtype != "COEN") && (classtype != "ELEN") && (classtype != "ENGR") && (classtype != "ENGL") && (classtype != "MATH") && (classtype != "AMTH") && (classtype != "PHYS") && (classtype != "CHEM") && (classtype != "RSOC") && (classtype != "SCTR") && (classtype != "TESP") && (classtype != "MGMT") && (classtype != "PHIL") && (classtype != "PHSC") && (classtype != "PSYC") && (classtype != "WGST") && (classtype != "ANTH") && (classtype != "ARTH") && (classtype != "COMM") && (classtype != "DANC") && (classtype != "ECON") && (classtype != "ETHN") && (classtype != "HIST") && (classtype != "ITAL") && (classtype != "LEAD") && (classtype != "LBST") && (classtype != "MUSC") && (classtype != "POLI") && (classtype != "SOCI") && (classtype != "SPAN") && (classtype != "THTR") && (classtype != "CLAS") && (classtype != "ARAB") && (classtype != "ENVS") && (classtype != "FREN") && (classtype != "BIOL") && (classtype != "BUSN") && (classtype != "INTL") && (classtype != "ELSJ") && (classtype != "ARTS") && (classtype != "GERM")) || ((Number(classnum) < 1 ) || (Number(classnum) > 200))){
      alert("Invalid entry");
    }

    var table, row, rowCount, row;

//CORE CLASSES
for(i=0; i<COEN_MAJOR.length; i++)
{
    if(COEN_MAJOR[i]==TakenClass)
    {
        table = document.getElementById("majorclassestable");
        filter_flag=0;
        /*rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        row.insertCell(1).innerHTML= TakenClass;
        */
    }
}

for(i=0; i<COEN_UPPERDIV_ELECTIVES.length; i++)
{

    if(COEN_UPPERDIV_ELECTIVES[i]==TakenClass)
    {
        table = document.getElementById("majorclassestable");
        filter_flag=0;
        rowCount = table.rows.length;
        row = table.insertRow(Count);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        row.insertCell(1).innerHTML= TakenClass;

    }
}

for(i=0; i<writing.length; i++)
{

    if(writing[i]==TakenClass)
    {
        table = document.getElementById("majorclassestable");
        filter_flag=0;
        rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        row.insertCell(1).innerHTML= TakenClass;
    }
}

for(i=0; i<math.length; i++)
{

    if(math[i]==TakenClass)
    {
        var table = document.getElementById("majorclassestable");
        filter_flag=0;

    }
}

for(i=0; i<sci.length; i++)
{

    if(sci[i]==TakenClass)
    {
        var table = document.getElementById("majorclassestable");
        filter_flag=0;
      }
}
//END MAJOR ARRAYS

//BEGIN CORE CLASSES

for(i=0; i<civic.length; i++)
{
    if(civic[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<arts.length; i++)
{
    if(arts[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<sts.length; i++)
{
    if(sts[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<ctw1.length; i++)
{
    if(ctw1[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<ctw2.length; i++)
{
    if(ctw2[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<rtc1.length; i++)
{
    if(rtc1[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}
for(i=0; i<rtc2.length; i++)
{
    if(rtc2[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<rtc3.length; i++)
{
    if(rtc3[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<elsj.length; i++)
{
    if(elsj[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<ethics.length; i++)
{
    if(ethics[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<cni1.length; i++)
{
    if(cni1[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<cni2.length; i++)
{
    if(cni1[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<cni3.length; i++)
{
    if(cni1[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<sosh.length; i++)
{
    if(sosh[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}

for(i=0; i<diversity.length; i++)
{
    if(diversity[i]==TakenClass)
    {
        var table = document.getElementById("coreclassestable");
        filter_flag=0;
    }
}
//END CORE CLASSES

if(filter_flag==1)
{
    var table = document.getElementById("filteredclassestable");

}


var rowCount = table.rows.length;
var row = table.insertRow(rowCount);

row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
row.insertCell(1).innerHTML= TakenClass;


    if((classtype=="COEN") || (classtype=="ELEN")){
    if(COEN_MAJOR.indexOf(TakenClass) != -1){
      var x = COEN_MAJOR.indexOf(TakenClass);
      user[x].push(TakenClass);
    }
    else if (elen.indexOf(TakenClass) != -1){
      var x = elen.indexOf(TakenClass);
      user[x+16].push(TakenClass);
    }
    //needs to have 3
    else if(COEN_UPPERDIV_ELECTIVES.indexOf(TakenClass) != -1){
      user[19].push(TakenClass);
    }
  }else {
    if ((classtype=="ENGL") && (classnum==181)){
      user[20].push(TakenClass);
    }
    else if (classtype=="MATH"){
      if((classnum==53)||(classnum==166)){
        user[27].push(TakenClass);
      }
      else if(classnum==122){
        user[26].push(TakenClass);
      }
      else{
        user[classnum+10].push(TakenClass);
      }
    }
    else if (classtype=="AMTH"){
      if(classnum==106){
        user[25].push(TakenClass);
      }
      else if (classnum == 108){
        user[26].push(TakenClass);
      }
      else if (classnum == 118){
        user[27].push(TakenClass);
      }
    }
    else if (classtype=="PHYS"){
      user[classnum-3].push(TakenClass);
    }
    else if (classtype=="CHEM"){
      user[31].push(TakenClass);
    }
    else if ((classtype=="ENGR") && (classnum == 1)){
      user[32].push(TakenClass);
    }
    else {
      if (ctw1.indexOf(TakenClass) != -1){
        user[33].push(TakenClass);
      }
      if (ctw2.indexOf(TakenClass) != -1){
        user[34].push(TakenClass);
      }
      if (rtc1.indexOf(TakenClass) != -1){
        user[35].push(TakenClass);
      }
      if (rtc2.indexOf(TakenClass) != -1){
        user[36].push(TakenClass);
      }
      if (rtc3.indexOf(TakenClass) != -1){
        user[37].push(TakenClass);
      }
      if (elsj.indexOf(TakenClass) != -1){
        user[38].push(TakenClass);
      }
      if (ethics.indexOf(TakenClass) != -1){
        user[39].push(TakenClass);
      }
      if (cni1.indexOf(TakenClass) != -1){
        user[40].push(TakenClass);
      }
      if (cni2.indexOf(TakenClass) != -1){
        user[41].push(TakenClass);
      }
      if (cni3.indexOf(TakenClass) != -1){
        user[42].push(TakenClass);
      }
      if (sosh.indexOf(TakenClass) != -1){
        user[43].push(TakenClass);
      }
      if (diversity.indexOf(TakenClass) != -1){
        user[44].push(TakenClass);
      }
    }
  }
    
 var json_user = JSON.stringify(user);

  createCookie("myArray",json_user);
    
    displayreq();
    
}


function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table;

    //if()
    //if()

    /*//HTML INPUT ELEMENT
    alert(obj);

    //HTMLTABLECELL ELEMENT
    alert(obj.parentNode);

    //HTMLTABLE ROWELEMENT
    alert(obj.parentNode.parentNode);

    //HTMLTABLESECTION
    alert(obj.parentNode.parentNode.parentNode);

    //HTML TABLE ELEMENT
    alert(obj.parentNode.parentNode.parentNode.parentNode); */
    //alert(obj.parentNode.parentNode.parentNode.parentNode.id);
    //alert(obj.parentNode.parentNode.rowIndex);

    if(obj.parentNode.parentNode.parentNode.parentNode.id == "majorclassestable")
   {
      //alert(obj.parentNode.parentNode.parentNode.parentNode.id);
      //alert(obj.parentNode.parentNode.rowIndex);
     table = document.getElementById("majorclassestable");
    //  alert(table.id);
    //  alert(obj.parentNode.parentNode.parentNode.parentNode.id);
    //  alert(obj.parentNode.parentNode.rowIndex)
   }

    if(obj.parentNode.parentNode.parentNode.parentNode.id=="coreclassestable")
    {
    table = document.getElementById("coreclassestable");
    }


    if(obj.parentNode.parentNode.parentNode.parentNode.id="filteredclassestable")
    {
        table = document.getElementById("filteredclassestable");
    }


    table.deleteRow(index);

}



/*function tabletype() {

}*/

/*
function load() {

    console.log("Page load finished");

}*/

/*
function checkArray(TakenClass)
{
     if(COEN_MAJOR[0]==TakenClass)
    {
      var table = document.getElementById("majorclassestable");
    }

    else if("test"==TakenClass)
    {
      var table = document.getElementById("coreclassestable");
    }

    else
    {
      var table = document.getElementById("filteredclassestable");
    }

    return table;
    /*
    for (var i = 0; i<COEN_MAJOR.length; i++)
    {
        if(COEN)
    }
} */

function displayreq(){
  $(finalreq).empty();
  if(user[44].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “DIV”;
 }
  if(user[43].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “SOCSCI”;
 }
if(user[42].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CNI3”;
 }
if(user[41].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CNI2”;
 }
if(user[40].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CNI1”;
 }
if(user[39].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ETHICS”;
 }
if(user[38].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ELSJ”;
 }
if(user[37].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “RTC3”;
 }
 if(user[36].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “RTC2”;
 }
 if(user[35].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “RTC1”;
 }
 if(user[34].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CTW2”;
 }
 if(user[33].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CTW1”;
 }
 if(user[32].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ENGR1”;
 }
 if(user[31].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “CHEM11”;
 }
 if(user[30].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “PHYS33”;
 }
 if(user[29].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “PHYS32”;
 }
 if(user[28].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “PHYS31”;
 }
 if(user[27].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “MATH53/166/AMTH118”;
 }
 if(user[26].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “AMTH108/AMTH122”;
 }
 if(user[25].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “AMTH106”;
 }
 if(user[24].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “MATH14”;
 }
 if(user[23].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “MATH13”;
 }
 if(user[22].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “MATH12”;
 }
 if(user[21].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “MATH11”;
 }
 if(user[20].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ENGL181”;
 }
 if(user[19].length < 3){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ELECTIVES”;
 }
 if(user[18].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ELEN153”;
 }
 if(user[17].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “ELEN50”;
 }
 if(user[16].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN196”;
 }
 if(user[15].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN195”;
 }
 if(user[14].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN194”;
 }
 if(user[13].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN179”;
 }
 if(user[12].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN177”;
 }
 if(user[11].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN175”;
 }
 if(user[10].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN174”;
 }
 if(user[9].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN171”;
 }
 if(user[8].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN146”;
 }
 if(user[7].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN122”;
 }
 if(user[6].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN70”;
 }
 if(user[5].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN21”;
 }
 if(user[4].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN20”;
 }
 if(user[3].length == 0){
   var temp = finalreq.insertRow(0);
    temp.innerHTML = “COEN19”;
 }
  if(user[2].length == 0){
    var temp = finalreq.insertRow(0);
    temp.innerHTML = "COEN12";
  }
  if(user[1].length == 0){
    var temp = finalreq.insertRow(0);
    temp.innerHTML = "COEN11";
  }
 if(user[0].length == 0){
    var temp = finalreq.insertRow(0);
    temp.innerHTML = "COEN10";
  }
  
  return false;
}
