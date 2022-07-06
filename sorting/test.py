from typing import List


def merge(arr: List[int], p: int, q: int, r: int):
    n1 = q - p + 1
    n2 = r - q
    print(n1, n2)
    L: List[int] = [0] * (n1+1)
    R: List[int] = [0] * (n2+1)
    for i in range(0, n1):
        L[i] = arr[p + i]

    for j in range(0, n2):
        R[j] = arr[q + j+1]
    print(L, R)
    L[n1] = 67777777
    R[n2] = 67777777
    i = 0
    j = 0
    for k in range(p, r+1):
        if (L[i] <= R[j]):
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1


def mergeSort(arr: List[int], p: int, r: int):
    if (p < r):
        q = ((p+r) // 2)
        print(arr, p, q, r)
        mergeSort(arr, p, q)
        mergeSort(arr, q + 1, r)
        merge(arr, p, q, r)


arr = [5, 2, 4, 6, 1, 3]
mergeSort(arr, 0, len(arr)-1)
print(arr)
