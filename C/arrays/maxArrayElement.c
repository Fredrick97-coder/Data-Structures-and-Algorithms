#include <stdio.h>

int main(void)
{
 int marks[10] = {50, 2, 11, 4, 5, 6, 49, 8, 9, 100};

 int arr_len = sizeof(marks) / sizeof(marks[0]);
 int sum = 0;
 int maxEle = 0;

 for (int i = 0; i < arr_len; i++)
 {
  if (marks[i] > maxEle)
   maxEle = marks[i];
  sum += marks[i];
 }

 printf("The highest number is %d\n", maxEle);
 printf("The sum of the array is: %d\n", sum);

 return 0;
}