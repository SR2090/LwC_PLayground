import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from '../pubsub/pubsub';
// we need current page reference so we will import that here
import { CurrentPageReference } from 'lightning/navigation';
export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;
    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles :true});

        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubRoomInfo', this.meetingRoomInfo);
    }
}