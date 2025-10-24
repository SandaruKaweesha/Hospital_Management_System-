export class Appoiment {
  private id: number;
  private type: string;
  private qr: string;
  private localDateTime: string;
  private description: string;
  private status: string;
  private roomNumber: number;
  private qNumber: number;
  private patientId: number;
  private adminId: number;

  constructor(
    id: number,
    type: string,
    qr: string,
    localDateTime: string,
    description: string,
    status: string,
    roomNumber: number,
    qNumber: number,
    patientId: number,
    adminId: number
  ) {
    this.id = id;
    this.type = type;
    this.qr = qr;
    this.localDateTime = localDateTime;
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
  public getLocalDateTime(): string {
    return this.localDateTime;
  }
  public getLocalDescription(): string {
    return this.description;
  }
  public getStatus(): string {
    return this.status;
  }
  public getRoomNumber(): number {
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
