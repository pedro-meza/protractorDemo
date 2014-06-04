'use strict';

describe('load main page', function () {
  it('should load main page', function() {
     browser.get('http://localhost:9000');
     expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/main');
  }); 
});

xdescribe('Use a Mock Service', function() {
  beforeEach(function($httpBackend){
    console.log('########[ BEFORE_EACH ]######');
    httpMock = $httpBackend;
  });

  it('should return some hoff tv history', function() {
	httpMock.expectGET('/data').respond('pig');
	httpMock.flush();
  });
});

describe('login Correct Credentials', function() {
  it('should let me in', function() {
    var inputName = element(by.model('user.name'));
    browser.debugger();
    inputName.sendKeys('admin');
    browser.debugger();
  });
});

xdescribe('login as Admin', function() {
  it('should show login error with bad credentials', function() {
    var loginButton = element(by.id('loginButton'));    
    browser.debugger();
    loginButton.click();
    console.log('BUTTON CLICK');
    browser.debugger();
    var errorDiv = element(by.className('alert'));
    expect(errorDiv.isDisplayed()).toBeTruthy();
  });

  it('should allow Admin credentials', function() {
    browser.debugger();
    element(by.model("user.name")).sendKeys('admin');    
    browser.debugger();
    element(by.model("user.password")).sendKeys('password');    
    browser.debugger();
    var loginButton = element(by.id('loginButton'));    
    loginButton.click();

    //HAS LOGOUT USER
    //var userText = element(by.xpath('//*[@id="site-navigation"]/ul/li[5]/a/div/a/text()'));
    var userText = element(by.xpath('//*[@id="site-navigation"]/ul/li[5]/a/div/a'));
    console.log('#############[ USER_ELEMENT ]#############');
    console.log('userText::tagName()='+userText.getTagName());
    console.log('userText='+userText.getText());
    expect(userText.getText()).toBe('Logout [admin]');
    browser.debugger();
  });
});

describe('IS_END', function() {
  it('LAST_TEST', function() {
    console.log('##############[ LAST_TEST ]##################');
    browser.debugger();
  });
});

