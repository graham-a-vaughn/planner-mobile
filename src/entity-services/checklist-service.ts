import { Injectable } from '@angular/core';
import { ChecklistFormModel } from '../form/checklist-form-model';

@Injectable()
export class ChecklistService {

  checklistFormModel: ChecklistFormModel = new ChecklistFormModel();

  getFormGroup(checklist) {
    return this.checklistFormModel.objectToFormGroup(checklist);
  }

  addItemAndForm(checklist, checklistFormGroup) {
    this.checklistFormModel.addItemAndForm(checklist, checklistFormGroup);
  }
}
