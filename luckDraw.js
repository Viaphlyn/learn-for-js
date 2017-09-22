var arr=[];//存放中奖结果
function draw(min,max){
  var foo = [];
  for (var i = min; i <= max ;i++) {
     foo.push(i);
 }
    var m=Math.floor(Math.random()*(max-min+1))+min;//取随机整数

    if((foo.indexOf(8)===-1)&&(foo.indexOf(66)===-1)&&(foo.indexOf(88)===-1)){//如果8,66,88都不在编号范围内
    	/*if(foo.indexOf(66)===-1){
    		if(foo.indexOf(88)===-1){*/
    			for(var j=0;j<3;j++){
                   if([4,44,74].indexOf(m)===-1){//判断m是否为4，44,74
                    arr.push(m);//若不是，则将随机数推进中奖结果
                }
                else {
                    draw();//否则，重新取值
                }
            }
        }

    //8或66或88存在编号里
    else if((foo.indexOf(66)===-1)&&(foo.indexOf(8)!==-1)){//8
        arr.push(8);
        for(var k=0;k<2;k++){
            if([4,44,74].indexOf(m)===-1){
                arr.push(m);
            }
            else {
               draw();
           }
        }
    }
    else if((foo.indexOf(66)!==-1)&&(foo.indexOf(8)!==-1)&&(foo.indexOf(88)===-1)){//8,66
        arr.push(8);
        arr.push(66);
        if([4,44,74].indexOf(m)===-1){
            arr.push(m);
        }
        else {
            draw();
        }
    }
    else if((foo.indexOf(8)!==-1)&&(foo.indexOf(66)!==-1)&&(foo.indexOf(88)!==-1)){//8,66,88
    	arr.push(8);
    	arr.push(66);
        arr.push(88);
    }
    else if((foo.indexOf(8)===-1)&&(foo.indexOf(66)!==-1)&&(foo.indexOf(88)===-1)){//66
        arr.push(66);
        for(var k=0;k<2;k++){
            if([4,44,74].indexOf(m)===-1){
                arr.push(m);
            }
            else {
               draw();
           }
       }
   }

    else if((foo.indexOf(8)===-1)&&(foo.indexOf(66)!==-1)&&(foo.indexOf(88)!==-1)){//66,88
        arr.push(66);
        arr.push(88);
        for(var k=0;k<1;k++){
            if([4,44,74].indexOf(m)===-1){
                arr.push(m);
            }
            else {
               draw();
           }
       }
   }
    else if((foo.indexOf(8)===-1)&&(foo.indexOf(66)===-1)&&(foo.indexOf(88)!==-1)){//88
        arr.push(88);
        for(var k=0;k<2;k++){
            if([4,44,74].indexOf(m)===-1){
                arr.push(m);
            }
            else {
               draw();
           }
       }
   }
            /*if(foo.indexOf(66)!==-1){
            	arr.push(66);//66
            }
            else {
            	for(var k=0;k<2;k++){
                  arr.push(m);
            }

            if(foo.indexOf(88)!==-1){
            	arr.push(88);//88
            }
    }
    else if(foo.indexOf(66)!==-1){
            arr.push(66);//66
            if(foo.indexOf(88)!==-1){
            	arr.push(88);//88
            }
        }
        else if(foo.indexOf(88)!==-1){
            	arr.push(88);//88
            }
        //若存在8,66,88，则推向数组
        */
    }
console.log(draw(8,67));//输出数组中奖结果
console.log(arr[0]);
