/**
 * Created by danielkrajnak on 1/29/17.
 */
function VEdge(start, leftarc, rightarc, goingRight){

    this.start = start; //VPoint at which this edge starts
    this.end = null; //VPoint at which this edge this edge ends. Updated as necessary when sweep line moves
    //BST is organized by end, but edges only cross when there is a circle event

    this.leftarc = leftarc;   //arc to the left of the edge
    this.rightarc = rightarc;   //arc to the right of this edge

    this.goingRight = goingRight; //Boolean to determine direction.
    if(goingRight  == null) console.log("Edge goingRight is null!  Start at: "+this.start);

    this.parent = null; //Organized with VParabola into binary tree
    this._left = null;
    this._right = null;
}

//Getters and Setters:
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
        be going towards or away from the midpoint.  Turn your computer upside-down and watch this video if this
        doesn't make sense https://www.youtube.com/watch?v=k2P9yWSMaXE
         */
        var midpoint = new VPoint((this.leftarc.site.x+this.rightarc.site.x)/2, (this.leftarc.site.y+this.rightarc.site.y)/2);
        var slope = (midpoint.y-this.start.y)/(midpoint.x-this.start.x);
        if(!this.goingRight) slope = -slope;
        if(midpoint.x< this.start.x) slope = -slope;

        return slope;
    }
}

//Returns VPoint of intersection between this and another edge.
VEdge.prototype.findIntersection = function(edgeb){
    /* y - y1 = m1(x-x1)
    x = (y-y1+m1x1)/m1
    (y-y2+m2x2)/m2 = (y-y1+m1x1)/m1
    solve for y
    y = (m1y2 - m1m2x2 - m2y1 + m1m2x1)/(m1 - m2)
     */
    var m1 = this.slope;
    var m2 = edgeb.slope;

    if(m1 - m2 == 0) return false;  //parallel.

  var x1 = this.start.x;
    var y1 = this.start.y;

    var x2 = edgeb.start.x;
    var y2 = edgeb.start.y;

    var yIntesect = (m1*y2 - m1*m2*x2 - m2*y1 + m1*m2*x1)/(m1 - m2);
    //x = (y-y1+m1x1)/m1

    var xIntersect =  (yIntesect - y1+m1*x1) / m1;

    return new VPoint(xIntersect, yIntesect);

}