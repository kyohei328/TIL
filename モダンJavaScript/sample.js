//スプレッド構文
//配列のコピー
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log("arr1:", arr1);
console.log("arr2:", arr2);

//配列の合体
const arr3 = [1,2,3];
const arr4 = [4,5,6];
const arr5 = [...arr3, ...arr4];
console.log("arr5:", arr5);

//文字列を分解
const str1 = "tanaka";
const arr6 = [...str1];
console.log("arr6:", arr6);

//オブジェクトのコピー
const obj1 = {
    id: "001",
    name: "AAA",
    age: 20
};
const obj2 = {
    ...obj1
};
console.log("obj1:", obj1);
console.log("obj2:", obj2);

//オブジェクトの合体
const obj3 = {
    id: "001",
    name: "AAA",
};
const obj4 = {
    age: 20
};
const obj5 = {
    ...obj3,
    ...obj4
};
console.log(obj5);

//分割代入
const obj6 = {
    id: "001",
    name: "AAA",
    age: 20
};
const { name, ...other } =  obj6;
console.log(name);
console.log(other);

//関数の引数で何個あるかわからない時（指定できない時）
function test(...num) {
    console.log(num);
}
test(1,2,3);


///map
//戻り値は配列になる
//配列に使用できる。オブジェクトに使用できない
const data = [1,2,3,4];
const result = data.map((num) => {
    return num + 1
});
console.log(result);



//filter
let array = [1,2,3,4,5]
let arrayResult = array.filter((num) => num > 2);
console.log(arrayResult);




