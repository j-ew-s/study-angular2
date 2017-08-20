import { FormControl } from '@angular/forms'

export class EmailValidator {

    static shouldBeValid(control: FormControl) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!pattern.test(control.value)){
            return {shouldBeValid : true}
        }
        return null
    }
    
}