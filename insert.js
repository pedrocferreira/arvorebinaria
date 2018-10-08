const arvore = {}
function insert(tree, value) {
    if(tree.value){
        if(value > tree.value){
            insert(tree.right , value);
        }else{
            insert(tree.left , value);
        }

    } else{
        tree.value = value;
        tree.rigth = {}
        tree.left = {}
    }
   
}
insert(arvore, 10);
insert(arvore, 9);
insert(arvore, 8);
insert(arvore, 1);



console.log(arvore);
