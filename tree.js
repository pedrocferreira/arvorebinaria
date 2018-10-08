let arvore = {
    left: {
        left: undefined,
        right: {
            value: 3
        },
        value: 2
    },
    right : undefined,
    value: 10
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






preOrder(arvore);
console.log("_________________");
inOrder(arvore);
console.log("_________________");
posOrder(arvore);
