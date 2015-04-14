function Polygonal(){}

Polygonal.getSGonal = function(sides, n) {
  return sides > 2 && n > 0 ? (sides - 2) * n * (n - 1) / 2 + n : null;
}

Polygonal.getTriangular = function(n) {
  return Polygonal.getSGonal(3, n);
}

Polygonal.getSquare = function(n) {
  return Polygonal.getSGonal(4, n);
}

Polygonal.getPentagonal = function(n) {
  return Polygonal.getSGonal(5, n);
}

Polygonal.getHexagonal = function(n) {
  return Polygonal.getSGonal(6, n);
}

Polygonal.getHeptagonal = function(n) {
  return Polygonal.getSGonal(7, n);
}

Polygonal.getOctagonal = function(n) {
  return Polygonal.getSGonal(8, n);
}

Polygonal.getNonagonal = function(n) {
  return Polygonal.getSGonal(9, n);
}

Polygonal.getEnneagonal = Polygonal.getNonagonal;

Polygonal.getDecagonal = function(n) {
  return Polygonal.getSGonal(10, n);
}

Polygonal.getHendecagonal = function(n) {
  return Polygonal.getSGonal(11, n);
}

Polygonal.getDodecagonal = function(n) {
  return Polygonal.getSGonal(12, n);
}

Polygonal.getTridecagonal = function(n) {
  return Polygonal.getSGonal(13, n);
}

Polygonal.getTetradecagonal = function(n) {
  return Polygonal.getSGonal(14, n);
}

Polygonal.getPentadecagonal = function(n) {
  return Polygonal.getSGonal(15, n);
}

Polygonal.getHexadecagonal = function(n) {
  return Polygonal.getSGonal(16, n);
}

Polygonal.getHeptadecagonal = function(n) {
  return Polygonal.getSGonal(17, n);
}

Polygonal.getOctadecagonal = function(n) {
  return Polygonal.getSGonal(18, n);
}

Polygonal.getEnneadecagonal = function(n) {
  return Polygonal.getSGonal(19, n);
}

Polygonal.getIcosagonal = function(n) {
  return Polygonal.getSGonal(20, n);
}

Polygonal.getTriacontagonal = function(n) {
  return Polygonal.getSGonal(30, n);
}

Polygonal.getTetracontagonal = function(n) {
  return Polygonal.getSGonal(40, n);
}

Polygonal.getPentacontagonal = function(n) {
  return Polygonal.getSGonal(50, n);
}

Polygonal.getHexacontagonal = function(n) {
  return Polygonal.getSGonal(60, n);
}

Polygonal.getHeptacontagonal = function(n) {
  return Polygonal.getSGonal(70, n);
}

Polygonal.getOctacontagonal = function(n) {
  return Polygonal.getSGonal(80, n);
}

Polygonal.getEnneacontagonal = function(n) {
  return Polygonal.getSGonal(90, n);
}

Polygonal.getHectagonal = function(n) {
  return Polygonal.getSGonal(100, n);
}

Polygonal.getChiliagonal = function(n) {
  return Polygonal.getSGonal(1000, n);
}

Polygonal.getMyriagonal = function(n) {
  return Polygonal.getSGonal(10000, n);
}

module.exports = Polygonal;
