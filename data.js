// Initializations for access outside csv functions. 
// -Data and averages over the represented years.
// -each set of averages has key 'world': <world average> which represents
//   the average of all averages
var edRanks;
var edRanksAvgs;
var GDPGrowth;
var GDPGrowthAvgs;
var povertyGap5;
var povertyGap5Avgs;
var povertyGap125;
var povertyGap125Avgs;
var undernourishment;
var undernourishmentAvgs;
var genderGap;
var genderGapAvgs;
var childMort;
var childMortAvgs;

// USE THIS FOR TYING COUNTRY CODES TO COUNTRY NAMES
// for instance: when adding hover effects, each countryPath has an id
//    which is an ISO number (see Wikipedia) associated with it. Use 
//    isoCodes[0][id] to get the name associated with that ISO number
var isoCodes;


var f = d3.format(".2f");


// get average ranks of the country object across the years represented
function getAvg(obj){ 
  var avg = 0.;
  var count = 0.;
  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || key == "Country" || isNaN(obj[key])) {
        //The current property is not a direct property of obj, or is not tied to a number
        continue;
    }
    avg += Number(obj[key]);
    count += 1;
  }
  avg /= count;
  return Number(f(avg));
}


d3.csv("EducationIndexRanks.csv", function (error, data) {
  edRanks = data;
  
  //extract averages
  edRanksAvgs = {'world': 0};
  edRanks.forEach(function (obj){
    var avg = getAvg(obj);
    edRanksAvgs[obj['Country']] = avg;
    edRanksAvgs['world'] += avg;
  })
  edRanksAvgs['world'] /= f(Object.keys(edRanksAvgs).length - 1) ;
  

});

d3.csv("isoCodes.csv", function (error, data) {
  isoCodes = data;
});

d3.csv("AnnualGDPGrowthRanks.csv", function (error, data) {
  GDPGrowth = data;

  //extract averages
  GDPGrowthAvgs = {'world': 0};
  GDPGrowth.forEach(function (obj){
    var avg = getAvg(obj);
    GDPGrowthAvgs[obj['Country']] = avg;
    GDPGrowthAvgs['world'] += avg;
  })
  GDPGrowthAvgs['world'] /= f(Object.keys(GDPGrowthAvgs).length - 1) ;

});

d3.csv("ChildUnder5MortPer1000Prob.csv", function (error, data) {
  childMort = data;

  //extract averages
  childMortAvgs = {'world': 0};
  childMort.forEach(function (obj){
    var avg = getAvg(obj);
    childMortAvgs[obj['Country']] = avg;
    childMortAvgs['world'] += avg;
  })
  childMortAvgs['world'] /= f(Object.keys(childMortAvgs).length - 1) ;

});

d3.csv("GenderGap.csv", function (error, data) {
  genderGap = data;

  //extract averages
  genderGapAvgs = {'world': 0};
  genderGap.forEach(function (obj){
    var avg = getAvg(obj);
    genderGapAvgs[obj['Country']] = avg;
    genderGapAvgs['world'] += avg;
  })
  genderGapAvgs['world'] /= f(Object.keys(genderGapAvgs).length - 1) ;

});

d3.csv("PovertyGap5DollarsADayRanks.csv", function (error, data) {
  povertyGap5 = data;

  //extract averages
  povertyGap5Avgs = {'world': 0};
  povertyGap5.forEach(function (obj){
    var avg = getAvg(obj);
    povertyGap5Avgs[obj['Country']] = avg;
    povertyGap5Avgs['world'] += avg;
  })
  povertyGap5Avgs['world'] /= f(Object.keys(povertyGap5Avgs).length - 1) ;

});

d3.csv("PovertyGapDollar25Ranks.csv", function (error, data) {
  povertyGap125 = data;

  //extract averages
  povertyGap125Avgs = {'world': 0.};
  povertyGap125.forEach(function (obj){
    var avg = getAvg(obj);
    povertyGap125Avgs[obj['Country']] = avg;
    povertyGap125Avgs['world'] += avg;
  })
  povertyGap125Avgs['world'] /= f(Object.keys(povertyGap125Avgs).length - 1) ;

});

d3.csv("UndernourishmentPrevalenceRanks.csv", function (error, data) {
  undernourishment = data;

  //extract averages
  undernourishmentAvgs = {'world': 0};
  undernourishment.forEach(function (obj){
    var avg = getAvg(obj);
    undernourishmentAvgs[obj['Country']] = avg;
    undernourishmentAvgs['world'] += avg;
  })
  undernourishmentAvgs['world'] /= f(Object.keys(undernourishmentAvgs).length - 1) ;

});