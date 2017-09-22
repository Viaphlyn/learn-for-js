var arr = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]

// 补充函数

function sum(arr) {
    var sum = 0;
    for (var i=0;i<9;i++){
    	//arr[i]=arr[i]*1  //一般用api不用-0或*1
        //将数组中的字符串转换为数值
    	sum =sum + Number(arr[i]); //或parseInt(arr[i])，注意这两个API转化不改变原数据
        //所以不能parseInt(arr[i]);sum =sum arr[i];
    }

    return sum;

} 

console.log(sum(arr));