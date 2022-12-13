#include <iostream>
using namespace std;

int main()
{
 int x = 12;
 int y = x++;
 int z = ++x;

 cout << "X: " << x << endl
      << "Y: " << y << endl
      << "Z: " << z << endl;

 return 0;
}