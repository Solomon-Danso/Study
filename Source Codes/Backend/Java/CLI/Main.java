public class Main{

    public static void main(String[]args){
        System.out.println("In the making of a champion");
        System.out.println("Harder on the training ground, easy on the battle field");

        String Solomon = "This is my name Solomon Danso";
        System.out.println(Solomon);

        int x = 10;
        int y = 20;
        System.out.println(x*x + 2*x*y + y*y);

        byte b = 50;
        System.out.println(b);

        float x2 = 5.68f;
        System.out.println(x2);

        float f1 = 35e3f;
        double d1 = 12E4d;
        System.out.println(d1);

        //In Java, float ends with f;
        //In Java, double ends with d;

    System.out.println("For ASCII, we can assign a number to a variable");
        char myVar1 = 65;
        char myVar2 = 66;
        char myVar3 = 67;

    System.out.println(myVar1);//The letter printed out is A

    /*Automatic Type Casting  */
    int myInt = 9;
    double myDouble = myInt;
    System.out.println(myDouble);

    /*Narrow Type Casting */
    double myDouble1  = 9.78d;
    int myInt1 = (int) myDouble1;
    System.out.println(myInt1);

    int x3 = 15;
    System.out.println(x3>5 && x3>10);

    String txt = "SolomonDansoKofiHydrogen1";
   
    System.out.println("The length is "+txt.length());

    System.out.println("Uppercase: "+txt.toUpperCase());
    System.out.println("Lowercase: "+txt.toLowerCase());

    String txt2 = "Please locate where 'locate' occurs!";
    System.out.println(txt2.indexOf("locate"));

    String first = "John";
    String second = "Doe";

    System.out.println(first.concat(second));
    
    /*Maths Formulae  */
    int w = 15;
    int h = 20;
    int t = 84;
    double abs = -4.7;
    int randomNum = (int)(Math.random() * 101);
   
    System.out.println( Math.max(w, h) );
    System.out.println( Math.min(w, h) );
    System.out.println( Math.sqrt(t) );
    System.out.println( Math.abs(abs) );
    System.out.println( Math.random() );
    System.out.println( randomNum );
    System.out.println(10>9);

    int myAge = 25;
    int votingAge = 18;
    System.out.println(myAge >= votingAge);


/*Conditional Programming */

    if(20>18){
        System.out.println("20 is greater than 18");
    }else{
        System.out.println("20 is less than 18");
    }

    int time = 20;

    String result = (time<18)?"Good Day":"Bad Day";
    System.out.println(result);

    switch(time){
        case 10:
            System.out.println("Time is 10");
            break;

        case 20:
            System.out.println("Time is 20");
            break;
        default:
            System.out.println("Time is Time");



    }

    int i = 0;
    while(i<5){
        System.out.println("The current i is " + i);
        i++;
    }

do {
  System.out.println(i);
  i++;
}
while (i < 5);

/*Nested Loops */
for (int k=0; k<3; k++){
System.out.println("K is running " + k+" times");

for (int j=0; j<5; j++){
    System.out.println("For Every "+k+" times, the current j is " + j);
}

//If K runs 1, all J loop will be completed before K moves to the next 1 
/*

K is running 0 times
For Every 0 times, the current j is 0
For Every 0 times, the current j is 1
For Every 0 times, the current j is 2
For Every 0 times, the current j is 3
For Every 0 times, the current j is 4
K is running 1 times
For Every 1 times, the current j is 0
For Every 1 times, the current j is 1
For Every 1 times, the current j is 2
For Every 1 times, the current j is 3
For Every 1 times, the current j is 4
K is running 2 times
For Every 2 times, the current j is 0
For Every 2 times, the current j is 1
For Every 2 times, the current j is 2
For Every 2 times, the current j is 3
For Every 2 times, the current j is 4

 */


}

/*Arrays  */

int IArray [] = {0,1,2,3,4,5,6,7,8,9,10,11};

for (int q : IArray){
    System.out.println(q);
}

String Fruit [] = {"Mango", "Watermelon", "Orange","Pawpaw"};

System.out.println(Fruit[0]);

Fruit[0] = "Guava";
System.out.println(Fruit[0]);

System.out.println(Fruit.length);

for (int a=0; a<Fruit.length; a++){
    System.out.println(Fruit[a]);
}

int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // Outputs 7

/*
Explanation: 
For myNumbers[1][2], it can be interpreted as 
myNumbers [Index of Array_To_Pick] [Index of Object To Select From the selected array]
So 
myNumbers[1][2], The [1] will select the second array since array start from zero 0 
that is {5, 6, 7}, the [2] will select the object of the selected array which will be 7


 */

/*Looping Through A Multidimensional array */
for(int[] l:myNumbers){
    for(int nice:l){
        System.out.println(nice);
    }
}






















    }
}