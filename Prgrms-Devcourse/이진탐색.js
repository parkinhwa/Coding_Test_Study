// 이진 탐색 배열
const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(left < right) {
    if(array[mid] === findValue){
      return mid;
    }
    if(array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left+right)/2);
  }
  return -1;
}

// console.log(binarySearch(array, 2876))
// console.log(binarySearch(array, 1))
// console.log(binarySearch(array, 500))

// 이진 탐색 트리
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(currentNode !== null) {
      if(currentNode.value < value) {
        if(currentNode.right === null){
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if(currentNode.left === null){
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
  remove(value) {
    let currentNode = this.root;
    let parentNode = currentNode;
    // value가 어디있는지 찾기
    while(currentNode.value != value){
      //console.log(currentNode.value);
      parentNode = currentNode;
      if(currentNode.value > value){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    // console.log(parentNode.value, currentNode.value, currentNode.left, currentNode.right)
    // 단일 정점을 삭제하는 경우
    if(currentNode.left === null && currentNode.right === null){
       if(parentNode.value < currentNode.value){
         parentNode.right = null;
       } else {
         parentNode.left = null;
       }
       currentNode = null;
      // 하나의 서브트리를 가지는 경우
    } else if(currentNode.left === null && currentNode.right !== null){
      parentNode.right = currentNode.right;
      currentNode = null;
    } else if(currentNode.left !== null && currentNode.right === null){
      parentNode.left = currentNode.left;
      currentNode = null;      
    } else {
      // 두개의 서브트리를 가지는 경우
      // 왼쪽 가장 큰 값과 바꿀 때
      // let chageNode = currentNode;
      // while(chageNode.left !== null || chageNode.right !== null){
      //   // parentNode = chageNode;
      //   //console.log(currentNode.value, currentNode.left, currentNode.right)
      //   if(chageNode.left === null && chageNode.right !== null){
      //     chageNode = chageNode.right;
      //     //console.log(currentNode)
      //   } else {
      //     //console.log(currentNode.value)
      //     chageNode = chageNode.left;
      //     //console.log(currentNode.value)
      //   }
      // }
      // console.log(chageNode.value, currentNode.value);
      // chageNode.right = currentNode.right;
      // chageNode.left = currentNode.left;
      // parentNode.left = chageNode;
      // currentNode = null;
      
      // 오른쪽 가장 작은 값과 바꿀 때     
      let chageNode = currentNode;
      while(chageNode.left !== null || chageNode.right !== null){
        // parentNode = chageNode;
        //console.log(currentNode.value, currentNode.left, currentNode.right)
        if(chageNode.left !== null && chageNode.right === null){
          chageNode = chageNode.left;
          //console.log(currentNode)
        } else {
          //console.log(currentNode.value)
          chageNode = chageNode.right;
          //console.log(currentNode.value)
        }
      }
      console.log(chageNode.value, currentNode.value);
      chageNode.right = currentNode.right;
      chageNode.left = currentNode.left;
      if(chageNode.value < parentNode.value){
        parentNode.left = chageNode;
      } else {
        parentNode.right = chageNode;
      }
      currentNode = null;
    }
    
  }
  has(value) {
    let currentNode = this.root;
    while(currentNode !== null){
      if(currentNode.value === value){
        return true;
      }
    
      if(currentNode.value < value){
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(4);
tree.insert(13);
tree.insert(14);
tree.insert(5);
tree.insert(12);
tree.insert(2);
tree.insert(3);
console.log(tree.has(3));
// console.log(tree.has(1));
tree.remove(4)
console.log(tree);
console.log(tree.has(4));