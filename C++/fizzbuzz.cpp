#include <iostream>
#include <string>
using namespace std;

string fizzBuzz(int num)
{

 for (int i = 1; i <= num; i++)
 {
  if (i % 15 == 0)
   cout << "fizzbuzz: " << i << endl;

  else if (i % 3 == 0)
   cout << "fizz: " << i << endl;

  else if (i % 5 == 0)
   cout << "buzz: " << i << endl;
 }
 return "";
}

int main()
{
 string result = fizzBuzz(3);

 cout << result << endl;

 return 0;
}