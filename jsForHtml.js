var args = [
    "nav-1",
    "nav-2",
    "nav-3",
    "nav-4",
    "nav-5",
    "nav-6",
    "nav-7",
    "nav-8",
    "nav-9"
    ]

//for(var i=0;i<9;i++) {//逻辑要写在函数里
function arrayToDom(args) {
    var nodeList='';
    for(var i=0;i<9;i++) {
     
     nodeList += '<li class="' + args[i] + '" key="' + Number(i+1) +'">navigation</li>\n';
     //return nodeList;
    }
    return nodeList;
    //console.log(arrayToDom(args));
}
console.log(arrayToDom(args));// 输出要的 html