/**
 * Created by danielkrajnak on 1/26/17.
 */

/**
 * To dos
 * Check Circle Event
 * Remove Parabola
 * P5.js visualization
 *
 */

/**Implementation of Fortune's algorithm using pseudocode found here:
 * http://blog.ivank.net/fortunes-algorithm-and-implementation.html
 * as a guide.  Also made with consultation of http://www.cs.sfu.ca/~binay/813.2011/Fortune.pdf
 *
*/

function Voronoi(){
    this.eventQueue = new Vqueue();
    this.edges = [];

    this.beachLine = new VTree();
    this.sweepLine = 0; //TODO find where to update this.

}

//Creates Voronoi diagram.  Looks simple.  There's a lot hidden.
Voronoi.prototype.Make = function(sites, width, height){
    for(i = 0; i<sites.length; i++){
        var siteEvent = new VEvent(true);
        siteEvent.point = sites[i];
        this.eventQueue.push(siteEvent);
    }


    while(this.eventQueue.length >0){
        var event = queue.pop();
        if(event.siteEvent){
            Voronoi.prototype.insertParabola(event.point);
        }
        else{
            Voronoi.prototype.removeParabola(event.parabola)
        }
    }
};

//Getters
Voronoi.prototype.getEdges = function(){
    return this.edges;
};

Voronoi.prototype.getCells = function(){
    return this.cells;
};

/* H E L P E R   M E T H O D S */

//Adds parabola and edges to the beachline BST
Voronoi.prototype.insertParabola = function(point){
    var b = new VParabola(point);
    if(this.beachLine.root == null){
        this.beachLine.root = b;
    }
    var parabolaUnderSite = this.findArcByX(point.x);

    var a = new VParabola(parabolaUnderSite.site);
    var c = new VParabola(parabolaUnderSite.site);



    var parabIntersection = new VPoint(point.x, parabolaUnderSite.calculateParabY(point.x, this.sweepLine));
    var edgeLeft = new VEdge(parabIntersection, a, b); //TODO add going right
    var edgeRight = new VEdge(parabIntersection, b, c); //TODO add going right

    a.edgeLeft = parabolaUnderSite.edgeLeft;
    a.edgeRight = edgeLeft;

    b.edgeLeft = edgeLeft;
    b.edgeRight = edgeRight;

    c.edgeLeft = edgeRight;
    c.edgeRight = parabolaUnderSite.edgeRight;

    this.beachLine.addToTree(edgeLeft);
    this.beachLine.addToTree(edgeRight);

    this.prototype.checkCircleEvent(a);
    this.prototype.checkCircleEvent(b);
};


//Removes parabola and edges from the beachline BST
Voronoi.prototype.removeParabola = function(parabola){

};


Voronoi.prototype.checkCircleEvent = function(parabola){
    var arcOnLeft = parabola.edgeLeft.leftarc;
    var arcOnRight = parabola.edgeRight.rightarc;

    if(arcOnLeft == null || arcOnRight == null || arcOnLeft.site == arcOnRight.site) return;

    var startPoint = parabola.edgeLeft.findIntersection(parabola.edgeRight);

    if(startPoint.y < parabola.edgeRight.start.y && startPoint.y < parabola.edgeLeft.start.y) return;

    var radius = VPoint.prototype.distance(startPoint, parabola.start);

    if(startPoint.y + radius < this.sweepLine) return;
    var circleEvent = new VEvent(false);

    circleEvent.parabola  = p;
    circleEvent.y = startPoint.y +radius;

    this.eventQueue.push(circleEvent);

    return;
};

Voronoi.prototype.finishEdge = function(){

};
