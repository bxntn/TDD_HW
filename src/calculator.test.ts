import {Add} from './calculator'

test('empty string',()=>{
    expect(Add("")).toBe(0)
});

test('1',()=>{
    expect(Add("1")).toBe(1)
});

test('1,2',()=>{
    expect(Add("1,2")).toBe(3)
});

test('1,2,3',()=>{
    expect(Add("1,2,3")).toBe(6)
});

test('1,2\n3',()=>{
    expect(Add("1,2\n3")).toBe(6)
});

test('1,2,',()=>{
    expect(()=>{
        Add("1,2,")
    }).toThrow();
});

test('//;\n1;3',()=>{
    expect(Add("//;\n1;3")).toBe(4)
});

test('//|\n1|2|3',()=>{
    expect(Add("//|\n1|2|3")).toBe(6)
});

test('//sep\n2sep5',()=>{
    expect(Add("//sep\n2sep5")).toBe(7)
});

test('//|\n1|2,3',()=>{
    expect(()=>{
        Add("//|\n1|2,3")
    }).toThrow("‘|’ expected but ‘,’ found at position 3.");
});

test('1,-2',()=>{
    expect(()=>{
        Add("1,-2")
    }).toThrow("Negative number(s) not allowed: -2");
});

test('2,-4,-9',()=>{
    expect(()=>{
        Add("2,-4,-9")
    }).toThrow("Negative number(s) not allowed: -4, -9");
});

test('//|\n1|2,-3',()=>{
    expect(()=>{
        Add("//|\n1|2,-3")
    }).toThrow("Negative number(s) not allowed: -3\n‘|’ expected but ‘,’ found at position 3.");
});

test('2,1001',()=>{
    expect(Add("2,1001")).toBe(2)
});

test('//|\n1|23,-34',()=>{
    expect(()=>{
        Add("//|\n1|23,-34")
    }).toThrow("Negative number(s) not allowed: -34\n‘|’ expected but ‘,’ found at position 4.");
});

// test('//|\n1|23sep-34',()=>{
//     expect(()=>{
//         Add("//|\n1|23sep-34")
//     }).toThrow("Negative number(s) not allowed: -34\n‘|’ expected but ‘sep’ found at position 4.");
// });