public class Solution {
    public IList<int> GetRow(int rowIndex) {
        int n = rowIndex + 1;
        int[] array = new int[n];

        array[0] = 1;
        
        for (int i = 1; i < n; i++) {
            for (int j = i; j > 0; j--) {
                array[j] = array[j] + array[j - 1];
            }
        }
        return array;
    }
}