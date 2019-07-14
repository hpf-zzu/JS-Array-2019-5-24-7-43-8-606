// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
function isArray(o){
return Object.prototype.toString.call(o)== '[object Array]';

}
console.log(isArray(a));
console.log(isArray(b));
// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

 for ( var i = 0; i <a.length; i++){
    a[i]=a[i]*2;
}
console.log(a.join(","));

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));
// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

 var a = [5, 1, 8, 10, 4];
    function bubbleSort(array) {
        if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
            var len = array.length, temp;
            for (var i = 0; i < len - 1; i++) {
                for (var j = len - 1; j >= i; j--) {
                    if (array[j] < array[j - 1]) {
                        temp = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = temp;
                    }
                }
            }
            return array;
        } else {
            return 'array is not an Array!';
        }
    }

    alert(bubbleSort(a).join(","));
// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    // 遍历 res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为:' + maxEle;
}

console.log(findMost(arr));

