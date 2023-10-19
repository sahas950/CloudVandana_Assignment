import java.util.Random;

public class ArrayShuffle {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        
        // Print the shuffled array
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }
    
    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random rand = new Random();
        
        for (int i = n - 1; i > 0; i--) {
            int randIndex = rand.nextInt(i + 1);
            
            // Swap array[i] and array[randIndex]
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }
}
