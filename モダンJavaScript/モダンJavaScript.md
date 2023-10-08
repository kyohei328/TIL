モダンなJavaScriptの記法  
- アロー関数  
  ``` (() => {})```
- スプレッド構文  
  ```const arr2 = [...arr1];```
- 分割代入
  ```
     const obj6 = {
        id: "001",
        name: "AAA",
        age: 20
     };
     const { name, ...other } =  obj6;
  ```
- map
  ```
     const data = [1,2,3,4];
     const result = data.map((num) => {
       return num + 1
     });
     console.log(result);
  ```
- filter
  ```
     let array = [1,2,3,4,5]
     let arrayResult = array.filter((num) => num > 2);
     console.log(arrayResult);
  ```
