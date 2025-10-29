export class MedicalReport {
  private category: string;
  private pdfSrc: string;
  private dateTime: Date;
  private patientId: number;
  private adminId: number;
  private labNumber: number;

  constructor(
    category: string,
    pdfSrc: string,
    dateTime: Date,
    patientId: number,
    adminId: number,
    labNumber: number
  ) {
    this.category = category;
    this.pdfSrc = pdfSrc;
    this.dateTime = dateTime;
    this.patientId = patientId;
    this.adminId = adminId;
    this.labNumber = labNumber;
  }
  public setFile(file: File) {
    //this.file = file;
  }

  public getCategory(): string {
    return this.category;
  }
  public getPdf(): string {
    return this.pdfSrc;
  }
  public getDate(): Date {
    return this.dateTime;
  }
  public getPatientId(): number {
    return this.patientId;
  }
  public getAdminId(): number {
    return this.adminId;
  }
  public getLabNumber(): number {
    return this.labNumber;
  }
}
