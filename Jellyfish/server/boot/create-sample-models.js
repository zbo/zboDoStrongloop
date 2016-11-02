// /**
//  * Created by bob on 16/11/2.
//  */
// module.exports = function(app) {
//   app.dataSources.mongodb.automigrate('CoffeeShop', function(err) {
//     if (err) throw err;
//
//     app.models.Widget.create([{
//       name: 'Bel Cafe',
//       city: 'Vancouver'
//     }, {
//       name: 'Three Bees Coffee House',
//       city: 'San Mateo'
//     }, {
//       name: 'Caffe Artigiano',
//       city: 'Vancouver'
//     }, ], function(err, widgets) {
//       if (err) throw err;
//
//       console.log('Models created: \n', widgets);
//     });
//   });
// };
