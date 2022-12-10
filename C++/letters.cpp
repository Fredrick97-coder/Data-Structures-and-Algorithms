#include <iostream>
#include <string>
using namespace std;

int main()
{
 int user_input;
 char letter;
 int letter_int;
 string name;

 cout << "Enter your name here: ";
 cin >> name;

 int len_name = name.size();
 cout << "ASCII values for each letter of your name is: " << endl;
 for (int i = 0; i < len_name; i++)
 {
  letter_int = name[i];
  cout << name[i] << "\t"
       << "-"
       << "\t" << letter_int << endl;
 }

 // cout << "Starting from 65 to 122 type any number within this range to print it's letter:  ";
 // cin >> user_input;
 // letter = user_input;
 // cout << "Your ASCII value is: " << letter << endl;

 // cout << "Enter your letter here: ";
 // cin >> letter;
 // letter_int = letter;
 // cout << letter_int << endl;

 return 0;
}