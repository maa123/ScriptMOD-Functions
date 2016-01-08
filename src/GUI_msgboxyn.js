var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function GUI_msgboxyn(title,yes,no,callback){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var alerts=new android.app.AlertDialog.Builder(ctx);
alerts.setTitle(title);
alerts.setPositiveButton(yes,new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
callback(true,dialog,whichButton);
}
});
alerts.setNegativeButton(no,new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
callback(false,dialog,whichButton);
}
});
alerts.show();}catch(emr){
clientMessage(emr);
}
}}));
}

/*簡単にウインドウを表示する為の関数です。
これをどこかに貼り付け

 GUI_msgboxyn("タイトル","はい","いいえ",function(resurt){
if(resurt){
print("はい");
} else{
print("いいえ");
}
 });
で使えます
var ctx~の変数の定義は必ず処理が始まる前に貼り付けてください。

*/
