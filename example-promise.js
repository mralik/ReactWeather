// function getTempCallback (location,callback) {
//   callback(undefined, 78);
//   callback('City not found ');
// }
//
// getTempCallback('KL', function (err, temp){
//   if (err) {
//     console.log('error',err);
//   }else {
//     console.log('success',temp)
//   }
//
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     setTimeout (function(){
//       resolve(79);
//       reject('city not found');
//     },1000);
//   });
// }
//
// getTempPromise('KL').then(function(temp){
//   console.log('Promise success', temp);
// }, function (err){
//   console.log('Promise error', err);
//
// });


//  challenge areea
function addPromise (a,b){
return new Promise (function (resolve, reject){
  if (typeof a === 'number' && typeof b === 'number' ){
    resolve(a+b);

  } else {
    reject ('A & B need to be numbers');
  }
});

}

addPromise(2,3).then(function (sum){
  console.log('success',sum);
}, function (err) {
  console.log('error',err);

});

addPromise ('ali',9).then (function (sum){
  console.log('this should not show up');
}, functino (err){
  console.log('this should appear',err);
});
