import { cloneDeep, isEqual } from '../../../helpers';
import { VFJS_EVENT_STATE_UPDATED } from '../../../constants';

const vfjsUiSetters = {
  setVfjsUiSchema(uiSchema = []) {
    const newVfjsUiSchema = uiSchema.reduce(
      (fields, field, index) => [...fields, this.vfjsHelperGenerateField(field, index)],
      [],
    );

    if (!isEqual(newVfjsUiSchema, this.vfjsUiSchema)) {
      this.vfjsUiSchema = cloneDeep(newVfjsUiSchema);
      this.setVfjsUiFieldsActive();
    }
  },
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
    this.vfjsFieldsActiveModels = this.getVfjsFieldsModels(this.vfjsFieldsActive);

    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, () => {
      this.setVfjsFields();
    });
  },
  setVfjsFields() {
    this.vfjsFields = this.getVfjsFields(this.vfjsFieldsActive);
  },
};

export default vfjsUiSetters;
