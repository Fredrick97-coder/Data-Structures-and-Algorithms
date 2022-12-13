#include <stdio.h>
#include <string.h>

int isPalindrome(char *str)
{
  int len = strlen(str);
  for (int i = 0; i < len; i++)
  {
    if (str[i] != str[strlen(str) - 1 - i])
      return 0;
  }
  return 1;
}

int main()
{
  char userInput[100];
  printf("Please enter your word: ");
  scanf("%s", userInput);

  if (isPalindrome(userInput))
    printf("\"%s\" is a palindrome\n", userInput);
  else
    printf("\"%s\" is not a palindrome\n", userInput);

  return (0);
}