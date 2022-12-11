#include <stdio.h>

/**
 * main - Fibonacci series
 *
 * description - The main functions prints out the Fibonacci series
 *
 * return - return(0) - success
 */

int Fibonacci(int n)
{
 if (n <= 2)
  return (1);

 return Fibonacci(n - 1) + Fibonacci(n - 2);
}

int main(void)
{
 int user_input, series;
 printf("Please enter the number of fibonacci series you want: ");
 scanf("%d", &user_input);
 series = Fibonacci(user_input);

 printf("Your Fibonacci series is: %d\n", series);
 return (0);
}
