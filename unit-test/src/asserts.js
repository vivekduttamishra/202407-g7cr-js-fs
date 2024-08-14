function assertEquals(expectedResult, actualResult){
    if(expectedResult!== actualResult)
        throw new Error(`Expected ${expectedResult} got ${actualResult}`);
}

function assertTrue(condition){
    assertEquals(true, condition);
}
function assertFalse(condition){
    assertEquals(false, condition);
}

function assertNull(value){
    assertEquals(null, value);
}

function assertNotEquals(unexpectedResult, actualResult){
    assertTrue(unexpectedResult!== actualResult);
}

function assertNotNull(value){
    assertFalse(null, value);
}


module.exports={
    assertEquals, 
    assertTrue, 
    assertFalse, 
    assertNull,
    assertNotEquals, 
    assertNotNull
}