def prev_element(arr, target):
    pre_ele = 0
    for ele in arr:
        if (ele == target):
            pre_ele = arr.index(target) - 1
            return arr[pre_ele]

    raise Exception("Not Found Element")


print(prev_element(["Kofi", "Ama", "Yaw"], "Kofi"))
