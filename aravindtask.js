let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let uniqueList1 = list1.filter(user => !list2.includes(user));
console.log(uniqueList1);

let uniqueList2 = list2.filter(user => !list1.includes(user));
console.log(uniqueList2);

let commonUsers = list1.filter(user => list2.includes(user));
console.log(commonUsers);