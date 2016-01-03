import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  //attrs: {
  //  payment: { serialize: 'ids', deserialize: 'id',embedded: 'always'}
  //}
    attrs: {
      //user: {embedded: 'always'},
      payment: {embedded: 'always'},
  //    lines: {embedded: 'always'}
    }
});
