#include <iostream>
#include <float.h>
using namespace std;

int main()
{
 int marks[5] = {2, 4, 1, 5, 6};
 float avg_marks = 0;
 int sum = 0;
 int arr_len = sizeof(marks) / sizeof(int);
 int h_marks = 0;

 for (int i = 0; i < arr_len; i++)
 {
  sum += marks[i];
  if (marks[i] > h_marks)
  {
   h_marks = marks[i];
  }
 }

 avg_marks = sum / float(arr_len);
 cout << "sum of the array is: " << sum << endl;
 cout << "average of the marks is: " << avg_marks << endl;
 cout << "Size of sum stored in memory: " << sizeof(sum) << "byte(s)" << endl;
 cout << "The highest mark is: " << h_marks << endl;

 return 0;
}
