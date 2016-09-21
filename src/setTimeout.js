/*setTimeout()を追加します
maa123
*/
/* 使い方*/
var mst_to=[];
/* ↑これをできるだけ上の方へ貼り付けてください*/
/* 次に*/

function setTimeout(callback,time){
var argus=Array.prototype.slice.call(arguments,0);
var th=new java.lang.Thread(new java.lang.Runnable({run:function(){
    try{
        java.lang.Thread.sleep(time);
    }catch(error){
        print("エラーが発生しました:setTimeout");
    }
if(mst_to[th]){
if(typeof callback=="function"){
  if(argus.length>=3){
    argus.splice(0,2);
    callback.apply(null,argus);
  }else{
    callback();
  }
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