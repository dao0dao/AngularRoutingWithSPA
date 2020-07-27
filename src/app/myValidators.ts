import { ValidatorFn, AbstractControl } from '@angular/forms'

export function startWithSpace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if(control.value.startsWith(' ')) {
            return {'startWithSpace' : true}
        } else{
            null
        }
    };
}