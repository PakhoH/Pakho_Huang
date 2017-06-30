//指定数组
var arr = new Array("a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a")
    //计数
var count = {};
//索引
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

    //出现次数最多的字母如果有多个，全部写入arr_pu数组中，并输出
    var max = 0;
    var arr_pu = [];
    for (i in count) {
        //如果元素次数大于max，则把其值赋给max，经过if语句循环后，可得到max的值是元素次数出现最多的那个；
        //max值最大时，那么i就是那个次数出现最多的字母，把i赋值给arr_pu数组；
        if (count[i] >= max) {
            max = count[i];
            arr_pu.push(i);
        }
    }
    //将出现次数最多的字母输出
    document.getElementById("result1").innerHTML = ("出现次数最多的字母：" + arr_pu + "；"+"</br>");

    //将其出现的总次数输出，若有多个最大值，则分别输出
    //将其索引下标输出，若有多个最大值，则分别输出
    for (var i = 0; i < arr_pu.length; i++) {
         var letter = arr_pu[i];
        document.getElementById("result2").innerHTML += (letter + "出现的总次数：" + count[letter] + "；"+"</br>");
        document.getElementById("result3").innerHTML += (letter + "的索引下标：" + pos[letter] + "；"+"</br>" );
    }
}