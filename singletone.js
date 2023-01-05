class HttpService {
  static instance = null;

  constructor(url) {
    this.url = url;
    HttpService.instance = this;
  }

  requestUserName(name) {
    console.log(`Found ${name} using ${this.url}`);
  }

  static getInstance() {
    return HttpService.instance;
  }
}

new HttpService('https://server.com');

const httpService = HttpService.getInstance();
const httpServiceWithSomeOtherUrl = HttpService.getInstance();

httpService.requestUserName('Jack');
httpServiceWithSomeOtherUrl.requestUserName('Marcel');
