function Run()
{
  var data = theJSON.data;

  let maxLat = -Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let minLon = Infinity;
  let topLeftPoint = { pointId: null, latitude: null, longitude: null };
  let topRightPoint = { pointId: null, latitude: null, longitude: null };
  let bottomLeftPoint = { pointId: null, latitude: null, longitude: null };
  let bottomRightPoint = { pointId: null, latitude: null, longitude: null };

  data.forEach(point => {
    if (point.lat > maxLat) {
      maxLat = point.lat;
    }
    if (point.lon > maxLon) {
      maxLon = point.lon;
    }
    if (point.lat < minLat) {
      minLat = point.lat;
    }
    if (point.lon < minLon) {
      minLon = point.lon;
    }

      topRightPoint = { pointId: point.pointId, latitude: maxLat, longitude: maxLon };
      topLeftPoint = { pointId: point.pointId, latitude: maxLat, longitude: minLon };
      bottomLeftPoint = { pointId: point.pointId, latitude: minLat, longitude: minLon };
      bottomRightPoint = { pointId: point.pointId, latitude: minLat, longitude: maxLon };
  });



 
var boundingBox = 
{
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}
  console.log("Bounding box computed for wesley.frazier@tamu.edu: ");
  console.log(boundingBox);
}