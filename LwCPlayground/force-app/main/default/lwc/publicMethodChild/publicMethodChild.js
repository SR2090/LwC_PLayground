import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Orange', value: 'orange' },
        { label: 'Pink', value: 'pink' },
    ];

    get selectedValues() {
        return this.value.join(',');
    }
    // Handle change is removed as the checkbox will be selected from
    // the input value in the parent component ( It handler will set the value)
    // handleChange(e) {
    //     this.value = e.detail.value;
    // }

    // method to take input from parent component and htne select the checkbox here
    // this must be called from the parent method so we need to make it public.
    @api
    selectCheckBox(ValueOfCheckBox){

    }

}