/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Sunday = "WEEKDAY",
  Monday = "WEEKDAY",
  Tuesday = "WEEKDAY",
  Wednesday = "WEEKDAY",
  Thursday = "WEEKDAY",
  Friday = "WEEKEND",
  Saturday = "WEEKEND",
}
function isWeekend(day: Week): boolean {
  if (day === "WEEKDAY") return true;
  else return false;
}
