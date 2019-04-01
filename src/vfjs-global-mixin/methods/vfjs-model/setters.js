import { cloneDeep, isEqual } from '../../../helpers';
import {
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_MODEL_UPDATED,
} from '../../../constants';

const vfjsModelSetters = {
  setVfjsFieldModel(value, key) {
    this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
  setVfjsModel(model, silent = false) {
    if (!isEqual(model, this.vfjsModel)) {
      this.vfjsModel = cloneDeep(model);

      if (!silent) {
        this.vfjsBus.$emit(VFJS_EVENT_MODEL_UPDATED, this.getVfjsModel());
      }
    }
  },
};

export default vfjsModelSetters;
