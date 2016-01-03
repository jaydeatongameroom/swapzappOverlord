import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default DS.ActiveModelSerializer.extend({
  isNewSerializerAPI: true,
  primaryKey: '_id'
});
