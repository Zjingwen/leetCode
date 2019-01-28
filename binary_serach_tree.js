/**
 * 二叉搜索树
 */
function BinarySearchTree(){
  let Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  /**
   * 获取树
   */
  this.getTree = function(){
    return root;
  };

  /**
   * 插入树
   * @param {string} key 需要插入的值
   */
  this.insert = function(key){
    let newNode = new Node(key);

    if(root == null){
      root = newNode;
    } else {
      insertNode(root,newNode);
    };
  };
  /**
   * 辅助insert函数插入新的节点
   * @param {object} node 上级节点
   * @param {string} node.key 节点值
   * @param {object} node.left 左子节点指针
   * @param {object} node.right 右子节点指针
   * @param {object} newNode 新节点
   * @param {string} newNode.key 新节点
   * @param {object} newNode.left 左子节点指针
   * @param {object} newNode.right 右子节点指针
   */
  function insertNode(node, newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      } else {
        insertNode(node.left,newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  /**
   * 中序遍历，以上行顺序访问BST所有节点，从最小到最大
   * @param {function} callback 回调函数
   */
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  };
  /**
   * 中序便利辅助函数
   * @param {object} node 节点
   * @param {string} node.key 节点值
   * @param {object} node.left 左子节点指针
   * @param {object} node.right 右子节点指针
   * @param {function} callback 回调函数
   */
  function inOrderTraverseNode(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left,callback);
      callback(node.key);
      inOrderTraverseNode(node.right,callback);
    }
  }
  
  /**
   * 先序遍历，优先于后代节点的顺序访问每个节点
   */
  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root,callback);
  };
  function preOrderTraverseNode(node,callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left,callback);
      preOrderTraverseNode(node.right,callback);
    }
  }

  /**
   * 后序遍历，先访问节点的后代节点，再访问节点本身
   */
  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root,callback);
  };
  function postOrderTraverseNode(node,callback){
    if(node.key !== null){
      postOrderTraverseNode(node.left,callback);
      postOrderTraverseNode(node.right,callback);
      callback(node.key);
    }
  }

  /**
   * 返回树中最大值
   * @return {number} 
   */
  this.max = function(){
    return maxNode(root);
  };
  function maxNode(node){
    if(node){
      while(node && node.right !== null){
        node = node.right;
      };

      return node.key;
    }
    return null;
  };

  /**
   * 返回树中最小值
   * @return {Number}
   */
  this.min = function(){
    return miniNode(root);
  };
  function miniNode(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      };

      return node.key;
    };
    return null;
  };

  /**
   * 删除树中的某个值
   * @param {Number} key 需要删除的值
   */
  this.remove = function(key){
    root = removeNode(root,key);
  };
  function removeNode(node,key){
    if(node == null) return null;

    if(key < node.key){
    
      node.left = removeNode(node.left, key);
      return node;
    
    } else if (key > node.key){
    
      node.right = removeNode(node.right, key);
      return node;
    
    } else {
      
      if(node.left == null && node.right == null){
        node = null;
        return node;
      };

      if(node.left == null){
        node = node.right;
        return node;
      } else if(node.right == null){
        node = node.left;
        return node;
      };

    };

    let aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  };
  function findMinNode(node){
    while(node && node.left !== null) node = node.left;
    return node;
  };

  /**
   * 搜索特定值
   * @param {Number} key
   */
  this.search = function(key){
    return searchNode(root,key);
  };
  function searchNode(node,key){
    if(node == null){
      return false;
    };

    if(key < node.key){
      return searchNode(node.left,key);
    } else if(key > node.key){
      return searchNode(node.right,key);
    } else {
      return true;
    }
  };
}

let tree = new BinarySearchTree();

tree.insert(21);
tree.insert(15);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(22);
tree.insert(101);

const i = tree.getTree();
// const max = tree.max();
// const min = tree.min();
// const hasSearch = tree.search(21);
// const notSearch = tree.search(0);

console.log(`tree: ${JSON.stringify(i)}`);
// console.log(`max: ${JSON.stringify(max)}`);
// console.log(`min: ${JSON.stringify(min)}`);
// console.log(`hasSearch 21 : ${hasSearch}`);
// console.log(`notSearch 0 : ${notSearch}`);
tree.remove(7);
console.log(`tree: ${JSON.stringify(i)}`);