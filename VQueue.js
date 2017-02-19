/**
 * Created by danielkrajnak on 1/27/17.
 */
//Priority Queue
function Vqueue(){
    this.eventQueue = [];

}

Vqueue.prototype.length = function(){
    return this.eventQueue.length;
};

Vqueue.prototype.push = function(element){
    this.eventQueue.push(element);
};

Vqueue.prototype.pop = function(){
    Vqueue.prototype.sortByY(this.eventQueue);
    return this.eventQueue.pop();
};

Vqueue.prototype.sortByY = function(queue){
    var sortTheQueue = function(a,b){
        var ay = null;
        var by = null;
        if(a.siteevent){
            ay = a.point.y;
        }
        else{
            ay = a.parabola.site.y;
        }
        if(b.siteevent){
            by = b.point.y;
        }
        else{
            by = b.parabola.site.y;
        }
        return by-ay;
    };
    if(queue){
        queue.sort(sortTheQueue);
    }
    else {
        this.eventQueue.sort(sortTheQueue);
    }
};