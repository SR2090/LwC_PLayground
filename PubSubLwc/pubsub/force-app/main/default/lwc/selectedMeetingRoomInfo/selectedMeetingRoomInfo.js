import { LightningElement, track, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class SelectedMeetingRoomInfo extends LightningElement {
    @track selectedMeetingRoom = {};
    connectedCallback(){
        registerListener('tileclick', this.onMeetingRoomSelectedHandler, this);
    }
    @wire(CurrentPageReference) pageReference;
    // when the user clicks the meeting room this will get called
    onMeetingRoomSelectedHandler(payload){
        this.selectedMeetingRoom = payload;
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    
}