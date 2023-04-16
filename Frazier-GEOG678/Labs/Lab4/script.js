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
      topRightPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
    }
    if (point.lon > maxLon) {
      maxLon = point.lon;
      topRightPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
      bottomRightPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
    }
    if (point.lat < minLat) {
      minLat = point.lat;
      bottomLeftPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
      topLeftPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
    }
    if (point.lon < minLon) {
      minLon = point.lon;
      bottomLeftPoint = { pointId: point.pointId, latitude: point.lat, longitude: point.lon };
    }
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