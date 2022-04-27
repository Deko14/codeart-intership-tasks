/**
 *
 * Да се направи функција која за даден број на чекори `n` и низа од вредности, ќе ги поместува елементите кои се наоѓаат во неа следејќи ги следните правила:
 *
 * - Доколку `n` е ПОЗИТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон десно, за онолку места колку што изнесува `n`.
 *
 * - Доколку `n` е НЕГАТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон лево, за онолку места колку што изнесува `n`.
 *
 * Пример:
 *  - n = 2, низата ['1', '2', '3'] треба да се претвори во ['2', '3', '1']
 *  - n = -3, низата ['1', '2', '3', '4', '5'] треба да се претвори во ['4', '5', '1', '2', '3']
 */
 
 function moveArray(arr, steps) {
  // 1. If steps < 0, move items left.
  // 2. Shift the array, step by step.
  // 3. Remove the first element of the array on each step and add it to the last.
  // 4. Do the same for the right shift, just the opposite direction.
  // 5. For no steps print message.
  
  if (steps < 0) {
    for (let i = 0; i > steps; i--) {
      arr.push(arr.shift());
    }
  } else if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      arr.unshift(arr.pop());
    }
  } else return "No steps on input";

  return arr;
}

/* TEST INPUTS */
// NEGATIVE NUMBER INPUT -> MOVE ELEMENTS LEFT
console.log(moveArray([10, 5, 0], -1));
// POSITIVE NUMBER INPUT -> MOVE ELEMENTS RIGHT
console.log(moveArray([10, 5, 0], 4));
// NO STEPS INPUT
console.log(moveArray([10, 5, 0]));

/* TASK EXAMPLE INPUTS*/
console.log(moveArray(["1", "2", "3"], 2));
console.log(moveArray(["1", "2", "3", "4", "5"], -3));