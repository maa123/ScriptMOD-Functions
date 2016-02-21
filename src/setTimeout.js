/*setTimeout()を追加します
maa123
*/
/* 使い方*/
var mst_to=[];
/* ↑これをできるだけ上の方へ貼り付けてください*/
/* 次に*/

function setTimeout(callback,time){
<<<<<<< HEAD
var th=new java.lang.Thread(new java.lang.Runnable({run:function(){
    try{
        java.lang.Thread.sleep(time);
    }catch(error){
        print("エラーが発生しました:setTimeout");
    }
if(mst_to[th]){
if(typeof callback=="function"){
  callback();
=======
mst_toggle=true;
var time=(time/50);
var nda={time:time,cb:callback};
var res=mst_obj.push(nda);
return res;
}
function clearTimeout(num){
if(typeof num=="number"){
var i=num-1;
mst_obj.splice(i,1)
}
}
function mst_roop(){
if(mst_toggle){
for(var i=0;i<mst_obj.length;i++){
var mst_objo=mst_obj[i];
var tm=mst_objo["time"];
var cb=mst_objo["cb"];
tm--;

if(tm<=0){
if(typeof mst_objo["cb"] =="function"){
  mst_objo["cb"]();
}else{
eval(mst_objo["cb"]);
}
mst_obj.splice(i,1);
>>>>>>> branch 'master' of https://github.com/maa123/ScriptMOD-Functions
}else{
eval(callback);
}
}
}}));
th.start();
mst_to[th]=true;
return th;
}
function clearTimeout(th){
if(mst_to[th]){
mst_to[th]=false;
}
}
/* これを一番下(これはどこでも良かったりします)に貼り付けてください*/
