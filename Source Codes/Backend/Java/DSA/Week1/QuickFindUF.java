public class QuickFindUF{

//Define a global variable
private int[] Id; 

    public QuickFindUF(int N) {
        //Create a new ArrayList
        Id = new int[N];
        for (int i = 0; i < N; i++){
        /*
        
        The loop will start counting from 0 to the number set. For Example 5; 
        Id[0] = 0;
        Id[1] = 1;
        Id[2] = 2;
        Id[3] = 3;
        Id[4] = 4;

         */    
            Id[i] = i;
        }
    }
//A boolean which will check if the numbers are equal
    public boolean connected(int p, int q){
        return Id[p] == Id[q];
    }

/*
union(5,6)
First let treat 5 and 6 as keys in the array 
int pid = Id[5] will get the value of pid and let assume the value is 7 
int qid = Id[6] will get the value of qid and let assume the value is 8 

for (int i = 0; i <10; i++)

if the value of Id[i] is equal to pid that is 7,
then the value of Id[i] will be updated with qid

So we are replacing the value of the pid with the value of the qid

 */

    public void union(int p, int q){
       int pid = Id[p];
       int qid = Id[q];
       for (int i = 0; i <Id.length; i++){
        if (Id[i] == pid){
            Id[i] = qid;
        }

       }
    }




}