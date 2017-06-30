var x = 0,
    result = 0,
    numshow = "0";
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 

function num(x) {
    var str = String(document.getElementById('output-result').value); //获得当前显示数据 
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
    str = str + String(x); //给当前值追加字符 
    document.getElementById('output-result').value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
}

function point() {
    var str = String(document.getElementById('output-result').value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.getElementById('output-result').value = str;
    operate = 0;
}

function back() { //退格 
    var str = String(document.getElementById('output-result').value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.getElementById('output-result').value = str;
}

function btnClear() { //清除数据 
    x = 0;
    result = 0;
    numshow = "0";
    document.getElementById('output-result').value = "0";
}


function plus() { //加法 
    calculate(); //调用计算函数 
    operate = 1; //更改输入状态 
    calcul = 1; //更改计算状态为加 
}

function reduce() { //减法 
    calculate();
    operate = 1;
    calcul = 2;
}

function times() { //乘法 
    calculate();
    operate = 1;
    calcul = 3;
}

function divide() { //除法 
    calculate();
    operate = 1;
    calcul = 4;
}

function remainder() { //求余 
    calculate();
    operate = 1;
    calcul = 5;
}

function sqrt() { //平方根
    calculate();
    operate = 1;
    calcul = 6;
}

function sin() { //正弦
    calculate();
    operate = 1;
    calcul = 7;
}

function cos() { //余弦
    calculate();
    operate = 1;
    calcul = 8;
}

function tan() { //正切
    calculate();
    operate = 1;
    calcul = 9;
}

function equal() {
    calculate(); //等于 
    operate = 1;
    x = 0;
    result = 0;
    numshow = "0";
}

function calculate() {
    numshow = Number(document.getElementById('output-result').value);
    if (x != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = x + numshow;
                break; //计算"+" 
            case 2:
                result = x - numshow;
                break; //计算"-" 
            case 3:
                result = x * numshow;
                break;
            case 4:
                if (numshow != 0) {
                    result = x / numshow;
                } else {
                    document.getElementById('output-result').value = "被除数不能为零！";
                    setTimeout(clearnote, 4000)
                }
                break;
            case 5:
                result = x % numshow;
                break;
            case 6:
                result = Math.sqrt(numshow);
                break;
            case 7:
                result = Math.sin(numshow * Math.PI / 180); //三角函数计算公式
                result = parseFloat(result.toFixed(8)) //结果取8位精度
                break;
            case 8:
                result = Math.cos(numshow * Math.PI / 180);
                result = parseFloat(result.toFixed(8))
                break;
            case 9:
                result = Math.tan(numshow * Math.PI / 180);
                result = parseFloat(result.toFixed(8))
                break;
        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
    }
    numshow = String(result);
    document.getElementById('output-result').value = numshow;
    x = result; //存储当前值 
}