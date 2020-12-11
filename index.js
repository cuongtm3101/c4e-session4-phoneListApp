console.log("hello world");

let mon1 = "Bun dau";
let mon2 = "Bun thang";
let mon3 = "Bun doc mung";

// Mảng, Danh sách (Array - List)
let menu = ["Bun Dau", "Bun thang", "Bun doc mung"];
//               0           1      menu.length - 1
// console.log(menu.length);
// length = 3
// index, length
//

// console.log(menu);

// let randomArr = ["Random text", 1, 3, true, false];

// C,R,U,D

// C - Create (Tạo mới);
let numbers = [20, 10, 40, 30];

// R - Read (Đọc)
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[3]);

// U - Update (Cập nhật)
// numbers[0] = 11;
// console.log(numbers);

// D - Delete (Xoá)
// numbers.splice(0, 1);
// console.log(numbers);

// let sum = 0;

let max = numbers[0];

for (let i = 0; i <= numbers.length - 1; i = i + 1) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}
console.log(max);
