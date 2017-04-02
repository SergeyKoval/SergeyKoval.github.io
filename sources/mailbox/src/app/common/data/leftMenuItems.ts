export const LEFT_MENU_ITEMS: LeftMenuItem[] = [
  {
    type: 'MAIL',
    name: 'Mails',
    icon: 'fa fa-envelope',
    subItems: [
      {
        type: 'INBOX',
        name: 'Inbox',
        icon: 'fa fa-inbox',
        countLabel: 4
      },
      {
        type: 'SENT',
        name: 'Sent',
        icon: 'fa fa-send-o',
        countLabel: 0
      },
      {
        type: 'DRAFT',
        name: 'Drafts',
        icon: 'fa fa-edit',
        countLabel: 0
      },
      {
        type: 'TRASH',
        name: 'Trash',
        icon: 'fa fa-trash-o',
        countLabel: 2
      }
    ]
  },
  {
    type: 'CONTACTS',
    name: 'Contacts',
    icon: 'fa fa-address-book',
    subItems: [
      {
        type: 'ALL',
        name: 'All',
      }
    ]
  }
];
