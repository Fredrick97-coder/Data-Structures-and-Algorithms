def is_present(arr, target):
    for item in arr:
        if item == target:
            return True
    return False


print(is_present([1, 2, 3], 3))  # True
