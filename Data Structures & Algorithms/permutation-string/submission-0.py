class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if (len(s1) > len(s2)):
            return False

        s1_count = [0] * 26
        for char in s1:
            char_index = ord(char) - 97
            s1_count[char_index] += 1
        
        l, r = 0, len(s1) - 1

        while (r < len(s2)):
            s2_count = [0] * 26
            sub_s2 = s2[l:r+1]
            for char in sub_s2:
                char_index = ord(char) - 97
                s2_count[char_index] += 1
            print(s2_count)
            if (s1_count == s2_count):
                return True
            l += 1
            r += 1

        return False