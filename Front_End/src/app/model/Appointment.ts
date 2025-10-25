export class Appointment {
  private id: number;
  private type: string;
  private qr: string;
  public dateAndTime: string | null;
  private description: string;
  private status: string;
  private roomNumber: string;
  private qNumber: number;
  private patientId: number;
  private adminId: number;

  constructor(
    id: number,
    type: string,
    qr: string,
    dateAndTime: string,
    description: string,
    status: string,
    roomNumber: string,
    qNumber: number,
    patientId: number,
    adminId: number
  ) {
    this.id = id;
    this.type = type;
    this.qr = qr;
    this.dateAndTime = dateAndTime;
    this.description = description;
    this.status = status;
    this.roomNumber = roomNumber;
    this.qNumber = qNumber;
    this.patientId = patientId;
    this.adminId = adminId;
  }

  public getID(): number {
    return this.id;
  }
  public getType(): string {
    return this.type;
  }
  public getQr(): string {
    return this.qr;
  }

  public getLocalDescription(): string {
    return this.description;
  }
  public getStatus(): string {
    return this.status;
  }
  public getRoomNumber(): string {
    return this.roomNumber;
  }
  public getQnumber(): number {
    return this.qNumber;
  }
  public getPatientId(): number {
    return this.patientId;
  }
  public getAdminId(): number {
    return this.adminId;
  }
}
