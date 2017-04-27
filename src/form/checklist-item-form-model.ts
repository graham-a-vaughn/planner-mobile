import { AbstractFormModel } from './abstract-form-model';
import { Validators } from '@angular/forms';

export class ChecklistItemFormModel extends AbstractFormModel {


  validators: any = { 'description': Validators.required };

}
