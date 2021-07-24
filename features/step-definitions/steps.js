
Given("Adding {int} and {int}", async function (first,second) {
    await (await $(`//*[@AutomationId=\"num${first}Button\"]`)).click()
    await (await $("//*[@AutomationId=\"plusButton\"]")).click()
    await (await $(`//*[@AutomationId=\"num${second}Button\"]`)).click()
    
});

Then('Result should be {int}',async(result)=>{
    
    await (await $(`//*[@AutomationId=\"equalButton\"]`)).click()
    
    let result2= (await (await $(`//*[@AutomationId=\"CalculatorResults\"]`)).getText()).split("Display is ")[1]
    console.log("hiiiiiiiiiiiiiiiii",result2)
    expect(Number(result2)).toBe(result)
    
    
})