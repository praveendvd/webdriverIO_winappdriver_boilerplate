describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        /*
                //use xpath
                 await (await $('//MenuItem[@Name="File"]')).click()
                 await browser.pause(10000)*/
        await (await $("//Edit[@AutomationId=\"LoginUserName_TxtBox\"]")).setValue("hiiiiiiiiiii")
        await browser.pause(10000)
           
    });
});


