import {Contact} from 'app/common/model/Contact';

export class Mail {
  public constructor(
    public owner: string,
    public ownerType: string,
    public type: string,
    public favorite: boolean,
    public read: boolean,
    public sender: Contact,
    public receivers: Contact[],
    public topic: string,
    public body: string,
    public time: number,
    public $key?: string
  ) {}
}
