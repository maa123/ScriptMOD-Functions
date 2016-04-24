/*
*セーブデータ作る関数です。
*保存先:games/com.mojang/minecraftpe/saves/
*
*/
function savedata(fname,data){
var datas=json_encode(data);//jsonに変換
saveBData(fname,datas);
return true;
}
function readdata(fname){
var data=LoadBData(fname);
return json_decode(data);
}
function json_encode(str){
return JSON.stringify(str);
}
function json_decode(str){
return JSON.parse(str);
}
function saveBData(fname,fndata){
try{
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/saves/";
var Folder = new java.io.File(path);
Folder.mkdirs();
var Data = new java.io.File(path,finame); 
var outWrite = new java.io.OutputStreamWriter (new java.io.FileOutputStream (Data));
outWrite.append(fndata);
outWrite.close();
}catch(e){
print(e);
}
}

function LoadBData(filename,data){
	try{
var readlis=null;
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/saves/";
//if(fileReadOpen(path+modname+ext))
var trfir=false;
try{
fileReader = new java.io.FileReader(path+filename);
fileRead=new java.io.BufferedReader(fileReader);
//return true;
trfir=true;
}catch(err){
trfir=false;
//return false;
}

if(trfir){
var cun=0;
while((readsave=fileRead.readLine())!=null){
if(cun==0){readlis=readsave;}else{
readlis=readlis+"\n"+readsave;}
cun++;
}
fileRead.close();fileReader.close();
	}else{
		SaveData();
	}
}catch(e){
	print(e);
	}
}
