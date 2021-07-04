import { LightningElement, track } from 'lwc';

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
}