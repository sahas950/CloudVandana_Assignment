import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        boolean isPangram = checkIfPangram(input.toLowerCase()); // Convert to lowercase for case insensitivity

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String s) {
        boolean[] isPresent = new boolean[26];

        for (char c : s.toCharArray()) {
            if ('a' <= c && c <= 'z') {
                isPresent[c - 'a'] = true;
            }
        }

        // Check if all alphabet letters are present
        for (boolean present : isPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
