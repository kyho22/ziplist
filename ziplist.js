const alist = ['a', 'b', 'c'];
const blist = [1, 2, 3];

function zipList(list1, list2) {
  const newArray = [];
  for (let i = 0; i < list1.length; i++) {
    newArray.push(list1[i]);
    newArray.push(list2[i]);
  }
  return newArray;
}

console.log(zipList(alist, blist));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(alist, blist));
