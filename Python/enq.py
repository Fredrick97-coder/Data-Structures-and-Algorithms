from os import *
from sys import *
from collections import *
from math import *


class NQueue:

    def __init__(self, n, s):
        self.n = n
        self.s = s
        self.sol = []
        self.count = 0
        self.board = [[0 for i in range(n)] for j in range(n)]
        self.solve(0)

        pass

    def enqueue(self, x, y):
        for i in range(self.n):
            self.board[x][i] = 1
            self.board[i][y] = 1
        for i in range(self.n):
            for j in range(self.n):
                if (i + j == x + y) or (i - j == x - y):
                    self.board[i][j] = 1
        self.board[x][y] = 2
        pass

    def dequeue(self, x, y):
        for i in range(self.n):
            self.board[x][i] = 0
            self.board[i][y] = 0
        for i in range(self.n):
            for j in range(self.n):
                if (i + j == x + y) or (i - j == x - y):
                    self.board[i][j] = 0
        self.board[x][y] = 0
        pass


res = NQueue(8, 0)
print(res.count)
