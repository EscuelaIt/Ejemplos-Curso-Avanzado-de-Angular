class Service1 {
  constructor(service: Service2) {}
}

class Service2 {
  constructor(service: Service3) {}
}

class Service3 {
  constructor() {}
}

const serv1 = new Service1(new Service2(new Service3))