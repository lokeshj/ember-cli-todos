// routes/todos.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  },
  //afterModel: function (recordArray) {
    // This tells PouchDB to listen for live changes and
    // notify Ember Data when a change comes in.
    //new PouchDB('mydb').changes({
    //  since: 'now',
    //  live: true
    //}).on('change', function (docChanges) {
    //  recordArray.update();
    //  console.log(docChanges);
    //  if (docChanges.deleted) {
    //    var underscore = docChanges.id.indexOf('_'),
    //      docType = docChanges.id.substring(0, underscore),
    //      docId = docChanges.id.substring(docChanges.id.indexOf('_', underscore + 1) + 1);
    //
    //    var rec = recordArray.store.recordForId(docType, docId);
    //    recordArray.removeRecord(rec);
    //  }
    //});
  //}
});
