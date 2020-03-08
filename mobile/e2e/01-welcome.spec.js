const {
	device, expect, element, by, waitFor
} = require('detox');

describe('Example', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
    await device.launchApp({newInstance: true});
  });

  // it('should have Splash screen', async () => {
  //   await expect(element(by.text('Splash'))).toBeVisible();
  //   done()
  // });

  it('should have login screen', async () => {
    await expect(element(by.id('Login'))).toBeVisible();
    await expect(element(by.text('Developer'))).toBeVisible();
    await element(by.id('ForgetPasswordBtn')).tap();
    // done()
  });
  


 

  // it('should have Splash screen', async () => {
  //   await expect(element(by.text('Splash'))).toBeVisible();
  //   done()
  // });
  

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Cases'))).toBeVisible();
  // });
  
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});