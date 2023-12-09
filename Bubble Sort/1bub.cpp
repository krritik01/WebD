// #include<bits/stdc++.h>
// using namespace std;

// void bubblesort(int arr[],int n){
//     for (int i = 0; i<n; i++){
//         for (int j = 0; j<n-1; j++){
//             // for (int j = 0; j<n-i-1; j++){ we can also use this
//             if(arr[j]>arr[j+1])
//              swap(arr[j],arr[j+1]);
//         }   
//     }
// }
//  void printArray(int arr[],int n){
//     for (int i = 0; i < n; i++){
//         cout<<arr[i]<<" ";
//     }
//  }

// int main(){
//     int arr[7]={13,4,34,6,3,65,23};
//     int size=sizeof(arr)/sizeof(arr[0]);
//     bubblesort(arr,size);
//     printArray(arr,size);
//     return 0;
// }




// Optimized code
#include<bits/stdc++.h>
using namespace std;
void bubblesort(int arr[],int n){
    bool swapped;
    for (int i = 0; i < n; i++){
         swapped = false;
        for (int j = 0; j<n-1; j++){
            if(arr[j]>arr[j+1])
            swap(arr[j],arr[j+1]);
            swapped=true;
        } 
        if(swapped==false)
    break;
    }   
}
void printArray(int arr[],int n){
    for (int i = 0; i < n; i++){
        cout<<arr[i]<<" ";
    }
 }

int main(){
    int arr[7]={13,4,34,6,3,65,23};
    int size=sizeof(arr)/sizeof(arr[0]);
    bubblesort(arr,size);
    printArray(arr,size);
    return 0;
}