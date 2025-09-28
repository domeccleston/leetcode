def convert(s, numRows):
    """
    Convert string to zigzag pattern and read line by line.

    Args:
        s: Input string
        numRows: Number of rows in zigzag pattern

    Returns:
        String read line by line from zigzag pattern
    """
    # Edge case: if only 1 row or string length <= numRows, return original string
    if numRows == 1 or len(s) <= numRows:
        return s

    # Create array to store characters for each row
    rows = [''] * numRows

    # Track current row and direction
    current_row = 0
    going_down = True

    # Process each character
    for char in s:
        # Add character to current row
        rows[current_row] += char

        # Move to next row based on direction
        if going_down:
            current_row += 1
        else:
            current_row -= 1

        # Change direction when reaching top or bottom
        if current_row == numRows - 1:  # Reached bottom
            going_down = False
        elif current_row == 0:  # Reached top
            going_down = True

        print(rows)
        print("".join(rows))


    # Combine all rows
    result = ''.join(rows)
    return result


# Test with examples
def test_convert():
    # Example 1
    result1 = convert("PAYPALISHIRING", 3)
    print(f'Example 1: "{result1}"')
    print(f'Expected:  "PAHNAPLSIIGYIR"')
    print(f'Match: {result1 == "PAHNAPLSIIGYIR"}\n')

    # Example 2
    result2 = convert("PAYPALISHIRING", 4)
    print(f'Example 2: "{result2}"')
    print(f'Expected:  "PINALSIGYAHRPI"')
    print(f'Match: {result2 == "PINALSIGYAHRPI"}\n')

    # Example 3
    result3 = convert("A", 1)
    print(f'Example 3: "{result3}"')
    print(f'Expected:  "A"')
    print(f'Match: {result3 == "A"}\n')

    # Additional test
    result4 = convert("ABCD", 2)
    print(f'Additional test: "{result4}"')
    # Pattern would be:
    # A C
    # B D
    # So result should be "ACBD"
    print(f'Expected: "ACBD"')
    print(f'Match: {result4 == "ACBD"}')

# Run tests
test_convert()
