#include <iostream>
using namespace std;

int main()
{
 int marks[5] = {2, 4, 1, 5, 6};
 int sum = 0;
 int arr_len = sizeof(marks) / sizeof(int);
 for (int i = 0; i < arr_len; i++)
 {
  sum += marks[i];
 }

 cout << "sum of the array is: ";
 cout << sum << endl;
 ;

 return 0;
}