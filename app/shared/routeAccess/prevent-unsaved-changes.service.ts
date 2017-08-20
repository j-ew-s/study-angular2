import {CanDeactivate} from '@angular/router';

import {BaseController} from '../baseController/base-controller.interface';

export class PreventUnsavedChanges implements CanDeactivate<BaseController>{
    
    canDeactivate(component: BaseController){
        console.log("Component", component);
        if(component.isFormDirty() && !component.isSaveMethod)
        {
            return confirm("Do you want to lose your changes?");
        }
        else
            return true;
    }
}