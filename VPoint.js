/**
 * Created by danielkrajnak on 1/26/17.
 */
function  VPoint(x, y) {
    this.x = x;
    this.y = y;
}

VPoint.prototype.distance = function(pointA, pointB){
    return Math.sqrt((pointA.x-pointB.x)*(pointA.x-pointB.x)+(pointA.y-pointB.y)*(pointA.y-pointB.y));
}