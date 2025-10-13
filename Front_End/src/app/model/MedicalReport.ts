export class MedicalReport {
  public category: string;
  public pdfSrc: string;
  public localDateTime: string;
  public patientId: number;
  public adminId: number;
  public labNumber: number;
  public file: File;

  constructor(
    category: string,
    pdfSrc: string,
    localDateTime: string,
    patientId: number,
    adminId: number,
    labNumber: number,
    file: File
  ) {
    this.category = '';
    this.pdfSrc = '';
    this.localDateTime = '';
    this.patientId = 0;
    this.adminId = 0;
    this.labNumber = 0;
    this.file = file;
  }
  public setFile(file: File) {
    this.file = file;
  }
}
