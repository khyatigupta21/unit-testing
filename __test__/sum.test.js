// import { sum } from "../src/sum";
test("adding 2 plus 2 is equal 4", () => {
  expect(2 + 2).toBe(4);
});

test("Object assignment", () => {
  const userInfo = {
    name: "khyati",
    details: {
      city: "jabalpur",
      age: 38,
    },
  };
  expect(userInfo).toEqual({
    name: "khyati",
    details: {
      city: "jabalpur",
      age: 38,
    },
  });
});

//checking adding positive number is not zero
// test("adding positive number is not 0", () => {
//   for (let i = 1; i <= 10; i++) {
//     //   for (let i = -2; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       expect(i + j).not.toBe(0);
//     }
//   }
// });

// // jest test array of objects
// // Checking whether array is containing userid object

const users = [
  { userid: 1, name: "khyati" },
  { userid: 2, name: "arun" },
];

test("Array containing id1 and id2", () => {
  expect(users).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ userid: 1 }),
      expect.objectContaining({ userid: 2 }),
    ])
  );
});

// //Check array os strings

// const cities = [1233, "bhopal", "indore", "ujjain"];

// test("Array should contain array of strings", () => {
//   expect(cities).toEqual(expect.arrayContaining([expect.any(String)]));
// });

// //Check Truthiness with null
// test("null", () => {
//   const num = null;
//   expect(num).toBe(null); //true
//   expect(num).toBeDefined(); //true
//   expect(num).not.toBeUndefined(); //true
//   expect(num).not.toBeTruthy(); //true
//   expect(num).toBeFalsy(); //true
// });

// //Check Truthiness with zero

// test("Zero", () => {
//   const num1 = 0;
//   expect(num1).toBe(0); //false
//   expect(num1).toBeDefined(); //true
//   expect(num1).not.toBeUndefined(); //true
//   expect(num1).not.toBeTruthy(); //false
//   expect(num1).toBeFalsy(); //true
// });

// //Compare numbers

// test("check 1 + 1", () => {
//   const val = 1 + 1;
//   expect(val).not.toBeGreaterThan(4); //true
//   expect(val).not.toBeGreaterThanOrEqual(2.5); //true
//   expect(val).toBeLessThan(4); //true
//   expect(val).toBeLessThanOrEqual(4.5); //false
// });

// //Check strings against regular expression

// test("My name is khyati gupta", () => {
//   const value = "khyati";
//   expect(value).toMatch(/khya/);
// });

// test("I love to travel the world", () => {
//   expect("world").not.toMatch(/tld/);
// });
