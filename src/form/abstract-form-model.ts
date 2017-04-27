
import { FormGroup, FormArray, FormControl } from '@angular/forms';

export class AbstractFormModel {

  public arrayModels: any = {};
  public validators: any = {};

  public objectToFormGroup(obj) {
     var formGroupSrc = {};
     for (var p in obj) {
        if (obj.hasOwnProperty(p) && !this.arrayModels[p]) {
            if (this.validators[p]) {
                formGroupSrc[p] = new FormControl(obj[p], this.validators[p]);
            } else {
                formGroupSrc[p] = new FormControl(obj[p]);
            }
        } else if (this.arrayModels[p]) {
            var formArray =  new FormArray([]);
            var formModel = this.arrayModels[p];
            var objArray = obj[p];
            objArray.forEach(item => { formArray.push(formModel.objectToFormGroup(item))});
            formGroupSrc[p] = formArray;
        }
     }

     return new FormGroup(formGroupSrc);
  }
}


