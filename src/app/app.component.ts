import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "stop-watch";
  public milliSecond: number = 0;
  public seconds: number = 0;
  public minutes: number = 0;
  public hour: number = 0;
  public isStopped: boolean = false;

  public increaseTime(counter: number): void {
    if (this.isStopped) {
      setTimeout(() => {
        this.milliSecond = ++counter;
        if (this.milliSecond === 100) {
          this.milliSecond = 0;
          ++this.seconds;
        }
        this.increaseTime(this.milliSecond);
      }, 10);
    }
  }

  public startTime(counter: number): void {
    this.isStopped = true;
    this.increaseTime(counter);
  }

  public stopTime(): void {
    this.milliSecond = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hour = 0;
    this.isStopped = false;
  }
}
