/*setTimeout()を追加します
maa123
*/
/* 使い方*/
var mst_obj=[];
var mst_toggle=false;
/* ↑これをできるだけ上の方へ貼り付けてください*/
/* 次に*/

function setTimeout(callback,time){
mst_toggle=true;
var time=(time/50);
var nda={time:time,cb:callback};
mst_obj.push(nda);
}
function mst_roop(){
if(mst_toggle){
for(var i=0;i<mst_obj.length;i++){
var mst_objo=mst_obj[i];
var tm=mst_objo["time"];
var cb=mst_objo["cb"];
tm--;

if(tm<=0){
eval(mst_objo["cb"]);
mst_obj.splice(i,1);
}else{
mst_obj[i]["time"]=tm;
}

}
}
}
/* これを一番下に貼り付けてください*/
/* そして*/
mst_roop();
/* を function modTick()の中に貼り付けてください */
