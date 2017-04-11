export const LEFT_MENU_ITEMS: LeftMenuItem[] = [
  {
    type: 'MAIL',
    name: 'Mails',
    href: 'mails',
    icon: 'fa fa-envelope',
    subItems: [
      {
        type: 'INBOX',
        name: 'Inbox',
        href: 'mails/inbox',
        icon: 'fa fa-inbox',
        countLabel: 4
      },
      {
        type: 'SENT',
        name: 'Sent',
        href: 'mails/sent',
        icon: 'fa fa-send-o',
        countLabel: 0
      },
      {
        type: 'DRAFT',
        name: 'Drafts',
        href: 'mails/drafts',
        icon: 'fa fa-edit',
        countLabel: 0
      },
      {
        type: 'TRASH',
        name: 'Trash',
        href: 'mails/trash',
        icon: 'fa fa-trash-o',
        countLabel: 2
      }
    ]
  },
  {
    type: 'CONTACTS',
    name: 'Contacts',
    href: 'contacts',
    icon: 'fa fa-address-book',
    subItems: [
      {
        type: 'ALL',
        name: 'All',
        href: 'contacts/all',
      },
      {
        type: 'GROUP_1',
        name: 'Group 1',
        href: 'contacts/group1',
      },
      {
        type: 'GROUP_2',
        name: 'Group 2',
        href: 'contacts/group2',
      }
    ]
  }
];
