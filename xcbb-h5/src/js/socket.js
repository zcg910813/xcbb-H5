
var wsCreate = function(url){
    let ws = new WebSocket(url);
}

var wsOpen = function(){
    ws.onopen = function(){
        console.log("ws连接成功！")
    }
}

var wsClose = function(){
    ws.onclose(function(){
        console.log("ws已断开！")
    })
}

var wsMessage = function(){
    ws.onmessage(res=>{
        console.log("ws推送消息=>"+res)
    })
}

var wsSend = function(data){
    ws.send(data)
    //向socket发送数据
}

export {
}