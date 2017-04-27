
import { AbstractFormModel } from './abstract-form-model';
import { ChecklistItem } from '../entities/checklist-item';
import { ChecklistItemFormModel } from './checklist-item-form-model';
import { Validators } from '@angular/forms';

export class ChecklistFormModel extends AbstractFormModel {

  checklistItemFormModel : ChecklistItemFormModel = new ChecklistItemFormModel();
  arrayModels: any = { 'items': this.checklistItemFormModel };
  validators: any = { 'description': Validators.required };

  public addItemAndForm(checklist, checklistFormGroup) {
    var item = new ChecklistItem({ index: checklist.items.length })
    checklist.items.push(item);
    checklistFormGroup.items.push(this.checklistItemFormModel.objectToFormGroup(item));
  }

}
