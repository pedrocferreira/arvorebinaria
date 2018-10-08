


const arvore = {}
insert(arvore, 99999)
function insert(tree, value) {
    if (tree.value) {
        if (value > tree.value) {
            insert(tree.right, value);
        } else {
            insert(tree.left, value);
        }

    } else {
        tree.value = value;
        tree.rigth = {}
        tree.left = {}
    }

}


 function searsh(tree, value){
     if(!tree.value || tree.value === value){
         return tree.value
     }
     if(value < tree.value){
         return searsh(tree.left.value)
     }

     return searsh(tree.right.value);

 }
 
 function remove (tree, value){
     
     
    if(tree == null){
        console.log("Arvore está vazia ");
    }
    if(value < tree.value){
        tree.left = remove(tree.left, value)
    }
    else if(value > tree.value){
        tree.right = remove(tree.right, value)
    }
    else if(tree.left != null && tree.right != null){
        console.log("Removeu o valor :", tree.value);
        tree.value = tree.encontrarMinimo(tree.right);

    }
     else{
         console.log("Removeu o valor", tree.value);
        tree = (tree.left == null) ? tree.left : tree.right;
     }

 }
 function encontrarMinimo(tree) {
     if(tree != null){
         while (tree.left != null) {
             tree = tree.left;
             
         }
     }

     return tree; 
     
 }

function preOrder(tree) {
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

function inOrder(tree) {
    tree.left && inOrder(tree.left);
    tree.right && inOrder(tree.right);
    console.log(tree.value);
}
function posOrder(tree) {
    tree.left && posOrder(tree.left);
    console.log(tree.value);
    tree.right && posOrder(tree.right);
}









function add() {
    let novoNumer = null ;
    console.log(novoNumer);
     
     novoNumer = document.getElementById("valorInput").value;
    insert(arvore, novoNumer)
    console.log(arvore);
     
    

}