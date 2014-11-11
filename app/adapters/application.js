//import DS from 'ember-data';

//export default DS.FixtureAdapter.extend();
var db = new PouchDB('mydb');
//db.sync('http://localhost:5984/mydb', {live: true});

export default EmberPouch.Adapter.extend({
  db: db
});
