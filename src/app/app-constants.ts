export class AppConstants {


  public static get baseServidor(): string{'http://localhost:8080/'}

  public static get baseLogin(): string {return this.baseServidor + 'restapi/login'}

  public static get baseurl(): string {return this.baseServidor + 'restapi/usuario'}




}
