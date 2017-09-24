var arr=[];//存放中奖结果
function ramdon(min,max){
    var m=Math.floor(Math.random()*(max-min+1))+min;//取随机整数
    if([4,44,74].indexOf(m)===-1){//判断m是否为4，44,74
        arr.push(m);//若不是，则将随机数推进中奖结果
    }
            else {
       random(min,max);////否则，重新取随机数
   }
}
function draw(min,max){
    var foo = [];
    var j=0;
    for (var i = min; i <= max ;i++) {
     foo.push(i);
    }
	if(foo.indexOf(8)!==-1){//8
        arr.push(8);
        j+=1;
    }
    if(foo.indexOf(66)!==-1){//66
        arr.push(66);
        j+=1;
    }
    if(foo.indexOf(88)!==-1){//88
        arr.push(88);
        j+=1;
    }
	for(var k=j;k<3;k++){//抽奖个数少于3个，调用ramdom函数
		ramdon(min,max);
	}
}
console.log(draw(15,60));//输出数组中奖结果
console.log(arr[0]);
