def fibonacci(n)

 return 1 if n <= 2
 
 fibonacci(n -1) + fibonacci(n -2)
end



puts fibonacci(1)
puts fibonacci(2)
puts fibonacci(3)
puts fibonacci(4)
puts fibonacci(5)