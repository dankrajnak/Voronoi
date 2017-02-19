/**
 * Created by danielkrajnak on 1/29/17.
 */
function VEdge(start, leftarc, rightarc, goingLeft){

    this.start = start; //VPoint at which this edge starts
    this.end = null; //VPoint at which this edge this edge ends. Updated as necessary when sweep line moves
    //BST is organized by end, but edges only cross when there is a circle event

    this.leftarc = leftarc;   //arc to the left of the edge
    this.rightarc = rightarc;   //arc to the right of this edge

    this.goingLeft = goingRight; //Boolean to determine direction.

    this.parent = null; //Organized with VParabola into binary tree
    this._left = null;
    this._right = null;
}

VEdge.prototype = {
    get left(){
        return this._left;
    },

    get right(){
        return this._right;
    },

    set left(left){
        left.parent = this;
        this._left = left;
    },

    set right(right){
        right.parent = this;
        this._right = right;
    },

    get slope(){
        /*This is tricky because if it's going up and to the right, positive slope; up and to the left, negative.
        down and to the right, negative; down and to the left, positive.  Direction matters and the line could
        be going towards or away from the midpoint.
         */
        var midpoint = new VPoint((this.leftarc.site.x+this.rightarc.site.x)/2, (this.leftarc.site.y+this.rightarc.site.y)/2);
        var slope = (midpoint.y-this.start.y)/(midpoint.x-this.start.x);
        if(!goingRight) slope = -slope;
        if(midpoint.x< this.start.x) slope = -slope;

        return slope;
    }
}
