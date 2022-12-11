#include <iostream>
using namespace std;

int main()
{
 long int number = 121212121212121212;
 int number_int = number;
 unsigned short int number_short_u = 2333;
 signed short int number_short_s = 2333;
 bool is_tall = true;
 char gender = 'F';
 float salary = 34.455;
 double correlation = 23.345456768789897;

 cout << "long int: " << number << endl;
 cout << "copying long int into int results in overflow: " << number_int << endl;
 cout << "signed short int: " << sizeof(number_short_s) << endl;
 cout << "unsigned short int: " << sizeof(number_short_u) << endl;
 cout << "boolean: " << sizeof(is_tall) << endl;
 cout << "char: " << sizeof(gender) << endl;
 cout << "float: " << sizeof(salary) << endl;
 cout << "double: " << sizeof(correlation) << endl;

 return 0;
}