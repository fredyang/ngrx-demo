let id = 0;

export class Debug {
  id = ++id;

  logId() {
    console.log(`component ${this.id} running change detection`);
  }
}
