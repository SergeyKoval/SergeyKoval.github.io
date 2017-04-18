export class Contact {
  private constructor(
    public email: string,
    public firstName?: string,
    public lastName?: string
  ) {}

  public static init(email: string, firstName?: string, lastName?: string): Contact {
    return new this(email, firstName || null, lastName || null);
  }

  public static initFromContact(contact: Contact): Contact {
    return new this(contact.email, contact.firstName, contact.lastName);
  }

  public static initFromProfile(profile: Profile): Contact {
    return new this(profile.email, profile.firstName, profile.lastName);
  }

  public isEqual(contact: Contact): boolean {
    return contact.email === this.email && contact.firstName === this.firstName && contact.lastName === this.lastName;
  }
}
