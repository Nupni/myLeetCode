public class Solution {
    public bool BackspaceCompare(string s, string t) {
        int n= Math.Max(s.Count(a=>(a=='#')),t.Count(a=>(a=='#')));
        
        while(n --> 0){
            for (int i = 'a'; i <='z'; i++)
            { 
                s = s.Replace($"{(char)i}#", "");
                t = t.Replace($"{(char)i}#", "");
            }
        }
        
        return s.Replace("#","") == t.Replace("#","");
    }
}