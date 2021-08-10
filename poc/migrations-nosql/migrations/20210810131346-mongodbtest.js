module.exports = {
  up(db) {
    return db.collection('test1').updateOne({name: 'Jose Ecos'}, {$set: {state: true}});
  },

  down(db) {
    return db.collection('test1').updateOne({name: 'Jose Ecos'}, {$unset: {state: null}});
  }
};
