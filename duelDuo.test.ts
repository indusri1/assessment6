
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
   await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the draw button displays the div with id = “choices”', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    drawButton.click()
    await driver.sleep(4000)
    const options = await driver.findElement(By.id('choices'))
    const display = await options.isDisplayed()
    expect(display).toBe(true)
})


test('testing to see if the add to duo button exists', async () => {
    const addToDuoButton =  await driver.findElement(By.id('player-duo'))
    expect(addToDuoButton.isDisplayed()).toBeTruthy()
    await driver.sleep(4000)
})
