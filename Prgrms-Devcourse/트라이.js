class Node {
  constructor(value = ""){
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() { // 노드 생성
    this.root = new Node();
  }
  insert(string) {
    let currentNode = this.root; // 루트에서 시작
    for(const char of string) { // 문자열을 앞에서부터 자르면서 순회
      // 만약 현재 노드에서 자른 문자열을 간선으로 가지고 있지않다면 새롭게 노드 추가 
      if(!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char)
        );
      }
      // 다음 정점으로 이동
      currentNode = currentNode.children.get(char);
    }
  }
  has(string) {
    let currentNode = this.root;
    for(const char of string) {
      if(!currentNode.children.has(char)){
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));