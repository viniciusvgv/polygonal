var assert = require("assert"), polygonal = require("./../index")

describe("Polygonal", function(){
  describe(".getSGonal(sides, n)", function(){
    var subject = polygonal.getSGonal;

    it("should return null when n or sides are not natural numbers greater than zero(n)", function(){
      assert.equal(null, subject(-3,1));
      assert.equal(null, subject(3,-1));
      assert.equal(null, subject(-3,-1));
      assert.equal(null, subject(0,1));
      assert.equal(null, subject(3,0));
      assert.equal(null, subject(-3,0));
    })

    it("should return null when sides are less than 3", function(){
      assert.equal(null, subject(2, 1));
    })
  })

  describe(".getTriangular(n)", function(){
    var subject = polygonal.getTriangular;

    it("should return 3 when n is 2", function(){
      assert.equal(3, subject(2));
    })
  })

  describe(".getSquare(n)", function(){
    var subject = polygonal.getSquare;

    it("should return 4 when n is 2", function(){
      assert.equal(4, subject(2));
    })
  })

  describe(".getPentagonal(n)", function(){
    var subject = polygonal.getPentagonal;

    it("should return 5 when n is 2", function(){
      assert.equal(5, subject(2));
    })
  })

  describe(".getHexagonal(n)", function(){
    var subject = polygonal.getHexagonal;

    it("should return 6 when n is 2", function(){
      assert.equal(6, subject(2));
    })
  })

  describe(".getHeptagonal(n)", function(){
    var subject = polygonal.getHeptagonal;

    it("should return 7 when n is 2", function(){
      assert.equal(7, subject(2));
    })
  })

  describe(".getOctagonal(n)", function(){
    var subject = polygonal.getOctagonal;

    it("should return 8 when n is 2", function(){
      assert.equal(8, subject(2));
    })
  })

  describe(".getNonagonal(n)", function(){
    var subject = polygonal.getNonagonal;

    it("should return 9 when n is 2", function(){
      assert.equal(9, subject(2));
    })
  })

  describe(".getEnneagonal(n)", function(){
    var subject = polygonal.getEnneagonal;

    it("should be equal to getNonagonal", function(){
      assert.equal(polygonal.getNonagonal(2), subject(2));
    })
  })

  describe(".getDecagonal(n)", function(){
    var subject = polygonal.getDecagonal;

    it("should return 10 when n is 2", function(){
      assert.equal(10, subject(2));
    })
  })

  describe(".getHendecagonal(n)", function(){
    var subject = polygonal.getHendecagonal;

    it("should return 11 when n is 2", function(){
      assert.equal(11, subject(2));
    })
  })

  describe(".getDodecagonal(n)", function(){
    var subject = polygonal.getDodecagonal;

    it("should return 12 when n is 2", function(){
      assert.equal(12, subject(2));
    })
  })

  describe(".getTridecagonal(n)", function(){
    var subject = polygonal.getTridecagonal;

    it("should return 13 when n is 2", function(){
      assert.equal(13, subject(2));
    })
  })

  describe(".getTetradecagonal(n)", function(){
    var subject = polygonal.getTetradecagonal;

    it("should return 14 when n is 2", function(){
      assert.equal(14, subject(2));
    })
  })

  describe(".getPentadecagonal(n)", function(){
    var subject = polygonal.getPentadecagonal;

    it("should return 15 when n is 2", function(){
      assert.equal(15, subject(2));
    })
  })

  describe(".getHexadecagonal(n)", function(){
    var subject = polygonal.getHexadecagonal;

    it("should return 16 when n is 2", function(){
      assert.equal(16, subject(2));
    })
  })

  describe(".getHeptadecagonal(n)", function(){
    var subject = polygonal.getHeptadecagonal;

    it("should return 17 when n is 2", function(){
      assert.equal(17, subject(2));
    })
  })

  describe(".getOctadecagonal(n)", function(){
    var subject = polygonal.getOctadecagonal;

    it("should return 18 when n is 2", function(){
      assert.equal(18, subject(2));
    })
  })

  describe(".getEnneadecagonal(n)", function(){
    var subject = polygonal.getEnneadecagonal;

    it("should return 19 when n is 2", function(){
      assert.equal(19, subject(2));
    })
  })

  describe(".getIcosagonal(n)", function(){
    var subject = polygonal.getIcosagonal;

    it("should return 20 when n is 2", function(){
      assert.equal(20, subject(2));
    })
  })

  describe(".getTriacontagonal(n)", function(){
    var subject = polygonal.getTriacontagonal;

    it("should return 30 when n is 2", function(){
      assert.equal(30, subject(2));
    })
  })

  describe(".getTetracontagonal(n)", function(){
    var subject = polygonal.getTetracontagonal;

    it("should return 40 when n is 2", function(){
      assert.equal(40, subject(2));
    })
  })

  describe(".getPentacontagonal(n)", function(){
    var subject = polygonal.getPentacontagonal;

    it("should return 50 when n is 2", function(){
      assert.equal(50, subject(2));
    })
  })

  describe(".getHexacontagonal(n)", function(){
    var subject = polygonal.getHexacontagonal;

    it("should return 60 when n is 2", function(){
      assert.equal(60, subject(2));
    })
  })

  describe(".getHeptacontagonal(n)", function(){
    var subject = polygonal.getHeptacontagonal;

    it("should return 70 when n is 2", function(){
      assert.equal(70, subject(2));
    })
  })

  describe(".getOctacontagonal(n)", function(){
    var subject = polygonal.getOctacontagonal;

    it("should return 80 when n is 2", function(){
      assert.equal(80, subject(2));
    })
  })

  describe(".getEnneacontagonal(n)", function(){
    var subject = polygonal.getEnneacontagonal;

    it("should return 90 when n is 2", function(){
      assert.equal(90, subject(2));
    })
  })

  describe(".getHectagonal(n)", function(){
    var subject = polygonal.getHectagonal;

    it("should return 100 when n is 2", function(){
      assert.equal(100, subject(2));
    })
  })

  describe(".getChiliagonal(n)", function(){
    var subject = polygonal.getChiliagonal;

    it("should return 1000 when n is 2", function(){
      assert.equal(1000, subject(2));
    })
  })

  describe(".getMyriagonal(n)", function(){
    var subject = polygonal.getMyriagonal;

    it("should return 10000 when n is 2", function(){
      assert.equal(10000, subject(2));
    })
  })
})
