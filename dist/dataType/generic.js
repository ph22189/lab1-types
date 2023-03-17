// //generic 
// function showString(a: string): string {
//     return a;
// }
// function showNumber(a: number): number {
//     return a;
// }
// function showData<T>(a: T):T{
//     return a;
// }
// showData<string>("string")
// const arrNum = [1,2,3,5,8,13] // fibonacci
// const arrStr = ["a","b","c","d"] //fibonacci
// function we17304_map (arr: number[], callback: (item: number) =>number): number []{
//     let temp =[]
//     for (let i = 0; i < arr.length; i++) {
//         temp.push(callback(arr[i]))
//         temp.push(newItem)
//     }
//     return temp
// }
// ham sap xep
// const arrNum2 = [1,10,6,7,4]
// arrNum2.sort((a,b) => {
//     return b - a
// })
// console.log(arrNum2);
// Sử dụng các thuật toán sắp xếp (selection sort, bubble sort, quick sort ...) 
// để tự viết lại hàm sort bằng typescript không sử dụng build-in Array.sort của javascript
// const arrNum2 = [1,10,6,7,4]
// function selection(arr,props){
//     for(let i = 0;i<arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++){
//             if(props(arr[i] > arr[j])>0){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }   
//         }
//     }
// }
// const props= (a,b) =>{
//     return a - b
// }
// selection(arrNum2, props);
// console.log(arrNum2)
var arr1 = [1, 2, 3, 4, 5];
var arr4 = ['a', 'b', 'c', 'd', 'e'];
function sortInfo(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) < 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
sortInfo(arr4, function (a, b) { return a < b ? -1 : 1; });
// sortInfo(arr4, (a, b) => a.localeCompare(b));
console.log(arr1);
console.log(arr4);
