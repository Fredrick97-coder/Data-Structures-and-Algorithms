#include <stdio.h>

int main()
{
 int ages[10];
 ages[1] = 10;

 char name[4] = {'a', 'b', 'c', 'd'};
 char students[5][2] = {{'a', 'b'}, {'c', 'd'}, {'e', 'f'}, {'g', 'h'}, {'i', 'j'}};

 // printf("%d%c", ages[1], name[1]);
 printf("%c%c", students[1][0], students[1][1]);
}