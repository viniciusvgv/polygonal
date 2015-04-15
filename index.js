function Polygonal(){}

Polygonal.prototype.getSGonal = function(sides, n) {
  return sides > 2 && n > 0 ? (sides - 2) * n * (n - 1) / 2 + n : null;
}

Polygonal.prototype.getTriangular = function(n) {
  return Polygonal.prototype.getSGonal(3, n);
}

Polygonal.prototype.getSquare = function(n) {
  return Polygonal.prototype.getSGonal(4, n);
}

Polygonal.prototype.getPentagonal = function(n) {
  return Polygonal.prototype.getSGonal(5, n);
}

Polygonal.prototype.getHexagonal = function(n) {
  return Polygonal.prototype.getSGonal(6, n);
}

Polygonal.prototype.getHeptagonal = function(n) {
  return Polygonal.prototype.getSGonal(7, n);
}

Polygonal.prototype.getOctagonal = function(n) {
  return Polygonal.prototype.getSGonal(8, n);
}

Polygonal.prototype.getNonagonal = function(n) {
  return Polygonal.prototype.getSGonal(9, n);
}

Polygonal.prototype.getEnneagonal = Polygonal.prototype.getNonagonal;

Polygonal.prototype.getDecagonal = function(n) {
  return Polygonal.prototype.getSGonal(10, n);
}

Polygonal.prototype.getHendecagonal = function(n) {
  return Polygonal.prototype.getSGonal(11, n);
}

Polygonal.prototype.getDodecagonal = function(n) {
  return Polygonal.prototype.getSGonal(12, n);
}

Polygonal.prototype.getTridecagonal = function(n) {
  return Polygonal.prototype.getSGonal(13, n);
}

Polygonal.prototype.getTetradecagonal = function(n) {
  return Polygonal.prototype.getSGonal(14, n);
}

Polygonal.prototype.getPentadecagonal = function(n) {
  return Polygonal.prototype.getSGonal(15, n);
}

Polygonal.prototype.getHexadecagonal = function(n) {
  return Polygonal.prototype.getSGonal(16, n);
}

Polygonal.prototype.getHeptadecagonal = function(n) {
  return Polygonal.prototype.getSGonal(17, n);
}

Polygonal.prototype.getOctadecagonal = function(n) {
  return Polygonal.prototype.getSGonal(18, n);
}

Polygonal.prototype.getEnneadecagonal = function(n) {
  return Polygonal.prototype.getSGonal(19, n);
}

Polygonal.prototype.getIcosagonal = function(n) {
  return Polygonal.prototype.getSGonal(20, n);
}

Polygonal.prototype.getTriacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(30, n);
}

Polygonal.prototype.getTetracontagonal = function(n) {
  return Polygonal.prototype.getSGonal(40, n);
}

Polygonal.prototype.getPentacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(50, n);
}

Polygonal.prototype.getHexacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(60, n);
}

Polygonal.prototype.getHeptacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(70, n);
}

Polygonal.prototype.getOctacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(80, n);
}

Polygonal.prototype.getEnneacontagonal = function(n) {
  return Polygonal.prototype.getSGonal(90, n);
}

Polygonal.prototype.getHectagonal = function(n) {
  return Polygonal.prototype.getSGonal(100, n);
}

Polygonal.prototype.getChiliagonal = function(n) {
  return Polygonal.prototype.getSGonal(1000, n);
}

Polygonal.prototype.getMyriagonal = function(n) {
  return Polygonal.prototype.getSGonal(10000, n);
}

module.exports = new Polygonal();
