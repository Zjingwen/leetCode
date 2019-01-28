/**
 * 二叉平衡树
 */

function adelsonVelekiiLandi(){
  let root = null;

  let Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  // 插入树节点
  this.insert = function(key){
    if (root == null){
      let newNode = new Node(key);
      root = newNode;
    } else {
      insertNode(root,key);
    }
  };
  function insertNode(node, element){
    
    if(node == null){
      node = new Node(element);
    } else if( element < node.key){
      node.left = insertNode(node.left,element);

      // if(node.left !== null){
      //   node.hl = heightNode(node.left);
      //   if(heightNode(node.left) - heightNode(node.right) > 1){
      //     // TODO 
      //   }
      // }
    } else if(element > node.key){
      node.right = insertNode(node.right,element);
      
      // if(node.right !== null){
      //   node.hr = heightNode(node.right);
      //   if(heightNode(node.right) - heightNode(node.left) > 1){
      //     // TODO
      //   }
      // }
    };

    return node;
  };
  function heightNode(node){
    if(node === null){
      return -1;
    }else{
      return Math.max(heightNode(node.left),heightNode(node.right)) +1;
    }
  };

  this.getTree = function(){
    return root;
  };
}

const tree = new adelsonVelekiiLandi();

tree.insert(21);
tree.insert(15);
// tree.insert(7);
// tree.insert(8);
// tree.insert(9);
// tree.insert(22);
// tree.insert(101);

let i = tree.getTree();
console.log(JSON.stringify(i));

