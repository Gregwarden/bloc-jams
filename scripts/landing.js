var pointsArray = document.getElementsByClassName('point');

var revealPoints = function(point) {
   point.style.opacity = 1;
   point.style.transform = "scaleX(1) translateY(0)";
   points.style.msTransform = "scaleX(1) translateY(0)";
   points.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
     forEach(points, revealPoints);

     for (var b = 0; b < points.length; b++) {
       revealPoints(b);
     }

     window.onload = function() {
       if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
       var sellingPoints = document.getElementsByClassName('selling-points')[0]
       var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

       window.addEventListener('scroll', function(event) {
          console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
          if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }
   });
 }
 };
