#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string str)
{
 for (int i = 0; i < str.length(); i++)
 {
  char revStr = str.size() - 1 - i;
  if (str[i] != str[revStr])
  {
   return false;
  }
 }
 return true;
}

int main()
{
 string userInput;

 cout << "Please enter any word to check if it's a palindrome: ";
 cin >> userInput;
 if (isPalindrome(userInput))
  cout
      << "true" << endl;
 else
  cout << "false" << endl;

 return 0;
}