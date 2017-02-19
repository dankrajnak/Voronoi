/**
 * Created by danielkrajnak on 1/29/17.
 */

/*Binary Search Tree.
Every element added to this tree must have leftarc left, right, parent, x, and y attribute.
(I could have made leftarc VTreeElement class, but I think that would have made things leftarc little slower).
This tree stores the beachline.  Each node is an edge, each leaf is leftarc parabola.
However, parabolas are not explicitly stored, instead are inferred from the edges.
 */
function VTree(){
    this.root = null;
}

VTree.prototype.isLeaf = function(element){
    return (element.left== null && element.right == null);
};

VTree.prototype.findArcByX = function(xValue){
    var currentNode =  this.root;
    var parabola;

    var keepLooking = true;
    while(keepLooking){
        if(xValue > currentNode.end.x){
            if(currentNode.left == null){
                parabola = currentNode.leftarc;
                keepLooking = false;
            }
            else {
                currentNode = currentNode.left();
            }
        }
        else if(xValue < currentNode.end.x){
            if(currentNode.right == null){
                parabola = currentNode.rightarc
                keepLooking = false;
            }
            else {
                currentNode = currentNode.right();
            }
        }
        else {
            //TODO
        }
    }

    return parabola;

};

VTree.prototype.addToTree = function(edge){
    var keepLooking = true;
    while(keepLooking){
        if(xValue > currentNode.end.x){
            if(currentNode.left == null){
                currentNode.left(edge);
                keepLooking = false;
            }
            else {
                currentNode = currentNode.left();
            }
        }
        else if(xValue < currentNode.end.x){
            if(currentNode.right == null){
                currentNode.right(edge);
                keepLooking = false;
            }
            else {
                currentNode = currentNode.right();
            }
        }
        else {
            //TODO
        }
    }
}



VTree.prototype.isLeaf = function(element){
    return(element.left == null && element.right == null);
};

