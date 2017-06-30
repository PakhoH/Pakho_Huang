function calc() {
	var num1 = parseInt(document.getElementById("num1").value); //赋值给num1;
	var num2 = parseInt(document.getElementById("num2").value); //赋值给num2;
	var operator = document.getElementById("op").value; //赋值给operator;
	var sum = jishuan(num1, num2, operator); //引用jishuan的方法，以上面三个变量为参数，得到结果并赋值给sunn;
	document.getElementById("result").innerHTML = sum; //在id="result"的位置输出结果;
}


// 运算方法-if else语句判定
function jishuan(n1, n2, oper) {
	if (oper == "+") {
		return n1 + n2;
	} else if (oper == "-") {
		return n1 - n2;
	} else if (oper == "*") {
		return n1 * n2;
	} else if (oper == "/" && n2 == "0") {
		return "除数不能为零";
	} else if (oper == "/" && n2 != "0") {
		return n1 / n2;
	} else {
		return "非法操作";
	}
}