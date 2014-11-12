import DS from 'ember-data';

//export default DS.FixtureAdapter.extend();
//var db = new PouchDB('mydb');
//db.sync('http://192.168.1.101:5984/mydb', {live: true});

//export default EmberPouch.Adapter.extend({
//  db: db
//});

export default DS.LFAdapter.extend({
  namespace: 'todos'
});
