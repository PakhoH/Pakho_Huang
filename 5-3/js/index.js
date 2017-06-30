var arr = new Array("a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a")

var count = {};
var pos = {};

function myFunction() {
	//foreach的方法
    arr.forEach(function(value, index) {
    	//如果数组arr里面有元素相同，则该元素数量自增1，并记下其索引下标；否则输出元素数量为1及其下标；
    	//通过此方法，可记录数组内每个元素出现的次数及其索引下标；
        if (count[value]) {
            count[value]++;
            pos[value] += "," + index;
        } else {
            count[value] = 1;
            pos[value] = "" + index;
        }
    });
    //获取出现次数最多的字母
    var max = 0;
    var letter;
    for (i in count) {
    	//如果元素次数大于max，则把其值赋给max，经过if语句循环后，可得到max的值是元素次数出现最多的那个；
    	//max值最大时，那么i就是那个次数出现最多的字母，把i赋值给letter；
        if (count[i] > max) {
            max = count[i];
            letter = i;
        }
    }

    document.getElementById("result1").innerHTML = ("出现次数最多的字母：" + letter + "；");
    document.getElementById("result2").innerHTML = ("其出现的总次数：" + max + "；");
    document.getElementById("result3").innerHTML = ("其索引下标：" + pos[letter] + "。");
}
