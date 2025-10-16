export class Patient {
  public id: number;
  private name: string;
  private nic: string;
  private address: string;
  private bloodGroup: string;
  private category: string;
  private gender: string;
  private contact: string;
  private notes: string;
  private age: string;
  private allergies: string;

  constructor(
    id: number,
    name: string,
    nic: string,
    address: string,
    bloodGroup: string,
    category: string,
    gender: string,
    contact: string,
    notes: string,
    age: string,
    allergies: string
  ) {
    this.id = id;
    this.name = name;
    this.nic = nic;
    this.address = address;
    this.bloodGroup = bloodGroup;
    this.category = category;
    this.gender = gender;
    this.contact = contact;
    this.notes = notes;
    this.age = age;
    this.allergies = allergies;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
  public getNic(): string {
    return this.nic;
  }
  public getAddress(): string {
    return this.address;
  }
  public getBloodGroup(): string {
    return this.bloodGroup;
  }
  public getCategory(): string {
    return this.category;
  }
  public getGender(): string {
    return this.gender;
  }
  public getContact(): string {
    return this.contact;
  }
  public getNotes(): string {
    return this.notes;
  }
  public getAge(): string {
    return this.age;
  }
  public getAllergies(): string {
    return this.allergies;
  }

  //

  public setName(name: string) {
    this.name = name;
  }
}
