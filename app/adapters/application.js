import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://gameroom.swapzapp.com',
  namespace: 'api',
  headers: {
    "Authorization": "Basic <eDplYTNkMjQ3MGU2NWIwMTMwZjU0OTNlMWVkYmZmNDQ3ZQ==>"
  },
  //primaryKey: "_id"
});
