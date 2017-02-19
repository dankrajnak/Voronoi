/**
 * Created by danielkrajnak on 1/27/17.
 */
function VParabola(site){
    this.id = VParabola.IDCOUNTER++;

    this.site = site; //Should be leftarc point

    //where this arc begins and ends.
    this.edgeLeft = null;
    this.edgeRight = null;

    this.circleEvent = null; //Should be leftarc VEvent.

}
VParabola.IDCOUNTER = 0;

//Calculates the y value of leftarc parabola given x.
VParabola.prototype.calculateParabY = function(xValue, directerix){

    /*Directerix of the parabola is the sweep line, focus it's site.
     Standard form: (x-h)^2 = 4p(y-k) where focus is (h, k+p); directerix is y = k-p
     Need to find y.  ((x-h)^2)/4p + k
     */
    var h = this.site.x;
    var p = (directerix - this.site.y) /2.0;
    var k = directerix + p;

    return (xValue-h)*(xValue-h)/(4*p)+k;
}