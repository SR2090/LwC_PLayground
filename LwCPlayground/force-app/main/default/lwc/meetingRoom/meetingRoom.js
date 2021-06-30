import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoom; //{roomName:'A-01', roomCapacity:'12'}
}