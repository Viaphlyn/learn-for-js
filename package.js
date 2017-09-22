var $ = function(package) {
    var dom;
    switch(package.substr(0, 1)){ //获取字符串里第一个字符
        case '.':
    	dom=document.getElementsByClassName(package.substr(1));//若第一个字符为'.'，获得class='test'的所有节点
        break;

        case '#':
        dom=document.getElementById(package.substr(1));//若第一个字符为'#'，获得id='test'的所有节点
        break;
        default:
        console.log('false');
   }

    return dom;
}