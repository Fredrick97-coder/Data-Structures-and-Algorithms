#include <iostream>
using namespace std;

int addNum(int a, int b)
{
 return a + b;
}

int main(void)
{
 int addition, a, b;

 cout << "Enter your first number: ";
 cin >> a;
 cout << "Enter your second number: ";
 cin >> b;

 addition = addNum(a, b);
 cout << addition << endl;
 return 0;
}