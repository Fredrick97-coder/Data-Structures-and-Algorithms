#include <iostream>
#include <iomanip>
using namespace std;

/*

print the average of given user input to 4 decimal places
NB: to four(4) decimal places

*/

int main()
{
 int a, b, c, d;

 cin >> a >> b >> c >> d;

 int sum = a + b + c + d;
 cout << fixed << setprecision(4) << (float)sum / 4 << endl;

 return 0;
}