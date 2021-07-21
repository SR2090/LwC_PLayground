import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
   @api room; //{roomName:'A-01', roomCapacity:'12'}
}